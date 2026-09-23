import React from 'react';
import { ArrowRight, Trees, Compass, CheckCircle2, Shield, Sparkles } from 'lucide-react';
import { ArchitecturalImage } from './ArchitecturalImage';
import { PREFAB_HIGHLIGHTS } from '../data/companyData';

interface PrefabShowcaseProps {
  onOpenQuote: (subject?: string) => void;
}

export const PrefabShowcase: React.FC<PrefabShowcaseProps> = ({ onOpenQuote }) => {
  return (
    <section id="prefab" className="relative py-28 sm:py-36 bg-[#0B0B0B] text-white overflow-hidden">
      {/* Huge Full-Width Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <ArchitecturalImage
          type="prefab-showcase"
          alt="Luxury modern wooden prefab cottage resort cabin nestled in pine mountain landscape with warm architectural interior illumination"
          className="w-full h-full object-cover"
        />
        {/* Deep Cinematic Architectural Scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-7">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/80 border border-neutral-700/80 rounded-none">
            <span className="w-2 h-2 rounded-full bg-[#EB3B2C]" />
            <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#F49A3A] uppercase">
              PREFAB &amp; WOODEN SOLUTIONS
            </span>
          </div>

          {/* Exact Headline Requested:
              YOUR SPACE.
              BUILT DIFFERENT. */}
          <div className="space-y-1">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.02] font-['Plus_Jakarta_Sans']">
              YOUR SPACE.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB3B2C] via-[#F49A3A] to-white">
                BUILT DIFFERENT.
              </span>
            </h2>
          </div>

          {/* Exact Supporting Text Requested */}
          <p className="text-base sm:text-xl text-neutral-200 leading-relaxed font-['Plus_Jakarta_Sans'] font-medium">
            Explore premium prefab and wooden solutions for resorts, cottages, cabins and hospitality projects.
          </p>

          <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl leading-relaxed">
            Engineered factory off-site fabrication ensures rapid assembly, supreme acoustic and thermal insulation, and minimal ecological footprint in delicate mountain or coastal terrains.
          </p>

          {/* Exact CTA Requested: DISCUSS YOUR PROJECT */}
          <div className="pt-3">
            <button
              onClick={() => onOpenQuote('Prefab & Wooden Resort Development')}
              className="inline-flex items-center gap-3 px-8 py-4 text-xs sm:text-sm font-bold tracking-wider text-white uppercase bg-gradient-to-r from-[#EB3B2C] to-[#F49A3A] hover:brightness-110 active:scale-[0.98] transition-all rounded-none shadow-2xl cursor-pointer"
            >
              <span>DISCUSS YOUR PROJECT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Minimal Editorial Highlight Modules (Not generic rounded boxes) */}
        <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PREFAB_HIGHLIGHTS.map((item, idx) => (
            <div
              key={item.title}
              className="space-y-2 group"
            >
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#EB3B2C]">
                <span>0{idx + 1}</span>
                <div className="h-px w-6 bg-[#EB3B2C]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#F49A3A] transition-colors font-['Plus_Jakarta_Sans']">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
