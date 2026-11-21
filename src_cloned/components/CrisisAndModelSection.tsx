import React from 'react';
import { HundredPercentRing } from './BrandIcons';

export interface CrisisAndModelSectionProps {
  onGiveToday: () => void;
  onOpenModelInfo: () => void;
}

export function CrisisAndModelSection({
  onGiveToday,
  onOpenModelInfo,
}: CrisisAndModelSectionProps) {
  return (
    <section className="bg-[#FAF7F0] py-20 lg:py-28 px-5 sm:px-8 lg:px-12">
      <div className="max-w-[820px] mx-auto text-center">
        <h2 className="font-serif text-[34px] sm:text-[42px] lg:text-[46px] leading-[1.16] font-normal text-[#222520]">
          696 million people lack basic access to clean and safe drinking water
        </h2>

        <p className="mt-6 text-[16px] leading-[1.7] text-[#454742] max-w-[600px] mx-auto">
          Our work to end the water crisis needs your support. You can help open the door to
          education, income, dignity, and health — especially for women and children.
        </p>

        <div className="mt-8">
          <button
            type="button"
            onClick={onGiveToday}
            className="inline-flex items-center justify-center bg-[#FFCA0A] hover:bg-[#F0BC00] active:scale-[0.99] text-[#222520] font-bold text-[12px] uppercase tracking-[0.14em] px-8 py-3.5 rounded-[4px] transition-all cursor-pointer cw-focus min-h-[44px]"
          >
            Give Today
          </button>
        </div>

        {/* 100% Model Framed Sand Callout Card */}
        <div className="mt-16 lg:mt-20 max-w-[660px] mx-auto bg-[#F8EED3] border border-[#E2D6B5] rounded-[8px] px-7 py-7 sm:px-10 sm:py-8 text-left flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          <HundredPercentRing className="w-[88px] h-[88px]" />

          <div className="text-center sm:text-left">
            <p className="text-[15px] sm:text-[16px] leading-[1.6] text-[#222520]">
              Thanks to a small group of generous philanthropists who fund our operational
              expenses, <strong className="font-bold">100% of your donation</strong> directly
              funds clean water projects.
            </p>
            <button
              type="button"
              onClick={onOpenModelInfo}
              className="mt-3 inline-block text-[11px] font-bold uppercase tracking-[0.14em] text-[#222520] border-b-2 border-[#FFCA0A] pb-0.5 hover:opacity-75 transition-opacity cursor-pointer cw-focus"
            >
              Learn about our 100% model
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
