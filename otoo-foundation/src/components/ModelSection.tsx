import { Droplets, Briefcase, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { JerryCanIcon } from "./JerryCanLogo";

export function ModelSection() {
  return (
    <section className="py-20 lg:py-28 bg-cw-gray-50 border-b border-gray-200" id="model">
      <div className="section-container">
        
        {/* Section Header - Clean, unboxed tracked eyebrow */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="eyebrow-dark">The 100% Promise</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-cw-black tracking-tight">
            Two separate bank accounts. <br />
            <span className="underline decoration-cw-yellow decoration-4 underline-offset-4">
              100% of your money
            </span>{" "}
            goes to the field.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Most charities use a portion of every donation to pay for overhead. We prove that another way is possible. Every dollar you give builds clean water solutions for people in need.
          </p>
        </div>

        {/* The Two Bank Accounts Visual Comparison */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Account 1: Public Giving */}
          <div className="rounded-2xl bg-white border border-gray-200 p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-cw-black border-b-2 border-cw-yellow pb-0.5">
                  Account #1
                </span>
                <JerryCanIcon className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-2xl font-black text-cw-black tracking-tight">
                  Public Donations
                </h3>
                <div className="mt-1 text-3xl font-black text-cw-black">
                  100% to Water
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                When you give to charity: water, every penny funds clean water projects. We never take a cut for credit card fees, flights, salaries, or office rent.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-sm text-gray-700">
                  <Droplets className="w-4 h-4 text-cw-black shrink-0 mt-0.5" strokeWidth={1.75} />
                  <span>Drilling rigs, pipes, filters & solar pumps</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-cw-black shrink-0 mt-0.5" strokeWidth={1.75} />
                  <span>Local water committee training & long-term maintenance</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-700">
                  <MapPin className="w-4 h-4 text-cw-black shrink-0 mt-0.5" strokeWidth={1.75} />
                  <span>GPS coordinates, completion reports & satellite photos</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Funded by: You & millions of generous givers worldwide
              </span>
            </div>
          </div>

          {/* Account 2: The Well (Private Donors) */}
          <div className="rounded-2xl bg-cw-black text-white p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-cw-yellow border-b-2 border-cw-yellow pb-0.5">
                  Account #2
                </span>
                <Briefcase className="w-6 h-6 text-cw-yellow" strokeWidth={1.75} />
              </div>

              <div>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  The Well
                </h3>
                <div className="mt-1 text-3xl font-black text-cw-yellow">
                  Private Donors
                </div>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                A dedicated group of passionate individuals, tech leaders, and foundations invest directly into our operational costs so public donations stay 100% whole.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-cw-yellow shrink-0 mt-0.5" strokeWidth={1.75} />
                  <span>Staff compensation, talent development & field engineers</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-cw-yellow shrink-0 mt-0.5" strokeWidth={1.75} />
                  <span>Technology infrastructure, remote sensors & monitoring</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-cw-yellow shrink-0 mt-0.5" strokeWidth={1.75} />
                  <span>Credit card processing fees and administrative expenses</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Funded by: The Well & visionary private benefactors
              </span>
            </div>
          </div>

        </div>

        {/* Proof Bottom Strip */}
        <div className="mt-14 text-center">
          <a
            href="#proof"
            className="inline-flex items-center gap-2 text-sm font-bold text-cw-black hover:text-gray-600 transition-colors group cursor-pointer"
          >
            <span>Learn how we track every completed well with GPS coordinates</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
