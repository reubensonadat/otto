import { useState } from "react";
import { Users, Film, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const tiers = [
  { amount: 20, people: 6, desc: "Gives clean water to 6 people every year. Perfect for students and first-time monthly givers." },
  { amount: 35, people: 10, desc: "Brings safe water to an entire extended family every year. Our most popular monthly tier." },
  { amount: 50, people: 15, desc: "Gives 15 people sustainable clean water, latrines, and handwashing education every year." },
  { amount: 100, people: 30, desc: "Funds clean water for 30 people every single year, transforming an entire village cluster." },
];

export function TheSpringPage() {
  const [activeTier, setActiveTier] = useState(tiers[1]);

  return (
    <div className="bg-white">
      {/* Dark Dramatic Hero */}
      <section className="py-24 lg:py-32 bg-cw-black text-white relative">
        <div className="section-container">
          <div className="max-w-3xl space-y-6">
            <span className="eyebrow">The Monthly Giving Movement</span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Meet The Spring.
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-normal">
              A community of over 100,000 people in 140 countries giving clean water every single month. By giving consistently, you provide predictable funding that allows local drilling teams to work without stopping.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a href="#join" className="btn-cw-primary">
                Join The Spring
              </a>
              <span className="text-xs text-gray-400">
                100% funds clean water • Cancel anytime
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tier Calculator */}
      <section className="py-20 lg:py-28 bg-cw-gray-50 border-b border-gray-200" id="join">
        <div className="section-container max-w-4xl">
          <div className="text-center mb-14 space-y-3">
            <span className="eyebrow-dark">Choose Your Monthly Impact</span>
            <h2 className="text-3xl sm:text-4xl font-black text-cw-black tracking-tight">
              See what your monthly gift achieves.
            </h2>
          </div>

          <div className="cw-card p-8 sm:p-12 space-y-8">
            <div className="grid grid-cols-4 gap-3">
              {tiers.map((t) => (
                <button
                  key={t.amount}
                  onClick={() => setActiveTier(t)}
                  className={`py-4 rounded-xl font-black text-lg transition-all border cursor-pointer ${
                    activeTier.amount === t.amount
                      ? "bg-cw-yellow border-cw-yellow text-cw-black shadow-sm"
                      : "bg-white border-gray-200 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  ${t.amount}/mo
                </button>
              ))}
            </div>

            <div className="text-center space-y-3 py-6 border-y border-gray-100">
              <div className="text-5xl font-black text-cw-black">
                {activeTier.people} People
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Receive clean water every single year
              </div>
              <p className="text-sm text-gray-600 max-w-lg mx-auto pt-2 leading-relaxed">
                {activeTier.desc}
              </p>
            </div>

            <div className="text-center pt-2">
              <Link
                to="/#donate"
                className="btn-cw-primary px-10 py-4 text-sm"
              >
                Start Giving ${activeTier.amount} / Month
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Member Stories & Documentary Film */}
      <section className="py-20 lg:py-28 border-b border-gray-100">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow-dark">Behind The Camera</span>
              <h2 className="text-3xl sm:text-4xl font-black text-cw-black tracking-tight">
                Exclusive field films. Straight to your inbox.
              </h2>
              <p className="text-gray-600 leading-relaxed font-normal text-base">
                Every month, our in-house film team produces intimate, cinematic short documentaries from communities around the world. You’ll meet the mothers, children, and drillers whose lives you touch.
              </p>
              <div className="flex items-center gap-4 text-xs font-bold text-cw-black uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <Film className="w-4 h-4 text-cw-black" strokeWidth={1.75} />
                  12 New Films / Year
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-cw-black" strokeWidth={1.75} />
                  Live Q&As with Field Teams
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden aspect-video bg-cw-black relative group shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1543623252-cb433439c2e3?auto=format&fit=crop&w=1000&q=80"
                  alt="Film thumbnail"
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-cw-yellow flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-12 border-l-cw-black ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-cw-black/80 backdrop-blur-sm p-3 rounded-xl text-white text-xs flex items-center justify-between">
                  <span>Episode 42: The First Well in Adi Daero</span>
                  <span className="font-mono text-cw-yellow">12:40</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
