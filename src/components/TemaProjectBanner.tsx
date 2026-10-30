import React from 'react';
import { PageView } from '../types';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface TemaProjectBannerProps {
  onNavigate: (page: PageView) => void;
}

export const TemaProjectBanner: React.FC<TemaProjectBannerProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-[#0A1128] text-white border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs uppercase tracking-[0.2em] text-amber-400 font-bold">
            03 · Dedicated Project Feature
          </div>

          <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-white leading-[1.2]">
            Join the Tema Harbour Container Evacuation Registration Programme
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Aabest Services is coordinating the collection and organization of information from container truck owners, transport enterprises and qualified drivers interested in participating in the Tema Harbour container evacuation operations.
          </p>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            We invite eligible truck owners, fleet operators and drivers to submit their details and supporting documentation for onboarding consideration.
          </p>
        </div>

        {/* Evacuation Fleet Photographic Feature Strip */}
        <div className="mb-12 border border-white/15 bg-white/5 p-3 flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-80 h-44 shrink-0 overflow-hidden bg-slate-900 border border-white/10">
            <img
              src="https://cdn.savedly.net/xbbrj6hb"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== window.location.origin + '/images/fleet/xbbrj6hb.jpg') {
                  target.src = '/images/fleet/xbbrj6hb.jpg';
                }
              }}
              alt="Tema Harbour Container Evacuation Truck Fleet"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-2 py-2">
            <span className="font-mono text-xs text-amber-400 font-bold block uppercase tracking-wider">
              Asset Focus: Heavy Container Tractor Heads &amp; Flatbeds
            </span>
            <h3 className="font-display font-bold text-xl text-white">
              Dedicated Empty Container Port Evacuation Fleet
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Operating on designated short-haul corridors between MPS Terminal 3, Golden Jubilee Terminal, and off-dock bonded holding yards.
            </p>
          </div>
        </div>

        {/* 3 Categories Architectural Dossier Grid with Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/15 bg-white/[0.02] divide-y md:divide-y-0 md:divide-x divide-white/15 mb-12">
          
          {/* Category 1 */}
          <div className="p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-xs text-amber-400 font-bold block">
                01 / ENTERPRISE
              </span>
              <h3 className="font-display font-bold text-xl text-white">
                Truck Owners &amp; Transport Companies
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                For registered commercial transport companies, haulage enterprises, and corporate fleet operators managing multiple flatbed container trucks (up to 50 units).
              </p>
              <div className="pt-2 text-xs text-slate-300 space-y-1.5 font-mono text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-400" />
                  <span>Dynamic fleet intake up to 50 vehicles</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-400" />
                  <span>Enterprise representative signature</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('registration-portal')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-bold text-amber-400 hover:text-white transition-colors pt-4 border-t border-white/10"
            >
              <span>START REGISTRATION (ENTERPRISE)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Category 2 */}
          <div className="p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-xs text-amber-400 font-bold block">
                02 / INDEPENDENT ASSET
              </span>
              <h3 className="font-display font-bold text-xl text-white">
                Independent Container Truck Owners
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                For individual truck owners, single unit owner-operators, or small partners owning one or more flatbed tractor-trailer combinations dedicated to port haulage.
              </p>
              <div className="pt-2 text-xs text-slate-300 space-y-1.5 font-mono text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-400" />
                  <span>Single or multi-asset registration</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-400" />
                  <span>Owner or designated driver pairing</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('registration-portal')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-bold text-amber-400 hover:text-white transition-colors pt-4 border-t border-white/10"
            >
              <span>START REGISTRATION (TRUCK OWNER)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Category 3 */}
          <div className="p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-xs text-amber-400 font-bold block">
                03 / PERSONNEL
              </span>
              <h3 className="font-display font-bold text-xl text-white">
                Container Truck Drivers
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                For qualified commercial drivers holding valid Class F licenses seeking consideration for placement in the 3-driver shift rotation pool at Tema Port.
              </p>
              <div className="pt-2 text-xs text-slate-300 space-y-1.5 font-mono text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-400" />
                  <span>Individual driver profile intake</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-400" />
                  <span>Ghana Card &amp; Class F license verification</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('registration-portal')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-bold text-amber-400 hover:text-white transition-colors pt-4 border-t border-white/10"
            >
              <span>START REGISTRATION (DRIVER)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Action Panel */}
        <div className="p-8 border border-white/15 bg-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-bold text-lg text-white">
              Ready to submit your fleet or driver documentation?
            </h4>
            <p className="text-xs text-slate-400">
              Submit tractor and flatbed logbooks, DVLA roadworthiness certificates, and driver credentials for review.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('project-info')}
              className="px-5 py-3 bg-transparent hover:bg-white/10 text-white border border-white/20 text-xs uppercase tracking-[0.12em] font-semibold rounded-none transition-colors"
            >
              Review Routes &amp; Shifts
            </button>

            <button
              onClick={() => onNavigate('registration-portal')}
              className="px-7 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-[0.14em] rounded-none transition-all flex items-center gap-2 shadow-sm"
            >
              <span>START REGISTRATION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
