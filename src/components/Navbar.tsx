import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyData';

interface NavbarProps {
  onOpenQuote: (defaultSubject?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Prefab & Wooden', href: '#prefab' },
    { label: 'Products', href: '#products' },
    { label: 'Projects', href: '#projects' },
    { label: 'Why RAVGROUP', href: '#why-ravgroup' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#111111]/92 backdrop-blur-md border-b border-[#2A2A2A] shadow-lg py-3.5'
            : 'bg-gradient-to-b from-[#111111]/80 via-[#111111]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark */}
            <a href="#home" className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EB3B2C] rounded">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-6 bg-[#EB3B2C] rounded-xs group-hover:bg-[#F49A3A] transition-colors" />
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-['Plus_Jakarta_Sans']">
                  RAVGROUP
                </span>
              </div>
              <span className="text-[9px] tracking-[0.24em] font-semibold text-[#A0A0A0] uppercase pl-4.5 -mt-0.5">
                {COMPANY_CONFIG.countryDivision}
              </span>
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden xl:flex items-center gap-6 2xl:gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[13px] tracking-wide font-medium text-neutral-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#F49A3A] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: CTA & Phone */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${COMPANY_CONFIG.phone}`}
                className="hidden md:flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white font-medium px-3 py-2 rounded border border-neutral-700/60 hover:border-neutral-500 transition-colors"
                title="Direct Phone Support"
              >
                <Phone className="w-3.5 h-3.5 text-[#F49A3A]" />
                <span className="tabular-nums">{COMPANY_CONFIG.phoneFormatted}</span>
              </a>

              <button
                onClick={() => onOpenQuote()}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-[13px] font-semibold tracking-wider text-white uppercase bg-[#EB3B2C] hover:bg-[#d63426] active:scale-[0.98] transition-all rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#EB3B2C] focus:ring-offset-2 focus:ring-offset-[#111111]"
              >
                <span>GET A PROJECT QUOTE</span>
                <ArrowRight className="w-3.5 h-3.5 hidden sm:inline-block" />
              </button>

              {/* Mobile menu hamburger toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-40 bg-[#111111]/95 backdrop-blur-md pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            <div className="pb-3 border-b border-neutral-800">
              <span className="text-xs font-semibold tracking-widest text-[#F49A3A] uppercase">
                Navigation
              </span>
            </div>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-neutral-200 hover:text-white py-1 flex items-center justify-between border-b border-neutral-900"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-neutral-600" />
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-8 mt-6 border-t border-neutral-800 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3.5 px-4 text-center text-sm font-bold tracking-wider text-white uppercase bg-[#EB3B2C] rounded active:bg-[#c93023] transition-colors"
            >
              GET A PROJECT QUOTE
            </button>
            <div className="text-center text-xs text-neutral-400">
              <p>Call our project desk directly:</p>
              <a href={`tel:${COMPANY_CONFIG.phone}`} className="text-[#F49A3A] font-semibold mt-1 inline-block tabular-nums">
                {COMPANY_CONFIG.phoneFormatted}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
