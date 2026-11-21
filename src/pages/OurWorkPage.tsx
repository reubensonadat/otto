import { useState } from 'react';
import { Globe2, Radio, CheckCircle2 } from 'lucide-react';

const WORK_COUNTRIES = [
  {
    name: 'Ghana',
    projects: '1,420',
    people: '520,000',
    partner: 'Otoo Ghana Field Implementers',
    focus: 'Deep drilled wells, solar power, coastal community taps',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=800&q=85',
    fallbackImage: '/field/hero.jpg',
  },
  {
    name: 'Ethiopia',
    projects: '8,920',
    people: '3,200,000',
    partner: 'Relief Society of Tigray (REST)',
    focus: 'Deep drilled wells and solar powered systems',
    image: 'https://images.unsplash.com/photo-1543623252-cb433439c2e3?auto=format&fit=crop&w=800&q=85',
    fallbackImage: '/field/youth.jpg',
  },
  {
    name: 'Uganda',
    projects: '4,150',
    people: '1,400,000',
    partner: 'Water for People Uganda',
    focus: 'Piped water networks and school sanitation',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=85',
    fallbackImage: '/field/community.jpg',
  },
  {
    name: 'Malawi',
    projects: '5,800',
    people: '2,100,000',
    partner: 'WaterAid Malawi',
    focus: 'Gravity-fed tap stands and water committees',
    image: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=800&q=85',
    fallbackImage: '/field/outreach.jpg',
  },
  {
    name: 'Rwanda',
    projects: '3,200',
    people: '1,100,000',
    partner: 'Living Water Rwanda',
    focus: 'District-wide universal water coverage',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85',
    fallbackImage: '/field/health.jpg',
  },
  {
    name: 'Cambodia',
    projects: '7,400',
    people: '1,800,000',
    partner: 'Clear Cambodia',
    focus: 'BioSand filters and school rainwater collection',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=85',
    fallbackImage: '/field/community.jpg',
  },
];

export function OurWorkPage({ onFundProject }: { onFundProject: () => void }) {
  const [selectedCountry, setSelectedCountry] = useState(WORK_COUNTRIES[0]);

  return (
    <div className="bg-white">
      {/* Subpage Hero */}
      <section className="py-20 lg:py-28 bg-[#FAF7F0] border-b border-[#E9EAE4]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1E1B6B]">
              Our Global Approach
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#1E1B6B] tracking-tight leading-tight">
              Local partners. Radical proof. Water that lasts.
            </h1>
            <p className="text-lg sm:text-xl text-[#4A4A6A] leading-relaxed font-normal">
              We never drop in to dig wells and leave. We partner with the most experienced local implementers who understand local culture, language, and hydrogeology — ensuring clean water keeps flowing for decades.
            </p>
          </div>
        </div>
      </section>

      {/* Country Detail & Map Focus */}
      <section className="py-20 lg:py-28 border-b border-[#E9EAE4]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14 space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1E1B6B]">
              Where We Work
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1E1B6B] tracking-tight">
              Active across coastal Ghana and global regions.
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-2.5">
              {WORK_COUNTRIES.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setSelectedCountry(c)}
                  className={`w-full text-left p-4 rounded-[4px] border transition-all flex items-center justify-between cursor-pointer ${
                    selectedCountry.name === c.name
                      ? 'bg-[#1E1B6B] text-white border-[#1E1B6B]'
                      : 'bg-[#F4F5F0] text-[#1E1B6B] border-[#E9EAE4] hover:border-[#1E1B6B]'
                  }`}
                >
                  <div className="font-bold text-base flex items-center gap-3">
                    <Globe2 className="w-4 h-4 text-[#3FBD92]" strokeWidth={1.75} />
                    <span>{c.name}</span>
                  </div>
                  <div className={`text-xs font-semibold ${selectedCountry.name === c.name ? 'text-[#3FBD92]' : 'text-[#6E6E93]'}`}>
                    {c.people} served
                  </div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 bg-[#F4F5F0] border border-[#E9EAE4] rounded-[6px] p-8 sm:p-10 space-y-6">
              <div className="flex items-center justify-between border-b border-[#E9EAE4] pb-5">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6E6E93] mb-1">Country Focus</p>
                  <h3 className="font-serif text-3xl text-[#1E1B6B]">{selectedCountry.name}</h3>
                </div>
                <div className="text-right">
                  <div className="font-serif text-2xl text-[#1E1B6B]">{selectedCountry.projects}</div>
                  <div className="text-xs text-[#6E6E93] font-bold uppercase tracking-wider">Water Points</div>
                </div>
              </div>

              <div className="rounded-[6px] overflow-hidden aspect-[16/9] bg-[#1E1B6B] shadow-sm relative">
                <img
                  key={selectedCountry.name}
                  src={selectedCountry.image}
                  alt={`Clean water project in ${selectedCountry.name}`}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback && selectedCountry.fallbackImage) {
                      target.dataset.triedFallback = 'true';
                      target.src = selectedCountry.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-xs uppercase text-[#6E6E93] font-bold tracking-wider">Lives Transformed</div>
                  <div className="font-serif text-xl text-[#1E1B6B] mt-1">{selectedCountry.people} people</div>
                </div>
                <div>
                  <div className="text-xs uppercase text-[#6E6E93] font-bold tracking-wider">Primary Technology</div>
                  <div className="text-sm font-bold text-[#1E1B6B] mt-1">{selectedCountry.focus}</div>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#E9EAE4]">
                <div className="text-xs uppercase text-[#6E6E93] font-bold tracking-wider">Local Implementer</div>
                <div className="font-bold text-base text-[#1E1B6B]">{selectedCountry.partner}</div>
                <p className="text-xs text-[#565677] leading-relaxed">
                  Our local partner conducts geological resistivity surveys, organizes community water boards, establishes spare-parts supply chains, and trains local mechanics so repairs happen within 24 hours.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onFundProject}
                  className="bg-[#3FBD92] hover:bg-[#36A87D] active:scale-[0.99] text-[#1E1B6B] font-bold text-xs uppercase tracking-[0.14em] px-8 py-3.5 rounded-[4px] transition-all cursor-pointer shadow-sm"
                >
                  Fund Water in {selectedCountry.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IoT Cloud Sensors */}
      <section className="py-20 lg:py-28 bg-[#1E1B6B] text-white">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#3FBD92]">
                Smart Infrastructure
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white leading-tight">
                Cellular sensors on every well.
              </h2>
              <p className="text-[#D5D5EA] leading-relaxed text-base sm:text-lg">
                Building a well is only the beginning. Keeping water flowing for 20+ years is our real commitment. We install cellular and satellite sensors that transmit daily liter-volume data straight to our field maintenance centers.
              </p>
              <div className="space-y-3 pt-2 text-sm text-[#D5D5EA]">
                <div className="flex items-center gap-3">
                  <Radio className="w-5 h-5 text-[#3FBD92] shrink-0" strokeWidth={1.75} />
                  <span>Real-time leak and pressure anomaly detection</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3FBD92] shrink-0" strokeWidth={1.75} />
                  <span>Dispatches certified local mechanics before a tap runs dry</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#131052] border border-white/12 rounded-[6px] p-7 space-y-4">
              <div className="text-xs uppercase tracking-widest text-[#3FBD92] font-mono">Live Sensor Feed</div>
              <div className="space-y-3">
                <div className="p-4 rounded-[4px] bg-[#1A175E] border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-[#A5A5C4] font-mono">SENSOR #GH-0192</div>
                    <div className="text-sm font-bold text-white">Aboadze Tapstand, Ghana</div>
                  </div>
                  <span className="text-xs font-mono text-[#3FBD92]">FLOWING (2,410L)</span>
                </div>
                <div className="p-4 rounded-[4px] bg-[#1A175E] border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-[#A5A5C4] font-mono">SENSOR #MW-0842</div>
                    <div className="text-sm font-bold text-white">Chikwawa District, Malawi</div>
                  </div>
                  <span className="text-xs font-mono text-[#3FBD92]">FLOWING (2,100L)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
