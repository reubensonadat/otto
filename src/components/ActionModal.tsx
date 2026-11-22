import { useState } from 'react';
import { X, ShieldCheck, Mail } from 'lucide-react';
import { formatCurrencyAmount, type CurrencyCode, type DonationRecord, type GivingFrequency } from '../utils/donationLogic';
import { type ProgrammeStory } from '../data/otooData';

export type ModalState =
  | { type: 'closed' }
  | { type: 'checkout'; amount: number; frequency: GivingFrequency; targetCountry?: string }
  | { type: 'story'; story: ProgrammeStory }
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
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string }>({});

  const [campaignTitle, setCampaignTitle] = useState('');
  const [campaignGoal, setCampaignGoal] = useState('');

  const CURRENCY_SYMBOLS: Record<CurrencyCode, string> = { GBP: '£', GHS: 'GH₵', USD: '$' };
  const symbol = CURRENCY_SYMBOLS[currency] ?? '£';

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { name?: string; email?: string } = {};
    if (donorName.trim().length < 2) errors.name = 'Please enter your full name.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(donorEmail.trim())) errors.email = 'Please enter a valid email address.';
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    if (modal.type !== 'checkout') return;
    const record: DonationRecord = {
      id: `otoo-${Date.now()}`,
      amount: modal.amount,
      frequency: modal.frequency,
      currency,
      peopleServed: Math.max(1, Math.round((modal.frequency === 'monthly' ? modal.amount * 12 : modal.amount) / 30)),
      donorName,
      donorEmail,
      timestamp: new Date().toISOString(),
    };
    onCompleteDonation(record);
    onClose();
  };

  const handleFundraiseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCompleteDonation({
      id: `otoo-fundraise-${Date.now()}`,
      amount: Number(campaignGoal) || 0,
      frequency: 'once',
      currency,
      peopleServed: 0,
      donorName,
      donorEmail,
      timestamp: new Date().toISOString(),
    });
    onClose();
  };

  const story = modal.type === 'story' ? modal.story : null;

  return (
    <>
      {modal.type !== 'closed' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => onClose()}
          />
          <div className="relative w-full max-w-md sm:max-w-lg bg-white rounded-[10px] border border-[#E9EAE4] shadow-[0_30px_60px_rgba(0,0,0,0.3)] animate-in zoom-in duration-200">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#F4F5F0] hover:bg-[#E9EAE4] flex items-center justify-center text-[#1E1B6B] cursor-pointer cw-focus"
            >
              <X className="w-4 h-4" />
            </button>

            {modal.type === 'checkout' && (
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-[24px] sm:text-[28px] font-normal text-[#1E1B6B]">
                    {modal.frequency === 'monthly' ? 'Give Monthly' : 'Complete Your Gift'}
                  </h2>
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#3FBD92]">
                    {modal.frequency === 'monthly' ? 'Monthly Giving' : 'One-time Gift'}
                  </span>
                </div>
                {modal.targetCountry && (
                  <p className="text-[12px] text-[#565677] mb-4">
                    Funding programmes in <strong className="text-[#1E1B6B] font-bold">{modal.targetCountry}</strong>
                  </p>
                )}
                <form onSubmit={handleDonateSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="checkout-name" className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] mb-1.5">
                      Full Name
                    </label>
                    <input
                      id="checkout-name"
                      type="text"
                      autoComplete="name"
                      value={donorName}
                      onChange={(e) => { setDonorName(e.target.value); setFormErrors((prev) => ({ ...prev, name: undefined })); }}
                      className={`w-full h-[44px] rounded-[4px] border px-3.5 text-[14px] text-[#1E1B6B] bg-white cw-focus ${formErrors.name ? 'border-[#B91C1C]' : 'border-[#D3D3E4] focus:border-[#1E1B6B]'}`}
                    />
                    {formErrors.name && <p role="alert" className="mt-1 text-[12px] text-[#B91C1C]">{formErrors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="checkout-email" className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="checkout-email"
                      type="email"
                      autoComplete="email"
                      value={donorEmail}
                      onChange={(e) => { setDonorEmail(e.target.value); setFormErrors((prev) => ({ ...prev, email: undefined })); }}
                      className={`w-full h-[44px] rounded-[4px] border px-3.5 text-[14px] text-[#1E1B6B] bg-white cw-focus ${formErrors.email ? 'border-[#B91C1C]' : 'border-[#D3D3E4] focus:border-[#1E1B6B]'}`}
                    />
                    {formErrors.email && <p role="alert" className="mt-1 text-[12px] text-[#B91C1C]">{formErrors.email}</p>}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[13px] text-[#565677]">Your gift of</span>
                    <span className="font-serif text-[20px] font-bold text-[#1E1B6B]">{symbol}{modal.amount.toLocaleString('en-GB')}{modal.frequency === 'monthly' ? '/mo' : ''}</span>
                  </div>
                  <button type="submit" className="w-full bg-[#3FBD92] hover:bg-[#36A87D] text-[#1E1B6B] font-bold text-[12px] uppercase tracking-[0.14em] py-3.5 rounded-[4px] transition-colors cursor-pointer cw-focus min-h-[44px]">
                    Confirm {formatCurrencyAmount(modal.amount, currency)} Pledge
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-3 w-full text-center text-[11px] font-bold uppercase tracking-[0.14em] text-[#565677] hover:text-[#1E1B6B] transition-colors cursor-pointer"
                  >
                    Return to Programmes
                  </button>
                </form>
              </div>
            )}

            {modal.type === 'story' && story && (
              <div className="p-6 sm:p-8">
                <div className="h-48 bg-[#1E1B6B] overflow-hidden rounded-[6px] mb-6">
                  <img
                    src={story.image}
                    alt={story.imageAlt}
                    width="800"
                    height="450"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-[20px] sm:text-[24px] font-normal text-[#1E1B6B] mb-3">
                  {story.detailHeadline}
                </h3>
                <p className="text-[14px] text-[#565677] leading-relaxed mb-6">
                  {story.detailBody}
                </p>
                <div className="space-y-3">
                  {story.proofFacts.map((fact: { figure: string; caption: string }, i: number) => (
                    <div key={i} className="flex items-start gap-3 text-[13px] text-[#4A4A6A]">
                      <span className="w-5 h-5 rounded-full bg-[#3FBD92]/10 flex items-center justify-center text-[#1E1B6B] font-bold text-[10px] shrink-0">
                        {i + 1}
                      </span>
                      <span>
                        <strong className="text-[#1E1B6B] font-bold">{fact.figure}</strong> {fact.caption}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => onOpenDonate('monthly')}
                  className="mt-7 w-full bg-[#3FBD92] hover:bg-[#36A87D] text-[#1E1B6B] font-bold text-[12px] uppercase tracking-[0.14em] py-3.5 rounded-[4px] cursor-pointer cw-focus"
                >
                  Support {story.tabLabel} Today
                </button>
              </div>
            )}

            {modal.type === 'model-100' && (
              <div className="p-6 sm:p-8 text-center">
                <ShieldCheck className="w-12 h-12 text-[#3FBD92] mx-auto mb-4" />
                <h2 className="font-serif text-[24px] sm:text-[28px] font-normal text-[#1E1B6B] mb-4">
                  The 100% Model
                </h2>
                <p className="text-[14px] text-[#565677] leading-relaxed mb-6">
                  Otoo Foundation operates with two separate funding streams. Public donations go 100% to our
                  programmes &mdash; healthcare, education and community empowerment in Ghana&rsquo;s coastal
                  communities. Operational costs are covered by a small group of founding philanthropists.
                </p>
                <div className="bg-[#FAF7F0] rounded-[6px] border border-[#E9EAE4] p-5 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[13px] text-[#565677]">Public Donations</span>
                    <span className="text-[#1E1B6B] font-bold text-[13px]">100% → Programmes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-[#565677]">Operating Costs</span>
                    <span className="text-[#1E1B6B] font-bold text-[13px]">Covered by founders</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenDonate('monthly')}
                  className="w-full bg-[#3FBD92] hover:bg-[#36A87D] text-[#1E1B6B] font-bold text-[12px] uppercase tracking-[0.14em] py-3.5 rounded-[4px] cursor-pointer cw-focus"
                >
                  Give With 100% Impact
                </button>
              </div>
            )}

            {modal.type === 'fundraise' && (
              <div className="p-6 sm:p-8">
                <h3 className="font-serif text-[20px] sm:text-[24px] font-normal text-[#1E1B6B] mb-4">
                  {modal.mode === 'sponsor' ? 'Sponsor a Programme' : 'Start Your Fundraiser'}
                </h3>
                <p className="text-[14px] text-[#565677] leading-relaxed mb-6">
                  {modal.mode === 'sponsor'
                    ? 'Fully fund a programme for a community or school and receive a dedicated impact report.'
                    : 'Set a goal, invite friends, and turn your birthday or next milestone into support for Otoo Foundation programmes.'}
                </p>
                <form onSubmit={handleFundraiseSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="campaign-title" className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] mb-1.5">
                      Campaign Title
                    </label>
                    <input
                      id="campaign-title"
                      type="text"
                      value={campaignTitle}
                      onChange={(e) => setCampaignTitle(e.target.value)}
                      placeholder="My Birthday for Otoo Foundation"
                      className="w-full h-[44px] rounded-[4px] border border-[#D3D3E4] px-3.5 text-[14px] cw-focus"
                    />
                  </div>
                  <div>
                    <label htmlFor="campaign-goal" className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] mb-1.5">
                      Goal ({symbol})
                    </label>
                    <input
                      id="campaign-goal"
                      type="number"
                      min="100"
                      value={campaignGoal}
                      onChange={(e) => setCampaignGoal(e.target.value)}
                      className="w-full h-[44px] rounded-[4px] border border-[#D3D3E4] px-3.5 text-[14px] tabular-nums cw-focus"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[13px] text-[#565677]">Contact Email</span>
                    <span className="text-[#1E1B6B] font-medium text-[13px]">{donorEmail || 'Enter above'}</span>
                  </div>
                  <button type="submit" className="w-full bg-[#3FBD92] hover:bg-[#36A87D] text-[#1E1B6B] font-bold text-[12px] uppercase tracking-[0.14em] py-3.5 rounded-[4px] transition-colors cursor-pointer cw-focus">
                    {modal.mode === 'sponsor' ? 'Request Programme Proposal' : 'Create Campaign'}
                  </button>
                </form>
              </div>
            )}

            {modal.type === 'signin' && (
              <div className="p-6 sm:p-8 text-center">
                <Mail className="w-10 h-10 text-[#3FBD92] mx-auto mb-3" />
                <h2 className="font-serif text-[24px] sm:text-[28px] font-normal text-[#1E1B6B] mb-2">Sign In to Otoo Foundation</h2>
                <p className="text-[13px] text-[#56567B] leading-relaxed mb-6">
                  Access your donor dashboard, tax receipts, and verified project dispatches.
                </p>

                {/* Google One-Click Sign In */}
                <button
                  type="button"
                  onClick={() => {
                    setDonorEmail('supporter@gmail.com');
                    setDonorName('Valued Supporter');
                    onClose();
                  }}
                  className="w-full flex items-center justify-center gap-3 bg-white border border-[#D3D3E4] hover:bg-[#FAF7F0] text-[#1E1B6B] font-bold text-[13px] py-3 rounded-[4px] shadow-xs transition-colors cursor-pointer mb-5"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                  <span>Continue with Google</span>
                </button>

                <div className="relative flex items-center justify-center my-4">
                  <div className="border-t border-[#E9EAE4] w-full" />
                  <span className="bg-white px-3 text-[11px] font-bold uppercase tracking-wider text-[#A5A5C4] absolute">or with email</span>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); onClose(); }} className="space-y-4 pt-1">
                  <div>
                    <label htmlFor="signin-email" className="sr-only">
                      Email Address
                    </label>
                    <input
                      id="signin-email"
                      type="email"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full h-[44px] rounded-[4px] border border-[#D3D3E4] px-3.5 text-[14px] cw-focus"
                    />
                  </div>
                  <button type="submit" className="w-full bg-[#1E1B6B] hover:bg-[#14114A] text-white font-bold text-[12px] uppercase tracking-[0.14em] py-3.5 rounded-[4px] transition-colors cursor-pointer cw-focus">
                    Send Magic Link
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
