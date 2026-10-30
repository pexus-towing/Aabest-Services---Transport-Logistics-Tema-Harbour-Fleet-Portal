import React from 'react';
import { PageView, ServiceId } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { COMPANY_SERVICES } from '../data/servicesData';
import { AabestLogo } from './AabestLogo';

interface FooterProps {
  onNavigate: (page: PageView, serviceId?: ServiceId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageView, serviceId?: ServiceId) => {
    onNavigate(page, serviceId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070D1E] text-slate-300 border-t border-white/10 text-xs">
      
      {/* Upper Footer Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Brand Identity & Mission */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center">
              <AabestLogo variant="dark-bg" className="h-[75px] sm:h-[80px] w-auto object-contain" />
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              A Ghanaian company delivering professional transportation, commercial fleet support, and heavy equipment mobilization designed for operational reliability across Ghana.
            </p>

            <div className="pt-2">
              <div className="p-4 border border-white/10 bg-white/[0.02] space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-400 font-bold block">
                  Project Coordination
                </span>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Tema Harbour Container Evacuation: Coordinating fleet identification, document vetting, and driver cataloguing.
                </p>
                <button
                  onClick={() => handleNav('registration-portal')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-white transition-colors pt-1"
                >
                  <span>Access Onboarding Portal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Operating Divisions */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400 font-bold block">
              Company Divisions
            </span>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {COMPANY_SERVICES.map((s, idx) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleNav('service-detail', s.id)}
                    className="hover:text-white transition-colors text-left flex items-center gap-2 group"
                  >
                    <span className="font-mono text-[10px] text-slate-600 group-hover:text-amber-400">0{idx + 1}</span>
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Site Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400 font-bold block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">
                  Corporate Profile
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors">
                  All Capabilities
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('project-info')} className="hover:text-white transition-colors">
                  Tema Port Operational Brief
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('registration-portal')} className="text-amber-400 hover:text-amber-300 transition-colors font-medium">
                  Tema Fleet Registration
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('dashboard')} className="hover:text-white transition-colors">
                  Intake Console (Demo)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">
                  Contact Operations
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Legal Registry */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400 font-bold block">
              Operations &amp; Registry
            </span>
            <div className="space-y-3 text-xs text-slate-400">
              <p>
                <strong className="text-slate-200 block mb-0.5">Base Location:</strong>
                Heavy Industrial Area / Port Corridor, Community 1, Tema, Greater Accra, Republic of Ghana
              </p>
              <div className="font-mono text-[11px]">
                <strong className="text-slate-200 block mb-0.5 font-sans">Direct Telephone &amp; WhatsApp:</strong>
                <div className="flex items-center gap-2">
                  <a href="tel:0597684860" className="text-slate-300 hover:text-white transition-colors">
                    0597684860
                  </a>
                  <span className="text-slate-600">·</span>
                  <a
                    href="https://wa.me/233597684860"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 text-[10px] uppercase font-sans tracking-wider"
                  >
                    WhatsApp Chat
                  </a>
                </div>
              </div>
              <p className="font-mono text-[11px]">
                <strong className="text-slate-200 block mb-0.5 font-sans">Official Inquiries:</strong>
                operations@aabestservices.com
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Baseline */}
      <div className="border-t border-white/5 py-8 bg-[#040814]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Aabest Services (aabestservices.com). Registered in the Republic of Ghana.
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => handleNav('privacy')} 
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy &amp; Data Governance
            </button>
            <span>·</span>
            <button 
              onClick={() => handleNav('project-info')} 
              className="hover:text-slate-300 transition-colors"
            >
              Draft Commercial Terms Notice
            </button>
            <span>·</span>
            <span className="text-slate-600 font-mono">
              Frontend UI Architecture
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
};
