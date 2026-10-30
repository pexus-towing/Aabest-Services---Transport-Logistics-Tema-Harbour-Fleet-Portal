import React from 'react';
import { PageView } from '../types';
import { ArrowLeft, ShieldCheck, AlertTriangle } from 'lucide-react';
import { AabestLogo } from '../components/AabestLogo';

interface PrivacyPolicyPageProps {
  onNavigate: (page: PageView) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation back */}
        <button
          onClick={() => onNavigate('home')}
          className="text-xs uppercase tracking-wider font-bold text-slate-600 hover:text-slate-950 inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </button>

        {/* Content Box */}
        <div className="bg-white border border-slate-200 shadow-sm p-8 sm:p-14 space-y-8">
          <div className="space-y-2 border-b border-slate-200 pb-6">
            <AabestLogo variant="light-bg" className="h-[61px] w-auto object-contain mb-3" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-700 font-bold block">
              Governance &amp; Data Stewardship Notice
            </span>
            <h1 className="text-2xl sm:text-4xl font-display font-bold text-slate-950 tracking-tight">
              Privacy Policy &amp; Data Protection Statement
            </h1>
            <p className="text-slate-400 text-xs font-mono">
              Last Updated: October 2026 · Aabest Services (Republic of Ghana)
            </p>
          </div>

          {/* Prototype Limitation Notice */}
          <div className="p-5 border border-amber-300 bg-amber-500/10 text-xs text-amber-950 space-y-1.5 leading-relaxed">
            <div className="flex items-center gap-2 font-bold text-amber-900">
              <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Frontend Demonstration Security Notice</span>
            </div>
            <p>
              This website currently operates as a frontend user interface demonstration. In this version, document uploads and form fields are processed strictly inside your local browser memory for evaluation purposes. No permanent transmission, cloud database ingestion, or persistent caching of sensitive Ghana Card numbers or identification files occurs. When production backend infrastructure is deployed, end-to-end encryption and compliance controls aligned with the Data Protection Act, 2012 (Act 843) of Ghana will govern live operations.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8 text-xs text-slate-700 leading-relaxed border-t border-slate-100 pt-6">
            
            <section className="space-y-2">
              <span className="font-mono text-amber-700 font-bold text-[10px] block">01 // RESPONSIBLE ENTITY</span>
              <h2 className="text-base font-display font-bold text-slate-950">
                Organization Responsible for Information Collection
              </h2>
              <p>
                The data collection activities conducted through this website and the Tema Harbour Container Evacuation Registration Portal are coordinated by <strong>Aabest Services</strong> (aabestservices.com), operating in the Republic of Ghana in conjunction with authorized project coordinators including Sleek Investment Consult for the container evacuation operations.
              </p>
            </section>

            <section className="space-y-2">
              <span className="font-mono text-amber-700 font-bold text-[10px] block">02 // PURPOSE OF PROCESSING</span>
              <h2 className="text-base font-display font-bold text-slate-950">
                Purpose of Collecting Applicant &amp; Fleet Information
              </h2>
              <p>
                We collect personal and commercial fleet data exclusively for the following operational objectives:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li>Identifying and cataloguing qualified container tractor heads and flatbed trailers.</li>
                <li>Conducting administrative vetting of commercial driver credentials (validity of Class F commercial driver’s licenses and Ghana Cards).</li>
                <li>Verifying roadworthiness certificates issued by the Driver and Vehicle Licensing Authority (DVLA) and active comprehensive insurance cover.</li>
                <li>Organizing roster pools for the 3-driver 8-hour shift rotations for port container evacuation.</li>
                <li>Facilitating official licensing applications and port security clearance with Ghana Ports and Harbours Authority (GPHA).</li>
              </ul>
            </section>

            <section className="space-y-2">
              <span className="font-mono text-amber-700 font-bold text-[10px] block">03 // DATA CATEGORIES</span>
              <h2 className="text-base font-display font-bold text-slate-950">
                Categories of Information Collected
              </h2>
              <p>
                Depending on whether an applicant registers as a Transport Company, Independent Truck Owner, or Commercial Driver, collected data categories include:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li><strong>Individual &amp; Corporate Identification:</strong> Registered business name, contact person name, office address in Ghana, telephone numbers, and email.</li>
                <li><strong>Commercial Fleet Specifications:</strong> Tractor head registration numbers, flatbed trailer registration numbers, chassis/asset identifiers, and trailer twist-lock verification.</li>
                <li><strong>Driver Credentials:</strong> Full legal name, National Identification (Ghana Card) numbers, DVLA commercial driver's license numbers, license class endorsements, and expiry dates.</li>
                <li><strong>Compliance Documentation:</strong> Scanned copies of vehicle registration logbooks, DVLA roadworthiness inspection certificates, comprehensive insurance policies, and National ID copies.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <span className="font-mono text-amber-700 font-bold text-[10px] block">04 // RECIPIENTS &amp; SAFEGUARDS</span>
              <h2 className="text-base font-display font-bold text-slate-950">
                Intended Recipients of Data
              </h2>
              <p>
                Submitted information is strictly restricted to authorized operational personnel directly involved in the Tema Harbour container evacuation vetting process:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li>Aabest Services Fleet Intake &amp; Vetting Committee.</li>
                <li>Authorized Project Consultants (including Sleek Investment Consult).</li>
                <li>Designated compliance inspection officers of the Ghana Ports and Harbours Authority (GPHA) for official gate pass issuance.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <span className="font-mono text-amber-700 font-bold text-[10px] block">05 // RECTIFICATION &amp; RETENTION</span>
              <h2 className="text-base font-display font-bold text-slate-950">
                Access, Rectification &amp; Retention
              </h2>
              <p>
                Applicants have the right to request access to their registered fleet records, correct clerical errors, or update assigned driver pairings prior to final site integration. Data collected during the onboarding intake will be retained for the duration of the 5-year project operational review cycle, or until an applicant formally withdraws from the onboarding process.
              </p>
            </section>

            <section className="space-y-2">
              <span className="font-mono text-amber-700 font-bold text-[10px] block">06 // CONTACT FOR CONCERNS</span>
              <h2 className="text-base font-display font-bold text-slate-950">
                Privacy Inquiries &amp; Operational Contacts
              </h2>
              <div className="p-4 border border-slate-200 bg-slate-50 space-y-1 font-mono text-[11px]">
                <div>Email: <span className="font-bold text-slate-950">operations@aabestservices.com</span></div>
                <div>Location: <span className="text-slate-800">Tema Heavy Industrial Area / Port Transit Corridor, Greater Accra, Ghana</span></div>
              </div>
            </section>

          </div>

          <div className="pt-6 border-t border-slate-200 flex justify-end">
            <button
              onClick={() => onNavigate('home')}
              className="px-6 py-3 bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-wider rounded-none transition-colors"
            >
              Close &amp; Return to Site
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
