const VALUES = [
  {
    title: '100% Model',
    desc: 'Public donations directly build clean water infrastructure. Private donors cover our overhead so your gift stays 100% pure.',
  },
  {
    title: 'Radical Transparency',
    desc: 'Every completed well is mapped with GPS coordinates, photos, and live remote flow sensors viewable by any donor.',
  },
  {
    title: 'Local Leadership',
    desc: 'We partner with local implementers and village water boards who live in and understand the communities they serve.',
  },
  {
    title: 'Hope Over Guilt',
    desc: 'We never use guilt or shame to raise money. We invite people to celebrate human dignity and the joy of generous giving.',
  },
];

const TEAM = [
  { name: 'Nana Otoo', role: 'Founder & Executive Director', bio: 'Born in coastal Ghana, Nana founded Otoo Foundation to bring clean water, healthcare, and education to coastal villages.' },
  { name: 'Dr. Kwame Mensah', role: 'Director of Field Operations', bio: 'Civil & hydrogeological engineer with 18+ years designing rural water networks across West Africa.' },
  { name: 'Sarah Jenkins', role: 'Head of Partnerships', bio: 'Former humanitarian logistics lead, connecting international donors to verified community water projects.' },
  { name: 'Amina Diallo', role: 'Community Health Lead', bio: 'Public health epidemiologist overseeing water quality testing and school hygiene curriculum.' },
];

export function AboutPage({ onOpenDonate }: { onOpenDonate: () => void }) {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-[#FAF7F0] border-b border-[#E9EAE4]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1E1B6B]">
              About Otoo Foundation
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#1E1B6B] tracking-tight leading-tight">
              Empowering communities. Changing lives.
            </h1>
            <p className="text-lg sm:text-xl text-[#4A4A6A] leading-relaxed font-normal">
              Otoo Foundation CIC is a non-profit organization bringing clean water, healthcare, and educational opportunity to families in coastal Ghana and across developing nations.
            </p>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 lg:py-28 border-b border-[#E9EAE4]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-[6px] overflow-hidden aspect-[4/5] bg-white border border-[#E9EAE4] p-8 shadow-sm flex items-center justify-center">
                <img
                  src="/brand/logo.jpg"
                  alt="Otoo Foundation"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1E1B6B]">
                Origin & Purpose
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1E1B6B] tracking-tight">
                Born on Ghana's coast to solve the water crisis.
              </h2>
              <div className="space-y-4 text-base text-[#4A4A6A] leading-relaxed">
                <p>
                  In coastal Ghana, thousands of children and mothers walk miles every morning across sand and dirt tracks to collect muddy, salty, contaminated water from stagnant pools and brackish lagoons.
                </p>
                <p>
                  Otoo Foundation was created with a clear conviction: clean water is not a luxury — it is the fundamental foundation of human health, dignity, economic productivity, and education.
                </p>
                <p>
                  By deploying modern drilling technology, solar pumps, and cellular flow sensors, we build permanent, community-owned water infrastructure that serves villages for generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 lg:py-28 bg-[#FAF7F0] border-b border-[#E9EAE4]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14 space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1E1B6B]">
              Leadership
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1E1B6B] tracking-tight">
              Meet our team.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((t) => (
              <div key={t.name} className="bg-white rounded-[6px] border border-[#E9EAE4] p-6 space-y-3 shadow-sm">
                <div className="w-12 h-12 rounded-[4px] bg-[#1E1B6B] text-[#3FBD92] flex items-center justify-center font-bold text-lg">
                  {t.name[0]}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1E1B6B]">{t.name}</h3>
                  <div className="text-xs font-bold text-[#6E6E93] uppercase tracking-wider">{t.role}</div>
                </div>
                <p className="text-xs text-[#565677] leading-relaxed">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Field Work in Coastal Ghana */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E9EAE4]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14 space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1E1B6B]">
              On The Ground
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1E1B6B] tracking-tight">
              Direct community health and water work.
            </h2>
            <p className="text-[#4A4A6A] text-base">
              From our mobile healthcare clinics to deep-drilled solar wells in Aboadze and the Western Region, we work directly alongside community elders and youth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-[6px] overflow-hidden aspect-[4/3] bg-[#1E1B6B] shadow-sm relative group">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85"
                alt="Community healthcare screening"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = 'true';
                    target.src = '/field/health.jpg';
                  }
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B6B]/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-white text-xs font-bold uppercase tracking-wider">Aboadze Health Screening</span>
              </div>
            </div>

            <div className="rounded-[6px] overflow-hidden aspect-[4/3] bg-[#1E1B6B] shadow-sm relative group">
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=85"
                alt="Youth clean water education"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = 'true';
                    target.src = '/field/youth.jpg';
                  }
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B6B]/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-white text-xs font-bold uppercase tracking-wider">Primary School WASH Access</span>
              </div>
            </div>

            <div className="rounded-[6px] overflow-hidden aspect-[4/3] bg-[#1E1B6B] shadow-sm relative group">
              <img
                src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=800&q=85"
                alt="Clean water community celebration"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = 'true';
                    target.src = '/field/community.jpg';
                  }
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B6B]/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-white text-xs font-bold uppercase tracking-wider">Water Point Commissioning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 border-b border-[#E9EAE4]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14 space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1E1B6B]">
              Core Principles
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1E1B6B] tracking-tight">
              Values that guide our mission.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-[#FAF7F0] rounded-[6px] border border-[#E9EAE4] p-8 space-y-3">
                <h3 className="font-serif text-2xl text-[#1E1B6B]">{v.title}</h3>
                <p className="text-sm text-[#4A4A6A] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={onOpenDonate}
              className="bg-[#3FBD92] hover:bg-[#36A87D] active:scale-[0.99] text-[#1E1B6B] font-bold text-xs sm:text-sm uppercase tracking-[0.14em] px-9 py-3.5 rounded-[4px] transition-all cursor-pointer shadow-sm"
            >
              Support Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
