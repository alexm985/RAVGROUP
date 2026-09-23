import React, { useState } from 'react';
import { COMPANY_CONFIG } from '../data/companyData';
import { Phone, Mail, MapPin, Clock, CheckCircle, Send, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  initialSubject?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    projectType: 'Prefab Resort',
    location: '',
    requirement: initialSubject || '',
    projectSize: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    'Prefab Resort',
    'Wooden Cottage',
    'Roofing',
    'Ceiling',
    'Cladding',
    'Flooring',
    'Ply & Boards',
    'Other'
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^[0-9+-\s()]{8,16}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Project location is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate swift network verification
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 650);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#111111] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Details & Direct Reassurance */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[3px] bg-[#EB3B2C]" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#EB3B2C] uppercase font-['Plus_Jakarta_Sans']">
                  PROJECT ENQUIRY
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-['Plus_Jakarta_Sans'] text-white">
                Let&apos;s Build Something Great.
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Connect with our technical advisory team. Whether you have architectural drawings ready or need initial feasibility estimates, we will guide your specification.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2 text-sm">
              <div className="flex items-start gap-4 p-4 rounded bg-[#1A1A1A] border border-neutral-800">
                <div className="p-2.5 rounded bg-[#111111] text-[#EB3B2C] shrink-0 border border-neutral-800">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                    Direct Phone Support
                  </div>
                  <a
                    href={`tel:${COMPANY_CONFIG.phone}`}
                    className="text-base font-bold text-white hover:text-[#F49A3A] transition-colors tabular-nums mt-0.5 inline-block"
                  >
                    {COMPANY_CONFIG.phoneFormatted}
                  </a>
                  <div className="text-xs text-neutral-500 mt-0.5">Direct line to Project Sales Desk</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded bg-[#1A1A1A] border border-neutral-800">
                <div className="p-2.5 rounded bg-[#111111] text-[#F49A3A] shrink-0 border border-neutral-800">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                    Official Email
                  </div>
                  <a
                    href={`mailto:${COMPANY_CONFIG.email}`}
                    className="text-base font-bold text-white hover:text-[#F49A3A] transition-colors mt-0.5 inline-block"
                  >
                    {COMPANY_CONFIG.email}
                  </a>
                  <div className="text-xs text-neutral-500 mt-0.5">Send architectural drawings & BOQs</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded bg-[#1A1A1A] border border-neutral-800">
                <div className="p-2.5 rounded bg-[#111111] text-neutral-400 shrink-0 border border-neutral-800">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                    Corporate Office
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-300 mt-1 leading-relaxed">
                    {COMPANY_CONFIG.address}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded bg-[#161616] text-xs text-neutral-400">
                <Clock className="w-4 h-4 text-[#F49A3A] shrink-0" />
                <span>{COMPANY_CONFIG.operatingHours}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="lg:col-span-7 bg-[#1A1A1A] p-6 sm:p-10 rounded border border-neutral-800 shadow-2xl">
            {isSubmitted ? (
              <div className="py-16 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
                  Thank you! Our team will contact you shortly.
                </h3>
                <p className="text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
                  Your project enquiry has been logged with reference number{' '}
                  <span className="font-mono text-[#F49A3A] font-bold">
                    RAV-{Math.floor(100000 + Math.random() * 900000)}
                  </span>. A senior material specialist will review your requirements and reach out within 4 business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        company: '',
                        projectType: 'Prefab Resort',
                        location: '',
                        requirement: '',
                        projectSize: '',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 text-xs font-bold text-neutral-300 hover:text-white uppercase bg-neutral-800 hover:bg-neutral-700 rounded transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                      Full Name <span className="text-[#EB3B2C]">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Vikram Sharma"
                      className={`w-full px-4 py-3 bg-[#111111] border ${
                        errors.fullName ? 'border-[#EB3B2C]' : 'border-neutral-700 focus:border-[#EB3B2C]'
                      } rounded text-sm text-white placeholder:text-neutral-500 focus:outline-none transition-colors`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-[#EB3B2C] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                      Phone Number <span className="text-[#EB3B2C]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 00000"
                      className={`w-full px-4 py-3 bg-[#111111] border ${
                        errors.phone ? 'border-[#EB3B2C]' : 'border-neutral-700 focus:border-[#EB3B2C]'
                      } rounded text-sm text-white placeholder:text-neutral-500 focus:outline-none transition-colors tabular-nums`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-[#EB3B2C] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                      Email Address <span className="text-[#EB3B2C]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. vikram@archstudio.in"
                      className={`w-full px-4 py-3 bg-[#111111] border ${
                        errors.email ? 'border-[#EB3B2C]' : 'border-neutral-700 focus:border-[#EB3B2C]'
                      } rounded text-sm text-white placeholder:text-neutral-500 focus:outline-none transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-[#EB3B2C] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Company / Organization */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Alpine Resorts Ltd."
                      className="w-full px-4 py-3 bg-[#111111] border border-neutral-700 focus:border-[#EB3B2C] rounded text-sm text-white placeholder:text-neutral-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Project Type Dropdown */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                      Project Type <span className="text-[#EB3B2C]">*</span>
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#111111] border border-neutral-700 focus:border-[#EB3B2C] rounded text-sm text-white focus:outline-none transition-colors cursor-pointer"
                    >
                      {projectTypes.map((t) => (
                        <option key={t} value={t} className="bg-[#111111] text-white">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Location */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                      Project Location <span className="text-[#EB3B2C]">*</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Manali, Himachal Pradesh"
                      className={`w-full px-4 py-3 bg-[#111111] border ${
                        errors.location ? 'border-[#EB3B2C]' : 'border-neutral-700 focus:border-[#EB3B2C]'
                      } rounded text-sm text-white placeholder:text-neutral-500 focus:outline-none transition-colors`}
                    />
                    {errors.location && (
                      <p className="text-[11px] text-[#EB3B2C] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.location}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Requirement Subject */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                      Requirement Focus
                    </label>
                    <input
                      type="text"
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleChange}
                      placeholder="e.g. 10 Wooden Cottages + Standing Seam"
                      className="w-full px-4 py-3 bg-[#111111] border border-neutral-700 focus:border-[#EB3B2C] rounded text-sm text-white placeholder:text-neutral-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Approximate Project Size */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                      Approximate Project Size
                    </label>
                    <input
                      type="text"
                      name="projectSize"
                      value={formData.projectSize}
                      onChange={handleChange}
                      placeholder="e.g. 15,000 sq.ft / 12 Units"
                      className="w-full px-4 py-3 bg-[#111111] border border-neutral-700 focus:border-[#EB3B2C] rounded text-sm text-white placeholder:text-neutral-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                    Message / Additional Notes
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your timeline, design specifications, or questions..."
                    className="w-full px-4 py-3 bg-[#111111] border border-neutral-700 focus:border-[#EB3B2C] rounded text-sm text-white placeholder:text-neutral-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 text-sm font-bold tracking-wider uppercase text-white bg-[#EB3B2C] hover:bg-[#d63426] active:scale-[0.99] rounded transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        PROCESSING ENQUIRY...
                      </span>
                    ) : (
                      <>
                        <span>REQUEST A CALLBACK</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-neutral-500 mt-2.5">
                    Your details are strictly confidential under RAVGROUP privacy terms.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
