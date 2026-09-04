import React from 'react';
import { COMPANY_DETAILS, SERVICES } from '../data/mkrdData';
import { MkrdLogo } from './MkrdLogo';
import { ArrowUp, Phone, Mail, MapPin, Shield, ExternalLink, Sparkles, FolderGit2, Layers, Cpu, Factory } from 'lucide-react';

interface FooterBrandRevealProps {
  onNavigate: (page: string) => void;
  onOpenQuoteModal: () => void;
  onReplayIntro: () => void;
}

export const FooterBrandReveal: React.FC<FooterBrandRevealProps> = ({
  onNavigate,
  onOpenQuoteModal,
  onReplayIntro
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-950 border-t border-blue-900 pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-slate-300">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-tech opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Top Pre-Footer Callout Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-900/90 via-slate-900 to-blue-900/90 border border-blue-700/50 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
              READY TO ENGINEER YOUR NEXT BREAKTHROUGH?
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              Transform Your Prototypes, Tooling & Digital Ecosystem.
            </h3>
            <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
              From sub-micron mould design and additive fabrication to 12K spatial digital twins, MKRD delivers production-grade excellence.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3.5 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-bold text-xs shadow-lg shadow-blue-500/25 active:scale-95 transition-all"
            >
              Get Engineering Estimate
            </button>
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="px-5 py-3.5 rounded-full bg-blue-950/80 hover:bg-blue-900 border border-blue-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-300" />
              <span>Call {COMPANY_DETAILS.phoneFormatted}</span>
            </a>
          </div>
        </div>

        {/* 4-Column Navigation & Sitemap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-xs">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <MkrdLogo size="lg" theme="dark" />

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              {COMPANY_DETAILS.tagline} Comprehensive physical mould tooling, 3D additive fabrication, automation, and enterprise software systems.
            </p>

            <div className="space-y-1.5 font-mono text-[11px] text-slate-400 pt-2">
              <div className="text-slate-200">{COMPANY_DETAILS.address}</div>
              <div>CIN: {COMPANY_DETAILS.cin}</div>
              <div className="text-cyan-300 font-bold">{COMPANY_DETAILS.isoCertified}</div>
            </div>
          </div>

          {/* Quick Pages */}
          <div className="space-y-3">
            <div className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-cyan-300 transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('projects')} className="hover:text-cyan-300 transition-colors font-semibold text-cyan-300 flex items-center gap-1">
                  <span>Projects & Portfolio</span>
                  <FolderGit2 className="w-3 h-3 text-cyan-400" />
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-cyan-300 transition-colors">
                  Engineering Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('simulations')} className="hover:text-cyan-300 transition-colors">
                  3D Simulation Lab
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('infrastructure')} className="hover:text-cyan-300 transition-colors">
                  Plant Machinery
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-cyan-300 transition-colors">
                  Direct Contact & RFQ
                </button>
              </li>
            </ul>
          </div>

          {/* Key Reference Projects */}
          <div className="space-y-3">
            <div className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Featured Projects
            </div>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="https://virtual-tour.sdms.edu.in/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 flex items-center gap-1">
                  <span>SDMS 360° Spatial Twin</span>
                  <ExternalLink className="w-3 h-3 text-cyan-400" />
                </a>
              </li>
              <li>
                <a href="https://sdms.edu.in/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 flex items-center gap-1">
                  <span>SDMS Official Portal</span>
                  <ExternalLink className="w-3 h-3 text-cyan-400" />
                </a>
              </li>
              <li>
                <button onClick={() => handleNavClick('projects')} className="hover:text-cyan-300 text-left">
                  Automotive Mould Tooling
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('projects')} className="hover:text-cyan-300 text-left">
                  Aerospace Drone Chassis
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('projects')} className="hover:text-cyan-300 text-left">
                  Industrial MES Cloud Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Facility & Controls */}
          <div className="space-y-3">
            <div className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              System Controls
            </div>
            <div className="space-y-2">
              <button
                onClick={scrollToTop}
                className="w-full text-left px-3 py-2 rounded-xl bg-blue-900/60 border border-blue-800 hover:border-cyan-400 text-slate-200 hover:text-white transition-all flex items-center justify-between font-medium"
              >
                <span>Scroll to Top</span>
                <ArrowUp className="w-3 h-3 text-cyan-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Large Cinematic MKRD Brand Moment */}
        <div className="py-12 border-t border-blue-900 flex flex-col items-center justify-center text-center">
          <div className="relative group cursor-pointer transition-all duration-700">
            {/* Ambient Radial Glow Backdrop on Hover */}
            <div className="absolute -inset-10 bg-gradient-to-r from-blue-600/0 via-cyan-400/25 to-indigo-600/0 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none scale-90 group-hover:scale-110" />

            {/* Huge MKRD Typographic Monogram with Glow Effect */}
            <div className="text-7xl sm:text-9xl lg:text-[160px] font-display font-black tracking-widest text-blue-900/40 select-none group-hover:text-cyan-400/90 group-hover:drop-shadow-[0_0_45px_rgba(34,211,238,0.75)] group-hover:scale-[1.02] transition-all duration-700">
              MKRD
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-wider group-hover:text-cyan-200 group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all duration-500">
                MKRD ENGINEERS PVT. LTD.
              </div>
              <div className="font-mono text-xs text-cyan-300 tracking-widest uppercase mt-1 font-bold group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] transition-all duration-500">
                INNOVATING YOUR DIGITAL TOMORROW • SINCE 2018
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright Strip */}
        <div className="pt-6 border-t border-blue-900 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} MKRD Engineers Pvt. Ltd. All rights reserved. Registered in IMT Manesar, Haryana.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-cyan-300">ISO 9001:2015</span>
            <span>•</span>
            <span>{COMPANY_DETAILS.address}</span>
            <span>•</span>
            <a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:text-cyan-300 text-white font-semibold">
              {COMPANY_DETAILS.phoneFormatted}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
