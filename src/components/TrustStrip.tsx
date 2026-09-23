import React from 'react';
import { Home, Layers, Briefcase, Award, Headphones } from 'lucide-react';
import { TRUST_POINTS } from '../data/companyData';

export const TrustStrip: React.FC = () => {
  const icons = [
    Home,        // Prefab & Wooden Solutions
    Layers,      // Complete Material Range
    Briefcase,   // Project-Based Solutions
    Award,       // Quality-Focused
    Headphones   // Professional Support
  ];

  return (
    <section
      id="trust-strip"
      className="relative z-20 bg-[#0C0C0C] border-b border-neutral-800 text-neutral-300 py-8 sm:py-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center">
          {TRUST_POINTS.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item.title}
                className="flex items-start gap-3.5 group"
              >
                <div className="p-2.5 bg-[#141414] border border-neutral-800 text-[#F49A3A] group-hover:text-[#EB3B2C] group-hover:border-[#EB3B2C]/50 transition-colors shrink-0">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight font-['Plus_Jakarta_Sans'] group-hover:text-[#F49A3A] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-neutral-400 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
