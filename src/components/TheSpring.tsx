import { Users, Globe2, Film, Sparkles, ArrowRight } from "lucide-react";

export function TheSpring() {
  return (
    <section className="py-20 lg:py-28 bg-cw-black text-white relative overflow-hidden" id="the-spring">
      {/* Decorative gradient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cw-yellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cw-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-cw-yellow text-cw-black">
              <Sparkles className="w-3.5 h-3.5 text-cw-black" />
              <span>Monthly Giving Community</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Meet <span className="text-cw-yellow">The Spring.</span> <br />
              The people ending the water crisis.
            </h2>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              The Spring is a passionate global community of over 100,000 people from 140+ countries giving what they can, every single month. Consistent monthly giving provides reliable capital to drill deep wells, lay pipes, and finish projects ahead of schedule.
            </p>

            {/* Spring Member Perks */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-cw-yellow">
                  <Film className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Monthly Video Stories</h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Direct-from-the-field documentaries showing real lives transformed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-cw-yellow">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">GPS Tracking Dashboard</h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Watch water flow into communities you personally helped fund.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a href="#donate" className="btn-cw-primary">
                Join The Spring
              </a>
              <span className="text-xs text-gray-400">
                Cancel or modify anytime in 1 click
              </span>
            </div>
          </div>

          {/* Right card: Community highlight */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-cw-dark border border-white/10 p-8 shadow-2xl relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-cw-dark object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                    alt="Member"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-cw-dark object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                    alt="Member"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-cw-dark object-cover"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
                    alt="Member"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-cw-yellow" />
                    <span>104,820 Active Members</span>
                  </div>
                  <div className="text-xs text-gray-400">United across 140 countries</div>
                </div>
              </div>

              {/* Quote card */}
              <blockquote className="border-l-2 border-cw-yellow pl-4 py-1 italic text-sm text-gray-200 leading-relaxed">
                "I give $30 a month to The Spring. Knowing that every single dollar goes straight to digging clean water wells for real families is the best feeling in the world."
              </blockquote>
              <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                <span>— Marcus T., Portland, OR</span>
                <span className="text-cw-yellow font-bold">Member for 4 years</span>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-gray-400 font-bold">Average Gift</div>
                  <div className="text-2xl font-black text-cw-yellow mt-0.5">$38 / month</div>
                </div>
                <a
                  href="#donate"
                  className="text-xs font-bold text-white hover:text-cw-yellow flex items-center gap-1"
                >
                  <span>See How It Works</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
