import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { ArchitecturalImage } from './ArchitecturalImage';

interface WhyRavgroupProps {
  onOpenQuote: () => void;
}

export const WhyRavgroup: React.FC<WhyRavgroupProps> = ({ onOpenQuote }) => {
  const benefits = [
    {
      num: '01',
      title: 'Complete Material Solutions',
      desc: 'Consolidate timber, structural steel connectors, roofing shingles, interior louvers, and calibrated boards with single-source accountability.',
    },
    {
      num: '02',
      title: 'Prefab & Wooden Expertise',
      desc: 'Decades of structural timber engineering and prefabricated off-site manufacturing tailored for luxury cottages, chalets, and mountain resorts.',
    },
    {
      num: '03',
      title: 'Project-Focused Approach',
      desc: 'Direct architectural BOQ takeoff, technical specification cut-sheets, and synchronized job-site logistics aligned to construction schedules.',
    },
    {
      num: '04',
      title: 'Wide Product Categories',
      desc: 'Extensive certified portfolio spanning roofing, ceiling baffles, exterior cladding, high-traffic flooring, and commercial-grade ply.',
    },
    {
      num: '05',
      title: 'Professional Support',
      desc: 'Dedicated architectural specification desk and on-ground technical support ensuring seamless installation and code compliance.',
    },
  ];

  return (
    <section id="why-ravgroup" className="py-24 sm:py-32 bg-[#111111] text-white relative border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Headline & Context */}
          <div className="lg:col-span-5 space-y-7 lg:sticky lg:top-32">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#EB3B2C]" />
              <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#EB3B2C] uppercase">
                WHY RAVGROUP
              </span>
            </div>

            {/* Exact Headline Requested:
                ONE PARTNER.
                MULTIPLE SOLUTIONS. */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-['Plus_Jakarta_Sans'] leading-[1.04]">
              ONE PARTNER.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB3B2C] via-[#F49A3A] to-white">
                MULTIPLE SOLUTIONS.
              </span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed">
              We eliminate the fragmentation of sourcing by uniting precision prefab manufacturing with complete architectural envelope materials — delivering verified quality from foundation to roofline.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-3 px-7 py-3.5 text-xs font-bold tracking-wider text-white uppercase bg-gradient-to-r from-[#EB3B2C] to-[#F49A3A] hover:brightness-110 active:scale-[0.98] transition-all rounded-none shadow-xl cursor-pointer"
              >
                <span>CONSULT WITH OUR TEAM</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 5 Benefits Using Minimal Typography & Numbers (NO traditional boxed cards) */}
          <div className="lg:col-span-7 divide-y divide-neutral-800/90 border-t border-b border-neutral-800/90">
            {benefits.map((benefit) => (
              <div
                key={benefit.num}
                className="py-7 sm:py-8 group transition-colors duration-200"
              >
                <div className="flex items-baseline gap-6 sm:gap-8">
                  {/* Large Minimal Number */}
                  <span className="font-mono text-2xl sm:text-3xl font-black text-[#F49A3A] group-hover:text-[#EB3B2C] transition-colors tabular-nums shrink-0">
                    {benefit.num}
                  </span>

                  {/* Benefit Typography */}
                  <div className="space-y-1.5 flex-grow">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#F49A3A] transition-colors font-['Plus_Jakarta_Sans']">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-xl">
                      {benefit.desc}
                    </p>
                  </div>

                  {/* Subtle Red Accent Dot on Hover */}
                  <div className="hidden sm:block w-2 h-2 rounded-full bg-neutral-800 group-hover:bg-[#EB3B2C] transition-colors shrink-0 self-center" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
