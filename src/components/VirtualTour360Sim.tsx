import React, { useState, useRef, useEffect } from 'react';
import { Compass, Maximize2, ExternalLink, MapPin, Eye, Info, Volume2, VolumeX, Sparkles, ChevronRight } from 'lucide-react';
import tourImg from '../assets/images/virtual_tour_scanning_1787995529203.jpg';
import mouldImg from '../assets/images/mould_die_engineering_1787995513683.jpg';
import printerImg from '../assets/images/printer_additive_fab_1787995499367.jpg';

interface TourNode {
  id: string;
  name: string;
  category: string;
  bgImage: string;
  panOffset: number;
  description: string;
  hotspots: {
    x: number; // percentage
    y: number;
    title: string;
    description: string;
    specs: string;
  }[];
}

const TOUR_NODES: TourNode[] = [
  {
    id: 'sdms-campus',
    name: 'SDMS Institutional Campus & Tech Hub',
    category: 'Featured Client Project (sdms.edu.in)',
    bgImage: tourImg,
    panOffset: 120,
    description: 'High-definition 12K spatial scan of the SDMS educational facility with interactive campus navigation nodes.',
    hotspots: [
      { x: 32, y: 44, title: 'LiDAR Spatial Scanner', description: 'Precision terrestrial LiDAR point cloud acquisition array with 12K HDR imagery.', specs: 'Accuracy: ±2mm @ 50m' },
      { x: 68, y: 52, title: 'Central Innovation Atrium', description: 'Panoramic connection node linking engineering wings and computer science laboratories.', specs: 'Node ID: #SDMS-N04' },
      { x: 84, y: 38, title: 'Admissions & Digital Portal', description: 'Direct integrated bridge to SDMS admission databases and course catalogs.', specs: 'Cloud API Connected' }
    ]
  },
  {
    id: 'mkrd-additive-cell',
    name: 'MKRD IMT Manesar 3D Additive Lab',
    category: 'In-House Facility',
    bgImage: printerImg,
    panOffset: 45,
    description: 'High-temperature industrial additive manufacturing cell in Sector-7 IMT Manesar, Haryana.',
    hotspots: [
      { x: 28, y: 50, title: 'Industrial Dual-Extrusion 3D Cell', description: '450°C high-temperature heated chamber capable of continuous PEEK and Carbon-Fiber.', specs: 'Build Volume: 450x450x500mm' },
      { x: 55, y: 40, title: 'SLA Photopolymer Workstation', description: 'Sub-micron resin curing vat for rapid micro-prototypes and medical enclosures.', specs: '25μm Z-Layer' },
      { x: 78, y: 62, title: 'Nitrogen Curing & Annealing', description: 'Thermal post-treatment oven ensuring zero internal shear stresses.', specs: 'Temp: 300°C Max' }
    ]
  },
  {
    id: 'mkrd-tooling-bay',
    name: '5-Axis CNC & Precision Mould Tooling Bay',
    category: 'Mould & Tooling Facility',
    bgImage: mouldImg,
    panOffset: 200,
    description: 'Ultra-precision mould design and high-speed CNC milling facility with Zeiss CMM metrology inspection.',
    hotspots: [
      { x: 40, y: 48, title: '5-Axis High-Speed VMC Spindle', description: '24,000 RPM high-torque spindle cutting hardened H13/P20 tool steel cavities.', specs: 'Tolerance: ±0.003mm' },
      { x: 72, y: 42, title: 'Zeiss Metrology CMM Arm', description: 'Contact tactile probe verifying GD&T dimensional accuracy and surface finishes.', specs: 'Repeatability: 1 Micron' }
    ]
  }
];

export const VirtualTour360Sim: React.FC = () => {
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(0);
  const [panX, setPanX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [activeHotspot, setActiveHotspot] = useState<TourNode['hotspots'][0] | null>(null);
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const activeNode = TOUR_NODES[activeNodeIndex];
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse & touch drag for 360 panorama simulation
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX - panX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const newPan = e.clientX - startX;
    setPanX(newPan);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setStartX(e.touches[0].clientX - panX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    const newPan = e.touches[0].clientX - startX;
    setPanX(newPan);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Calculate wrapped normalized horizontal background percentage
  const bgPercentage = ((panX % 1000) / 1000) * 100;

  return (
    <div id="virtual-tour-studio" className="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl">
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between px-5 py-3.5 bg-slate-50 border-b border-slate-200 gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
            <Compass className="w-4 h-4 animate-spin" style={{ animationDuration: '20s' }} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-blue-700 uppercase">360° SPATIAL DIGITAL TWIN</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono font-bold">
                12K HDR ENGINE
              </span>
            </div>
            <p className="text-[12px] text-slate-600">{activeNode.name}</p>
          </div>
        </div>

        {/* Live Project Action Buttons */}
        <div className="flex items-center gap-2">
          <a
            id="btn-live-sdms-tour"
            href="https://virtual-tour.sdms.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm shadow-blue-600/25"
          >
            <span>Launch Live SDMS Tour</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main 360 Spatial Viewport */}
      <div 
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full h-[380px] sm:h-[480px] overflow-hidden cursor-grab active:cursor-grabbing select-none"
      >
        {/* Panoramic Background Image Layer with smooth continuous panning */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-75"
          style={{
            backgroundImage: `url(${activeNode.bgImage})`,
            backgroundPosition: `${bgPercentage}% center`,
            transform: 'scale(1.05)',
            filter: 'brightness(0.95) contrast(1.05)'
          }}
        />

        {/* Grid & Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20 pointer-events-none" />

        {/* Compass / Orientation Indicator HUD */}
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-mono font-bold text-blue-900 shadow-md pointer-events-none">
          <Compass className="w-3.5 h-3.5 text-blue-600" />
          <span>HEADING: {Math.abs(Math.round(bgPercentage * 3.6)) % 360}° N</span>
        </div>

        {/* Drag Hint */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 text-[11px] font-mono text-slate-700 shadow-md pointer-events-none hidden sm:flex items-center gap-1.5">
          <Eye className="w-3.5 h-3.5 text-blue-600" />
          <span>Click & Drag to Look Around 360°</span>
        </div>

        {/* Interactive Hotspots within the node */}
        {activeNode.hotspots.map((hs, index) => {
          const isCurrentActive = activeHotspot?.title === hs.title;

          return (
            <div
              key={index}
              style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <button
                id={`hotspot-${activeNode.id}-${index}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveHotspot(isCurrentActive ? null : hs);
                }}
                className="relative group focus:outline-none"
              >
                {/* Pulsing ring */}
                <span className="absolute -inset-2 rounded-full bg-blue-400/40 animate-ping" />
                <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/50 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-4 h-4" />
                </span>
                
                {/* Tooltip Tag */}
                <span className="absolute left-10 top-1/2 -translate-y-1/2 whitespace-nowrap bg-blue-950/90 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-md border border-blue-800 shadow-xl opacity-90 group-hover:opacity-100 transition-opacity">
                  {hs.title}
                </span>
              </button>
            </div>
          );
        })}

        {/* Active Hotspot Modal Card */}
        {activeHotspot && (
          <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-80 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl p-4 text-xs shadow-2xl z-20 animate-in fade-in slide-in-from-bottom-3 duration-200">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="font-bold text-blue-950 text-sm flex items-center gap-1.5">
                <Info className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{activeHotspot.title}</span>
              </div>
              <button
                onClick={() => setActiveHotspot(null)}
                className="text-slate-500 hover:text-slate-900 text-xs px-1.5 py-0.5 rounded bg-slate-100"
              >
                ✕
              </button>
            </div>
            <p className="text-slate-700 leading-relaxed mb-2.5">{activeHotspot.description}</p>
            <div className="p-2 rounded-lg bg-blue-50 border border-blue-200 font-mono text-[11px] text-blue-700 font-bold">
              {activeHotspot.specs}
            </div>
          </div>
        )}
      </div>

      {/* Node Switcher & Navigation Footer */}
      <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Node Tabs */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {TOUR_NODES.map((node, idx) => (
            <button
              key={node.id}
              id={`btn-node-${node.id}`}
              onClick={() => {
                setActiveNodeIndex(idx);
                setActiveHotspot(null);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                activeNodeIndex === idx
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                  : 'bg-white border border-slate-200 text-slate-700 hover:text-blue-950 hover:bg-slate-100'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-blue-500" />
              <span>{node.name}</span>
            </button>
          ))}
        </div>

        {/* Reference Attribution */}
        <div className="text-[11px] font-mono text-slate-600 flex items-center gap-2">
          <span>Official Project Links:</span>
          <a
            href="https://sdms.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-bold hover:underline flex items-center gap-1"
          >
            sdms.edu.in
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
