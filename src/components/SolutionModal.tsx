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
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-200 flex flex-col">
        {/* Header with Visual Banner */}
        <div className="relative aspect-[16/8] bg-[#111111] overflow-hidden">
          <ArchitecturalImage
            type={getImageType(solution.id) as any}
            customSrc={solution.image}
            alt={solution.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors cursor-pointer"
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
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Plus_Jakarta_Sans']">
              {solution.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 flex-grow">
          <div>
            <p className="text-base text-neutral-800 font-medium leading-relaxed">
              {solution.description}
            </p>
            <p className="text-sm text-neutral-500 mt-1 italic">
              {solution.tagline}
            </p>
          </div>

          {/* Key Engineering Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-wider text-neutral-500 uppercase flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[#EB3B2C]" />
              Engineering Specifications & Advantages:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-neutral-700">
              {solution.features.map((feat) => (
                <div key={feat} className="flex items-start gap-2.5 p-2.5 bg-[#F8F8F6] rounded border border-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#EB3B2C] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Materials & Common Applications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-neutral-100">
            <div className="space-y-2">
              <h5 className="text-xs font-bold tracking-wider text-neutral-500 uppercase flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#F49A3A]" />
                Specified Materials:
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {solution.materials.map((mat) => (
                  <span
                    key={mat}
                    className="text-xs px-2.5 py-1 bg-neutral-100 text-neutral-800 font-medium rounded"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h5 className="text-xs font-bold tracking-wider text-neutral-500 uppercase flex items-center gap-1.5">
                <Box className="w-4 h-4 text-[#EB3B2C]" />
                Primary Applications:
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {solution.applications.map((app) => (
                  <span
                    key={app}
                    className="text-xs px-2.5 py-1 bg-red-50 text-[#EB3B2C] border border-red-200 font-medium rounded"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={() => {
                const title = solution.title;
                onClose();
                onOpenQuote(`Project Quote for: ${title}`);
              }}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#EB3B2C] hover:bg-[#d63426] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Request Quote for this Solution</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3.5 border border-neutral-300 text-xs font-semibold text-neutral-700 hover:bg-neutral-100 rounded transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
