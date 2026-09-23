import React from 'react';
import { ArrowRight, Home, Trees, Compass, Sparkles } from 'lucide-react';
import { ArchitecturalImage } from './ArchitecturalImage';
import { PREFAB_HIGHLIGHTS } from '../data/companyData';

interface PrefabShowcaseProps {
  onOpenQuote: (subject?: string) => void;
}

export const PrefabShowcase: React.FC<PrefabShowcaseProps> = ({ onOpenQuote }) => {
  return (
    <section id="prefab" className="relative py-24 sm:py-32 bg-[#111111] overflow-hidden">
      {/* Background Architectural Vector */}
      <div className="absolute inset-0 z-0">
        <ArchitecturalImage
          type="prefab-showcase"
          alt="Luxury A-frame wooden resort cabin in alpine landscape"
          className="w-full h-full object-cover"
        />
        {/* Scrim Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/85 to-[#111111]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          {/* Section Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C1C1C]/90 border border-neutral-700/80 rounded-xs">
            <span className="w-2 h-2 rounded-full bg-[#EB3B2C]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#F49A3A] uppercase font-['Plus_Jakarta_Sans']">
              PREFAB & WOODEN SOLUTIONS
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight font-['Plus_Jakarta_Sans']">
            Your Dream Resort.
            <br />
            <span className="brand-gradient-text">Built Smarter.</span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
            Create premium cottages, cabins, resorts and hospitality spaces with modern prefab and wooden construction solutions. Factory-precision manufacturing meets natural warmth and rapid erection.
          </p>

          {/* Action Button */}
          <div className="pt-2">
            <button
              onClick={() => onOpenQuote('Prefab & Wooden Resort Development')}
              className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-wider text-white uppercase bg-[#EB3B2C] hover:bg-[#d63426] active:scale-[0.98] transition-all rounded shadow-xl cursor-pointer"
            >
              <span>DISCUSS YOUR PROJECT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Floating Information Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PREFAB_HIGHLIGHTS.map((item, idx) => (
            <div
              key={item.title}
              className="p-6 rounded bg-[#1A1A1A]/85 backdrop-blur-md border border-neutral-800 hover:border-[#F49A3A]/60 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-[#EB3B2C]">
                  0{idx + 1}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#F49A3A]" />
              </div>
              <h3 className="text-base font-extrabold text-white group-hover:text-[#F49A3A] transition-colors tracking-wide font-['Plus_Jakarta_Sans'] mb-2">
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
