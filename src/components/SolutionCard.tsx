import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SolutionItem } from '../data/companyData';
import { ArchitecturalImage } from './ArchitecturalImage';

interface SolutionCardProps {
  solution: SolutionItem;
  onClick: (solution: SolutionItem) => void;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({ solution, onClick }) => {
  const getImageType = (id: string) => {
    switch (id) {
      case 'prefab-wooden':
        return 'prefab-resort';
      case 'roofing':
        return 'roofing';
      case 'ceiling':
        return 'ceiling';
      case 'cladding':
        return 'cladding';
      case 'flooring':
        return 'flooring';
      case 'ply-boards':
        return 'ply-boards';
      default:
        return 'prefab-resort';
    }
  };

  return (
    <div
      onClick={() => onClick(solution)}
      className="group relative bg-[#141414] border border-neutral-800 rounded-none overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#EB3B2C]/70 flex flex-col h-full shadow-lg"
    >
      {/* Large Image Container */}
      <div className="relative aspect-[16/11] overflow-hidden bg-[#0A0A0A]">
        <div className="w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-108">
          <ArchitecturalImage
            type={getImageType(solution.id) as any}
            customSrc={solution.image}
            alt={solution.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Cinematic Scrim & Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/35 to-black/20 group-hover:via-black/55 transition-all duration-300" />

        {/* Large Number Badge */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 bg-black/85 backdrop-blur-xs text-white border border-neutral-700/80 font-mono text-xs font-bold tabular-nums">
          <span className="text-[#EB3B2C] group-hover:text-[#F49A3A] transition-colors">{solution.number}</span>
          <span className="text-neutral-500">/</span>
          <span className="text-neutral-300 text-[10px] tracking-widest uppercase">DIVISION</span>
        </div>

        {/* Red Accent Indicator Line (expands on hover) */}
        <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#EB3B2C] to-[#F49A3A] group-hover:w-full transition-all duration-300" />
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-5 bg-[#141414]">
        <div className="space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#EB3B2C]" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#F49A3A]">
              {solution.tagline}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#F49A3A] transition-colors font-['Plus_Jakarta_Sans']">
            {solution.title}
          </h3>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-3">
            {solution.description}
          </p>
        </div>

        {/* Footer with Arrow Animation */}
        <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-bold tracking-wider uppercase text-neutral-300 group-hover:text-white transition-colors">
          <span>EXPLORE SPECIFICATIONS</span>
          <div className="w-8 h-8 rounded-none bg-neutral-800 group-hover:bg-[#EB3B2C] text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1.5">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
