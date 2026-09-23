import React from 'react';
import { SOLUTIONS_LIST, SolutionItem } from '../data/companyData';
import { SolutionCard } from './SolutionCard';
import { ArrowRight, Sliders, Layers } from 'lucide-react';

interface SolutionsProps {
  onSelectSolution: (solution: SolutionItem) => void;
  onOpenQuote: (subject?: string) => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onSelectSolution, onOpenQuote }) => {
  return (
    <section id="solutions" className="py-24 sm:py-32 bg-[#0E0E0E] text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-18">
          <div className="max-w-2xl space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#EB3B2C]" />
              <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#EB3B2C] uppercase">
                ENGINEERED MATERIAL DIVISIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-['Plus_Jakarta_Sans'] leading-[1.08]">
              Comprehensive Solutions for Modern Architecture.
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed max-w-xl">
              From structural prefabricated wooden cottages to turnkey architectural envelopes, ceilings, and engineered boards — precision-calibrated for high performance.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenQuote('Consolidated Architectural BOQ')}
              className="px-6 py-3.5 text-xs font-bold tracking-wider text-white uppercase bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 hover:border-neutral-500 rounded-none transition-colors cursor-pointer"
            >
              REQUEST CONSOLIDATED BOQ
            </button>
          </div>
        </div>

        {/* 6 Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SOLUTIONS_LIST.map((solution) => (
            <SolutionCard
              key={solution.id}
              solution={solution}
              onClick={onSelectSolution}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
