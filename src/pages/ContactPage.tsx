import React, { useState } from 'react';
import { PageView } from '../types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { AabestLogo } from '../components/AabestLogo';

interface ContactPageProps {
  onNavigate: (page: PageView) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    category: 'general',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header */}
      <div className="bg-[#0B132B] text-white py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <AabestLogo variant="dark-bg" className="h-[68px] sm:h-[82px] w-auto object-contain" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400 font-bold block">
              Direct Communication
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight">
              Contact Operations Desk
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Connect with our corporate office, logistics dispatch desk, and heavy transport team in Ghana.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Dedicated Tema Harbour Callout Strip */}
        <div className="p-8 border border-amber-400/40 bg-amber-500/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-amber-700 font-bold block">
              Notice to Project Applicants
            </span>
            <h3 className="font-display font-bold text-lg text-slate-950">
              Are you registering for the Tema Port Container Evacuation Operations?
            </h3>
            <p className="text-xs text-slate-600 max-w-2xl">
              Please avoid submitting fleet registrations through this general contact form. Use the dedicated Tema Harbour Onboarding Portal for structured intake.
            </p>
          </div>

          <button
            onClick={() => onNavigate('registration-portal')}
            className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-[0.14em] rounded-none transition-all whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>Open Dedicated Portal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Contact Information & Inquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <AabestLogo variant="light-bg" className="h-[61px] w-auto object-contain" />
              <span className="font-mono text-xs text-amber-700 font-bold block">
                01 / BASE LOCATIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950">
                Operations &amp; Dispatch Facilities
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our central logistics operations are situated near key maritime and transit arteries in Tema and Greater Accra.
              </p>
            </div>

            <div className="space-y-6 pt-2 text-xs text-slate-700 border-t border-slate-200">
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block font-bold">
                  Operating Base
                </span>
                <span className="text-sm font-bold text-slate-900 block">Tema Port Corridor Base</span>
                <p className="text-slate-600">
                  Heavy Industrial Area / Port Transit Corridor, Community 1, Tema, Greater Accra, Republic of Ghana
                </p>
              </div>

              <div className="space-y-1 border-t border-slate-100 pt-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block font-bold">
                  Telephone &amp; WhatsApp Line
                </span>
                <div className="flex items-center gap-3 pt-0.5">
                  <a href="tel:0597684860" className="font-mono text-xs font-semibold text-slate-900 hover:text-navy-800 transition-colors">
                    0597684860
                  </a>
                  <span className="text-slate-300 text-xs">·</span>
                  <a
                    href="https://wa.me/233597684860"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-sans font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    Direct WhatsApp
                  </a>
                </div>
              </div>

              <div className="space-y-1 border-t border-slate-100 pt-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block font-bold">
                  Electronic Mail
                </span>
                <p className="font-mono text-xs text-slate-900">
                  info@aabestservices.com · operations@aabestservices.com
                </p>
              </div>

              <div className="space-y-1 border-t border-slate-100 pt-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block font-bold">
                  Operating Hours
                </span>
                <p className="text-slate-600">
                  Administrative Desk: Monday – Friday, 8:00 AM – 5:30 PM GMT<br />
                  Port haulage &amp; recovery dispatch: 24/7 on rotation
                </p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-12 border border-slate-200 shadow-sm">
              <h3 className="font-display font-bold text-xl text-slate-950 mb-1">
                Send an Inquiry or Quote Request
              </h3>
              <p className="text-xs text-slate-500 mb-8">
                Fill in the details below and an Aabest Services officer will respond promptly.
              </p>

              {formSubmitted ? (
                <div className="p-8 bg-slate-50 border border-slate-200 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-base text-slate-950">
                    Inquiry Recorded (Demonstration Interface)
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.fullName}. In this frontend demonstration, your inquiry has been logged locally.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ fullName: '', email: '', phone: '', subject: '', category: 'general', message: '' });
                    }}
                    className="text-xs font-bold text-slate-900 underline underline-offset-4 hover:text-amber-600 pt-2 block mx-auto"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-bold text-slate-900 mb-2 uppercase tracking-wider text-[10px]">
                        Full Name / Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Samuel Annan"
                        className="w-full px-4 py-3 border border-slate-300 focus:border-slate-950 focus:outline-none rounded-none text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-900 mb-2 uppercase tracking-wider text-[10px]">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0597684860"
                        className="w-full px-4 py-3 border border-slate-300 focus:border-slate-950 focus:outline-none rounded-none text-xs font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-bold text-slate-900 mb-2 uppercase tracking-wider text-[10px]">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 border border-slate-300 focus:border-slate-950 focus:outline-none rounded-none text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-900 mb-2 uppercase tracking-wider text-[10px]">
                        Service Category *
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 focus:border-slate-950 focus:outline-none rounded-none text-xs bg-white"
                      >
                        <option value="general">General Commercial Inquiry</option>
                        <option value="tow-truck">Tow Truck &amp; Recovery</option>
                        <option value="container-truck">Container Truck Services</option>
                        <option value="lowbed-truck">Lowbed Machinery Transport</option>
                        <option value="tipper-truck">Tipper Truck Haulage</option>
                        <option value="tema-harbour">Tema Harbour Project Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-900 mb-2 uppercase tracking-wider text-[10px]">
                      Message / Operational Scope *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify routes, equipment specifications, cargo dimensions, scheduling, or technical requirements..."
                      className="w-full px-4 py-3 border border-slate-300 focus:border-slate-950 focus:outline-none rounded-none text-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-[0.16em] rounded-none transition-all"
                  >
                    Transmit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
