import React, { useState } from 'react';
import { COMPANY_CONFIG } from '../data/companyData';
import { Phone, Mail, MapPin, Clock, Send, AlertCircle, ArrowRight } from 'lucide-react';
import { SuccessCelebration } from './SuccessCelebration';

interface ContactFormProps {
  initialSubject?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectType: 'Prefab Resort',
    location: '',
    requirement: initialSubject || '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const projectTypes = [
    'Prefab Resort',
    'Wooden Cottage / Chalet',
    'Architectural Roofing',
    'Modern Ceiling Systems',
    'Exterior / Interior Cladding',
    'Engineered Flooring',
    'Ply & Calibrated Boards',
    'Consolidated Turnkey Material Package'
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s\-()]{7,20}$/.test(formData.phone.trim())) {
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
    setTimeout(() => {
      const generatedId = `RAV-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(generatedId);
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
    <section id="contact" className="py-24 sm:py-32 bg-[#0E0E0E] text-white border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Large Heading & Contact Information */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#EB3B2C]" />
                <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#EB3B2C] uppercase">
                  DIRECT PROJECT DESK
                </span>
              </div>

              {/* Exact Requested Heading: LET'S BUILD SOMETHING GREAT. */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-['Plus_Jakarta_Sans'] leading-[1.04]">
                LET&apos;S BUILD SOMETHING GREAT.
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed max-w-md">
                Reach out for architectural consultations, prefabricated resort solutions, technical material BOQs, or custom timber engineering specifications.
              </p>
            </div>

            {/* Architectural Contact Info Items */}
            <div className="space-y-4 pt-2">
              <div className="p-5 bg-[#141414] border border-neutral-800 flex items-start gap-4">
                <div className="p-2 bg-neutral-900 border border-neutral-800 text-[#EB3B2C] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#F49A3A] uppercase tracking-wider font-bold">
                    CORPORATE HEADQUARTERS
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    Cement Town, Dehradun - 248001
                  </div>
                  <div className="text-xs text-neutral-400">
                    Uttarakhand, India
                  </div>
                </div>
              </div>

              <div className="p-5 bg-[#141414] border border-neutral-800 flex items-start gap-4">
                <div className="p-2 bg-neutral-900 border border-neutral-800 text-[#F49A3A] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#F49A3A] uppercase tracking-wider font-bold">
                    PHONE &amp; WHATSAPP
                  </div>
                  <a
                    href={`tel:${COMPANY_CONFIG.phone}`}
                    className="text-sm font-bold text-white hover:text-[#EB3B2C] transition-colors block mt-0.5 tabular-nums"
                  >
                    {COMPANY_CONFIG.phoneFormatted}
                  </a>
                  <div className="text-xs text-neutral-400">
                    Direct technical estimation desk
                  </div>
                </div>
              </div>

              <div className="p-5 bg-[#141414] border border-neutral-800 flex items-start gap-4">
                <div className="p-2 bg-neutral-900 border border-neutral-800 text-[#EB3B2C] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#F49A3A] uppercase tracking-wider font-bold">
                    EMAIL INQUIRIES
                  </div>
                  <a
                    href={`mailto:${COMPANY_CONFIG.email}`}
                    className="text-sm font-bold text-white hover:text-[#F49A3A] transition-colors block mt-0.5"
                  >
                    {COMPANY_CONFIG.email}
                  </a>
                  <div className="text-xs text-neutral-400">
                    Response within 4 business hours
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Modern Enquiry Form */}
          <div className="lg:col-span-7 bg-[#141414] p-6 sm:p-10 border border-neutral-800 shadow-2xl relative">
            {isSubmitted ? (
              <SuccessCelebration
                title="Project Enquiry Submitted"
                subtitle={`Your requirement for ${formData.projectType} has been assigned to our Senior Technical Specification Desk. An engineering consultant will connect directly on ${formData.phone || 'your phone number'} within 4 business hours.`}
                referenceId={referenceId || 'RAV-749210'}
                projectType={formData.projectType}
                phone={formData.phone}
                onPrimaryAction={() => {
                  setIsSubmitted(false);
                  setReferenceId('');
                  setFormData({
                    fullName: '',
                    phone: '',
                    email: '',
                    projectType: 'Prefab Resort',
                    location: '',
                    requirement: '',
                    message: ''
                  });
                }}
                primaryActionLabel="Submit Another Inquiry"
                variant="embedded"
              />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="pb-2 border-b border-neutral-800">
                  <span className="text-[11px] font-mono font-bold text-[#F49A3A] uppercase tracking-widest">
                    PROJECT INQUIRY FORM
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-['Plus_Jakarta_Sans'] mt-1">
                    Connect With Our Technical Desk
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-3 bg-[#0C0C0C] border ${
                        errors.fullName ? 'border-red-500' : 'border-neutral-800'
                      } text-white text-sm focus:outline-none focus:border-[#EB3B2C] transition-colors rounded-none`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full px-4 py-3 bg-[#0C0C0C] border ${
                        errors.phone ? 'border-red-500' : 'border-neutral-800'
                      } text-white text-sm focus:outline-none focus:border-[#EB3B2C] transition-colors rounded-none`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@company.com"
                      className={`w-full px-4 py-3 bg-[#0C0C0C] border ${
                        errors.email ? 'border-red-500' : 'border-neutral-800'
                      } text-white text-sm focus:outline-none focus:border-[#EB3B2C] transition-colors rounded-none`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Project Location */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Project Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Mussoorie / Rishikesh / Delhi"
                      className={`w-full px-4 py-3 bg-[#0C0C0C] border ${
                        errors.location ? 'border-red-500' : 'border-neutral-800'
                      } text-white text-sm focus:outline-none focus:border-[#EB3B2C] transition-colors rounded-none`}
                    />
                    {errors.location && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.location}
                      </p>
                    )}
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-[11px] font-mono font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0C0C0C] border border-neutral-800 text-white text-sm focus:outline-none focus:border-[#EB3B2C] transition-colors rounded-none cursor-pointer"
                  >
                    {projectTypes.map((t) => (
                      <option key={t} value={t} className="bg-[#141414] text-white">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Requirement */}
                <div>
                  <label className="block text-[11px] font-mono font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Requirement Summary
                  </label>
                  <input
                    type="text"
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    placeholder="e.g. 8 Wooden Cottages + Shingle Roofing + Louvers"
                    className="w-full px-4 py-3 bg-[#0C0C0C] border border-neutral-800 text-white text-sm focus:outline-none focus:border-[#EB3B2C] transition-colors rounded-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-mono font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Message / Specifications
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe estimated area, timeline, site elevation or custom preferences..."
                    className="w-full px-4 py-3 bg-[#0C0C0C] border border-neutral-800 text-white text-sm focus:outline-none focus:border-[#EB3B2C] transition-colors rounded-none resize-y"
                  />
                </div>

                {/* Exact CTA Button Requested: REQUEST A CALLBACK */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-xs sm:text-sm font-bold tracking-wider text-white uppercase bg-gradient-to-r from-[#EB3B2C] to-[#F49A3A] hover:brightness-110 active:scale-[0.99] transition-all rounded-none shadow-xl cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>DISPATCHING REQUIREMENT...</span>
                    ) : (
                      <>
                        <span>REQUEST A CALLBACK</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-2 text-center text-[11px] text-neutral-500 font-mono">
                  Guaranteed turnaround within 4 business hours • ISO / BIS Material Compliance
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
