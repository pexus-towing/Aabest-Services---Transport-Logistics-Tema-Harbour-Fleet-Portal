import React from 'react';
import { PageView } from '../types';
import { ArrowRight } from 'lucide-react';
import { AabestLogo } from '../components/AabestLogo';

interface AboutPageProps {
  onNavigate: (page: PageView) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header */}
      <div className="bg-[#0B132B] text-white py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <AabestLogo variant="dark-bg" className="h-[68px] sm:h-[82px] w-auto object-contain" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400 font-bold block">
              Corporate Profile
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight">
              About Aabest Services
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              A Ghanaian transportation, logistics, and heavy fleet enterprise committed to operational rigor and compliance.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <AabestLogo variant="light-bg" className="h-[61px] sm:h-[68px] w-auto object-contain" />
            <span className="font-mono text-xs text-amber-700 font-bold block">
              01 / ENTERPRISE FOUNDATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950">
              Institutional Reliability for Ghana's Commercial Corridors
            </h2>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>
                Established in Ghana, Aabest Services (aabestservices.com) provides dependable transportation solutions, commercial fleet support, heavy equipment mobilization, and container haulage to public and private sector clients.
              </p>
              <p>
                Our operations combine hands-on transport coordination with structured administrative standards. By maintaining strict compliance with the Driver and Vehicle Licensing Authority (DVLA) and relevant port authorities, we ensure all deployed units and operating personnel meet rigorous safety benchmarks.
              </p>
            </div>

            <div className="p-6 border border-slate-200 bg-white space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold block">
                Operating Mission
              </span>
              <p className="text-slate-800 text-sm font-display font-medium leading-relaxed">
                To deliver prompt, safe, and cost-effective logistics and transport solutions that drive productivity for Ghanaian businesses and infrastructure initiatives.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-3">
            <div className="border border-slate-200 bg-white p-2 shadow-sm">
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src="https://cdn.savedly.net/9jj5sk8g"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== window.location.origin + '/images/fleet/9jj5sk8g.jpg') {
                      target.src = '/images/fleet/9jj5sk8g.jpg';
                    }
                  }}
                  alt="Aabest Services container logistics operations at Tema port"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono px-1">
              <span>PORT TERMINAL DISPATCH</span>
              <span>TEMA ENCLAVE</span>
            </div>
          </div>
        </div>

        {/* The Two Pillars */}
        <div className="space-y-6">
          <span className="font-mono text-xs text-amber-700 font-bold block">
            02 / CORE OPERATING PILLARS
          </span>
          <h3 className="text-2xl font-display font-bold text-slate-950">
            Synergistic Divisions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 border border-slate-200 bg-white divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="p-8 sm:p-10 space-y-4">
              <span className="font-mono text-xs text-amber-700 font-bold block">DIVISION 01</span>
              <h4 className="font-display font-bold text-xl text-slate-950">
                Transportation &amp; Fleet Logistics
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our heavy transport operations include recovery tow trucks, port container haulage, lowbed machinery transport, and bulk tipper hauling. We oversee fleet readiness, routine maintenance, driver vetting, and dispatch coordination.
              </p>
              <div className="pt-2 text-xs text-slate-700 space-y-1.5 font-mono text-[11px]">
                <div>· Port container movements &amp; evacuation operations</div>
                <div>· Heavy construction plant mobilization on lowbeds</div>
                <div>· Commercial vehicle breakdown recovery</div>
              </div>
            </div>

            <div className="p-8 sm:p-10 space-y-4">
              <span className="font-mono text-xs text-amber-700 font-bold block">DIVISION 02</span>
              <h4 className="font-display font-bold text-xl text-slate-950">
                Specialized Heavy Transport &amp; Mobilization
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our heavy mobilization team coordinates oversized cargo routing, plant transfers, industrial equipment transit on multi-axle lowbeds, and bulk quarry aggregates to support construction and industrial projects across Ghana.
              </p>
              <div className="pt-2 text-xs text-slate-700 space-y-1.5 font-mono text-[11px]">
                <div>· Multi-axle lowbed transport for industrial machinery</div>
                <div>· Bulk aggregates and civil construction material hauling</div>
                <div>· Heavy commercial roadside assistance and towing</div>
              </div>
            </div>
          </div>
        </div>

        {/* Operational Fleet Units Gallery */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-amber-700 font-bold block">
              03 / FLEET ASSETS &amp; EQUIPMENT
            </span>
            <h3 className="text-2xl font-display font-bold text-slate-950">
              Commercial Fleet Capabilities in Ghana
            </h3>
            <p className="text-slate-600 text-sm max-w-2xl">
              High-standard commercial vehicles and heavy machinery transporters deployed across Ghana's industrial corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-slate-200 bg-white p-2.5 shadow-sm space-y-2">
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src="https://cdn.savedly.net/xbbrj6hb"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== window.location.origin + '/images/fleet/xbbrj6hb.jpg') {
                      target.src = '/images/fleet/xbbrj6hb.jpg';
                    }
                  }}
                  alt="Container Transportation Tractor Head & Flatbed"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-0.5 px-1 pb-1">
                <span className="font-mono text-[10px] text-amber-700 font-bold block">CONTAINER FLEET</span>
                <h5 className="font-display font-bold text-sm text-slate-900">Intermodal Container Haulage</h5>
                <p className="text-[11px] text-slate-500 font-mono">Tema Harbour &amp; Transit ICDs</p>
              </div>
            </div>

            <div className="border border-slate-200 bg-white p-2.5 shadow-sm space-y-2">
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src="https://cdn.savedly.net/vgwm9r5n"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== window.location.origin + '/images/fleet/vgwm9r5n.jpg') {
                      target.src = '/images/fleet/vgwm9r5n.jpg';
                    }
                  }}
                  alt="Heavy-Duty Lowbed Machinery Transporter"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-0.5 px-1 pb-1">
                <span className="font-mono text-[10px] text-amber-700 font-bold block">LOWBED HEAVY HAUL</span>
                <h5 className="font-display font-bold text-sm text-slate-900">Plant &amp; Machine Mobilization</h5>
                <p className="text-[11px] text-slate-500 font-mono">Mining &amp; Civil Infrastructure</p>
              </div>
            </div>

            <div className="border border-slate-200 bg-white p-2.5 shadow-sm space-y-2">
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src="https://cdn.savedly.net/2bkpxz86"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== window.location.origin + '/images/fleet/2bkpxz86.jpg') {
                      target.src = '/images/fleet/2bkpxz86.jpg';
                    }
                  }}
                  alt="Multi-Axle Quarry & Aggregate Tipper"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-0.5 px-1 pb-1">
                <span className="font-mono text-[10px] text-amber-700 font-bold block">TIPPER LOGISTICS</span>
                <h5 className="font-display font-bold text-sm text-slate-900">Bulk Aggregate &amp; Sand Supply</h5>
                <p className="text-[11px] text-slate-500 font-mono">Quarry-to-Site Haulage</p>
              </div>
            </div>

            <div className="border border-slate-200 bg-white p-2.5 shadow-sm space-y-2">
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src="https://cdn.savedly.net/69bcu2vm"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== window.location.origin + '/images/fleet/69bcu2vm.jpg') {
                      target.src = '/images/fleet/69bcu2vm.jpg';
                    }
                  }}
                  alt="Breakdown Recovery & Towing Truck"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-0.5 px-1 pb-1">
                <span className="font-mono text-[10px] text-amber-700 font-bold block">TOW TRUCK OPERATIONS</span>
                <h5 className="font-display font-bold text-sm text-slate-900">Vehicle Recovery &amp; Towing</h5>
                <p className="text-[11px] text-slate-500 font-mono">Urban &amp; Highway Dispatch</p>
              </div>
            </div>
          </div>
        </div>

        {/* Base Geography */}
        <div className="p-8 sm:p-12 bg-[#0B132B] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-xs text-amber-400 font-bold block uppercase tracking-wider">
              Geographic Presence
            </span>
            <h3 className="font-display font-bold text-2xl text-white">
              Anchored at Tema Port with Nationwide Transit Reach
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our central operations coordinate around the Tema Port industrial zone, connecting Meridian Port Services (MPS), Golden Jubilee Terminal, off-dock transit depots, and inland cargo destinations across Greater Accra, Eastern, and Ashanti corridors.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-[0.14em] rounded-none transition-all whitespace-nowrap shrink-0"
          >
            Connect With Operations
          </button>
        </div>

      </div>
    </div>
  );
};
