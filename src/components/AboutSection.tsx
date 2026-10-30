import React from 'react';
import { PageView } from '../types';
import { ArrowRight } from 'lucide-react';
import { AabestLogo } from './AabestLogo';

interface AboutSectionProps {
  onNavigate: (page: PageView) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Editorial Column */}
          <div className="lg:col-span-7 space-y-6">
            <AabestLogo variant="light-bg" className="h-[61px] sm:h-[68px] w-auto object-contain" />
            <div className="text-xs uppercase tracking-[0.2em] text-amber-700 font-bold">
              01 · About Aabest Services
            </div>

            <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-950 tracking-tight leading-[1.2]">
              A Ghanaian Enterprise Built on Practical Fleet Discipline &amp; Technical Competence
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Aabest Services is a Ghanaian company operating across commercial transportation, heavy haulage, container logistics, and specialized equipment mobilization. We provide responsive, professional services tailored to meet the demanding requirements of individual clients, commercial enterprises, and industrial contractors across Ghana.
              </p>
              <p className="text-sm">
                Anchored in Ghana's key maritime and transit centers—notably Tema Port and Greater Accra—we combine hands-on transport coordination with structured administrative rigor to ensure asset safety, on-time turnaround, and transparent communication.
              </p>
            </div>

            {/* Architectural Data Strip with Hairline Dividers */}
            <div className="grid grid-cols-3 border-y border-slate-200 py-6 my-6 text-xs text-slate-800">
              <div className="pr-4 border-r border-slate-200">
                <span className="block font-mono font-bold text-lg text-slate-950 mb-0.5">04</span>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-medium block">
                  Operating Divisions
                </span>
                <span className="text-[11px] text-slate-600">Heavy Fleet &amp; Haulage</span>
              </div>
              <div className="px-4 border-r border-slate-200">
                <span className="block font-mono font-bold text-lg text-slate-950 mb-0.5">Tema</span>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-medium block">
                  Maritime Gateway
                </span>
                <span className="text-[11px] text-slate-600">Port &amp; Depot Corridors</span>
              </div>
              <div className="pl-4">
                <span className="block font-mono font-bold text-lg text-slate-950 mb-0.5">DVLA</span>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-medium block">
                  Asset Vetting
                </span>
                <span className="text-[11px] text-slate-600">Roadworthy &amp; Insured</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-bold text-slate-950 hover:text-amber-600 transition-colors pb-1 border-b border-slate-950 hover:border-amber-600"
              >
                <span>Read Full Corporate Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 space-y-3">
            <div className="border border-slate-200 bg-slate-100 p-2 shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://cdn.savedly.net/9jj5sk8g"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== window.location.origin + '/images/fleet/9jj5sk8g.jpg') {
                      target.src = '/images/fleet/9jj5sk8g.jpg';
                    }
                  }}
                  alt="Aabest Services container logistics and port haulage fleet in Ghana"
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono px-1">
              <span>FIG. 01 — CONTAINER FLEET DISPATCH</span>
              <span>TEMA, GHANA</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
