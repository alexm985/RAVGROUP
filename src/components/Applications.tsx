import React, { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { APPLICATIONS_LIST } from '../data/companyData';
import { ArchitecturalImage } from './ArchitecturalImage';

interface ApplicationsProps {
  onOpenQuote: (subject?: string) => void;
}

export const Applications: React.FC<ApplicationsProps> = ({ onOpenQuote }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="applications" className="py-24 sm:py-32 bg-[#0E0E0E] text-white border-b border-neutral-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header with Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#EB3B2C]" />
              <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#EB3B2C] uppercase">
                ARCHITECTURAL APPLICATIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-['Plus_Jakarta_Sans'] leading-[1.08]">
              Built for Every Kind of Project.
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed max-w-xl">
              From remote high-altitude mountain resorts to bespoke farmhouses, private villas, and commercial spaces.
            </p>
          </div>

          {/* Horizontal Scroll Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 bg-neutral-900 hover:bg-[#EB3B2C] text-neutral-300 hover:text-white border border-neutral-800 transition-colors"
              aria-label="Previous applications"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 bg-neutral-900 hover:bg-[#EB3B2C] text-neutral-300 hover:text-white border border-neutral-800 transition-colors"
              aria-label="Next applications"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Visual Panoramic Track */}
      <div className="pl-4 sm:pl-6 lg:pl-8 max-w-7xl mx-auto">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 pr-6"
        >
          {APPLICATIONS_LIST.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onOpenQuote(`Application: ${item.title}`)}
              className="w-[300px] sm:w-[360px] md:w-[400px] shrink-0 group relative bg-[#141414] border border-neutral-800 hover:border-[#EB3B2C]/70 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/11] overflow-hidden bg-black">
                <ArchitecturalImage
                  type={getImageType(item.id) as any}
                  customSrc={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/30 to-transparent" />

                <div className="absolute top-4 left-4 font-mono text-[10px] font-bold text-[#F49A3A] px-2 py-0.5 bg-black/80 border border-neutral-800 uppercase tracking-widest">
                  0{index + 1} • {item.subtitle}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 bg-[#141414] flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#F49A3A] transition-colors font-['Plus_Jakarta_Sans'] flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#EB3B2C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800/80 flex flex-wrap gap-1.5">
                  {item.suitableSolutions.slice(0, 3).map((sol) => (
                    <span
                      key={sol}
                      className="text-[10px] font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-2 py-0.5"
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
