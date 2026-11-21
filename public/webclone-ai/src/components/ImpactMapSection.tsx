import React, { useState, useMemo } from 'react';
import { Search, Plus, Minus, RotateCcw, MapPin, X, CheckCircle2 } from 'lucide-react';
import {
  filterProjectClusters,
  type ImpactTotals,
  type WaterProjectCluster,
} from '../utils/donationLogic';
import { PROJECT_CLUSTERS } from '../data/waterData';
import { DarkJerrycanBadge } from './BrandIcons';

export interface ImpactMapSectionProps {
  totals: ImpactTotals;
  onFundProject: (country: string) => void;
}

export function ImpactMapSection({ totals, onFundProject }: ImpactMapSectionProps) {
  const [selectedCountry, setSelectedCountry] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCluster, setActiveCluster] = useState<WaterProjectCluster | null>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const countries = useMemo(
    () => Array.from(new Set(PROJECT_CLUSTERS.map((c) => c.country))).sort(),
    []
  );

  const filteredClusters = useMemo(
    () => filterProjectClusters(PROJECT_CLUSTERS, selectedCountry, searchQuery),
    [selectedCountry, searchQuery]
  );

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    if (country !== 'ALL') {
      const match = PROJECT_CLUSTERS.find((c) => c.country === country);
      if (match) setActiveCluster(match);
    } else {
      setActiveCluster(null);
    }
  };

  const handleZoomIn = () => setZoom((z) => Math.min(1.6, Number((z + 0.2).toFixed(2))));
  const handleZoomOut = () => setZoom((z) => Math.max(1, Number((z - 0.2).toFixed(2))));
  const handleResetView = () => {
    setZoom(1);
    setSelectedCountry('ALL');
    setSearchQuery('');
    setActiveCluster(null);
  };

  return (
    <section id="impact-map" className="relative overflow-hidden">
      {/* Iconic split backdrop: dark charcoal top half transitioning to warm sand bottom half */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="h-[68%] bg-[#222520]" />
        <div className="h-[32%] bg-[#F8EED3]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 pt-20 lg:pt-24 pb-16 lg:pb-20">
        {/* Centered Header over Dark Canvas */}
        <div className="text-center max-w-[760px] mx-auto mb-12 lg:mb-14">
          <h2 className="font-serif text-white text-[34px] sm:text-[42px] lg:text-[46px] leading-[1.16] font-normal">
            Know that your donation is making a difference
          </h2>
          <p className="mt-5 text-[15px] sm:text-[16px] leading-[1.68] text-[#D8D9D3] max-w-[680px] mx-auto">
            charity: water uses 100% of your donation to fund clean water around the world and then
            proves every single project you fund, complete with GPS coordinates and photos. Give
            water. Get proof. Every single time.
          </p>
        </div>

        {/* Overlapping Dark-Framed Proof Map Card */}
        <div className="rounded-[10px] overflow-hidden bg-[#222520] border border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
          {/* Card Top Header Bar with Brand + Live KPI Strip */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/12 bg-[#1D201B]">
            <div className="lg:col-span-6 px-6 py-5 sm:px-8 sm:py-6 flex items-center gap-4 border-b lg:border-b-0 lg:border-r border-white/12">
              <DarkJerrycanBadge className="w-12 h-12" />
              <div>
                <p className="font-serif text-white text-[26px] sm:text-[30px] leading-tight font-normal tracking-[0.02em]">
                  charity: water
                </p>
                <p className="text-[12px] text-[#A8AAA3] mt-0.5">
                  Last updated: October 29, 2026
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-3 divide-x divide-white/12">
              <div className="px-4 py-4 sm:px-6 sm:py-5 flex flex-col items-center justify-center text-center">
                <p
                  data-testid="kpi-people-served"
                  className="font-serif text-white text-[20px] sm:text-[26px] leading-tight tabular-nums"
                >
                  {totals.peopleServed.toLocaleString('en-US')}
                </p>
                <p className="text-[11px] sm:text-[12px] text-[#B6B8B0] mt-1">people served</p>
              </div>

              <div className="px-4 py-4 sm:px-6 sm:py-5 flex flex-col items-center justify-center text-center">
                <p
                  data-testid="kpi-water-projects"
                  className="font-serif text-white text-[20px] sm:text-[26px] leading-tight tabular-nums"
                >
                  {totals.waterProjects.toLocaleString('en-US')}
                </p>
                <p className="text-[11px] sm:text-[12px] text-[#B6B8B0] mt-1">water projects</p>
              </div>

              <div className="px-4 py-4 sm:px-6 sm:py-5 flex flex-col items-center justify-center text-center">
                <p
                  data-testid="kpi-countries"
                  className="font-serif text-white text-[20px] sm:text-[26px] leading-tight tabular-nums"
                >
                  {totals.countries}
                </p>
                <p className="text-[11px] sm:text-[12px] text-[#B6B8B0] mt-1">countries</p>
              </div>
            </div>
          </div>

          {/* Interactive Dark World Map Viewport */}
          <div className="relative bg-[#1B1E1A] h-[440px] sm:h-[520px] overflow-hidden select-none">
            {/* Top Controls: Explore by Country (Left) + Search (Right) */}
            <div className="absolute top-4 left-4 right-4 z-20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pointer-events-none">
              <div className="pointer-events-auto">
                <label htmlFor="explore-country-select" className="sr-only">
                  Explore by Country
                </label>
                <select
                  id="explore-country-select"
                  value={selectedCountry}
                  onChange={(e) => handleCountrySelect(e.target.value)}
                  className="bg-white text-[#222520] text-[13px] font-medium rounded-full pl-4 pr-9 py-2.5 shadow-md border border-black/10 cursor-pointer cw-focus w-full sm:w-auto"
                >
                  <option value="ALL">Explore by Country (All 29)</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pointer-events-auto relative w-full sm:w-[220px]">
                <label htmlFor="map-project-search" className="sr-only">
                  Search water projects
                </label>
                <Search className="w-4 h-4 text-[#5C5E58] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="map-project-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search region or well..."
                  className="w-full bg-white text-[#222520] placeholder:text-[#71716C] text-[13px] rounded-full pl-9 pr-4 py-2.5 shadow-md border border-black/10 cw-focus"
                />
              </div>
            </div>

            {/* Interactive SVG World Continents & Proportional Yellow Cluster Markers */}
            <div
              className="w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
              style={{ transform: `scale(${zoom})` }}
            >
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full object-cover"
                role="img"
                aria-label="Global map of verified charity: water project clusters"
              >
                {/* Subtle graticule lines */}
                <g stroke="#292D28" strokeWidth="0.6" opacity="0.7">
                  <line x1="0" y1="125" x2="1000" y2="125" />
                  <line x1="0" y1="250" x2="1000" y2="250" />
                  <line x1="0" y1="375" x2="1000" y2="375" />
                  <line x1="250" y1="0" x2="250" y2="500" />
                  <line x1="500" y1="0" x2="500" y2="500" />
                  <line x1="750" y1="0" x2="750" y2="500" />
                </g>

                {/* Detailed Dark Mapbox-Style World Geography */}
                <g fill="#414440" stroke="#282B27" strokeWidth="0.8" strokeLinejoin="round">
                  {/* North America */}
                  <path d="M44,78 L66,68 L94,64 L126,56 L160,54 L196,60 L230,72 L254,84 L268,98 L258,112 L246,118 L254,132 L242,146 L228,158 L216,174 L208,194 L194,202 L182,196 L176,208 L186,222 L198,236 L212,246 L224,254 L220,262 L204,256 L190,244 L176,234 L164,218 L152,202 L138,184 L124,166 L112,150 L98,136 L86,122 L72,108 L54,104 L40,94 Z" />
                  {/* Alaska & Aleutians */}
                  <path d="M18,74 L44,68 L52,84 L38,94 L22,90 Z" />
                  {/* Greenland & Iceland */}
                  <path d="M286,34 L334,26 L372,34 L386,54 L368,84 L344,104 L318,98 L300,78 L286,56 Z" />
                  <path d="M400,76 L418,74 L422,84 L404,86 Z" />
                  {/* Cuba & Caribbean */}
                  <path d="M214,224 L236,226 L238,232 L216,232 Z" />
                  <path d="M242,232 L256,234 L254,239 L240,238 Z" />
                  {/* South America */}
                  <path d="M226,262 L248,258 L272,266 L294,282 L318,296 L336,314 L342,334 L330,356 L316,378 L302,398 L288,422 L274,448 L260,468 L248,464 L244,442 L246,412 L240,382 L232,354 L222,328 L214,304 L214,282 Z" />
                  {/* Europe Mainland */}
                  <path d="M438,148 L448,134 L462,126 L474,116 L488,110 L504,104 L518,96 L536,88 L558,82 L582,84 L594,100 L592,124 L578,138 L560,146 L544,154 L532,162 L518,158 L508,166 L496,154 L484,158 L472,162 L456,166 L442,162 Z" />
                  {/* Scandinavia */}
                  <path d="M482,94 L496,74 L516,58 L538,54 L552,66 L544,82 L528,92 L512,102 L494,104 Z" />
                  {/* UK & Ireland */}
                  <path d="M446,104 L458,100 L464,118 L458,130 L446,128 L448,116 Z" />
                  <path d="M434,112 L443,110 L444,122 L434,124 Z" />
                  {/* Africa */}
                  <path d="M446,178 L472,172 L502,174 L530,180 L556,184 L574,188 L588,214 L602,238 L618,252 L636,258 L632,276 L618,298 L606,322 L598,350 L586,380 L568,408 L546,424 L528,422 L518,400 L512,370 L504,342 L498,312 L486,298 L466,296 L444,288 L428,274 L422,250 L426,222 L436,198 Z" />
                  {/* Madagascar */}
                  <path d="M622,350 L634,344 L638,368 L630,394 L618,392 L618,368 Z" />
                  {/* Middle East & Asia */}
                  <path d="M578,142 L602,118 L634,94 L678,76 L732,68 L792,70 L854,78 L904,96 L922,118 L904,142 L882,158 L874,182 L866,204 L854,226 L842,248 L832,272 L818,284 L806,272 L798,254 L784,236 L770,226 L758,242 L746,268 L734,274 L724,254 L714,228 L698,218 L678,218 L658,230 L642,248 L624,250 L608,236 L596,214 L584,190 L572,170 Z" />
                  {/* Sri Lanka & Japan */}
                  <circle cx="744" cy="282" r="3.5" />
                  <path d="M892,154 L904,148 L908,170 L896,186 L888,180 Z" />
                  {/* Philippines & Indonesia */}
                  <path d="M862,242 L874,244 L876,266 L864,268 Z" />
                  <path d="M800,296 L830,308 L854,316 L882,318 L900,324 L874,328 L838,324 L806,312 Z" />
                  <path d="M846,288 L866,286 L872,302 L852,304 Z" />
                  {/* Australia & New Zealand */}
                  <path d="M812,362 L842,352 L876,352 L904,366 L924,390 L922,418 L902,438 L874,442 L844,430 L818,414 L806,388 Z" />
                  <path d="M944,436 L954,430 L960,446 L948,456 Z" />
                </g>

                {/* Refined Subtle Country Labels matching Mapbox Dark */}
                <g fill="#8F928C" fontSize="9" fontFamily="Plus Jakarta Sans, sans-serif">
                  <text x="134" y="144">United States</text>
                  <text x="148" y="216">Mexico</text>
                  <text x="272" y="330">Brazil</text>
                  <text x="256" y="408">Argentina</text>
                  <text x="454" y="142">France</text>
                  <text x="488" y="128">Germany</text>
                  <text x="466" y="206">Algeria</text>
                  <text x="518" y="212">Libya</text>
                  <text x="556" y="212">Egypt</text>
                  <text x="530" y="398">South Africa</text>
                  <text x="606" y="214">Saudi Arabia</text>
                  <text x="728" y="232">India</text>
                  <text x="802" y="176">China</text>
                  <text x="844" y="400">Australia</text>
                </g>

                {/* Interactive Yellow Project Cluster Circles */}
                {filteredClusters.map((cluster) => {
                  const isSelected = activeCluster?.id === cluster.id;
                  return (
                    <g
                      key={cluster.id}
                      role="button"
                      tabIndex={0}
                      aria-label={`${cluster.country}: ${cluster.projectCount.toLocaleString('en-US')} water projects`}
                      onClick={() => setActiveCluster(cluster)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActiveCluster(cluster);
                        }
                      }}
                      className="cursor-pointer group outline-none"
                    >
                      {isSelected && (
                        <circle
                          cx={cluster.mapX}
                          cy={cluster.mapY}
                          r={cluster.radius + 7}
                          fill="none"
                          stroke="#FFCA0A"
                          strokeWidth="2.5"
                          opacity="0.7"
                        />
                      )}
                      <circle
                        cx={cluster.mapX}
                        cy={cluster.mapY}
                        r={cluster.radius}
                        fill="#FFCA0A"
                        className="transition-all duration-150 group-hover:fill-[#FFD84A]"
                      />
                      <text
                        x={cluster.mapX}
                        y={cluster.mapY + 4}
                        textAnchor="middle"
                        fill="#222520"
                        fontSize={cluster.radius >= 25 ? '11.5' : '10'}
                        fontWeight="700"
                        fontFamily="Plus Jakarta Sans, sans-serif"
                        className="pointer-events-none select-none"
                      >
                        {cluster.countLabel}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Empty Search State */}
            {filteredClusters.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#1B1E1A]/80 z-20 p-6">
                <div className="bg-[#262924] border border-white/15 rounded-lg p-6 text-center max-w-sm">
                  <p className="text-white font-medium text-[15px]">
                    No water project clusters match "{searchQuery}"
                  </p>
                  <button
                    type="button"
                    onClick={handleResetView}
                    className="mt-4 px-4 py-2 bg-[#FFCA0A] text-[#222520] rounded-[4px] text-[12px] font-bold uppercase tracking-[0.1em] cursor-pointer"
                  >
                    Reset Map Filters
                  </button>
                </div>
              </div>
            )}

            {/* Selected Cluster GPS Proof Card Overlay */}
            {activeCluster && (
              <div
                data-testid="gps-proof-card"
                className="absolute bottom-4 left-4 right-4 sm:right-auto sm:w-[360px] bg-white rounded-[8px] shadow-[0_16px_42px_rgba(0,0,0,0.38)] overflow-hidden z-30 border border-black/10"
              >
                <div className="relative h-32 bg-[#222520]">
                  {!imgErrors[activeCluster.id] ? (
                    <img
                      src={activeCluster.image}
                      alt={`${activeCluster.country} clean water project`}
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setImgErrors((prev) => ({ ...prev, [activeCluster.id]: true }))
                      }
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#2B3D37] to-[#1D2520]" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
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
                      <p className="font-serif text-[20px] leading-tight">
                        {activeCluster.country}
                      </p>
                      <p className="text-[11px] text-white/85 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-[#FFCA0A]" />
                        <span className="tabular-nums">{activeCluster.gps}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between text-[12px] text-[#5C5E58] pb-3 border-b border-[#E9EAE4]">
                    <span>
                      <strong className="text-[#222520] font-bold tabular-nums">
                        {activeCluster.projectCount.toLocaleString('en-US')}
                      </strong>{' '}
                      projects
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>
                      <strong className="text-[#222520] font-bold tabular-nums">
                        {activeCluster.peopleServed.toLocaleString('en-US')}
                      </strong>{' '}
                      served
                    </span>
                  </div>

                  <p className="mt-3 text-[13px] leading-relaxed text-[#454742]">
                    {activeCluster.summary}
                  </p>

                  <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#5C5E58]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0" />
                    <span>
                      {activeCluster.featuredVillage} · {activeCluster.technology}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onFundProject(activeCluster.country)}
                    className="mt-4 w-full bg-[#FFCA0A] hover:bg-[#F0BC00] text-[#222520] font-bold text-[11px] uppercase tracking-[0.14em] py-2.5 rounded-[4px] transition-colors cursor-pointer cw-focus"
                  >
                    Fund Clean Water in {activeCluster.country}
                  </button>
                </div>
              </div>
            )}

            {/* Bottom-right Zoom Controls */}
            <div className="absolute bottom-4 right-4 z-20 flex flex-col bg-white rounded-[6px] shadow-md overflow-hidden border border-black/10">
              <button
                type="button"
                onClick={handleZoomIn}
                aria-label="Zoom in map"
                className="w-9 h-9 flex items-center justify-center text-[#222520] hover:bg-[#F4F5F0] border-b border-[#E9EAE4] cursor-pointer cw-focus"
              >
                <Plus className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleZoomOut}
                aria-label="Zoom out map"
                className="w-9 h-9 flex items-center justify-center text-[#222520] hover:bg-[#F4F5F0] border-b border-[#E9EAE4] cursor-pointer cw-focus"
              >
                <Minus className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleResetView}
                aria-label="Reset map view"
                className="w-9 h-9 flex items-center justify-center text-[#222520] hover:bg-[#F4F5F0] cursor-pointer cw-focus"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Subtle Helper Prompt when no cluster is selected */}
            {!activeCluster && (
              <div className="hidden sm:block absolute bottom-4 left-4 z-20 text-[12px] text-[#B6B8B0] bg-[#222520]/85 px-3.5 py-2 rounded-md border border-white/10">
                Click any yellow cluster to inspect verified GPS coordinates and field proof
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
