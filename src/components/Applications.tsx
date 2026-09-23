import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { APPLICATIONS_LIST, ApplicationItem } from '../data/companyData';
import { ArchitecturalImage } from './ArchitecturalImage';

interface ApplicationsProps {
  onOpenQuote: (subject?: string) => void;
}

export const Applications: React.FC<ApplicationsProps> = ({ onOpenQuote }) => {
  // Map application IDs to image types
  const getImageType = (id: string) => {
    switch (id) {
      case 'hotels-resorts':
        return 'hotel';
      case 'wooden-cottages':
        return 'chalet';
      case 'farmhouses':
        return 'farmhouse';
      case 'residential-projects':
        return 'chalet';
      case 'commercial-buildings':
        return 'commercial';
      case 'hospitality-projects':
        return 'hospitality';
      case 'mountain-properties':
        return 'mountain';
      case 'construction-projects':
        return 'construction';
      default:
        return 'hotel';
    }
  };

  return (
    <section id="applications" className="py-20 sm:py-28 bg-[#F8F8F6] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[3px] bg-[#EB3B2C]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#EB3B2C] uppercase font-['Plus_Jakarta_Sans']">
              APPLICATIONS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171717] font-['Plus_Jakarta_Sans']">
            Built for Every Kind of Project.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            From high-altitude remote chalets to large urban commercial campuses, RAVGROUP provides calibrated solutions tested for every structural context.
          </p>
        </div>

        {/* 8-Card Modern Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {APPLICATIONS_LIST.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenQuote(`Inquiry for ${item.title}`)}
              className="group relative bg-white rounded overflow-hidden border border-neutral-200 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
            >
              {/* Image Aspect */}
              <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden">
                <ArchitecturalImage
                  type={getImageType(item.id) as any}
                  customSrc={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />

                {/* Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                {/* Overlay Title */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="text-[11px] font-semibold text-[#F49A3A] tracking-wider uppercase mb-1">
                    {item.subtitle}
                  </div>
                  <h3 className="text-lg font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans'] group-hover:text-[#F49A3A] transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#EB3B2C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>
                </div>
              </div>

              {/* Card Bottom Details */}
              <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between space-y-3 bg-white">
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 border-t border-neutral-100 flex flex-wrap gap-1">
                  {item.suitableSolutions.slice(0, 2).map((sol) => (
                    <span
                      key={sol}
                      className="text-[10px] font-medium text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-xs"
                    >
                      {sol}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
