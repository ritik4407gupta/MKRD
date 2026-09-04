import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ChevronRight, 
  Zap, 
  Cpu, 
  Factory,
  ShieldCheck,
  Circle, Triangle, Square 
} from 'lucide-react';

import { HeroSection } from '../HeroSection';
import { ServicesHorizontal } from '../ServicesHorizontal';
import { PartnerLogosMarquee } from '../PartnerLogosMarquee';
import { TransitionTextSequence } from '../TransitionTextSequence';
import { ParallaxSection } from '../ParallaxSection';
import { ParallaxTiltCard } from '../ParallaxTiltCard';

interface HomeViewProps {
  onNavigate: (pageId: string) => void;
  onOpenQuoteModal: (serviceId?: string) => void;
  showIntroSequence?: boolean;
}


const TextMarquee = () => {
  const words = [
    "SUB-MICRON PRECISION", "AEROSPACE GRADE TOLERANCES", "INDUSTRY 4.0 INTEGRATION", 
    "RAPID PROTOTYPING", "GD&T VERIFIED EXCELLENCE", "SMART MANUFACTURING"
  ];
  return (
    <div className="relative py-12 overflow-hidden bg-transparent mt-12 mb-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      <div className="flex w-max animate-scroll-marquee whitespace-nowrap items-center">
        {[...words, ...words, ...words].map((word, i) => {
          const icons = [Circle, Triangle, Square];
          const Icon = icons[i % icons.length];
          return (
            <div key={i} className="flex items-center gap-[6px] mx-8">
              <span className="text-4xl sm:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-700 uppercase tracking-widest">{word}</span>
              <Icon className="w-8 h-8 text-cyan-800/50 ml-4" />
            </div>
          );
        })}
      </div>
    </div>
  )
};

export const HomeView: React.FC<HomeViewProps> = ({ 
  onNavigate, 
  onOpenQuoteModal,
  showIntroSequence = false 
}) => {
  const [introFinished, setIntroFinished] = useState(!showIntroSequence);

  useEffect(() => {
    if (showIntroSequence) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        setIntroFinished(true);
        document.body.style.overflow = 'auto';
      }, 5000);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'auto';
      };
    } else {
      setIntroFinished(true);
    }
  }, [showIntroSequence]);

  return (
    <>
      {/* 1. Cinematic Intro Sequence */}
      <AnimatePresence>
        {!introFinished && <TransitionTextSequence onComplete={() => {}} />}
      </AnimatePresence>

      <div className={`relative min-h-screen bg-[#020617] text-slate-300 transition-opacity duration-1000 overflow-hidden ${introFinished ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Global Cinematic Background Orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none fixed" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[500px] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none fixed" />

        {/* 2. Hero Section */}
        <HeroSection onOpenQuoteModal={onOpenQuoteModal} />

        {/* Text Marquee Divider */}
        <TextMarquee />


        {/* 3. Horizontal Scroll Services Showcase */}
        <div className="relative z-10">
          <ServicesHorizontal onNavigate={onNavigate} />
        </div>

        {/* SCROLL-OVER WRAPPER FOR STICKY PARALLAX */}
        <div className="relative z-10 bg-[#020617] w-full border-t border-slate-800/80 shadow-[0_-30px_50px_rgba(0,0,0,0.7)] pt-32 pb-16 rounded-t-[3rem]">
          
          {/* 4. WHY MKRD BENTO GRID & INTERACTIVE STATS */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <ParallaxSection speed={25}>
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/50 border border-blue-800/50 text-xs font-mono font-bold text-cyan-400 backdrop-blur-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>THE MKRD ADVANTAGE</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
                  ENGINEERED FOR SCALE,<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">BUILT WITH SPEED.</span>
                </h2>
                <p className="text-base text-slate-400">
                  Why leading OEMs and institutions trust our Manesar plant for high-consequence engineering.
                </p>
              </div>
            </ParallaxSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1 */}
              <ParallaxTiltCard
                maxTilt={8}
                className="p-8 rounded-[2rem] bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 hover:border-cyan-500/50 shadow-xl space-y-5 group transition-colors h-full flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-950/50 border border-cyan-800 flex items-center justify-center text-cyan-400 shadow-inner group-hover:scale-110 group-hover:bg-cyan-900/50 transition-all duration-500">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="flex-grow space-y-3">
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">Sub-Micron GD&T</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Every mould, die, and custom machined fixture undergoes Zeiss 3D CMM metrology inspection with certified reports.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-mono text-cyan-400 font-bold mt-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  ±0.005 mm VERIFIED
                </div>
              </ParallaxTiltCard>

              {/* Card 2 */}
              <ParallaxTiltCard
                maxTilt={8}
                className="p-8 rounded-[2rem] bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 hover:border-blue-500/50 shadow-xl space-y-5 group transition-colors h-full flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-950/50 border border-blue-800 flex items-center justify-center text-blue-400 shadow-inner group-hover:scale-110 group-hover:bg-blue-900/50 transition-all duration-500">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="flex-grow space-y-3">
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-blue-300 transition-colors">Interactive 3D Simulation</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    We provide digital preview twins and robotic kinematics simulations before tool cutting, minimizing design risks.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('simulations')}
                  className="mt-4 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500 text-xs font-mono text-white font-bold flex items-center justify-between w-full transition-all"
                >
                  <span>Launch 3D Lab</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </ParallaxTiltCard>

              {/* Card 3 */}
              <ParallaxTiltCard
                maxTilt={8}
                className="p-8 rounded-[2rem] bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 hover:border-emerald-500/50 shadow-xl space-y-5 group transition-colors h-full flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-950/50 border border-emerald-800 flex items-center justify-center text-emerald-400 shadow-inner group-hover:scale-110 group-hover:bg-emerald-900/50 transition-all duration-500">
                  <Factory className="w-6 h-6" />
                </div>
                <div className="flex-grow space-y-3">
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-emerald-300 transition-colors">Integrated Manesar Plant</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Located in Sector-7, IMT Manesar. Direct access to North India's premier industrial automotive corridor.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('infrastructure')}
                  className="mt-4 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-emerald-500 text-xs font-mono text-white font-bold flex items-center justify-between w-full transition-all"
                >
                  <span>Inspect Machinery</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </ParallaxTiltCard>
            </div>
          </section>

          {/* 5. RAPID PROPOSAL ESTIMATION CALLOUT */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-32 relative z-10">
            <div className="relative p-10 sm:p-14 rounded-[2.5rem] bg-slate-900/80 backdrop-blur-2xl border border-cyan-800/60 flex flex-col md:flex-row items-center justify-between gap-10 shadow-[0_0_50px_rgba(8,145,178,0.15)] overflow-hidden">
              
              {/* Internal glowing elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/20 blur-[100px] rounded-full pointer-events-none" />

              <div className="space-y-4 max-w-2xl relative z-10">
                <div className="inline-flex items-center gap-2 text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest px-3 py-1 bg-cyan-950/50 border border-cyan-900/50 rounded-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Fast-Track Engineering Estimation
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-black text-white leading-tight">
                  Have CAD Files or Specs Ready?
                </h3>
                <p className="text-base text-slate-300 leading-relaxed">
                  Upload STEP, IGES, STL, or project briefs. Our senior engineering team at IMT Manesar provides comprehensive feasibility and pricing feedback within 4 hours.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 w-full md:w-auto">
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,145,178,0.6)] hover:scale-105 active:scale-95 transition-all uppercase tracking-wide"
                >
                  Request Proposal
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-slate-400 text-white font-bold text-sm shadow-md hover:scale-105 transition-all uppercase tracking-wide"
                >
                  Contact Lead
                </button>
              </div>
            </div>
          </section>

          {/* PARTNER LOGOS SLIDER (Above Footer) */}
          <div className="pb-16 pt-8 border-t border-slate-800/50">
            <div className="text-center mb-8">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">TRUSTED BY INDUSTRY LEADERS</span>
            </div>
            <PartnerLogosMarquee />
          </div>
        </div>
      </div>
    </>
  );
};
