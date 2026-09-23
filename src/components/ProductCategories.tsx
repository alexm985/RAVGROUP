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
    <section id="products" className="py-20 sm:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[3px] bg-[#EB3B2C]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#EB3B2C] uppercase font-['Plus_Jakarta_Sans']">
              MATERIAL DIVISIONS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171717] font-['Plus_Jakarta_Sans']">
            Explore Our Material Categories.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Engineered architectural solutions manufactured and calibrated to exact structural, acoustic, and aesthetic standards.
          </p>
        </div>

        {/* 5 Product Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {PRODUCT_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setActiveCategory(cat)}
              className="group relative bg-[#F8F8F6] rounded overflow-hidden border border-neutral-200 hover:border-[#EB3B2C] hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[4/3] bg-[#111111] overflow-hidden">
                  <ArchitecturalImage
                    type={getImageTypeForCategory(cat.id) as any}
                    customSrc={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute top-2.5 right-2.5 font-mono text-[10px] font-bold text-[#F49A3A] bg-black/70 px-2 py-0.5 rounded">
                    {cat.code}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 sm:p-5 space-y-1.5">
                  <h3 className="text-base font-extrabold text-[#111111] group-hover:text-[#EB3B2C] transition-colors font-['Plus_Jakarta_Sans']">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-neutral-500 line-clamp-2">
                    {cat.tagline}
                  </p>
                </div>
              </div>

              {/* Bottom Explore Button */}
              <div className="p-4 pt-0">
                <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs font-bold text-neutral-700 group-hover:text-[#EB3B2C] transition-colors">
                  <span>SPECIFICATIONS</span>
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center group-hover:translate-x-1 transition-transform border border-neutral-200">
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
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
          <div className="bg-white rounded max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-200">
            {/* Modal Header */}
            <div className="relative aspect-[16/7] bg-[#111111] overflow-hidden">
              <ArchitecturalImage
                type={getImageTypeForCategory(activeCategory.id) as any}
                customSrc={activeCategory.image}
                alt={activeCategory.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
              <button
                onClick={() => setActiveCategory(null)}
                className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors cursor-pointer z-10"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-5 left-6 right-6 text-white space-y-1 z-10">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F49A3A] tracking-wider uppercase font-mono">
                  <span>{activeCategory.code}</span>
                  <span>·</span>
                  <span>{activeCategory.tagline}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
                  {activeCategory.name}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                {activeCategory.description}
              </p>

              {/* Key Products Table / List */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold tracking-wider text-neutral-500 uppercase">
                  Engineered Product Variants:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeCategory.keyProducts.map((prod) => (
                    <div
                      key={prod.name}
                      className="p-3.5 bg-[#F8F8F6] rounded border border-neutral-200 space-y-1"
                    >
                      <div className="font-bold text-sm text-[#111111] font-['Plus_Jakarta_Sans']">
                        {prod.name}
                      </div>
                      <div className="text-xs text-neutral-600 font-mono">
                        {prod.specs}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Advantages */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold tracking-wider text-neutral-500 uppercase">
                  Technical Advantages & Certification:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                  {activeCategory.advantages.map((adv) => (
                    <div key={adv} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#EB3B2C] shrink-0" />
                      <span>{adv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => {
                    const catName = activeCategory.name;
                    setActiveCategory(null);
                    onOpenQuote(`Material Inquiry for ${catName} Division`);
                  }}
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#EB3B2C] hover:bg-[#d63426] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
                >
                  Request Technical Cut-Sheet & Quote
                </button>
                <button
                  onClick={() => setActiveCategory(null)}
                  className="w-full sm:w-auto px-6 py-3.5 border border-neutral-300 text-xs font-semibold text-neutral-700 hover:bg-neutral-100 rounded transition-colors"
                >
                  Back to Categories
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
