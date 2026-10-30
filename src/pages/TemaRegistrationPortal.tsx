import React, { useState, useEffect } from 'react';
import { PageView, RegistrationCategory, TruckRecord, DriverRecord, UploadedDoc, DeclarationData, RegistrationSubmission } from '../types';
import { 
  ArrowRight, ArrowLeft, Plus, Trash2, Check, AlertCircle, Upload, 
  CheckCircle2, FileText, AlertTriangle, Eye, ShieldCheck, ChevronRight, Lock,
  Phone, User, Truck, Camera, CheckSquare, HelpCircle, FileCheck
} from 'lucide-react';
import { openWhatsAppRegistration, WHATSAPP_DISPLAY_NUMBER } from '../utils/whatsappRegistration';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { AabestLogo } from '../components/AabestLogo';

interface TemaRegistrationPortalProps {
  onNavigate: (page: PageView) => void;
  onCompleteRegistration: (submission: RegistrationSubmission) => void;
}

export const TemaRegistrationPortal: React.FC<TemaRegistrationPortalProps> = ({ 
  onNavigate, 
  onCompleteRegistration 
}) => {
  const [inFormMode, setInFormMode] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [draftSavedNotice, setDraftSavedNotice] = useState<boolean>(false);
  const [duplicateError, setDuplicateError] = useState<string | null>(null);
  const [stepError, setStepError] = useState<string | null>(null);

  // Form State
  const [category, setCategory] = useState<RegistrationCategory>('truck_owner');
  
  // Step 2: Contact Details
  const [legalName, setLegalName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [isWhatsappSame, setIsWhatsappSame] = useState(true);
  const [whatsapp, setWhatsapp] = useState('');
  const [altPhone, setAltPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  // Step 3: Truck Details
  const [trucks, setTrucks] = useState<TruckRecord[]>([
    {
      id: 'trk-1',
      tractorRegNo: '',
      flatbedTrailerRegNo: '',
      assetIdRef: 'Truck 1'
    }
  ]);

  // Step 4: Driver Details
  const [drivers, setDrivers] = useState<DriverRecord[]>([
    {
      id: 'drv-1',
      fullName: '',
      phone: '',
      altPhone: '',
      email: '',
      ghanaCardNo: '',
      licenseNo: '',
      licenseClass: 'Class F (Heavy Commercial)',
      licenseExpiry: '',
      assignedTruckNo: ''
    }
  ]);

  // Step 5: Document Photos / Files
  const [documents, setDocuments] = useState<UploadedDoc[]>([
    {
      id: 'doc-ghana-card',
      docType: 'ghana_card',
      title: 'Ghana Card Photo',
      requiredFor: 'driver',
      status: 'not_uploaded'
    },
    {
      id: 'doc-driver-license',
      docType: 'driver_license',
      title: "Driver's License (Class F)",
      requiredFor: 'driver',
      status: 'not_uploaded'
    },
    {
      id: 'doc-logbook',
      docType: 'logbook_tractor',
      title: 'DVLA Truck Logbook (Tractor & Flatbed)',
      requiredFor: 'truck',
      status: 'not_uploaded'
    },
    {
      id: 'doc-dvla-roadworthy',
      docType: 'dvla_roadworthy',
      title: 'Roadworthy Inspection Sticker',
      requiredFor: 'truck',
      status: 'not_uploaded'
    },
    {
      id: 'doc-comprehensive-insurance',
      docType: 'comprehensive_insurance',
      title: 'Truck Insurance Certificate',
      requiredFor: 'truck',
      status: 'not_uploaded'
    }
  ]);

  // Step 6: Simple Declaration & Agreement
  const [declaration, setDeclaration] = useState<DeclarationData>({
    authorizedName: '',
    positionTitle: '',
    electronicSignature: '',
    date: new Date().toLocaleDateString('en-GB'),
    confirmedDeclaration: false,
    confirmedNonCircumvention: false,
    capacity: 'Truck Owner',
    driverDeclarationConfirmed: false
  });

  useEffect(() => {
    if (isWhatsappSame) {
      setWhatsapp(phone);
    }
  }, [phone, isWhatsappSame]);

  const handleStartWithCategory = (selectedCat: RegistrationCategory) => {
    setCategory(selectedCat);
    if (selectedCat === 'driver_only') {
      setDeclaration((prev) => ({ ...prev, capacity: 'Driver', positionTitle: 'Commercial Driver' }));
      setTrucks([]);
    } else {
      if (trucks.length === 0) {
        setTrucks([{ id: 'trk-1', tractorRegNo: '', flatbedTrailerRegNo: '', assetIdRef: 'Truck 1' }]);
      }
      if (selectedCat === 'transport_enterprise') {
        setDeclaration((prev) => ({ ...prev, capacity: 'Enterprise Representative', positionTitle: 'Managing Director / Fleet Manager' }));
      } else {
        setDeclaration((prev) => ({ ...prev, capacity: 'Truck Owner', positionTitle: 'Truck Owner' }));
      }
    }
    setInFormMode(true);
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddTruck = () => {
    if (trucks.length >= 50) {
      alert('You have reached the maximum of 50 trucks for this form. If you have more, please contact our office directly.');
      return;
    }
    const nextIdx = trucks.length + 1;
    const newTrk: TruckRecord = {
      id: `trk-${Date.now()}-${nextIdx}`,
      tractorRegNo: '',
      flatbedTrailerRegNo: '',
      assetIdRef: `Truck ${nextIdx}`
    };
    setTrucks([...trucks, newTrk]);
  };

  const handleRemoveTruck = (id: string) => {
    if (trucks.length <= 1) {
      alert('You must have at least 1 truck listed.');
      return;
    }
    setTrucks(trucks.filter((t) => t.id !== id));
  };

  const handleUpdateTruck = (id: string, field: keyof TruckRecord, value: string) => {
    setTrucks(trucks.map((t) => t.id === id ? { ...t, [field]: value } : t));
    setDuplicateError(null);
  };

  const validateTruckDuplicates = (): boolean => {
    const tractorNumbers = trucks.map(t => t.tractorRegNo.trim().toUpperCase()).filter(Boolean);
    const flatbedNumbers = trucks.map(t => t.flatbedTrailerRegNo.trim().toUpperCase()).filter(Boolean);

    const hasDuplicateTractor = new Set(tractorNumbers).size !== tractorNumbers.length;
    const hasDuplicateFlatbed = new Set(flatbedNumbers).size !== flatbedNumbers.length;

    if (hasDuplicateTractor) {
      setDuplicateError('⚠️ You entered the same Tractor Head number twice. Please make sure each front truck number is different.');
      return false;
    }
    if (hasDuplicateFlatbed) {
      setDuplicateError('⚠️ You entered the same Flatbed Trailer number twice. Please check your numbers.');
      return false;
    }
    return true;
  };

  const handleAddDriver = () => {
    const newDrv: DriverRecord = {
      id: `drv-${Date.now()}-${drivers.length + 1}`,
      fullName: '',
      phone: '',
      altPhone: '',
      email: '',
      ghanaCardNo: '',
      licenseNo: '',
      licenseClass: 'Class F (Heavy Commercial)',
      licenseExpiry: '',
      assignedTruckNo: trucks[0]?.tractorRegNo || ''
    };
    setDrivers([...drivers, newDrv]);
  };

  const handleRemoveDriver = (id: string) => {
    if (category === 'driver_only' && drivers.length <= 1) {
      alert('You must have at least one driver listed.');
      return;
    }
    setDrivers(drivers.filter((d) => d.id !== id));
  };

  const handleUpdateDriver = (id: string, field: keyof DriverRecord, value: string) => {
    setDrivers(drivers.map((d) => d.id === id ? { ...d, [field]: value } : d));
  };

  const handleFileSelect = (docId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    const maxSizeBytes = 15 * 1024 * 1024; // 15MB

    if (file.size > maxSizeBytes) {
      alert('Photo is too big. Please select a photo under 15MB.');
      return;
    }

    const fileSizeFormatted = (file.size / (1024 * 1024)).toFixed(1) + ' MB';

    setDocuments(documents.map((d) => {
      if (d.id === docId) {
        return {
          ...d,
          fileName: file.name,
          fileSize: fileSizeFormatted,
          fileType: file.type,
          status: 'selected_awaiting',
          selectedAt: new Date().toISOString().split('T')[0]
        };
      }
      return d;
    }));
  };

  const handleRemoveFile = (docId: string) => {
    setDocuments(documents.map((d) => {
      if (d.id === docId) {
        return {
          ...d,
          fileName: undefined,
          fileSize: undefined,
          fileType: undefined,
          status: 'not_uploaded'
        };
      }
      return d;
    }));
  };

  const validateCurrentStep = (): boolean => {
    setStepError(null);

    if (currentStep === 1) return true;

    if (currentStep === 2) {
      if (!legalName.trim()) {
        setStepError('⚠️ Please enter your Full Name or Company Name.');
        return false;
      }
      if (!contactPerson.trim()) {
        setStepError('⚠️ Please enter the name of the Contact Person we should call.');
        return false;
      }
      if (!phone.trim()) {
        setStepError('⚠️ Please enter your Phone Number so our team can reach you.');
        return false;
      }
      if (!address.trim()) {
        setStepError('⚠️ Please tell us where your truck is usually parked or based (e.g. Tema Community 1).');
        return false;
      }
      return true;
    }

    if (currentStep === 3) {
      if (category !== 'driver_only') {
        if (trucks.length === 0) {
          setStepError('⚠️ Please add at least 1 truck.');
          return false;
        }
        for (let i = 0; i < trucks.length; i++) {
          const trk = trucks[i];
          if (!trk.tractorRegNo.trim()) {
            setStepError(`⚠️ Please write the Tractor Head number for Truck #${i + 1} (e.g. GT 1234-22).`);
            return false;
          }
          if (!trk.flatbedTrailerRegNo.trim()) {
            setStepError(`⚠️ Please write the Flatbed Trailer number for Truck #${i + 1} (e.g. GE 5678-21).`);
            return false;
          }
        }
        if (!validateTruckDuplicates()) {
          return false;
        }
      }
      return true;
    }

    if (currentStep === 4) {
      if (drivers.length === 0) {
        setStepError('⚠️ Please enter at least 1 driver.');
        return false;
      }
      for (let i = 0; i < drivers.length; i++) {
        const drv = drivers[i];
        if (!drv.fullName.trim()) {
          setStepError(`⚠️ Please write the Full Name for Driver #${i + 1}.`);
          return false;
        }
        if (!drv.phone.trim()) {
          setStepError(`⚠️ Please write the Phone Number for Driver #${i + 1}.`);
          return false;
        }
      }
      return true;
    }

    if (currentStep === 5) {
      // Document upload is made easy and forgiving; they can skip or take photos
      return true;
    }

    if (currentStep === 6) {
      if (!declaration.confirmedDeclaration) {
        setStepError('⚠️ Please tick the first box to confirm your details are true and correct.');
        return false;
      }
      if (!declaration.confirmedNonCircumvention) {
        setStepError('⚠️ Please tick the agreement box confirming you agree to work with Aabest Services & Sleek Investment Consult.');
        return false;
      }
      if (!declaration.authorizedName.trim()) {
        setStepError('⚠️ Please write your Full Legal Name in the signature box.');
        return false;
      }
      return true;
    }

    return true;
  };

  const handleNextStep = () => {
    if (validateCurrentStep()) {
      if (category === 'driver_only' && currentStep === 2) {
        setCurrentStep(4); // Skip truck entry for drivers
      } else {
        setCurrentStep(currentStep + 1);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    setStepError(null);
    if (category === 'driver_only' && currentStep === 4) {
      setCurrentStep(2);
    } else {
      setCurrentStep(currentStep - 1);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveDraft = () => {
    setDraftSavedNotice(true);
    setTimeout(() => setDraftSavedNotice(false), 5000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateCurrentStep()) return;

    const randomSeq = Math.floor(100000 + Math.random() * 900000);
    const generatedRef = `AAB-TH-2026-${randomSeq}`;

    const submission: RegistrationSubmission = {
      id: `sub-${Date.now()}`,
      referenceNumber: generatedRef,
      createdAt: new Date().toISOString().split('T')[0],
      category,
      categoryLabel: 
        category === 'transport_enterprise' ? 'Transport Company / Enterprise' :
        category === 'truck_owner' ? 'Truck Owner / Individual' :
        category === 'independent_truck_owner' ? 'Independent Container Truck Owner' : 'Driver Registration Only',
      legalName: legalName || drivers[0]?.fullName || 'Applicant',
      contactPerson: contactPerson || drivers[0]?.fullName || 'Primary Contact',
      phone,
      whatsapp: isWhatsappSame ? phone : whatsapp,
      altPhone,
      email: email || 'operations@aabestservices.com',
      address,
      trucks: category === 'driver_only' ? [] : trucks,
      drivers,
      documents,
      declaration: {
        ...declaration,
        electronicSignature: declaration.electronicSignature || declaration.authorizedName
      },
      status: 'Submitted'
    };

    onCompleteRegistration(submission);
    
    // Automatically open WhatsApp with the prepared registration message addressed to 0597684860
    openWhatsAppRegistration(submission);

    onNavigate('registration-confirmation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Human-friendly step labels
  const stepTitles = [
    { num: 1, title: 'Who You Are' },
    { num: 2, title: 'Your Contact Details' },
    { num: 3, title: 'Your Truck(s)' },
    { num: 4, title: 'Driver Details' },
    { num: 5, title: 'Document Photos' },
    { num: 6, title: 'Review & Send' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Top Header */}
      <div className="bg-[#0B132B] text-white py-10 sm:py-14 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <AabestLogo variant="dark-bg" className="h-[61px] sm:h-[75px] w-auto object-contain" />
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 px-3 py-1 text-xs text-amber-300 font-bold uppercase tracking-wider">
              <span>Official Intake · Tema Harbour Evacuation</span>
            </div>
          </div>
          
          <h1 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-white leading-tight">
            Tema Harbour Truck &amp; Driver Registration
          </h1>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            Register your flatbed container truck or register as a driver. This form takes only 3 to 5 minutes to complete.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5 text-amber-400 font-bold">
              <Phone className="w-4 h-4" />
              <span>Need help filling this? Call or WhatsApp:</span>
              <a href="tel:0597684860" className="underline text-white font-mono hover:text-amber-300">{WHATSAPP_DISPLAY_NUMBER}</a>
            </span>
          </div>
        </div>
      </div>

      {draftSavedNotice && (
        <div className="bg-emerald-600 text-white px-4 py-3 text-sm font-bold text-center flex items-center justify-center gap-2 shadow-sm">
          <CheckCircle2 className="w-4 h-4" />
          <span>Your information has been saved in your browser.</span>
        </div>
      )}

      {/* LANDING VIEW (BEFORE STARTING) */}
      {!inFormMode ? (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
          
          {/* Big Direct Call to Action */}
          <div className="bg-gradient-to-r from-amber-400 to-amber-300 p-8 text-slate-950 border border-amber-500 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="font-mono text-xs uppercase tracking-wider font-bold block text-slate-800">
                Ready to register now?
              </span>
              <h2 className="text-xl sm:text-2xl font-display font-bold">
                Start Your Registration in 1 Click
              </h2>
              <p className="text-xs sm:text-sm text-slate-800">
                Pick your category below or tap the button to start immediately.
              </p>
            </div>

            <button
              onClick={() => handleStartWithCategory('truck_owner')}
              className="w-full sm:w-auto px-8 py-4 bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm uppercase tracking-wider rounded-none transition-all flex items-center justify-center gap-3 shrink-0 shadow-lg"
            >
              <Truck className="w-5 h-5 text-amber-400" />
              <span>START REGISTRATION</span>
              <ArrowRight className="w-5 h-5 text-amber-400" />
            </button>
          </div>

          {/* How It Works in 3 Simple Steps */}
          <div className="bg-white p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
              How Registration Works (Very Simple 3 Steps)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <strong className="block text-slate-950 mb-1">Fill Your Details</strong>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Type your phone number, your truck registration numbers, and driver details.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <strong className="block text-slate-950 mb-1">Snap Document Photos</strong>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Take pictures with your phone camera of your Ghana Card, driver's license, and logbook (or bring them in person).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <strong className="block text-slate-950 mb-1">Send on WhatsApp</strong>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Tap Submit, and WhatsApp will open ready to deliver your details directly to our desk at {WHATSAPP_DISPLAY_NUMBER}!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 1: Who are you registering as? (Big friendly cards) */}
          <div className="space-y-4">
            <div className="text-center sm:text-left space-y-1">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-950">
                Choose Who You Are Registering As:
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Tap the card that matches your situation:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              
              {/* Option 1: Truck Owner */}
              <div 
                onClick={() => handleStartWithCategory('truck_owner')}
                className="bg-white p-6 sm:p-8 border-2 border-slate-200 hover:border-amber-400 cursor-pointer transition-all shadow-sm hover:shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center shrink-0 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase font-bold text-amber-700 block">Most Popular</span>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-950">
                      I Own 1 or More Container Trucks
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                      For individual truck owners and owner-drivers who have flatbed container trucks with twist locks.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full sm:w-auto px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-none flex items-center justify-center gap-2 shrink-0 shadow-sm"
                >
                  <span>START REGISTRATION</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Option 2: Transport Company / Fleet */}
              <div 
                onClick={() => handleStartWithCategory('transport_enterprise')}
                className="bg-white p-6 sm:p-8 border-2 border-slate-200 hover:border-slate-950 cursor-pointer transition-all shadow-sm hover:shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 text-slate-800 border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-slate-950 group-hover:text-white transition-colors">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase font-bold text-slate-500 block">Fleet &amp; Company</span>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-950">
                      Transport Company / Big Fleet
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                      For registered logistics enterprises and haulage businesses registering multiple trucks (up to 50 trucks).
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full sm:w-auto px-6 py-3.5 bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-wider rounded-none flex items-center justify-center gap-2 shrink-0"
                >
                  <span>START REGISTRATION</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>

              {/* Option 3: Driver Only */}
              <div 
                onClick={() => handleStartWithCategory('driver_only')}
                className="bg-white p-6 sm:p-8 border-2 border-slate-200 hover:border-emerald-500 cursor-pointer transition-all shadow-sm hover:shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <User className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase font-bold text-emerald-700 block">Looking for Driving Work</span>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-950">
                      I Am a Container Truck Driver
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                      For licensed commercial drivers (Class F) who don't have their own truck and want to drive in the port container shift rotation.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full sm:w-auto px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider rounded-none flex items-center justify-center gap-2 shrink-0 shadow-sm"
                >
                  <span>START REGISTRATION</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

          {/* Simple Reassurance Notice */}
          <div className="p-5 bg-white border border-slate-200 text-xs text-slate-600 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Safe, Free &amp; Direct</span>
            </div>
            <p className="leading-relaxed">
              Registration on this website is 100% free. No agent fees, no middleman charges. When you finish, your registration goes directly to the project coordinator on WhatsApp at <strong>{WHATSAPP_DISPLAY_NUMBER}</strong>.
            </p>
          </div>

        </div>
      ) : (

        /* ================= IN-FORM STEP-BY-STEP MODE ================= */
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

          {/* Guided Step Progress Bar */}
          <div className="bg-white p-5 border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <div className="font-bold text-slate-950 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 font-bold flex items-center justify-center text-xs">
                  {currentStep === 4 && category === 'driver_only' ? 3 : currentStep}
                </span>
                <span>
                  {category === 'driver_only' 
                    ? (currentStep === 1 ? 'Step 1 of 5: Who You Are' :
                       currentStep === 2 ? 'Step 2 of 5: Your Contact Details' :
                       currentStep === 4 ? 'Step 3 of 5: Your Driver License' :
                       currentStep === 5 ? 'Step 4 of 5: Document Photos' : 'Step 5 of 5: Review & Send')
                    : `Step ${currentStep} of 6: ${stepTitles.find(s => s.num === currentStep)?.title || ''}`
                  }
                </span>
              </div>

              <div className="text-xs text-slate-500 font-mono">
                {Math.round((currentStep / 6) * 100)}% Complete
              </div>
            </div>

            {/* Visual Progress Line */}
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <div 
                className="bg-amber-400 h-full transition-all duration-300 ease-out"
                style={{ width: `${(currentStep / 6) * 100}%` }}
              />
            </div>

            {/* Step badges on desktop */}
            <div className="hidden sm:flex items-center justify-between text-[11px] text-slate-500 pt-1">
              <span>1. Category</span>
              <span>2. Contact</span>
              {category !== 'driver_only' && <span>3. Trucks</span>}
              <span>4. Drivers</span>
              <span>5. Documents</span>
              <span>6. WhatsApp Send</span>
            </div>
          </div>

          {/* Friendly Error Notice */}
          {stepError && (
            <div className="p-4 bg-red-50 border-2 border-red-300 text-red-900 text-sm font-semibold flex items-start gap-3 shadow-sm animate-pulse">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <span className="block font-bold">Please check this:</span>
                <span>{stepError}</span>
              </div>
            </div>
          )}

          {duplicateError && (
            <div className="p-4 bg-amber-50 border-2 border-amber-400 text-amber-950 text-sm font-semibold flex items-start gap-3 shadow-sm">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <span>{duplicateError}</span>
            </div>
          )}

          {/* Form Content Card */}
          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8">

            {/* ================= STEP 1: CATEGORY SELECTION ================= */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold uppercase text-amber-700">Step 1 of 6</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
                    Who Are You Registering As?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Choose the option that describes your situation in Ghana:
                  </p>
                </div>

                <div className="space-y-3">
                  <label 
                    onClick={() => setCategory('truck_owner')}
                    className={`block p-5 border-2 cursor-pointer transition-all ${
                      category === 'truck_owner' || category === 'independent_truck_owner'
                        ? 'border-amber-400 bg-amber-50/40 shadow-sm' 
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="reg_category"
                        checked={category === 'truck_owner' || category === 'independent_truck_owner'}
                        onChange={() => setCategory('truck_owner')}
                        className="mt-1 w-4 h-4 text-amber-500 focus:ring-amber-400"
                      />
                      <div>
                        <strong className="text-base text-slate-950 block">I Own 1 or a Few Trucks (Truck Owner / Individual)</strong>
                        <p className="text-xs text-slate-600 mt-0.5">
                          You own 1 or more flatbed container trucks and want to register them for Tema Port container work.
                        </p>
                      </div>
                    </div>
                  </label>

                  <label 
                    onClick={() => setCategory('transport_enterprise')}
                    className={`block p-5 border-2 cursor-pointer transition-all ${
                      category === 'transport_enterprise'
                        ? 'border-amber-400 bg-amber-50/40 shadow-sm' 
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="reg_category"
                        checked={category === 'transport_enterprise'}
                        onChange={() => setCategory('transport_enterprise')}
                        className="mt-1 w-4 h-4 text-amber-500 focus:ring-amber-400"
                      />
                      <div>
                        <strong className="text-base text-slate-950 block">Transport Company / Enterprise (Big Fleet)</strong>
                        <p className="text-xs text-slate-600 mt-0.5">
                          You are a registered transport company registering multiple trucks (up to 50 vehicles).
                        </p>
                      </div>
                    </div>
                  </label>

                  <label 
                    onClick={() => setCategory('driver_only')}
                    className={`block p-5 border-2 cursor-pointer transition-all ${
                      category === 'driver_only'
                        ? 'border-amber-400 bg-amber-50/40 shadow-sm' 
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="reg_category"
                        checked={category === 'driver_only'}
                        onChange={() => setCategory('driver_only')}
                        className="mt-1 w-4 h-4 text-amber-500 focus:ring-amber-400"
                      />
                      <div>
                        <strong className="text-base text-slate-950 block">I Am a Driver (Looking for a Driving Job)</strong>
                        <p className="text-xs text-slate-600 mt-0.5">
                          You have a heavy commercial driving license (Class F) and want to be hired or assigned to a truck.
                        </p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {/* ================= STEP 2: CONTACT INFORMATION ================= */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold uppercase text-amber-700">Step 2 of 6</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
                    Your Contact Information
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Tell us who you are and how we can call you:
                  </p>
                </div>

                <div className="space-y-5">
                  
                  {/* Full Name / Company Name */}
                  <div className="space-y-1.5">
                    <label className="block text-sm sm:text-base font-bold text-slate-900">
                      1. Your Full Name or Company Name *
                    </label>
                    <span className="text-xs text-slate-500 block">
                      {category === 'transport_enterprise' ? 'Name of your registered haulage business' : 'Your personal full legal name'}
                    </span>
                    <input
                      type="text"
                      required
                      value={legalName}
                      onChange={(e) => setLegalName(e.target.value)}
                      placeholder="e.g. Kwaku Mensah or Tema Coastal Haulage Ltd"
                      className="w-full px-4 py-3.5 border-2 border-slate-300 focus:border-slate-950 focus:outline-none text-sm sm:text-base rounded-none bg-white text-slate-900"
                    />
                    <span className="text-[11px] text-slate-500 block font-mono">
                      Example: Kofi Boateng Transport
                    </span>
                  </div>

                  {/* Contact Person */}
                  <div className="space-y-1.5">
                    <label className="block text-sm sm:text-base font-bold text-slate-900">
                      2. Contact Person (Who should we ask for?) *
                    </label>
                    <span className="text-xs text-slate-500 block">
                      The person we will speak to when we call on phone
                    </span>
                    <input
                      type="text"
                      required
                      value={contactPerson}
                      onChange={(e) => setContactPerson(e.target.value)}
                      placeholder="e.g. Kwaku Mensah"
                      className="w-full px-4 py-3.5 border-2 border-slate-300 focus:border-slate-950 focus:outline-none text-sm sm:text-base rounded-none bg-white text-slate-900"
                    />
                    <span className="text-[11px] text-slate-500 block font-mono">
                      Example: Kwaku Mensah (Managing Director / Owner)
                    </span>
                  </div>

                  {/* Primary Phone */}
                  <div className="space-y-1.5">
                    <label className="block text-sm sm:text-base font-bold text-slate-900">
                      3. Main Phone Number (Calls &amp; SMS) *
                    </label>
                    <span className="text-xs text-slate-500 block">
                      Please write a working Ghanaian mobile number
                    </span>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0597684860"
                      className="w-full px-4 py-3.5 border-2 border-slate-300 focus:border-slate-950 focus:outline-none text-sm sm:text-base rounded-none bg-white text-slate-900 font-mono"
                    />
                    <span className="text-[11px] text-slate-500 block font-mono">
                      Example: 0597684860 or 0244123456
                    </span>
                  </div>

                  {/* WhatsApp Checkbox */}
                  <div className="p-4 bg-slate-50 border border-slate-200 space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isWhatsappSame}
                        onChange={(e) => setIsWhatsappSame(e.target.checked)}
                        className="w-5 h-5 text-emerald-600 rounded-none focus:ring-emerald-500"
                      />
                      <span className="text-xs sm:text-sm font-bold text-slate-900">
                        My WhatsApp number is the SAME as my phone number
                      </span>
                    </label>

                    {!isWhatsappSame && (
                      <div className="pt-2 space-y-1">
                        <label className="block text-xs font-bold text-slate-900">
                          Your WhatsApp Number:
                        </label>
                        <input
                          type="tel"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          placeholder="0597684860"
                          className="w-full px-4 py-3 border border-slate-300 focus:border-slate-950 rounded-none text-sm font-mono bg-white"
                        />
                      </div>
                    )}
                  </div>

                  {/* Another Phone (Optional) */}
                  <div className="space-y-1.5">
                    <label className="block text-sm font-bold text-slate-900">
                      4. Another Phone Number (Optional)
                    </label>
                    <span className="text-xs text-slate-500 block">
                      In case your main phone is switched off or unreachable
                    </span>
                    <input
                      type="tel"
                      value={altPhone}
                      onChange={(e) => setAltPhone(e.target.value)}
                      placeholder="0597684860"
                      className="w-full px-4 py-3 border border-slate-300 focus:border-slate-950 focus:outline-none text-sm rounded-none bg-white text-slate-900 font-mono"
                    />
                  </div>

                  {/* Email (Optional) */}
                  <div className="space-y-1.5">
                    <label className="block text-sm font-bold text-slate-900">
                      5. Email Address (Optional)
                    </label>
                    <span className="text-xs text-slate-500 block">
                      If you do not have an email, you can leave this empty
                    </span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. myname@gmail.com (Optional)"
                      className="w-full px-4 py-3 border border-slate-300 focus:border-slate-950 focus:outline-none text-sm rounded-none bg-white text-slate-900"
                    />
                  </div>

                  {/* Where is truck parked / Base */}
                  <div className="space-y-1.5">
                    <label className="block text-sm sm:text-base font-bold text-slate-900">
                      6. Where is your truck parked or operating from? *
                    </label>
                    <span className="text-xs text-slate-500 block">
                      Town, yard, or area in Greater Accra / Ghana
                    </span>
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="e.g. Tema Community 1, Heavy Industrial Area, or Ashaiman Roundabout"
                      className="w-full px-4 py-3.5 border-2 border-slate-300 focus:border-slate-950 focus:outline-none text-sm sm:text-base rounded-none bg-white text-slate-900"
                    />
                    <span className="text-[11px] text-slate-500 block font-mono">
                      Example: Plot 14, Commercial Area, Tema Community 1
                    </span>
                  </div>

                </div>
              </div>
            )}

            {/* ================= STEP 3: TRUCK DETAILS (SKIPPED FOR DRIVER ONLY) ================= */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold uppercase text-amber-700">Step 3 of 6</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
                    Your Container Truck(s)
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600">
                    List each container flatbed truck you have. You can add up to 50 trucks.
                  </p>
                </div>

                {/* Helpful Everyday Truck Explanation Box */}
                <div className="p-4 bg-amber-50 border border-amber-300 text-xs sm:text-sm text-amber-950 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <HelpCircle className="w-4 h-4 text-amber-600" />
                    <span>How to fill the 2 truck numbers:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                    <div className="bg-white p-3 border border-amber-200">
                      <strong className="text-slate-900 block mb-0.5">🚛 Tractor Head Number:</strong>
                      <span>The FRONT vehicle with the engine, cabin, and steering wheel (e.g. <strong>GT 4921-21</strong>).</span>
                    </div>
                    <div className="bg-white p-3 border border-amber-200">
                      <strong className="text-slate-900 block mb-0.5">🚚 Flatbed Trailer Number:</strong>
                      <span>The BACK flatbed trailer body where the shipping container sits (e.g. <strong>GE 8812-20</strong>).</span>
                    </div>
                  </div>
                </div>

                {/* Dynamic Truck Cards */}
                <div className="space-y-4">
                  {trucks.map((trk, index) => (
                    <div key={trk.id} className="p-5 sm:p-6 border-2 border-slate-300 bg-slate-50/50 space-y-4 relative">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                        <span className="font-bold text-base text-slate-900 flex items-center gap-2">
                          <Truck className="w-4 h-4 text-amber-600" />
                          <span>Truck #{index + 1}</span>
                        </span>

                        {trucks.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveTruck(trk.id)}
                            className="text-xs text-red-600 hover:text-red-800 font-bold flex items-center gap-1 p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Remove this truck</span>
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="block text-xs sm:text-sm font-bold text-slate-900">
                            Front Plate: Tractor Head Number *
                          </label>
                          <input
                            type="text"
                            required
                            value={trk.tractorRegNo}
                            onChange={(e) => handleUpdateTruck(trk.id, 'tractorRegNo', e.target.value.toUpperCase())}
                            placeholder="e.g. GT 4921-21"
                            className="w-full px-4 py-3 border-2 border-slate-300 focus:border-slate-950 rounded-none text-sm font-mono uppercase bg-white"
                          />
                          <span className="text-[11px] text-slate-500 font-mono block">Example: GT 4921-21</span>
                        </div>

                        <div className="space-y-1">
                          <label className="block text-xs sm:text-sm font-bold text-slate-900">
                            Back Plate: Flatbed Trailer Number *
                          </label>
                          <input
                            type="text"
                            required
                            value={trk.flatbedTrailerRegNo}
                            onChange={(e) => handleUpdateTruck(trk.id, 'flatbedTrailerRegNo', e.target.value.toUpperCase())}
                            placeholder="e.g. GE 8812-20"
                            className="w-full px-4 py-3 border-2 border-slate-300 focus:border-slate-950 rounded-none text-sm font-mono uppercase bg-white"
                          />
                          <span className="text-[11px] text-slate-500 font-mono block">Example: GE 8812-20</span>
                        </div>

                        <div className="sm:col-span-2 space-y-1">
                          <label className="block text-xs font-semibold text-slate-700">
                            Truck Nickname or Fleet Label (Optional)
                          </label>
                          <input
                            type="text"
                            value={trk.assetIdRef}
                            onChange={(e) => handleUpdateTruck(trk.id, 'assetIdRef', e.target.value)}
                            placeholder="e.g. Truck 1, Black Monster, Unit A"
                            className="w-full px-3 py-2 border border-slate-300 focus:border-slate-950 rounded-none text-xs bg-white"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Big Prominent "ADD ANOTHER TRUCK" Button */}
                <button
                  type="button"
                  onClick={handleAddTruck}
                  className="w-full py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 border-2 border-dashed border-slate-400 font-bold text-sm uppercase tracking-wider rounded-none transition-all flex items-center justify-center gap-2"
                >
                  <Plus className="w-5 h-5 text-amber-600" />
                  <span>ADD ANOTHER TRUCK (+)</span>
                </button>
              </div>
            )}

            {/* ================= STEP 4: DRIVER DETAILS ================= */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold uppercase text-amber-700">Step 4 of 6</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
                    {category === 'driver_only' ? 'Your Driver Details' : 'Driver(s) for Your Truck(s)'}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600">
                    {category === 'driver_only'
                      ? 'Please enter your license and personal details:'
                      : 'Enter the driver who will drive this truck (or you if you drive yourself):'}
                  </p>
                </div>

                <div className="space-y-6">
                  {drivers.map((drv, index) => (
                    <div key={drv.id} className="p-5 sm:p-6 border-2 border-slate-300 bg-slate-50/50 space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                        <span className="font-bold text-base text-slate-950 flex items-center gap-2">
                          <User className="w-4 h-4 text-amber-600" />
                          <span>Driver #{index + 1}</span>
                        </span>

                        {drivers.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveDriver(drv.id)}
                            className="text-xs text-red-600 hover:text-red-800 font-bold flex items-center gap-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Remove</span>
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="block text-xs sm:text-sm font-bold text-slate-900">
                            Driver Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={drv.fullName}
                            onChange={(e) => handleUpdateDriver(drv.id, 'fullName', e.target.value)}
                            placeholder="e.g. Samuel Osei Tutu"
                            className="w-full px-4 py-3 border-2 border-slate-300 focus:border-slate-950 rounded-none text-sm bg-white"
                          />
                          <span className="text-[11px] text-slate-500 font-mono block">Example: Samuel Osei Tutu</span>
                        </div>

                        <div className="space-y-1">
                          <label className="block text-xs sm:text-sm font-bold text-slate-900">
                            Driver Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={drv.phone}
                            onChange={(e) => handleUpdateDriver(drv.id, 'phone', e.target.value)}
                            placeholder="0597684860"
                            className="w-full px-4 py-3 border-2 border-slate-300 focus:border-slate-950 rounded-none text-sm font-mono bg-white"
                          />
                          <span className="text-[11px] text-slate-500 font-mono block">Example: 0597684860</span>
                        </div>

                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <label className="block text-xs sm:text-sm font-bold text-slate-900">
                              Ghana Card Number (National ID)
                            </label>
                            <span className="text-[10px] text-emerald-800 font-bold flex items-center gap-1">
                              <Lock className="w-3 h-3" /> Private
                            </span>
                          </div>
                          <input
                            type="text"
                            value={drv.ghanaCardNo}
                            onChange={(e) => handleUpdateDriver(drv.id, 'ghanaCardNo', e.target.value.toUpperCase())}
                            placeholder="GHA-712893412-9"
                            className="w-full px-4 py-3 border border-slate-300 focus:border-slate-950 rounded-none text-sm font-mono uppercase bg-white"
                          />
                          <span className="text-[11px] text-slate-500 font-mono block">Example: GHA-712893412-9</span>
                          <span className="text-[10px] text-slate-500 italic block">
                            🔒 Protected: Your Ghana Card number is kept private and will NOT be posted on WhatsApp.
                          </span>
                        </div>

                        <div className="space-y-1">
                          <label className="block text-xs sm:text-sm font-bold text-slate-900">
                            Driver's License Number
                          </label>
                          <input
                            type="text"
                            value={drv.licenseNo}
                            onChange={(e) => handleUpdateDriver(drv.id, 'licenseNo', e.target.value.toUpperCase())}
                            placeholder="DL-901844-GH"
                            className="w-full px-4 py-3 border border-slate-300 focus:border-slate-950 rounded-none text-sm font-mono uppercase bg-white"
                          />
                          <span className="text-[11px] text-slate-500 font-mono block">Example: DL-901844-GH</span>
                        </div>

                        <div className="space-y-1">
                          <label className="block text-xs font-bold text-slate-900">
                            Driving License Class
                          </label>
                          <select
                            value={drv.licenseClass}
                            onChange={(e) => handleUpdateDriver(drv.id, 'licenseClass', e.target.value)}
                            className="w-full px-3 py-3 border border-slate-300 focus:border-slate-950 rounded-none text-xs bg-white font-medium"
                          >
                            <option value="Class F (Heavy Commercial)">Class F (Heavy Commercial Container Trucks)</option>
                            <option value="Class E (Commercial)">Class E (Commercial)</option>
                            <option value="Class D (Commercial Bus/Truck)">Class D (Commercial Bus/Truck)</option>
                          </select>
                        </div>

                        {trucks.length > 0 && (
                          <div className="space-y-1">
                            <label className="block text-xs font-bold text-slate-900">
                              Assigned Truck
                            </label>
                            <select
                              value={drv.assignedTruckNo || ''}
                              onChange={(e) => handleUpdateDriver(drv.id, 'assignedTruckNo', e.target.value)}
                              className="w-full px-3 py-3 border border-slate-300 focus:border-slate-950 rounded-none text-xs bg-white font-mono"
                            >
                              <option value="">Select a truck</option>
                              {trucks.map((t) => (
                                <option key={t.id} value={t.tractorRegNo || t.id}>
                                  {t.tractorRegNo || 'New Truck'} ({t.assetIdRef || 'Truck'})
                                </option>
                              ))}
                            </select>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Big Prominent "ADD DRIVER" Button */}
                {category !== 'driver_only' && (
                  <button
                    type="button"
                    onClick={handleAddDriver}
                    className="w-full py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 border-2 border-dashed border-slate-400 font-bold text-sm uppercase tracking-wider rounded-none transition-all flex items-center justify-center gap-2"
                  >
                    <Plus className="w-5 h-5 text-amber-600" />
                    <span>ADD DRIVER (+)</span>
                  </button>
                )}
              </div>
            )}

            {/* ================= STEP 5: DOCUMENT PHOTOS (SIMPLE & FORGIVING) ================= */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold uppercase text-amber-700">Step 5 of 6</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
                    Snap or Upload Document Photos
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Take a clear picture with your phone camera or select a file:
                  </p>
                </div>

                {/* Friendly Notice */}
                <div className="p-4 bg-emerald-50 border border-emerald-300 text-xs sm:text-sm text-emerald-950 space-y-1 leading-relaxed">
                  <strong className="block text-emerald-900">Don't have your photos right now?</strong>
                  <p>
                    No problem! You can proceed without uploading everything right now. You can bring your original documents to our Tema Port desk in person for physical inspection.
                  </p>
                </div>

                {/* Document Items List */}
                <div className="space-y-4">
                  {documents.map((doc) => {
                    // Filter out truck documents if registering as driver only
                    if (category === 'driver_only' && doc.requiredFor === 'truck') {
                      return null;
                    }

                    const isUploaded = doc.status === 'selected_awaiting' && !!doc.fileName;

                    return (
                      <div 
                        key={doc.id}
                        className={`p-4 sm:p-5 border-2 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                          isUploaded ? 'border-emerald-500 bg-emerald-50/30' : 'border-slate-200 bg-white'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm sm:text-base text-slate-950">
                              {doc.title}
                            </span>
                            {isUploaded && (
                              <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                                <Check className="w-3 h-3" /> Ready
                              </span>
                            )}
                          </div>
                          
                          <p className="text-xs text-slate-500">
                            {doc.id === 'doc-ghana-card' && 'Photo of driver or owner Ghana Card'}
                            {doc.id === 'doc-driver-license' && 'Photo of commercial heavy license'}
                            {doc.id === 'doc-logbook' && 'Official DVLA registration book'}
                            {doc.id === 'doc-dvla-roadworthy' && 'Valid inspection sticker on windscreen'}
                            {doc.id === 'doc-comprehensive-insurance' && 'Comprehensive insurance policy paper'}
                          </p>

                          {isUploaded && (
                            <span className="text-xs text-emerald-800 font-mono block">
                              File: {doc.fileName} ({doc.fileSize})
                            </span>
                          )}
                        </div>

                        {/* Upload / Camera Trigger Button */}
                        <div className="w-full sm:w-auto shrink-0 flex items-center gap-2">
                          <label className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-none transition-colors shadow-sm">
                            <Camera className="w-4 h-4 text-amber-400" />
                            <span>{isUploaded ? 'Change Photo' : 'Take Photo / Upload'}</span>
                            <input
                              type="file"
                              accept="image/*,application/pdf"
                              onChange={(e) => handleFileSelect(doc.id, e)}
                              className="hidden"
                            />
                          </label>

                          {isUploaded && (
                            <button
                              type="button"
                              onClick={() => handleRemoveFile(doc.id)}
                              className="p-3 text-red-600 hover:text-red-800 border border-red-200 bg-red-50 text-xs"
                              title="Remove file"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ================= STEP 6: REVIEW, AGREEMENT & SUBMIT ================= */}
            {currentStep === 6 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold uppercase text-amber-700">Step 6 of 6</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
                    Review &amp; Submit Registration
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Please read this simple agreement and tap the button to send your details on WhatsApp:
                  </p>
                </div>

                {/* Quick Summary Box */}
                <div className="p-4 bg-slate-50 border border-slate-200 text-xs space-y-2">
                  <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px] block">
                    Your Registration Summary:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-slate-700">
                    <div><strong>Name:</strong> {legalName || drivers[0]?.fullName}</div>
                    <div><strong>Phone:</strong> {phone}</div>
                    <div><strong>Category:</strong> {category === 'transport_enterprise' ? 'Transport Company' : category === 'driver_only' ? 'Driver Only' : 'Truck Owner'}</div>
                    {category !== 'driver_only' && <div><strong>Trucks:</strong> {trucks.length} unit(s)</div>}
                    <div><strong>Drivers:</strong> {drivers.length} person(s)</div>
                  </div>
                </div>

                {/* Simple Everyday Agreement Box */}
                <div className="p-5 border-2 border-slate-900 bg-white space-y-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 font-bold text-slate-950 text-base">
                    <CheckSquare className="w-5 h-5 text-amber-500" />
                    <span>The Agreement (In Everyday Plain Words)</span>
                  </div>

                  <div className="space-y-3 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>
                      <strong>1. Honesty:</strong> Everything I typed here is true, honest, and correct.
                    </p>
                    <p>
                      <strong>2. Fair Partnership (Non-Circumvention):</strong> I agree to work directly through Aabest Services and Sleek Investment Consult for Tema Harbour container evacuation jobs. I promise not to go behind your back or bypass the project coordinator.
                    </p>
                    <p>
                      <strong>3. Physical Inspection:</strong> I understand that my truck and original papers will be inspected in-person at the Tema Port operations office before corridor work begins.
                    </p>
                  </div>

                  {/* 2 Big Tick Boxes */}
                  <div className="space-y-3 pt-3 border-t border-slate-200">
                    <label className="flex items-start gap-3 cursor-pointer p-3 bg-amber-50/50 border border-amber-200">
                      <input
                        type="checkbox"
                        checked={declaration.confirmedDeclaration}
                        onChange={(e) => setDeclaration({ ...declaration, confirmedDeclaration: e.target.checked })}
                        className="w-5 h-5 mt-0.5 text-slate-950 focus:ring-slate-900 rounded-none"
                      />
                      <span className="text-xs sm:text-sm font-bold text-slate-900">
                        Yes, all the details I entered are true and accurate. *
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer p-3 bg-amber-50/50 border border-amber-200">
                      <input
                        type="checkbox"
                        checked={declaration.confirmedNonCircumvention}
                        onChange={(e) => setDeclaration({ ...declaration, confirmedNonCircumvention: e.target.checked })}
                        className="w-5 h-5 mt-0.5 text-slate-950 focus:ring-slate-900 rounded-none"
                      />
                      <span className="text-xs sm:text-sm font-bold text-slate-900">
                        Yes, I agree to work with Aabest Services &amp; Sleek Investment Consult and not bypass the coordinator. *
                      </span>
                    </label>
                  </div>

                  {/* Electronic Name Signature */}
                  <div className="pt-3 space-y-1.5">
                    <label className="block text-xs sm:text-sm font-bold text-slate-900">
                      Type Your Full Legal Name to Sign: *
                    </label>
                    <input
                      type="text"
                      required
                      value={declaration.authorizedName}
                      onChange={(e) => setDeclaration({ 
                        ...declaration, 
                        authorizedName: e.target.value,
                        electronicSignature: e.target.value 
                      })}
                      placeholder="e.g. Kwaku Mensah"
                      className="w-full px-4 py-3.5 border-2 border-slate-300 focus:border-slate-950 rounded-none text-sm sm:text-base font-serif italic bg-white"
                    />
                    <span className="text-[11px] text-slate-500 block">
                      Typing your name here counts as your official electronic signature.
                    </span>
                  </div>
                </div>

                {/* What Happens Next Card */}
                <div className="p-5 border-2 border-emerald-500 bg-emerald-50 text-slate-900 space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 font-bold text-emerald-950 text-base">
                    <WhatsAppIcon className="w-5 h-5 text-emerald-700 fill-current" />
                    <span>How WhatsApp Submission Works:</span>
                  </div>
                  <p className="leading-relaxed text-slate-700">
                    When you tap the button below, WhatsApp will automatically open on your phone or computer with your registration formatted and addressed to <strong>{WHATSAPP_DISPLAY_NUMBER}</strong>.
                  </p>
                  <p className="font-bold text-emerald-900">
                    👉 All you need to do in WhatsApp is tap "SEND"!
                  </p>
                  <div className="pt-1 text-[11px] text-slate-600 border-t border-emerald-200">
                    🔒 <strong>Privacy Note:</strong> Your Ghana Card number is kept completely private and is NOT posted in the WhatsApp message.
                  </div>
                </div>

              </div>
            )}

            {/* FORM FOOTER CONTROLS */}
            <div className="pt-6 border-t-2 border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div>
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-6 py-3.5 border-2 border-slate-300 hover:border-slate-900 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-none transition-colors flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>GO BACK</span>
                  </button>
                )}
              </div>

              <div>
                {currentStep < 6 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm uppercase tracking-[0.14em] rounded-none transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <span>NEXT STEP</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm uppercase tracking-[0.14em] rounded-none transition-all flex items-center gap-3 shadow-lg hover:shadow-xl"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-current" />
                    <span>SUBMIT REGISTRATION</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

          </form>

        </div>
      )}

    </div>
  );
};
