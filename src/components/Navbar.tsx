import React, { useState } from 'react';
import { PageView, ServiceId } from '../types';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { COMPANY_SERVICES } from '../data/servicesData';
import { AabestLogo } from './AabestLogo';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView, serviceId?: ServiceId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleNavClick = (page: PageView, serviceId?: ServiceId) => {
    onNavigate(page, serviceId);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0B132B] text-white border-b border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-24 sm:h-28 py-2">
          
          {/* Zone 1: Bespoke Brand Identity */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded-none whitespace-nowrap shrink-0 group py-1 transition-opacity hover:opacity-95"
            aria-label="Aabest Services - Return to Homepage"
          >
            <AabestLogo 
              variant="dark-bg" 
              className="h-[68px] sm:h-[82px] w-auto object-contain" 
            />
          </button>

          {/* Zone 2: Editorial Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-[0.12em] font-medium text-slate-300">
            <button
              onClick={() => handleNavClick('home')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 py-2 relative ${
                currentPage === 'home' ? 'text-white font-semibold' : ''
              }`}
            >
              <span>Home</span>
              {currentPage === 'home' && (
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-amber-400" />
              )}
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 py-2 relative ${
                currentPage === 'about' ? 'text-white font-semibold' : ''
              }`}
            >
              <span>About</span>
              {currentPage === 'about' && (
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-amber-400" />
              )}
            </button>

            {/* Services Dropdown */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('services')}
                className={`flex items-center gap-1.5 hover:text-white transition-colors whitespace-nowrap shrink-0 ${
                  currentPage === 'services' || currentPage === 'service-detail' ? 'text-white font-semibold' : ''
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-[#0B132B] border border-white/10 shadow-2xl py-2 z-50 rounded-none">
                  <div className="px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-amber-400 font-bold border-b border-white/5">
                    Operating Divisions
                  </div>
                  {COMPANY_SERVICES.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => handleNavClick('service-detail', s.id)}
                      className="w-full text-left px-4 py-2.5 text-xs normal-case tracking-normal hover:bg-white/5 hover:text-amber-300 text-slate-200 transition-colors flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-slate-500">0{idx + 1}</span>
                        <span>{s.title}</span>
                      </div>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                    </button>
                  ))}
                  <div className="border-t border-white/5 mt-1 pt-1">
                    <button
                      onClick={() => handleNavClick('services')}
                      className="w-full text-left px-4 py-2 text-[11px] uppercase tracking-wider font-semibold text-amber-400 hover:bg-white/5 transition-colors"
                    >
                      All 4 Transport Divisions →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Tema Harbour Registration - Architectural Highlight */}
            <button
              onClick={() => handleNavClick('registration-portal')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-none text-xs transition-colors whitespace-nowrap shrink-0 ${
                currentPage === 'registration-portal' || currentPage === 'registration-confirmation'
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : 'text-amber-400 hover:text-white border border-amber-400/30 hover:border-amber-400/70 bg-amber-400/5'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Tema Harbour Portal</span>
            </button>

            <button
              onClick={() => handleNavClick('project-info')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 py-2 relative ${
                currentPage === 'project-info' ? 'text-white font-semibold' : ''
              }`}
            >
              <span>Project Brief</span>
              {currentPage === 'project-info' && (
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-amber-400" />
              )}
            </button>

            <button
              onClick={() => handleNavClick('dashboard')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 py-2 relative ${
                currentPage === 'dashboard' ? 'text-white font-semibold' : ''
              }`}
            >
              <span>Fleet Console <span className="font-mono text-[10px] opacity-60">(Demo)</span></span>
              {currentPage === 'dashboard' && (
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-amber-400" />
              )}
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 py-2 relative ${
                currentPage === 'contact' ? 'text-white font-semibold' : ''
              }`}
            >
              <span>Contact</span>
              {currentPage === 'contact' && (
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-amber-400" />
              )}
            </button>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('registration-portal')}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-none transition-all whitespace-nowrap shrink-0 shadow-sm"
            >
              START REGISTRATION
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => handleNavClick('registration-portal')}
              className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 rounded-none"
            >
              START REGISTRATION
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B132B] border-b border-white/10 px-6 pt-4 pb-8 space-y-4">
          <div className="pb-3 border-b border-white/10 flex items-center justify-between">
            <AabestLogo variant="dark-bg" className="h-[61px] w-auto object-contain" />
          </div>
          <div className="p-4 bg-white/5 border border-amber-400/30 rounded-none space-y-2">
            <div className="text-[10px] uppercase tracking-widest text-amber-400 font-bold">
              Special Maritime Feature
            </div>
            <div className="text-sm font-display font-bold text-white">
              Tema Harbour Container Evacuation Portal
            </div>
            <button
              onClick={() => handleNavClick('registration-portal')}
              className="w-full py-2.5 bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-widest rounded-none hover:bg-amber-300 transition-colors"
            >
              Open Registration Portal
            </button>
          </div>

          <div className="grid grid-cols-1 gap-1 text-xs uppercase tracking-wider font-medium text-slate-200">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left py-2.5 border-b border-white/5 hover:text-amber-400"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left py-2.5 border-b border-white/5 hover:text-amber-400"
            >
              About Aabest Services
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="text-left py-2.5 border-b border-white/5 hover:text-amber-400 font-semibold text-amber-300"
            >
              Our Core Services (All 6)
            </button>
            <button
              onClick={() => handleNavClick('project-info')}
              className="text-left py-2.5 border-b border-white/5 hover:text-amber-400"
            >
              Tema Port Routes &amp; Operational Brief
            </button>
            <button
              onClick={() => handleNavClick('dashboard')}
              className="text-left py-2.5 border-b border-white/5 hover:text-amber-400"
            >
              Fleet Intake Console (Demo)
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left py-2.5 border-b border-white/5 hover:text-amber-400"
            >
              Contact Us &amp; Inquiries
            </button>
            <button
              onClick={() => handleNavClick('privacy')}
              className="text-left py-2.5 text-slate-400 hover:text-white"
            >
              Privacy Policy &amp; Data Notice
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
