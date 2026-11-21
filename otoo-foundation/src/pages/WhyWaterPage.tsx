import { HeartPulse, Clock, GraduationCap, TrendingUp, Droplets, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    name: "Drilled Wells & Boreholes",
    desc: "Tapping deep underground aquifers (up to 300+ feet) to reach pure, bacteria-free water that flows reliably through severe droughts.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Piped Water Systems",
    desc: "Gravity-fed or solar-powered networks that deliver clean water directly to multiple tap stands across entire hillside villages and schools.",
    image: "https://images.unsplash.com/photo-1585186682011-03a4b641d6e1?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "BioSand & Household Filters",
    desc: "Simple, highly effective concrete or plastic filters using sand, gravel, and biological layers to eliminate pathogens right in home kitchens.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Rainwater Harvesting",
    desc: "Large catchment gutters and sealed storage tanks collecting clean seasonal rainfall for schools and mountainous communities.",
    image: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=700&q=80",
  },
];

export function WhyWaterPage() {
  return (
    <div className="bg-white">
      {/* Subpage Hero */}
      <section className="py-20 lg:py-28 bg-cw-gray-50 border-b border-gray-200">
        <div className="section-container">
          <div className="max-w-3xl space-y-6">
            <span className="eyebrow-dark">The Global Water Crisis</span>
            <h1 className="text-4xl sm:text-6xl font-black text-cw-black tracking-tight leading-tight">
              Why clean water changes everything.
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal">
              703 million people live without access to clean water. That’s 1 in 10 people on earth. We believe solving the water crisis is the most foundational thing we can do to eliminate extreme poverty.
            </p>
          </div>
        </div>
      </section>

      {/* The 4 Pillars */}
      <section className="py-20 lg:py-28 border-b border-gray-100">
        <div className="section-container">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="eyebrow-dark">The Ripple Effect</span>
            <h2 className="text-3xl sm:text-4xl font-black text-cw-black tracking-tight">
              Four transformations that happen when clean water arrives.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="cw-card space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cw-gray-100 flex items-center justify-center">
                <HeartPulse className="w-6 h-6 text-cw-black" strokeWidth={1.75} />
              </div>
              <h3 className="text-2xl font-black text-cw-black">Health</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Diseases from dirty water and lack of basic sanitation kill more people every year than all forms of violence combined. Unsafe water causes debilitating diarrhea, cholera, and intestinal parasites. When clean water is introduced, childhood mortality drops drastically, and families thrive.
              </p>
            </div>

            <div className="cw-card space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cw-gray-100 flex items-center justify-center">
                <Clock className="w-6 h-6 text-cw-black" strokeWidth={1.75} />
              </div>
              <h3 className="text-2xl font-black text-cw-black">Time</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                In developing nations, women and girls collectively spend 200 million hours every single day trekking miles across rough terrain to fetch water from contaminated rivers. Having clean water steps from home returns these hours to pursue education, livelihoods, and family life.
              </p>
            </div>

            <div className="cw-card space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cw-gray-100 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-cw-black" strokeWidth={1.75} />
              </div>
              <h3 className="text-2xl font-black text-cw-black">Education</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Children often miss school because they are either sick from waterborne pathogens or tasked with daily water collection. Furthermore, adolescent girls routinely drop out when schools lack private sanitation facilities. Clean water and latrines increase school attendance by over 80%.
              </p>
            </div>

            <div className="cw-card space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cw-gray-100 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-cw-black" strokeWidth={1.75} />
              </div>
              <h3 className="text-2xl font-black text-cw-black">Economy</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Every $1 invested in clean water yields an estimated $4 to $12 in economic return through reduced healthcare expenses, improved agricultural productivity, and newly unlocked labor hours. Clean water turns fragile villages into thriving local economies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 lg:py-28 bg-cw-gray-50 border-b border-gray-200">
        <div className="section-container">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="eyebrow-dark">Appropriate Technology</span>
            <h2 className="text-3xl sm:text-4xl font-black text-cw-black tracking-tight">
              One size never fits all.
            </h2>
            <p className="text-gray-600 leading-relaxed font-normal">
              We don’t believe in a single universal fix. We fund local partners who choose the most sustainable water solution based on local topography, climate, and community needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((item) => (
              <div key={item.name} className="cw-card overflow-hidden p-0 flex flex-col justify-between">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-2 flex-grow">
                  <h3 className="font-black text-lg text-cw-black">{item.name}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/#donate" className="btn-cw-primary">
              Fund A Clean Water Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
