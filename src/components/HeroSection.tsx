import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Play, Compass, Shield, Cpu, ChevronRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mkrdData';
import heroImg from '../assets/images/hero_robotic_precision_1787995484245.jpg';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden bg-white">
      {/* Background Blueprint Gradients & Grid */}
      <div className="absolute inset-0 bg-grid-tech opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center my-auto">
        {/* Left Column: Typographic & Editorial Messaging */}
        <div className="lg:col-span-7 space-y-7">
          {/* Metadata Marker */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-blue-700 shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>MKRD INDUSTRIAL CELL</span>
            <span className="text-blue-300">•</span>
            <span>{COMPANY_DETAILS.coordinates.lat}, {COMPANY_DETAILS.coordinates.long}</span>
          </motion.div>

          {/* Large Editorial Headline */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest">
              PRECISION ENGINEERING & DIGITAL SYSTEMS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-blue-950 tracking-tight leading-[1.08]">
              WHERE PHYSICAL <span className="text-blue-600">PRECISION</span> MEETS DIGITAL ARCHITECTURE.
            </h1>
          </motion.div>

          {/* Crisp Supporting Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal"
          >
            MKRD Engineers delivers end-to-end industrial execution: from sub-micron 
            <strong className="text-slate-900 font-semibold"> Plastic Injection Mould & Die Tooling</strong> and 
            <strong className="text-slate-900 font-semibold"> Advanced 3D Additive Fabrication</strong>, to 
            <strong className="text-slate-900 font-semibold"> Enterprise Software</strong>, 
            <strong className="text-slate-900 font-semibold"> Automation</strong>, and 
            <strong className="text-slate-900 font-semibold"> 360° Spatial Digital Twins</strong>.
          </motion.p>

          {/* CTA Cluster */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3.5 pt-2"
          >
            <button
              id="hero-btn-quote"
              onClick={onOpenQuoteModal}
              className="px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 active:scale-98"
            >
              <span>Get Engineering Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#interactive-3d-lab"
              className="px-5 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 hover:border-blue-500 text-slate-800 font-semibold text-sm flex items-center gap-2 transition-all shadow-xs"
            >
              <Cpu className="w-4 h-4 text-blue-600" />
              <span>Launch 3D Lab</span>
            </a>

            <a
              href="#virtual-tour-section"
              className="px-5 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-sm font-semibold flex items-center gap-2 transition-all shadow-xs"
            >
              <Compass className="w-4 h-4 text-blue-600" />
              <span>360° Virtual Tour</span>
            </a>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 max-w-lg"
          >
            <div>
              <div className="text-2xl font-bold font-display text-blue-600">±0.005 mm</div>
              <div className="text-xs text-slate-500 font-mono font-medium">Machining Tolerance</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-display text-slate-900">&lt; 24h</div>
              <div className="text-xs text-slate-500 font-mono font-medium">3D Print Turnaround</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-display text-emerald-600">ISO 9001</div>
              <div className="text-xs text-slate-500 font-mono font-medium">Quality Certified</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Editorial Visual & Interactive Preview Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl shadow-blue-950/5 group">
            {/* Cinematic Hero Image Frame */}
            <div className="relative h-[340px] sm:h-[420px] overflow-hidden">
              <img
                src={heroImg}
                alt="MKRD Precision Robotic Engineering"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

              {/* Live Status HUD Badge */}
              <div className="absolute top-4 right-4 bg-blue-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-blue-800 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>FACILITY LIVE</span>
              </div>

              {/* Corner Engineering Crosshairs */}
              <div className="absolute top-3 left-3 text-white/80 font-mono text-[10px] bg-slate-950/70 px-2 py-0.5 rounded backdrop-blur-sm">+ 28.3619N</div>
              <div className="absolute bottom-16 right-3 text-cyan-300 font-mono text-[10px] bg-slate-950/70 px-2 py-0.5 rounded backdrop-blur-sm">GD&T VERIFIED</div>
            </div>

            {/* Bottom Card Strip */}
            <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-xs text-blue-950">MKRD IMT MANESAR HUB</div>
                <div className="text-[11px] text-slate-500 font-mono">Full-Spectrum Hardware & Digital Plant</div>
              </div>
              <a
                href="#services"
                className="p-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Editorial Scroll Cue */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between pt-6 border-t border-slate-200 text-xs font-mono text-slate-500">
        <div>REG. ADDRESS: {COMPANY_DETAILS.address}</div>
        <div className="flex items-center gap-2">
          <span>SCROLL TO EXPLORE CINEMATIC SERVICES</span>
          <span className="animate-bounce text-blue-600 font-bold">↓</span>
        </div>
      </div>
    </section>
  );
};
