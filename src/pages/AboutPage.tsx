import { User, Award } from 'lucide-react';

const VALUES = [
  {
    title: '100% Model',
    desc: 'Public donations directly fund school builds, hospital care, and community empowerment programmes. Private donors and our board cover all operational overhead so your gift stays 100% whole.',
  },
  {
    title: 'Radical Transparency',
    desc: 'Every project is tracked with verified milestones, budget targets, progress bars, and community photo updates viewable by any supporter.',
  },
  {
    title: 'Local Leadership',
    desc: 'We partner directly with community elders, headteachers, and local healthcare workers in coastal Ghana who understand the precise needs of their villages.',
  },
  {
    title: 'Hope Over Guilt',
    desc: 'We never use guilt or pity to raise funds. We invite supporters around the world to celebrate the dignity, talent, and boundless potential of Ghana’s youth and families.',
  },
];

const TEAM = [
  {
    name: 'Nana Otoo',
    role: 'Founder & Executive Director',
    bio: 'Born with deep roots in coastal Ghana, Nana founded Otoo Foundation to create tangible opportunities in healthcare, education, and community empowerment for underserved coastal families.',
  },
  {
    name: 'Dr. Kwame Mensah',
    role: 'Director of Healthcare Operations',
    bio: 'Public health physician with 18+ years coordinating mobile clinics, surgical referrals, and preventive health screenings in Ghana’s Western and Central regions.',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Director of Global Partnerships',
    bio: 'Experienced humanitarian partnerships lead connecting international supporters, trusts, and corporate sponsors to verified community builds in Ghana.',
  },
  {
    name: 'Amina Diallo',
    role: 'Lead, Otoo STEM & Education',
    bio: 'Educational technologist dedicated to building school classrooms, distributing STEM kits, and championing girls’ participation in practical sciences.',
  },
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
              To restore hope and transform lives.
            </h1>
            <p className="text-lg sm:text-xl text-[#4A4A6A] leading-relaxed font-normal">
              Otoo Foundation is a UK-registered nonprofit dedicated to creating sustainable healthcare access, quality school infrastructure, and community empowerment for children and families along Ghana’s coast.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Spotlight & Vision */}
      <section id="founder" className="py-20 lg:py-28 border-b border-[#E9EAE4]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Founder Portrait Placeholder */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[12px] overflow-hidden bg-[#FAF7F0] border-2 border-dashed border-[#3FBD92] p-8 sm:p-12 text-center shadow-sm flex flex-col items-center justify-center min-h-[460px]">
                <div className="w-32 h-32 rounded-full bg-[#1E1B6B] flex items-center justify-center text-[#3FBD92] mb-6 shadow-md border-4 border-white">
                  <User className="w-16 h-16" strokeWidth={1.5} />
                </div>
                <div className="inline-block px-3 py-1 rounded-[4px] bg-[#3FBD92] text-[#1E1B6B] text-[11px] font-bold uppercase tracking-wider mb-3">
                  Founder&rsquo;s Portrait
                </div>
                <h3 className="font-serif text-2xl text-[#1E1B6B] font-bold">Nana Otoo</h3>
                <p className="text-xs uppercase tracking-widest text-[#6E6E93] mt-1 font-semibold">Founder &amp; Executive Director</p>
                <p className="text-xs text-[#565677] mt-4 max-w-xs leading-relaxed italic">
                  &ldquo;Portrait photo placeholder &mdash; official photograph being added shortly.&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-2 text-[11px] font-bold text-[#1E1B6B] bg-white px-4 py-2 rounded-[4px] border border-[#E9EAE4]">
                  <Award className="w-4 h-4 text-[#3FBD92]" />
                  <span>Otoo Foundation CIC &middot; UK &amp; Ghana</span>
                </div>
              </div>
            </div>

            {/* Founder Letter / Vision */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1E1B6B]">
                Message from our Founder
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1E1B6B] tracking-tight leading-tight">
                &ldquo;Where opportunity is nurtured, communities thrive.&rdquo;
              </h2>
              <div className="space-y-4 text-base text-[#4A4A6A] leading-relaxed">
                <p>
                  Growing up with ties to Ghana&rsquo;s coastline, I saw first-hand the resilience and determination of our people. From fishermen heading into the Atlantic at dawn to mothers managing vibrant fish markets and young children walking to school with hungry minds, the spirit of coastal Ghana is unbreakable.
                </p>
                <p>
                  Yet, too many bright young students are held back simply because their school lacks desks or a weatherproof roof. Too many families suffer when preventable illness goes untreated because the nearest clinic is miles away.
                </p>
                <p>
                  We founded <strong>Otoo Foundation</strong> on a simple promise: to restore hope and transform lives. We are building schools, equipping healthcare clinics, and training young people in science and technology &mdash; ensuring every pound donated reaches the ground where it belongs.
                </p>
                <div className="pt-4 border-t border-[#E9EAE4] flex items-center gap-4">
                  <div>
                    <p className="font-serif text-xl font-bold text-[#1E1B6B]">Nana Otoo</p>
                    <p className="text-xs text-[#6E6E93] uppercase tracking-wider">Founder &amp; Executive Director, Otoo Foundation CIC</p>
                  </div>
                </div>
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
              Leadership &amp; Governance
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1E1B6B] tracking-tight">
              Experienced leaders rooted in community.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((t) => (
              <div key={t.name} className="bg-white rounded-[6px] border border-[#E9EAE4] p-6 space-y-3 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-[4px] bg-[#1E1B6B] text-[#3FBD92] flex items-center justify-center font-bold text-lg mb-3">
                    {t.name[0]}
                  </div>
                  <h3 className="font-bold text-lg text-[#1E1B6B]">{t.name}</h3>
                  <div className="text-[11px] font-bold text-[#6E6E93] uppercase tracking-wider mb-2">{t.role}</div>
                  <p className="text-xs text-[#565677] leading-relaxed">{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentic Field Photography in Coastal Ghana */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E9EAE4]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14 space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1E1B6B]">
              Field Work in Coastal Ghana
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1E1B6B] tracking-tight">
              Direct community health and educational builds.
            </h2>
            <p className="text-[#4A4A6A] text-base">
              From our mobile healthcare clinics in Aboadze to school construction in Elmina, our work is carried out directly alongside local Ghanaian nurses, headteachers, and community elders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            <div className="rounded-[8px] overflow-hidden aspect-[4/3] bg-[#1E1B6B] shadow-xs relative group">
              <img
                src="/photos/aboadze-health-screening.jpg"
                alt="Community healthcare screening in Aboadze, Ghana"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B6B]/85 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-xs font-bold uppercase tracking-wider">Aboadze Health Screening</span>
              </div>
            </div>

            <div className="rounded-[8px] overflow-hidden aspect-[4/3] bg-[#1E1B6B] shadow-xs relative group">
              <img
                src="/photos/african-school-children.jpg"
                alt="Ghanaian students in school classrooms"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B6B]/85 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-xs font-bold uppercase tracking-wider">St. Mary&rsquo;s School Initiative</span>
              </div>
            </div>

            <div className="rounded-[8px] overflow-hidden aspect-[4/3] bg-[#1E1B6B] shadow-xs relative group">
              <img
                src="/photos/coastal-fisherfolk.jpg"
                alt="Coastal fishing community life in Ghana"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B6B]/85 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-xs font-bold uppercase tracking-wider">Coastal Fishing Communities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 lg:py-28 border-b border-[#E9EAE4] bg-[#FAF7F0]">
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
              <div key={v.title} className="bg-white rounded-[6px] border border-[#E9EAE4] p-8 space-y-3 shadow-xs">
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
              Support Our Work in Ghana
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
