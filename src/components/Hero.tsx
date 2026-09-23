import React from 'react';
import { ArrowRight, ChevronDown, Layers, ShieldCheck, Compass } from 'lucide-react';
import { ArchitecturalImage } from './ArchitecturalImage';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center justify-center bg-[#111111] overflow-hidden pt-20"
    >
      {/* Background Architectural Vector Scene */}
      <div className="absolute inset-0 z-0">
        <ArchitecturalImage
          type="hero-resort"
          priority={true}
          alt="Cinematic luxury wooden prefab resort cottage surrounded by pine forest in mountains with warm ambient lighting"
          className="w-full h-full object-cover scale-100 transition-transform duration-1000 ease-out"
        />
        {/* Dark Architectural Scrim for Flawless Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/85 to-[#111111]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]/50" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xs bg-[#1C1C1C]/80 border border-neutral-700/80 backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-[#EB3B2C] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#F49A3A] uppercase font-['Plus_Jakarta_Sans']">
              PREFAB • WOODEN • ARCHITECTURAL SOLUTIONS
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-1 sm:space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.06] font-['Plus_Jakarta_Sans']">
              <span>BUILD BETTER.</span>
              <br />
              <span className="text-neutral-100">BUILD SMARTER.</span>
              <br />
              <span className="brand-gradient-text">BUILD WITH RAVGROUP.</span>
            </h1>
          </div>

          {/* Alternative Supporting Line */}
          <p className="text-base sm:text-lg font-semibold text-[#F49A3A] tracking-wide font-['Plus_Jakarta_Sans']">
            Prefab & Wooden Resorts/Cottages + Complete Building Material Solutions
          </p>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed font-normal">
            From prefab structures to roofing, ceiling, cladding, flooring, ply and boards — RAVGROUP brings complete material solutions for modern construction and architectural projects.
          </p>

          {/* CTA Group */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-3 px-7 py-4 text-sm font-bold tracking-wider text-white uppercase bg-[#EB3B2C] hover:bg-[#d63426] active:scale-[0.98] transition-all rounded shadow-lg shadow-red-950/40 cursor-pointer"
            >
              <span>GET A PROJECT QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#solutions"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold tracking-wide text-neutral-200 hover:text-white uppercase bg-neutral-900/80 hover:bg-neutral-800/90 border border-neutral-700/80 transition-all rounded"
            >
              <span>EXPLORE SOLUTIONS</span>
            </a>
          </div>

          {/* Trust Statement */}
          <div className="pt-4 flex items-center gap-3 text-xs tracking-[0.2em] font-bold text-neutral-400 uppercase">
            <div className="h-px w-8 bg-[#EB3B2C]" />
            <span>ONE PARTNER • MULTIPLE SOLUTIONS</span>
          </div>
        </div>

        {/* Quick Architectural Metrics Strip (Quiet & Grounded) */}
        <div className="mt-14 pt-8 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl text-neutral-300">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums font-['Plus_Jakarta_Sans']">
              100%
            </div>
            <div className="text-xs text-neutral-400 mt-0.5">End-to-End Material Sourcing</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#F49A3A] tabular-nums font-['Plus_Jakarta_Sans']">
              6+
            </div>
            <div className="text-xs text-neutral-400 mt-0.5">Architectural Divisions</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums font-['Plus_Jakarta_Sans']">
              Pan-India
            </div>
            <div className="text-xs text-neutral-400 mt-0.5">Project Delivery Network</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#EB3B2C] tabular-nums font-['Plus_Jakarta_Sans']">
              IS & Global
            </div>
            <div className="text-xs text-neutral-400 mt-0.5">Code Tested Standards</div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <a
        href="#trust-strip"
        className="hidden lg:flex absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex-col items-center text-[10px] tracking-widest text-neutral-500 hover:text-[#F49A3A] transition-colors uppercase"
        aria-label="Scroll down to trust strip"
      >
        <span className="mb-1">Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-neutral-400" />
      </a>
    </section>
  );
};
