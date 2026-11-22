import { useState } from 'react';
import { PROGRAMME_STORIES, type ProgrammeStory } from '../data/otooData';

export interface ProgrammeStoriesSectionProps {
  onSelectStoryDetail?: (story: ProgrammeStory) => void;
}

export function ProgrammeStoriesSection({ onSelectStoryDetail }: ProgrammeStoriesSectionProps) {
  const [activeId, setActiveId] = useState<ProgrammeStory['id']>('health');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const activeStory = PROGRAMME_STORIES.find((story) => story.id === activeId) ?? PROGRAMME_STORIES[0];

  return (
    <section id="programmes" className="bg-[#FAF7F0] py-20 lg:py-24 px-5 sm:px-8 lg:px-12 border-b border-[#E9EAE4]">
      <div className="max-w-[1160px] mx-auto">
        <div className="text-center max-w-[680px] mx-auto mb-10 lg:mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1E1B6B] mb-3">Our Programmes</p>
          <h2 className="font-serif text-[34px] sm:text-[42px] lg:text-[46px] leading-[1.16] font-normal text-[#1E1B6B]">
            Why Coastal Ghana
          </h2>
          <p className="mt-6 text-[16px] leading-[1.7] text-[#4A4A6A] max-w-[600px] mx-auto">
            Otoo Foundation works in coastal Ghana where communities face real barriers to healthcare, education and opportunity. Your support builds schools, funds hospital care and creates lasting change for children and families.
          </p>
        </div>
        <div className="relative rounded-[8px] overflow-hidden bg-[#1E1B6B] shadow-[0_12px_36px_rgba(30,27,107,0.12)] aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/9]">
          {!failedImages[activeStory.id] ? (
            <img
              key={activeStory.id}
              src={activeStory.image}
              alt={activeStory.imageAlt}
              referrerPolicy="no-referrer"
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.dataset.triedFallback) {
                  target.dataset.triedFallback = 'true';
                  target.src = activeStory.fallbackImage;
                } else {
                  setFailedImages((prev) => ({ ...prev, [activeStory.id]: true }));
                }
              }}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#2A2670] to-[#141148]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/30 pointer-events-none" aria-hidden="true" />

          <div role="tablist" aria-label="Otoo programme categories" className="absolute top-5 sm:top-7 left-4 right-4 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 z-10">
            {PROGRAMME_STORIES.map((story) => {
              const isActive = story.id === activeStory.id;
              return (
                <button
                  key={story.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(story.id)}
                  className={`px-4 sm:px-5 py-2 rounded-[4px] text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.12em] transition-all whitespace-nowrap cursor-pointer cw-focus shadow-sm ${
                    isActive ? 'bg-[#3FBD92] text-[#1E1B6B]' : 'bg-white text-[#1E1B6B] hover:bg-[#FAF7F0]'
                  }`}
                >
                  {story.tabLabel}
                </button>
              );
            })}
          </div>

          <div role="tabpanel" aria-label={activeStory.tabLabel} className="absolute bottom-5 right-5 left-5 sm:left-auto sm:bottom-8 sm:right-8 bg-white rounded-[6px] p-6 sm:p-8 sm:max-w-[390px] shadow-[0_14px_34px_rgba(0,0,0,0.18)] z-10 border border-[#E9EAE4]">
            <p className="text-[15px] sm:text-[16px] leading-[1.6] text-[#1E1B6B] mb-5">{activeStory.statStatement}</p>
            <button
              type="button"
              onClick={() => onSelectStoryDetail?.(activeStory)}
              className="inline-block text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.14em] text-[#1E1B6B] border-b-2 border-[#3FBD92] pb-1 hover:opacity-75 transition-opacity cursor-pointer cw-focus"
            >
              {activeStory.linkLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
