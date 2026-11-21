import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { WaterDropIcon } from './BrandIcons';
import { Link } from 'react-router-dom';

export interface NavbarProps {
  onOpenDonate: (frequency?: 'monthly' | 'once') => void;
  onOpenSignIn: () => void;
  onOpenModelInfo: () => void;
}

export function Navbar({
  onOpenDonate,
  onOpenSignIn,
  onOpenModelInfo,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [takeActionOpen, setTakeActionOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setTakeActionOpen(false);
        setAboutOpen(false);
      }
    };
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        setTakeActionOpen(false);
        setAboutOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
    setTakeActionOpen(false);
    setAboutOpen(false);
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

          <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-7 lg:gap-9">
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
                  <Link to="/the-spring" onClick={handleLinkClick} className="block px-5 py-3 text-[13px] text-[#1E1B6B] hover:bg-[#FAF7F0] transition-colors cursor-pointer border-b border-[#F4F5F0] last:border-0 font-medium">
                    Give monthly <span className="text-[11px] text-[#6E6E93] font-normal block mt-0.5">Join The Spring</span>
                  </Link>
                  <Link to="/fundraise" onClick={handleLinkClick} className="block px-5 py-3 text-[13px] text-[#1E1B6B] hover:bg-[#FAF7F0] transition-colors cursor-pointer border-b border-[#F4F5F0] last:border-0 font-medium">
                    Fundraise for clean water
                  </Link>
                  <Link to="/our-work" onClick={handleLinkClick} className="block px-5 py-3 text-[13px] text-[#1E1B6B] hover:bg-[#FAF7F0] transition-colors cursor-pointer border-b border-[#F4F5F0] last:border-0 font-medium">
                    Sponsor a project
                  </Link>
                  <Link to="/contact" onClick={handleLinkClick} className="block px-5 py-3 text-[13px] text-[#1E1B6B] hover:bg-[#FAF7F0] transition-colors cursor-pointer font-medium">
                    Become a brand partner
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
                  <Link to="/about" onClick={handleLinkClick} className="block px-5 py-3 text-[13px] text-[#1E1B6B] hover:bg-[#FAF7F0] transition-colors cursor-pointer border-b border-[#F4F5F0] last:border-0 font-medium">
                    Our story & purpose
                  </Link>
                  <Link to="/team" onClick={handleLinkClick} className="block px-5 py-3 text-[13px] text-[#1E1B6B] hover:bg-[#FAF7F0] transition-colors cursor-pointer border-b border-[#F4F5F0] last:border-0 font-medium">
                    Meet the team
                  </Link>
                  <Link to="/financials" onClick={handleLinkClick} className="block px-5 py-3 text-[13px] text-[#1E1B6B] hover:bg-[#FAF7F0] transition-colors cursor-pointer border-b border-[#F4F5F0] last:border-0 font-medium">
                    100% Model & Financials
                  </Link>
                  <Link to="/impact-stories" onClick={handleLinkClick} className="block px-5 py-3 text-[13px] text-[#1E1B6B] hover:bg-[#FAF7F0] transition-colors cursor-pointer font-medium">
                    Impact stories
                  </Link>
                </div>
              )}
            </div>
            <Link to="/impact-stories" onClick={handleLinkClick} className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] hover:text-[#565677] transition-colors whitespace-nowrap shrink-0 py-2 cw-focus">
              Why Water?
            </Link>
            <Link to="/our-work" onClick={handleLinkClick} className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] hover:text-[#565677] transition-colors whitespace-nowrap shrink-0 py-2 cw-focus">
              Our Work
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          <button type="button" onClick={onOpenSignIn} className="hidden sm:inline-block text-[12px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] hover:text-[#565677] transition-colors whitespace-nowrap shrink-0 py-2 cw-focus cursor-pointer">
            Sign In
          </button>
          <button type="button" onClick={() => onOpenDonate()} className="inline-flex items-center justify-center gap-2 bg-[#3FBD92] hover:bg-[#36A87D] active:scale-[0.99] text-[#1E1B6B] font-bold text-[12px] uppercase tracking-[0.12em] px-5 py-2.5 rounded-[4px] transition-all whitespace-nowrap shrink-0 cw-focus cursor-pointer min-h-[40px] shadow-sm">
            <span>Give</span>
            <WaterDropIcon className="w-3.5 h-4" />
          </button>
          <button type="button" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileOpen} className="md:hidden p-2 text-[#1E1B6B] hover:bg-[#FAF7F0] rounded-[4px] cw-focus cursor-pointer">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#E9EAE4] px-6 py-4 space-y-2 shadow-lg">
          <div className="border-b border-[#F4F5F0] pb-3 mb-3">
            <button type="button" onClick={() => setTakeActionOpen(!takeActionOpen)} className="flex items-center justify-between w-full text-left py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B]">
              Take Action
              <ChevronDown className={`w-4 h-4 transition-transform ${takeActionOpen ? 'rotate-180' : ''}`} />
            </button>
            {takeActionOpen && (
              <div className="mt-3 space-y-2 pl-4">
                <Link to="/the-spring" onClick={() => setMobileOpen(false)} className="block text-[13px] text-[#1E1B6B] hover:text-[#565677] py-1.5 font-medium">Give monthly (The Spring)</Link>
                <Link to="/fundraise" onClick={() => setMobileOpen(false)} className="block text-[13px] text-[#1E1B6B] hover:text-[#565677] py-1.5 font-medium">Fundraise for clean water</Link>
                <Link to="/our-work" onClick={() => setMobileOpen(false)} className="block text-[13px] text-[#1E1B6B] hover:text-[#565677] py-1.5 font-medium">Sponsor a project</Link>
                <Link to="/contact" onClick={() => setMobileOpen(false)} className="block text-[13px] text-[#1E1B6B] hover:text-[#565677] py-1.5 font-medium">Become a brand partner</Link>
              </div>
            )}
          </div>
          <div className="border-b border-[#F4F5F0] pb-3 mb-3">
            <button type="button" onClick={() => setAboutOpen(!aboutOpen)} className="flex items-center justify-between w-full text-left py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B]">
              About Us
              <ChevronDown className={`w-4 h-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
            </button>
            {aboutOpen && (
              <div className="mt-3 space-y-2 pl-4">
                <Link to="/about" onClick={() => setMobileOpen(false)} className="block text-[13px] text-[#1E1B6B] hover:text-[#565677] py-1.5 font-medium">Our story & purpose</Link>
                <Link to="/team" onClick={() => setMobileOpen(false)} className="block text-[13px] text-[#1E1B6B] hover:text-[#565677] py-1.5 font-medium">Meet the team</Link>
                <Link to="/financials" onClick={() => setMobileOpen(false)} className="block text-[13px] text-[#1E1B6B] hover:text-[#565677] py-1.5 font-medium">100% Model & Financials</Link>
                <Link to="/impact-stories" onClick={() => setMobileOpen(false)} className="block text-[13px] text-[#1E1B6B] hover:text-[#565677] py-1.5 font-medium">Impact stories</Link>
              </div>
            )}
          </div>
          <Link to="/impact-stories" onClick={handleLinkClick} className="block text-left py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] border-b border-[#F4F5F0]">Why Water?</Link>
          <Link to="/our-work" onClick={handleLinkClick} className="block text-left py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] border-b border-[#F4F5F0]">Our Work</Link>
          <button type="button" onClick={() => { setMobileOpen(false); onOpenSignIn(); }} className="block w-full text-left py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] border-b border-[#F4F5F0]">Sign In</button>
          <button type="button" onClick={() => { setMobileOpen(false); onOpenModelInfo(); }} className="block w-full text-left py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] border-b border-[#F4F5F0]">100% Model</button>
          <button type="button" onClick={() => { setMobileOpen(false); onOpenDonate(); }} className="block w-full text-center py-3 text-[13px] font-bold uppercase tracking-[0.12em] text-[#1E1B6B] bg-[#3FBD92] rounded-[4px] mt-3">Give Clean Water</button>
        </div>
      )}
    </header>
  );
}
