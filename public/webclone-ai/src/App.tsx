import React, { useState, useMemo } from 'react';
import {
  CURRENCY_CONFIG,
  computeImpactTotals,
  type CurrencyCode,
  type DonationRecord,
  type GivingFrequency,
} from './utils/donationLogic';
import { BASE_IMPACT_TOTALS, type ActionCardItem } from './data/waterData';
import { Navbar } from './components/Navbar';
import { HeroDonation } from './components/HeroDonation';
import { WhyWaterSection } from './components/WhyWaterSection';
import { CrisisAndModelSection } from './components/CrisisAndModelSection';
import { ImpactMapSection } from './components/ImpactMapSection';
import { TakeActionCarousel } from './components/TakeActionCarousel';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer, type FooterAction } from './components/Footer';
import { ActionModal, type ModalState } from './components/ActionModal';

export default function App() {
  const [currency, setCurrency] = useState<CurrencyCode>('USD');
  const [frequency, setFrequency] = useState<GivingFrequency>('monthly');
  const [donations, setDonations] = useState<DonationRecord[]>([]);
  const [modal, setModal] = useState<ModalState>({ type: 'closed' });

  const liveImpactTotals = useMemo(
    () => computeImpactTotals(BASE_IMPACT_TOTALS, donations),
    [donations]
  );

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenDonate = (requestedFrequency?: GivingFrequency) => {
    const targetFreq = requestedFrequency ?? frequency;
    setFrequency(targetFreq);
    const defaultAmt =
      targetFreq === 'monthly'
        ? CURRENCY_CONFIG[currency].defaultMonthly
        : CURRENCY_CONFIG[currency].defaultOnce;
    setModal({
      type: 'checkout',
      amount: defaultAmt,
      frequency: targetFreq,
    });
  };

  const handleSelectActionCard = (card: ActionCardItem) => {
    if (card.modalIntent === 'monthly') {
      handleOpenDonate('monthly');
    } else if (card.modalIntent === 'once') {
      handleOpenDonate('once');
    } else {
      setModal({ type: 'fundraise', mode: card.modalIntent });
    }
  };

  const handleFooterAction = (action: FooterAction) => {
    switch (action) {
      case 'donate':
        handleOpenDonate();
        break;
      case 'monthly':
        handleOpenDonate('monthly');
        break;
      case 'once':
        handleOpenDonate('once');
        break;
      case 'fundraise':
        setModal({ type: 'fundraise', mode: 'fundraise' });
        break;
      case 'sponsor':
        setModal({ type: 'fundraise', mode: 'sponsor' });
        break;
      case 'signin':
        setModal({ type: 'signin' });
        break;
      case 'model-100':
        setModal({ type: 'model-100' });
        break;
      case 'why-water':
        scrollToSection('why-water');
        break;
      case 'impact-map':
        scrollToSection('impact-map');
        break;
      case 'newsletter':
        scrollToSection('newsletter');
        break;
      case 'take-action':
        scrollToSection('take-action');
        break;
    }
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#222520]">
      <Navbar
        onOpenDonate={handleOpenDonate}
        onOpenSignIn={() => setModal({ type: 'signin' })}
        onOpenModelInfo={() => setModal({ type: 'model-100' })}
        onNavigateSection={scrollToSection}
      />

      <main className="flex-1">
        <HeroDonation
          currency={currency}
          frequency={frequency}
          onFrequencyChange={setFrequency}
          onProceedToCheckout={(amount, chosenFreq) =>
            setModal({ type: 'checkout', amount, frequency: chosenFreq })
          }
        />

        <WhyWaterSection
          onSelectStoryDetail={(story) => setModal({ type: 'story', story })}
        />

        <CrisisAndModelSection
          onGiveToday={() => scrollToSection('donate')}
          onOpenModelInfo={() => setModal({ type: 'model-100' })}
        />

        <ImpactMapSection
          totals={liveImpactTotals}
          onFundProject={(country) =>
            setModal({
              type: 'checkout',
              amount: CURRENCY_CONFIG[currency].defaultMonthly,
              frequency: 'monthly',
              targetCountry: country,
            })
          }
        />

        <TakeActionCarousel
          currency={currency}
          onSelectAction={handleSelectActionCard}
        />

        <NewsletterSection />
      </main>

      <Footer
        currency={currency}
        onCurrencyChange={setCurrency}
        onAction={handleFooterAction}
      />

      <ActionModal
        modal={modal}
        currency={currency}
        onClose={() => setModal({ type: 'closed' })}
        onCompleteDonation={(record) => setDonations((prev) => [...prev, record])}
        onOpenDonate={handleOpenDonate}
      />
    </div>
  );
}
