import { FOOTER_COLUMNS } from '../data/otooData';
import type { CurrencyCode } from '../utils/donationLogic';
import { Link } from 'react-router-dom';

const PAGE_ROUTES: Record<string, string> = {
  'page-donate': '/the-spring',
  'page-programmes': '/our-work',
  'page-about': '/about',
  'page-contact': '/contact',
  'page-our-work': '/our-work',
  'page-the-spring': '/the-spring',
  'page-fundraise': '/fundraise',
};

export type FooterAction =
  | 'donate' | 'monthly' | 'once' | 'fundraise' | 'sponsor' | 'signin'
  | 'why-water' | 'impact-map' | 'model-100' | 'newsletter' | 'take-action'
  | 'page-donate' | 'page-programmes' | 'page-about' | 'page-contact' | 'page-our-work' | 'page-the-spring' | 'page-fundraise';

export interface FooterProps {
  currency: CurrencyCode;
  onCurrencyChange: (currency: CurrencyCode) => void;
  onAction: (action: FooterAction) => void;
}

export function Footer({ currency, onCurrencyChange, onAction }: FooterProps) {
  return (
    <footer className="bg-[#1E1B6B] text-[#C7C6EC]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-white/15">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#3FBD92] mb-4">{col.heading}</h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => {
                  const isPage = link.action.startsWith('page-');
                  const href = PAGE_ROUTES[link.action as keyof typeof PAGE_ROUTES];
                  return (
                    <li key={link.label}>
                      {isPage && href ? (
                        <Link to={href} className="text-[13px] text-[#C7C6EC] hover:text-white transition-colors text-left block cw-focus font-medium">
                          {link.label}
                        </Link>
                      ) : (
                        <button type="button" onClick={() => onAction(link.action)} className="text-[13px] text-[#C7C6EC] hover:text-white transition-colors text-left cursor-pointer cw-focus font-medium">
                          {link.label}
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-white/15">
          <div className="flex flex-wrap items-center gap-3 text-[12px] text-[#C7C6EC]">
            <Link to="/financials" className="hover:text-white transition-colors">Privacy policy</Link>
            <span aria-hidden="true">·</span>
            <Link to="/financials" className="hover:text-white transition-colors">Responsible disclosure</Link>
            <span aria-hidden="true">·</span>
            <Link to="/financials" className="hover:text-white transition-colors font-bold text-[#3FBD92]">100% Model Audit</Link>
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="footer-currency-select" className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#A5A5C4]">Currency</label>
            <div className="relative">
              <select id="footer-currency-select" value={currency} onChange={(e) => onCurrencyChange(e.target.value as CurrencyCode)} className="appearance-none h-[36px] rounded-[4px] border border-[#3FBD92] bg-[#FAF7F0] text-[#1E1B6B] px-3 py-1.5 text-[12px] font-bold cw-focus cursor-pointer focus:border-[#3FBD92] focus:ring-1 focus:ring-[#3FBD92] outline-none pr-8">
                <option value="GBP" className="text-[#1E1B6B]">Pound sterling (GBP)</option>
                <option value="USD" className="text-[#1E1B6B]">United States dollar (USD)</option>
              </select>
              <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#1E1B6B] text-[10px]">
                ▾
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3">
            <div className="bg-white rounded-[4px] px-4 py-2.5 inline-block">
              <img src="/brand/logo.jpg" alt="Otoo Foundation CIC" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-[13px] text-white font-medium italic">
              Empowering Communities, Changing Lives
            </p>
          </div>
          <div className="text-[13px] text-[#C7C6EC] space-y-1 lg:text-right">
            <p className="font-medium text-white">Otoo Foundation CIC is a UK-registered community interest company.</p>
            <p>
              <button type="button" onClick={() => onAction('model-100')} className="underline decoration-[#3FBD92] underline-offset-4 hover:text-white cursor-pointer">
                100% of public donations go directly to fund our community programmes.
              </button>
            </p>
          </div>
        </div>
        <p className="mt-8 text-[11.5px] leading-relaxed text-[#9B9BBB]">
          © 2026 | Otoo Foundation CIC. Restoring hope and transforming lives through healthcare, education and community empowerment in coastal Ghana.
        </p>
      </div>
    </footer>
  );
}
