import React, { useState } from 'react';
import { ArrowRight, Sparkles, ExternalLink, Activity, CheckCircle2, X } from 'lucide-react';
import { SERVICES } from '../data/mkrdData';
import { ServiceItem } from '../types';

interface ServicesHorizontalProps {
  onNavigate: (pageId: string) => void;
}

export const ServicesHorizontal: React.FC<ServicesHorizontalProps> = ({ onNavigate }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const duplicatedServices = [...SERVICES, ...SERVICES];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-transparent">
      
      {/* Cinematic Top Fade */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#020617] to-transparent z-10 pointer-events-none" />
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-xs font-mono font-bold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight uppercase">
            INDUSTRIAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">SYSTEMS</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl font-medium">
            Explore our end-to-end execution pipeline. From sub-micron precision hardware to enterprise digital architectures.
          </p>
        </div>
        <button
          onClick={() => onNavigate('services')}
          className="shrink-0 group flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors uppercase tracking-widest px-6 py-3 rounded-xl bg-slate-900/60 border border-slate-700/50 backdrop-blur-md hover:bg-slate-800"
        >
          <span>View All Specs</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Infinite Scroll Track */}
      <div className="relative w-full group/slider flex">
        
        {/* Left/Right Fade Edges */}
        <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#020617] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#020617] to-transparent z-20 pointer-events-none" />

        <div className="flex gap-8 w-max animate-scroll-marquee hover:[animation-play-state:paused] px-4">
          {duplicatedServices.map((service, index) => (
            <div
              key={`${service.id}-${index}`}
              className="w-[350px] sm:w-[480px] flex-shrink-0 flex flex-col justify-between group bg-slate-900/40 backdrop-blur-xl border border-slate-700/60 rounded-[2rem] overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(8,145,178,0.2)] hover:border-cyan-500/50 transition-all duration-500"
            >
              <div>
                {/* Image Header with Data Overlay */}
                <div className="relative h-[220px] sm:h-[280px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 filter brightness-90 opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-5 left-5 z-20">
                    <span className="px-4 py-1.5 rounded-full bg-cyan-950/80 backdrop-blur-md border border-cyan-800 text-[10px] font-mono text-cyan-400 uppercase font-bold tracking-widest shadow-lg">
                      {service.category}
                    </span>
                  </div>

                  {/* Service Number */}
                  <div className="absolute top-5 right-5 z-20 font-mono text-sm font-bold text-white bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-700/80 backdrop-blur-md">
                    0{index % SERVICES.length + 1}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 space-y-4 relative z-20 -mt-8">
                  <h3 className="text-2xl sm:text-3xl font-display font-black text-white group-hover:text-cyan-400 transition-colors leading-tight drop-shadow-md">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed font-medium">
                    {service.shortDesc}
                  </p>

                  {/* Key Stats Bar */}
                  <div className="grid grid-cols-3 gap-3 pt-4 mt-2 border-t border-slate-700/50 font-mono text-[11px]">
                    {service.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="space-y-1">
                        <div className="text-cyan-500 text-[9px] uppercase tracking-wider font-bold">{stat.label}</div>
                        <div className="text-white font-bold truncate text-xs">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-8 pt-0 flex items-center justify-between gap-4 mt-auto">
                <button
                  id={`btn-inspect-spec-${service.id}-${index}`}
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-2 transition-colors group/btn uppercase tracking-wide bg-cyan-950/30 px-4 py-3 rounded-xl border border-cyan-900/50 hover:border-cyan-500/50 w-full justify-center"
                >
                  <span>Specs & Process</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Technical Drawer / Modal for Selected Service */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-[#020617]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_100px_rgba(8,145,178,0.2)] p-6 sm:p-10 space-y-8 relative">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <span className="text-[10px] font-mono text-cyan-500 font-bold uppercase tracking-widest bg-cyan-950/50 px-3 py-1 rounded-md border border-cyan-900/50">
                  DETAILED SPECIFICATION // {selectedService.category}
                </span>
                <h3 className="text-3xl sm:text-4xl font-display font-black text-white mt-4">
                  {selectedService.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-3 rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Full Narrative */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-cyan-500 uppercase tracking-wider">Executive Overview:</div>
              <p className="text-base text-slate-300 leading-relaxed font-medium">
                {selectedService.fullDesc}
              </p>
            </div>

            {/* Key Benefits Grid */}
            <div className="space-y-4">
              <div className="text-xs font-mono font-bold text-cyan-500 uppercase tracking-wider">Key Verified Benefits:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedService.keyBenefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200 leading-relaxed font-semibold">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Steps */}
            <div className="space-y-4">
              <div className="text-xs font-mono font-bold text-cyan-500 uppercase tracking-wider">Standard Execution Process:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {selectedService.process.map((p, pIdx) => (
                  <div key={pIdx} className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 space-y-2">
                    <div className="font-mono text-xs font-bold text-cyan-400">{p.step}</div>
                    <div className="text-sm font-bold text-white uppercase">{p.label}</div>
                    <div className="text-xs text-slate-400 leading-relaxed font-medium">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-cyan-500 uppercase tracking-wider">Technologies & Standards:</div>
              <div className="flex flex-wrap gap-2.5">
                {selectedService.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-white shadow-inner">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
