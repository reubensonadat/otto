import { WHY_WATER_STORIES } from '../data/otooData';

export function ImpactStoriesPage({ onOpenDonate }: { onOpenDonate: () => void }) {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-[#FAF7F0] border-b border-[#E9EAE4]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1E1B6B]">
              Impact & Transformation
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#1E1B6B] tracking-tight leading-tight">
              Why clean water changes everything.
            </h1>
            <p className="text-lg sm:text-xl text-[#4A4A6A] leading-relaxed font-normal">
              When a community gains access to clean, safe drinking water, the impact is immediate and profound: childhood diseases disappear, girls stay in school, and mothers build local businesses.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Pillars Deep Dive */}
      <section className="py-20 lg:py-28 border-b border-[#E9EAE4]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12 space-y-20">
          {WHY_WATER_STORIES.map((story, idx) => (
            <div
              key={story.id}
              className={`grid lg:grid-cols-12 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="rounded-[6px] overflow-hidden aspect-[4/3] bg-[#1E1B6B] shadow-sm">
                  <img
                    src={story.image}
                    alt={story.imageAlt}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.triedFallback && story.fallbackImage) {
                        target.dataset.triedFallback = 'true';
                        target.src = story.fallbackImage;
                      }
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className={`lg:col-span-6 space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1E1B6B]">
                  Pillar {idx + 1} • {story.tabLabel}
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1E1B6B] tracking-tight leading-tight">
                  {story.detailHeadline}
                </h2>
                <p className="text-base text-[#4A4A6A] leading-relaxed font-normal">
                  {story.detailBody}
                </p>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#E9EAE4]">
                  {story.proofFacts.map((fact) => (
                    <div key={fact.figure}>
                      <div className="font-serif text-2xl font-bold text-[#1E1B6B]">{fact.figure}</div>
                      <div className="text-xs text-[#6E6E93] mt-1 leading-snug">{fact.caption}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#1E1B6B] text-white text-center">
        <div className="max-w-3xl mx-auto px-5 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-white">
            Help bring clean water to another community.
          </h2>
          <p className="text-[#D5D5EA] text-base">
            100% of your public donation directly funds water projects.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenDonate}
              className="bg-[#3FBD92] hover:bg-[#36A87D] active:scale-[0.99] text-[#1E1B6B] font-bold text-xs sm:text-sm uppercase tracking-[0.14em] px-9 py-3.5 rounded-[4px] transition-all cursor-pointer shadow-sm"
            >
              Give Clean Water Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
