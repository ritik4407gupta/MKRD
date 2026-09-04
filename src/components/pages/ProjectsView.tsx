import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FolderGit2,
  ExternalLink,
  CheckCircle,
  X,
  ArrowRight
} from 'lucide-react';
import { CASE_STUDIES } from '../../data/mkrdData';
import { ProjectCaseStudy } from '../../types';
import { ThreeDDigitalExperience } from '../ThreeDDigitalExperience';
import { RedDotsBackground } from '../RedDotsBackground';

interface ProjectsViewProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onOpenQuoteModal }) => {
  const [activeProject, setActiveProject] = useState<ProjectCaseStudy | null>(null);

  return (
    <div className="relative pb-32 bg-[#020617] min-h-[100vh] text-slate-300 pt-28 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none fixed" />

      {/* Header Banner */}
      <motion.section 
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center mb-24"
      >
        <motion.div variants={textVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/50 border border-blue-800/50 text-xs font-mono font-bold text-cyan-400 backdrop-blur-sm">
          <FolderGit2 className="w-4 h-4 text-cyan-400" />
          <span>MKRD VERIFIED DELIVERABLES PORTFOLIO</span>
        </motion.div>
        
        <motion.h1 variants={textVariants} className="text-4xl sm:text-5xl lg:text-7xl font-display font-black text-white tracking-tight">
          ENGINEERING <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">PROJECTS</span>
        </motion.h1>
        
        <motion.p variants={textVariants} className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
          A comprehensive portfolio of physical mould tooling, additive fabrication, spatial digital twins, and custom enterprise systems delivered to industry leaders.
        </motion.p>
      </motion.section>

      {/* ZIG-ZAG PROJECT CARDS MATRIX */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {CASE_STUDIES.map((project, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <motion.div
              key={project.id}
              layoutId={`project-container-${project.id}`}
              initial={{ 
                opacity: 0, 
                x: isEven ? 150 : -150, 
                rotateY: isEven ? -15 : 15,
                rotateZ: isEven ? -2 : 2,
                scale: 0.9 
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                rotateY: 0,
                rotateZ: 0,
                scale: 1
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                type: "spring", 
                stiffness: 60, 
                damping: 20, 
                duration: 0.8 
              }}
              className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 lg:gap-16 group cursor-pointer`}
              onClick={() => setActiveProject(project)}
            >
              {/* Image Side */}
              <motion.div 
                layoutId={`project-image-container-${project.id}`}
                className="w-full md:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 aspect-video md:aspect-square lg:aspect-video"
              >
                <div className="absolute inset-0 bg-[#020617]/20 z-10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                {project.id === 'mkrd-cs-04' ? (
                  <div className="w-full h-full relative z-10 group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100 pointer-events-auto">
                    <ThreeDDigitalExperience />
                  </div>
                ) : (
                  <motion.img
                    layoutId={`project-image-${project.id}`}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                )}
                
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-blue-950/80 backdrop-blur-md border border-blue-800/80 text-[10px] font-mono text-cyan-300 uppercase font-bold shadow-md">
                    {project.category}
                  </span>
                  <span className="font-mono text-[10px] font-bold text-slate-300 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded border border-slate-700">
                    0{index + 1}
                  </span>
                </div>
              </motion.div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 space-y-6">
                <motion.h3 
                  layoutId={`project-title-${project.id}`}
                  className="text-3xl sm:text-4xl font-display font-black text-white group-hover:text-cyan-400 transition-colors leading-tight"
                >
                  {project.title}
                </motion.h3>
                
                <motion.div 
                  layoutId={`project-client-${project.id}`}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 font-mono text-[10px] text-slate-300 font-semibold tracking-widest uppercase"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  CLIENT: <span className="text-white">{project.client}</span>
                </motion.div>

                <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="pt-4 flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                  <span>Explore Details</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* FULL SCREEN MODAL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          >
            {/* Massive blur backdrop covering EVERYTHING including navbar */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#020617]/40 backdrop-blur-3xl"
              onClick={() => setActiveProject(null)}
            >
              <RedDotsBackground />
            </motion.div>

            <motion.div 
              layoutId={`project-container-${activeProject.id}`}
              className="relative w-full max-w-5xl bg-slate-900 border border-slate-700/80 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] z-10"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image Side */}
              <motion.div 
                layoutId={`project-image-container-${activeProject.id}`}
                className="w-full md:w-1/2 h-64 md:h-auto relative bg-black"
              >
                {activeProject.id === 'mkrd-cs-04' ? (
                  <div className="w-full h-full relative z-10 pointer-events-auto">
                    <ThreeDDigitalExperience />
                  </div>
                ) : (
                  <motion.img
                    layoutId={`project-image-${activeProject.id}`}
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover opacity-90"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none md:hidden" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900 pointer-events-none hidden md:block" />
              </motion.div>

              {/* Modal Content Side */}
              <div className="w-full md:w-1/2 p-6 sm:p-10 overflow-y-auto flex flex-col gap-6">
                <div className="space-y-4">
                  <span className="px-3 py-1 rounded-full bg-blue-950/50 border border-blue-800/50 text-cyan-400 text-[10px] font-mono font-bold uppercase tracking-widest inline-block">
                    {activeProject.category}
                  </span>
                  
                  <motion.h3 
                    layoutId={`project-title-${activeProject.id}`}
                    className="text-3xl sm:text-4xl font-display font-black text-white leading-tight"
                  >
                    {activeProject.title}
                  </motion.h3>
                  
                  <motion.div 
                    layoutId={`project-client-${activeProject.id}`}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 font-mono text-[10px] text-slate-400 uppercase tracking-widest"
                  >
                    CLIENT: <span className="text-white">{activeProject.client}</span>
                  </motion.div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeProject.description}
                </p>

                <div className="space-y-3 bg-slate-950/50 p-5 rounded-2xl border border-slate-800/50">
                  <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest border-b border-slate-800 pb-2">Complete Deliverables</div>
                  <ul className="space-y-2.5 pt-2">
                    {activeProject.deliverables.map((del, dIdx) => (
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + (dIdx * 0.1) }}
                        key={dIdx} 
                        className="text-xs text-slate-300 flex items-start gap-2.5"
                      >
                        <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                        <span>{del}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono mt-auto">
                  {activeProject.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-center">
                      <div className="text-[9px] text-slate-400 uppercase tracking-wider mb-1">{m.label}</div>
                      <div className="text-sm font-bold text-cyan-400">{m.value}</div>
                    </div>
                  ))}
                </div>

                {activeProject.link ? (
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all hover:scale-105 shadow-lg shadow-blue-900/30 w-full text-center uppercase tracking-wide flex items-center justify-center gap-2"
                  >
                    <span>View Live Deployment</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    onClick={() => {
                      setActiveProject(null);
                      onOpenQuoteModal(activeProject.category);
                    }}
                    className="mt-4 px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all hover:scale-105 shadow-lg shadow-blue-900/30 w-full text-center uppercase tracking-wide"
                  >
                    Inquire Similar Architecture
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
