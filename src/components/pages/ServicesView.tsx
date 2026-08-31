import React, { useState } from 'react';
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
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-blue-50/70 to-white pt-12 pb-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-700">
            <Layers className="w-4 h-4 text-blue-600" />
            <span>FULL SPECTRUM INDUSTRIAL & DIGITAL ENGINEERING</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-blue-950 tracking-tight">
            ENGINEERING <span className="text-blue-600">SERVICES</span> & SOLUTIONS
          </h1>
          <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
            From precision plastic injection mould tooling and 3D additive manufacturing to 12K spatial digital twins and bespoke enterprise systems.
          </p>

          {/* Quick Service Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-4">
            {SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeTab === s.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 scale-105'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-blue-950 hover:bg-slate-100 hover:scale-105'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 1. SELECTED SERVICE DEEP DIVE PANEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl p-6 sm:p-10 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase">
                  {activeService.category} DIVISION
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-blue-950">
                  {activeService.title}
                </h2>
              </div>

              <p className="text-base text-slate-700 leading-relaxed">
                {activeService.fullDesc}
              </p>

              {/* Key Benefits */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  ENGINEERING ADVANTAGES:
                </div>
                <div className="space-y-2.5">
                  {activeService.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Strip */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100 font-mono">
                {activeService.stats.map((st, sIdx) => (
                  <div key={sIdx} className="p-3 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-400 hover:bg-blue-50/40 transition-colors">
                    <div className="text-[10px] text-slate-500 uppercase">{st.label}</div>
                    <div className="text-sm sm:text-base font-bold text-blue-700 truncate">{st.value}</div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenQuoteModal(activeService.id)}
                  className="px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-lg shadow-blue-600/25 hover:scale-105 active:scale-95 transition-all"
                >
                  Request Technical Quotation
                </button>
              </div>
            </div>

            {/* Right Visual Frame & Tech Stack */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 group">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono font-bold tracking-wider">
                  IMT MANESAR VALIDATED WORKFLOW
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="text-xs font-mono font-bold text-slate-700 uppercase">
                  DEPLOYED TECHNOLOGIES & TOOLING:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeService.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-mono font-semibold shadow-xs hover:border-blue-400 hover:text-blue-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4-Step Engineering Execution Pipeline */}
          <div className="space-y-6 pt-6 border-t border-slate-200">
            <div className="space-y-1">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">STANDARDIZED DELIVERY LIFECYCLE</div>
              <h3 className="text-xl font-display font-extrabold text-blue-950">Execution Pipeline</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeService.process.map((step) => (
                <div
                  key={step.step}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 relative hover:bg-white hover:border-blue-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="text-xl font-display font-black text-blue-600 group-hover:scale-110 transition-transform origin-left">{step.step}</div>
                  <h4 className="font-display font-bold text-sm text-blue-950">{step.label}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. MATERIALS & TOLERANCES SPECIFICATION MATRIX WITH 3D TILT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold text-blue-700 uppercase">ENGINEERING SUBSTRATES</div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-blue-950">
            Industrial Materials & Performance Library
          </h2>
          <p className="text-sm text-slate-600 max-w-xl">
            Certified polymers, tool steels, aerospace titanium, and high-temperature composites readily stocked at our Manesar plant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MATERIALS_DB.map((mat) => (
            <ParallaxTiltCard
              key={mat.id}
              maxTilt={6}
              glowColor="rgba(37, 99, 235, 0.18)"
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between">
                  <span className="px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-mono font-bold uppercase">
                    {mat.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-700">{mat.costTier}</span>
                </div>

                <div className="mt-3">
                  <h3 className="font-display font-bold text-base text-blue-950">{mat.name}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{mat.description}</p>
                </div>
              </div>

              <div className="space-y-1.5 pt-3 border-t border-slate-100 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500 text-[11px]">TENSILE STRENGTH:</span>
                  <span className="font-bold text-slate-900">{mat.tensileStrength}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 text-[11px]">HEAT DEFLECTION:</span>
                  <span className="font-bold text-blue-700">{mat.heatDeflection}</span>
                </div>
              </div>
            </ParallaxTiltCard>
          ))}
        </div>
      </section>
    </div>
  );
};
