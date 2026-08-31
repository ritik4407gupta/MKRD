import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  Shield,
  FileCheck,
  Building,
  UploadCloud,
  Layers
} from 'lucide-react';
import { COMPANY_DETAILS, SERVICES } from '../../data/mkrdData';

interface ContactViewProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

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
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-blue-50/70 to-white pt-12 pb-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-700">
            <Mail className="w-4 h-4 text-blue-600" />
            <span>DIRECT TECHNICAL TRANSMISSION • IMT MANESAR</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-blue-950 tracking-tight">
            CONTACT <span className="text-blue-600">MKRD ENGINEERS</span>
          </h1>
          <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
            Connect directly with our engineering team at IMT Manesar for rapid CAD feasibility, plastic mould tooling, 3D printing estimates, and software proposals.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Plant Coordinates & Hotlines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
              <div className="space-y-2">
                <span className="text-xs font-mono text-blue-700 font-bold uppercase">REGISTERED INDUSTRIAL FACILITY</span>
                <h3 className="text-2xl font-display font-extrabold text-blue-950">IMT Manesar Hub</h3>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4 hover:border-blue-500/60 hover:bg-blue-50/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase font-semibold">DIRECT TELEPHONE HOTLINE</div>
                    <div className="text-base font-bold text-blue-950 group-hover:text-blue-600 transition-colors">
                      {COMPANY_DETAILS.phoneFormatted}
                    </div>
                    <div className="text-xs text-slate-500 font-mono">Mon – Sat, 09:00 – 19:00 IST</div>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4 hover:border-blue-500/60 hover:bg-blue-50/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase font-semibold">TECHNICAL TRANSMISSION EMAIL</div>
                    <div className="text-base font-bold text-blue-950 group-hover:text-blue-600 transition-colors">
                      {COMPANY_DETAILS.email}
                    </div>
                    <div className="text-xs text-slate-500 font-mono">{COMPANY_DETAILS.secondaryEmail}</div>
                  </div>
                </a>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono text-slate-500 uppercase font-semibold">PHYSICAL PLANT LOCATION</div>
                    <div className="text-xs font-semibold text-slate-800 leading-relaxed">
                      {COMPANY_DETAILS.address}
                    </div>
                    <div className="text-[11px] font-mono text-blue-700 font-bold">
                      GPS: {COMPANY_DETAILS.coordinates.lat}, {COMPANY_DETAILS.coordinates.long}
                    </div>
                  </div>
                </div>
              </div>

              {/* Plant Stats & Response Promise */}
              <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-950">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>GUARANTEED SAME-DAY RESPONSE</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Engineering CAD reviews and initial DFM feedback are dispatched within 4 business hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering RFQ Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-6">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-extrabold text-blue-950">
                  Engineering Transmission Received
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-blue-950">{formData.name}</strong>. Our senior tooling and systems engineers at IMT Manesar are reviewing your technical specifications.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 max-w-md mx-auto text-left space-y-1">
                  <div>TICKET: MKRD-REQ-{Math.floor(100000 + Math.random() * 900000)}</div>
                  <div>FACILITY: Sector-7, IMT Manesar</div>
                  <div className="text-blue-700 font-bold">STATUS: QUEUED FOR FEASIBILITY ANALYSIS</div>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-display font-extrabold text-blue-950">
                    Request Engineering Proposal & CAD Review
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Direct submission to MKRD tooling, fabrication, and software team.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-mono font-semibold text-slate-700">YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-blue-600 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-mono font-semibold text-slate-700">WORK EMAIL *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-blue-600 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-mono font-semibold text-slate-700">PHONE NUMBER *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-blue-600 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-mono font-semibold text-slate-700">COMPANY / ORGANIZATION</label>
                    <input
                      type="text"
                      placeholder="e.g. AeroTech Labs"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-blue-600 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-mono font-semibold text-slate-700">ENGINEERING SERVICE CATEGORY</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-blue-600 focus:bg-white focus:outline-none"
                  >
                    {SERVICES.map(s => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                  </select>
                </div>

                {/* CAD File Upload Dropzone */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-semibold text-slate-700">CAD MODEL / SPECIFICATION FILE:</label>
                  <label className="border-2 border-dashed border-slate-300 hover:border-blue-600 rounded-xl p-5 flex flex-col items-center justify-center cursor-pointer bg-slate-50 hover:bg-blue-50/50 transition-all">
                    <UploadCloud className="w-6 h-6 text-blue-600 mb-1" />
                    <span className="text-xs text-slate-800 font-medium">
                      {fileAttached ? `Attached: ${fileName}` : 'Drag & drop STEP, IGES, STL, DXF, PDF (Max 100MB)'}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono mt-0.5">Secure Transfer with Mutual NDA Protection</span>
                    <input
                      type="file"
                      accept=".step,.stp,.iges,.igs,.stl,.dxf,.pdf,.zip"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-mono font-semibold text-slate-700">TECHNICAL REQUIREMENTS / TOLERANCES</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details on target material, batch quantities, critical dimensions, or digital twin requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-blue-600 focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-600">
                    <input
                      type="checkbox"
                      checked={formData.ndaRequested}
                      onChange={(e) => setFormData({ ...formData, ndaRequested: e.target.checked })}
                      className="rounded text-blue-600 focus:ring-blue-500"
                    />
                    <span>Request Counter-Signed Mutual NDA</span>
                  </label>

                  <button
                    type="submit"
                    className="px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-lg shadow-blue-600/25 active:scale-95 transition-all flex items-center gap-2"
                  >
                    <span>Submit Specification</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
