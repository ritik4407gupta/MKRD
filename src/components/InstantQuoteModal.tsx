import React, { useState } from 'react';
import { X, Sparkles, UploadCloud, CheckCircle2, Calculator, ShieldCheck, Clock, FileText, Phone } from 'lucide-react';
import { SERVICES, MATERIALS_DB, COMPANY_DETAILS } from '../data/mkrdData';
import confetti from 'canvas-confetti';

interface InstantQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const InstantQuoteModal: React.FC<InstantQuoteModalProps> = ({
  isOpen,
  onClose,
  initialServiceId
}) => {
  const [serviceId, setServiceId] = useState<string>(initialServiceId || SERVICES[0].id);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [material, setMaterial] = useState<string>('carbon-peek');
  const [quantity, setQuantity] = useState<number>(1);
  const [timeline, setTimeline] = useState<string>('standard');
  const [description, setDescription] = useState<string>('');
  const [cadFileUploaded, setCadFileUploaded] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const selectedService = SERVICES.find(s => s.id === serviceId) || SERVICES[0];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      setCadFileUploaded(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-blue-950/20 p-6 sm:p-8 relative">
        {/* Close Button */}
        <button
          id="btn-close-quote-modal"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-display font-extrabold text-blue-950">
              Engineering Inquiry Received
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-blue-950">{name}</strong>. Our senior tooling & engineering team at IMT Manesar is reviewing your specifications for <strong className="text-blue-600">{selectedService.title}</strong>.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 max-w-md mx-auto text-left space-y-1">
              <div>DISPATCH LOCATION: {COMPANY_DETAILS.address}</div>
              <div>CONTACT PHONE: {COMPANY_DETAILS.phoneFormatted}</div>
              <div className="text-blue-700 font-bold">TARGET RESPONSE: Within 4 Business Hours</div>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/25"
            >
              Back to Site
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-700">
                <Calculator className="w-3.5 h-3.5 text-blue-600" />
                <span>RAPID FEASIBILITY & ESTIMATE ENGINE</span>
              </div>
              <h3 className="text-2xl font-display font-extrabold text-blue-950 mt-1">
                Request Engineering Proposal
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Upload CAD files (STEP, IGES, STL, DXF) or specify software/tour requirements for same-day estimation.
              </p>
            </div>

            {/* Service Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-mono font-semibold text-slate-700">SELECT ENGINEERING SERVICE:</label>
              <select
                id="select-service-quote"
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-blue-600 focus:bg-white focus:outline-none"
              >
                {SERVICES.map(s => (
                  <option key={s.id} value={s.id}>{s.title}</option>
                ))}
              </select>
            </div>

            {/* Material & Quantity if Additive/Engineering */}
            {(selectedService.category === 'additive' || selectedService.category === 'engineering') && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 mb-1.5">PREFERRED MATERIAL:</label>
                  <select
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-blue-600 focus:bg-white focus:outline-none"
                  >
                    {MATERIALS_DB.map(m => (
                      <option key={m.id} value={m.id}>{m.name} ({m.costTier})</option>
                    ))}
                    <option value="custom">Other / Advise Best Material</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 mb-1.5">UNITS / QUANTITY:</label>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full px-4 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-blue-600 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* CAD File Upload Dropzone */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono font-semibold text-slate-700">CAD MODEL / SPECIFICATION DOCUMENT:</label>
              <label className="border-2 border-dashed border-slate-300 hover:border-blue-600 rounded-xl p-5 flex flex-col items-center justify-center cursor-pointer bg-slate-50 hover:bg-blue-50/50 transition-all">
                <UploadCloud className="w-6 h-6 text-blue-600 mb-1" />
                <span className="text-xs text-slate-800 font-medium">
                  {cadFileUploaded ? `Attached: ${fileName}` : 'Drag & drop STEP, STL, DXF, PDF or click to browse'}
                </span>
                <span className="text-[10px] text-slate-500 font-mono mt-0.5">Max 100MB • Secure NDA Protected</span>
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* User Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">YOUR NAME *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-blue-600 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">WORK EMAIL *</label>
                <input
                  type="email"
                  required
                  placeholder="john@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-blue-600 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">PHONE NUMBER *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-blue-600 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">COMPANY / ORGANIZATION</label>
                <input
                  type="text"
                  placeholder="e.g. AeroTech Labs"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-blue-600 focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">PROJECT SCOPE / TOLERANCE REQUIREMENTS</label>
              <textarea
                rows={3}
                placeholder="Describe critical dimensions, operating environment, target timeline, or software requirements..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-blue-600 focus:bg-white focus:outline-none"
              />
            </div>

            {/* Submit Bar */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-200">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>NDA & Confidentiality Guaranteed</span>
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/25 active:scale-95 transition-all"
              >
                Submit for Instant Review
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
