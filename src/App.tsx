import { useState, useMemo, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import {
  CURRENCY_CONFIG,
  computeImpactTotals,
  type CurrencyCode,
  type DonationRecord,
  type GivingFrequency,
} from './utils/donationLogic';
import { BASE_IMPACT_TOTALS } from './data/otooData';
import { Navbar } from './components/Navbar';
import { HeroDonation } from './components/HeroDonation';
import { WhyWaterSection } from './components/WhyWaterSection';
import { CrisisAndModelSection } from './components/CrisisAndModelSection';
import { ImpactMapSection } from './components/ImpactMapSection';
import { TakeActionCarousel } from './components/TakeActionCarousel';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer, type FooterAction } from './components/Footer';
import { ActionModal, type ModalState } from './components/ActionModal';

// Dedicated Subpages with Otoo Foundation Design Language
import { TheSpringPage } from './pages/TheSpringPage';
import { OurWorkPage } from './pages/OurWorkPage';
import { FinancialsPage } from './pages/FinancialsPage';
import { AboutPage } from './pages/AboutPage';
import { ImpactStoriesPage } from './pages/ImpactStoriesPage';
import { FundraisePage } from './pages/FundraisePage';
import { ContactPage } from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [currency, setCurrency] = useState<CurrencyCode>('GBP');
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

  const handleOpenDonate = (requestedFrequency?: GivingFrequency, customAmt?: number) => {
    const targetFreq = requestedFrequency ?? frequency;
    setFrequency(targetFreq);
    const defaultAmt =
      customAmt ??
      (targetFreq === 'monthly' ? CURRENCY_CONFIG[currency].defaultMonthly : CURRENCY_CONFIG[currency].defaultOnce);
    setModal({ type: 'checkout', amount: defaultAmt, frequency: targetFreq });
  };

  const handleFooterAction = (action: FooterAction) => {
    if (action === 'donate') handleOpenDonate();
    else if (action === 'monthly') handleOpenDonate('monthly');
    else if (action === 'once') handleOpenDonate('once');
    else if (action === 'signin') setModal({ type: 'signin' });
    else if (action === 'model-100') setModal({ type: 'model-100' });
    else if (action === 'fundraise') setModal({ type: 'fundraise', mode: 'fundraise' });
    else if (action === 'sponsor') setModal({ type: 'fundraise', mode: 'sponsor' });
    else if (action === 'why-water') scrollToSection('why-water');
    else if (action === 'impact-map') scrollToSection('impact-map');
    else if (action === 'newsletter') scrollToSection('newsletter');
    else if (action === 'take-action') scrollToSection('take-action');
  };

  const HomePageContent = () => (
    <>
      <HeroDonation
        currency={currency}
        frequency={frequency}
        onFrequencyChange={setFrequency}
        onProceedToCheckout={(amount, chosenFreq) => setModal({ type: 'checkout', amount, frequency: chosenFreq })}
      />
      <WhyWaterSection onSelectStoryDetail={(story) => setModal({ type: 'story', story })} />
      <CrisisAndModelSection onGiveToday={() => scrollToSection('donate')} onOpenModelInfo={() => setModal({ type: 'model-100' })} />
      <ImpactMapSection totals={liveImpactTotals} onFundProject={() => handleOpenDonate('monthly')} />
      <TakeActionCarousel currency={currency} onSelectAction={(card) => {
        if (card.modalIntent === 'monthly') handleOpenDonate('monthly');
        else if (card.modalIntent === 'once') handleOpenDonate('once');
        else setModal({ type: 'fundraise', mode: card.modalIntent });
      }} />
      <NewsletterSection />
    </>
  );

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div id="top" className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#1E1B6B]">
        <Navbar
          onOpenDonate={handleOpenDonate}
          onOpenSignIn={() => setModal({ type: 'signin' })}
          onOpenModelInfo={() => setModal({ type: 'model-100' })}
        />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePageContent />} />
            <Route path="/donate" element={<TheSpringPage currency={currency} onJoinSpring={(amt) => handleOpenDonate('monthly', amt)} />} />
            <Route path="/the-spring" element={<TheSpringPage currency={currency} onJoinSpring={(amt) => handleOpenDonate('monthly', amt)} />} />
            <Route path="/our-work" element={<OurWorkPage onFundProject={() => handleOpenDonate('monthly')} />} />
            <Route path="/programmes" element={<OurWorkPage onFundProject={() => handleOpenDonate('monthly')} />} />
            <Route path="/financials" element={<FinancialsPage onOpenDonate={() => handleOpenDonate('monthly')} />} />
            <Route path="/about" element={<AboutPage onOpenDonate={() => handleOpenDonate('monthly')} />} />
            <Route path="/team" element={<AboutPage onOpenDonate={() => handleOpenDonate('monthly')} />} />
            <Route path="/impact-stories" element={<ImpactStoriesPage onOpenDonate={() => handleOpenDonate('monthly')} />} />
            <Route path="/fundraise" element={<FundraisePage currency={currency} onStartCampaign={() => setModal({ type: 'fundraise', mode: 'fundraise' })} />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer currency={currency} onCurrencyChange={setCurrency} onAction={handleFooterAction} />

        <ActionModal
          modal={modal}
          currency={currency}
          onClose={() => setModal({ type: 'closed' })}
          onCompleteDonation={(record) => setDonations((prev) => [...prev, record])}
          onOpenDonate={handleOpenDonate}
        />
      </div>
    </BrowserRouter>
  );
}
