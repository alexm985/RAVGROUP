import React, { useState } from 'react';
import { COMPANY_CONFIG } from '../data/companyData';
import { Phone, Mail, MapPin, MessageCircle, ArrowUp, X, Instagram, Linkedin, Facebook } from 'lucide-react';

interface FooterProps {
  onOpenQuote: (subject?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    COMPANY_CONFIG.whatsappMessage
  )}`;

  return (
    <footer className="bg-[#080808] text-neutral-400 border-t border-neutral-900 pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Massive Architectural Wordmark Header */}
        <div className="pb-16 border-b border-neutral-900 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-8 bg-[#EB3B2C]" />
              <span className="text-xs font-mono font-bold tracking-[0.24em] text-[#F49A3A] uppercase">
                {COMPANY_CONFIG.countryDivision}
              </span>
            </div>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white font-['Plus_Jakarta_Sans'] leading-none">
              RAVGROUP
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenQuote('Footer Direct Request')}
              className="px-7 py-3.5 text-xs font-bold tracking-wider text-white uppercase bg-gradient-to-r from-[#EB3B2C] to-[#F49A3A] hover:brightness-110 transition-all rounded-none shadow-xl cursor-pointer"
            >
              GET A PROJECT QUOTE
            </button>
            <button
              onClick={scrollToTop}
              className="p-3.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 py-14 border-b border-neutral-900">
          {/* Brand Info & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-sm text-neutral-300 leading-relaxed max-w-sm">
              {COMPANY_CONFIG.tagline}
            </p>

            <p className="text-xs text-neutral-500 leading-relaxed max-w-sm">
              Architectural material solutions partner for premium prefabricated resorts, luxury wooden cottages, and modern construction developers across India.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3 text-neutral-400">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-neutral-900 hover:bg-[#EB3B2C] hover:text-white border border-neutral-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-neutral-900 hover:bg-[#EB3B2C] hover:text-white border border-neutral-800 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-neutral-900 hover:bg-[#EB3B2C] hover:text-white border border-neutral-800 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-neutral-900 hover:bg-[#25D366] hover:text-white border border-neutral-800 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Column 1: NAVIGATION */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About RAVGROUP
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#prefab" className="hover:text-white transition-colors">
                  Prefab &amp; Wooden
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#why-ravgroup" className="hover:text-white transition-colors">
                  Why RAVGROUP
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2: ARCHITECTURAL DIVISIONS */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase">
              SOLUTIONS
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#prefab" className="hover:text-white transition-colors">
                  01. Prefab &amp; Wooden Resorts
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  02. Architectural Roofing
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  03. Acoustic &amp; Timber Ceilings
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  04. Exterior &amp; Interior Cladding
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  05. Engineered Flooring
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  06. Structural Ply &amp; Boards
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: CONTACT DETAILS */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase">
              CONTACT DETAILS
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#F49A3A] shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY_CONFIG.phone}`} className="hover:text-white transition-colors tabular-nums">
                  {COMPANY_CONFIG.phoneFormatted}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#EB3B2C] shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_CONFIG.email}`} className="hover:text-white transition-colors">
                  {COMPANY_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#F49A3A] shrink-0 mt-0.5" />
                <span>Cement Town, Dehradun - 248001, Uttarakhand, India</span>
              </li>
              <li className="pt-2">
                <div className="p-3 bg-neutral-900/80 border border-neutral-800 text-[11px] text-neutral-400">
                  <span className="text-white font-bold block mb-0.5">Rapid Turnaround Desk</span>
                  Direct engineer allocation within 4 business hours.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_CONFIG.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-neutral-300 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-neutral-300 transition-colors"
            >
              Terms of Service
            </button>
            <a
              href="#home"
              className="text-[#F49A3A] hover:underline"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>

      {/* Legal Information Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#141414] text-white border border-neutral-700 max-w-lg w-full p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <h3 className="text-lg font-bold font-['Plus_Jakarta_Sans']">
                {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h3>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1 text-neutral-400 hover:text-white"
                aria-label="Close Legal Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs text-neutral-300 leading-relaxed space-y-2 max-h-[60vh] overflow-y-auto">
              <p>
                <strong>{COMPANY_CONFIG.name}</strong> operates with complete transparency and confidentiality regarding all architectural drawings, bills of quantities (BOQs), and proprietary client project specifications.
              </p>
              <p>
                Inquiry contact details collected via this portal are strictly utilized to respond to material specifications and provide project quotes. No information is sold or transferred to unauthorized third parties.
              </p>
              <p>
                All structural prefab components, roofing profiles, and calibrated ply are supplied in adherence with applicable Bureau of Indian Standards (BIS) and ASTM classifications.
              </p>
            </div>
            <div className="pt-2 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold uppercase transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
