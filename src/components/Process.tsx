import React from 'react';
import { PROCESS_STEPS } from '../data/companyData';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface ProcessProps {
  onOpenQuote: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-3 justify-center">
            <div className="w-8 h-[3px] bg-[#EB3B2C]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#EB3B2C] uppercase font-['Plus_Jakarta_Sans']">
              HOW WE WORK
            </span>
            <div className="w-8 h-[3px] bg-[#EB3B2C]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171717] font-['Plus_Jakarta_Sans']">
            From Requirement to Reality.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            A structured, friction-free engagement engineered to move your architectural vision rapidly from blueprint to site execution.
          </p>
        </div>

        {/* 4-Step Process Layout */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-neutral-200 z-0">
            <div className="h-full w-full bg-gradient-to-r from-[#EB3B2C] via-[#F49A3A] to-[#EB3B2C] opacity-40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="relative bg-[#F8F8F6] p-6 sm:p-7 rounded border border-neutral-200 hover:border-[#EB3B2C] transition-all duration-200 flex flex-col justify-between group"
              >
                {/* Step Number Circle */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded bg-white border border-neutral-200 group-hover:border-[#EB3B2C] group-hover:bg-[#EB3B2C] text-[#171717] group-hover:text-white flex items-center justify-center font-mono font-bold text-base transition-colors shadow-xs">
                    {step.number}
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-neutral-400 group-hover:text-[#F49A3A] uppercase font-['Plus_Jakarta_Sans']">
                    PHASE 0{idx + 1}
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h3 className="text-base font-bold tracking-tight text-[#171717] font-['Plus_Jakarta_Sans']">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center gap-1 text-[11px] font-semibold text-[#EB3B2C]">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Streamlined milestone</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Prompt */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-white uppercase bg-[#EB3B2C] hover:bg-[#d63426] px-8 py-3.5 rounded transition-colors shadow-md"
          >
            <span>START YOUR STEP 01 NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
