import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import type { Map as MapLibreMap, Marker as MapLibreMarker } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Search, Plus, Minus, RotateCcw, MapPin, X, CheckCircle2 } from 'lucide-react';
import { filterProjectClusters, type ImpactTotals, type WaterProjectCluster } from '../utils/donationLogic';
import { PROJECT_CLUSTERS } from '../data/otooData';

export interface ImpactMapSectionProps {
  totals: ImpactTotals;
  onFundProject: (country: string) => void;
}

// Carto Dark Matter raster style - 100% reliable, zero-config, no cross-origin worker script requirements
const CARTO_DARK_STYLE: any = {
  version: 8,
  sources: {
    'carto-dark': {
      type: 'raster',
      tiles: [
        'https://a.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}@2x.png',
        'https://b.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}@2x.png',
        'https://c.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}@2x.png',
      ],
      tileSize: 256,
      attribution: '&copy; OpenStreetMap, &copy; CARTO',
    },
  },
  layers: [
    {
      id: 'carto-dark-layer',
      type: 'raster',
      source: 'carto-dark',
      minzoom: 0,
      maxzoom: 19,
    },
  ],
};

const HOME_CENTER: [number, number] = [-1.75, 5.1167];
const HOME_ZOOM = 7.0;

export function ImpactMapSection({ totals, onFundProject }: ImpactMapSectionProps) {
  const [selectedCountry, setSelectedCountry] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCluster, setActiveCluster] = useState<WaterProjectCluster | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const [svgZoom, setSvgZoom] = useState<number>(1);
  const [svgCenter, setSvgCenter] = useState<{ x: number; y: number }>({ x: 500, y: 250 });
  const [mapLibreReady, setMapLibreReady] = useState(false);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const markerCtorRef = useRef<typeof MapLibreMarker | null>(null);
  const markersRef = useRef<MapLibreMarker[]>([]);

  const countries = useMemo(() => Array.from(new Set(PROJECT_CLUSTERS.map((c) => c.country))).sort(), []);
  const filteredClusters = useMemo(
    () => filterProjectClusters(PROJECT_CLUSTERS, selectedCountry, searchQuery),
    [selectedCountry, searchQuery],
  );

  const clustersRef = useRef(filteredClusters);
  clustersRef.current = filteredClusters;

  const renderMarkers = useCallback((clusters: WaterProjectCluster[]) => {
    const map = mapRef.current;
    const MarkerCtor = markerCtorRef.current;
    if (!map || !MarkerCtor) return;

    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    clusters.forEach((cluster) => {
      const el = document.createElement('button');
      el.type = 'button';
      el.setAttribute('aria-label', `${cluster.country}: ${cluster.projectCount} projects`);
      el.className = 'otoo-map-marker';
      el.innerHTML = `<span class="otoo-map-marker__count">${cluster.countLabel}</span>`;
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        setActiveCluster(cluster);
      });

      const marker = new MarkerCtor({ element: el, anchor: 'center' })
        .setLngLat([cluster.lng, cluster.lat])
        .addTo(map);
      markersRef.current.push(marker);
    });
  }, []);

  // Initialize MapLibre GL with fallback detection
  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container || mapRef.current) return;

    let cancelled = false;
    let mapInstance: MapLibreMap | null = null;

    const bootMap = async () => {
      try {
        const lib = await import('maplibre-gl');
        if (cancelled || !container) return;

        if (typeof (lib as any).supported === 'function' && !(lib as any).supported()) {
          console.info('WebGL not supported, using high-definition SVG vector map engine');
          return;
        }

        markerCtorRef.current = lib.Marker;

        mapInstance = new lib.Map({
          container,
          style: CARTO_DARK_STYLE,
          center: HOME_CENTER,
          zoom: HOME_ZOOM,
          minZoom: 2,
          maxZoom: 14,
          attributionControl: { compact: true },
          dragRotate: false,
          pitchWithRotate: false,
        });

        mapRef.current = mapInstance;

        mapInstance.on('load', () => {
          if (cancelled) return;
          setMapLibreReady(true);
          renderMarkers(clustersRef.current);
        });

        // Safety fallback: if style takes time, render markers anyway
        setTimeout(() => {
          if (!cancelled && mapInstance && !mapLibreReady) {
            setMapLibreReady(true);
            renderMarkers(clustersRef.current);
          }
        }, 600);

        mapInstance.on('error', (e) => {
          console.warn('MapLibre GL tile notification:', e);
        });
      } catch (err) {
        console.warn('MapLibre fallback to SVG engine:', err);
      }
    };

    void bootMap();

    return () => {
      cancelled = true;
      markersRef.current.forEach((m) => m.remove());
      markersRef.current = [];
      mapInstance?.remove();
      mapRef.current = null;
      markerCtorRef.current = null;
    };
  }, [renderMarkers, mapLibreReady]);

  // Sync markers when filtered clusters change
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    renderMarkers(filteredClusters);
  }, [filteredClusters, renderMarkers]);

  // React to country selection
  useEffect(() => {
    if (selectedCountry !== 'ALL') {
      const match = PROJECT_CLUSTERS.find((c) => c.country === selectedCountry);
      if (match) {
        if (mapRef.current) {
          mapRef.current.flyTo({ center: [match.lng, match.lat], zoom: 8, speed: 1.2 });
        }
        setSvgCenter({ x: match.mapX, y: match.mapY });
        setSvgZoom(2.4);
        setActiveCluster(match);
      }
    } else {
      if (mapRef.current) {
        mapRef.current.flyTo({ center: HOME_CENTER, zoom: HOME_ZOOM, speed: 1.2 });
      }
      setSvgCenter({ x: 500, y: 250 });
      setSvgZoom(1);
      setActiveCluster(null);
    }
  }, [selectedCountry]);

  const handleZoomIn = () => {
    if (mapRef.current) {
      mapRef.current.zoomIn({ duration: 300 });
    }
    setSvgZoom((prev) => Math.min(prev * 1.4, 4));
  };

  const handleZoomOut = () => {
    if (mapRef.current) {
      mapRef.current.zoomOut({ duration: 300 });
    }
    setSvgZoom((prev) => Math.max(prev / 1.4, 0.8));
  };

  const handleResetView = () => {
    setSelectedCountry('ALL');
    setSearchQuery('');
    setActiveCluster(null);
    setSvgCenter({ x: 500, y: 250 });
    setSvgZoom(1);
    if (mapRef.current) {
      mapRef.current.flyTo({ center: HOME_CENTER, zoom: HOME_ZOOM, speed: 1.2 });
    }
  };

  // SVG viewBox calculation for smooth responsive pan and zoom
  const viewBoxWidth = 1000 / svgZoom;
  const viewBoxHeight = 500 / svgZoom;
  const viewBoxX = Math.max(0, Math.min(1000 - viewBoxWidth, svgCenter.x - viewBoxWidth / 2));
  const viewBoxY = Math.max(0, Math.min(500 - viewBoxHeight, svgCenter.y - viewBoxHeight / 2));

  return (
    <section id="impact-map" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="h-[68%] bg-[#1E1B6B]" />
        <div className="h-[32%] bg-[#E8F7F0]" />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 pt-20 lg:pt-24 pb-16 lg:pb-20">
        <div className="text-center max-w-[760px] mx-auto mb-12 lg:mb-14">
          {/* Unboxed tracked eyebrow - NO pills */}
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#3FBD92] mb-3">
            Radical Proof & Open Data
          </p>
          <h2 className="font-serif text-white text-[34px] sm:text-[42px] lg:text-[46px] leading-[1.16] font-normal">
            Know that your donation is making a difference
          </h2>
          <p className="mt-5 text-[15px] sm:text-[16px] leading-[1.68] text-[#D5D5EA] max-w-[680px] mx-auto">
            Otoo Foundation uses 100% of your donation to fund clean water around the world and then
            proves every single project you fund, complete with GPS coordinates and photos. Give
            water. Get proof. Every single time.
          </p>
        </div>

        <div className="rounded-[10px] overflow-hidden bg-[#1E1B6B] border border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
          {/* Dashboard Header Bar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/12 bg-[#131052]">
            <div className="lg:col-span-6 px-6 py-5 sm:px-8 sm:py-6 flex items-center gap-4 border-b lg:border-b-0 lg:border-r border-white/12">
              <div className="bg-white rounded-[4px] px-3 py-2 shrink-0">
                {/* Official Otoo Foundation Logo */}
                <img src="/brand/logo.jpg" alt="Otoo Foundation CIC" className="h-10 w-auto object-contain" />
              </div>
              <div>
                <p className="font-serif text-white text-[26px] sm:text-[30px] leading-tight font-normal tracking-[0.02em]">
                  Otoo Foundation
                </p>
                <p className="text-[12px] text-[#A5A5C4] mt-0.5">Live tracking dashboard</p>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-3 divide-x divide-white/12">
              <div className="px-4 py-4 sm:px-6 sm:py-5 flex flex-col items-center justify-center text-center">
                <p data-testid="kpi-people-served" className="font-serif text-white text-[20px] sm:text-[26px] leading-tight tabular-nums">
                  {totals.peopleServed.toLocaleString('en-GB')}
                </p>
                <p className="text-[11px] sm:text-[12px] text-[#B3B3D1] mt-1 font-bold uppercase tracking-wider">
                  people served
                </p>
              </div>
              <div className="px-4 py-4 sm:px-6 sm:py-5 flex flex-col items-center justify-center text-center">
                <p data-testid="kpi-water-projects" className="font-serif text-white text-[20px] sm:text-[26px] leading-tight tabular-nums">
                  {totals.waterProjects.toLocaleString('en-GB')}
                </p>
                <p className="text-[11px] sm:text-[12px] text-[#B3B3D1] mt-1 font-bold uppercase tracking-wider">
                  water projects
                </p>
              </div>
              <div className="px-4 py-4 sm:px-6 sm:py-5 flex flex-col items-center justify-center text-center">
                <p data-testid="kpi-countries" className="font-serif text-white text-[20px] sm:text-[26px] leading-tight tabular-nums">
                  {totals.countries}
                </p>
                <p className="text-[11px] sm:text-[12px] text-[#B3B3D1] mt-1 font-bold uppercase tracking-wider">
                  countries
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Map Canvas Container */}
          <div className="relative bg-[#0E0C3D] h-[460px] sm:h-[540px] overflow-hidden select-none">
            {/* 1. Base Interactive SVG Vector Map: Always drawn immediately */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox={`${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`}
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#262274" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#0E0C3D" stopOpacity="1" />
                </radialGradient>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="0.5" />
                </pattern>
                <filter id="pinShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.6" />
                </filter>
              </defs>

              {/* Ocean / Background */}
              <rect x="0" y="0" width="1000" height="500" fill="url(#mapGlow)" />
              <rect x="0" y="0" width="1000" height="500" fill="url(#grid)" />

              {/* Graticule Latitude Lines */}
              <line x1="0" y1="250" x2="1000" y2="250" stroke="#3FBD92" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="185" x2="1000" y2="185" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="0.8" />
              <line x1="0" y1="315" x2="1000" y2="315" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="0.8" />
              <line x1="500" y1="0" x2="500" y2="500" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="0.8" />

              {/* Continents / World Landmasses */}
              <g fill="#181552" stroke="#2B267E" strokeWidth="0.75" strokeLinejoin="round">
                {/* Africa */}
                <path d="M 460 170 Q 480 150 515 155 Q 560 160 575 190 Q 640 210 635 240 Q 625 270 600 310 Q 585 365 560 380 Q 545 365 530 310 Q 505 270 480 255 Q 450 250 440 220 Q 435 190 460 170 Z" fill="#1C1860" />
                {/* Europe */}
                <path d="M 460 155 Q 480 110 520 100 Q 560 95 580 130 Q 550 150 515 155 Z" />
                {/* Asia */}
                <path d="M 580 120 Q 640 90 730 95 Q 820 110 850 160 Q 820 220 780 240 Q 750 220 710 200 Q 660 190 620 180 Z" />
                {/* Southeast Asia / Cambodia region */}
                <path d="M 760 215 Q 790 210 805 235 Q 795 260 770 250 Z" />
                {/* North America */}
                <path d="M 160 100 Q 240 85 310 110 Q 320 160 270 210 Q 230 200 200 170 Q 150 150 160 100 Z" />
                {/* South America */}
                <path d="M 270 225 Q 330 240 345 280 Q 330 350 295 410 Q 270 380 260 300 Z" />
                {/* Australia */}
                <path d="M 790 320 Q 860 310 885 345 Q 870 395 815 390 Q 780 365 790 320 Z" />
              </g>

              {/* Ghana Highlight Callout on SVG */}
              <circle cx="495" cy="248" r="9" fill="#3FBD92" fillOpacity="0.18" />
              <circle cx="495" cy="248" r="4" fill="#3FBD92" />
              <text x="480" y="272" fill="#3FBD92" fontSize="9" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.08em">
                GHANA
              </text>

              {/* Interactive SVG Markers for each cluster */}
              {!mapLibreReady && (
                <g>
                  {filteredClusters.map((cluster) => {
                    const isSelected = activeCluster?.id === cluster.id;
                    return (
                      <g
                        key={cluster.id}
                        transform={`translate(${cluster.mapX}, ${cluster.mapY})`}
                        className="cursor-pointer transition-transform duration-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveCluster(cluster);
                        }}
                      >
                        {/* Pulsing Beacon Waves */}
                        <circle r="22" fill="#3FBD92" fillOpacity="0.25" className="animate-ping" />
                        <circle r="16" fill="#3FBD92" fillOpacity="0.35" />
                        {/* Main Pin */}
                        <circle
                          r="13"
                          fill={isSelected ? '#36A87D' : '#3FBD92'}
                          stroke="#ffffff"
                          strokeWidth="2.5"
                          filter="url(#pinShadow)"
                        />
                        <text
                          y="4"
                          textAnchor="middle"
                          fill="#1E1B6B"
                          fontSize="10"
                          fontWeight="800"
                          fontFamily="sans-serif"
                        >
                          {cluster.countLabel}
                        </text>
                        {/* Country Label */}
                        <text
                          y="-18"
                          textAnchor="middle"
                          fill="#ffffff"
                          fontSize="10"
                          fontWeight="bold"
                          fontFamily="sans-serif"
                          className="drop-shadow-md"
                        >
                          {cluster.country}
                        </text>
                      </g>
                    );
                  })}
                </g>
              )}
            </svg>

            {/* 2. MapLibre GL Layer: Layers smoothly on top when supported */}
            <div
              ref={mapContainerRef}
              className={`absolute inset-0 otoo-map transition-opacity duration-500 ${
                mapLibreReady ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            />

            {/* Floating Top Filter & Search Controls */}
            <div className="absolute top-4 left-4 right-4 z-20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pointer-events-none">
              <div className="pointer-events-auto">
                <label htmlFor="explore-country-select" className="sr-only">
                  Explore by Country
                </label>
                <select
                  id="explore-country-select"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="bg-white text-[#1E1B6B] text-[13px] font-bold rounded-[4px] pl-4 pr-9 py-2.5 shadow-md border border-black/10 cursor-pointer cw-focus w-full sm:w-auto outline-none"
                >
                  <option value="ALL">Explore All Countries ({countries.length})</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pointer-events-auto relative w-full sm:w-[240px]">
                <label htmlFor="map-project-search" className="sr-only">
                  Search water projects
                </label>
                <Search className="w-4 h-4 text-[#565677] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="map-project-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search region, well, or town..."
                  className="w-full bg-white text-[#1E1B6B] placeholder:text-[#6E6E93] text-[13px] rounded-[4px] pl-9 pr-4 py-2.5 shadow-md border border-black/10 cw-focus"
                />
              </div>
            </div>

            {/* No Results Filter Feedback */}
            {filteredClusters.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#0E0C3D]/80 z-20 p-6">
                <div className="bg-[#1A175E] border border-white/15 rounded-[6px] p-6 text-center max-w-sm shadow-xl">
                  <p className="text-white font-medium text-[15px]">No water project clusters match "{searchQuery}"</p>
                  <button
                    type="button"
                    onClick={handleResetView}
                    className="mt-4 px-4 py-2 bg-[#3FBD92] text-[#1E1B6B] rounded-[4px] text-[12px] font-bold uppercase tracking-[0.1em] cursor-pointer"
                  >
                    Reset Map Filters
                  </button>
                </div>
              </div>
            )}

            {/* Verified GPS Proof Popover Card */}
            {activeCluster && (
              <div
                data-testid="gps-proof-card"
                className="absolute bottom-4 left-4 right-4 sm:right-auto sm:w-[370px] bg-white rounded-[6px] shadow-[0_20px_50px_rgba(0,0,0,0.45)] overflow-hidden z-30 border border-black/10 animate-in fade-in slide-in-from-bottom-2 duration-200"
              >
                <div className="relative h-36 bg-[#1E1B6B]">
                  {!imgErrors[activeCluster.id] ? (
                    <img
                      src={activeCluster.image}
                      alt={`${activeCluster.country} clean water project`}
                      referrerPolicy="no-referrer"
                      width="800"
                      height="450"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.triedFallback && activeCluster.fallbackImage) {
                          target.dataset.triedFallback = 'true';
                          target.src = activeCluster.fallbackImage;
                        } else {
                          setImgErrors((prev) => ({ ...prev, [activeCluster.id]: true }));
                        }
                      }}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#2A2670] to-[#141148]" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  <button
                    type="button"
                    onClick={() => setActiveCluster(null)}
                    aria-label="Close project proof card"
                    className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 text-white hover:bg-black/80 flex items-center justify-center cursor-pointer cw-focus"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                    <div>
                      <p className="font-serif text-[22px] leading-tight font-normal">{activeCluster.country}</p>
                      <p className="text-[11px] text-white/90 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-[#3FBD92]" />
                        <span className="tabular-nums font-mono font-medium">{activeCluster.gps}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between text-[12px] text-[#565677] pb-3 border-b border-[#E9EAE4]">
                    <span>
                      <strong className="text-[#1E1B6B] font-bold tabular-nums">
                        {activeCluster.projectCount.toLocaleString('en-GB')}
                      </strong>{' '}
                      projects
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>
                      <strong className="text-[#1E1B6B] font-bold tabular-nums">
                        {activeCluster.peopleServed.toLocaleString('en-GB')}
                      </strong>{' '}
                      served
                    </span>
                  </div>
                  <p className="mt-3 text-[13px] leading-relaxed text-[#4A4A6A]">{activeCluster.summary}</p>
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#565677]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3FBD92] shrink-0" />
                    <span>
                      {activeCluster.featuredVillage} · {activeCluster.technology}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onFundProject(activeCluster.country)}
                    className="mt-4 w-full bg-[#3FBD92] hover:bg-[#36A87D] text-[#1E1B6B] font-bold text-[11px] uppercase tracking-[0.14em] py-3 rounded-[4px] transition-colors cursor-pointer cw-focus shadow-sm"
                  >
                    Fund Clean Water in {activeCluster.country}
                  </button>
                </div>
              </div>
            )}

            {/* Map Controls: Zoom in, out, reset */}
            <div className="absolute bottom-12 right-4 z-20 flex flex-col bg-white rounded-[4px] shadow-lg overflow-hidden border border-black/10">
              <button
                type="button"
                onClick={handleZoomIn}
                aria-label="Zoom in map"
                className="w-9 h-9 flex items-center justify-center text-[#1E1B6B] hover:bg-[#F4F5F0] border-b border-[#E9EAE4] cursor-pointer cw-focus"
              >
                <Plus className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleZoomOut}
                aria-label="Zoom out map"
                className="w-9 h-9 flex items-center justify-center text-[#1E1B6B] hover:bg-[#F4F5F0] border-b border-[#E9EAE4] cursor-pointer cw-focus"
              >
                <Minus className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleResetView}
                aria-label="Reset map view"
                className="w-9 h-9 flex items-center justify-center text-[#1E1B6B] hover:bg-[#F4F5F0] cursor-pointer cw-focus"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Helper Hint */}
            {!activeCluster && (
              <div className="hidden sm:block absolute bottom-4 left-4 z-20 text-[12px] text-[#B3B3D1] bg-[#1E1B6B]/90 backdrop-blur-sm px-3.5 py-2 rounded-[4px] border border-white/10">
                Click any marker to inspect verified GPS coordinates and field proof
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
