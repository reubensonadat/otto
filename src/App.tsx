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
import { ProgrammeStoriesSection } from './components/ProgrammeStoriesSection';
import { CrisisAndModelSection } from './components/CrisisAndModelSection';
import { CommunityImpactMapSection } from './components/CommunityImpactMapSection';
import { TakeActionCarousel } from './components/TakeActionCarousel';
import { UpcomingProjectsSection } from './components/UpcomingProjectsSection';
import { VideoSection } from './components/VideoSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer, type FooterAction } from './components/Footer';
import { ActionModal, type ModalState } from './components/ActionModal';

// Dedicated Subpages with Genuine Otoo Foundation Mission
import { AboutPage } from './pages/AboutPage';
import { OurWorkPage } from './pages/OurWorkPage';
import { TheSpringPage } from './pages/TheSpringPage';
import { FinancialsPage } from './pages/FinancialsPage';
import { FundraisePage } from './pages/FundraisePage';
import { ContactPage } from './pages/ContactPage';
import { ProjectsPage } from './pages/ProjectsPage';

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
    else if (action === 'why-water') scrollToSection('programmes');
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
      <ProgrammeStoriesSection onSelectStoryDetail={(story) => setModal({ type: 'story', story })} />
      <CrisisAndModelSection onGiveToday={() => scrollToSection('donate')} onOpenModelInfo={() => setModal({ type: 'model-100' })} />
      <CommunityImpactMapSection totals={liveImpactTotals} onFundProject={() => handleOpenDonate('monthly')} />
      <TakeActionCarousel onSelectAction={(card) => {
        if (card.modalIntent === 'monthly') handleOpenDonate('monthly');
        else if (card.modalIntent === 'once') handleOpenDonate('once');
        else setModal({ type: 'fundraise', mode: card.modalIntent });
      }} />
      <UpcomingProjectsSection />
      <VideoSection />
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
            
            {/* Why Coastal Ghana & Programmes */}
            <Route path="/why-coastal-ghana" element={<OurWorkPage onFundProject={() => handleOpenDonate('monthly')} />} />
            <Route path="/programmes" element={<OurWorkPage onFundProject={() => handleOpenDonate('monthly')} />} />
            <Route path="/our-work" element={<OurWorkPage onFundProject={() => handleOpenDonate('monthly')} />} />
            
            {/* Upcoming Projects & Builds */}
            <Route path="/upcoming-projects" element={<ProjectsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/impact-stories" element={<ProjectsPage />} />
            
            {/* The Otoo Circle (Monthly Giving) */}
            <Route path="/the-circle" element={<TheSpringPage currency={currency} onJoinCircle={(amt) => handleOpenDonate('monthly', amt)} />} />
            <Route path="/the-spring" element={<TheSpringPage currency={currency} onJoinCircle={(amt) => handleOpenDonate('monthly', amt)} />} />
            <Route path="/donate" element={<TheSpringPage currency={currency} onJoinCircle={(amt) => handleOpenDonate('monthly', amt)} />} />
            
            {/* About & Leadership */}
            <Route path="/about" element={<AboutPage onOpenDonate={() => handleOpenDonate('monthly')} />} />
            <Route path="/team" element={<AboutPage onOpenDonate={() => handleOpenDonate('monthly')} />} />
            
            {/* Financials & 100% Model */}
            <Route path="/financials" element={<FinancialsPage onOpenDonate={() => handleOpenDonate('monthly')} />} />
            
            {/* Peer-to-Peer Fundraising */}
            <Route path="/fundraise" element={<FundraisePage currency={currency} onStartCampaign={() => setModal({ type: 'fundraise', mode: 'fundraise' })} />} />
            
            {/* Contact */}
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
