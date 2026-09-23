import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp, ShieldCheck, Building2, HardHat } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyData';
import { ArchitecturalImage } from './ArchitecturalImage';

interface AboutProps {
  onOpenQuote: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenQuote }) => {
  const [showExtendedDetails, setShowExtendedDetails] = useState(false);

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0B0B0B] text-white border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetrical Editorial Photography Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] overflow-hidden bg-black border border-neutral-800 shadow-2xl">
              <ArchitecturalImage
                type="about-facade"
                alt="RAVGROUP modern architectural wood louver facade and construction solutions"
                className="w-full h-full object-cover"
              />
              {/* Architectural Overlay Tag */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/85 backdrop-blur-xs px-3.5 py-1.5 border border-neutral-700/80">
                <span className="w-2 h-2 rounded-full bg-[#EB3B2C]" />
                <span className="text-[11px] font-mono font-bold tracking-wider text-neutral-200 uppercase">
                  ARCHITECTURAL GRADE
                </span>
              </div>
            </div>

            {/* Overlapping Precision Floating Plate */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 z-20 bg-[#141414] text-white p-5 sm:p-6 border-l-4 border-[#EB3B2C] border border-neutral-800 shadow-2xl max-w-[260px] sm:max-w-[300px]">
              <div className="flex items-center gap-3.5">
                <Building2 className="w-8 h-8 text-[#F49A3A] shrink-0" />
                <div>
                  <div className="text-xl font-black text-white tracking-tight font-['Plus_Jakarta_Sans']">
                    Turnkey
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    Integrated supply for modern hospitality &amp; architecture
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Minimal Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#EB3B2C]" />
              <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#EB3B2C] uppercase">
                BUILT FOR MODERN SPACES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.08] font-['Plus_Jakarta_Sans']">
              From Structure to Finish, We&apos;ve Got You Covered.
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              <strong className="font-semibold text-white">{COMPANY_CONFIG.name}</strong> provides comprehensive solutions for construction, hospitality and architectural projects. From prefab and wooden structures to roofing, ceiling, cladding, flooring, ply and boards, our solutions simplify material sourcing and help bring ambitious projects to life with efficiency and certified quality.
            </p>

            {/* Minimal Editorial Checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EB3B2C] mt-2 shrink-0" />
                <span>Single-point vendor accountability</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EB3B2C] mt-2 shrink-0" />
                <span>High-altitude &amp; extreme climate ratings</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F49A3A] mt-2 shrink-0" />
                <span>Certified timber &amp; composite grades</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F49A3A] mt-2 shrink-0" />
                <span>Dedicated on-site technical support</span>
              </div>
            </div>

            {/* Action Controls */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setShowExtendedDetails(!showExtendedDetails)}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold tracking-wider uppercase text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 transition-colors cursor-pointer"
              >
                <span>KNOW MORE ABOUT RAVGROUP</span>
                {showExtendedDetails ? (
                  <ChevronUp className="w-4 h-4 text-[#F49A3A]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#F49A3A]" />
                )}
              </button>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#F49A3A] hover:text-[#EB3B2C] uppercase transition-colors"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Expandable Company Specification Dossier */}
            {showExtendedDetails && (
              <div className="mt-6 p-6 bg-[#141414] border border-neutral-800 text-xs sm:text-sm text-neutral-300 space-y-4 transition-all duration-300">
                <h4 className="text-base font-bold text-white font-['Plus_Jakarta_Sans'] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#EB3B2C]" />
                  Enterprise Capabilities &amp; Core Standards
                </h4>
                <p className="leading-relaxed text-neutral-400">
                  At RAVGROUP, we bridge the gap between design aspiration and construction reality. We maintain strict compliance with Bureau of Indian Standards (BIS), ASTM international fire and acoustic classifications, and sustainable timber procurement protocols.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="p-3 bg-[#0C0C0C] border border-neutral-800">
                    <span className="font-bold text-white block mb-1">Modular Prefab</span>
                    Precision factory timber joinery reducing on-site erection time by 60%.
                  </div>
                  <div className="p-3 bg-[#0C0C0C] border border-neutral-800">
                    <span className="font-bold text-white block mb-1">Turnkey Supply</span>
                    Synchronized delivery matching civil construction schedules.
                  </div>
                  <div className="p-3 bg-[#0C0C0C] border border-neutral-800">
                    <span className="font-bold text-white block mb-1">Architect Support</span>
                    Full BIM/CAD material specifications and sample kits provided.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
