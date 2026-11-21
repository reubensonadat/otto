import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Droplets,
  Building2,
  Flag,
  Gift,
  Handshake,
  Heart,
} from 'lucide-react';
import { ACTION_CARDS, type ActionCardItem } from '../data/waterData';
import { CURRENCY_CONFIG, type CurrencyCode } from '../utils/donationLogic';

export interface TakeActionCarouselProps {
  currency: CurrencyCode;
  onSelectAction: (card: ActionCardItem) => void;
}

function ActionCardIcon({ icon }: { icon: ActionCardItem['icon'] }) {
  const iconClass = 'w-4 h-4 text-[#222520]';
  switch (icon) {
    case 'spring':
      return <Droplets className={iconClass} />;
    case 'sponsor':
      return <Building2 className={iconClass} />;
    case 'fundraise':
      return <Flag className={iconClass} />;
    case 'gift':
      return <Gift className={iconClass} />;
    case 'partner':
      return <Handshake className={iconClass} />;
    case 'honor':
      return <Heart className={iconClass} />;
  }
}

export function TakeActionCarousel({ currency, onSelectAction }: TakeActionCarouselProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const visibleCount = 4;
  const maxIndex = Math.max(0, ACTION_CARDS.length - visibleCount);
  const { symbol, springExampleMonthly } = CURRENCY_CONFIG[currency];

  const handlePrev = () => setStartIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setStartIndex((i) => Math.min(maxIndex, i + 1));

  const visibleCards = ACTION_CARDS.slice(startIndex, startIndex + visibleCount);

  return (
    <section id="take-action" className="bg-[#F8EED3] pt-10 pb-20 lg:pb-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1260px] mx-auto">
        {/* Centered Header */}
        <div className="text-center max-w-[660px] mx-auto mb-12">
          <h2 className="font-serif text-[34px] sm:text-[42px] lg:text-[46px] leading-[1.16] font-normal text-[#222520]">
            Ready to take action?
          </h2>
          <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.65] text-[#454742]">
            There are lots of great ways to help us end the global water crisis.{' '}
            <strong className="font-bold text-[#222520]">
              Take action today, and change lives.
            </strong>
          </p>
        </div>

        {/* 4-Card Portrait Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleCards.map((card) => {
            const description =
              card.id === 'monthly-spring'
                ? `A gift of just ${symbol}${springExampleMonthly} a month brings clean water to an entire family each year.`
                : card.description;

            return (
              <div
                key={card.id}
                className="group relative flex flex-col"
              >
                {/* Tilted "THE SPRING" stamp badge matching charitywater.org */}
                {card.badge && (
                  <div
                    aria-hidden="true"
                    className="absolute -top-3 -left-2 z-20 -rotate-6 bg-[#CEDCE2] border border-[#222520] text-[#222520] text-[10px] font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-full shadow-sm"
                  >
                    {card.badge}
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => onSelectAction(card)}
                  className="relative w-full aspect-[3/4] rounded-[8px] overflow-hidden bg-[#222520] text-left shadow-[0_10px_28px_rgba(34,37,32,0.12)] cw-focus cursor-pointer"
                >
                  {!imgErrors[card.id] ? (
                    <img
                      src={card.image}
                      alt={card.imageAlt}
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setImgErrors((prev) => ({ ...prev, [card.id]: true }))
                      }
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#2B3D37] to-[#1A211D]" />
                  )}

                  {/* Subtle bottom scrim for crisp dark bar separation */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent transition-opacity duration-200 group-hover:from-black/75"
                    aria-hidden="true"
                  />

                  {/* Signature dark floating label bar with circular yellow icon */}
                  <div className="absolute bottom-4 left-3.5 right-3.5">
                    <div className="bg-[#222520]/84 backdrop-blur-[2px] rounded-[5px] px-3.5 py-2.5 flex items-center gap-3 border border-white/12 transition-transform duration-200 group-hover:-translate-y-0.5">
                      <span className="w-8 h-8 rounded-full bg-[#FFCA0A] flex items-center justify-center shrink-0">
                        <ActionCardIcon icon={card.icon} />
                      </span>
                      <span className="text-white text-[11px] font-bold uppercase tracking-[0.11em] leading-tight">
                        {card.label}
                      </span>
                    </div>
                  </div>
                </button>
                <span className="sr-only">{description}</span>
              </div>
            );
          })}
        </div>

        {/* Carousel Navigation Arrows & Slide Indicators */}
        <div className="mt-9 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={handlePrev}
            disabled={startIndex === 0}
            aria-label="Previous action cards"
            className="w-10 h-10 rounded-full border border-[#222520]/25 bg-white/70 hover:bg-white disabled:opacity-35 disabled:cursor-not-allowed flex items-center justify-center text-[#222520] transition-colors cursor-pointer cw-focus"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2" role="group" aria-label="Carousel pages">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setStartIndex(idx)}
                aria-label={`Show action slide ${idx + 1}`}
                aria-current={startIndex === idx ? 'true' : undefined}
                className={`h-2 rounded-full transition-all cursor-pointer cw-focus ${
                  startIndex === idx ? 'w-6 bg-[#222520]' : 'w-2 bg-[#222520]/25 hover:bg-[#222520]/50'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={startIndex === maxIndex}
            aria-label="Next action cards"
            className="w-10 h-10 rounded-full border border-[#222520]/25 bg-white/70 hover:bg-white disabled:opacity-35 disabled:cursor-not-allowed flex items-center justify-center text-[#222520] transition-colors cursor-pointer cw-focus"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
