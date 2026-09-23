import React from 'react';
import { SOLUTIONS_LIST, SolutionItem } from '../data/companyData';
import { SolutionCard } from './SolutionCard';

interface SolutionsProps {
  onSelectSolution: (solution: SolutionItem) => void;
  onOpenQuote: (subject?: string) => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onSelectSolution, onOpenQuote }) => {
  return (
    <section id="solutions" className="py-20 sm:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[3px] bg-[#EB3B2C]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#EB3B2C] uppercase font-['Plus_Jakarta_Sans']">
                OUR SOLUTIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171717] font-['Plus_Jakarta_Sans']">
              Everything You Need to Build & Finish Your Space.
            </h2>
          </div>

          <div>
            <button
              onClick={() => onOpenQuote('Complete Architectural Material Package')}
              className="px-5 py-3 text-xs font-bold tracking-wider text-white uppercase bg-[#111111] hover:bg-[#1C1C1C] rounded transition-colors"
            >
              Request Consolidated BOQ
            </button>
          </div>
        </div>

        {/* 6 Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
