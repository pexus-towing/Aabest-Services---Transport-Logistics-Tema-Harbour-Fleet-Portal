import { RegistrationSubmission } from '../types';

export const INITIAL_DEMO_SUBMISSIONS: RegistrationSubmission[] = [
  {
    id: 'sub-001',
    referenceNumber: 'AAB-TH-2026-000101',
    createdAt: '2026-10-24',
    category: 'transport_enterprise',
    categoryLabel: 'Transport Company / Enterprise',
    legalName: 'Adjoa Maritime Haulage Ltd',
    contactPerson: 'Kwesi Appiah Darko',
    phone: '0597684860',
    whatsapp: '0597684860',
    altPhone: '0597684860',
    email: 'operations@adjoahaulage.com.gh',
    address: 'Plot 14, Commercial Area, Tema Community 1, Greater Accra',
    trucks: [
      {
        id: 'trk-101',
        tractorRegNo: 'GT 4921-21',
        flatbedTrailerRegNo: 'GE 8812-20',
        assetIdRef: 'TRK-ADH-01',
        assignedDriverId: 'drv-201',
        assignedDriverName: 'Isaac Mensah'
      },
      {
        id: 'trk-102',
        tractorRegNo: 'GN 3314-22',
        flatbedTrailerRegNo: 'GE 9044-22',
        assetIdRef: 'TRK-ADH-02',
        assignedDriverId: 'drv-202',
        assignedDriverName: 'Kofi Boakye'
      },
      {
        id: 'trk-103',
        tractorRegNo: 'GT 7712-23',
        flatbedTrailerRegNo: 'GE 1290-23',
        assetIdRef: 'TRK-ADH-03',
        assignedDriverId: 'drv-203',
        assignedDriverName: 'Samuel Osei Tutu'
      }
    ],
    drivers: [
      {
        id: 'drv-201',
        fullName: 'Isaac Mensah',
        phone: '0597684860',
        ghanaCardNo: 'GHA-712893412-9',
        licenseNo: 'DL-901844-GH',
        licenseClass: 'Class F (Heavy Commercial)',
        licenseExpiry: '2027-08-15',
        assignedTruckNo: 'GT 4921-21'
      },
      {
        id: 'drv-202',
        fullName: 'Kofi Boakye',
        phone: '0597684860',
        ghanaCardNo: 'GHA-829103841-3',
        licenseNo: 'DL-749201-GH',
        licenseClass: 'Class F (Heavy Commercial)',
        licenseExpiry: '2028-03-22',
        assignedTruckNo: 'GN 3314-22'
      },
      {
        id: 'drv-203',
        fullName: 'Samuel Osei Tutu',
        phone: '0597684860',
        ghanaCardNo: 'GHA-602948112-7',
        licenseNo: 'DL-812904-GH',
        licenseClass: 'Class F (Heavy Commercial)',
        licenseExpiry: '2026-11-30',
        assignedTruckNo: 'GT 7712-23'
      }
    ],
    documents: [
      {
        id: 'doc-01',
        docType: 'ghana_card',
        title: 'Ghana Cards (Assigned Drivers)',
        requiredFor: 'driver',
        associatedEntityName: '3 Assigned Drivers',
        fileName: 'GhanaCards_Adjoa_Batch.pdf',
        fileSize: '3.4 MB',
        fileType: 'application/pdf',
        status: 'submitted_awaiting',
        selectedAt: '2026-10-24'
      },
      {
        id: 'doc-02',
        docType: 'driver_license',
        title: "Drivers' Licenses (Class F)",
        requiredFor: 'driver',
        associatedEntityName: '3 Assigned Drivers',
        fileName: 'Licenses_Adjoa_3Units.pdf',
        fileSize: '2.8 MB',
        fileType: 'application/pdf',
        status: 'submitted_awaiting',
        selectedAt: '2026-10-24'
      },
      {
        id: 'doc-03',
        docType: 'logbook_tractor',
        title: 'DVLA Logbooks (Tractor Heads & Flatbeds)',
        requiredFor: 'truck',
        associatedEntityName: 'GT 4921-21 / GN 3314-22 / GT 7712-23',
        fileName: 'Vehicle_Logbooks_3_Trucks.pdf',
        fileSize: '6.1 MB',
        fileType: 'application/pdf',
        status: 'submitted_awaiting',
        selectedAt: '2026-10-24'
      },
      {
        id: 'doc-04',
        docType: 'dvla_roadworthy',
        title: 'Valid Roadworthiness Stickers',
        requiredFor: 'truck',
        associatedEntityName: '3 Operating Units',
        fileName: 'Roadworthy_DVLA_Certificates.pdf',
        fileSize: '4.2 MB',
        fileType: 'application/pdf',
        status: 'submitted_awaiting',
        selectedAt: '2026-10-24'
      },
      {
        id: 'doc-05',
        docType: 'comprehensive_insurance',
        title: 'Comprehensive Insurance Certificates',
        requiredFor: 'truck',
        associatedEntityName: 'Enterprise Policy (All 3 Units)',
        fileName: 'Enterprise_Insurance_Cert.pdf',
        fileSize: '2.1 MB',
        fileType: 'application/pdf',
        status: 'submitted_awaiting',
        selectedAt: '2026-10-24'
      }
    ],
    declaration: {
      authorizedName: 'Kwesi Appiah Darko',
      positionTitle: 'Managing Director',
      electronicSignature: 'Kwesi Appiah Darko',
      date: '24/10/2026',
      confirmedDeclaration: true,
      confirmedNonCircumvention: true,
      capacity: 'Enterprise Representative'
    },
    status: 'Under Review',
    notes: 'Fleet inspected at Tema Port Gate 2. Compliance documentation complete.'
  },
  {
    id: 'sub-002',
    referenceNumber: 'AAB-TH-2026-000102',
    createdAt: '2026-10-25',
    category: 'independent_truck_owner',
    categoryLabel: 'Independent Container Truck Owner',
    legalName: 'Kofi Mensah Logistics',
    contactPerson: 'Kofi Mensah',
    phone: '0597684860',
    whatsapp: '0597684860',
    altPhone: '0597684860',
    email: 'kmensah.logistics@gmail.com',
    address: 'Near Golden Jubilee Terminal, Tema, Greater Accra',
    trucks: [
      {
        id: 'trk-104',
        tractorRegNo: 'GS 6190-20',
        flatbedTrailerRegNo: 'GE 4011-19',
        assetIdRef: 'KML-TEMA-01',
        assignedDriverId: 'drv-204',
        assignedDriverName: 'Kofi Mensah (Owner-Driver)'
      }
    ],
    drivers: [
      {
        id: 'drv-204',
        fullName: 'Kofi Mensah',
        phone: '0597684860',
        ghanaCardNo: 'GHA-991204812-4',
        licenseNo: 'DL-552190-GH',
        licenseClass: 'Class F (Heavy Commercial)',
        licenseExpiry: '2027-12-05',
        assignedTruckNo: 'GS 6190-20'
      }
    ],
    documents: [
      {
        id: 'doc-06',
        docType: 'ghana_card',
        title: 'Ghana Card',
        requiredFor: 'driver',
        associatedEntityName: 'Kofi Mensah',
        fileName: 'GhanaCard_KMensah.jpg',
        fileSize: '1.2 MB',
        fileType: 'image/jpeg',
        status: 'submitted_awaiting',
        selectedAt: '2026-10-25'
      },
      {
        id: 'doc-07',
        docType: 'driver_license',
        title: "Driver's License (Class F)",
        requiredFor: 'driver',
        associatedEntityName: 'Kofi Mensah',
        fileName: 'LicenseClassF_KMensah.pdf',
        fileSize: '1.8 MB',
        fileType: 'application/pdf',
        status: 'submitted_awaiting',
        selectedAt: '2026-10-25'
      },
      {
        id: 'doc-08',
        docType: 'logbook_tractor',
        title: 'Vehicle Registration Logbook (Tractor)',
        requiredFor: 'truck',
        associatedEntityName: 'GS 6190-20',
        fileName: 'Logbook_GS6190_20.pdf',
        fileSize: '2.5 MB',
        fileType: 'application/pdf',
        status: 'submitted_awaiting',
        selectedAt: '2026-10-25'
      },
      {
        id: 'doc-09',
        docType: 'dvla_roadworthy',
        title: 'DVLA Roadworthiness Certificate',
        requiredFor: 'truck',
        associatedEntityName: 'GS 6190-20 / GE 4011-19',
        fileName: 'DVLA_Roadworthy_2026.pdf',
        fileSize: '1.9 MB',
        fileType: 'application/pdf',
        status: 'submitted_awaiting',
        selectedAt: '2026-10-25'
      },
      {
        id: 'doc-10',
        docType: 'comprehensive_insurance',
        title: 'Comprehensive Insurance Policy',
        requiredFor: 'truck',
        associatedEntityName: 'GS 6190-20',
        fileName: 'SIC_Comprehensive_Policy.pdf',
        fileSize: '2.0 MB',
        fileType: 'application/pdf',
        status: 'submitted_awaiting',
        selectedAt: '2026-10-25'
      }
    ],
    declaration: {
      authorizedName: 'Kofi Mensah',
      positionTitle: 'Sole Proprietor',
      electronicSignature: 'Kofi Mensah',
      date: '25/10/2026',
      confirmedDeclaration: true,
      confirmedNonCircumvention: true,
      capacity: 'Truck Owner'
    },
    status: 'Approved (demo)',
    notes: 'Single owner-operator flatbed unit. Fully documented for Route A rotation.'
  },
  {
    id: 'sub-003',
    referenceNumber: 'AAB-TH-2026-000103',
    createdAt: '2026-10-26',
    category: 'driver_only',
    categoryLabel: 'Driver Registration Only',
    legalName: 'Emmanuel Boateng',
    contactPerson: 'Emmanuel Boateng',
    phone: '0597684860',
    whatsapp: '0597684860',
    altPhone: '0597684860',
    email: 'eboateng.driver@gmail.com',
    address: 'Tema Community 2, Near Police Station, Greater Accra',
    trucks: [],
    drivers: [
      {
        id: 'drv-205',
        fullName: 'Emmanuel Boateng',
        phone: '0597684860',
        ghanaCardNo: 'GHA-409182390-1',
        licenseNo: 'DL-390184-GH',
        licenseClass: 'Class F (Heavy Commercial)',
        licenseExpiry: '2028-05-19'
      }
    ],
    documents: [
      {
        id: 'doc-11',
        docType: 'ghana_card',
        title: 'Ghana Card',
        requiredFor: 'driver',
        associatedEntityName: 'Emmanuel Boateng',
        fileName: 'GhanaCard_EBoateng.jpg',
        fileSize: '950 KB',
        fileType: 'image/jpeg',
        status: 'submitted_awaiting',
        selectedAt: '2026-10-26'
      },
      {
        id: 'doc-12',
        docType: 'driver_license',
        title: "Driver's License (Class F)",
        requiredFor: 'driver',
        associatedEntityName: 'Emmanuel Boateng',
        fileName: 'DriverLicense_ClassF.jpg',
        fileSize: '1.1 MB',
        fileType: 'image/jpeg',
        status: 'submitted_awaiting',
        selectedAt: '2026-10-26'
      }
    ],
    declaration: {
      authorizedName: 'Emmanuel Boateng',
      positionTitle: 'Commercial Heavy Driver',
      electronicSignature: 'Emmanuel Boateng',
      date: '26/10/2026',
      confirmedDeclaration: true,
      confirmedNonCircumvention: true,
      capacity: 'Driver',
      driverDeclarationConfirmed: true
    },
    status: 'Under Review',
    notes: 'Independent driver applicant. Subject to fleet pairing for 3-driver shift rotation.'
  },
  {
    id: 'sub-004',
    referenceNumber: 'AAB-TH-2026-000104',
    createdAt: '2026-10-27',
    category: 'truck_owner',
    categoryLabel: 'Truck Owner / Individual',
    legalName: 'Kwame Owusu Transport',
    contactPerson: 'Kwame Owusu',
    phone: '0597684860',
    whatsapp: '0597684860',
    altPhone: '0597684860',
    email: 'kowusu.transport@yahoo.com',
    address: 'Ashaiman Roundabout Commercial Zone, Greater Accra',
    trucks: [
      {
        id: 'trk-105',
        tractorRegNo: 'GT 1045-22',
        flatbedTrailerRegNo: 'GE 9920-21',
        assetIdRef: 'KOT-01'
      },
      {
        id: 'trk-106',
        tractorRegNo: 'GN 8832-21',
        flatbedTrailerRegNo: 'GE 4410-20',
        assetIdRef: 'KOT-02'
      }
    ],
    drivers: [
      {
        id: 'drv-206',
        fullName: 'Yaw Frimpong',
        phone: '0597684860',
        ghanaCardNo: 'GHA-330192849-5',
        licenseNo: 'DL-119028-GH',
        licenseClass: 'Class F (Heavy Commercial)',
        licenseExpiry: '2027-04-10',
        assignedTruckNo: 'GT 1045-22'
      }
    ],
    documents: [
      {
        id: 'doc-13',
        docType: 'ghana_card',
        title: 'Ghana Card',
        requiredFor: 'driver',
        associatedEntityName: 'Yaw Frimpong',
        fileName: 'GhanaCard_YFrimpong.pdf',
        fileSize: '1.4 MB',
        fileType: 'application/pdf',
        status: 'submitted_awaiting',
        selectedAt: '2026-10-27'
      },
      {
        id: 'doc-14',
        docType: 'driver_license',
        title: "Driver's License",
        requiredFor: 'driver',
        associatedEntityName: 'Yaw Frimpong',
        fileName: 'License_Yaw.pdf',
        fileSize: '1.3 MB',
        fileType: 'application/pdf',
        status: 'submitted_awaiting',
        selectedAt: '2026-10-27'
      }
    ],
    declaration: {
      authorizedName: 'Kwame Owusu',
      positionTitle: 'Fleet Owner',
      electronicSignature: 'Kwame Owusu',
      date: '27/10/2026',
      confirmedDeclaration: true,
      confirmedNonCircumvention: true,
      capacity: 'Truck Owner'
    },
    status: 'Documents Incomplete',
    notes: 'Missing vehicle logbook copy and insurance certificate for GN 8832-21.'
  },
  {
    id: 'sub-005',
    referenceNumber: 'AAB-TH-2026-000105',
    createdAt: '2026-10-28',
    category: 'transport_enterprise',
    categoryLabel: 'Transport Company / Enterprise',
    legalName: 'Tema Atlantic Freight Logistics Ltd',
    contactPerson: 'David Tetteh Quaye',
    phone: '0597684860',
    whatsapp: '0597684860',
    altPhone: '0597684860',
    email: 'fleet@atlanticfreight.com.gh',
    address: 'Heavy Industrial Area, Plot 8B, Tema, Greater Accra',
    trucks: [
      {
        id: 'trk-107',
        tractorRegNo: 'GT 5500-23',
        flatbedTrailerRegNo: 'GE 6610-23',
        assetIdRef: 'TAF-FL-01',
        assignedDriverId: 'drv-207',
        assignedDriverName: 'Francis Mensah'
      },
      {
        id: 'trk-108',
        tractorRegNo: 'GT 5501-23',
        flatbedTrailerRegNo: 'GE 6611-23',
        assetIdRef: 'TAF-FL-02',
        assignedDriverId: 'drv-208',
        assignedDriverName: 'Bright Asare'
      },
      {
        id: 'trk-109',
        tractorRegNo: 'GT 5502-23',
        flatbedTrailerRegNo: 'GE 6612-23',
        assetIdRef: 'TAF-FL-03',
        assignedDriverId: 'drv-209',
        assignedDriverName: 'Daniel Nortey'
      },
      {
        id: 'trk-110',
        tractorRegNo: 'GT 5503-23',
        flatbedTrailerRegNo: 'GE 6613-23',
        assetIdRef: 'TAF-FL-04',
        assignedDriverId: 'drv-210',
        assignedDriverName: 'Justice Abbey'
      }
    ],
    drivers: [
      {
        id: 'drv-207',
        fullName: 'Francis Mensah',
        phone: '0597684860',
        ghanaCardNo: 'GHA-102938491-0',
        licenseNo: 'DL-449102-GH',
        licenseClass: 'Class F (Heavy Commercial)',
        licenseExpiry: '2028-09-12',
        assignedTruckNo: 'GT 5500-23'
      },
      {
        id: 'drv-208',
        fullName: 'Bright Asare',
        phone: '0597684860',
        ghanaCardNo: 'GHA-291839201-4',
        licenseNo: 'DL-994812-GH',
        licenseClass: 'Class F (Heavy Commercial)',
        licenseExpiry: '2027-02-18',
        assignedTruckNo: 'GT 5501-23'
      },
      {
        id: 'drv-209',
        fullName: 'Daniel Nortey',
        phone: '0597684860',
        ghanaCardNo: 'GHA-558291039-2',
        licenseNo: 'DL-661902-GH',
        licenseClass: 'Class F (Heavy Commercial)',
        licenseExpiry: '2027-10-04',
        assignedTruckNo: 'GT 5502-23'
      },
      {
        id: 'drv-210',
        fullName: 'Justice Abbey',
        phone: '0597684860',
        ghanaCardNo: 'GHA-882910283-7',
        licenseNo: 'DL-558190-GH',
        licenseClass: 'Class F (Heavy Commercial)',
        licenseExpiry: '2028-01-20',
        assignedTruckNo: 'GT 5503-23'
      }
    ],
    documents: [
      {
        id: 'doc-15',
        docType: 'ghana_card',
        title: 'Ghana Cards for 4 Assigned Drivers',
        requiredFor: 'driver',
        associatedEntityName: '4 Drivers',
        fileName: 'GhanaCards_TAF_Drivers.pdf',
        fileSize: '4.8 MB',
        fileType: 'application/pdf',
        status: 'submitted_awaiting',
        selectedAt: '2026-10-28'
      },
      {
        id: 'doc-16',
        docType: 'driver_license',
        title: "Drivers' Licenses (Class F)",
        requiredFor: 'driver',
        associatedEntityName: '4 Drivers',
        fileName: 'Licenses_TAF_Batch.pdf',
        fileSize: '3.9 MB',
        fileType: 'application/pdf',
        status: 'submitted_awaiting',
        selectedAt: '2026-10-28'
      },
      {
        id: 'doc-17',
        docType: 'logbook_tractor',
        title: 'Vehicle Registration Logbooks (4 Units)',
        requiredFor: 'truck',
        associatedEntityName: 'GT 5500 - GT 5503',
        fileName: 'Logbooks_TAF_Fleet.pdf',
        fileSize: '8.2 MB',
        fileType: 'application/pdf',
        status: 'submitted_awaiting',
        selectedAt: '2026-10-28'
      },
      {
        id: 'doc-18',
        docType: 'dvla_roadworthy',
        title: 'DVLA Roadworthiness Certificates',
        requiredFor: 'truck',
        associatedEntityName: 'All 4 Flatbeds',
        fileName: 'Roadworthy_TAF_2026.pdf',
        fileSize: '5.1 MB',
        fileType: 'application/pdf',
        status: 'submitted_awaiting',
        selectedAt: '2026-10-28'
      },
      {
        id: 'doc-19',
        docType: 'comprehensive_insurance',
        title: 'Corporate Fleet Insurance Cover',
        requiredFor: 'truck',
        associatedEntityName: 'Enterprise Master Policy',
        fileName: 'Corporate_Fleet_Insurance.pdf',
        fileSize: '3.1 MB',
        fileType: 'application/pdf',
        status: 'submitted_awaiting',
        selectedAt: '2026-10-28'
      }
    ],
    declaration: {
      authorizedName: 'David Tetteh Quaye',
      positionTitle: 'Head of Fleet Operations',
      electronicSignature: 'David Tetteh Quaye',
      date: '28/10/2026',
      confirmedDeclaration: true,
      confirmedNonCircumvention: true,
      capacity: 'Enterprise Representative'
    },
    status: 'Submitted',
    notes: 'Ready for personnel and asset vetting stages.'
  }
];
