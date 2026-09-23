import React, { useState } from 'react';

export type ArchitecturalImageType =
  | 'hero-resort'
  | 'prefab-showcase'
  | 'prefab-resort'
  | 'roofing'
  | 'ceiling'
  | 'cladding'
  | 'flooring'
  | 'ply-boards'
  | 'hotel'
  | 'chalet'
  | 'farmhouse'
  | 'commercial'
  | 'hospitality'
  | 'mountain'
  | 'construction'
  | 'about-facade';

// Curated high-resolution realistic architectural photography matching Indian & luxury mountain projects
export const REALISTIC_IMAGE_MAP: Record<ArchitecturalImageType, string> = {
  'hero-resort':
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=75',
  'prefab-showcase':
    'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=75',
  'prefab-resort':
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=75',
  'roofing':
    'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=800&q=75',
  'ceiling':
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=75',
  'cladding':
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=75',
  'flooring':
    'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=75',
  'ply-boards':
    'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=75',
  'hotel':
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=75',
  'chalet':
    'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=75',
  'farmhouse':
    'https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=800&q=75',
  'commercial':
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=75',
  'hospitality':
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=75',
  'mountain':
    'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=75',
  'construction':
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=75',
  'about-facade':
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=75'
};

function optimizeUrl(url: string, priority: boolean): string {
  if (!url) return '';
  if (url.includes('images.unsplash.com')) {
    const [base] = url.split('?');
    const width = priority ? 1200 : 750;
    const quality = priority ? 75 : 70;
    return `${base}?auto=format&fit=crop&w=${width}&q=${quality}`;
  }
  return url;
}

interface ArchitecturalImageProps {
  type: ArchitecturalImageType;
  alt: string;
  className?: string;
  customSrc?: string;
  priority?: boolean;
}

export const ArchitecturalImage: React.FC<ArchitecturalImageProps> = ({
  type,
  alt,
  className = "w-full h-full object-cover",
  customSrc,
  priority = false
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const rawUrl = customSrc || REALISTIC_IMAGE_MAP[type] || REALISTIC_IMAGE_MAP['hero-resort'];
  const imageUrl = optimizeUrl(rawUrl, priority);

  return (
    <div className={`relative overflow-hidden bg-neutral-900 ${className}`} aria-label={alt}>
      {/* Underlying architectural placeholder shimmer while loading */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-neutral-900 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-neutral-700 border-t-[#EB3B2C] animate-spin opacity-50" />
        </div>
      )}

      {/* Realistic architectural photography image */}
      {!hasError ? (
        <img
          src={imageUrl}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : (
        /* Graceful Architectural Vector Fallback if network blocks external photo */
        <div className="w-full h-full relative bg-[#1A1A1A] flex flex-col justify-end p-6 select-none">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#EB3B2C_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative z-10 space-y-1">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#F49A3A] uppercase">
              RAVGROUP ARCHITECTURAL
            </span>
            <p className="text-xs font-semibold text-white/90 line-clamp-1">{alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};
