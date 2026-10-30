export type PageView = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'service-detail'
  | 'project-info' 
  | 'registration-portal' 
  | 'registration-confirmation' 
  | 'dashboard' 
  | 'contact' 
  | 'privacy';

export type ServiceId = 
  | 'tow-truck' 
  | 'container-truck' 
  | 'lowbed-truck' 
  | 'tipper-truck';

export interface CompanyService {
  id: ServiceId;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  fallbackImage?: string;
  gallery?: Array<{ url: string; fallbackUrl?: string; caption: string }>;
  benefits: string[];
  capabilities: string[];
  specifications?: string[];
  ctaText: string;
}

export type RegistrationCategory = 
  | 'truck_owner' 
  | 'transport_enterprise' 
  | 'independent_truck_owner' 
  | 'driver_only';

export interface TruckRecord {
  id: string;
  tractorRegNo: string;
  flatbedTrailerRegNo: string;
  assetIdRef: string;
  assignedDriverId?: string;
  assignedDriverName?: string;
}

export interface DriverRecord {
  id: string;
  fullName: string;
  phone: string;
  altPhone?: string;
  email?: string;
  ghanaCardNo: string;
  licenseNo: string;
  licenseClass: string;
  licenseExpiry: string;
  assignedTruckId?: string;
  assignedTruckNo?: string;
}

export type DocumentType = 
  | 'ghana_card' 
  | 'driver_license' 
  | 'logbook_tractor' 
  | 'logbook_trailer' 
  | 'dvla_roadworthy' 
  | 'comprehensive_insurance';

export type DocumentStatus = 
  | 'not_uploaded' 
  | 'selected_awaiting' 
  | 'submitted_awaiting' 
  | 'verified_demo';

export interface UploadedDoc {
  id: string;
  docType: DocumentType;
  title: string;
  requiredFor: 'driver' | 'truck' | 'general';
  associatedEntityId?: string;
  associatedEntityName?: string;
  fileName?: string;
  fileSize?: string;
  fileType?: string;
  status: DocumentStatus;
  selectedAt?: string;
}

export interface DeclarationData {
  authorizedName: string;
  positionTitle: string;
  electronicSignature: string;
  date: string;
  confirmedDeclaration: boolean;
  confirmedNonCircumvention: boolean;
  capacity: 'Truck Owner' | 'Enterprise Representative' | 'Authorized Representative' | 'Driver';
  driverDeclarationConfirmed?: boolean;
}

export interface RegistrationSubmission {
  id: string;
  referenceNumber: string;
  createdAt: string;
  category: RegistrationCategory;
  categoryLabel: string;
  legalName: string;
  contactPerson: string;
  phone: string;
  whatsapp: string;
  altPhone: string;
  email: string;
  address: string;
  trucks: TruckRecord[];
  drivers: DriverRecord[];
  documents: UploadedDoc[];
  declaration: DeclarationData;
  status: 'Draft' | 'Awaiting Submission' | 'Submitted' | 'Under Review' | 'Documents Incomplete' | 'Approved (demo)' | 'Rejected (demo)';
  notes?: string;
}
