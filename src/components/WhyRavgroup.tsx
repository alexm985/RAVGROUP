import React from 'react';
import { WHY_RAVGROUP_POINTS } from '../data/companyData';
import { ArchitecturalImage } from './ArchitecturalImage';
import { ArrowRight, Check } from 'lucide-react';

interface WhyRavgroupProps {
  onOpenQuote: () => void;
}

export const WhyRavgroup: React.FC<WhyRavgroupProps> = ({ onOpenQuote }) => {
  return (
    <section id="why-ravgroup" className="py-24 sm:py-32 bg-[#111111] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & 5 Numbered Feature Points */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[3px] bg-[#EB3B2C]" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#EB3B2C] uppercase font-['Plus_Jakarta_Sans']">
                  WHY RAVGROUP?
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-['Plus_Jakarta_Sans'] leading-[1.08]">
                One Partner.
                <br />
                <span className="brand-gradient-text">Multiple Solutions.</span>
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
                By uniting precision manufacturing, structural timber engineering, and high-spec building materials under one roof, RAVGROUP strips away the friction of traditional construction.
              </p>
            </div>

            {/* 5 Feature Points */}
            <div className="space-y-6">
              {WHY_RAVGROUP_POINTS.map((point) => (
                <div
                  key={point.number}
                  className="p-5 sm:p-6 rounded bg-[#1A1A1A] border border-neutral-800/80 hover:border-[#EB3B2C]/50 transition-all duration-200 group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xl sm:text-2xl font-black font-mono text-[#F49A3A] group-hover:text-[#EB3B2C] transition-colors tabular-nums shrink-0">
                      {point.number}
                    </span>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-white tracking-tight font-['Plus_Jakarta_Sans']">
                          {point.title}
                        </h3>
                      </div>
                      <p className="text-xs font-semibold text-[#F49A3A] tracking-wider uppercase">
                        {point.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed pt-0.5">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-3 px-7 py-4 text-xs sm:text-sm font-bold tracking-wider text-white uppercase bg-[#EB3B2C] hover:bg-[#d63426] rounded transition-all shadow-lg"
              >
                <span>PARTNER WITH RAVGROUP</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Large Architectural Construction Image */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded overflow-hidden shadow-2xl border border-neutral-800 bg-[#161616]">
              <ArchitecturalImage
                type="construction"
                alt="RAVGROUP engineering precision and structural framework solutions"
                className="w-full h-full object-cover"
              />

              {/* Architectural Overlay Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#111111]/90 backdrop-blur-md rounded border border-neutral-700/60 text-xs text-neutral-300 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white uppercase tracking-wider font-['Plus_Jakarta_Sans']">
                    ENGINEERED RELIABILITY
                  </span>
                  <span className="text-[#F49A3A] font-mono text-[11px]">ISO / BIS</span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-normal">
                  Every structural beam, cladding panel, and calibrated board is verified against stringent moisture, seismic, and thermal tolerances before departure to your job site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
