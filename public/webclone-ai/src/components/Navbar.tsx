import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { JerrycanIcon, WaterDropIcon } from './BrandIcons';

export interface NavbarProps {
  onOpenDonate: (frequency?: 'monthly' | 'once') => void;
  onOpenSignIn: () => void;
  onOpenModelInfo: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export function Navbar({
  onOpenDonate,
  onOpenSignIn,
  onOpenModelInfo,
  onNavigateSection,
}: NavbarProps) {
  const [openMenu, setOpenMenu] = useState<'take-action' | 'about' | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const handleLinkClick = (sectionId: string) => {
    setOpenMenu(null);
    setMobileOpen(false);
    onNavigateSection(sectionId);
  };

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-40 bg-white/98 backdrop-blur-sm border-b border-[#E9EAE4]"
    >
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 h-16 md:h-[72px] flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark + Left-aligned Nav */}
        <div className="flex items-center gap-8 lg:gap-11 min-w-0">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 text-[#222520] whitespace-nowrap shrink-0 cw-focus rounded-sm"
            aria-label="charity: water home"
          >
            <JerrycanIcon className="w-[18px] h-[22px]" />
            <span className="font-serif text-[19px] tracking-[0.07em] font-normal leading-none">
              charity: water
            </span>
          </a>

          {/* Zone 2: Clean single-line navigation links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-7 lg:gap-9"
          >
            <div className="relative">
              <button
                type="button"
                aria-expanded={openMenu === 'take-action'}
                onClick={() => setOpenMenu(openMenu === 'take-action' ? null : 'take-action')}
                className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#222520] hover:text-[#5C5E58] transition-colors whitespace-nowrap shrink-0 py-2 cw-focus cursor-pointer"
              >
                Take Action
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-150 ${
                    openMenu === 'take-action' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openMenu === 'take-action' && (
                <div
                  role="menu"
                  className="absolute left-0 top-full mt-2 w-60 bg-white rounded-md border border-[#E9EAE4] shadow-[0_12px_32px_rgba(34,37,32,0.12)] py-2 z-50"
                >
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      setOpenMenu(null);
                      onOpenDonate('monthly');
                    }}
                    className="w-full text-left px-4 py-2.5 text-[13px] text-[#222520] hover:bg-[#FAF7F0] transition-colors cursor-pointer"
                  >
                    <span className="font-semibold block">Join The Spring</span>
                    <span className="text-[12px] text-[#71716C]">Give clean water every month</span>
                  </button>
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => handleLinkClick('take-action')}
                    className="w-full text-left px-4 py-2.5 text-[13px] text-[#222520] hover:bg-[#FAF7F0] transition-colors cursor-pointer"
                  >
                    <span className="font-semibold block">Sponsor a Water Project</span>
                    <span className="text-[12px] text-[#71716C]">Fund a community or school</span>
                  </button>
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => handleLinkClick('take-action')}
                    className="w-full text-left px-4 py-2.5 text-[13px] text-[#222520] hover:bg-[#FAF7F0] transition-colors cursor-pointer"
                  >
                    <span className="font-semibold block">Start a Fundraiser</span>
                    <span className="text-[12px] text-[#71716C]">Pledge your birthday or event</span>
                  </button>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                type="button"
                aria-expanded={openMenu === 'about'}
                onClick={() => setOpenMenu(openMenu === 'about' ? null : 'about')}
                className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#222520] hover:text-[#5C5E58] transition-colors whitespace-nowrap shrink-0 py-2 cw-focus cursor-pointer"
              >
                About Us
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-150 ${
                    openMenu === 'about' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openMenu === 'about' && (
                <div
                  role="menu"
                  className="absolute left-0 top-full mt-2 w-60 bg-white rounded-md border border-[#E9EAE4] shadow-[0_12px_32px_rgba(34,37,32,0.12)] py-2 z-50"
                >
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      setOpenMenu(null);
                      onOpenModelInfo();
                    }}
                    className="w-full text-left px-4 py-2.5 text-[13px] text-[#222520] hover:bg-[#FAF7F0] transition-colors cursor-pointer"
                  >
                    <span className="font-semibold block">100% Model</span>
                    <span className="text-[12px] text-[#71716C]">Every public dollar funds water</span>
                  </button>
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => handleLinkClick('impact-map')}
                    className="w-full text-left px-4 py-2.5 text-[13px] text-[#222520] hover:bg-[#FAF7F0] transition-colors cursor-pointer"
                  >
                    <span className="font-semibold block">Our Global Impact</span>
                    <span className="text-[12px] text-[#71716C]">Explore GPS-proven projects</span>
                  </button>
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => handleLinkClick('newsletter')}
                    className="w-full text-left px-4 py-2.5 text-[13px] text-[#222520] hover:bg-[#FAF7F0] transition-colors cursor-pointer"
                  >
                    <span className="font-semibold block">Stay Connected</span>
                    <span className="text-[12px] text-[#71716C]">Field stories and updates</span>
                  </button>
                </div>
              )}
            </div>

            <a
              href="#why-water"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('why-water');
              }}
              className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#222520] hover:text-[#5C5E58] transition-colors whitespace-nowrap shrink-0 py-2 cw-focus"
            >
              Why Water?
            </a>

            <a
              href="#impact-map"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('impact-map');
              }}
              className="hidden lg:inline-block text-[12px] font-semibold uppercase tracking-[0.12em] text-[#222520] hover:text-[#5C5E58] transition-colors whitespace-nowrap shrink-0 py-2 cw-focus"
            >
              Our Proof
            </a>
          </nav>
        </div>

        {/* Zone 3: Sign In + Signature Yellow GIVE CTA */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          <button
            type="button"
            onClick={onOpenSignIn}
            className="hidden sm:inline-block text-[12px] font-semibold uppercase tracking-[0.12em] text-[#222520] hover:text-[#5C5E58] transition-colors whitespace-nowrap shrink-0 py-2 cw-focus cursor-pointer"
          >
            Sign In
          </button>

          <button
            type="button"
            onClick={() => onOpenDonate()}
            className="inline-flex items-center justify-center gap-2 bg-[#FFCA0A] hover:bg-[#F0BC00] active:scale-[0.99] text-[#222520] font-bold text-[12px] uppercase tracking-[0.12em] px-5 py-2.5 rounded-[4px] transition-all whitespace-nowrap shrink-0 cw-focus cursor-pointer min-h-[40px]"
          >
            <span>Give</span>
            <WaterDropIcon className="w-3.5 h-4" />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="md:hidden p-2 text-[#222520] hover:bg-[#FAF7F0] rounded-md cw-focus cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#E9EAE4] px-6 py-4 space-y-2 shadow-lg">
          <button
            type="button"
            onClick={() => handleLinkClick('why-water')}
            className="block w-full text-left py-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#222520] border-b border-[#F4F5F0]"
          >
            Why Water?
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('impact-map')}
            className="block w-full text-left py-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#222520] border-b border-[#F4F5F0]"
          >
            Our Proof & Impact Map
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('take-action')}
            className="block w-full text-left py-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#222520] border-b border-[#F4F5F0]"
          >
            Take Action
          </button>
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onOpenModelInfo();
            }}
            className="block w-full text-left py-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#222520] border-b border-[#F4F5F0]"
          >
            100% Model
          </button>
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onOpenSignIn();
            }}
            className="block w-full text-left py-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#5C5E58]"
          >
            Sign In
          </button>
        </div>
      )}
    </header>
  );
}
