import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, AlertCircle, PhoneCall, ShieldCheck } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSubject?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultSubject = ''
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [projectType, setProjectType] = useState('Prefab Resort');
  const [location, setLocation] = useState('');
  const [projectSize, setProjectSize] = useState('');
  const [requirement, setRequirement] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (defaultSubject) {
      setRequirement(defaultSubject);
    }
  }, [defaultSubject]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full Name is required';
    if (!phone.trim()) errs.phone = 'Phone Number is required';
    if (!email.trim()) {
      errs.email = 'Email Address is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      errs.email = 'Enter a valid email';
    }
    if (!location.trim()) errs.location = 'Project Location is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setFullName('');
    setPhone('');
    setEmail('');
    setCompany('');
    setLocation('');
    setProjectSize('');
    setRequirement('');
    setMessage('');
    setErrors({});
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-[#1C1C1C] text-white rounded max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-700 relative">
        {/* Modal Header */}
        <div className="p-6 border-b border-neutral-800 flex items-start justify-between bg-[#141414]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EB3B2C]" />
              <span className="text-[11px] font-bold text-[#F49A3A] uppercase tracking-widest font-mono">
                DIRECT ESTIMATION DESK
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white font-['Plus_Jakarta_Sans'] mt-1">
              Request a Project Quote
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              Turnaround within 4 business hours with certified material pricing.
            </p>
          </div>
          <button
            onClick={resetForm}
            className="p-1.5 rounded bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close Quote Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
                Thank you! Our team will contact you shortly.
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-sm mx-auto leading-relaxed">
                Your material inquiry has been logged. Our engineering lead for {projectType} will connect directly on {phone}.
              </p>
              <div className="pt-4">
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 bg-[#EB3B2C] hover:bg-[#d63426] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    Full Name <span className="text-[#EB3B2C]">*</span>
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your Name"
                    className={`w-full px-3.5 py-2.5 bg-[#111111] border ${
                      errors.fullName ? 'border-[#EB3B2C]' : 'border-neutral-700'
                    } rounded text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#EB3B2C]`}
                  />
                  {errors.fullName && (
                    <span className="text-[10px] text-[#EB3B2C] mt-0.5 block">{errors.fullName}</span>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    Phone Number <span className="text-[#EB3B2C]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765..."
                    className={`w-full px-3.5 py-2.5 bg-[#111111] border ${
                      errors.phone ? 'border-[#EB3B2C]' : 'border-neutral-700'
                    } rounded text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#EB3B2C]`}
                  />
                  {errors.phone && (
                    <span className="text-[10px] text-[#EB3B2C] mt-0.5 block">{errors.phone}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    Email Address <span className="text-[#EB3B2C]">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className={`w-full px-3.5 py-2.5 bg-[#111111] border ${
                      errors.email ? 'border-[#EB3B2C]' : 'border-neutral-700'
                    } rounded text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#EB3B2C]`}
                  />
                  {errors.email && (
                    <span className="text-[10px] text-[#EB3B2C] mt-0.5 block">{errors.email}</span>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    Project Type
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#111111] border border-neutral-700 rounded text-xs text-white focus:outline-none focus:border-[#EB3B2C]"
                  >
                    <option value="Prefab Resort">Prefab Resort</option>
                    <option value="Wooden Cottage">Wooden Cottage</option>
                    <option value="Roofing">Roofing</option>
                    <option value="Ceiling">Ceiling</option>
                    <option value="Cladding">Cladding</option>
                    <option value="Flooring">Flooring</option>
                    <option value="Ply & Boards">Ply &amp; Boards</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    Project Location <span className="text-[#EB3B2C]">*</span>
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="City / State / Region"
                    className={`w-full px-3.5 py-2.5 bg-[#111111] border ${
                      errors.location ? 'border-[#EB3B2C]' : 'border-neutral-700'
                    } rounded text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#EB3B2C]`}
                  />
                  {errors.location && (
                    <span className="text-[10px] text-[#EB3B2C] mt-0.5 block">{errors.location}</span>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    Approx Size / Scope
                  </label>
                  <input
                    type="text"
                    value={projectSize}
                    onChange={(e) => setProjectSize(e.target.value)}
                    placeholder="e.g. 8 Cottages or 10,000 sq.ft"
                    className="w-full px-3.5 py-2.5 bg-[#111111] border border-neutral-700 rounded text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#EB3B2C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                  Specific Material or Design Requirement
                </label>
                <input
                  type="text"
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  placeholder="e.g. Standing Seam Roofing + Thermo-Wood Cladding"
                  className="w-full px-3.5 py-2.5 bg-[#111111] border border-neutral-700 rounded text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#EB3B2C]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                  Additional Notes
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Any drawings, timeline details, or site constraints..."
                  className="w-full px-3.5 py-2.5 bg-[#111111] border border-neutral-700 rounded text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#EB3B2C] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#EB3B2C] hover:bg-[#d63426] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING REQUEST...</span>
                  ) : (
                    <>
                      <span>REQUEST A CALLBACK</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" /> Direct manufacturer quotes
                </span>
                <a
                  href={`tel:${COMPANY_CONFIG.phone}`}
                  className="text-[#F49A3A] hover:underline flex items-center gap-1"
                >
                  <PhoneCall className="w-3 h-3" /> Or call {COMPANY_CONFIG.phoneFormatted}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
