import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  CheckCircle,
  Sparkles,
  Compass,
  ArrowRight,
  Filter,
  Layers,
  X,
  ShieldCheck,
  Award
} from 'lucide-react';
import { CASE_STUDIES } from '../../data/mkrdData';
import { ProjectCaseStudy } from '../../types';
import { VirtualTour360Sim } from '../VirtualTour360Sim';
import { ParallaxTiltCard } from '../ParallaxTiltCard';

interface ProjectsViewProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectCaseStudy | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'immersive', label: '360° Spatial Digital Twins & VR' },
    { id: 'additive', label: 'Additive & 3D Prototyping' },
    { id: 'tooling', label: 'Plastic Injection Mould Tooling' },
    { id: 'digital', label: 'Enterprise Software & Systems' },
    { id: 'aerospace', label: 'Aerospace & Robotics' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-blue-50/70 to-white pt-12 pb-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-700">
            <FolderGit2 className="w-4 h-4 text-blue-600" />
            <span>MKRD VERIFIED DELIVERABLES PORTFOLIO</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-blue-950 tracking-tight">
            ENGINEERING <span className="text-blue-600">PROJECTS</span> & CASE STUDIES
          </h1>
          <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
            A comprehensive portfolio of physical mould tooling, additive fabrication, 12K spatial digital twins, and custom enterprise software delivered to industry leaders.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`btn-case-filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 scale-105'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-blue-950 hover:bg-slate-100 hover:scale-105'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 1. FLAGSHIP PROJECT HIGHLIGHT: SDMS 360° SPATIAL DIGITAL TWIN ENGINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-700">
              <Compass className="w-3.5 h-3.5 text-blue-600" />
              <span>FLAGSHIP INTERACTIVE PROJECT PREVIEW</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-blue-950">
              SDMS 360° Spatial Digital Twin Experience
            </h2>
            <p className="text-xs text-slate-600">
              Interact directly with the multi-node spatial twin developed by MKRD Engineers for S.D. Modern School.
            </p>
          </div>

          <a
            href="https://virtual-tour.sdms.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm shadow-blue-600/25 hover:scale-105 self-start md:self-auto"
          >
            <span>Launch Official Live SDMS Tour</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 360 Interactive Simulation Component */}
        <VirtualTour360Sim />
      </section>

      {/* 2. PROJECT CARDS MATRIX WITH 3D PARALLAX TILT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="text-sm font-mono font-bold text-slate-700">
            SHOWING {filteredProjects.length} VERIFIED DEPLOYMENTS
          </div>
          <span className="text-xs font-mono text-slate-500 font-semibold">ISO 9001:2015 QA VALIDATED</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ParallaxTiltCard
              key={project.id}
              id={`case-card-${project.id}`}
              maxTilt={5}
              glowColor="rgba(37, 99, 235, 0.2)"
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Visual Frame */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-100 group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-blue-950/90 backdrop-blur-md border border-blue-800 text-[10px] font-mono text-cyan-300 uppercase font-bold shadow-md">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs font-bold text-white bg-slate-950/80 px-2.5 py-0.5 rounded border border-slate-800">
                      PROJECT / 0{index + 1}
                    </span>
                  </div>

                  {/* Client Tag */}
                  <div className="absolute bottom-4 left-4 font-mono text-xs text-slate-200 flex items-center gap-1.5 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span>Client: <strong className="text-white">{project.client}</strong></span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="text-xl font-display font-extrabold text-blue-950 group-hover:text-blue-600 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-1.5 pt-2">
                    <div className="text-[10px] font-mono uppercase text-slate-500 font-bold tracking-wider">Key Deliverables:</div>
                    <div className="space-y-1">
                      {project.deliverables.slice(0, 3).map((del, dIdx) => (
                        <div key={dIdx} className="text-xs text-slate-700 flex items-start gap-1.5 font-medium">
                          <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-t border-slate-100 font-mono text-xs">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 hover:border-blue-400 hover:bg-blue-50/50 transition-colors">
                        <div className="text-slate-500 text-[9px] uppercase">{m.label}</div>
                        <div className="text-blue-700 font-bold truncate">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 flex items-center justify-between gap-4 border-t border-slate-100">
                {project.link ? (
                  <a
                    id={`btn-view-project-${project.id}`}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors group"
                  >
                    <span>View Live Deployment</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 group"
                  >
                    <span>Inspect Case Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}

                <div className="flex gap-1.5">
                  {project.tags.slice(0, 2).map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700 font-semibold">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </ParallaxTiltCard>
          ))}
        </div>
      </section>

      {/* Project Detail Modal Drawer */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 border border-slate-200 shadow-2xl relative">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-mono font-bold uppercase">
                {activeModalProject.category}
              </span>
              <h3 className="text-2xl font-display font-extrabold text-blue-950">
                {activeModalProject.title}
              </h3>
              <div className="text-xs font-mono text-slate-500">Client: {activeModalProject.client}</div>
            </div>

            <img
              src={activeModalProject.image}
              alt={activeModalProject.title}
              className="w-full h-56 object-cover rounded-2xl"
            />

            <p className="text-sm text-slate-700 leading-relaxed">
              {activeModalProject.description}
            </p>

            <div className="space-y-2">
              <div className="text-xs font-mono font-bold text-slate-700 uppercase">Complete Deliverables:</div>
              <ul className="space-y-1.5">
                {activeModalProject.deliverables.map((del, dIdx) => (
                  <li key={dIdx} className="text-xs text-slate-700 flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100 font-mono">
              {activeModalProject.metrics.map((m, mIdx) => (
                <div key={mIdx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="text-[10px] text-slate-500 uppercase">{m.label}</div>
                  <div className="text-sm font-bold text-blue-700">{m.value}</div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex justify-end gap-3">
              <button
                onClick={() => {
                  setActiveModalProject(null);
                  onOpenQuoteModal();
                }}
                className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-all hover:scale-105 shadow-md shadow-blue-600/25"
              >
                Inquire Similar Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
