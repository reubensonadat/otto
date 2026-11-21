import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WhyWaterSection } from "./components/WhyWaterSection";
import { ModelSection } from "./components/ModelSection";
import { TheSpring } from "./components/TheSpring";
import { ProofSection } from "./components/ProofSection";
import { Footer } from "./components/Footer";
import { JerryCanIcon } from "./components/JerryCanLogo";
import { Heart, ArrowRight } from "lucide-react";

// Subpages
import { WhyWaterPage } from "./pages/WhyWaterPage";
import { OurWorkPage } from "./pages/OurWorkPage";
import { ModelPage } from "./pages/ModelPage";
import { TheSpringPage } from "./pages/TheSpringPage";
import { AboutPage } from "./pages/AboutPage";
import { SignInPage } from "./pages/SignInPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function CallToActionBanner() {
  return (
    <section className="py-20 bg-cw-yellow text-cw-black relative overflow-hidden">
      <div className="section-container relative z-10 text-center max-w-4xl mx-auto space-y-6">
        <div className="w-14 h-14 rounded-2xl bg-cw-black text-cw-yellow flex items-center justify-center mx-auto shadow-sm">
          <JerryCanIcon className="w-8 h-8" />
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
          Join the movement to end the water crisis in our lifetime.
        </h2>

        <p className="text-base sm:text-lg text-cw-black/85 max-w-2xl mx-auto font-medium leading-relaxed">
          100% of your gift directly funds clean and safe water for families in need. Every single dollar is tracked with GPS proof.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#donate"
            className="btn-cw-dark px-10 py-4 text-xs sm:text-sm flex items-center gap-2 group cursor-pointer"
          >
            <Heart className="w-4 h-4 text-cw-yellow fill-cw-yellow" />
            <span>Give Clean Water Today</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/the-spring"
            className="btn-cw-outline px-8 py-4 text-xs sm:text-sm cursor-pointer"
          >
            Learn About The Spring
          </a>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <WhyWaterSection />
      <ModelSection />
      <TheSpring />
      <ProofSection />
      <CallToActionBanner />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-cw-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/why-water" element={<WhyWaterPage />} />
            <Route path="/work" element={<OurWorkPage />} />
            <Route path="/model" element={<ModelPage />} />
            <Route path="/the-spring" element={<TheSpringPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/signin" element={<SignInPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
