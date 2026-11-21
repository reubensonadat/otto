import { HeartPulse, Clock, GraduationCap, TrendingUp, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: <HeartPulse className="w-6 h-6 text-cw-black" strokeWidth={1.75} />,
    title: "Health",
    stat: "50% Drop",
    statDesc: "in preventable waterborne illness",
    desc: "Diseases from dirty water kill more people every year than all forms of violence combined. Access to clean water restores vitality and prevents childhood illnesses.",
  },
  {
    icon: <Clock className="w-6 h-6 text-cw-black" strokeWidth={1.75} />,
    title: "Time",
    stat: "200M Hours",
    statDesc: "walked every day by women & girls",
    desc: "Globally, women and girls spend 200 million hours every day collecting water. Clean water points in villages return precious hours for family, school, and work.",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-cw-black" strokeWidth={1.75} />,
    title: "Education",
    stat: "90%+ Attendance",
    statDesc: "when clean water is at school",
    desc: "Clean water and private sanitation keep girls in school. When safe water arrives, enrollment, literacy rates, and academic achievement soar.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-cw-black" strokeWidth={1.75} />,
    title: "Economy",
    stat: "$4 to $12 ROI",
    statDesc: "for every $1 invested in water",
    desc: "Clean water unlocks local agriculture, small businesses, and enterprise. Every dollar invested yields substantial and lasting economic growth.",
  },
];

export function WhyWaterSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-gray-100" id="why-water">
      <div className="section-container">
        
        {/* Header - Unboxed, tracked uppercase */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="eyebrow-dark">Why Water?</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-cw-black tracking-tight">
            Water changes everything.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            When a community gets access to clean, safe drinking water, everything transforms: health, education, local economies, and opportunities for women.
          </p>
        </div>

        {/* 4 Pillars Grid - Monochrome, minimal line icons, disciplined palette */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item) => (
            <div
              key={item.title}
              className="cw-card flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-cw-gray-100 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-cw-black mb-2">
                  {item.title}
                </h3>
                <div className="mb-4">
                  <div className="text-2xl font-black text-cw-black">{item.stat}</div>
                  <div className="text-xs text-gray-500 font-semibold">{item.statDesc}</div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100">
                <a
                  href="#donate"
                  className="text-xs font-bold text-cw-black hover:text-cw-yellow flex items-center gap-1 group"
                >
                  <span>Give clean water</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
