import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SolutionItem } from '../data/companyData';
import { ArchitecturalImage } from './ArchitecturalImage';

interface SolutionCardProps {
  solution: SolutionItem;
  onClick: (solution: SolutionItem) => void;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({ solution, onClick }) => {
  // Map solution ID to corresponding architectural image type
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
      className="group relative bg-white border border-neutral-200 rounded overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-neutral-300 flex flex-col h-full"
    >
      {/* Top Image Box */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#111111]">
        <div className="w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-105">
          <ArchitecturalImage
            type={getImageType(solution.id) as any}
            customSrc={solution.image}
            alt={solution.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Category Number Badge */}
        <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 px-3 py-1 bg-[#111111]/90 backdrop-blur-xs text-white rounded-xs border border-neutral-700/60 font-mono text-xs font-bold tabular-nums">
          <span className="text-[#F49A3A]">{solution.number}</span>
          <span className="text-neutral-400">/</span>
          <span className="text-neutral-300 text-[10px] tracking-wider">SOLUTIONS</span>
        </div>

        {/* Hover Accent Top Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-200 group-hover:bg-gradient-to-r group-hover:from-[#EB3B2C] group-hover:to-[#F49A3A] transition-all duration-300" />
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold tracking-tight text-[#171717] group-hover:text-[#EB3B2C] transition-colors font-['Plus_Jakarta_Sans']">
            {solution.title}
          </h3>
          <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3">
            {solution.description}
          </p>
        </div>

        {/* Card Footer with Arrow */}
        <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-bold tracking-wider uppercase text-neutral-700 group-hover:text-[#EB3B2C] transition-colors">
          <span>EXPLORE SPECIFICATIONS</span>
          <div className="w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-[#EB3B2C] group-hover:text-white flex items-center justify-center transition-all duration-200 group-hover:translate-x-1">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
