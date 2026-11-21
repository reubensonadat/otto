import { useState, useEffect } from 'react';
import {
  CURRENCY_CONFIG,
  calculatePeopleServed,
  validateDonationAmount,
  type CurrencyCode,
  type GivingFrequency,
} from '../utils/donationLogic';
import { WaterDropIcon, YellowHeartIcon } from './BrandIcons';

export interface HeroDonationProps {
  currency: CurrencyCode;
  frequency: GivingFrequency;
  onFrequencyChange: (freq: GivingFrequency) => void;
  onProceedToCheckout: (amount: number, frequency: GivingFrequency) => void;
}

export function HeroDonation({
  currency,
  frequency,
  onFrequencyChange,
  onProceedToCheckout,
}: HeroDonationProps) {
  const config = CURRENCY_CONFIG[currency];
  const presets = frequency === 'monthly' ? config.monthlyPresets : config.oncePresets;

  const [selectedPreset, setSelectedPreset] = useState<number | null>(
    frequency === 'monthly' ? config.defaultMonthly : config.defaultOnce
  );
  const [customAmount, setCustomAmount] = useState('');
  const [isCustomMode, setIsCustomMode] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [heroSrc, setHeroSrc] = useState<string>('https://images.unsplash.com/photo-1543623252-cb433439c2e3?auto=format&fit=crop&w=1920&q=85');
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const nextConfig = CURRENCY_CONFIG[currency];
    const nextDefault = frequency === 'monthly' ? nextConfig.defaultMonthly : nextConfig.defaultOnce;
    setSelectedPreset(nextDefault);
    setCustomAmount('');
    setIsCustomMode(false);
    setErrorMessage(null);
  }, [currency, frequency]);

  const activeAmount = isCustomMode ? Number(customAmount) : selectedPreset ?? 0;
  const peopleServed = calculatePeopleServed(activeAmount, frequency, currency);

  const handlePresetClick = (amt: number) => {
    setSelectedPreset(amt);
    setIsCustomMode(false);
    setCustomAmount('');
    setErrorMessage(null);
  };

  const handleCustomFocus = () => {
    setIsCustomMode(true);
    setSelectedPreset(null);
    setErrorMessage(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const check = validateDonationAmount(activeAmount, currency);
    if (!check.valid) {
      setErrorMessage(check.error ?? 'Please enter a valid amount.');
      return;
    }
    setErrorMessage(null);
    onProceedToCheckout(activeAmount, frequency);
  };

  return (
    <section id="donate" aria-label="Clean water donation hero" className="relative w-full min-h-[660px] lg:min-h-[calc(100vh-72px)] lg:max-h-[860px] flex items-center overflow-hidden bg-[#1E1B6B]">
      {!imgError ? (
        <img
          src={heroSrc}
          alt="Clean water transforming lives in coastal Ghana"
          referrerPolicy="no-referrer"
          width="1920"
          height="1080"
          loading="eager"
          decoding="async"
          onError={() => {
            if (heroSrc !== '/field/hero.jpg') {
              setHeroSrc('/field/hero.jpg');
            } else {
              setImgError(true);
            }
          }}
          className="absolute inset-0 w-full h-full object-cover object-[72%_center] lg:object-center"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#131052] via-[#262280] to-[#7A5E35]" aria-hidden="true" />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E0C3D]/72 via-[#0E0C3D]/32 to-transparent" aria-hidden="true" />
      <div className="relative z-10 w-full max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-14 py-14 lg:py-20">
        <div className="max-w-[460px] lg:ml-6">
          <h1 className="font-serif text-white text-[34px] sm:text-[42px] lg:text-[46px] leading-[1.15] font-normal text-center tracking-[-0.01em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.22)] mb-8">
            Restore hope.<br />
            <span className="text-[#3FBD92]">Transform lives.</span>
          </h1>
          <form onSubmit={handleSubmit} noValidate className="bg-white rounded-[6px] shadow-[0_18px_48px_rgba(0,0,0,0.22)] overflow-hidden max-w-[396px] mx-auto">
            <div role="tablist" aria-label="Donation frequency" className="grid grid-cols-2 gap-1.5 bg-[#F4F5F0] p-2.5 border-b border-[#E9EAE4]">
              <button type="button" role="tab" aria-selected={frequency === 'monthly'} onClick={() => onFrequencyChange('monthly')} className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-[4px] text-[12px] font-bold uppercase tracking-[0.12em] transition-colors whitespace-nowrap cursor-pointer cw-focus ${frequency === 'monthly' ? 'bg-[#3FBD92] text-[#1E1B6B] shadow-[0_1px_2px_rgba(0,0,0,0.08)]' : 'bg-transparent text-[#565677] hover:text-[#1E1B6B]'}`}>
                <span>Monthly</span>
                <WaterDropIcon className="w-3.5 h-3.5" />
              </button>
              <button type="button" role="tab" aria-selected={frequency === 'once'} onClick={() => onFrequencyChange('once')} className={`flex items-center justify-center py-2.5 px-3 rounded-[4px] text-[12px] font-bold uppercase tracking-[0.12em] transition-colors whitespace-nowrap cursor-pointer cw-focus ${frequency === 'once' ? 'bg-[#3FBD92] text-[#1E1B6B] shadow-[0_1px_2px_rgba(0,0,0,0.08)]' : 'bg-transparent text-[#565677] hover:text-[#1E1B6B]'}`}>
                Give Once
              </button>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1E1B6B] mb-3.5">
                Choose/Enter an amount to give
              </p>
              <div className="grid grid-cols-3 gap-2.5">
                {presets.map((amt) => {
                  const isSelected = !isCustomMode && selectedPreset === amt;
                  return (
                    <button key={amt} type="button" onClick={() => handlePresetClick(amt)} aria-pressed={isSelected} className={`py-3 px-2 rounded-[4px] border text-center transition-all cursor-pointer cw-focus tabular-nums ${isSelected ? 'bg-[#3FBD92] border-[#3FBD92] text-[#1E1B6B] font-semibold' : 'bg-[#E9EAE4] border-[#DFDFEA] text-[#565677] hover:bg-[#DCDCEA] hover:text-[#1E1B6B]'}`}>
                      <span className="text-[14px] font-semibold">{config.symbol}{amt}</span>
                      <span className="text-[10px] ml-0.5 uppercase tracking-wide opacity-80">{config.code}{frequency === 'monthly' ? '/mo' : ''}</span>
                    </button>
                  );
                })}
                <div className="col-span-2 relative">
                  <label htmlFor="custom-donation-amount" className="sr-only">Other amount ({config.code})</label>
                  <div className={`flex items-center h-full rounded-[4px] border px-3 transition-colors ${isCustomMode ? 'bg-white border-[#1E1B6B] ring-1 ring-[#1E1B6B]' : 'bg-[#E9EAE4] border-[#DFDFEA]'}`}>
                    {isCustomMode && <span className="text-[14px] font-semibold text-[#1E1B6B] mr-1">{config.symbol}</span>}
                    <input id="custom-donation-amount" type="number" min="2" step="1" inputMode="decimal" placeholder="Other amount" value={customAmount} onFocus={handleCustomFocus} onChange={(e) => { setIsCustomMode(true); setSelectedPreset(null); setCustomAmount(e.target.value); setErrorMessage(null); }} className={`w-full bg-transparent text-[13px] py-2.5 outline-none tabular-nums placeholder:text-[#6E6E93] ${isCustomMode ? 'text-[#1E1B6B] font-semibold text-left' : 'text-center'}`} />
                  </div>
                </div>
              </div>
              <div data-testid="hero-impact-readout" className="mt-4 flex items-center gap-2 text-[13px] text-[#1E1B6B] min-h-[24px]">
                <YellowHeartIcon className="w-4 h-4 shrink-0" />
                {peopleServed > 0 ? (
                  <p className="leading-snug">Gives <strong className="font-bold tabular-nums">{peopleServed.toLocaleString('en-US')} {peopleServed === 1 ? 'person' : 'people'}</strong> clean water{frequency === 'monthly' ? ' every year on average.' : '.'}</p>
                ) : (
                  <p className="text-[#6E6E93]">Enter an amount to calculate your clean water impact.</p>
                )}
              </div>
              {errorMessage && <p role="alert" className="mt-2 text-[12px] font-medium text-[#B91C1C]">{errorMessage}</p>}
              <button type="submit" className="mt-4 w-full bg-[#3FBD92] hover:bg-[#36A87D] active:scale-[0.99] text-[#1E1B6B] font-bold text-[12px] uppercase tracking-[0.14em] py-3.5 rounded-[4px] transition-all cursor-pointer cw-focus min-h-[44px]">{frequency === 'monthly' ? 'Join Today' : 'Give Now'}</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
