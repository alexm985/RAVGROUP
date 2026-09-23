import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyData';

interface CTAProps {
  onOpenQuote: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative py-24 sm:py-32 brand-gradient text-white overflow-hidden shadow-2xl">
      {/* Subtle Architectural Background Texture & Blueprint Grid */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="archBlueprintGrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.8" />
              <circle cx="24" cy="24" r="1.5" fill="white" fillOpacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#archBlueprintGrid)" />
        </svg>
      </div>

      {/* Subtle Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-black/25 backdrop-blur-xs border border-white/30 text-[11px] font-mono font-bold uppercase tracking-widest text-white">
          <span>CONSULTATION &amp; SPECIFICATION TAKEOFF</span>
        </div>

        {/* Exact Headline Requested: PLANNING YOUR NEXT PROJECT? */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase font-['Plus_Jakarta_Sans'] text-white leading-[1.04]">
          PLANNING YOUR NEXT PROJECT?
        </h2>

        {/* Exact Text Requested */}
        <p className="text-base sm:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto font-medium leading-relaxed font-['Plus_Jakarta_Sans']">
          From prefab structures to roofing, cladding, flooring and boards — get complete project solutions from RAVGROUP.
        </p>

        {/* Exact Buttons Requested:
            GET A PROJECT QUOTE
            TALK TO AN EXPERT */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#111111] hover:bg-black text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-none shadow-2xl transition-all active:scale-[0.98] cursor-pointer"
          >
            <span>GET A PROJECT QUOTE</span>
            <ArrowRight className="w-4 h-4 text-[#F49A3A]" />
          </button>

          <a
            href={`tel:${COMPANY_CONFIG.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/20 hover:bg-white/30 border border-white/50 text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-none transition-all backdrop-blur-xs"
          >
            <PhoneCall className="w-4 h-4" />
            <span>TALK TO AN EXPERT</span>
          </a>
        </div>
      </div>
    </section>
  );
};
