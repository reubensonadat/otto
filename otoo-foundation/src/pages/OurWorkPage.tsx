import { useState } from "react";
import { Globe2, Radio, Users, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const countries = [
  { name: "Ethiopia", projects: "8,920", people: "3.2M", partner: "Relief Society of Tigray (REST)", focus: "Deep drilled wells & solar powered systems" },
  { name: "Uganda", projects: "4,150", people: "1.4M", partner: "Water for People Uganda", focus: "Piped water networks & school handwashing" },
  { name: "Malawi", projects: "5,800", people: "2.1M", partner: "WaterAid Malawi", focus: "Gravity-fed tap schemes & maintenance committees" },
  { name: "Rwanda", projects: "3,200", people: "1.1M", partner: "Living Water Rwanda", focus: "District-wide universal water coverage" },
  { name: "Cambodia", projects: "7,400", people: "1.8M", partner: "Clear Cambodia", focus: "Household BioSand filters & school water tanks" },
  { name: "India", projects: "6,200", people: "2.4M", partner: "Gram Vikas", focus: "100% piped water to every home in village" },
  { name: "Nepal", projects: "2,900", people: "980K", partner: "Helvetas Nepal", focus: "High-altitude mountain gravity flow systems" },
  { name: "Guatemala", projects: "1,850", people: "620K", partner: "Water For People", focus: "Rainwater systems & watershed reforestation" },
];

export function OurWorkPage() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-cw-gray-50 border-b border-gray-200">
        <div className="section-container">
          <div className="max-w-3xl space-y-6">
            <span className="eyebrow-dark">Where & How We Work</span>
            <h1 className="text-4xl sm:text-6xl font-black text-cw-black tracking-tight leading-tight">
              Local partners. Radical proof. Lasting water.
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal">
              We don’t drop in from New York to dig wells. We partner with the most experienced local implementers who know the culture, language, and topography, ensuring water flows for generations.
            </p>
          </div>
        </div>
      </section>

      {/* Global Countries Grid */}
      <section className="py-20 lg:py-28 border-b border-gray-100">
        <div className="section-container">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="eyebrow-dark">Global Footprint</span>
            <h2 className="text-3xl sm:text-4xl font-black text-cw-black tracking-tight">
              Active in 29 countries across the globe.
            </h2>
            <p className="text-gray-600 leading-relaxed font-normal">
              Select a country below to explore completed water projects, local implementing partners, and lives reached.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Country list */}
            <div className="lg:col-span-5 space-y-2">
              {countries.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedCountry(c)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                    selectedCountry.name === c.name
                      ? "bg-cw-black text-white border-cw-black"
                      : "bg-white text-cw-black border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <div className="font-bold text-base flex items-center gap-3">
                    <Globe2 className="w-4 h-4 text-cw-yellow" strokeWidth={1.75} />
                    <span>{c.name}</span>
                  </div>
                  <div className={`text-xs font-semibold ${selectedCountry.name === c.name ? "text-cw-yellow" : "text-gray-500"}`}>
                    {c.people} served
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Country Details Card */}
            <div className="lg:col-span-7 cw-card bg-cw-gray-50 border border-gray-200 p-8 sm:p-10 space-y-6">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div>
                  <span className="eyebrow-dark mb-1">Country Focus</span>
                  <h3 className="text-3xl font-black text-cw-black">{selectedCountry.name}</h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-cw-black">{selectedCountry.projects}</div>
                  <div className="text-xs text-gray-500 font-semibold uppercase">Water Points</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-xs uppercase text-gray-400 font-bold tracking-wider">Lives Transformed</div>
                  <div className="text-xl font-black text-cw-black mt-1">{selectedCountry.people} people</div>
                </div>
                <div>
                  <div className="text-xs uppercase text-gray-400 font-bold tracking-wider">Primary Technology</div>
                  <div className="text-sm font-bold text-cw-black mt-1">{selectedCountry.focus}</div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <div className="text-xs uppercase text-gray-400 font-bold tracking-wider">Local Implementer</div>
                <div className="font-bold text-base text-cw-black">{selectedCountry.partner}</div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Our local partner leads geological surveys, community training, spare-parts supply chain development, and establishes local water tariffs to ensure repairs happen within 24 hours.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-2 text-xs font-bold text-cw-black">
                <CheckCircle2 className="w-4 h-4 text-cw-black" strokeWidth={1.75} />
                <span>100% of water points tracked with GPS and cloud sensors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Sensors & Continuous Monitoring */}
      <section className="py-20 lg:py-28 bg-cw-black text-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="eyebrow">Smart Infrastructure</span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                We put IoT cloud sensors on our wells.
              </h2>
              <p className="text-gray-300 leading-relaxed font-normal text-base sm:text-lg">
                Building a well is only step one. Keeping it working for 20 years is the real mission. We developed custom cellular and satellite water sensors that transmit daily flow data directly to our dispatch centers.
              </p>
              <div className="space-y-3 pt-2 text-sm text-gray-300">
                <div className="flex items-center gap-3">
                  <Radio className="w-5 h-5 text-cw-yellow shrink-0" strokeWidth={1.75} />
                  <span>Real-time leak and flow-rate detection</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-cw-yellow shrink-0" strokeWidth={1.75} />
                  <span>Immediate dispatch alerts to local maintenance mechanics</span>
                </div>
              </div>
              <div className="pt-4">
                <Link to="/#donate" className="btn-cw-primary">
                  Fund Sustainable Water
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-neutral-900 border border-neutral-800 rounded-2xl p-8 space-y-6">
              <div className="text-xs uppercase tracking-widest text-cw-yellow font-mono">Live Sensor Feed</div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-400 font-mono">SENSOR #MW-0842</div>
                    <div className="text-sm font-bold text-white">Chikwawa District, Malawi</div>
                  </div>
                  <span className="text-xs font-mono text-cw-yellow">FLOWING (2.1k L)</span>
                </div>
                <div className="p-4 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-400 font-mono">SENSOR #ET-1920</div>
                    <div className="text-sm font-bold text-white">Adi Daero, Ethiopia</div>
                  </div>
                  <span className="text-xs font-mono text-cw-yellow">FLOWING (1.8k L)</span>
                </div>
                <div className="p-4 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-400 font-mono">SENSOR #KH-0341</div>
                    <div className="text-sm font-bold text-white">Siem Reap, Cambodia</div>
                  </div>
                  <span className="text-xs font-mono text-cw-yellow">FLOWING (1.5k L)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
