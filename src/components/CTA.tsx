import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyData';

interface CTAProps {
  onOpenQuote: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative py-20 sm:py-24 brand-gradient text-white overflow-hidden shadow-inner">
      {/* Subtle Geometric Wireframe Grid Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ctaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ctaGrid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-black/20 backdrop-blur-xs rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest">
          <span>RAPID ARCHITECTURAL SUPPORT</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase font-['Plus_Jakarta_Sans'] text-white">
          PLANNING YOUR NEXT PROJECT?
        </h2>

        <p className="text-base sm:text-xl text-white/95 max-w-2xl mx-auto font-medium leading-relaxed">
          Tell us what you&apos;re building. Our team will help you find the right material and construction solutions.
        </p>

        {/* CTA Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#111111] hover:bg-black text-white text-sm font-bold tracking-wider uppercase rounded shadow-2xl transition-all active:scale-[0.98] cursor-pointer"
          >
            <span>GET A PROJECT QUOTE</span>
            <ArrowRight className="w-4 h-4 text-[#F49A3A]" />
          </button>

          <a
            href={`tel:${COMPANY_CONFIG.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 hover:bg-white/25 border border-white/40 text-white text-sm font-bold tracking-wider uppercase rounded transition-all backdrop-blur-xs"
          >
            <PhoneCall className="w-4 h-4" />
            <span>TALK TO AN EXPERT</span>
          </a>
        </div>
      </div>
    </section>
  );
};
