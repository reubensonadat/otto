import { FileText, Download, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { JerrycanIcon } from '../components/BrandIcons';

const FINANCIAL_REPORTS = [
  { year: '2025', revenue: '£14.2M', status: 'Audited & Filed' },
  { year: '2024', revenue: '£11.8M', status: 'Audited & Filed' },
  { year: '2023', revenue: '£9.4M', status: 'Audited & Filed' },
  { year: '2022', revenue: '£7.9M', status: 'Audited & Filed' },
];

const FAQS = [
  {
    q: 'How does 100% of my public donation go directly to clean water?',
    a: 'We operate with two separate bank accounts. Public donations go directly into our Water Fund and are spent strictly on pipes, drilled boreholes, filters, and local training. Our separate operating expenses are covered by private philanthropists.',
  },
  {
    q: 'Who covers your operational overhead and staff salaries?',
    a: 'We have a dedicated group of private benefactors and foundation partners known as The Well. They make multi-year gifts specifically to fund staff salaries, office space, technology, and flights.',
  },
  {
    q: 'What about credit card processing fees?',
    a: 'When you give £100 on your credit card, £100 goes to water projects. The Well covers all credit card transaction processing fees.',
  },
  {
    q: 'Are your financial statements publicly audited?',
    a: 'Yes. Every year, an independent certified public accounting firm conducts a rigorous audit of both our Water Fund and our Operations account.',
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
              We believe charities should earn trust through evidence. We prove every dollar you give, maintain two separate accounts, and publish all independent audits.
            </p>
          </div>
        </div>
      </section>

      {/* Two Accounts Comparison */}
      <section className="py-20 lg:py-28 border-b border-[#E9EAE4]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            
            <div className="bg-white rounded-[6px] border border-[#E9EAE4] p-8 sm:p-10 space-y-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1E1B6B] border-b-2 border-[#3FBD92] pb-0.5">
                  Account #1: Water Fund
                </span>
                <JerrycanIcon className="w-7 h-7" />
              </div>
              <h2 className="font-serif text-3xl text-[#1E1B6B]">Public Donations</h2>
              <div className="font-serif text-4xl font-normal text-[#1E1B6B]">100% to Water</div>
              <p className="text-sm text-[#4A4A6A] leading-relaxed">
                When you give to Otoo Foundation, every penny funds clean water. We never take a cut for credit card fees, office rent, flights, or salaries.
              </p>
              <ul className="space-y-3 text-sm text-[#1E1B6B] pt-2 border-t border-[#E9EAE4]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3FBD92]" strokeWidth={1.75} />
                  <span>Drilling rigs, solar pumps, and piped water networks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3FBD92]" strokeWidth={1.75} />
                  <span>BioSand filters and school rainwater tanks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3FBD92]" strokeWidth={1.75} />
                  <span>GPS coordinates, field photos, and cloud sensor monitoring</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1E1B6B] text-white rounded-[6px] border border-white/10 p-8 sm:p-10 space-y-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#3FBD92] border-b-2 border-[#3FBD92] pb-0.5">
                  Account #2: Operations
                </span>
                <ShieldCheck className="w-7 h-7 text-[#3FBD92]" strokeWidth={1.75} />
              </div>
              <h2 className="font-serif text-3xl text-white">The Well</h2>
              <div className="font-serif text-4xl font-normal text-[#3FBD92]">Private Donors</div>
              <p className="text-sm text-[#D5D5EA] leading-relaxed">
                A dedicated community of private philanthropists and family foundations fund our operational costs so public gifts stay completely whole.
              </p>
              <ul className="space-y-3 text-sm text-[#D5D5EA] pt-2 border-t border-white/12">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3FBD92]" strokeWidth={1.75} />
                  <span>Staff compensation, recruitment & engineers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3FBD92]" strokeWidth={1.75} />
                  <span>Cloud architecture, sensor hardware & security</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3FBD92]" strokeWidth={1.75} />
                  <span>100% of donor credit card transaction fees</span>
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
              Download our annual reports & audits.
            </h2>
          </div>

          <div className="bg-white rounded-[6px] border border-[#E9EAE4] overflow-hidden max-w-4xl shadow-sm divide-y divide-[#E9EAE4]">
            {FINANCIAL_REPORTS.map((r) => (
              <div key={r.year} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <FileText className="w-6 h-6 text-[#1E1B6B]" strokeWidth={1.75} />
                  <div>
                    <div className="font-serif text-lg font-bold text-[#1E1B6B]">{r.year} Annual Financial Statement</div>
                    <div className="text-xs text-[#565677] font-medium">Clean Water Revenue: {r.revenue} • Status: {r.status}</div>
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#1E1B6B] hover:text-[#36A87D] cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 border-b border-[#E9EAE4]">
        <div className="max-w-[960px] mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          <div className="text-center space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1E1B6B]">
              Questions & Answers
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1E1B6B] tracking-tight">
              Everything you need to know about the 100% model.
            </h2>
          </div>

          <div className="space-y-6">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-[#FAF7F0] rounded-[6px] border border-[#E9EAE4] p-7 space-y-2">
                <h3 className="font-bold text-lg text-[#1E1B6B]">{faq.q}</h3>
                <p className="text-sm text-[#4A4A6A] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              type="button"
              onClick={onOpenDonate}
              className="bg-[#3FBD92] hover:bg-[#36A87D] active:scale-[0.99] text-[#1E1B6B] font-bold text-xs sm:text-sm uppercase tracking-[0.14em] px-9 py-3.5 rounded-[4px] transition-all cursor-pointer shadow-sm"
            >
              Give With 100% Impact
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
