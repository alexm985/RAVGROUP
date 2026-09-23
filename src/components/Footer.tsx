import React, { useState } from 'react';
import { COMPANY_CONFIG } from '../data/companyData';
import { Phone, Mail, MapPin, MessageCircle, ArrowUp, X } from 'lucide-react';

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
    <footer className="bg-[#0C0C0C] text-neutral-400 border-t border-neutral-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-neutral-800/80">
          {/* Brand Info & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-6 bg-[#EB3B2C] rounded-xs" />
                <span className="text-2xl font-black tracking-tight text-white font-['Plus_Jakarta_Sans']">
                  RAVGROUP
                </span>
              </div>
              <span className="text-[10px] tracking-[0.22em] font-semibold text-neutral-400 uppercase pl-4.5 -mt-0.5">
                {COMPANY_CONFIG.countryDivision}
              </span>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              {COMPANY_CONFIG.tagline}
            </p>

            <p className="text-xs text-neutral-500 leading-relaxed">
              India&apos;s trusted architectural material solutions partner for premium resorts, luxury wooden cottages, and modern construction developers.
            </p>
          </div>

          {/* Column 1: COMPANY */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-white uppercase font-['Plus_Jakarta_Sans']">
              COMPANY
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Projects
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
              <li>
                <button
                  onClick={() => onOpenQuote('Consultation from Footer')}
                  className="text-[#EB3B2C] hover:text-[#f25244] font-semibold transition-colors"
                >
                  Get a Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: SOLUTIONS */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-white uppercase font-['Plus_Jakarta_Sans']">
              SOLUTIONS
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#prefab" className="hover:text-white transition-colors">
                  Prefab &amp; Wooden
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Roofing
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Ceiling
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Cladding
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Flooring
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Ply &amp; Boards
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: CONTACT */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-white uppercase font-['Plus_Jakarta_Sans']">
              CONTACT
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#EB3B2C] shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY_CONFIG.phone}`} className="hover:text-white transition-colors tabular-nums">
                  {COMPANY_CONFIG.phoneFormatted}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#F49A3A] shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_CONFIG.email}`} className="hover:text-white transition-colors">
                  {COMPANY_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                <span className="leading-normal">{COMPANY_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-2.5 pt-1">
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline font-medium"
                >
                  WhatsApp Quick Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            &copy; 2026 {COMPANY_CONFIG.name}. All Rights Reserved.
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
              Terms &amp; Conditions
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors pl-2"
              aria-label="Scroll to top of page"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#EB3B2C]" />
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy / Terms Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
          <div className="bg-[#1C1C1C] text-neutral-200 rounded max-w-xl w-full max-h-[80vh] overflow-y-auto p-6 sm:p-8 border border-neutral-700 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-700 pb-3">
              <h3 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans']">
                {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1 text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs space-y-3 leading-relaxed text-neutral-300">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    {COMPANY_CONFIG.name} takes data confidentiality seriously. Information shared through this landing page (including architectural drawings, project scopes, names, phone numbers, and emails) is utilized exclusively for generating accurate material solutions, technical consultation, and dispatching quotations.
                  </p>
                  <p>
                    We never sell or distribute your project inquiries to unauthorized third parties. All files and inquiries are encrypted in transit.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    All architectural estimates, BOQ interpretations, and technical specifications provided by {COMPANY_CONFIG.name} are subject to final site inspection, structural engineering verification by the client&apos;s licensed structural engineer, and formal commercial agreement.
                  </p>
                  <p>
                    Manufacturing warranties are provided in accordance with specific product categories (e.g. BIS 710 marine plywood certification, manufacturer roofing warranties, and timber preservation compliance).
                  </p>
                </>
              )}
            </div>

            <div className="pt-4 border-t border-neutral-700 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 bg-[#EB3B2C] text-white text-xs font-bold rounded uppercase"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
