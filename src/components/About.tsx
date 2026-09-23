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
    <section id="about" className="py-20 sm:py-28 bg-[#F8F8F6] text-[#171717] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with architectural accents */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded overflow-hidden shadow-2xl bg-neutral-900 border border-neutral-200">
              <ArchitecturalImage
                type="about-facade"
                alt="RAVGROUP modern architectural wood louver facade and construction solutions"
                className="w-full h-full object-cover"
              />
              {/* Architectural Framing Detail */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-[#111111]/90 backdrop-blur-xs px-3.5 py-1.5 rounded border border-neutral-700/60">
                <span className="w-2 h-2 rounded-full bg-[#EB3B2C]" />
                <span className="text-[11px] font-bold tracking-wider text-neutral-200 uppercase font-['Plus_Jakarta_Sans']">
                  ARCHITECTURAL GRADE
                </span>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 z-20 bg-[#111111] text-white p-5 sm:p-6 rounded border-l-4 border-[#EB3B2C] shadow-2xl max-w-[260px] sm:max-w-[290px]">
              <div className="flex items-center gap-3">
                <Building2 className="w-8 h-8 text-[#F49A3A] shrink-0" />
                <div>
                  <div className="text-xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
                    Turnkey
                  </div>
                  <div className="text-xs text-neutral-400">
                    Integrated supply for modern hospitality & architecture
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[3px] bg-[#EB3B2C]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#EB3B2C] uppercase font-['Plus_Jakarta_Sans']">
                BUILT FOR MODERN SPACES.
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171717] leading-[1.12] font-['Plus_Jakarta_Sans']">
              From Structure to Finish, We&apos;ve Got You Covered.
            </h2>

            <p className="text-base text-neutral-700 leading-relaxed">
              <strong className="font-semibold text-[#171717]">{COMPANY_CONFIG.name}</strong> provides comprehensive solutions for construction, hospitality and architectural projects. From prefab and wooden structures to roofing, ceiling, cladding, flooring, ply and boards, our solutions are designed to simplify material sourcing and help bring projects to life with efficiency and quality.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm text-neutral-800">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#EB3B2C] shrink-0 mt-0.5" />
                <span>Single-point vendor accountability</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#EB3B2C] shrink-0 mt-0.5" />
                <span>High-altitude & extreme climate ratings</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F49A3A] shrink-0 mt-0.5" />
                <span>Certified timber & composite grades</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F49A3A] shrink-0 mt-0.5" />
                <span>Dedicated on-site technical support</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setShowExtendedDetails(!showExtendedDetails)}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold tracking-wider uppercase text-white bg-[#111111] hover:bg-[#1C1C1C] transition-colors rounded cursor-pointer"
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
                className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#EB3B2C] hover:text-[#b5281b] uppercase transition-colors"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Expandable Company Specification Dossier */}
            {showExtendedDetails && (
              <div className="mt-6 p-6 bg-white border border-neutral-200 rounded shadow-md space-y-4 text-sm text-neutral-700 transition-all duration-300">
                <h4 className="text-base font-bold text-[#111111] font-['Plus_Jakarta_Sans'] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#EB3B2C]" />
                  Enterprise Capabilities & Core Standards
                </h4>
                <p className="leading-relaxed text-xs sm:text-sm">
                  At RAVGROUP, we bridge the gap between design aspiration and construction reality. We maintain strict compliance with Bureau of Indian Standards (BIS), ASTM international fire and acoustic classifications, and FSC-certified sustainable timber procurement protocols.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="p-3 bg-[#F8F8F6] rounded border border-neutral-200">
                    <span className="font-bold text-[#111111] block mb-1">Modular Prefab</span>
                    Precision factory timber joinery reducing on-site erection time by 60%.
                  </div>
                  <div className="p-3 bg-[#F8F8F6] rounded border border-neutral-200">
                    <span className="font-bold text-[#111111] block mb-1">Turnkey Supply</span>
                    Synchronized delivery matching civil construction schedules.
                  </div>
                  <div className="p-3 bg-[#F8F8F6] rounded border border-neutral-200">
                    <span className="font-bold text-[#111111] block mb-1">Architect Support</span>
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
