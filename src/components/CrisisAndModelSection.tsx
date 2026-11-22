import { HundredPercentRing } from './BrandIcons';

export interface CrisisAndModelSectionProps {
  onGiveToday: () => void;
  onOpenModelInfo: () => void;
}

export function CrisisAndModelSection({ onGiveToday, onOpenModelInfo }: CrisisAndModelSectionProps) {
  return (
    <section className="bg-[#FAF7F0] py-20 lg:py-28 px-5 sm:px-8 lg:px-12 border-b border-[#E9EAE4]">
      <div className="max-w-[820px] mx-auto text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1E1B6B] mb-3">
          Our Mission & Promise
        </p>
        <h2 className="font-serif text-[34px] sm:text-[42px] lg:text-[46px] leading-[1.16] font-normal text-[#1E1B6B]">
          Restoring hope, transforming lives across Ghana&rsquo;s coast
        </h2>
        <p className="mt-6 text-[16px] leading-[1.7] text-[#4A4A6A] max-w-[600px] mx-auto">
          Otoo Foundation is a UK-based nonprofit working in coastal Ghana. We restore hope and transform
          lives through healthcare, education and community empowerment &mdash; from community health
          screenings and student scholarships to STEM activities and empowerment for women and families.
        </p>
        <div className="mt-8">
          <button
            type="button"
            onClick={onGiveToday}
            className="inline-flex items-center justify-center bg-[#3FBD92] hover:bg-[#36A87D] active:scale-[0.99] text-[#1E1B6B] font-bold text-[12px] uppercase tracking-[0.14em] px-8 py-3.5 rounded-[4px] transition-all cursor-pointer cw-focus min-h-[44px] shadow-sm"
          >
            Give Today
          </button>
        </div>
        <div className="mt-16 lg:mt-20 max-w-[660px] mx-auto bg-[#E8F7F0] border border-[#BFE8D6] rounded-[6px] px-7 py-7 sm:px-10 sm:py-8 text-left flex flex-col sm:flex-row items-center gap-6 sm:gap-8 shadow-sm">
          <HundredPercentRing className="w-[88px] h-[88px]" />
          <div className="text-center sm:text-left">
            <p className="text-[15px] sm:text-[16px] leading-[1.6] text-[#1E1B6B]">
              Thanks to a small group of generous philanthropists who fund our operational
              expenses, <strong className="font-bold">100% of your donation</strong> directly
              funds our programmes in Ghana.
            </p>
            <button
              type="button"
              onClick={onOpenModelInfo}
              className="mt-3 inline-block text-[11px] font-bold uppercase tracking-[0.14em] text-[#1E1B6B] border-b-2 border-[#3FBD92] pb-0.5 hover:opacity-75 transition-opacity cursor-pointer cw-focus"
            >
              Learn about our 100% model
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
