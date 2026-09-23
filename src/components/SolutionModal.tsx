import React from 'react';
import { SolutionItem } from '../data/companyData';
import { ArchitecturalImage } from './ArchitecturalImage';
import { X, CheckCircle2, ArrowRight, Shield, Layers, Box } from 'lucide-react';

interface SolutionModalProps {
  solution: SolutionItem | null;
  onClose: () => void;
  onOpenQuote: (subject: string) => void;
}

export const SolutionModal: React.FC<SolutionModalProps> = ({
  solution,
  onClose,
  onOpenQuote
}) => {
  if (!solution) return null;

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
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-[#141414] text-white border border-neutral-700 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col relative">
        {/* Header with Visual Banner */}
        <div className="relative aspect-[16/8] bg-black overflow-hidden">
          <ArchitecturalImage
            type={getImageType(solution.id) as any}
            customSrc={solution.image}
            alt={solution.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/80 hover:bg-[#EB3B2C] text-white transition-colors cursor-pointer border border-neutral-700"
            aria-label="Close Solution Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title in Header */}
          <div className="absolute bottom-5 left-6 right-6 text-white space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#F49A3A]">
              <span>DIVISION {solution.number}</span>
              <span>·</span>
              <span>{solution.subtitle}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-['Plus_Jakarta_Sans']">
              {solution.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 flex-grow">
          <div>
            <p className="text-sm sm:text-base text-neutral-200 font-medium leading-relaxed">
              {solution.description}
            </p>
            <p className="text-xs text-[#F49A3A] mt-1 font-mono uppercase tracking-wider">
              {solution.tagline}
            </p>
          </div>

          {/* Key Engineering Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-wider text-neutral-400 uppercase flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[#EB3B2C]" />
              Engineering Specifications &amp; Standards:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-neutral-300">
              {solution.features.map((feat) => (
                <div key={feat} className="flex items-start gap-2.5 p-3 bg-neutral-900 border border-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#EB3B2C] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Materials & Common Applications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-neutral-800">
            <div className="space-y-2">
              <h5 className="text-xs font-mono font-bold text-[#F49A3A] uppercase tracking-wider flex items-center gap-1.5">
                <Box className="w-3.5 h-3.5 text-[#EB3B2C]" />
                Engineered Materials:
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {solution.materials.map((m) => (
                  <span
                    key={m}
                    className="text-xs px-2.5 py-1 bg-black/60 text-neutral-300 border border-neutral-800"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h5 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#F49A3A]" />
                Primary Applications:
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {solution.applications.map((app) => (
                  <span
                    key={app}
                    className="text-xs px-2.5 py-1 bg-black/60 text-neutral-400 border border-neutral-800"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-400">
              Technical cut-sheets and sample material kits available on request.
            </div>

            <button
              onClick={() => {
                const title = solution.title;
                onClose();
                onOpenQuote(`Technical Inquiry: ${title}`);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold tracking-wider text-white uppercase bg-gradient-to-r from-[#EB3B2C] to-[#F49A3A] transition-all cursor-pointer"
            >
              <span>REQUEST MATERIAL BOQ</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
