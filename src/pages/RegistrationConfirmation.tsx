import React, { useState } from 'react';
import { PageView, RegistrationSubmission } from '../types';
import { 
  CheckCircle2, Printer, Copy, Check, Home, ArrowRight, FileText, 
  ChevronDown, ChevronUp, Lock, ShieldCheck, Share2, ExternalLink
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { 
  buildRegistrationWhatsAppMessage, 
  buildWhatsAppChatUrl, 
  openWhatsAppRegistration,
  WHATSAPP_DISPLAY_NUMBER 
} from '../utils/whatsappRegistration';
import { AabestLogo } from '../components/AabestLogo';

interface RegistrationConfirmationProps {
  submission: RegistrationSubmission | null;
  onNavigate: (page: PageView) => void;
}

export const RegistrationConfirmation: React.FC<RegistrationConfirmationProps> = ({ 
  submission, 
  onNavigate 
}) => {
  const [copiedRef, setCopiedRef] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [showFullSummary, setShowFullSummary] = useState(true);
  const [showMessagePreview, setShowMessagePreview] = useState(false);

  // Fallback demo submission if accessed directly
  const data: RegistrationSubmission = submission || {
    id: 'demo-sub',
    referenceNumber: 'AAB-TH-2026-000418',
    createdAt: new Date().toISOString().split('T')[0],
    category: 'transport_enterprise',
    categoryLabel: 'Transport Company / Enterprise',
    legalName: 'Tema Coastal Logistics Limited',
    contactPerson: 'Samuel Tetteh',
    phone: '0597684860',
    whatsapp: '0597684860',
    altPhone: '0597684860',
    email: 'operations@temacoastal.com.gh',
    address: 'Commercial Warehouse Zone, Community 1, Tema, Ghana',
    trucks: [
      { id: '1', tractorRegNo: 'GT 8820-22', flatbedTrailerRegNo: 'GE 1190-21', assetIdRef: 'TCL-01' },
      { id: '2', tractorRegNo: 'GT 8821-22', flatbedTrailerRegNo: 'GE 1191-21', assetIdRef: 'TCL-02' }
    ],
    drivers: [
      { id: '1', fullName: 'Kwaku Osei', phone: '0597684860', ghanaCardNo: 'GHA-891028394-1', licenseNo: 'DL-901844-GH', licenseClass: 'Class F (Heavy Commercial)', licenseExpiry: '2028-06-30' }
    ],
    documents: [],
    declaration: {
      authorizedName: 'Samuel Tetteh',
      positionTitle: 'Operations Director',
      electronicSignature: 'Samuel Tetteh',
      date: new Date().toLocaleDateString('en-GB'),
      confirmedDeclaration: true,
      confirmedNonCircumvention: true,
      capacity: 'Enterprise Representative'
    },
    status: 'Submitted'
  };

  const whatsappMessage = buildRegistrationWhatsAppMessage(data);
  const whatsappUrl = buildWhatsAppChatUrl(data);

  const handleCopyRef = () => {
    navigator.clipboard.writeText(data.referenceNumber);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 3000);
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(whatsappMessage);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 3000);
  };

  const handleOpenWhatsApp = () => {
    openWhatsAppRegistration(data);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* WHATSAPP CLICK-TO-CHAT DISPATCH ACTION CARD */}
        <div className="bg-white border-2 border-emerald-600 shadow-lg p-6 sm:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-6 h-6 fill-current text-emerald-700" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-800 font-bold block">
                  Official WhatsApp Dispatch Channel
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-950">
                  Registration Formatted for WhatsApp Delivery
                </h2>
              </div>
            </div>

            <div className="sm:text-right">
              <span className="font-mono text-[10px] uppercase text-slate-400 block font-semibold">
                Destination Line
              </span>
              <span className="font-mono text-sm font-bold text-emerald-800">
                {WHATSAPP_DISPLAY_NUMBER}
              </span>
            </div>
          </div>

          <div className="space-y-4 text-sm text-slate-800 leading-relaxed">
            <p className="text-base font-semibold text-slate-900">
              Almost done! Your registration is ready to send to our Tema Harbour operations team.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-4 bg-emerald-50 border-2 border-emerald-300 space-y-1">
                <span className="font-bold text-xs uppercase tracking-wider text-emerald-800 block">
                  STEP 1:
                </span>
                <p className="font-bold text-sm text-slate-950">
                  Tap the big green button below to open WhatsApp.
                </p>
              </div>

              <div className="p-4 bg-emerald-50 border-2 border-emerald-300 space-y-1">
                <span className="font-bold text-xs uppercase tracking-wider text-emerald-800 block">
                  STEP 2:
                </span>
                <p className="font-bold text-sm text-slate-950">
                  When WhatsApp opens, tap <span className="text-emerald-700 underline font-black">SEND</span> to deliver your details!
                </p>
              </div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span>Sending directly to Tema Coordinator:</span>
              <strong className="text-emerald-800 font-mono text-sm">{WHATSAPP_DISPLAY_NUMBER}</strong>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleOpenWhatsApp}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm uppercase tracking-wider rounded-none transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>OPEN WHATSAPP &amp; TAP SEND ({WHATSAPP_DISPLAY_NUMBER})</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
            </a>

            <button
              onClick={handleCopyMessage}
              className="px-4 py-3.5 border border-slate-300 hover:border-slate-800 bg-white text-slate-800 font-semibold text-xs uppercase tracking-wider rounded-none transition-colors flex items-center gap-2"
            >
              {copiedMessage ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
              <span>{copiedMessage ? 'Copied Message Text!' : 'Copy Formatted Text'}</span>
            </button>

            <button
              onClick={() => setShowMessagePreview(!showMessagePreview)}
              className="px-4 py-3.5 text-slate-600 hover:text-slate-950 text-xs font-semibold flex items-center gap-1.5 transition-colors ml-auto"
            >
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              <span>{showMessagePreview ? 'Hide Message Preview' : 'Preview Message Content'}</span>
              {showMessagePreview ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          </div>

          {/* Collapsible Formatted Message Preview */}
          {showMessagePreview && (
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-slate-500">
                  Exact WhatsApp Dispatch Message Preview:
                </span>
                <button
                  onClick={handleCopyMessage}
                  className="font-mono text-[11px] text-emerald-700 hover:text-emerald-900 font-semibold inline-flex items-center gap-1"
                >
                  {copiedMessage ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedMessage ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 bg-slate-900 text-slate-100 font-mono text-[11px] leading-relaxed whitespace-pre-wrap overflow-x-auto max-h-72 overflow-y-auto border border-slate-800">
                {whatsappMessage}
              </pre>
            </div>
          )}

          {/* Privacy & Future Secure Alternative Notice */}
          <div className="p-4 border border-slate-200 bg-slate-50 text-[11px] text-slate-600 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 uppercase tracking-wider text-[10px]">
              <Lock className="w-3.5 h-3.5 text-slate-500" />
              <span>Security &amp; Data Safeguard Protocol</span>
            </div>
            <p className="leading-relaxed">
              <strong>Identity Withheld for Safety:</strong> In accordance with strict data privacy guidelines, private Ghana Card numbers, Driver's License IDs, and raw uploaded identity files are <strong>not transmitted over WhatsApp</strong>.
            </p>
            <p className="leading-relaxed">
              <strong>Secure Verification Alternative:</strong> Biometric Ghana Card cross-checks and physical DVLA registration logbook inspections will be conducted in-person at the Aabest Services Tema Port Operations Desk (Community 1) or handled securely through an encrypted document verification backend prior to issuing port evacuation corridor credentials.
            </p>
          </div>
        </div>

        {/* Main Official Intake Summary Block */}
        <div className="bg-white border border-slate-200 shadow-sm p-8 sm:p-14 space-y-8">
          
          {/* Official Registry Header */}
          <div className="border-b border-slate-200 pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-700 font-bold block">
                Official Intake Confirmation · Tema Port Evacuation
              </span>
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-slate-950 tracking-tight">
                Registration Dossier Prepared
              </h1>
              <p className="text-xs text-slate-500">
                Your registration has been structured for WhatsApp delivery to the project coordinator.
              </p>
            </div>

            <div className="text-right sm:border-l sm:border-slate-200 sm:pl-6 space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">
                Demonstration Reference
              </span>
              <div className="font-mono text-xl font-bold text-slate-950 tracking-wider">
                {data.referenceNumber}
              </div>
              <button
                onClick={handleCopyRef}
                className="text-[11px] font-mono text-amber-700 hover:text-amber-900 inline-flex items-center gap-1"
              >
                {copiedRef ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedRef ? 'Copied to Clipboard' : 'Copy Code'}</span>
              </button>
            </div>
          </div>

          {/* Key Summary Dossier Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 border border-slate-200 divide-x divide-y sm:divide-y-0 divide-slate-200 text-xs">
            <div className="p-4 space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">Applicant</span>
              <span className="font-display font-bold text-slate-950 block truncate">{data.legalName}</span>
            </div>

            <div className="p-4 space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">Category</span>
              <span className="font-display font-bold text-slate-950 block truncate">{data.categoryLabel}</span>
            </div>

            <div className="p-4 space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">Fleet Manifest</span>
              <span className="font-mono font-bold text-slate-950 block">{data.trucks.length} Units</span>
            </div>

            <div className="p-4 space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">Drivers Rostered</span>
              <span className="font-mono font-bold text-slate-950 block">{data.drivers.length} Personnel</span>
            </div>
          </div>

          {/* Mandatory Clear Confirmation / No Permanent Web Storage Notice */}
          <div className="p-5 border border-amber-300 bg-amber-500/10 text-xs text-amber-950 space-y-2 leading-relaxed">
            <span className="font-bold block uppercase tracking-wider text-[10px]">
              Registration &amp; Storage Notice
            </span>
            <p>
              Please note that your registration has been prepared specifically for <strong>WhatsApp transmission</strong> directly to Aabest Services at <strong>{WHATSAPP_DISPLAY_NUMBER}</strong> and is <strong>not permanently stored on this website</strong>.
            </p>
            <p className="text-[11px] text-amber-900">
              The website acts as a secure frontend intake generator. Ensure that you tap <strong>Send</strong> in WhatsApp to officially deliver your registration details to our operations coordination team.
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="px-5 py-3 bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-[0.14em] rounded-none transition-all flex items-center gap-2"
              >
                <Printer className="w-3.5 h-3.5 text-amber-400" />
                <span>Print Official Summary</span>
              </button>

              <button
                onClick={() => onNavigate('dashboard')}
                className="px-5 py-3 bg-transparent hover:bg-slate-100 text-slate-900 border border-slate-300 font-semibold text-xs uppercase tracking-[0.12em] rounded-none transition-colors"
              >
                View in Fleet Console
              </button>
            </div>

            <button
              onClick={() => onNavigate('home')}
              className="text-xs font-bold text-slate-700 hover:text-slate-950 flex items-center gap-1.5"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Return to Homepage</span>
            </button>
          </div>

        </div>

        {/* PRINTABLE OFFICIAL RECORD */}
        {showFullSummary && (
          <div className="bg-white border border-slate-200 shadow-sm p-8 sm:p-12 text-xs space-y-8 print:border-none print:shadow-none print:p-0">
            
            <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <AabestLogo variant="light-bg" className="h-[68px] sm:h-[82px] w-auto object-contain" />
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">Tema Harbour Fleet Intake Summary Document</span>
              </div>
              <div className="text-left sm:text-right">
                <span className="font-mono font-bold text-slate-950 block">{data.referenceNumber}</span>
                <span className="font-mono text-[10px] text-slate-400">Date: {data.createdAt}</span>
              </div>
            </div>

            {/* Applicant Details */}
            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 block">
                01 / APPLICANT SPECIFICATIONS
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border border-slate-200 p-4 bg-slate-50">
                <div>
                  <span className="text-slate-400 uppercase text-[9px] block">Legal Name</span>
                  <span className="font-bold text-slate-900">{data.legalName}</span>
                </div>
                <div>
                  <span className="text-slate-400 uppercase text-[9px] block">Contact Person</span>
                  <span className="font-bold text-slate-900">{data.contactPerson}</span>
                </div>
                <div>
                  <span className="text-slate-400 uppercase text-[9px] block">Primary Phone</span>
                  <span className="font-mono text-slate-900">{data.phone}</span>
                </div>
                <div>
                  <span className="text-slate-400 uppercase text-[9px] block">WhatsApp</span>
                  <span className="font-mono text-slate-900">{data.whatsapp || data.phone}</span>
                </div>
                <div>
                  <span className="text-slate-400 uppercase text-[9px] block">Email</span>
                  <span className="text-slate-900 truncate block">{data.email}</span>
                </div>
                <div>
                  <span className="text-slate-400 uppercase text-[9px] block">Operating Address</span>
                  <span className="text-slate-900">{data.address}</span>
                </div>
              </div>
            </div>

            {/* Fleet Manifest */}
            {data.trucks.length > 0 && (
              <div className="space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 block">
                  02 / REGISTERED CONTAINER FLATBED FLEET ({data.trucks.length} UNITS)
                </span>
                <div className="border border-slate-200 overflow-hidden">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-slate-100 text-[10px] uppercase font-bold text-slate-700">
                      <tr>
                        <th className="p-3">Unit</th>
                        <th className="p-3">Tractor Head Reg.</th>
                        <th className="p-3">Flatbed Trailer Reg.</th>
                        <th className="p-3">Asset Designation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {data.trucks.map((t, idx) => (
                        <tr key={t.id}>
                          <td className="p-3 text-slate-500 font-sans">Unit #{idx + 1 < 10 ? '0' + (idx + 1) : idx + 1}</td>
                          <td className="p-3 font-bold text-slate-950">{t.tractorRegNo}</td>
                          <td className="p-3 text-slate-700">{t.flatbedTrailerRegNo}</td>
                          <td className="p-3 text-slate-500">{t.assetIdRef || '—'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Drivers */}
            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 block">
                03 / ASSIGNED DRIVERS ({data.drivers.length} PERSONNEL)
              </span>
              <div className="border border-slate-200 overflow-hidden">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-slate-100 text-[10px] uppercase font-bold text-slate-700">
                    <tr>
                      <th className="p-3 font-sans">Full Name</th>
                      <th className="p-3">Phone</th>
                      <th className="p-3">Ghana Card</th>
                      <th className="p-3">Driver License</th>
                      <th className="p-3 font-sans">Class</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {data.drivers.map((d) => (
                      <tr key={d.id}>
                        <td className="p-3 font-bold text-slate-950 font-sans">{d.fullName}</td>
                        <td className="p-3 text-slate-700">{d.phone}</td>
                        <td className="p-3 text-slate-700">{d.ghanaCardNo}</td>
                        <td className="p-3 text-slate-700">{d.licenseNo}</td>
                        <td className="p-3 text-slate-700 font-sans">{d.licenseClass}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Formal Declaration & Stamp */}
            <div className="p-6 border border-slate-200 bg-slate-50 space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 block">
                04 / VERIFIED DECLARATION &amp; NON-CIRCUMVENTION RECORD
              </span>
              <p className="text-slate-600 text-xs italic leading-relaxed">
                Applicant confirmed complete and accurate information declaration and accepted the Sleek Investment Consult Non-Circumvention agreement.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 border-t border-slate-200 text-xs">
                <div>
                  <span className="text-slate-400 text-[10px] uppercase block">Authorized Signatory</span>
                  <span className="font-bold text-slate-950">{data.declaration.authorizedName}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] uppercase block">Designation</span>
                  <span className="font-bold text-slate-950">{data.declaration.positionTitle}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] uppercase block">Capacity</span>
                  <span className="font-bold text-slate-950">{data.declaration.capacity}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] uppercase block">Electronic Signature</span>
                  <span className="font-serif italic font-bold text-slate-950 text-sm">{data.declaration.electronicSignature}</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
