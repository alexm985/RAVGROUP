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
      className="relative min-h-screen flex flex-col justify-between bg-[#0B0B0B] text-white overflow-hidden pt-28 lg:pt-32"
    >
      {/* Cinematic Architectural Background Image with Subtle Motion */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-full h-full transform scale-105 animate-[pulse_10s_ease-in-out_infinite] motion-reduce:transform-none">
          <ArchitecturalImage
            type="hero-resort"
            priority={true}
            alt="Luxury modern wooden prefab resort and cottage in serene alpine pine forest landscape"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Dark Cinematic Vignette & Deep Scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/80" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12 sm:py-16">
        <div className="max-w-4xl space-y-7">
          {/* Eyebrow / Kicker */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#141414]/90 border border-neutral-700/80 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#EB3B2C] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.24em] text-[#F49A3A] uppercase">
              ARCHITECTURAL PREFAB &amp; MATERIAL SYSTEMS
            </span>
          </div>

          {/* Large Editorial Headline */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[1.02] font-['Plus_Jakarta_Sans']">
              BUILD BETTER.
              <br />
              BUILD SMARTER.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB3B2C] via-[#F49A3A] to-white">
                WITH RAVGROUP.
              </span>
            </h1>
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl md:text-2xl text-neutral-200 font-medium tracking-wide max-w-2xl font-['Plus_Jakarta_Sans']">
            Prefab &amp; Wooden Resorts/Cottages + Complete Building Material Solutions.
          </p>

          <p className="text-xs sm:text-sm md:text-base text-neutral-400 max-w-2xl leading-relaxed">
            From engineered factory-built prefab timber structures to architectural roofing, cladding, ceilings, flooring, ply and boards — RAVGROUP powers modern hospitality, residential and commercial landmarks across India.
          </p>

          {/* Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-bold tracking-wider text-white uppercase bg-gradient-to-r from-[#EB3B2C] to-[#F49A3A] hover:brightness-110 active:scale-[0.98] transition-all rounded-none shadow-2xl shadow-red-950/60 cursor-pointer"
            >
              <span>GET A PROJECT QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#solutions"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider text-neutral-200 hover:text-white uppercase bg-neutral-900/80 hover:bg-neutral-800/90 border border-neutral-700/80 hover:border-neutral-500 transition-all rounded-none backdrop-blur-xs"
            >
              <span>EXPLORE SOLUTIONS</span>
            </a>
          </div>
        </div>
      </div>

      {/* Small Bottom Section Ticker Requested: PREFAB • WOODEN • ROOFING • CLADDING • FLOORING */}
      <div className="relative z-10 border-t border-white/10 bg-black/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-mono font-bold tracking-[0.2em] text-neutral-300 text-[11px] sm:text-xs">
            <span className="text-[#EB3B2C] font-black">PREFAB</span>
            <span className="text-neutral-600">•</span>
            <span className="text-white">WOODEN</span>
            <span className="text-neutral-600">•</span>
            <span className="text-[#F49A3A]">ROOFING</span>
            <span className="text-neutral-600">•</span>
            <span className="text-white">CLADDING</span>
            <span className="text-neutral-600">•</span>
            <span className="text-[#EB3B2C]">FLOORING</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-neutral-400 font-medium">
            <span className="hidden md:inline text-neutral-500">
              CEMENT TOWN, DEHRADUN • PAN-INDIA DELIVERY
            </span>
            <a
              href="#about"
              className="text-[#F49A3A] hover:text-white uppercase tracking-wider font-bold transition-colors inline-flex items-center gap-1"
            >
              <span>DISCOVER ARCHITECTURE</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
