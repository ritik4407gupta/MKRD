import React, { useState, MouseEvent } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  Compass,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Box,
  Eye,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Activity,
  Award,
  Factory,
  Sliders,
  RotateCw
} from 'lucide-react';
import { BackgroundVideo } from '../BackgroundVideo';
import { MkrdLogo } from '../MkrdLogo';
import { ParallaxTiltCard } from '../ParallaxTiltCard';
import { InfiniteMarquee } from '../InfiniteMarquee';
import { PartnerLogosMarquee } from '../PartnerLogosMarquee';
import { ParallaxSection } from '../ParallaxSection';
import { COMPANY_DETAILS, SERVICES, CASE_STUDIES } from '../../data/mkrdData';

interface HomeViewProps {
  onNavigate: (page: string) => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}


export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenQuoteModal }) => {
  // Toggle effect between Physical Manufacturing and Digital Engineering
  const [capabilityCategory, setCapabilityCategory] = useState<'physical' | 'digital'>('physical');

  // Interactive mouse coordinates for hero parallax depth
  const [mouseOffset, setMouseOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleHeroMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30;
    const y = (e.clientY / innerHeight - 0.5) * 30;
    setMouseOffset({ x, y });
  };

  const physicalServices = SERVICES.filter(s => s.category === 'additive' || s.category === 'engineering');
  const digitalServices = SERVICES.filter(s => s.category === 'immersive' || s.category === 'digital');

  const activeServices = capabilityCategory === 'physical' ? physicalServices : digitalServices;
  const featuredProjects = CASE_STUDIES.slice(0, 4);

  return (
    <div className="bg-slate-950 text-slate-300 relative w-full pb-0 ">
      {/* 1. CINEMATIC HERO SECTION WITH VIDEO BACKGROUND & MULTI-LAYER PARALLAX */}
      <section
        onMouseMove={handleHeroMouseMove}
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-slate-800 perspective-2000 bg-slate-950"
      >
        {/* Looping Background Video with Parallax Drift */}
        <div
          className="absolute inset-0 z-0 transition-transform duration-700 ease-out"
          style={{
            transform: `translate3d(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px, 0) scale(1.05)`,
          }}
        >
          <BackgroundVideo overlayOpacity="bg-slate-950/50" />
        </div>

        {/* Ambient Blueprint Grid Layer with Parallax Counter-Drift */}
        <div
          className="absolute inset-0 bg-grid-tech opacity-20 pointer-events-none z-1 transition-transform duration-1000 ease-out"
          style={{
            transform: `translate3d(${-mouseOffset.x * 0.8}px, ${-mouseOffset.y * 0.8}px, 0)`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20 sm:pb-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative Stage */}
            <div className="lg:col-span-8 space-y-7">
              {/* Top Telemetry Badge with Floating Hover Effect */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-950/30 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-white shadow-xl hover:border-cyan-400 hover:bg-slate-950/50 hover:scale-105 transition-all cursor-default"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-100">IMT MANESAR SECTOR-7 FACILITY</span>
                <span className="text-slate-400">•</span>
                <span className="text-cyan-300 font-bold">ISO 9001:2015 CERTIFIED</span>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-3"
              >
                <div className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span>INNOVATING YOUR DIGITAL TOMORROW</span>
                </div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.05] drop-shadow-md">
                  PHYSICAL PRECISION. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-200">
                    DIGITAL MASTERY.
                  </span>
                </h1>
              </motion.div>

              {/* Narrative */}
                <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-100 font-normal leading-relaxed max-w-2xl drop-shadow-sm"
              >
                MKRD Engineers delivers precision plastic injection mould tooling, industrial 3D prototyping, 12K spatial digital twins, and bespoke enterprise software systems from our facility in IMT Manesar.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-3.5 pt-2"
              >
                <button
                  id="hero-explore-projects-btn"
                  onClick={() => onNavigate('projects')}
                  className="px-7 py-4 rounded-full bg-cyan-600 hover:bg-cyan-950/500 text-white font-bold text-sm flex items-center gap-2.5 transition-all shadow-xl shadow-cyan-600/40 hover:scale-105 active:scale-95 group"
                >
                  <span>Explore Verified Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenQuoteModal()}
                  className="px-6 py-4 rounded-full bg-slate-900/95 hover:bg-slate-900 text-white font-bold text-sm flex items-center gap-2 transition-all shadow-lg hover:shadow-cyan-400/20 hover:scale-105 active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Instant RFQ Estimate</span>
                </button>

                <button
                  onClick={() => onNavigate('simulations')}
                  className="px-5 py-4 rounded-full bg-slate-950/40 hover:bg-slate-900/80 text-cyan-300 border border-cyan-400/40 hover:border-cyan-400 text-sm font-semibold flex items-center gap-2 backdrop-blur-md transition-all hover:scale-105 shadow-md"
                >
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>Launch 3D Lab</span>
                </button>
              </motion.div>

              {/* Quick Metrics Strip with Transparent Parallax Glow Cards */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-white/20 max-w-xl"
              >
                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/25 backdrop-blur-md border border-white/20 shadow-2xl hover:border-cyan-400/80 hover:bg-slate-950/45 hover:-translate-y-1 transition-all duration-300 group cursor-default">
                  <div className="text-2xl sm:text-3xl font-black font-display text-cyan-300 tracking-tight drop-shadow-[0_0_15px_rgba(34,211,238,0.55)]">
                    ±0.005mm
                  </div>
                  <div className="text-[11px] sm:text-xs font-mono text-slate-100 font-bold uppercase tracking-wider mt-1 group-hover:text-cyan-200 transition-colors">
                    Tooling Tolerance
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/25 backdrop-blur-md border border-white/20 shadow-2xl hover:border-amber-400/80 hover:bg-slate-950/45 hover:-translate-y-1 transition-all duration-300 group cursor-default">
                  <div className="text-2xl sm:text-3xl font-black font-display text-amber-300 tracking-tight drop-shadow-[0_0_15px_rgba(252,211,77,0.55)]">
                    &lt; 24h
                  </div>
                  <div className="text-[11px] sm:text-xs font-mono text-slate-100 font-bold uppercase tracking-wider mt-1 group-hover:text-amber-200 transition-colors">
                    3D Print Turnaround
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/25 backdrop-blur-md border border-white/20 shadow-2xl hover:border-emerald-400/80 hover:bg-slate-950/45 hover:-translate-y-1 transition-all duration-300 group cursor-default">
                  <div className="text-2xl sm:text-3xl font-black font-display text-emerald-300 tracking-tight drop-shadow-[0_0_15px_rgba(110,231,183,0.55)]">
                    12K HDR
                  </div>
                  <div className="text-[11px] sm:text-xs font-mono text-slate-100 font-bold uppercase tracking-wider mt-1 group-hover:text-emerald-200 transition-colors">
                    Spatial Twin Res
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Interactive Holographic Card */}
            <div className="hidden lg:block lg:col-span-4 relative preserve-3d">
              {/* Dynamic Floating Telemetry HUD */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="preserve-3d"
                style={{
                  transform: `rotateY(${-mouseOffset.x * 0.4}deg) rotateX(${mouseOffset.y * 0.4}deg) translateZ(20px)`,
                }}
              >
                <div className="p-6 rounded-3xl bg-slate-950/40 backdrop-blur-xl border border-cyan-400/30 shadow-2xl shadow-cyan-500/20 space-y-5 text-white relative overflow-hidden group hover:border-cyan-400/60 transition-all duration-500">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-cyan-600/80 border border-cyan-400 flex items-center justify-center text-cyan-300 shadow-md">
                        <Activity className="w-3.5 h-3.5 animate-pulse" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-cyan-300 font-bold">LIVE TELEMETRY</div>
                        <div className="text-[11px] font-bold text-white">MKRD Core</div>
                      </div>
                    </div>
                  </div>

                  {/* Spec Live Readings */}
                  <div className="space-y-2.5 font-mono text-[10px]">
                    <div className="p-2.5 rounded-xl bg-slate-900/5 backdrop-blur-xs border border-white/10 flex items-center justify-between">
                      <span className="text-slate-300">CNC MILLING</span>
                      <span className="font-bold text-cyan-300">5-AXIS ACTIVE</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900/5 backdrop-blur-xs border border-white/10 flex items-center justify-between">
                      <span className="text-slate-300">ADDITIVE</span>
                      <span className="font-bold text-amber-300">FDM/SLA DUAL</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigate('infrastructure')}
                    className="w-full py-2.5 rounded-xl bg-cyan-600/20 hover:bg-cyan-500/40 border border-cyan-500/50 text-cyan-300 font-bold text-[11px] flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Inspect Plant</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* INFINITE MARQUEE FOR PARTNERS */}
      <InfiniteMarquee />

      {/* 2. INTERACTIVE CAPABILITY MATRIX WITH TOGGLE EFFECT */}
      <section className="relative w-full py-24 mt-24 overflow-hidden border-y border-slate-800/50">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <BackgroundVideo overlayOpacity="bg-slate-950/70" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617] z-0 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        <ParallaxSection speed={30} className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400">
              <Layers className="w-4 h-4 text-cyan-500" />
              <span>CORE CAPABILITY ENGINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              ENGINEERING & DIGITAL <span className="text-cyan-400">SOLUTIONS</span>
            </h2>
              <p className="text-sm text-slate-400 max-w-xl">
              Switch between our advanced physical fabrication and immersive digital systems.
            </p>
          </div>

          {/* Toggle Button Group with Micro-interaction */}
          <div className="p-1.5 rounded-full flex items-center shadow-inner self-start md:self-auto">
            <button
              id="toggle-physical-btn"
              onClick={() => setCapabilityCategory('physical')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                capabilityCategory === 'physical'
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/25 scale-105'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Factory className="w-3.5 h-3.5" />
              <span>Physical Tooling & 3D Additive</span>
            </button>
            <button
              id="toggle-digital-btn"
              onClick={() => setCapabilityCategory('digital')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                capabilityCategory === 'digital'
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/25 scale-105'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Digital Twins & Enterprise Software</span>
            </button>
          </div>
        </div>
        </ParallaxSection>

        {/* Dynamic Cards Grid with Parallax Tilt & Specular Shine */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activeServices.map((service, idx) => (
            <ParallaxTiltCard
              key={service.id}
              maxTilt={5}
              glowColor="rgba(37, 99, 235, 0.22)"
              className="rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Visual Header */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-900 group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-blue-800 text-[10px] font-mono text-cyan-300 uppercase font-bold shadow-md">
                      {service.category.toUpperCase()}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-slate-900/80 text-white text-xs font-mono font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 space-y-5">
                    <p className="text-sm text-slate-400 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Highlights Grid */}
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <div className="text-[10px] font-mono uppercase text-slate-500 font-bold tracking-wider">
                      CAPABILITY HIGHLIGHTS:
                    </div>
                    {service.keyBenefits.slice(0, 2).map((benefit, bIdx) => (
                      <div key={bIdx} className="text-xs text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technical Metric Chips */}
                  <div className="grid grid-cols-3 gap-2 pt-2 font-mono">
                    {service.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="p-2.5 rounded-xl hover:border-cyan-400 hover:bg-cyan-950/50 transition-colors">
                        <div className="text-[9px] text-slate-500 uppercase">{stat.label}</div>
                        <div className="text-xs font-bold text-cyan-400 truncate">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 sm:px-8 pb-6 pt-2 flex items-center justify-between border-t border-slate-800">
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors group"
                >
                  <span>Explore Full Specifications</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenQuoteModal(service.id)}
                  className="px-4 py-2 rounded-full bg-cyan-950/50 hover:bg-cyan-600 text-cyan-400 hover:text-white font-bold text-xs shadow-xs hover:shadow-md transition-all"
                >
                  Request Quote
                </button>
              </div>
            </ParallaxTiltCard>
          ))}
        </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS SHOWCASE (PORTFOLIO TEASER) WITH 3D INTERACTION */}
      <section className="sticky bottom-0 z-0 bg-[#020617] py-20 border-y border-slate-800 mt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ParallaxSection speed={40}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>VERIFIED DELIVERABLES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                FEATURED <span className="text-cyan-400">PROJECTS</span> & CASE STUDIES
              </h2>
                <p className="text-sm text-slate-400 max-w-xl">
                Explore deployed engineering solutions across education, automotive manufacturing, and aerospace.
              </p>
            </div>

            <button
              onClick={() => onNavigate('projects')}
              className="px-6 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-cyan-600/25 hover:shadow-lg hover:scale-105 transition-all self-start md:self-auto group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          </ParallaxSection>

          {/* Project Showcase Grid with ParallaxTiltCard */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project, idx) => (
              <ParallaxTiltCard
                key={project.id}
                maxTilt={6}
                glowColor="rgba(37, 99, 235, 0.18)"
                onClick={() => onNavigate('projects')}
                className="rounded-2xl overflow-hidden hover:border-cyan-400/70 transition-all duration-300 group cursor-pointer shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-900/80 text-[10px] font-mono font-bold text-cyan-300 uppercase shadow-md">
                      {project.category}
                    </span>

                    <span className="absolute bottom-3 left-3 text-[11px] font-mono text-white font-bold truncate pr-3">
                      {project.client}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h4 className="font-display font-bold text-base text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {project.title}
                    </h4>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-800 flex items-center justify-between text-xs font-mono font-bold text-cyan-400 group-hover:text-cyan-300">
                  <span>Explore Project</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </ParallaxTiltCard>
            ))}
          </div>

          {/* SDMS Highlight Card Banner - Redesigned for Premium Feel */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl bg-slate-950 text-white border border-slate-800 flex flex-col lg:flex-row items-center justify-between shadow-2xl overflow-hidden group mt-16"
          >
            {/* Background Texture & Glow with Parallax */}
            <div className="absolute inset-0 bg-grid-tech opacity-10 pointer-events-none" />
            <ParallaxSection speed={80} className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              <div className="absolute -left-32 -top-32 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl group-hover:bg-cyan-500/30 transition-all duration-700" />
            </ParallaxSection>
            
            <div className="p-8 sm:p-12 lg:w-1/2 space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800 text-cyan-400 text-[10px] font-mono font-bold tracking-widest">
                <Compass className="w-3.5 h-3.5" />
                <span>CASE STUDY HIGHLIGHT</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight leading-tight">
                SDMS 360° Spatial Digital Twin
              </h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                Experience a fully navigable 12K HDR panoramic digital twin built for S.D. Modern School. Featuring interactive spatial telemetry, live hotspots, and a custom WebGL UI.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://virtual-tour.sdms.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-white text-slate-950 font-bold text-xs flex items-center gap-2 hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95"
                >
                  <span>Launch Live 3D Tour</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => onNavigate('projects')}
                  className="px-6 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs shadow-inner transition-all"
                >
                  View Case Study
                </button>
              </div>
            </div>

            {/* Right Visual Side */}
            <div className="lg:w-1/2 w-full h-64 lg:h-auto relative min-h-[300px] lg:min-h-[400px] overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-slate-950 to-transparent z-10 hidden lg:block" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent z-10 block lg:hidden" />
               <motion.img 
                 whileHover={{ scale: 1.05 }}
                 transition={{ duration: 0.8 }}
                 src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
                 alt="SDMS Virtual Tour"
                 className="absolute inset-0 w-full h-full object-cover"
               />
               
               {/* Floating Data Nodes */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-1/4 right-1/4 z-20 p-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-cyan-500/50 flex items-center gap-2 shadow-xl shadow-cyan-900/20"
               >
                 <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                 <span className="text-[10px] font-mono text-cyan-300 font-bold">NODE 42 ACTIVE</span>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SCROLL-OVER WRAPPER FOR STICKY PARALLAX */}
      <div className="relative z-10 bg-[#020617] w-full border-t border-slate-800/80 shadow-[0_-30px_50px_rgba(0,0,0,0.7)] pt-24 pb-12 rounded-t-[3rem]">
      {/* 4. WHY MKRD BENTO GRID & INTERACTIVE STATS WITH TILT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <ParallaxSection speed={25}>
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>THE MKRD ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            ENGINEERED FOR SCALE, BUILT WITH SPEED
          </h2>
            <p className="text-sm text-slate-400">
            Why leading OEMs and institutions trust our Manesar plant for high-consequence engineering.
          </p>
        </div>
        </ParallaxSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <ParallaxTiltCard
            maxTilt={6}
            variant="gemini" className="p-8 rounded-3xl shadow-md space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-cyan-950/50 border border-cyan-800 flex items-center justify-center text-cyan-400 shadow-sm">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-white">Sub-Micron GD&T Tolerance</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
              Every mould, die, and custom machined fixture undergoes Zeiss 3D CMM metrology inspection with certified inspection certificates.
            </p>
            <div className="text-xs font-mono text-cyan-400 font-bold pt-2">±0.005 mm VERIFIED</div>
          </ParallaxTiltCard>

          {/* Card 2 */}
          <ParallaxTiltCard
            maxTilt={6}
            variant="gemini" className="p-8 rounded-3xl shadow-md space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-cyan-950/50 border border-cyan-800 flex items-center justify-center text-cyan-400 shadow-sm">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-white">Interactive 3D Simulations</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
              We provide digital preview twins and robotic kinematics simulations before tool cutting, minimizing design risks and lead times.
            </p>
            <button
              onClick={() => onNavigate('simulations')}
              className="text-xs font-mono text-cyan-400 font-bold hover:underline flex items-center gap-1 pt-2 group"
            >
              <span>Test 3D Simulation Lab</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </ParallaxTiltCard>

          {/* Card 3 */}
          <ParallaxTiltCard
            maxTilt={6}
            variant="gemini" className="p-8 rounded-3xl shadow-md space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-cyan-950/50 border border-cyan-800 flex items-center justify-center text-cyan-400 shadow-sm">
              <Factory className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-white">Integrated Manesar Plant</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
              Located in Sector-7, IMT Manesar, Gurugram. Direct access to North India's premier industrial and automotive manufacturing corridor.
            </p>
            <button
              onClick={() => onNavigate('infrastructure')}
              className="text-xs font-mono text-cyan-400 font-bold hover:underline flex items-center gap-1 pt-2 group"
            >
              <span>Inspect Plant Machinery</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </ParallaxTiltCard>
        </div>
      </section>

      {/* 5. RAPID PROPOSAL ESTIMATION CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-cyan-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl hover:shadow-2xl transition-all">
          <div className="space-y-3 max-w-xl">
            <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
              FAST-TRACK ENGINEERING ESTIMATION
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              Have CAD Files or Specification Sheets Ready?
            </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
              Upload STEP, IGES, STL, or project briefs. Our senior engineering team at IMT Manesar provides comprehensive feasibility and pricing feedback within 4 hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-7 py-4 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-xl shadow-cyan-600/25 hover:scale-105 active:scale-95 transition-all"
            >
              Request Rapid Proposal
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-4 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-xs shadow-xs hover:scale-105 transition-all"
            >
              Contact Engineering Lead
            </button>
          </div>
        </div>
      </section>

      {/* PARTNER LOGOS SLIDER (Above Footer) */}
      <div className="pb-12">
        <PartnerLogosMarquee />
      </div>
      </div>
    </div>
  );
};
