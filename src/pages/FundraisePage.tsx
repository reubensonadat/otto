import { useState } from 'react';
import { Flag, Gift, Trophy, CheckCircle2 } from 'lucide-react';
import type { CurrencyCode } from '../utils/donationLogic';

export function FundraisePage({ onStartCampaign }: { currency?: CurrencyCode; onStartCampaign: () => void }) {
  const [pledged, setPledged] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handlePledge = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setPledged(true);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-[#FAF7F0] border-b border-[#E9EAE4]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1E1B6B]">
              Community Fundraising
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#1E1B6B] tracking-tight leading-tight">
              Turn your next milestone into hope in Ghana.
            </h1>
            <p className="text-lg sm:text-xl text-[#4A4A6A] leading-relaxed font-normal">
              Whether you’re celebrating a birthday, running a race, or rallying your school or church, you can raise funds to build a classroom or provide healthcare for coastal children.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onStartCampaign}
                className="bg-[#3FBD92] hover:bg-[#36A87D] active:scale-[0.99] text-[#1E1B6B] font-bold text-xs sm:text-sm uppercase tracking-[0.14em] px-9 py-3.5 rounded-[4px] transition-all cursor-pointer shadow-sm"
              >
                Start A Campaign In 60 Seconds
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Fundraise */}
      <section className="py-20 lg:py-28 border-b border-[#E9EAE4]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14 space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1E1B6B]">
              Ideas &amp; Inspiration
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1E1B6B] tracking-tight">
              Popular ways people fundraise.
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="bg-[#FAF7F0] border border-[#E9EAE4] rounded-[8px] overflow-hidden flex flex-col">
              <div className="h-48 bg-[#1E1B6B] overflow-hidden">
                <img
                  src="/photos/black-student-classroom.jpg"
                  alt="Ghanaian student celebrating school success"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 space-y-4 flex-1 flex flex-col">
                <div className="w-12 h-12 rounded-[4px] bg-white flex items-center justify-center border border-[#E9EAE4] shadow-xs">
                  <Gift className="w-6 h-6 text-[#1E1B6B]" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-2xl text-[#1E1B6B]">Pledge Your Birthday</h3>
                <p className="text-sm text-[#4A4A6A] leading-relaxed">
                  Ask friends and family to give your age (e.g. £28 for your 28th birthday) instead of physical gifts. It directly funds school textbooks and tuition.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF7F0] border border-[#E9EAE4] rounded-[8px] overflow-hidden flex flex-col">
              <div className="h-48 bg-[#1E1B6B] overflow-hidden">
                <img
                  src="/photos/coastal-fisherfolk.jpg"
                  alt="Coastal Ghanaian community walk"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 space-y-4 flex-1 flex flex-col">
                <div className="w-12 h-12 rounded-[4px] bg-white flex items-center justify-center border border-[#E9EAE4] shadow-xs">
                  <Trophy className="w-6 h-6 text-[#1E1B6B]" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-2xl text-[#1E1B6B]">Athletic Challenges</h3>
                <p className="text-sm text-[#4A4A6A] leading-relaxed">
                  Run a 5K, 10K, half-marathon, or community bike ride to sponsor medical checkups and surgery for coastal families.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF7F0] border border-[#E9EAE4] rounded-[8px] overflow-hidden flex flex-col">
              <div className="h-48 bg-[#1E1B6B] overflow-hidden">
                <img
                  src="/photos/african-school-children.jpg"
                  alt="School classroom in Ghana"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 space-y-4 flex-1 flex flex-col">
                <div className="w-12 h-12 rounded-[4px] bg-white flex items-center justify-center border border-[#E9EAE4] shadow-xs">
                  <Flag className="w-6 h-6 text-[#1E1B6B]" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-2xl text-[#1E1B6B]">Schools &amp; Youth Groups</h3>
                <p className="text-sm text-[#4A4A6A] leading-relaxed">
                  Schools and youth clubs around the world rally with bake sales and coin drives to build classrooms and supply STEM kits for students in Ghana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Birthday Pledge Form */}
      <section className="py-20 lg:py-28 bg-[#1E1B6B] text-white">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8 text-center space-y-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#3FBD92]">
            Birthday Pledge
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
            Pledge your next birthday.
          </h2>
          <p className="text-[#D5D5EA] text-base leading-relaxed">
            Give us your birth month and day. When your birthday approaches, we’ll email you everything you need to launch a quick, beautiful fundraising campaign.
          </p>

          {pledged ? (
            <div className="bg-[#131052] border border-white/12 rounded-[6px] p-8 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-[#3FBD92] mx-auto" />
              <h3 className="font-serif text-2xl text-white">You're pledged, {name || 'friend'}!</h3>
              <p className="text-sm text-[#D5D5EA]">We will email you ahead of your birthday so you can change lives.</p>
            </div>
          ) : (
            <form onSubmit={handlePledge} className="space-y-4 max-w-md mx-auto pt-2">
              <input
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white text-[#1E1B6B] placeholder:text-[#6E6E93] text-sm px-4 py-3 rounded-[4px] outline-none"
              />
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white text-[#1E1B6B] placeholder:text-[#6E6E93] text-sm px-4 py-3 rounded-[4px] outline-none"
              />
              <button
                type="submit"
                className="w-full bg-[#3FBD92] hover:bg-[#36A87D] text-[#1E1B6B] font-bold text-xs uppercase tracking-wider py-3.5 rounded-[4px] transition-colors cursor-pointer"
              >
                Pledge My Birthday
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
