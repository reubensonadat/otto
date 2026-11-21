import React from 'react';
import { FOOTER_COLUMNS } from '../data/waterData';
import type { CurrencyCode } from '../utils/donationLogic';

export type FooterAction =
  | 'donate'
  | 'monthly'
  | 'once'
  | 'fundraise'
  | 'sponsor'
  | 'signin'
  | 'why-water'
  | 'impact-map'
  | 'model-100'
  | 'newsletter'
  | 'take-action';

export interface FooterProps {
  currency: CurrencyCode;
  onCurrencyChange: (currency: CurrencyCode) => void;
  onAction: (action: FooterAction) => void;
}

export function Footer({ currency, onCurrencyChange, onAction }: FooterProps) {
  return (
    <footer className="bg-white border-t border-[#E9EAE4] text-[#71716C]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-12">
        {/* 4-Column Link Directory */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-[#E9EAE4]">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[13px] font-bold text-[#222520] mb-4 tracking-[0.02em]">
                {col.heading}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => onAction(link.action)}
                      className="text-[13px] text-[#71716C] hover:text-[#222520] transition-colors text-left cursor-pointer cw-focus"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle Row: Privacy Links + Currency Switcher */}
        <div className="py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-[#E9EAE4]">
          <div className="flex flex-wrap items-center gap-3 text-[12px] text-[#71716C]">
            <button
              type="button"
              onClick={() => onAction('model-100')}
              className="hover:text-[#222520] transition-colors cursor-pointer"
            >
              Privacy policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onAction('model-100')}
              className="hover:text-[#222520] transition-colors cursor-pointer"
            >
              Responsible disclosure process
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onAction('model-100')}
              className="hover:text-[#222520] transition-colors cursor-pointer"
            >
              100% Model Audit
            </button>
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="footer-currency-select" className="text-[12px] text-[#5C5E58]">
              Currency
            </label>
            <select
              id="footer-currency-select"
              value={currency}
              onChange={(e) => onCurrencyChange(e.target.value as CurrencyCode)}
              className="h-[40px] rounded-[4px] border border-[#D4D5CE] bg-white px-3.5 text-[13px] text-[#222520] cw-focus cursor-pointer"
            >
              <option value="USD">United States dollar (USD)</option>
              <option value="GBP">Pound sterling (GBP)</option>
            </select>
          </div>
        </div>

        {/* Charity Accountability & Trust Seals */}
        <div className="pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="text-[13px] text-[#5C5E58] space-y-1">
            <p className="font-medium text-[#222520]">
              charity: water is a 501(c)(3) nonprofit organization.
            </p>
            <p>
              <button
                type="button"
                onClick={() => onAction('model-100')}
                className="underline decoration-[#FFCA0A] underline-offset-4 hover:text-[#222520] cursor-pointer"
              >
                100% of public donations go directly to fund clean water projects.
              </button>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#5C5E58]">
            <span>Candid Platinum</span>
            <span aria-hidden="true">·</span>
            <span>Charity Navigator 4-Star</span>
            <span aria-hidden="true">·</span>
            <span>CharityWatch Top-Rated</span>
            <span aria-hidden="true">·</span>
            <span>BBB Accredited</span>
          </div>
        </div>

        <p className="mt-6 text-[11.5px] leading-relaxed text-[#8A8B84]">
          © 2026 | charity: water Donation Processing Center, 230 Franklin Rd., Ste. 11-II,
          Franklin, TN 37064 | Charity Global, Inc., a US 501(c)(3) public charity, EIN 22-3936753.
        </p>
      </div>
    </footer>
  );
}
