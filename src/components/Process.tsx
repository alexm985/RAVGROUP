import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProcessProps {
  onOpenQuote: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenQuote }) => {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      subtitle: 'Requirement & Site Study',
      description:
        'Share your architectural blueprints, terrain conditions, and functional aesthetic goals.',
    },
    {
      num: '02',
      title: 'CONSULT',
      subtitle: 'Material & Code Engineering',
      description:
        'Technical consultation on timber species, wind/snow loads, acoustic ratings, and fire classifications.',
    },
    {
      num: '03',
      title: 'PLAN',
      subtitle: 'BOQ & Off-Site Fabrication',
      description:
        'Detailed line-item pricing, CAD manufacturing drawings, and synchronized factory fabrication.',
    },
    {
      num: '04',
      title: 'BUILD',
      subtitle: 'Dispatch & Site Assembly',
      description:
        'Precision components shipped to site with installation guides and on-ground technical supervision.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#111111] text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20 space-y-3.5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-[#EB3B2C]" />
            <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#EB3B2C] uppercase">
              PROJECT EXECUTION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-['Plus_Jakarta_Sans'] leading-[1.08]">
            From Blueprint to Reality.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed">
            A linear, high-precision timeline designed to streamline engineering, eliminate supply-chain friction, and deliver your project on schedule.
          </p>
        </div>

        {/* Modern Timeline (NO traditional boxed cards) */}
        <div className="relative">
          {/* Hairline Timeline Track (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-neutral-800 z-0">
            <div className="h-full w-full bg-gradient-to-r from-[#EB3B2C] via-[#F49A3A] to-[#EB3B2C] opacity-40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={step.num} className="space-y-5 group">
                {/* Node & Gigantic Number */}
                <div className="flex items-center justify-between lg:block">
                  <div className="hidden lg:flex w-5 h-5 bg-[#111111] border-2 border-[#EB3B2C] rounded-full items-center justify-center mb-6">
                    <span className="w-1.5 h-1.5 bg-[#F49A3A] rounded-full" />
                  </div>
                  <span className="font-mono text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-700 group-hover:text-[#EB3B2C] transition-colors tabular-nums">
                    {step.num}
                  </span>
                  <span className="lg:hidden text-[10px] font-mono text-[#F49A3A] uppercase tracking-widest">
                    STEP 0{idx + 1}
                  </span>
                </div>

                {/* Exact Step Titles Requested */}
                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-[#F49A3A] transition-colors font-['Plus_Jakarta_Sans']">
                    {step.title}
                  </h3>
                  <div className="text-xs font-mono text-[#F49A3A] uppercase tracking-wider">
                    {step.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed pt-1">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Prompt */}
        <div className="mt-16 pt-10 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs sm:text-sm text-neutral-400">
            Have architectural drawings or rough sketches ready for takeoff?
          </div>
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-xs font-bold tracking-wider text-white uppercase bg-neutral-900 hover:bg-[#EB3B2C] border border-neutral-700 hover:border-[#EB3B2C] transition-all cursor-pointer"
          >
            <span>INITIATE DISCOVERY</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
