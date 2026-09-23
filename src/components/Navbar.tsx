import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Search,
  Sliders,
  Layers,
  FileText,
  ShieldCheck,
  Instagram,
  Linkedin,
  Facebook
} from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyData';

interface NavbarProps {
  onOpenQuote: (defaultSubject?: string) => void;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quickDrawerOpen, setQuickDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 28);
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-['Plus_Jakarta_Sans'] ${
          isScrolled
            ? 'bg-[#111111] shadow-2xl backdrop-blur-md border-b border-neutral-800'
            : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent'
        }`}
      >
        {/* Top Utility Bar (Desktop) */}
        <div className="hidden lg:block bg-[#0A0A0A]/95 text-neutral-400 border-b border-white/5 py-1.5 text-[11px] font-medium tracking-wide">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Left: Location & Working Hours */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1.5 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-[#EB3B2C]" />
                <span>Cement Town, Dehradun - 248001, India</span>
              </div>
              <div className="hidden xl:flex items-center gap-2 text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Mon – Sat: 9:00 AM – 7:30 PM IST</span>
              </div>
            </div>

            {/* Right: Phone, Email & Socials */}
            <div className="flex items-center gap-6">
              <a
                href={`tel:${COMPANY_CONFIG.phone}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors tabular-nums"
              >
                <Phone className="w-3.5 h-3.5 text-[#F49A3A]" />
                <span>{COMPANY_CONFIG.phoneFormatted}</span>
              </a>
              <a
                href={`mailto:${COMPANY_CONFIG.email}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#EB3B2C]" />
                <span>{COMPANY_CONFIG.email}</span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5 pl-3 border-l border-white/10 text-neutral-400">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors p-0.5"
                  aria-label="RAVGROUP LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors p-0.5"
                  aria-label="RAVGROUP Instagram"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors p-0.5"
                  aria-label="RAVGROUP Facebook"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-3.5' : 'py-4 sm:py-5'}`}>
            {/* LEFT: RAVGROUP Architectural Logo */}
            <a
              href="#home"
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="RAVGROUP Home"
            >
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-7 bg-[#EB3B2C] group-hover:bg-[#F49A3A] transition-colors" />
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-['Plus_Jakarta_Sans'] leading-none">
                    RAVGROUP
                  </span>
                  <span className="text-[9px] font-bold tracking-[0.22em] text-[#A0A0A0] uppercase pt-0.5 font-mono">
                    INDIA PRIVATE LIMITED
                  </span>
                </div>
              </div>
            </a>

            {/* CENTER: Navigation Links */}
            <nav className="hidden xl:flex items-center gap-6 2xl:gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[13px] font-semibold tracking-wide text-neutral-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#EB3B2C] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* RIGHT: Search, Quote CTA & Menu Icon */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Search Icon Trigger */}
              <button
                onClick={onOpenSearch}
                className="p-2 sm:p-2.5 text-neutral-300 hover:text-white hover:bg-white/10 transition-colors rounded-none focus:outline-none"
                aria-label="Search Catalog"
                title="Search Solutions & Products"
              >
                <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>

              {/* GET A PROJECT QUOTE CTA Button (Uses Red/Orange Brand Gradient) */}
              <button
                onClick={() => onOpenQuote()}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wider text-white uppercase bg-gradient-to-r from-[#EB3B2C] to-[#F49A3A] hover:brightness-110 active:scale-[0.98] transition-all rounded-none shadow-lg cursor-pointer"
              >
                <span>GET A PROJECT QUOTE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Menu Drawer Icon (Quick Specification Sheet) */}
              <button
                onClick={() => setQuickDrawerOpen(true)}
                className="hidden xl:flex p-2 text-neutral-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
                aria-label="Open Quick Specs Menu"
                title="Company Specifications & Direct Desk"
              >
                <Sliders className="w-4 h-4" />
              </button>

              {/* Mobile Phone / Quote Shortcut */}
              <button
                onClick={() => onOpenQuote()}
                className="sm:hidden px-3 py-1.5 text-[11px] font-bold text-white uppercase bg-gradient-to-r from-[#EB3B2C] to-[#F49A3A]"
              >
                QUOTE
              </button>

              {/* Mobile Hamburger Toggle */}
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

      {/* Full-Screen Animated Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-50 bg-[#111111] text-white flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
          {/* Mobile Menu Header */}
          <div className="p-6 border-b border-neutral-800 flex items-center justify-between bg-[#0C0C0C]">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-6 bg-[#EB3B2C]" />
              <div className="flex flex-col">
                <span className="text-lg font-black text-white font-['Plus_Jakarta_Sans']">
                  RAVGROUP
                </span>
                <span className="text-[9px] font-mono tracking-widest text-[#F49A3A] uppercase">
                  INDIA PRIVATE LIMITED
                </span>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-neutral-400 hover:text-white"
              aria-label="Close Mobile Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <div className="p-6 space-y-6 flex-grow">
            {/* Quick Search in Mobile Menu */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch?.();
              }}
              className="w-full flex items-center justify-between p-3.5 bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-semibold tracking-wider uppercase text-left"
            >
              <div className="flex items-center gap-2.5">
                <Search className="w-4 h-4 text-[#F49A3A]" />
                <span>Search Products & Projects</span>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-500" />
            </button>

            <nav className="space-y-1">
              {navLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 text-base sm:text-lg font-bold text-neutral-200 hover:text-white border-b border-neutral-800/80 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#EB3B2C]">0{i + 1}</span>
                    <span>{link.label}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-600" />
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile Bottom Actions */}
          <div className="p-6 bg-[#0E0E0E] border-t border-neutral-800 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-4 text-center text-xs font-bold tracking-wider text-white uppercase bg-gradient-to-r from-[#EB3B2C] to-[#F49A3A] shadow-lg"
            >
              GET A PROJECT QUOTE
            </button>
            <div className="text-center text-xs text-neutral-400 space-y-1">
              <p>Direct Project Estimation Desk:</p>
              <a
                href={`tel:${COMPANY_CONFIG.phone}`}
                className="text-white font-mono font-bold text-sm block"
              >
                {COMPANY_CONFIG.phoneFormatted}
              </a>
              <p className="text-[11px] text-neutral-500 pt-1">
                Cement Town, Dehradun - 248001
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Quick Specifications Drawer */}
      {quickDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex justify-end">
          <div className="bg-[#141414] text-white w-full max-w-md h-full p-8 overflow-y-auto border-l border-neutral-800 shadow-2xl space-y-8 flex flex-col justify-between animate-in slide-in-from-right duration-300">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-6 bg-[#EB3B2C]" />
                  <span className="text-lg font-black tracking-tight text-white font-['Plus_Jakarta_Sans']">
                    RAVGROUP DESK
                  </span>
                </div>
                <button
                  onClick={() => setQuickDrawerOpen(false)}
                  className="p-1 text-neutral-400 hover:text-white"
                  aria-label="Close Drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono text-[#F49A3A] uppercase tracking-widest font-bold">
                  ARCHITECTURAL SCOPE
                </span>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Turnkey materials supplier and structural engineering partner for prefabricated resorts, mountain chalets, wooden cottages, and architectural developments across India.
                </p>
              </div>

              {/* Divisions List */}
              <div className="space-y-2">
                <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider font-mono">
                  Engineered Divisions:
                </div>
                <div className="space-y-1 text-xs text-neutral-300 font-medium">
                  <div className="p-2.5 bg-neutral-900 border border-neutral-800 flex justify-between">
                    <span>Prefab &amp; Wooden Resorts</span>
                    <span className="text-[#EB3B2C] font-mono">01</span>
                  </div>
                  <div className="p-2.5 bg-neutral-900 border border-neutral-800 flex justify-between">
                    <span>Architectural Roofing</span>
                    <span className="text-[#EB3B2C] font-mono">02</span>
                  </div>
                  <div className="p-2.5 bg-neutral-900 border border-neutral-800 flex justify-between">
                    <span>Acoustic &amp; Timber Ceilings</span>
                    <span className="text-[#EB3B2C] font-mono">03</span>
                  </div>
                  <div className="p-2.5 bg-neutral-900 border border-neutral-800 flex justify-between">
                    <span>Exterior &amp; Interior Cladding</span>
                    <span className="text-[#EB3B2C] font-mono">04</span>
                  </div>
                  <div className="p-2.5 bg-neutral-900 border border-neutral-800 flex justify-between">
                    <span>High-Traffic Engineered Flooring</span>
                    <span className="text-[#EB3B2C] font-mono">05</span>
                  </div>
                  <div className="p-2.5 bg-neutral-900 border border-neutral-800 flex justify-between">
                    <span>Structural Plywood &amp; Boards</span>
                    <span className="text-[#EB3B2C] font-mono">06</span>
                  </div>
                </div>
              </div>

              {/* Direct Office Details */}
              <div className="p-4 bg-[#0D0D0D] border border-neutral-800 space-y-2 text-xs text-neutral-300">
                <div className="font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#EB3B2C]" />
                  Corporate Office
                </div>
                <p className="text-neutral-400">
                  Cement Town, Dehradun - 248001, Uttarakhand, India
                </p>
                <div className="pt-2 border-t border-neutral-800 space-y-1">
                  <div>Direct: <span className="text-white font-mono">{COMPANY_CONFIG.phoneFormatted}</span></div>
                  <div>Email: <span className="text-white font-mono">{COMPANY_CONFIG.email}</span></div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-800 space-y-3">
              <button
                onClick={() => {
                  setQuickDrawerOpen(false);
                  onOpenQuote('Rapid BOQ Consultation');
                }}
                className="w-full py-3.5 text-center text-xs font-bold tracking-wider text-white uppercase bg-gradient-to-r from-[#EB3B2C] to-[#F49A3A] transition-all"
              >
                REQUEST PROJECT PROPOSAL
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
