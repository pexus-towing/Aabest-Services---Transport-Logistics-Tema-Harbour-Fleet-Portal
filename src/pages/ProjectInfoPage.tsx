import React from 'react';
import { PageView } from '../types';
import { ArrowRight, FileText, AlertTriangle } from 'lucide-react';
import { AabestLogo } from '../components/AabestLogo';

interface ProjectInfoPageProps {
  onNavigate: (page: PageView) => void;
}

export const ProjectInfoPage: React.FC<ProjectInfoPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Editorial Header */}
      <div className="bg-[#0B132B] text-white py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <AabestLogo variant="dark-bg" className="h-[68px] sm:h-[82px] w-auto object-contain" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400 font-bold block">
              Official Operational Brief
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight">
              Tema Harbour Container Evacuation Operations
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Designated transit routes, fleet requirements, shift structures, and commercial provisions for qualified container truck owners and drivers.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Status & Scope Clarification Box */}
        <div className="p-6 border border-amber-300 bg-amber-500/10 text-xs text-amber-950 space-y-1.5 leading-relaxed">
          <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Important Terms &amp; Scope Clarification</span>
          </div>
          <p>
            All commercial rates, operational metrics, and corridor specifications outlined below reflect terms set forth in the supplied project documentation and draft Truck Owner &amp; Contractor Agreement. These figures represent the proposed project structure and remain subject to formal asset vetting, administrative clearance, and bilateral contract execution. Submission of registration details does not constitute guaranteed deployment, hiring, or automatic GPHA port entry pass issuance.
          </p>
        </div>

        {/* Section 1: Operational Scope & Corridors */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-2 border-b border-slate-100 pb-4">
              <span className="font-mono text-xs text-amber-700 font-bold block">
                01 / OPERATIONAL PURPOSE
              </span>
              <h2 className="text-2xl font-display font-bold text-slate-950">
                Empty Container Deployment &amp; Evacuation
              </h2>
            </div>
            
            <p className="text-slate-600 text-sm leading-relaxed">
              The primary purpose of the project is the continuous evacuation and strategic repositioning of empty shipping containers within the Tema Port enclave. The objective is to relieve vessel quay congestion, accelerate container turnaround velocity, and maintain fluid supply chains between terminals and designated storage yards.
            </p>

            <div className="space-y-3 pt-2">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-bold block">
                Mandatory Asset Requirements
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                The agreement specifically designates heavy-duty container tractor heads paired with twist-lock flatbed trailers as the exclusive asset configuration for this operation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs text-slate-800">
                <div className="p-4 bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Tractor Head (Prime Mover)</span>
                  <span className="text-slate-600">Mechanically sound commercial unit with valid DVLA roadworthiness and comprehensive insurance.</span>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Flatbed Trailer</span>
                  <span className="text-slate-600">Heavy-duty trailer equipped with functional container twist locks accommodating 20ft and 40ft units.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Designated Corridors */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-2 border-b border-slate-100 pb-4">
              <span className="font-mono text-xs text-amber-700 font-bold block">
                02 / DESIGNATED CORRIDORS
              </span>
              <h2 className="text-2xl font-display font-bold text-slate-950">
                Internal Evacuation Routes
              </h2>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Operations take place strictly on defined, short-haul transit routes within and immediately adjacent to the Tema Port gates:
            </p>

            <div className="space-y-3 pt-2 font-mono text-xs">
              <div className="p-4 bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between text-slate-950 font-bold">
                  <span>ROUTE A</span>
                  <span className="text-amber-700 text-[11px]">~0.75 KM</span>
                </div>
                <div className="text-slate-600 font-sans text-xs">
                  Meridian Port Services (MPS Terminal 3) → Golden Jubilee Terminal
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between text-slate-950 font-bold">
                  <span>ROUTE B</span>
                  <span className="text-amber-700 text-[11px]">~0.35 KM</span>
                </div>
                <div className="text-slate-600 font-sans text-xs">
                  MPS Container Depot → Golden Jubilee Terminal
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between text-slate-950 font-bold">
                  <span>ROUTE C</span>
                  <span className="text-amber-700 text-[11px]">~0.50 KM</span>
                </div>
                <div className="text-slate-600 font-sans text-xs">
                  Main Port Transit Terminal → Afrique Royal Empty Yard
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Operational Fleet Asset Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-slate-200 bg-white p-3 shadow-sm space-y-3">
            <div className="aspect-[16/9] overflow-hidden bg-slate-100">
              <img
                src="https://cdn.savedly.net/xbbrj6hb"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== window.location.origin + '/images/fleet/xbbrj6hb.jpg') {
                    target.src = '/images/fleet/xbbrj6hb.jpg';
                  }
                }}
                alt="Container Transportation 4 - Prime Mover & Flatbed"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 px-1">
              <span>ASSET REF: PRIME MOVER &amp; FLATBED</span>
              <span className="text-amber-700">TEMA HARBOUR CORRIDOR</span>
            </div>
          </div>

          <div className="border border-slate-200 bg-white p-3 shadow-sm space-y-3">
            <div className="aspect-[16/9] overflow-hidden bg-slate-100">
              <img
                src="https://cdn.savedly.net/9jj5sk8g"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== window.location.origin + '/images/fleet/9jj5sk8g.jpg') {
                    target.src = '/images/fleet/9jj5sk8g.jpg';
                  }
                }}
                alt="Container Transportation 3 - Tema Evacuation Unit"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 px-1">
              <span>ASSET REF: TWIST-LOCK CONTAINER CARRIER</span>
              <span className="text-amber-700">PORT ENCLAVE TRANSIT</span>
            </div>
          </div>
        </div>

        {/* Section 2: Shift Rotation & Driver Structure */}
        <div className="bg-white p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div className="space-y-2 border-b border-slate-100 pb-4">
            <span className="font-mono text-xs text-amber-700 font-bold block">
              03 / ROTATION FRAMEWORK
            </span>
            <h3 className="text-2xl font-display font-bold text-slate-950">
              Operational Shift Structure &amp; Driver Deployment
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200 text-xs">
            <div className="p-6 space-y-2">
              <span className="font-mono text-slate-400 font-bold block text-[10px] uppercase">Cycle</span>
              <h4 className="font-display font-bold text-base text-slate-950">
                24-Hour Continuous Cycle
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Structured around three 8-hour operational shifts per 24-hour cycle to achieve constant container velocity through terminal gates.
              </p>
            </div>

            <div className="p-6 space-y-2">
              <span className="font-mono text-slate-400 font-bold block text-[10px] uppercase">Roster</span>
              <h4 className="font-display font-bold text-base text-slate-950">
                3-Driver Rotation Model
              </h4>
              <p className="text-slate-600 leading-relaxed">
                The Truck Owner provides 1 primary qualified driver per truck, while the remaining 2 drivers are assigned and compensated by GPHA.
              </p>
            </div>

            <div className="p-6 space-y-2">
              <span className="font-mono text-slate-400 font-bold block text-[10px] uppercase">Inspection</span>
              <h4 className="font-display font-bold text-base text-slate-950">
                1-Hour Inspection Break
              </h4>
              <p className="text-slate-600 leading-relaxed">
                A mandatory 1-hour cooling, pre-trip inspection, and fluid checklist protocol is observed during each driver handover shift.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Commercial Terms */}
        <div className="bg-[#0B132B] text-white p-8 sm:p-12 border border-white/10 space-y-8">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="font-mono text-xs text-amber-400 font-bold uppercase tracking-wider block">
                04 / COMMERCIAL PROVISIONS
              </span>
              <h3 className="text-2xl font-display font-bold text-white mt-1">
                Draft Agreement Commercial Terms
              </h3>
            </div>
            <span className="font-mono text-xs text-slate-400">
              Source: Supplied Intake &amp; Contractor Agreement
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            <div className="p-5 border border-white/10 bg-white/[0.02] space-y-2">
              <span className="text-slate-400 text-[10px] uppercase block font-sans">Gross Daily Rate</span>
              <div className="text-xl font-bold text-amber-400">GHS 3,500.00</div>
              <p className="text-slate-400 text-[11px] font-sans">Net per deployed flatbed per operational day.</p>
            </div>

            <div className="p-5 border border-white/10 bg-white/[0.02] space-y-2">
              <span className="text-slate-400 text-[10px] uppercase block font-sans">Operational Target</span>
              <div className="text-xl font-bold text-white">14 Trips / Day</div>
              <p className="text-slate-400 text-[11px] font-sans">Minimum benchmark evacuation trips per truck.</p>
            </div>

            <div className="p-5 border border-white/10 bg-white/[0.02] space-y-2">
              <span className="text-slate-400 text-[10px] uppercase block font-sans">Fuel Policy</span>
              <div className="text-base font-bold text-white font-sans">Reconciled Payout</div>
              <p className="text-slate-400 text-[11px] font-sans">Fuel funded for days 1–12 reconciled from revenue.</p>
            </div>

            <div className="p-5 border border-white/10 bg-white/[0.02] space-y-2">
              <span className="text-slate-400 text-[10px] uppercase block font-sans">Settlement Term</span>
              <div className="text-base font-bold text-white font-sans">Bi-Weekly Payout</div>
              <p className="text-slate-400 text-[11px] font-sans">Direct bank transfer under 5-year contract term.</p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 text-xs text-slate-300 space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-amber-400 font-bold block">
              Maintenance &amp; Compliance Responsibilities
            </span>
            <p className="text-slate-400 leading-relaxed font-sans">
              As stipulated in the draft agreement, the Truck Owner retains full financial and operational responsibility for routine servicing, major mechanical repairs, tire maintenance, preventive care, current DVLA roadworthiness certificates, and active comprehensive insurance cover throughout the deployment.
            </p>
          </div>
        </div>

        {/* Section 4: The 4 Vetting Stages */}
        <div className="bg-white p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div className="space-y-2 border-b border-slate-100 pb-4">
            <span className="font-mono text-xs text-amber-700 font-bold block">
              05 / INTEGRATION ROADMAP
            </span>
            <h3 className="text-2xl font-display font-bold text-slate-950">
              Four Vetting &amp; Integration Stages
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 border border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200 text-xs">
            <div className="p-6 space-y-2">
              <span className="font-mono text-amber-700 font-bold block">STAGE 01</span>
              <h4 className="font-display font-bold text-sm text-slate-950">Asset Vetting</h4>
              <p className="text-slate-600 leading-relaxed">
                Inspection of tractor heads, twist locks, flatbeds, DVLA logbooks, roadworthiness stickers, and insurance.
              </p>
            </div>

            <div className="p-6 space-y-2">
              <span className="font-mono text-amber-700 font-bold block">STAGE 02</span>
              <h4 className="font-display font-bold text-sm text-slate-950">Personnel Vetting</h4>
              <p className="text-slate-600 leading-relaxed">
                Verification of driver credentials, Ghana Cards, Class F licenses, and port safety orientation.
              </p>
            </div>

            <div className="p-6 space-y-2">
              <span className="font-mono text-amber-700 font-bold block">STAGE 03</span>
              <h4 className="font-display font-bold text-sm text-slate-950">GPHA Licensing</h4>
              <p className="text-slate-600 leading-relaxed">
                Issuance of official Ghana Ports and Harbours Authority port entry permits and gate credentials.
              </p>
            </div>

            <div className="p-6 space-y-2">
              <span className="font-mono text-amber-700 font-bold block">STAGE 04</span>
              <h4 className="font-display font-bold text-sm text-slate-950">Site Integration</h4>
              <p className="text-slate-600 leading-relaxed">
                Final assignment to specific evacuation corridors (Route A, B, or C) and shift pool activation.
              </p>
            </div>
          </div>
        </div>

        {/* Direct Action Callout */}
        <div className="p-8 bg-[#0B132B] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-bold text-lg text-white">
              Ready to submit your fleet or driver documentation?
            </h4>
            <p className="text-xs text-slate-400">
              Access the multi-step intake portal to begin your application.
            </p>
          </div>
          <button
            onClick={() => onNavigate('registration-portal')}
            className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-[0.14em] rounded-none transition-all whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>START REGISTRATION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
