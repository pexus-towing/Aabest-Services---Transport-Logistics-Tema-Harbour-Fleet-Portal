import React, { useState } from 'react';
import { PageView } from '../types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { AabestLogo } from './AabestLogo';

interface ContactSectionProps {
  onNavigate: (page: PageView) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: 'general',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dedicated Tema Harbour Callout Strip */}
        <div className="mb-16 p-8 border border-amber-400/40 bg-amber-500/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-amber-700 font-bold block">
              Notice to Project Applicants
            </span>
            <h3 className="font-display font-bold text-lg text-slate-950">
              Are you registering for the Tema Port Container Evacuation Operations?
            </h3>
            <p className="text-xs text-slate-600 max-w-2xl">
              For fleet asset onboarding, driver cataloguing, and logbook submission, please utilize the specialized Tema Harbour Registration Portal rather than standard corporate inquiries.
            </p>
          </div>
          <button
            onClick={() => onNavigate('registration-portal')}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-[0.14em] rounded-none transition-all whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>Access Registration Portal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <AabestLogo variant="light-bg" className="h-[61px] sm:h-[68px] w-auto object-contain" />
              <div className="text-xs uppercase tracking-[0.2em] text-amber-700 font-bold">
                05 · Direct Communication
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-950 tracking-tight leading-[1.2]">
                Contact Aabest Services
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Connect with our commercial desk for transport quotes, machinery mobilization schedules, or container evacuation inquiries in Ghana.
              </p>
            </div>

            <div className="space-y-6 pt-2 text-xs text-slate-700 border-t border-slate-200">
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block font-bold">
                  Operating Location
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
                  Port haulage &amp; emergency vehicle recovery: 24/7 on rotation
                </p>
              </div>
            </div>
          </div>

          {/* Inquiry Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-12 border border-slate-200 shadow-sm">
              <h3 className="font-display font-bold text-xl text-slate-950 mb-1">
                Service Inquiry Form
              </h3>
              <p className="text-xs text-slate-500 mb-8">
                Please complete your details below. An Aabest Services representative will respond within one business day.
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
                    Thank you, {formData.fullName}. In this frontend demonstration, your inquiry has been logged locally. When live backend systems are integrated, our team will receive your transmission directly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ fullName: '', email: '', phone: '', serviceInterest: 'general', message: '' });
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
                        Full Name / Enterprise *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Samuel Annan"
                        className="w-full px-4 py-3 border border-slate-300 focus:border-slate-950 focus:outline-none rounded-none text-xs transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-900 mb-2 uppercase tracking-wider text-[10px]">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0597684860"
                        className="w-full px-4 py-3 border border-slate-300 focus:border-slate-950 focus:outline-none rounded-none text-xs transition-colors"
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
                        className="w-full px-4 py-3 border border-slate-300 focus:border-slate-950 focus:outline-none rounded-none text-xs transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-900 mb-2 uppercase tracking-wider text-[10px]">
                        Service Focus *
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 focus:border-slate-950 focus:outline-none rounded-none text-xs bg-white transition-colors"
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
                      Operational Scope &amp; Requirements *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify routes, equipment specifications, cargo type, timeline, or fleet requirements..."
                      className="w-full px-4 py-3 border border-slate-300 focus:border-slate-950 focus:outline-none rounded-none text-xs transition-colors"
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
    </section>
  );
};
