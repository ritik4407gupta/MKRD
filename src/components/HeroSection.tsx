import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Cpu, Compass, ChevronRight } from 'lucide-react';
import heroImg from '../assets/images/hero_robotic_precision_1787995484245.jpg';
import { COMPANY_DETAILS } from '../data/mkrdData';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="home" className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      
      {/* Background Cinematic Glows specific to Hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Typographic & Editorial Messaging */}
        <div className="lg:col-span-7 space-y-7">
          {/* Metadata Marker */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-800/50 backdrop-blur-md text-xs font-mono font-bold text-cyan-400 shadow-md"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>MKRD INDUSTRIAL CELL</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">{COMPANY_DETAILS.coordinates.lat}, {COMPANY_DETAILS.coordinates.long}</span>
          </motion.div>

          {/* Large Editorial Headline */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            <div className="text-xs font-mono font-bold text-cyan-500 uppercase tracking-widest">
              PRECISION ENGINEERING & DIGITAL SYSTEMS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight leading-[1.08]">
              WHERE PHYSICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">PRECISION</span> MEETS DIGITAL ARCHITECTURE.
            </h1>
          </motion.div>

          {/* Crisp Supporting Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed font-normal"
          >
            MKRD Engineers delivers end-to-end industrial execution: from sub-micron 
            <strong className="text-white font-semibold"> Plastic Injection Mould & Die Tooling</strong> and 
            <strong className="text-white font-semibold"> Advanced 3D Additive Fabrication</strong>, to 
            <strong className="text-white font-semibold"> Enterprise Software</strong>, 
            <strong className="text-white font-semibold"> Automation</strong>, and 
            <strong className="text-white font-semibold"> 360° Spatial Digital Twins</strong>.
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
              className="px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-blue-900/50 hover:shadow-cyan-900/50 active:scale-98 border border-blue-500/50"
            >
              <span>Get Engineering Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#interactive-3d-lab"
              className="px-5 py-3.5 rounded-full bg-slate-900/60 hover:bg-slate-800 backdrop-blur-md border border-slate-700 hover:border-blue-500/50 text-white font-semibold text-sm flex items-center gap-2 transition-all shadow-md"
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Launch 3D Lab</span>
            </a>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 max-w-lg"
          >
            <div>
              <div className="text-2xl font-bold font-display text-cyan-400">±0.005 mm</div>
              <div className="text-xs text-slate-500 font-mono font-medium uppercase">Machining Tolerance</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-display text-white">&lt; 24h</div>
              <div className="text-xs text-slate-500 font-mono font-medium uppercase">3D Print Turnaround</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-display text-emerald-400">ISO 9001</div>
              <div className="text-xs text-slate-500 font-mono font-medium uppercase">Quality Certified</div>
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
          <div className="relative rounded-[2rem] overflow-hidden border border-slate-700/80 bg-slate-900/40 backdrop-blur-xl shadow-2xl group">
            {/* Cinematic Hero Image Frame */}
            <div className="relative h-[340px] sm:h-[420px] overflow-hidden">
              <img
                src={heroImg}
                alt="MKRD Precision Robotic Engineering"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 filter brightness-90 opacity-90 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />

              {/* Live Status HUD Badge */}
              <div className="absolute top-4 right-4 bg-blue-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-blue-800/80 text-[10px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-xl z-20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span className="font-bold tracking-wider">FACILITY LIVE</span>
              </div>

              {/* Corner Engineering Crosshairs */}
              <div className="absolute top-4 left-4 text-slate-400 font-mono text-[10px] bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800 backdrop-blur-sm z-20">+ 28.3619N</div>
              <div className="absolute bottom-6 right-4 text-cyan-400 font-mono text-[10px] bg-blue-950/80 px-2 py-0.5 rounded border border-blue-900/50 backdrop-blur-sm z-20 font-bold tracking-widest">GD&T VERIFIED</div>
            </div>

            {/* Bottom Card Strip */}
            <div className="p-5 bg-slate-900/80 border-t border-slate-700/50 flex items-center justify-between relative z-20">
              <div>
                <div className="font-bold text-xs text-white uppercase tracking-wider">MKRD IMT MANESAR HUB</div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">Full-Spectrum Hardware & Digital Plant</div>
              </div>
              <a
                href="#services"
                className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-cyan-400 hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-colors shadow-md"
              >
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Decorative Corner Accents */}
          <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-cyan-500/50 rounded-tr-xl pointer-events-none" />
          <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-cyan-500/50 rounded-bl-xl pointer-events-none" />
        </motion.div>
      </div>

      {/* Bottom Editorial Scroll Cue */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between pt-8 mt-12 border-t border-slate-800/80 text-[10px] font-mono text-slate-500 relative z-10 gap-4">
        <div className="tracking-widest">REG. ADDRESS: <span className="text-slate-400">{COMPANY_DETAILS.address}</span></div>
        <div className="flex items-center gap-3">
          <span className="tracking-widest uppercase">SCROLL TO EXPLORE CINEMATIC SYSTEMS</span>
          <span className="animate-bounce text-cyan-400 font-bold text-sm">↓</span>
        </div>
      </div>
    </section>
  );
};
