import { useState } from 'react';
import { Globe2, Radio, Stethoscope, GraduationCap, Users } from 'lucide-react';

const WORK_COMMUNITIES = [
  {
    name: 'Aboadze',
    region: 'Western Coast, Ghana',
    projects: '4 Active',
    people: '5,400',
    programme: 'Otoo Health & Clinical Care',
    focus: 'Community health screenings, maternal health clinics, and emergency surgery referrals',
    image: '/photos/aboadze-health-screening.jpg',
    description: 'Aboadze is a vibrant coastal fishing settlement where residents historically had to travel long distances for primary care. Our regular health screenings and pediatric health posts bring reliable, free healthcare directly to families.',
  },
  {
    name: 'Elmina',
    region: 'Central Region, Ghana',
    projects: '3 Active',
    people: '3,200',
    programme: 'Otoo Educate & School Build',
    focus: 'Constructing 6 primary classrooms, sanitation blocks, and distributing 120 dual desks',
    image: '/photos/elmina-school-build.jpg',
    description: 'In the historic fishing town of Elmina, overcrowding in classrooms led many young children to drop out. We are constructing resilient classroom blocks and funding full tuition scholarships so fisherfolk children stay in school.',
  },
  {
    name: 'Cape Coast',
    region: 'Central Region, Ghana',
    projects: '3 Active',
    people: '2,800',
    programme: 'Otoo STEM Challenge',
    focus: 'Solar-powered robotics lab, coding workshops, and practical science kits for students',
    image: '/photos/stem-education.jpg',
    description: 'Cape Coast is Ghana’s educational capital, yet coastal public schools often lack science labs. Our STEM Challenge equips students with hands-on robotics and coding kits, preparing them for tomorrow’s technical careers.',
  },
  {
    name: 'Takoradi Harbor Basin',
    region: 'Western Region, Ghana',
    projects: '3 Active',
    people: '2,100',
    programme: 'Otoo Transform & Livelihoods',
    focus: 'Vocational training, micro-grants for fishmonger mothers, and apprentice toolkits for youth',
    image: '/photos/coastal-fisherfolk.jpg',
    description: 'Supporting artisanal fishing families and market women in Takoradi with small business grants, emergency health funds, and apprentice sponsorships for young school-leavers.',
  },
];

export function OurWorkPage({ onFundProject }: { onFundProject: () => void }) {
  const [selectedCommunity, setSelectedCommunity] = useState(WORK_COMMUNITIES[0]);

  return (
    <div className="bg-white">
      {/* Subpage Hero */}
      <section className="py-20 lg:py-28 bg-[#FAF7F0] border-b border-[#E9EAE4]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1E1B6B]">
              Our Work Across Ghana’s Coast
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#1E1B6B] tracking-tight leading-tight">
              Community healthcare. Quality schools. Real opportunity.
            </h1>
            <p className="text-lg sm:text-xl text-[#4A4A6A] leading-relaxed font-normal">
              We focus our efforts where the need is greatest: coastal Ghanaian fishing communities. We partner directly with local nurses, teachers, and elders to deliver projects that create lasting, measurable change.
            </p>
          </div>
        </div>
      </section>

      {/* Community Detail Focus */}
      <section className="py-20 lg:py-28 border-b border-[#E9EAE4]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14 space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1E1B6B]">
              Where We Work
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1E1B6B] tracking-tight">
              Active programmes across coastal Ghana.
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-2.5">
              {WORK_COMMUNITIES.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setSelectedCommunity(c)}
                  className={`w-full text-left p-4 rounded-[6px] border transition-all flex items-center justify-between cursor-pointer ${
                    selectedCommunity.name === c.name
                      ? 'bg-[#1E1B6B] text-white border-[#1E1B6B] shadow-sm'
                      : 'bg-[#F4F5F0] text-[#1E1B6B] border-[#E9EAE4] hover:border-[#1E1B6B]'
                  }`}
                >
                  <div className="font-bold text-base flex items-center gap-3">
                    <Globe2 className="w-4 h-4 text-[#3FBD92]" strokeWidth={1.75} />
                    <span>{c.name}</span>
                  </div>
                  <div className={`text-xs font-semibold ${selectedCommunity.name === c.name ? 'text-[#3FBD92]' : 'text-[#6E6E93]'}`}>
                    {c.people} reached
                  </div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 bg-[#F4F5F0] border border-[#E9EAE4] rounded-[8px] p-8 sm:p-10 space-y-6">
              <div className="flex items-center justify-between border-b border-[#E9EAE4] pb-5">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6E6E93] mb-1">{selectedCommunity.region}</p>
                  <h3 className="font-serif text-3xl text-[#1E1B6B]">{selectedCommunity.name}</h3>
                </div>
                <div className="text-right">
                  <div className="font-serif text-2xl text-[#1E1B6B]">{selectedCommunity.projects}</div>
                  <div className="text-xs text-[#6E6E93] font-bold uppercase tracking-wider">Programmes</div>
                </div>
              </div>

              <div className="rounded-[6px] overflow-hidden aspect-[16/9] bg-[#1E1B6B] shadow-xs relative">
                <img
                  key={selectedCommunity.name}
                  src={selectedCommunity.image}
                  alt={`Otoo Foundation work in ${selectedCommunity.name}, Ghana`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-6 pt-2">
                <div>
                  <div className="text-xs uppercase text-[#6E6E93] font-bold tracking-wider">Lives Impacted</div>
                  <div className="font-serif text-xl text-[#1E1B6B] mt-1">{selectedCommunity.people} people</div>
                </div>
                <div>
                  <div className="text-xs uppercase text-[#6E6E93] font-bold tracking-wider">Focus Area</div>
                  <div className="text-sm font-bold text-[#1E1B6B] mt-1">{selectedCommunity.programme}</div>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#E9EAE4]">
                <div className="text-xs uppercase text-[#6E6E93] font-bold tracking-wider">Programme Overview</div>
                <p className="text-sm text-[#4A4A6A] leading-relaxed">
                  {selectedCommunity.description}
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onFundProject}
                  className="bg-[#3FBD92] hover:bg-[#36A87D] active:scale-[0.99] text-[#1E1B6B] font-bold text-xs uppercase tracking-[0.14em] px-8 py-3.5 rounded-[4px] transition-all cursor-pointer shadow-sm"
                >
                  Support Programmes in {selectedCommunity.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Pillars Grid */}
      <section className="py-20 lg:py-28 bg-[#1E1B6B] text-white">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#3FBD92]">
              Programme Areas
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
              Four pillars of community transformation.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 rounded-[8px] bg-[#131052] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-[4px] bg-[#3FBD92]/20 flex items-center justify-center text-[#3FBD92]">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-white">Otoo Health</h3>
              <p className="text-sm text-[#D5D5EA] leading-relaxed">
                Free health screenings, maternity support, and surgical access for people in coastal communities.
              </p>
            </div>

            <div className="p-7 rounded-[8px] bg-[#131052] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-[4px] bg-[#3FBD92]/20 flex items-center justify-center text-[#3FBD92]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-white">Otoo Educate</h3>
              <p className="text-sm text-[#D5D5EA] leading-relaxed">
                Building school classrooms, providing desks, and funding full scholarships for students.
              </p>
            </div>

            <div className="p-7 rounded-[8px] bg-[#131052] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-[4px] bg-[#3FBD92]/20 flex items-center justify-center text-[#3FBD92]">
                <Radio className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-white">Otoo STEM</h3>
              <p className="text-sm text-[#D5D5EA] leading-relaxed">
                Practical challenge-based science, robotics, and coding for youth along the coastline.
              </p>
            </div>

            <div className="p-7 rounded-[8px] bg-[#131052] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-[4px] bg-[#3FBD92]/20 flex items-center justify-center text-[#3FBD92]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-white">Otoo Transform</h3>
              <p className="text-sm text-[#D5D5EA] leading-relaxed">
                Micro-enterprise grants, financial literacy, and community empowerment for women and youth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
