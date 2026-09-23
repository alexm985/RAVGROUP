import React, { useState } from 'react';
import { PROJECT_GALLERY, ProjectItem } from '../data/companyData';
import { ArchitecturalImage } from './ArchitecturalImage';
import { MapPin, Maximize2, ArrowRight, X } from 'lucide-react';

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

  // Map project ID to architectural image type
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
    <section id="projects" className="py-20 sm:py-28 bg-[#F8F8F6] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[3px] bg-[#EB3B2C]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#EB3B2C] uppercase font-['Plus_Jakarta_Sans']">
                PROJECTS & POSSIBILITIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171717] font-['Plus_Jakarta_Sans']">
              Engineered for Visionaries.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Explore actual material deployment across luxury hospitality landmarks, mountain chalets, and architectural residences.
            </p>
          </div>

          {/* Filter Bar (Interactive Controls / Tabs) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white rounded border border-neutral-200 shadow-xs overflow-x-auto no-scrollbar">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3.5 py-1.5 text-xs font-bold tracking-wider rounded transition-all whitespace-nowrap cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'text-neutral-600 hover:text-[#111111] hover:bg-neutral-100'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-white rounded overflow-hidden border border-neutral-200 hover:border-neutral-300 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/11] bg-[#111111] overflow-hidden">
                <ArchitecturalImage
                  type={getImageTypeForProject(project) as any}
                  customSrc={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />

                {/* Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Category Pill Tag */}
                <div className="absolute top-3.5 left-3.5 z-10 px-2.5 py-1 bg-[#111111]/90 backdrop-blur-xs text-[#F49A3A] text-[10px] font-bold tracking-widest uppercase rounded border border-neutral-700/60">
                  {project.categoryLabel}
                </div>

                {/* Expand Affordance */}
                <div className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Location Overlay */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center gap-1.5 text-neutral-300 text-xs font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#EB3B2C] shrink-0" />
                  <span className="truncate">{project.location}</span>
                </div>
              </div>

              {/* Information */}
              <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#171717] group-hover:text-[#EB3B2C] transition-colors font-['Plus_Jakarta_Sans']">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                  <span className="font-medium text-neutral-700 font-mono text-[11px]">{project.scale}</span>
                  <span className="text-[#EB3B2C] font-bold tracking-wide flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    VIEW DETAILS <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
          <div className="bg-white rounded max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-200">
            {/* Modal Image Header */}
            <div className="relative aspect-[16/9] bg-[#111111]">
              <ArchitecturalImage
                type={getImageTypeForProject(selectedProject) as any}
                customSrc={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/70 hover:bg-black text-white rounded-full transition-colors cursor-pointer"
                aria-label="Close Project Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 px-3 py-1 bg-[#EB3B2C] text-white text-xs font-bold uppercase rounded">
                {selectedProject.categoryLabel}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-extrabold text-[#111111] font-['Plus_Jakarta_Sans']">
                  {selectedProject.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-neutral-600 mt-1">
                  <MapPin className="w-4 h-4 text-[#EB3B2C]" />
                  <span>{selectedProject.location}</span>
                  <span>·</span>
                  <span className="font-semibold text-neutral-800">{selectedProject.scale}</span>
                </div>
              </div>

              <p className="text-sm text-neutral-700 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs font-bold tracking-wider text-neutral-500 uppercase">
                  Materials Deployed by RAVGROUP:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.materialsUsed.map((mat) => (
                    <span
                      key={mat}
                      className="px-3 py-1 bg-[#F8F8F6] border border-neutral-200 text-xs font-semibold text-neutral-800 rounded"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => {
                    const title = selectedProject.title;
                    setSelectedProject(null);
                    onOpenQuote(`Inquiry regarding specifications similar to: ${title}`);
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-[#EB3B2C] hover:bg-[#d63426] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
                >
                  Request Similar Solution Quote
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto px-5 py-3 border border-neutral-300 text-xs font-semibold text-neutral-700 hover:bg-neutral-100 rounded transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
