import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Building, Layers, Compass, ExternalLink } from 'lucide-react';
import { SOLUTIONS_LIST, PRODUCT_CATEGORIES, PROJECT_GALLERY, APPLICATIONS_LIST } from '../data/companyData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSolution?: (id: string) => void;
  onOpenQuote: (subject: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onOpenQuote,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchingSolutions = SOLUTIONS_LIST.filter(
    (s) =>
      s.title.toLowerCase().includes(trimmed) ||
      s.description.toLowerCase().includes(trimmed) ||
      s.materials.some((m) => m.toLowerCase().includes(trimmed))
  );

  const matchingProducts = PRODUCT_CATEGORIES.filter(
    (p) =>
      p.name.toLowerCase().includes(trimmed) ||
      p.description.toLowerCase().includes(trimmed) ||
      p.keyProducts.some((kp) => kp.name.toLowerCase().includes(trimmed))
  );

  const matchingProjects = PROJECT_GALLERY.filter(
    (pr) =>
      pr.title.toLowerCase().includes(trimmed) ||
      pr.location.toLowerCase().includes(trimmed) ||
      pr.category.toLowerCase().includes(trimmed)
  );

  const totalResults = matchingSolutions.length + matchingProducts.length + matchingProjects.length;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 overflow-y-auto">
      <div className="bg-[#141414] border border-neutral-700/80 w-full max-w-2xl rounded-none shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 sm:px-6 py-4 border-b border-neutral-800 bg-[#0E0E0E]">
          <Search className="w-5 h-5 text-[#F49A3A] mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search prefab resorts, roofing, cladding, flooring, ply..."
            className="w-full bg-transparent text-white placeholder-neutral-500 text-sm sm:text-base focus:outline-none font-['Plus_Jakarta_Sans']"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-neutral-400 hover:text-white mr-2"
              aria-label="Clear input"
            >
              <X className="w-4 h-4" />
            </button>
          ) : null}
          <button
            onClick={onClose}
            className="px-2 py-1 text-[11px] font-mono uppercase bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-700 rounded-none cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Search Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-6">
          {trimmed && totalResults === 0 && (
            <div className="py-12 text-center text-neutral-400 space-y-3">
              <Compass className="w-8 h-8 text-neutral-600 mx-auto" />
              <p className="text-sm">No material specifications matching &ldquo;{query}&rdquo;</p>
              <button
                onClick={() => {
                  onClose();
                  onOpenQuote(`Custom Inquiry: ${query}`);
                }}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#EB3B2C] hover:bg-[#d63426] transition-colors"
              >
                Inquire Directly With Our Engineering Desk
              </button>
            </div>
          )}

          {/* Solutions Division */}
          {matchingSolutions.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] font-bold text-[#F49A3A] uppercase tracking-widest font-mono">
                <span>Architectural Solutions</span>
                <span>{matchingSolutions.length}</span>
              </div>
              <div className="space-y-1.5">
                {matchingSolutions.map((sol) => (
                  <a
                    key={sol.id}
                    href="#solutions"
                    onClick={onClose}
                    className="flex items-center justify-between p-3 bg-neutral-900/80 hover:bg-neutral-800/80 border border-neutral-800/60 hover:border-[#EB3B2C]/60 transition-colors group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-[#EB3B2C]">{sol.number}</span>
                        <span className="text-sm font-bold text-white group-hover:text-[#F49A3A] transition-colors">
                          {sol.title}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 line-clamp-1 mt-0.5">{sol.tagline}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Product Categories */}
          {matchingProducts.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] font-bold text-[#EB3B2C] uppercase tracking-widest font-mono">
                <span>Material Divisions</span>
                <span>{matchingProducts.length}</span>
              </div>
              <div className="space-y-1.5">
                {matchingProducts.map((prod) => (
                  <a
                    key={prod.id}
                    href="#products"
                    onClick={onClose}
                    className="flex items-center justify-between p-3 bg-neutral-900/80 hover:bg-neutral-800/80 border border-neutral-800/60 hover:border-[#F49A3A]/60 transition-colors group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] bg-neutral-800 px-1.5 py-0.5 text-neutral-300">
                          {prod.code}
                        </span>
                        <span className="text-sm font-bold text-white group-hover:text-[#F49A3A] transition-colors">
                          {prod.name}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 line-clamp-1 mt-0.5">{prod.tagline}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {matchingProjects.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] font-bold text-neutral-400 uppercase tracking-widest font-mono">
                <span>Featured Projects</span>
                <span>{matchingProjects.length}</span>
              </div>
              <div className="space-y-1.5">
                {matchingProjects.map((prj) => (
                  <a
                    key={prj.id}
                    href="#projects"
                    onClick={onClose}
                    className="flex items-center justify-between p-3 bg-neutral-900/80 hover:bg-neutral-800/80 border border-neutral-800/60 hover:border-neutral-500 transition-colors group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-[#F49A3A] uppercase tracking-wider">
                          [{prj.category}]
                        </span>
                        <span className="text-sm font-bold text-white group-hover:text-[#EB3B2C] transition-colors">
                          {prj.title}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 mt-0.5">{prj.location} • {prj.scale}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {!trimmed && (
            <div className="space-y-4 pt-2">
              <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
                Suggested Specifications
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Prefab Resort',
                  'A-Frame Cottage',
                  'Architectural Shingles',
                  'WPC Louvers',
                  'Acoustic Baffles',
                  'Teak Wooden Planks',
                  'Waterproof BWP Ply',
                  'Stone Coated Tiles',
                ].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#0A0A0A] border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
          <span>RAVGROUP Technical Catalog & Project Archive</span>
          <button
            onClick={() => {
              onClose();
              onOpenQuote('Search Catalog BOQ Request');
            }}
            className="text-xs font-bold text-[#F49A3A] hover:text-[#EB3B2C] uppercase transition-colors"
          >
            Direct Estimation Desk &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
