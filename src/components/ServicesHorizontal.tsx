import React, { useState, useRef } from 'react';
import { SERVICES } from '../data/mkrdData';
import { ServiceItem } from '../types';
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle2, Cpu, Sparkles, X, Layers, Activity } from 'lucide-react';

interface ServicesHorizontalProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const ServicesHorizontal: React.FC<ServicesHorizontalProps> = ({ onOpenQuoteModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'additive', label: '3D Printing & Additive' },
    { id: 'engineering', label: 'Mould & Robotics' },
    { id: 'immersive', label: '360° Virtual Tours' },
    { id: 'digital', label: 'Software & Microservices' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-700">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>CHAPTER 03 // CORE CAPABILITIES & ENGINEERING SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-blue-950 tracking-tight">
              ENGINEERED <span className="text-blue-600">CAPABILITIES</span>
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
              From physical sub-micron toolmaking and 3D additive synthesis to enterprise cloud microservices and immersive spatial environments.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              id="btn-scroll-services-left"
              onClick={() => handleScroll('left')}
              className="p-3 rounded-full bg-slate-100 border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-xs active:scale-95"
              aria-label="Scroll services left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="btn-scroll-services-right"
              onClick={() => handleScroll('right')}
              className="p-3 rounded-full bg-slate-100 border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-xs active:scale-95"
              aria-label="Scroll services right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`filter-cat-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                  : 'bg-slate-100 border border-slate-200 text-slate-600 hover:text-blue-950 hover:bg-slate-200/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Horizontal Scrollable Cards Showcase */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory no-scrollbar"
        >
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="w-[320px] sm:w-[380px] lg:w-[420px] shrink-0 snap-start bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-500/70 transition-all duration-300 group flex flex-col justify-between shadow-md hover:shadow-xl shadow-blue-950/5"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-blue-950/90 backdrop-blur-md border border-blue-800 text-[10px] font-mono text-cyan-300 uppercase font-bold">
                      {service.category}
                    </span>
                  </div>

                  {/* Service Number */}
                  <div className="absolute top-4 right-4 font-mono text-xs font-bold text-white bg-slate-950/80 px-2.5 py-1 rounded border border-slate-800">
                    0{index + 1}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-display font-extrabold text-blue-950 group-hover:text-blue-600 transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Key Stats Bar */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 font-mono text-[11px]">
                    {service.stats.map((stat, sIdx) => (
                      <div key={sIdx}>
                        <div className="text-slate-500 text-[9px] uppercase">{stat.label}</div>
                        <div className="text-blue-700 font-bold truncate">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3">
                <button
                  id={`btn-inspect-spec-${service.id}`}
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition-colors group/btn"
                >
                  <span>Technical Specs & Process</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenQuoteModal(service.id)}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm shadow-blue-600/20"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Technical Drawer / Modal for Selected Service */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="text-[10px] font-mono text-blue-700 font-bold uppercase tracking-widest">
                  DETAILED SPECIFICATION // {selectedService.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-blue-950 mt-1">
                  {selectedService.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Full Narrative */}
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold text-slate-500 uppercase">Executive Overview:</div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedService.fullDesc}
              </p>
            </div>

            {/* Key Benefits Grid */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-slate-500 uppercase">Key Verified Benefits:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedService.keyBenefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 leading-normal font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Steps (Brochure exact pipeline) */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-slate-500 uppercase">Standard Execution Process:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {selectedService.process.map((p, pIdx) => (
                  <div key={pIdx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-mono text-xs font-bold text-blue-600">{p.step}</div>
                    <div className="text-xs font-bold text-blue-950">{p.label}</div>
                    <div className="text-[11px] text-slate-600 leading-tight">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold text-slate-500 uppercase">Technologies & Standards:</div>
              <div className="flex flex-wrap gap-2">
                {selectedService.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-blue-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-500 font-mono">
                Location: MKRD IMT Manesar Tech Plant
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs text-slate-700 font-semibold"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const id = selectedService.id;
                    setSelectedService(null);
                    onOpenQuoteModal(id);
                  }}
                  className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/25"
                >
                  Request Proposal for this Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
