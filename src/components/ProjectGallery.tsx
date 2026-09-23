import React, { useState } from 'react';
import { PROJECT_GALLERY, ProjectItem } from '../data/companyData';
import { ArchitecturalImage } from './ArchitecturalImage';
import { MapPin, ArrowRight, X, ExternalLink } from 'lucide-react';

interface ProjectGalleryProps {
  onOpenQuote: (subject?: string) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onOpenQuote }) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filters = [
    { id: 'ALL', label: 'ALL' },
    { id: 'PREFAB', label: 'PREFAB' },
    { id: 'WOODEN', label: 'WOODEN' },
    { id: 'ROOFING', label: 'ROOFING' },
    { id: 'CLADDING', label: 'CLADDING' },
    { id: 'INTERIORS', label: 'INTERIORS' },
  ];

  const filteredProjects = activeFilter === 'ALL'
    ? PROJECT_GALLERY
    : PROJECT_GALLERY.filter((p) => p.category === activeFilter);

  const getImageTypeForProject = (project: ProjectItem) => {
    switch (project.category) {
      case 'PREFAB':
        return 'prefab-resort';
      case 'WOODEN':
        return 'chalet';
      case 'ROOFING':
        return 'roofing';
      case 'CLADDING':
        return 'cladding';
      case 'INTERIORS':
        return 'ceiling';
      default:
        return 'hotel';
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#0C0C0C] text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#EB3B2C]" />
              <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#EB3B2C] uppercase">
                PORTFOLIO ARCHIVE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-['Plus_Jakarta_Sans'] leading-[1.08]">
              Featured Architectural Projects.
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-neutral-400 max-w-xl leading-relaxed">
              Curated architectural builds showcasing turnkey prefab timber structures, composite facades, acoustic ceilings, and rooflines across India.
            </p>
          </div>

          {/* Smooth Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-[#141414] border border-neutral-800 rounded-none overflow-x-auto no-scrollbar">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 text-xs font-bold font-mono tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-[#EB3B2C] text-white'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Grid (Not equal-sized cards) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => {
            // Asymmetric rhythm: index 0 and 3 span 7 or 8 columns with wider aspect ratio; others span 4 or 5
            const isFeatured = index % 4 === 0;
            const colSpan = isFeatured
              ? 'md:col-span-8 aspect-[16/10] sm:aspect-[16/9]'
              : (index % 4 === 1
                ? 'md:col-span-4 aspect-[4/5] sm:aspect-[3/4]'
                : (index % 4 === 2
                  ? 'md:col-span-5 aspect-[4/3] sm:aspect-[1/1]'
                  : 'md:col-span-7 aspect-[16/10] sm:aspect-[16/9]'));

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group relative overflow-hidden bg-[#141414] border border-neutral-800 hover:border-[#EB3B2C]/80 transition-all duration-300 cursor-pointer flex flex-col justify-end ${colSpan}`}
              >
                {/* Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <ArchitecturalImage
                    type={getImageTypeForProject(project) as any}
                    customSrc={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  {/* Subtle Dark Gradient Overlay that deepens on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent group-hover:from-black/98 transition-colors duration-300" />
                </div>

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-xs text-[#F49A3A] font-mono text-[10px] font-bold tracking-widest uppercase border border-neutral-700/80">
                    {project.categoryLabel}
                  </span>
                  <span className="hidden sm:inline-flex px-2.5 py-1 bg-black/60 text-neutral-300 text-[10px] font-mono border border-neutral-800">
                    {project.scale}
                  </span>
                </div>

                {/* Bottom Content on Hover */}
                <div className="relative z-10 p-6 sm:p-8 space-y-2 transform transition-transform duration-300">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                    <MapPin className="w-3.5 h-3.5 text-[#EB3B2C] shrink-0" />
                    <span>{project.location}</span>
                  </div>

                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white group-hover:text-[#F49A3A] transition-colors font-['Plus_Jakarta_Sans']">
                        {project.title}
                      </h3>
                      <p className="text-xs text-neutral-400 line-clamp-1 max-w-xl mt-1">
                        {project.description}
                      </p>
                    </div>

                    {/* View Project Arrow */}
                    <div className="w-10 h-10 shrink-0 bg-neutral-900 group-hover:bg-[#EB3B2C] text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 border border-neutral-700">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-[#141414] text-white border border-neutral-700 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            {/* Header Image */}
            <div className="relative aspect-[16/9] bg-black overflow-hidden">
              <ArchitecturalImage
                type={getImageTypeForProject(selectedProject) as any}
                customSrc={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/40 to-transparent" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/80 hover:bg-[#EB3B2C] text-white transition-colors cursor-pointer border border-neutral-700"
                aria-label="Close Project Modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-5 left-6 right-6 space-y-1">
                <span className="text-xs font-mono font-bold text-[#F49A3A] uppercase tracking-widest">
                  [{selectedProject.categoryLabel}] • {selectedProject.scale}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-['Plus_Jakarta_Sans']">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <MapPin className="w-4 h-4 text-[#EB3B2C]" />
                <span>{selectedProject.location}</span>
              </div>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-[#F49A3A] uppercase tracking-wider">
                  Materials Sourced &amp; Engineered:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.materialsUsed.map((m) => (
                    <span
                      key={m}
                      className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-300"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-neutral-500">
                  Ready to construct a similar benchmark?
                </span>
                <button
                  onClick={() => {
                    const title = selectedProject.title;
                    setSelectedProject(null);
                    onOpenQuote(`Inquiry regarding ${title}`);
                  }}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-bold tracking-wider text-white uppercase bg-gradient-to-r from-[#EB3B2C] to-[#F49A3A]"
                >
                  REQUEST SPECIFICATION TAKEOFF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
