import React from 'react';
import {
  Factory,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Zap,
  Activity,
  ArrowRight
} from 'lucide-react';
import { MACHINERY_SPECS, COMPANY_DETAILS } from '../../data/mkrdData';
import { ParallaxTiltCard } from '../ParallaxTiltCard';

interface InfrastructureViewProps {
  onOpenQuoteModal: () => void;
}

export const InfrastructureView: React.FC<InfrastructureViewProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-blue-50/70 to-white pt-12 pb-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-700">
            <Factory className="w-4 h-4 text-blue-600" />
            <span>MANUFACTURING INFRASTRUCTURE • IMT MANESAR</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-blue-950 tracking-tight">
            PLANT & MACHINERY <span className="text-blue-600">INFRASTRUCTURE</span>
          </h1>
          <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
            State-of-the-art 5-axis high-speed CNC milling, wire electrical discharge machining (EDM), industrial 3D additive cells, and Zeiss 3D CMM metrology inspection.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>FACILITY STATUS: <strong>OPERATIONAL (2 SHIFTS)</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>QUALITY: <strong>ISO 9001:2015</strong></span>
            </div>
            <div>
              <span>PLOT NO. 370, SECTOR-7, IMT MANESAR</span>
            </div>
          </div>
        </div>
      </section>

      {/* Machinery Catalog Grid with Parallax 3D Tilt */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MACHINERY_SPECS.map((machine) => (
            <ParallaxTiltCard
              key={machine.id}
              maxTilt={5}
              glowColor="rgba(37, 99, 235, 0.2)"
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase">
                      {machine.type}
                    </span>
                    <h3 className="text-2xl font-display font-extrabold text-blue-950 mt-2">
                      {machine.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-mono font-bold shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{machine.status}</span>
                  </div>
                </div>

                {/* Technical Specifications Grid */}
                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 transition-colors">
                    <div className="text-slate-500 text-[10px] uppercase">WORK ENVELOPE</div>
                    <div className="text-blue-700 font-bold mt-0.5">{machine.workEnvelope}</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 transition-colors">
                    <div className="text-slate-500 text-[10px] uppercase">MACHINING TOLERANCE</div>
                    <div className="text-blue-700 font-bold mt-0.5">{machine.tolerance}</div>
                  </div>
                </div>

                {/* Highlight Capabilities */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-[10px] font-mono text-slate-500 uppercase font-bold tracking-wider">
                    PRIMARY OPERATIONAL CAPABILITY:
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{machine.keyCapability}</span>
                  </div>
                </div>
              </div>
            </ParallaxTiltCard>
          ))}
        </div>
      </section>

      {/* Quality Assurance & Metrology Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-8 sm:p-10 rounded-3xl bg-blue-950 text-white border border-blue-900 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl overflow-hidden group">
          {/* Ambient Glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl group-hover:bg-cyan-500/25 transition-all duration-700 pointer-events-none" />

          <div className="space-y-3 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900 border border-blue-700 text-cyan-300 text-xs font-mono font-bold">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>METROLOGY & CALIBRATION</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold">
              Zeiss 3D CMM & First-Article Metrology Reports
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Every prototype, mould insert, and machined component is inspected in a temperature-controlled metrology lab with micron-level traceable reports provided with every shipment.
            </p>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="px-7 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all shrink-0 relative z-10"
          >
            Request Quality Specifications
          </button>
        </div>
      </section>
    </div>
  );
};
