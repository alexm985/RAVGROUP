import React, { useState } from 'react';
import { PRODUCT_CATEGORIES, ProductCategory } from '../data/companyData';
import { ArchitecturalImage } from './ArchitecturalImage';
import { ArrowRight, CheckCircle2, FileText, X } from 'lucide-react';

interface ProductCategoriesProps {
  onOpenQuote: (subject?: string) => void;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({ onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | null>(null);

  const getImageTypeForCategory = (id: string) => {
    switch (id) {
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
        return 'roofing';
    }
  };

  return (
    <section id="products" className="py-24 sm:py-32 bg-[#0B0B0B] text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18 space-y-3.5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-[#EB3B2C]" />
            <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#EB3B2C] uppercase">
              MATERIAL DIVISIONS &amp; PROFILES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-['Plus_Jakarta_Sans'] leading-[1.08]">
            Explore Architectural Material Categories.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed">
            Engineered architectural solutions manufactured and calibrated to exact structural, acoustic, and aesthetic standards.
          </p>
        </div>

        {/* 5 Product Category Cards (Sharp Architectural Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {PRODUCT_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setActiveCategory(cat)}
              className="group relative bg-[#141414] border border-neutral-800 hover:border-[#EB3B2C] transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden shadow-lg"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[4/3] bg-black overflow-hidden">
                  <ArchitecturalImage
                    type={getImageTypeForCategory(cat.id) as any}
                    customSrc={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                  <div className="absolute top-2.5 right-2.5 font-mono text-[10px] font-bold text-[#F49A3A] bg-black/80 px-2 py-0.5 border border-neutral-800">
                    {cat.code}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 space-y-1.5">
                  <h3 className="text-base font-bold text-white group-hover:text-[#F49A3A] transition-colors font-['Plus_Jakarta_Sans']">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {cat.tagline}
                  </p>
                </div>
              </div>

              {/* Bottom Explore Button */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-mono font-bold text-neutral-300 group-hover:text-white transition-colors">
                  <span>SPECS &amp; PROFILES</span>
                  <div className="w-6 h-6 bg-neutral-800 group-hover:bg-[#EB3B2C] text-white flex items-center justify-center group-hover:translate-x-1 transition-all">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Detail Modal */}
      {activeCategory && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-[#141414] text-white border border-neutral-700 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            {/* Modal Header */}
            <div className="relative aspect-[16/7] bg-black overflow-hidden">
              <ArchitecturalImage
                type={getImageTypeForCategory(activeCategory.id) as any}
                customSrc={activeCategory.image}
                alt={activeCategory.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/40 to-transparent" />
              <button
                onClick={() => setActiveCategory(null)}
                className="absolute top-4 right-4 p-2 bg-black/80 hover:bg-[#EB3B2C] text-white transition-colors cursor-pointer border border-neutral-700"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-5 left-6 right-6 text-white space-y-1 z-10">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#F49A3A] tracking-wider uppercase">
                  <span>{activeCategory.code}</span>
                  <span>·</span>
                  <span>{activeCategory.tagline}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-['Plus_Jakarta_Sans']">
                  {activeCategory.name}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {activeCategory.description}
              </p>

              {/* Key Products Table / List */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold tracking-wider text-[#F49A3A] uppercase">
                  Engineered Product Variants &amp; Cut-Sheets:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeCategory.keyProducts.map((p) => (
                    <div
                      key={p.name}
                      className="p-3.5 bg-neutral-900 border border-neutral-800 space-y-1"
                    >
                      <div className="text-xs font-bold text-white flex items-center justify-between">
                        <span>{p.name}</span>
                        {p.grades && (
                          <span className="text-[10px] font-mono bg-neutral-800 text-[#F49A3A] px-1.5 py-0.5">
                            {p.grades}
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-neutral-400">
                        {p.specs}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advantages */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold tracking-wider text-neutral-400 uppercase">
                  Division Engineering Highlights:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                  {activeCategory.advantages.map((adv) => (
                    <div key={adv} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#EB3B2C] shrink-0" />
                      <span>{adv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-neutral-400">
                  Get full technical specifications cut-sheet or custom BOQ.
                </span>
                <button
                  onClick={() => {
                    const catName = activeCategory.name;
                    setActiveCategory(null);
                    onOpenQuote(`Material Takeoff for ${catName}`);
                  }}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-bold tracking-wider text-white uppercase bg-gradient-to-r from-[#EB3B2C] to-[#F49A3A]"
                >
                  REQUEST MATERIAL QUOTE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
