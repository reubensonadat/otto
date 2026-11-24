import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { GhanaCediCoin } from './BrandIcons';

export interface NavbarProps {
  onOpenDonate: () => void;
  onOpenSignIn: () => void;
  onOpenModelInfo: () => void;
}

export function Navbar({ onOpenDonate, onOpenSignIn, onOpenModelInfo }: NavbarProps) {
  const [takeActionOpen, setTakeActionOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setTakeActionOpen(false);
    setAboutOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setTakeActionOpen(false);
        setAboutOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setTakeActionOpen(false);
    setAboutOpen(false);
    setMobileOpen(false);
  };

  return (
    <header ref={navRef} className="sticky top-0 z-40 bg-white/98 backdrop-blur-sm border-b border-[#E9EAE4]">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 h-16 md:h-[72px] flex items-center justify-between gap-8">
        <div className="flex items-center gap-8 lg:gap-11 min-w-0">
          <Link to="/" className="flex items-center gap-2.5 text-[#1E1B6B] whitespace-nowrap shrink-0 cw-focus rounded-[4px]" aria-label="Otoo Foundation home">
            <img
              src="/brand/logo.jpg"
              alt="Otoo Foundation CIC — Empowering Communities, Changing Lives"
              className="h-11 w-auto object-contain"
            />
          </Link>

          <nav aria-label="Primary Navigation" className="hidden sm:flex items-center gap-4 lg:gap-8 flex-wrap">
            <Link
              to="/why-coastal-ghana"
              onClick={handleLinkClick}
              className={`text-[12px] font-bold uppercase tracking-[0.12em] transition-colors whitespace-nowrap shrink-0 py-2 cw-focus ${
                location.pathname === '/why-coastal-ghana' ? 'text-[#3FBD92]' : 'text-[#1E1B6B] hover:text-[#565677]'
              }`}
            >
              Why Coastal Ghana?
            </Link>

            <Link
              to="/programmes"
              onClick={handleLinkClick}
              className={`text-[12px] font-bold uppercase tracking-[0.12em] transition-colors whitespace-nowrap shrink-0 py-2 cw-focus ${
                location.pathname === '/programmes' ? 'text-[#3FBD92]' : 'text-[#1E1B6B] hover:text-[#565677]'
              }`}
            >
              Our Programmes
            </Link>

            <Link
              to="/upcoming-projects"
              onClick={handleLinkClick}
              className={`text-[12px] font-bold uppercase tracking-[0.12em] transition-colors whitespace-nowrap shrink-0 py-2 cw-focus ${
                location.pathname === '/upcoming-projects' ? 'text-[#3FBD92]' : 'text-[#1E1B6B] hover:text-[#565677]'
              }`}
            >
              Projects &amp; Builds
            </Link>

            <div className="relative group">
              <button
                type="button"
                onClick={() => setTakeActionOpen(!takeActionOpen)}
                className="flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] hover:text-[#565677] transition-colors whitespace-nowrap shrink-0 py-2 cw-focus cursor-pointer"
              >
                Take Action
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${takeActionOpen ? 'rotate-180' : ''}`} />
              </button>
              {takeActionOpen && (
                <div role="menu" className="absolute left-0 top-full mt-2 w-72 bg-white rounded-[6px] border border-[#E9EAE4] shadow-[0_12px_32px_rgba(30,27,107,0.12)] py-3 z-50">
                  <Link to="/the-circle" onClick={handleLinkClick} className="block px-5 py-3 text-[13px] text-[#1E1B6B] hover:bg-[#FAF7F0] transition-colors cursor-pointer border-b border-[#F4F5F0] font-medium">
                    The Otoo Circle <span className="text-[11px] text-[#6E6E93] font-normal block mt-0.5">Monthly Community Builders</span>
                  </Link>
                  <Link to="/upcoming-projects" onClick={handleLinkClick} className="block px-5 py-3 text-[13px] text-[#1E1B6B] hover:bg-[#FAF7F0] transition-colors cursor-pointer border-b border-[#F4F5F0] font-medium">
                    Sponsor a School or Clinic
                  </Link>
                  <Link to="/fundraise" onClick={handleLinkClick} className="block px-5 py-3 text-[13px] text-[#1E1B6B] hover:bg-[#FAF7F0] transition-colors cursor-pointer border-b border-[#F4F5F0] font-medium">
                    Start a Fundraiser
                  </Link>
                  <Link to="/contact" onClick={handleLinkClick} className="block px-5 py-3 text-[13px] text-[#1E1B6B] hover:bg-[#FAF7F0] transition-colors cursor-pointer font-medium">
                    Brand &amp; Corporate Partnerships
                  </Link>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                type="button"
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] hover:text-[#565677] transition-colors whitespace-nowrap shrink-0 py-2 cw-focus cursor-pointer"
              >
                About Us
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${aboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {aboutOpen && (
                <div role="menu" className="absolute left-0 top-full mt-2 w-64 bg-white rounded-[6px] border border-[#E9EAE4] shadow-[0_12px_32px_rgba(30,27,107,0.12)] py-3 z-50">
                  <Link to="/about" onClick={handleLinkClick} className="block px-5 py-3 text-[13px] text-[#1E1B6B] hover:bg-[#FAF7F0] transition-colors cursor-pointer border-b border-[#F4F5F0] font-medium">
                    Our Story &amp; Founder
                  </Link>
                  <Link to="/financials" onClick={handleLinkClick} className="block px-5 py-3 text-[13px] text-[#1E1B6B] hover:bg-[#FAF7F0] transition-colors cursor-pointer border-b border-[#F4F5F0] font-medium">
                    100% Model &amp; Financials
                  </Link>
                  <button type="button" onClick={() => { handleLinkClick(); onOpenModelInfo(); }} className="w-full text-left px-5 py-3 text-[13px] text-[#1E1B6B] hover:bg-[#FAF7F0] transition-colors cursor-pointer border-b border-[#F4F5F0] font-medium">
                    100% Model Guarantee
                  </button>
                  <Link to="/contact" onClick={handleLinkClick} className="block px-5 py-3 text-[13px] text-[#1E1B6B] hover:bg-[#FAF7F0] transition-colors cursor-pointer font-medium">
                    Contact &amp; Governance
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          <button type="button" onClick={onOpenSignIn} className="hidden sm:inline-block text-[12px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] hover:text-[#565677] transition-colors whitespace-nowrap shrink-0 py-2 cw-focus cursor-pointer">
            Sign In
          </button>
          <button type="button" onClick={() => onOpenDonate()} className="inline-flex items-center justify-center gap-2 bg-[#3FBD92] hover:bg-[#36A87D] active:scale-[0.99] text-[#1E1B6B] font-bold text-[12px] uppercase tracking-[0.12em] px-5 py-2.5 rounded-[4px] transition-all whitespace-nowrap shrink-0 cw-focus cursor-pointer min-h-[40px] shadow-sm">
            <span>Give</span>
            <GhanaCediCoin className="w-4 h-4" />
          </button>
          <button type="button" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileOpen} className="sm:hidden p-2 text-[#1E1B6B] hover:bg-[#FAF7F0] rounded-[4px] cw-focus cursor-pointer">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="sm:hidden bg-white border-t border-[#E9EAE4] px-6 py-4 space-y-2 shadow-lg">
          <Link to="/why-coastal-ghana" onClick={handleLinkClick} className="block text-left py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] border-b border-[#F4F5F0]">
            Why Coastal Ghana?
          </Link>
          <Link to="/programmes" onClick={handleLinkClick} className="block text-left py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] border-b border-[#F4F5F0]">
            Our Programmes
          </Link>
          <Link to="/upcoming-projects" onClick={handleLinkClick} className="block text-left py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] border-b border-[#F4F5F0]">
            Projects &amp; Builds
          </Link>
          <Link to="/the-circle" onClick={handleLinkClick} className="block text-left py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] border-b border-[#F4F5F0]">
            The Otoo Circle (Monthly Giving)
          </Link>
          <Link to="/about" onClick={handleLinkClick} className="block text-left py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] border-b border-[#F4F5F0]">
            About Us &amp; Founder
          </Link>
          <Link to="/financials" onClick={handleLinkClick} className="block text-left py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] border-b border-[#F4F5F0]">
            100% Model &amp; Financials
          </Link>
          <Link to="/fundraise" onClick={handleLinkClick} className="block text-left py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] border-b border-[#F4F5F0]">
            Start a Fundraiser
          </Link>
          <Link to="/contact" onClick={handleLinkClick} className="block text-left py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] border-b border-[#F4F5F0]">
            Contact Us
          </Link>
          <button type="button" onClick={() => { setMobileOpen(false); onOpenSignIn(); }} className="block w-full text-left py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] border-b border-[#F4F5F0]">
            Sign In
          </button>
          <button type="button" onClick={() => { setMobileOpen(false); onOpenDonate(); }} className="block w-full text-center py-3 text-[13px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] bg-[#3FBD92] rounded-[4px] mt-3">
            Give Today
          </button>
        </div>
      )}
    </header>
  );
}
