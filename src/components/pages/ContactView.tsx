import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  UploadCloud,
  ChevronRight,
  Globe2,
  Clock,
  Shield
} from 'lucide-react';
import { COMPANY_DETAILS, SERVICES } from '../../data/mkrdData';
import { MkrdCinematicBackground } from '../MkrdCinematicBackground';

interface ContactViewProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 20 } }
};

export const ContactView: React.FC<ContactViewProps> = ({ onOpenQuoteModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: SERVICES[0].id,
    message: '',
    ndaRequested: false,
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [fileAttached, setFileAttached] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      setFileAttached(true);
    }
  };

  return (
    <div className="relative min-h-[100vh] bg-[#020617] text-slate-300 pt-28 pb-20 overflow-hidden flex flex-col justify-center">
      {/* The Animated Cinematic Background */}
      <MkrdCinematicBackground />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        {/* Cinematic Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Global Engineering Hub
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight">
            INITIATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">TECHNICAL REVIEW</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Connect directly with MKRD's lead engineers in IMT Manesar for feasibility analysis, CAD review, and manufacturing pipeline integration.
          </p>
        </motion.div>

        {/* Top Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: MapPin,
              title: "INDUSTRIAL FACILITY",
              detail1: COMPANY_DETAILS.address,
              detail2: "Haryana, India",
              action: "Get Directions"
            },
            {
              icon: Phone,
              title: "DIRECT HOTLINE",
              detail1: COMPANY_DETAILS.phone,
              detail2: "Available 24/6 for urgent matters",
              action: "Call Now"
            },
            {
              icon: Mail,
              title: "TECHNICAL SUPPORT",
              detail1: COMPANY_DETAILS.email,
              detail2: "CAD & Spec submissions",
              action: "Send Email"
            }
          ].map((card, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/60 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <card.icon className="w-16 h-16 text-blue-500" />
              </div>
              <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-800 text-blue-400 flex items-center justify-center mb-4 shadow-lg">
                <card.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-mono font-bold text-slate-300 mb-2 tracking-widest">{card.title}</h3>
              <p className="text-white font-medium text-sm mb-1">{card.detail1}</p>
              <p className="text-slate-400 text-xs mb-6">{card.detail2}</p>
              <button className="text-blue-400 text-xs font-bold flex items-center gap-1 group-hover:text-blue-300 transition-colors">
                {card.action} <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Engineering Request Form */}
        <motion.div variants={itemVariants} className="bg-slate-900/60 backdrop-blur-2xl border border-slate-700/60 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle glow behind form */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

          {submitted ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-16 relative z-10"
            >
              <div className="w-20 h-20 rounded-full bg-emerald-950/50 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-900/20 mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-display font-black text-white mb-3">Specification Received</h2>
              <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed mb-8">
                Thank you, <strong className="text-white">{formData.name}</strong>. Our senior tooling engineers at MKRD are analyzing your requirements. We will contact you shortly with a technical roadmap.
              </p>
              <div className="inline-flex flex-col p-5 rounded-2xl bg-slate-950/50 border border-slate-800 text-xs font-mono text-slate-400 text-left space-y-2 mb-8">
                <div className="flex justify-between gap-8"><span>TICKET:</span> <span className="text-white">MKRD-REQ-{Math.floor(100000 + Math.random() * 900000)}</span></div>
                <div className="flex justify-between gap-8"><span>FACILITY:</span> <span className="text-white">IMT Manesar Lab</span></div>
                <div className="flex justify-between gap-8"><span>STATUS:</span> <span className="text-emerald-400 font-bold">QUEUED FOR FEASIBILITY</span></div>
              </div>
              <div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-900/20 transition-all"
                >
                  Submit Another Project
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-6">
                <div>
                  <h3 className="text-2xl font-display font-extrabold text-white">Project Blueprint Submission</h3>
                  <p className="text-xs font-mono text-slate-400 mt-2 uppercase tracking-wide">Secure encrypted portal</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono bg-slate-950/50 px-3 py-1.5 rounded-lg border border-slate-800">
                  <Shield className="w-3.5 h-3.5 text-blue-400" />
                  NDA Protected
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Lead Engineer Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-slate-700/80 text-white text-sm placeholder:text-slate-600 focus:border-blue-500 focus:bg-slate-900/80 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Corporate Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-slate-700/80 text-white text-sm placeholder:text-slate-600 focus:border-blue-500 focus:bg-slate-900/80 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Direct Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-slate-700/80 text-white text-sm placeholder:text-slate-600 focus:border-blue-500 focus:bg-slate-900/80 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Organization</label>
                  <input
                    type="text"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-slate-700/80 text-white text-sm placeholder:text-slate-600 focus:border-blue-500 focus:bg-slate-900/80 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Target Service Domain</label>
                <div className="relative">
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-slate-700/80 text-white text-sm focus:border-blue-500 focus:bg-slate-900/80 focus:ring-1 focus:ring-blue-500 transition-all outline-none appearance-none"
                  >
                    {SERVICES.map(s => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <ChevronRight className="w-4 h-4 text-slate-500 rotate-90" />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Technical Specifications (Optional)</label>
                <label className="border-2 border-dashed border-slate-700 hover:border-blue-500/50 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer bg-slate-950/30 hover:bg-slate-900/50 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-slate-800 group-hover:bg-blue-900/30 flex items-center justify-center mb-3 transition-colors">
                    <UploadCloud className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <span className="text-sm text-slate-200 font-bold mb-1">
                    {fileAttached ? `Attached: ${fileName}` : 'Upload CAD Models & Blueprints'}
                  </span>
                  <span className="text-xs text-slate-500">
                    Supports STEP, IGES, STL, DXF, PDF (Max 100MB)
                  </span>
                  <input
                    type="file"
                    accept=".step,.stp,.iges,.igs,.stl,.dxf,.pdf,.zip"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Project Scope & Tolerances</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe material requirements, batch sizes, timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-slate-700/80 text-white text-sm placeholder:text-slate-600 focus:border-blue-500 focus:bg-slate-900/80 focus:ring-1 focus:ring-blue-500 transition-all outline-none resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-slate-800">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={formData.ndaRequested}
                      onChange={(e) => setFormData({ ...formData, ndaRequested: e.target.checked })}
                      className="peer appearance-none w-5 h-5 border-2 border-slate-600 rounded bg-slate-900 checked:bg-blue-600 checked:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all cursor-pointer"
                    />
                    <CheckCircle2 className="w-3.5 h-3.5 text-white absolute opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors font-medium">Require Mutual NDA</span>
                    <span className="text-[10px] text-slate-500">We will send a counter-signed NDA before reviewing files.</span>
                  </div>
                </label>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-blue-900/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <span>Transmit to Engineering</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};
