import { FileText, Download, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { JerryCanIcon } from "../components/JerryCanLogo";

const financials = [
  { year: "2024", form990: "Download Form 990", audit: "Download Audited Financials", revenue: "$114.2M" },
  { year: "2023", form990: "Download Form 990", audit: "Download Audited Financials", revenue: "$108.6M" },
  { year: "2022", form990: "Download Form 990", audit: "Download Audited Financials", revenue: "$97.4M" },
  { year: "2021", form990: "Download Form 990", audit: "Download Audited Financials", revenue: "$89.1M" },
];

const faqs = [
  {
    q: "How does 100% of my donation go to water?",
    a: "We maintain two separate bank accounts. Public donations go into our Water Account and are spent only on the direct costs of bringing clean water to people in developing nations. All staff salaries, office rent, flights, and software are paid out of our Operations Account, which is funded by private benefactors.",
  },
  {
    q: "Who are the private donors who fund overhead?",
    a: "We call this community 'The Well.' It is comprised of visionary entrepreneurs, families, and foundation partners who make multi-year commitments specifically to pay for overhead so millions of public donors never have to.",
  },
  {
    q: "Do you take out credit card processing fees?",
    a: "No! When you give $100 on your credit card, your full $100 goes to water projects. The Well covers all credit card transaction processing fees.",
  },
  {
    q: "Can I see proof of where my donation went?",
    a: "Yes. Every public donor receives a personalized completion report with photos, community details, and precise GPS coordinates on Google Maps when their project is finished.",
  },
];

export function ModelPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-cw-gray-50 border-b border-gray-200">
        <div className="section-container">
          <div className="max-w-3xl space-y-6">
            <span className="eyebrow-dark">The 100% Model</span>
            <h1 className="text-4xl sm:text-6xl font-black text-cw-black tracking-tight leading-tight">
              We reinvented charity transparency from scratch.
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal">
              From our very first day in 2006, we made a radical promise: 100% of public donations would directly fund clean water projects. Private donors independently fund all of our operating costs.
            </p>
          </div>
        </div>
      </section>

      {/* Two Bank Accounts Detail */}
      <section className="py-20 lg:py-28 border-b border-gray-100">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            
            <div className="cw-card space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-cw-black border-b-2 border-cw-yellow pb-0.5">
                  Account #1: Water Projects
                </span>
                <JerryCanIcon className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-black text-cw-black">The Water Fund</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Funded by everyday donors, schools, kids' lemonade stands, and monthly givers. 100% of these dollars are wired directly to vetted local implementers in the field.
              </p>
              <ul className="space-y-3 text-sm text-gray-700 pt-2 border-t border-gray-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cw-black" strokeWidth={1.75} />
                  <span>Drilling machinery, pipes, solar water pumps</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cw-black" strokeWidth={1.75} />
                  <span>BioSand filters, rainwater harvesting tanks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cw-black" strokeWidth={1.75} />
                  <span>GPS mapping & community water committee training</span>
                </li>
              </ul>
            </div>

            <div className="cw-card bg-cw-black text-white space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-cw-yellow border-b-2 border-cw-yellow pb-0.5">
                  Account #2: Operations
                </span>
                <ShieldCheck className="w-7 h-7 text-cw-yellow" strokeWidth={1.75} />
              </div>
              <h2 className="text-3xl font-black text-white">The Well</h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Funded by visionary private entrepreneurs, families, and foundation board members who cover all overhead expenses so public dollars remain pure.
              </p>
              <ul className="space-y-3 text-sm text-gray-300 pt-2 border-t border-neutral-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cw-yellow" strokeWidth={1.75} />
                  <span>Staff compensation, benefits & recruiting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cw-yellow" strokeWidth={1.75} />
                  <span>Office space, server hosting & cloud architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cw-yellow" strokeWidth={1.75} />
                  <span>100% of donor credit card processing transaction fees</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Audited Financials & Form 990 */}
      <section className="py-20 lg:py-28 bg-cw-gray-50 border-b border-gray-200">
        <div className="section-container">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="eyebrow-dark">Financial Accountability</span>
            <h2 className="text-3xl sm:text-4xl font-black text-cw-black tracking-tight">
              Radical transparency. Open books.
            </h2>
            <p className="text-gray-600 leading-relaxed font-normal">
              Every year we are audited by independent certified public accountants. You can download and inspect our complete financial records and tax filings.
            </p>
          </div>

          <div className="cw-card overflow-hidden p-0 max-w-4xl">
            <div className="divide-y divide-gray-200">
              {financials.map((f) => (
                <div key={f.year} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <FileText className="w-6 h-6 text-cw-black" strokeWidth={1.75} />
                    <div>
                      <div className="font-black text-lg text-cw-black">{f.year} Annual Financial Package</div>
                      <div className="text-xs text-gray-500 font-medium">Total Clean Water Revenue: {f.revenue}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="text-xs font-bold text-cw-black hover:text-gray-600 flex items-center gap-1.5 cursor-pointer">
                      <Download className="w-3.5 h-3.5" />
                      <span>{f.audit}</span>
                    </button>
                    <span className="text-gray-300">|</span>
                    <button className="text-xs font-bold text-cw-black hover:text-gray-600 flex items-center gap-1.5 cursor-pointer">
                      <Download className="w-3.5 h-3.5" />
                      <span>{f.form990}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 border-b border-gray-100">
        <div className="section-container max-w-4xl">
          <div className="mb-14 space-y-3">
            <span className="eyebrow-dark">Frequently Asked Questions</span>
            <h2 className="text-3xl sm:text-4xl font-black text-cw-black tracking-tight">
              Questions about the 100% model.
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="cw-card p-6 sm:p-8 space-y-2">
                <h3 className="font-black text-lg text-cw-black">{faq.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link to="/#donate" className="btn-cw-primary">
              Give With 100% Confidence
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
