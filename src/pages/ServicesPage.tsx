import React, { useState } from 'react';
import { PageView, ServiceId } from '../types';
import { COMPANY_SERVICES } from '../data/servicesData';
import { ArrowUpRight } from 'lucide-react';
import { AabestLogo } from '../components/AabestLogo';

interface ServicesPageProps {
  initialServiceId?: ServiceId;
  onNavigate: (page: PageView, serviceId?: ServiceId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  // Track selected gallery image per service
  const [activePhotoIdx, setActivePhotoIdx] = useState<Record<string, number>>({});

  const handleSelectPhoto = (serviceId: string, idx: number) => {
    setActivePhotoIdx(prev => ({ ...prev, [serviceId]: idx }));
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header */}
      <div className="bg-[#0B132B] text-white py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <AabestLogo variant="dark-bg" className="h-[68px] sm:h-[82px] w-auto object-contain" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400 font-bold block">
              Operating Capabilities
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight">
              Company Service Divisions
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore our specialized commercial divisions delivering heavy truck transport, container haulage, and port operations across Ghana.
            </p>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {COMPANY_SERVICES.map((service, idx) => {
          const gallery = service.gallery || [
            { url: service.image, fallbackUrl: service.fallbackImage, caption: service.title }
          ];
          const currentPhotoIndex = activePhotoIdx[service.id] ?? 0;
          const currentPhoto = gallery[currentPhotoIndex] || gallery[0];

          return (
            <div
              key={service.id}
              id={service.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 sm:p-12 bg-white border border-slate-200 shadow-sm"
            >
              {/* Visual Column */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''} space-y-3`}>
                <div className="border border-slate-200 p-2 bg-slate-50">
                  <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                    <img
                      key={currentPhoto.url}
                      src={currentPhoto.url}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (currentPhoto.fallbackUrl && target.src !== window.location.origin + currentPhoto.fallbackUrl) {
                          target.src = currentPhoto.fallbackUrl;
                        }
                      }}
                      alt={currentPhoto.caption || service.title}
                      className="w-full h-full object-cover transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-2 left-2 bg-[#0B132B]/90 text-white text-[10px] font-mono px-2 py-0.5 max-w-[90%] truncate">
                      {currentPhoto.caption || service.title}
                    </div>
                  </div>
                </div>

                {/* Sub-gallery thumbnails if multiple images exist */}
                {gallery.length > 1 && (
                  <div className="flex items-center gap-2 px-1">
                    <span className="text-[10px] uppercase font-mono text-slate-400 font-bold">
                      Units:
                    </span>
                    {gallery.map((gItem, gIdx) => (
                      <button
                        key={gIdx}
                        onClick={() => handleSelectPhoto(service.id, gIdx)}
                        className={`relative h-12 w-20 border overflow-hidden transition-all ${
                          currentPhotoIndex === gIdx
                            ? 'border-amber-500 ring-2 ring-amber-400/30'
                            : 'border-slate-200 opacity-60 hover:opacity-100'
                        }`}
                        title={gItem.caption}
                      >
                        <img
                          src={gItem.url}
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (gItem.fallbackUrl && target.src !== window.location.origin + gItem.fallbackUrl) {
                              target.src = gItem.fallbackUrl;
                            }
                          }}
                          alt={`Thumbnail ${gIdx + 1}`}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </button>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono px-2 pt-1">
                  <span>DIVISION 0{idx + 1}</span>
                  <span>GHANA OPERATIONS</span>
                </div>
              </div>

              {/* Prose & Capabilities Column */}
              <div className={`lg:col-span-7 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-1 border-b border-slate-100 pb-4">
                  <span className="font-mono text-xs text-amber-700 font-bold block">
                    CAPABILITY PROFILE // 0{idx + 1}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950">
                    {service.title}
                  </h2>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Key Benefits */}
                <div className="space-y-3 pt-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                    Operational Standards &amp; Highlights
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                    {service.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="p-3 bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 bg-amber-500 mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scope */}
                <div className="pt-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-2">
                    Scope of Capabilities
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {service.capabilities.map((cap, cIdx) => (
                      <span
                        key={cIdx}
                        className="bg-slate-100 text-slate-800 px-3 py-1 font-mono text-[11px] border border-slate-200"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-6 py-3 bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-[0.14em] rounded-none transition-colors"
                  >
                    {service.ctaText}
                  </button>

                  {service.id === 'container-truck' && (
                    <button
                      onClick={() => onNavigate('registration-portal')}
                      className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-[0.14em] rounded-none transition-colors flex items-center gap-2"
                    >
                      <span>Register for Tema Harbour Project</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
