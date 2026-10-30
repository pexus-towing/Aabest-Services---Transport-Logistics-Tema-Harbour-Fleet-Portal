import React, { useState } from 'react';
import { PageView, ServiceId } from '../types';
import { COMPANY_SERVICES } from '../data/servicesData';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onNavigate: (page: PageView, serviceId?: ServiceId) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate }) => {
  const [activeServiceId, setActiveServiceId] = useState<ServiceId>('container-truck');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const activeService = COMPANY_SERVICES.find(s => s.id === activeServiceId) || COMPANY_SERVICES[1];
  const activeGallery = activeService.gallery || [{ url: activeService.image, fallbackUrl: activeService.fallbackImage, caption: activeService.title }];
  const currentPhoto = activeGallery[selectedImageIndex] || activeGallery[0];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="text-xs uppercase tracking-[0.2em] text-amber-700 font-bold">
            02 · Operating Capabilities
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-950 tracking-tight leading-[1.2]">
            Integrated Transportation &amp; Heavy Haulage Logistics
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Aabest Services maintains specialized divisions serving industrial, commercial, and private clients across Ghana with high standards of equipment reliability and driver vetting.
          </p>
        </div>

        {/* Bespoke Interactive Editorial Split Stage */}
        <div className="bg-white border border-slate-200 shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left: Division Index Selector */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-50/50">
              <div className="p-4 px-6 border-b border-slate-200 text-[10px] uppercase tracking-[0.2em] font-mono text-slate-500 font-semibold">
                Select Service Division
              </div>
              <div className="divide-y divide-slate-200">
                {COMPANY_SERVICES.map((s, idx) => {
                  const isActive = s.id === activeServiceId;
                  return (
                    <button
                      key={s.id}
                      onClick={() => {
                        setActiveServiceId(s.id);
                        setSelectedImageIndex(0);
                      }}
                      className={`w-full text-left p-5 transition-all flex items-center justify-between group ${
                        isActive 
                          ? 'bg-white text-slate-950 border-l-4 border-l-amber-500 shadow-sm' 
                          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`font-mono text-xs ${isActive ? 'text-amber-600 font-bold' : 'text-slate-400'}`}>
                            0{idx + 1}
                          </span>
                          <span className="font-display font-bold text-sm tracking-tight text-slate-900">
                            {s.title}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-1 max-w-xs font-normal">
                          {s.shortDesc}
                        </p>
                      </div>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform ${
                        isActive ? 'text-amber-500 translate-x-1' : 'text-slate-300 group-hover:text-slate-600'
                      }`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Featured Operational Showcase */}
            <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-between space-y-8">
              
              <div className="space-y-6">
                {/* Photographic Showcase Frame */}
                <div className="space-y-2">
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 border border-slate-200">
                    <img
                      key={currentPhoto.url}
                      src={currentPhoto.url}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (currentPhoto.fallbackUrl && target.src !== window.location.origin + currentPhoto.fallbackUrl) {
                          target.src = currentPhoto.fallbackUrl;
                        }
                      }}
                      alt={currentPhoto.caption || activeService.title}
                      className="w-full h-full object-cover transition-opacity duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-3 left-3 bg-[#0B132B]/90 text-white text-[10px] font-mono uppercase tracking-wider px-3 py-1">
                      {currentPhoto.caption || `Active Division Profile · ${activeService.title}`}
                    </div>
                  </div>

                  {/* Multiple Fleet Unit Gallery Selector */}
                  {activeGallery.length > 1 && (
                    <div className="flex items-center gap-2 pt-1 overflow-x-auto">
                      <span className="text-[10px] uppercase font-mono text-slate-400 font-bold mr-1">
                        Fleet Views:
                      </span>
                      {activeGallery.map((item, gIdx) => (
                        <button
                          key={gIdx}
                          onClick={() => setSelectedImageIndex(gIdx)}
                          className={`relative h-12 w-20 shrink-0 border overflow-hidden transition-all ${
                            selectedImageIndex === gIdx
                              ? 'border-amber-500 ring-2 ring-amber-400/40'
                              : 'border-slate-300 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={item.url}
                            onError={(e) => {
                              const target = e.currentTarget;
                              if (item.fallbackUrl && target.src !== window.location.origin + item.fallbackUrl) {
                                target.src = item.fallbackUrl;
                              }
                            }}
                            alt={`Fleet view ${gIdx + 1}`}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Service Narrative & Technical Scope */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-950">
                      {activeService.title}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-500">
                      GHANA COMMERCIAL OPERATIONS
                    </span>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {activeService.fullDesc}
                  </p>

                  {/* Key Benefits Editorial List */}
                  <div className="pt-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-slate-400 font-bold block mb-3">
                      Operational Benchmarks &amp; Standards
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                      {activeService.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="p-3 bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 bg-amber-500 mt-1.5 shrink-0" />
                          <span className="leading-relaxed">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions Toolbar */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onNavigate('service-detail', activeService.id)}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-[0.14em] rounded-none transition-colors"
                  >
                    View Division Details
                  </button>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-5 py-2.5 bg-transparent hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs uppercase tracking-[0.12em] font-semibold rounded-none transition-colors"
                  >
                    Request Quote / Dispatch
                  </button>
                </div>

                {activeService.id === 'container-truck' && (
                  <button
                    onClick={() => onNavigate('registration-portal')}
                    className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1.5 underline underline-offset-4"
                  >
                    <span>Register for Tema Harbour Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

            </div>

          </div>
        </div>

        {/* Clean Corporate Directory Strip */}
        <div className="p-6 bg-[#0B132B] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display font-bold text-base text-white">
              Need Multi-Modal Fleet Deployment or Scheduled Contracting?
            </h4>
            <p className="text-xs text-slate-400">
              We arrange long-term equipment haulage and dedicated corridor container transport agreements.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-[0.14em] rounded-none transition-all whitespace-nowrap shrink-0"
          >
            Inquire Fleet Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
