import { useState } from 'react';
import { Film, Globe2 } from 'lucide-react';
import type { CurrencyCode } from '../utils/donationLogic';

export interface TheSpringPageProps {
  currency: CurrencyCode;
  onJoinSpring: (amount: number) => void;
}

const SPRING_TIERS = [
  { amount: 15, people: 5, label: "Gives clean water to 5 people every year" },
  { amount: 30, people: 10, label: "Gives clean water to 10 people every year — an entire family" },
  { amount: 60, people: 20, label: "Gives clean water to 20 people every year, transforming a neighborhood" },
  { amount: 120, people: 40, label: "Funds clean water for 40 people every single year" },
];

export function TheSpringPage({ currency, onJoinSpring }: TheSpringPageProps) {
  const [selectedTier, setSelectedTier] = useState(SPRING_TIERS[1]);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#1E1B6B] text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#3FBD92]">
              The Monthly Giving Movement
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.08] text-white">
              Meet The Spring.
            </h1>
            <p className="text-lg sm:text-xl text-[#D5D5EA] leading-relaxed font-normal">
              A community of monthly givers united across coastal Ghana and around the world. By giving monthly, you provide dependable capital so local drilling teams can finish water wells without stopping.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onJoinSpring(selectedTier.amount)}
                className="bg-[#3FBD92] hover:bg-[#36A87D] active:scale-[0.99] text-[#1E1B6B] font-bold text-[12px] uppercase tracking-[0.14em] px-8 py-3.5 rounded-[4px] transition-all cursor-pointer shadow-sm"
              >
                Join The Spring Today
              </button>
              <span className="text-xs text-[#A5A5C4]">
                100% funds clean water • Cancel or change anytime
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
              See what your monthly gift achieves.
            </h2>
          </div>

          <div className="bg-white rounded-[6px] border border-[#E9EAE4] p-8 sm:p-12 shadow-[0_8px_30px_rgba(30,27,107,0.06)] space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {SPRING_TIERS.map((tier) => (
                <button
                  key={tier.amount}
                  type="button"
                  onClick={() => setSelectedTier(tier)}
                  className={`py-4 rounded-[4px] font-bold text-lg transition-all border cursor-pointer tabular-nums ${
                    selectedTier.amount === tier.amount
                      ? 'bg-[#3FBD92] border-[#3FBD92] text-[#1E1B6B] shadow-sm'
                      : 'bg-[#F4F5F0] border-[#E9EAE4] text-[#565677] hover:border-[#1E1B6B] hover:text-[#1E1B6B]'
                  }`}
                >
                  {currency === 'GBP' ? '£' : '$'}{tier.amount}/mo
                </button>
              ))}
            </div>

            <div className="text-center py-6 border-y border-[#E9EAE4] space-y-2">
              <div className="font-serif text-5xl font-normal text-[#1E1B6B] tabular-nums">
                {selectedTier.people} People
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#565677]">
                Gain clean water every year
              </div>
              <p className="text-sm text-[#4A4A6A] max-w-lg mx-auto pt-2">
                {selectedTier.label}
              </p>
            </div>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => onJoinSpring(selectedTier.amount)}
                className="bg-[#3FBD92] hover:bg-[#36A87D] active:scale-[0.99] text-[#1E1B6B] font-bold text-[12px] uppercase tracking-[0.14em] px-10 py-3.5 rounded-[4px] transition-all cursor-pointer shadow-sm"
              >
                Start Giving {currency === 'GBP' ? '£' : '$'}{selectedTier.amount} / Month
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
                Behind The Camera
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1E1B6B] tracking-tight">
                Exclusive field films delivered to your inbox.
              </h2>
              <p className="text-[#4A4A6A] leading-relaxed text-base">
                Every month, our in-house film team captures intimate, cinematic documentary shorts directly from coastal villages. You’ll meet the mothers, students, and engineers whose lives you’re changing.
              </p>
              <div className="space-y-3 pt-2 text-sm text-[#1E1B6B]">
                <div className="flex items-center gap-3">
                  <Film className="w-5 h-5 text-[#3FBD92]" strokeWidth={1.75} />
                  <span>12 cinematic documentaries produced annually</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe2 className="w-5 h-5 text-[#3FBD92]" strokeWidth={1.75} />
                  <span>Real-time GPS coordinates of your wells</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[8px] overflow-hidden aspect-video bg-[#1E1B6B] relative group shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1543623252-cb433439c2e3?auto=format&fit=crop&w=1000&q=80"
                  alt="Field film documentary"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      target.src = '/field/outreach.jpg';
                    }
                  }}
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-[6px] bg-[#3FBD92] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform cursor-pointer">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-12 border-l-[#1E1B6B] ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-[#1E1B6B]/90 backdrop-blur-sm p-3.5 rounded-[4px] text-white text-xs flex items-center justify-between border border-white/10">
                  <span className="font-bold">Episode 42: The Water Well in Aboadze</span>
                  <span className="font-mono text-[#3FBD92]">12:40</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
