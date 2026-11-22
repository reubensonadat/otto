import { FileText, Download, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { GhanaCediCoin } from '../components/BrandIcons';

const FINANCIAL_REPORTS = [
  { year: '2026', revenue: '£500K Goal', status: 'Active 2026 Strategy' },
  { year: '2025', revenue: '£380K', status: 'Audited & Filed' },
  { year: '2024', revenue: '£295K', status: 'Audited & Filed' },
  { year: '2023', revenue: '£210K', status: 'Audited & Filed' },
];

const FAQS = [
  {
    q: 'How does 100% of my public donation go directly to community programmes?',
    a: 'We operate with two separate, strictly divided accounting channels. Every penny donated by the public goes directly to school construction, healthcare clinic operations, medical procedures, and student scholarships in coastal Ghana. Operational overhead is funded independently.',
  },
  {
    q: 'Who covers your operational overhead and staff salaries?',
    a: 'Our founder, board members, and private institutional benefactors fund our organizational costs, logistics, legal filing, and technology infrastructure through separate private contributions.',
  },
  {
    q: 'What about credit card and payment processing fees?',
    a: 'When you donate £50 or GH₵750, 100% of that value goes directly into our community programme fund. Private donors reimburse transaction fees so that your gift remains entirely whole.',
  },
  {
    q: 'How do you verify and prove that money was spent responsibly?',
    a: 'We provide radical transparency: GPS coordinates, photographic construction progress, student enrollment rosters, and public project milestone reports for every school and clinic we support.',
  },
];

export function FinancialsPage({ onOpenDonate }: { onOpenDonate: () => void }) {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-[#FAF7F0] border-b border-[#E9EAE4]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1E1B6B]">
              Financial Accountability
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#1E1B6B] tracking-tight leading-tight">
              Radical transparency. Open books.
            </h1>
            <p className="text-lg sm:text-xl text-[#4A4A6A] leading-relaxed font-normal">
              We believe a foundation must earn trust through evidence. We prove every pound or cedi you give, maintain two strictly separated accounts, and publish verified impact reports.
            </p>
          </div>
        </div>
      </section>

      {/* Two Accounts Comparison */}
      <section className="py-20 lg:py-28 border-b border-[#E9EAE4]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            
            <div className="bg-white rounded-[8px] border border-[#E9EAE4] p-8 sm:p-10 space-y-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1E1B6B] border-b-2 border-[#3FBD92] pb-0.5">
                  Account #1: Community Programme Fund
                </span>
                <GhanaCediCoin className="w-8 h-8" />
              </div>
              <h2 className="font-serif text-3xl text-[#1E1B6B]">Public Donations</h2>
              <div className="font-serif text-4xl font-normal text-[#1E1B6B]">100% to the Ground</div>
              <p className="text-sm text-[#4A4A6A] leading-relaxed">
                When you give to Otoo Foundation, 100% funds healthcare, education, and community builds. We never deduct salaries or operational expenses from public gifts.
              </p>
              <ul className="space-y-3 text-sm text-[#1E1B6B] pt-2 border-t border-[#E9EAE4]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3FBD92]" strokeWidth={1.75} />
                  <span>Classroom construction, dual desks &amp; books in Elmina</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3FBD92]" strokeWidth={1.75} />
                  <span>Free community health screenings &amp; surgery in Aboadze</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3FBD92]" strokeWidth={1.75} />
                  <span>Otoo STEM Challenge robotics kits &amp; laptops</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3FBD92]" strokeWidth={1.75} />
                  <span>Verified milestone photo proof &amp; GPS coordinates</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1E1B6B] text-white rounded-[8px] border border-white/10 p-8 sm:p-10 space-y-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#3FBD92] border-b-2 border-[#3FBD92] pb-0.5">
                  Account #2: Operations &amp; Governance
                </span>
                <ShieldCheck className="w-8 h-8 text-[#3FBD92]" strokeWidth={1.75} />
              </div>
              <h2 className="font-serif text-3xl text-white">Private Benefactors</h2>
              <div className="font-serif text-4xl font-normal text-[#3FBD92]">Board &amp; Founders</div>
              <p className="text-sm text-[#D5D5EA] leading-relaxed">
                A dedicated group of private philanthropists and our board fund all operating costs so public gifts stay completely unencumbered.
              </p>
              <ul className="space-y-3 text-sm text-[#D5D5EA] pt-2 border-t border-white/12">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3FBD92]" strokeWidth={1.75} />
                  <span>Field management, engineering surveys &amp; logistics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3FBD92]" strokeWidth={1.75} />
                  <span>Financial audits, compliance &amp; legal reporting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3FBD92]" strokeWidth={1.75} />
                  <span>100% of donor credit card and bank transaction fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3FBD92]" strokeWidth={1.75} />
                  <span>Digital platform hosting &amp; transparent donor reporting</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Audited Financials Table */}
      <section className="py-20 lg:py-28 bg-[#FAF7F0] border-b border-[#E9EAE4]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12 space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1E1B6B]">
              Audited Statements
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1E1B6B] tracking-tight">
              Annual reports &amp; governance disclosures.
            </h2>
          </div>

          <div className="bg-white rounded-[6px] border border-[#E9EAE4] overflow-hidden max-w-4xl shadow-sm divide-y divide-[#E9EAE4]">
            {FINANCIAL_REPORTS.map((r) => (
              <div key={r.year} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <FileText className="w-6 h-6 text-[#1E1B6B]" strokeWidth={1.75} />
                  <div>
                    <div className="font-serif text-lg font-bold text-[#1E1B6B]">{r.year} Programme Financial Overview</div>
                    <div className="text-xs text-[#565677] font-medium">Programme Allocation: {r.revenue} &bull; Status: {r.status}</div>
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#1E1B6B] hover:text-[#36A87D] cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#3FBD92]" />
                  <span>Download Report</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E9EAE4]">
        <div className="max-w-[960px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-16 space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1E1B6B]">
              Frequently Asked Questions
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1E1B6B] tracking-tight">
              How our financial model works.
            </h2>
          </div>

          <div className="space-y-6">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-[#FAF7F0] rounded-[6px] border border-[#E9EAE4] p-6 sm:p-8 space-y-2">
                <h3 className="font-serif text-xl text-[#1E1B6B]">{faq.q}</h3>
                <p className="text-sm text-[#4A4A6A] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={onOpenDonate}
              className="bg-[#3FBD92] hover:bg-[#36A87D] active:scale-[0.99] text-[#1E1B6B] font-bold text-xs sm:text-sm uppercase tracking-[0.14em] px-9 py-3.5 rounded-[4px] transition-all cursor-pointer shadow-sm"
            >
              Support Our Programmes Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
