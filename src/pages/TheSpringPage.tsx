import { useState } from 'react';
import { Film, Heart, CheckCircle2 } from 'lucide-react';
import { CURRENCY_CONFIG, type CurrencyCode } from '../utils/donationLogic';

export interface TheCirclePageProps {
  currency: CurrencyCode;
  onJoinCircle: (amount: number) => void;
}

const CIRCLE_TIERS = [
  { amount: 15, ghs: 225, usd: 20, people: 5, label: "Provides healthcare screening and basic medicine for 5 coastal residents each year" },
  { amount: 30, ghs: 450, usd: 40, people: 10, label: "Funds full school tuition, textbooks, and learning supplies for Ghanaian schoolchildren" },
  { amount: 60, ghs: 900, usd: 80, people: 20, label: "Powers STEM challenge robotics kits and classroom desks for 20 young learners" },
  { amount: 120, ghs: 1800, usd: 160, people: 40, label: "Supplies ongoing clinical medical equipment and pediatric coverage for 40 community members" },
];

export function TheSpringPage({ currency, onJoinCircle }: TheCirclePageProps) {
  const [selectedTierIndex, setSelectedTierIndex] = useState(1);
  const cfg = CURRENCY_CONFIG[currency] ?? CURRENCY_CONFIG.GBP;

  const getTierAmount = (tier: typeof CIRCLE_TIERS[0]) => {
    if (currency === 'GHS') return tier.ghs;
    if (currency === 'USD') return tier.usd;
    return tier.amount;
  };

  const selectedTier = CIRCLE_TIERS[selectedTierIndex];
  const activeAmount = getTierAmount(selectedTier);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#1E1B6B] text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/photos/hero-canoe.jpg')" }} aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0C3D] via-[#1E1B6B]/85 to-transparent" aria-hidden="true" />
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#3FBD92]/20 border border-[#3FBD92]/40 text-[#9EF0CA] text-[11px] font-bold uppercase tracking-[0.2em]">
              <Heart className="w-3.5 h-3.5 fill-[#3FBD92] text-[#3FBD92]" />
              Monthly Giving Movement
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.08] text-white">
              The Otoo Circle
            </h1>
            <p className="text-lg sm:text-xl text-[#D5D5EA] leading-relaxed font-normal">
              A community of monthly builders standing with coastal Ghana. By giving monthly, you provide dependable funding so our schools remain open, hospital builds stay on schedule, and community health clinics never run out of medicine.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onJoinCircle(activeAmount)}
                className="bg-[#3FBD92] hover:bg-[#36A87D] active:scale-[0.99] text-[#1E1B6B] font-bold text-[12px] uppercase tracking-[0.14em] px-8 py-3.5 rounded-[4px] transition-all cursor-pointer shadow-sm"
              >
                Join The Circle &mdash; {cfg.symbol}{activeAmount} / mo
              </button>
              <span className="text-xs text-[#A5A5C4]">
                100% funds healthcare &amp; education &bull; Cancel or modify anytime
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tier Impact Calculator */}
      <section className="py-20 lg:py-28 bg-[#FAF7F0] border-b border-[#E9EAE4]">
        <div className="max-w-[960px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-14 space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1E1B6B]">
              Choose Your Monthly Gift
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1E1B6B] tracking-tight">
              See what your monthly support accomplishes.
            </h2>
          </div>

          <div className="bg-white rounded-[8px] border border-[#E9EAE4] p-8 sm:p-12 shadow-[0_8px_30px_rgba(30,27,107,0.06)] space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {CIRCLE_TIERS.map((tier, idx) => {
                const amt = getTierAmount(tier);
                const isSelected = selectedTierIndex === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedTierIndex(idx)}
                    className={`py-4 rounded-[4px] font-bold text-lg transition-all border cursor-pointer tabular-nums ${
                      isSelected
                        ? 'bg-[#3FBD92] border-[#3FBD92] text-[#1E1B6B] shadow-sm'
                        : 'bg-[#F4F5F0] border-[#E9EAE4] text-[#565677] hover:border-[#1E1B6B] hover:text-[#1E1B6B]'
                    }`}
                  >
                    {cfg.symbol}{amt}/mo
                  </button>
                );
              })}
            </div>

            <div className="text-center py-6 border-y border-[#E9EAE4] space-y-2">
              <div className="font-serif text-5xl font-normal text-[#1E1B6B] tabular-nums">
                {selectedTier.people} Lives
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#565677]">
                Supported every single year
              </div>
              <p className="text-sm text-[#4A4A6A] max-w-lg mx-auto pt-2 leading-relaxed">
                {selectedTier.label}
              </p>
            </div>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => onJoinCircle(activeAmount)}
                className="bg-[#3FBD92] hover:bg-[#36A87D] active:scale-[0.99] text-[#1E1B6B] font-bold text-[12px] uppercase tracking-[0.14em] px-10 py-3.5 rounded-[4px] transition-all cursor-pointer shadow-sm"
              >
                Join with {cfg.symbol}{activeAmount} / Month
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Member Documentary Films */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E9EAE4]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1E1B6B]">
                Direct Community Connection
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1E1B6B] tracking-tight">
                Authentic field updates delivered directly to you.
              </h2>
              <p className="text-[#4A4A6A] leading-relaxed text-base">
                Circle members receive exclusive monthly short documentaries and field updates directly from coastal Ghana. You will see classrooms being completed, children receiving scholarships, and patients treated at local health clinics.
              </p>
              <div className="space-y-3 pt-2 text-sm text-[#1E1B6B]">
                <div className="flex items-center gap-3">
                  <Film className="w-5 h-5 text-[#3FBD92]" strokeWidth={1.75} />
                  <span>Monthly video dispatches from Aboadze, Elmina &amp; Cape Coast</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3FBD92]" strokeWidth={1.75} />
                  <span>100% of your gift reaches community programmes directly</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[8px] overflow-hidden aspect-video bg-[#1E1B6B] relative group shadow-lg">
                <img
                  src="/photos/african-school-children.jpg"
                  alt="Ghanaian students supported by The Otoo Circle"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B6B]/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white text-xs">
                    <p className="font-bold text-sm">Monthly Dispatch: The New Desks in Elmina</p>
                    <p className="text-[#3FBD92] mt-0.5">Exclusive Circle Member Story</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Backwards-compatible export alias
export const MonthlyGivingPage = TheSpringPage;
