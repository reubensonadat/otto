import { useState } from "react";
import { ShieldCheck, MapPin, CheckCircle2, Heart, ArrowRight } from "lucide-react";
import { JerryCanIcon } from "./JerryCanLogo";

const MONTHLY_AMOUNTS = [20, 40, 60, 100];
const ONE_TIME_AMOUNTS = [50, 100, 250, 500];

export function Hero() {
  const [frequency, setFrequency] = useState<"monthly" | "once">("monthly");
  const [selectedAmount, setSelectedAmount] = useState<number>(40);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [donated, setDonated] = useState(false);

  const amounts = frequency === "monthly" ? MONTHLY_AMOUNTS : ONE_TIME_AMOUNTS;
  const currentVal = isCustom ? Number(customAmount) || 0 : selectedAmount;

  const getImpactMessage = () => {
    if (frequency === "monthly") {
      const people = Math.max(1, Math.round((currentVal * 12) / 40));
      return `Brings clean water to ~${people} people every single year.`;
    } else {
      const people = Math.max(1, Math.round(currentVal / 40));
      return `Provides ~${people} people with clean, reliable water for life.`;
    }
  };

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentVal <= 0) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setDonated(true);
    }, 1200);
  };

  return (
    <section className="relative bg-white pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-gray-100">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Hero Copy & Value Props */}
          <div className="lg:col-span-7 space-y-8">
            {/* Clean unboxed eyebrow */}
            <span className="eyebrow-dark">The Global Water Crisis</span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-cw-black leading-[1.08]">
              703 million people live without access to{" "}
              <span className="underline decoration-cw-yellow decoration-8 underline-offset-8">
                clean water.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal max-w-2xl">
              We’re on a mission to end the water crisis in our lifetime. 100% of your public donation directly funds sustainable clean water projects in rural communities.
            </p>

            {/* Trust Pillars: Monochrome, clean, monoline */}
            <div className="grid sm:grid-cols-3 gap-6 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-cw-gray-100 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-cw-black" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-cw-black">100% Model</h3>
                  <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                    Private donors fund operations so 100% goes to water.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-cw-gray-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-cw-black" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-cw-black">GPS Proof</h3>
                  <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                    Exact coordinates & field photos for every project.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-cw-gray-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-cw-black" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-cw-black">Local Partners</h3>
                  <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                    Built & sustained by local community leaders.
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Banner Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-sm text-gray-600 font-medium">
              <div className="flex items-center gap-2">
                <span className="font-black text-cw-black text-xl">17.5M+</span>
                <span>people served</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-2">
                <span className="font-black text-cw-black text-xl">150,000+</span>
                <span>water projects funded</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-2">
                <span className="font-black text-cw-black text-xl">29</span>
                <span>countries</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Charity: Water Giving Module */}
          <div className="lg:col-span-5" id="donate">
            <div className="bg-white rounded-2xl p-7 sm:p-9 border border-gray-200 shadow-sm relative">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <JerryCanIcon className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider text-cw-black">
                    Join The Movement
                  </span>
                </div>
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                  100% Tax Deductible
                </span>
              </div>

              {donated ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 bg-cw-yellow rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-6 h-6 text-cw-black fill-cw-black" />
                  </div>
                  <h3 className="text-2xl font-black text-cw-black">Thank you!</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Your gift of <span className="font-bold text-cw-black">${currentVal}</span> {frequency === "monthly" ? "per month" : ""} will bring clean, safe water to families who need it most.
                  </p>
                  <button
                    onClick={() => setDonated(false)}
                    className="btn-cw-dark w-full mt-4"
                  >
                    Give Again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDonate} className="space-y-6">
                  {/* Frequency Toggle: Monthly (The Spring) vs One-time */}
                  <div>
                    <div className="grid grid-cols-2 p-1 bg-cw-gray-100 rounded-full">
                      <button
                        type="button"
                        onClick={() => {
                          setFrequency("monthly");
                          setIsCustom(false);
                          setSelectedAmount(40);
                        }}
                        className={`py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                          frequency === "monthly"
                            ? "bg-cw-black text-white shadow-sm"
                            : "text-gray-600 hover:text-cw-black"
                        }`}
                      >
                        Give Monthly
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setFrequency("once");
                          setIsCustom(false);
                          setSelectedAmount(100);
                        }}
                        className={`py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                          frequency === "once"
                            ? "bg-cw-black text-white shadow-sm"
                            : "text-gray-600 hover:text-cw-black"
                        }`}
                      >
                        Give Once
                      </button>
                    </div>
                  </div>

                  {/* Preset Amount Pills */}
                  <div className="space-y-2">
                    <div className="grid grid-cols-4 gap-2">
                      {amounts.map((amt) => {
                        const active = !isCustom && selectedAmount === amt;
                        return (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => {
                              setSelectedAmount(amt);
                              setIsCustom(false);
                            }}
                            className={`py-3 px-2 rounded-xl font-black text-base transition-all border cursor-pointer ${
                              active
                                ? "bg-cw-yellow border-cw-yellow text-cw-black"
                                : "bg-white border-gray-200 text-gray-700 hover:border-gray-400"
                            }`}
                          >
                            ${amt}
                          </button>
                        );
                      })}
                    </div>

                    {!isCustom ? (
                      <button
                        type="button"
                        onClick={() => {
                          setIsCustom(true);
                          setCustomAmount("");
                        }}
                        className="w-full py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-500 hover:border-cw-black hover:text-cw-black transition-colors"
                      >
                        + Other amount
                      </button>
                    ) : (
                      <div className="relative mt-2">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cw-black font-bold text-base">
                          $
                        </span>
                        <input
                          type="number"
                          min="1"
                          placeholder="Amount"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          autoFocus
                          className="w-full pl-8 pr-16 py-2.5 rounded-xl border-2 border-cw-black text-cw-black font-bold text-base focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setIsCustom(false);
                            setSelectedAmount(amounts[1]);
                          }}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 hover:text-cw-black"
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Impact statement - minimal, no arbitrary colors */}
                  <div className="p-3.5 rounded-xl border border-gray-200 bg-cw-gray-50 text-xs text-cw-black leading-relaxed">
                    <span className="font-extrabold">Your Impact: </span>
                    {getImpactMessage()}
                  </div>

                  {/* Primary CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting || currentVal <= 0}
                    className="btn-cw-primary w-full py-4 text-sm flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Processing...</span>
                    ) : (
                      <>
                        <span>
                          {frequency === "monthly" ? "Join The Spring" : "Give Now"} • ${currentVal}
                          {frequency === "monthly" ? "/mo" : ""}
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <div className="text-center space-y-2">
                    <p className="text-[11px] text-gray-500 leading-normal">
                      <strong className="text-cw-black font-bold">100% of public donations</strong> directly fund clean water projects. Private donors pay our operational costs.
                    </p>
                    <p className="text-[10px] text-gray-400">
                      🔒 Secure 256-bit SSL • Cancel monthly gifts anytime
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
