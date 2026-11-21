import { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import {
  CURRENCY_CONFIG,
  calculatePeopleServed,
  formatCurrencyAmount,
  validateDonorDetails,
  type CurrencyCode,
  type DonationRecord,
  type GivingFrequency,
} from '../utils/donationLogic';
import type { WhyWaterStory } from '../data/otooData';
import { HundredPercentRing, JerrycanIcon, YellowHeartIcon } from './BrandIcons';

export type ModalState =
  | { type: 'closed' }
  | { type: 'checkout'; amount: number; frequency: GivingFrequency; targetCountry?: string }
  | { type: 'story'; story: WhyWaterStory }
  | { type: 'model-100' }
  | { type: 'fundraise'; mode: 'sponsor' | 'fundraise' }
  | { type: 'signin' };

export interface ActionModalProps {
  modal: ModalState;
  currency: CurrencyCode;
  onClose: () => void;
  onCompleteDonation: (record: DonationRecord) => void;
  onOpenDonate: (frequency?: GivingFrequency) => void;
}

export function ActionModal({ modal, currency, onClose, onCompleteDonation, onOpenDonate }: ActionModalProps) {
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [formErrors, setFormErrors] = useState<Partial<Record<'name' | 'email', string>>>({});
  const [receipt, setReceipt] = useState<DonationRecord | null>(null);
  const [campaignGoal, setCampaignGoal] = useState('1000');
  const [campaignTitle, setCampaignTitle] = useState('');
  const [secondaryConfirmed, setSecondaryConfirmed] = useState<string | null>(null);

  useEffect(() => {
    setFormErrors({});
    setReceipt(null);
    setSecondaryConfirmed(null);
    setDonorName('');
    setDonorEmail('');
    setCampaignTitle('');
  }, [modal]);

  useEffect(() => {
    if (modal.type === 'closed') return;
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [modal.type, onClose]);

  if (modal.type === 'closed') return null;

  const { symbol } = CURRENCY_CONFIG[currency];

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (modal.type !== 'checkout') return;
    const check = validateDonorDetails(donorName, donorEmail);
    if (!check.valid) { setFormErrors(check.errors); return; }
    const peopleServed = calculatePeopleServed(modal.amount, modal.frequency, currency);
    const record: DonationRecord = {
      id: `OTO-${Math.floor(100000 + Math.random() * 900000)}`,
      amount: modal.amount,
      frequency: modal.frequency,
      currency,
      peopleServed,
      donorName: donorName.trim(),
      donorEmail: donorEmail.trim(),
      timestamp: new Date().toLocaleDateString('en-GB', { month: 'long', day: 'numeric', year: 'numeric' }),
    };
    onCompleteDonation(record);
    setReceipt(record);
  };

  const handleSecondarySubmit = (e: React.FormEvent, message: string) => {
    e.preventDefault();
    const check = validateDonorDetails(donorName || 'Supporter', donorEmail);
    if (!check.valid) { setFormErrors(check.errors); return; }
    setFormErrors({});
    setSecondaryConfirmed(message);
  };

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1E1B6B]/65 backdrop-blur-[2px]" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="relative w-full max-w-[540px] max-h-[90vh] overflow-y-auto bg-white rounded-[6px] shadow-[0_24px_64px_rgba(30,27,107,0.32)] border border-[#E9EAE4]">
        <button type="button" onClick={onClose} aria-label="Close modal" className="absolute top-4 right-4 z-10 w-9 h-9 rounded-[4px] bg-[#F4F5F0] hover:bg-[#E9EAE4] flex items-center justify-center text-[#1E1B6B] cursor-pointer cw-focus"><X className="w-4 h-4" /></button>

        {modal.type === 'checkout' && (
          <div className="p-6 sm:p-8">
            {receipt ? (
              <div data-testid="donation-receipt" className="text-center py-4 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#3FBD92] mx-auto" />
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#565677]">Receipt #{receipt.id}</p>
                <h3 className="font-serif text-[30px] text-[#1E1B6B] leading-tight">Thank you, {receipt.donorName}!</h3>
                <p className="text-[15px] text-[#4A4A6A] leading-relaxed">
                  Your <strong className="text-[#1E1B6B]">{formatCurrencyAmount(receipt.amount, receipt.currency)}{receipt.frequency === 'monthly' ? '/month' : ''}</strong> gift will bring clean water to an estimated <strong className="text-[#1E1B6B] tabular-nums">{receipt.peopleServed} {receipt.peopleServed === 1 ? 'person' : 'people'}</strong>. Our live global impact counter has been updated.
                </p>
                <div className="mt-6 bg-[#E8F7F0] border border-[#BFE8D6] rounded-[4px] p-4 text-left text-[13px] text-[#1E1B6B] flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#1E1B6B]" />
                  <span>100% of your donation goes directly to clean water projects. We’ll send GPS coordinates and field photos to <strong>{receipt.donorEmail}</strong> when your project completes.</span>
                </div>
                <button type="button" onClick={onClose} className="mt-6 w-full bg-[#3FBD92] hover:bg-[#36A87D] text-[#1E1B6B] font-bold text-[12px] uppercase tracking-[0.14em] py-3.5 rounded-[4px] cursor-pointer cw-focus">Return to Impact Map</button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <JerrycanIcon className="w-4 h-5" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#565677]">100% Direct to Water Projects</span>
                </div>
                <h3 className="font-serif text-[28px] sm:text-[32px] text-[#1E1B6B] leading-tight">{modal.frequency === 'monthly' ? 'Join The Spring Monthly' : 'Complete Your Clean Water Gift'}</h3>
                <div className="mt-4 bg-[#FAF7F0] border border-[#E9EAE4] rounded-[4px] p-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[12px] text-[#565677]">{modal.targetCountry ? `Funding projects in ${modal.targetCountry}` : modal.frequency === 'monthly' ? 'Monthly recurring impact' : 'One-time clean water gift'}</p>
                    <p className="font-serif text-[26px] text-[#1E1B6B] tabular-nums leading-tight mt-0.5">{formatCurrencyAmount(modal.amount, currency)}<span className="text-[14px] font-sans text-[#565677] ml-1">{currency}{modal.frequency === 'monthly' ? '/mo' : ''}</span></p>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1E1B6B]"><YellowHeartIcon className="w-4 h-4" /><span className="tabular-nums">{calculatePeopleServed(modal.amount, modal.frequency, currency)} people</span></div>
                    <p className="text-[11px] text-[#6E6E93] mt-0.5">estimated clean water</p>
                  </div>
                </div>
                <form onSubmit={handleCheckoutSubmit} noValidate className="mt-5 space-y-4">
                  <div>
                    <label htmlFor="checkout-name" className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] mb-1.5">Full Name</label>
                    <input id="checkout-name" type="text" value={donorName} onChange={(e) => { setDonorName(e.target.value); setFormErrors((prev) => ({ ...prev, name: undefined })); }} placeholder="Jordan Rivera" className="w-full h-[44px] rounded-[4px] border border-[#D3D3E4] px-3.5 text-[14px] text-[#1E1B6B] cw-focus" />
                    {formErrors.name && <p role="alert" className="mt-1 text-[12px] text-[#B91C1C]">{formErrors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="checkout-email" className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] mb-1.5">Email for GPS Proof & Receipt</label>
                    <input id="checkout-email" type="email" value={donorEmail} onChange={(e) => { setDonorEmail(e.target.value); setFormErrors((prev) => ({ ...prev, email: undefined })); }} placeholder="jordan@example.org" className="w-full h-[44px] rounded-[4px] border border-[#D3D3E4] px-3.5 text-[14px] text-[#1E1B6B] cw-focus" />
                    {formErrors.email && <p role="alert" className="mt-1 text-[12px] text-[#B91C1C]">{formErrors.email}</p>}
                  </div>
                  <button type="submit" className="w-full bg-[#3FBD92] hover:bg-[#36A87D] text-[#1E1B6B] font-bold text-[12px] uppercase tracking-[0.14em] py-3.5 rounded-[4px] transition-colors cursor-pointer cw-focus min-h-[44px]">Confirm {formatCurrencyAmount(modal.amount, currency)}{modal.frequency === 'monthly' ? '/mo' : ''} Pledge</button>
                  <p className="flex items-center justify-center gap-1.5 text-[12px] text-[#6E6E93]"><ShieldCheck className="w-4 h-4 text-[#3FBD92]" /><span>100% of public donations fund clean water infrastructure.</span></p>
                </form>
              </div>
            )}
          </div>
        )}

        {modal.type === 'story' && (
          <div>
            <div className="h-52 bg-[#1E1B6B] overflow-hidden">
              <img
                src={modal.story.image}
                alt={modal.story.imageAlt}
                referrerPolicy="no-referrer"
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedFallback && modal.story.fallbackImage) {
                    target.dataset.triedFallback = 'true';
                    target.src = modal.story.fallbackImage;
                  }
                }}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#565677]">Why Water? · {modal.story.tabLabel}</p>
              <h3 className="font-serif text-[28px] text-[#1E1B6B] mt-2 leading-tight">{modal.story.detailHeadline}</h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-[#4A4A6A]">{modal.story.detailBody}</p>
              <div className="mt-6 grid grid-cols-3 gap-4 pt-5 border-t border-[#E9EAE4]">
                {modal.story.proofFacts.map((fact) => (
                  <div key={fact.figure}>
                    <p className="font-serif text-[24px] text-[#1E1B6B] tabular-nums">{fact.figure}</p>
                    <p className="text-[12px] text-[#565677] mt-1 leading-snug">{fact.caption}</p>
                  </div>
                ))}
              </div>
              <button type="button" onClick={() => onOpenDonate('monthly')} className="mt-7 w-full bg-[#3FBD92] hover:bg-[#36A87D] text-[#1E1B6B] font-bold text-[12px] uppercase tracking-[0.14em] py-3.5 rounded-[4px] cursor-pointer cw-focus">Give Clean Water Today</button>
            </div>
          </div>
        )}

        {modal.type === 'model-100' && (
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-5">
              <HundredPercentRing className="w-20 h-20" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#565677]">Our Financial Promise</p>
                <h3 className="font-serif text-[28px] text-[#1E1B6B] leading-tight mt-1">The 100% Model</h3>
              </div>
            </div>
            <div className="mt-5 space-y-3.5 text-[15px] leading-[1.68] text-[#4A4A6A]">
              <p>We operate with two separate bank accounts: one for public water donations and a separate operations account funded exclusively by private donors known as <strong className="text-[#1E1B6B]">The Well</strong>.</p>
              <p>Because private philanthropists cover staff salaries, office costs, and even credit card processing fees, every single penny of your donation goes directly to local field partners building and monitoring clean water projects.</p>
            </div>
            <div className="mt-6 bg-[#FAF7F0] border border-[#E9EAE4] rounded-[4px] p-4 grid grid-cols-2 gap-4 text-[13px]">
              <div><p className="font-bold text-[#1E1B6B]">Public Donations</p><p className="text-[#565677] mt-1">100% funds rural water projects and GPS proof</p></div>
              <div><p className="font-bold text-[#1E1B6B]">Operations Account</p><p className="text-[#565677] mt-1">100% covered by private foundations & sponsors</p></div>
            </div>
            <button type="button" onClick={() => onOpenDonate('monthly')} className="mt-6 w-full bg-[#3FBD92] hover:bg-[#36A87D] text-[#1E1B6B] font-bold text-[12px] uppercase tracking-[0.14em] py-3.5 rounded-[4px] cursor-pointer cw-focus">Give With 100% Impact</button>
          </div>
        )}

        {modal.type === 'fundraise' && (
          <div className="p-6 sm:p-8">
            {secondaryConfirmed ? (
              <div className="text-center py-4">
                <CheckCircle2 className="w-11 h-11 text-[#3FBD92] mx-auto mb-3" />
                <h3 className="font-serif text-[26px] text-[#1E1B6B]">You’re all set!</h3>
                <p className="mt-2 text-[14px] text-[#565677]">{secondaryConfirmed}</p>
                <button type="button" onClick={onClose} className="mt-6 px-6 py-3 bg-[#3FBD92] text-[#1E1B6B] font-bold text-[12px] uppercase tracking-[0.14em] rounded-[4px] cursor-pointer">Done</button>
              </div>
            ) : (
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#565677]">{modal.mode === 'sponsor' ? 'Community Sponsorship' : 'Peer-to-Peer Campaign'}</p>
                <h3 className="font-serif text-[28px] text-[#1E1B6B] mt-1 leading-tight">{modal.mode === 'sponsor' ? 'Sponsor a Clean Water Project' : 'Start Your Clean Water Fundraiser'}</h3>
                <p className="mt-2 text-[14px] text-[#565677] leading-relaxed">{modal.mode === 'sponsor' ? `Fully fund a village well or school tap stand and receive a dedicated GPS proof report.` : 'Set a goal, invite friends, and turn your birthday or next milestone into clean water.'}</p>
                <form onSubmit={(e) => handleSecondarySubmit(e, modal.mode === 'sponsor' ? `Our sponsorship team will send project options and impact budgets to ${donorEmail}.` : `Your campaign "${campaignTitle || 'Clean Water Fundraiser'}" (${symbol}${campaignGoal} goal) is ready to share!`)} noValidate className="mt-5 space-y-4">
                  <div>
                    <label htmlFor="campaign-name" className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] mb-1.5">Your Name</label>
                    <input id="campaign-name" type="text" value={donorName} onChange={(e) => setDonorName(e.target.value)} placeholder="Alex Morgan" className="w-full h-[44px] rounded-[4px] border border-[#D3D3E4] px-3.5 text-[14px] cw-focus" />
                    {formErrors.name && <p role="alert" className="mt-1 text-[12px] text-[#B91C1C]">{formErrors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="campaign-email" className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] mb-1.5">Email Address</label>
                    <input id="campaign-email" type="email" value={donorEmail} onChange={(e) => setDonorEmail(e.target.value)} placeholder="alex@example.org" className="w-full h-[44px] rounded-[4px] border border-[#D3D3E4] px-3.5 text-[14px] cw-focus" />
                    {formErrors.email && <p role="alert" className="mt-1 text-[12px] text-[#B91C1C]">{formErrors.email}</p>}
                  </div>
                  {modal.mode === 'fundraise' && (
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="campaign-title" className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] mb-1.5">Campaign Title</label>
                        <input id="campaign-title" type="text" value={campaignTitle} onChange={(e) => setCampaignTitle(e.target.value)} placeholder="My Birthday for Water" className="w-full h-[44px] rounded-[4px] border border-[#D3D3E4] px-3.5 text-[14px] cw-focus" />
                      </div>
                      <div>
                        <label htmlFor="campaign-goal" className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] mb-1.5">Goal ({currency})</label>
                        <input id="campaign-goal" type="number" min="100" value={campaignGoal} onChange={(e) => setCampaignGoal(e.target.value)} className="w-full h-[44px] rounded-[4px] border border-[#D3D3E4] px-3.5 text-[14px] tabular-nums cw-focus" />
                      </div>
                    </div>
                  )}
                  <button type="submit" className="w-full bg-[#3FBD92] hover:bg-[#36A87D] text-[#1E1B6B] font-bold text-[12px] uppercase tracking-[0.14em] py-3.5 rounded-[4px] cursor-pointer cw-focus">{modal.mode === 'sponsor' ? 'Request Project Proposal' : 'Create Campaign'}</button>
                </form>
              </div>
            )}
          </div>
        )}

        {modal.type === 'signin' && (
          <div className="p-6 sm:p-8">
            {secondaryConfirmed ? (
              <div className="text-center py-4">
                <CheckCircle2 className="w-11 h-11 text-[#3FBD92] mx-auto mb-3" />
                <h3 className="font-serif text-[26px] text-[#1E1B6B]">Check your inbox</h3>
                <p className="mt-2 text-[14px] text-[#565677]">{secondaryConfirmed}</p>
                <button type="button" onClick={onClose} className="mt-6 px-6 py-3 bg-[#3FBD92] text-[#1E1B6B] font-bold text-[12px] uppercase tracking-[0.14em] rounded-[4px] cursor-pointer">Close</button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2"><JerrycanIcon className="w-4 h-5" /><span className="font-serif text-[18px] text-[#1E1B6B]">Otoo Foundation</span></div>
                <h3 className="font-serif text-[28px] text-[#1E1B6B] leading-tight">Sign in to your supporter account</h3>
                <p className="mt-2 text-[14px] text-[#565677]">Track your Spring membership, tax receipts, and GPS coordinates for funded wells.</p>
                <form onSubmit={(e) => handleSecondarySubmit(e, `We sent a one-click sign-in link to ${donorEmail} so you can view your water projects.`)} noValidate className="mt-5 space-y-4">
                  <div>
                    <label htmlFor="signin-email" className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] mb-1.5">Email Address</label>
                    <input id="signin-email" type="email" value={donorEmail} onChange={(e) => { setDonorEmail(e.target.value); setFormErrors({}); }} placeholder="you@example.org" className="w-full h-[44px] rounded-[4px] border border-[#D3D3E4] px-3.5 text-[14px] cw-focus" />
                    {formErrors.email && <p role="alert" className="mt-1 text-[12px] text-[#B91C1C]">{formErrors.email}</p>}
                  </div>
                  <button type="submit" className="w-full bg-[#3FBD92] hover:bg-[#36A87D] text-[#1E1B6B] font-bold text-[12px] uppercase tracking-[0.14em] py-3.5 rounded-[4px] cursor-pointer cw-focus">Send Sign-In Link</button>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
