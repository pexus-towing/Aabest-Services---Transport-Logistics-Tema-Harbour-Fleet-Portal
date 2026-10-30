import React, { useState } from 'react';
import { PageView, ServiceId, RegistrationSubmission } from './types';
import { INITIAL_DEMO_SUBMISSIONS } from './data/mockDashboardData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Homepage Components
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { TemaProjectBanner } from './components/TemaProjectBanner';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ContactSection } from './components/ContactSection';

// Dedicated Pages
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectInfoPage } from './pages/ProjectInfoPage';
import { TemaRegistrationPortal } from './pages/TemaRegistrationPortal';
import { RegistrationConfirmation } from './pages/RegistrationConfirmation';
import { DashboardPage } from './pages/DashboardPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceId | undefined>(undefined);
  
  // Demonstration records state initialized with realistic Ghanaian data
  const [submissions, setSubmissions] = useState<RegistrationSubmission[]>(INITIAL_DEMO_SUBMISSIONS);
  const [lastSubmission, setLastSubmission] = useState<RegistrationSubmission | null>(null);

  const handleNavigate = (page: PageView, serviceId?: ServiceId) => {
    setCurrentPage(page);
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompleteRegistration = (newSubmission: RegistrationSubmission) => {
    setLastSubmission(newSubmission);
    setSubmissions([newSubmission, ...submissions]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-500 selection:text-slate-950">
      {/* Top Navigation */}
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <div>
            <HeroSection onNavigate={handleNavigate} />
            <AboutSection onNavigate={handleNavigate} />
            <ServicesSection onNavigate={handleNavigate} />
            <TemaProjectBanner onNavigate={handleNavigate} />
            <WhyChooseSection />
            <ContactSection onNavigate={handleNavigate} />
          </div>
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'services' && (
          <ServicesPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'service-detail' && (
          <ServicesPage 
            initialServiceId={selectedServiceId} 
            onNavigate={handleNavigate} 
          />
        )}

        {currentPage === 'project-info' && (
          <ProjectInfoPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'registration-portal' && (
          <TemaRegistrationPortal 
            onNavigate={handleNavigate}
            onCompleteRegistration={handleCompleteRegistration}
          />
        )}

        {currentPage === 'registration-confirmation' && (
          <RegistrationConfirmation 
            submission={lastSubmission}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'dashboard' && (
          <DashboardPage 
            submissions={submissions}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'privacy' && (
          <PrivacyPolicyPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Corporate Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
