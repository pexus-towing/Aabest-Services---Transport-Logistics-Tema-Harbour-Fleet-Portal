import React from 'react';
import { PageView } from '../types';
import { ArrowRight, ArrowUpRight, Shield } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: PageView) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative bg-[#070D1E] text-white border-b border-white/10 overflow-hidden">
      {/* Background Photography with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.savedly.net/xbbrj6hb"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== window.location.origin + '/images/fleet/xbbrj6hb.jpg') {
              target.src = '/images/fleet/xbbrj6hb.jpg';
            }
          }}
          alt="Aabest Services Tema Harbour Logistics Terminal operations with container tractor heads"
          className="w-full h-full object-cover object-center opacity-25 filter contrast-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D1E] via-[#070D1E]/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-24">
        
        {/* Main Hero Header */}
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-amber-400 font-medium">
            <span className="w-1.5 h-1.5 bg-amber-400" />
            <span>Transport · Container Haulage · Heavy Fleet Logistics</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.1] max-w-3xl text-balance">
            Reliable Transport &amp; Heavy Logistics in Ghana.
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            Aabest Services delivers dependable transportation and heavy haulage solutions designed to support businesses, contractors, and shipping operators across Ghana.
          </p>

          {/* Understated Primary CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-[0.14em] rounded-none transition-all flex items-center gap-2.5 shadow-sm"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/40 font-semibold text-xs uppercase tracking-[0.14em] rounded-none transition-all flex items-center gap-2"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Integrated Tema Harbour Project Architectural Notice */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="bg-[#0B132B]/90 border border-amber-400/30 p-6 sm:p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-400 border border-amber-400/40 px-2 py-0.5">
                    Official Project Announcement
                  </span>
                  <span className="text-xs text-slate-400 hidden sm:inline">Tema Port Evacuation Operations</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-display font-bold text-white leading-snug">
                  Container Truck Owners &amp; Drivers Wanted – Tema Harbour Evacuation Operations
                </h2>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Are you a container truck owner, transport company or qualified container truck driver? Register your details and fleet information for consideration in the Tema Harbour container evacuation onboarding process.
                </p>

                <p className="text-[11px] text-slate-400 leading-normal">
                  * Notice: Registration is for fleet intake, asset vetting, and driver cataloguing. It does not automatically guarantee employment, contracts, deployment, or GPHA clearance.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <button
                  onClick={() => onNavigate('registration-portal')}
                  className="w-full py-4 px-6 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm uppercase tracking-[0.14em] rounded-none transition-all flex items-center justify-center gap-2 text-center shadow-md hover:shadow-lg"
                >
                  <span>START REGISTRATION</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-center lg:text-left text-xs text-slate-300">
                  <span>Questions? Call / WhatsApp: </span>
                  <a href="tel:0597684860" className="text-amber-400 font-bold hover:underline">0597684860</a>
                </div>

                <button
                  onClick={() => onNavigate('project-info')}
                  className="w-full py-2.5 px-4 bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs uppercase tracking-[0.12em] font-medium rounded-none transition-all text-center"
                >
                  View Route &amp; Operational Terms
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
