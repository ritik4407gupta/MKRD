import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Layers,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Zap,
  Box,
  Compass,
  FileCheck,
  Hammer,
  RotateCw
} from 'lucide-react';
import { SERVICES, MATERIALS_DB } from '../../data/mkrdData';
import { ServiceItem } from '../../types';
import { ParallaxTiltCard } from '../ParallaxTiltCard';

interface ServicesViewProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<string>(SERVICES[0].id);
  const activeService = SERVICES.find(s => s.id === activeTab) || SERVICES[0];

  return (
    <div className="space-y-16 pb-16 bg-[#020617] min-h-[100vh] text-slate-300 pt-8">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-[#020617] pt-12 pb-8 border-b border-slate-700">
        
        {/* Animated Glow Behind Header */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-900/30 blur-[120px] rounded-full pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>FULL SPECTRUM INDUSTRIAL & DIGITAL ENGINEERING</span>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            ENGINEERING <span className="text-cyan-400">SERVICES</span> & SOLUTIONS
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="text-base text-slate-400 max-w-2xl leading-relaxed">
            From precision plastic injection mould tooling and 3D additive manufacturing to 12K spatial digital twins and bespoke enterprise systems.
          </motion.p>

          {/* Quick Service Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-4">
            {SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeTab === s.id
                    ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/25 scale-105'
                    : 'bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 hover:scale-105'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 1. SELECTED SERVICE DEEP DIVE PANEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6 }}
              className="relative w-full rounded-3xl overflow-hidden border border-cyan-900/30 shadow-[0_0_50px_rgba(34,211,238,0.1)] min-h-[600px] flex flex-col justify-center items-center group"
            >
              {/* Cinematic Background Image */}
              <motion.img
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 8, ease: "easeOut" }}
                src={activeService.image}
                alt={activeService.title}
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              
              

              <div className="absolute inset-0 bg-slate-950/70 z-0 backdrop-blur-[2px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/80 z-0 pointer-events-none" />

              {/* Centered Content Overlay */}
              <div className="relative z-10 flex flex-col items-center text-center p-6 sm:p-12 max-w-4xl mx-auto space-y-8">
                
                <div className="space-y-4">
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                  >
                    {activeService.category} DIVISION
                  </motion.span>
                  
                  <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight"
                    style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
                  >
                    {activeService.title}
                  </motion.h2>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto"
                  >
                    {activeService.fullDesc}
                  </motion.p>
                </div>

                {/* Tech Stack Chips Centered */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap justify-center gap-2 max-w-2xl"
                >
                  {activeService.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg bg-slate-900/80 border border-cyan-900/50 text-cyan-100 text-xs font-mono font-semibold backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                {/* Stats Strip */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl pt-6 border-t border-white/10 font-mono"
                >
                  {activeService.stats.map((st, sIdx) => (
                    <div key={sIdx} className="p-4 bg-slate-950/60 border border-white/5 rounded-2xl backdrop-blur-md">
                      <div className="text-xs text-slate-400 uppercase tracking-widest">{st.label}</div>
                      <div className="text-lg sm:text-xl font-bold text-cyan-400 mt-1">{st.value}</div>
                    </div>
                  ))}
                </motion.div>

                {/* Action CTA */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  className="pt-6"
                >
                  <button
                    onClick={() => onOpenQuoteModal(activeService.id)}
                    className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-sm shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all uppercase tracking-wide"
                  >
                    Request Technical Quotation
                  </button>
                </motion.div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* 4-Step Engineering Execution Pipeline */}
          <div className="space-y-6 pt-10 border-t border-slate-700 mt-10">
            <div className="space-y-1">
              <div className="text-xs font-mono font-bold text-cyan-400 uppercase">STANDARDIZED DELIVERY LIFECYCLE</div>
              <h3 className="text-xl font-display font-extrabold text-white">Execution Pipeline</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <AnimatePresence mode="popLayout">
                {activeService.process.map((step, idx) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-5 rounded-2xl bg-slate-800 border border-slate-700 space-y-2 relative hover:bg-slate-900 hover:border-cyan-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="text-xl font-display font-black text-cyan-400 group-hover:scale-110 transition-transform origin-left">{step.step}</div>
                    <h4 className="font-display font-bold text-sm text-white">{step.label}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MATERIALS & TOLERANCES SPECIFICATION MATRIX WITH 3D TILT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold text-cyan-400 uppercase">ENGINEERING SUBSTRATES</div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
            Industrial Materials & Performance Library
          </h2>
          <p className="text-sm text-slate-400 max-w-xl">
            Certified polymers, tool steels, aerospace titanium, and high-temperature composites readily stocked at our Manesar plant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MATERIALS_DB.map((mat) => (
            <ParallaxTiltCard
              key={mat.id}
              maxTilt={6}
              glowColor="rgba(34, 211, 238, 0.15)"
              className="p-6 rounded-2xl bg-slate-900 border border-slate-700 shadow-md space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between">
                  <span className="px-2.5 py-0.5 rounded bg-cyan-950/50 text-cyan-400 text-[10px] font-mono font-bold uppercase">
                    {mat.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-300">{mat.costTier}</span>
                </div>

                <div className="mt-3">
                  <h3 className="font-display font-bold text-base text-white">{mat.name}</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{mat.description}</p>
                </div>
              </div>

              <div className="space-y-1.5 pt-3 border-t border-slate-800 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400 text-[11px]">TENSILE STRENGTH:</span>
                  <span className="font-bold text-white">{mat.tensileStrength}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-[11px]">HEAT DEFLECTION:</span>
                  <span className="font-bold text-cyan-400">{mat.heatDeflection}</span>
                </div>
              </div>
            </ParallaxTiltCard>
          ))}
        </div>
      </section>
    </div>
  );
};
