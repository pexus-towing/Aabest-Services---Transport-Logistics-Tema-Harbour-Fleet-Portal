import { RegistrationSubmission } from '../types';

/**
 * Designated WhatsApp number for Aabest Services Tema Harbour Registration:
 * 0597684860 -> International format: 233597684860 (without leading + or spaces)
 */
export const WHATSAPP_DESTINATION_NUMBER = '233597684860';
export const WHATSAPP_DISPLAY_NUMBER = '0597684860';

/**
 * Generates a professionally structured, URL-safe WhatsApp message
 * for the Tema Harbour Container Truck Registration.
 *
 * Excludes sensitive identity IDs (Ghana Card numbers, private document contents)
 * in accordance with applicant security and data protection directives.
 */
export function buildRegistrationWhatsAppMessage(submission: RegistrationSubmission): string {
  const divider = '----------------------------------------';
  
  // Format trucks list
  let trucksSection = '• None listed (Driver Registration Only)';
  if (submission.trucks && submission.trucks.length > 0) {
    trucksSection = submission.trucks
      .map((trk, i) => {
        const parts = [
          `*${i + 1}. Tractor:* ${trk.tractorRegNo || 'N/A'}`,
          `   *Flatbed Trailer:* ${trk.flatbedTrailerRegNo || 'N/A'}`
        ];
        if (trk.assetIdRef) {
          parts.push(`   *Asset Ref ID:* ${trk.assetIdRef}`);
        }
        if (trk.assignedDriverName) {
          parts.push(`   *Assigned Driver:* ${trk.assignedDriverName}`);
        }
        return parts.join('\n');
      })
      .join('\n\n');
  }

  // Format drivers list (strictly WITHOUT sensitive Ghana Card numbers or license numbers)
  let driversSection = '• None listed';
  if (submission.drivers && submission.drivers.length > 0) {
    driversSection = submission.drivers
      .map((drv, i) => {
        const lines = [
          `*${i + 1}. ${drv.fullName || 'Driver'}*`,
          `   • Phone: ${drv.phone || 'N/A'}`,
          `   • License Class: ${drv.licenseClass || 'Class F'}`,
          `   • License Expiry: ${drv.licenseExpiry || 'On file'}`
        ];
        if (drv.assignedTruckNo) {
          lines.push(`   • Assigned Truck: ${drv.assignedTruckNo}`);
        }
        return lines.join('\n');
      })
      .join('\n\n');
  }

  // Format documents checklist
  let docsSection = '• Standard Dossier Checklist';
  if (submission.documents && submission.documents.length > 0) {
    docsSection = submission.documents
      .map(doc => {
        const isSelected = doc.status === 'selected_awaiting' || doc.status === 'submitted_awaiting' || !!doc.fileName;
        const statusLabel = isSelected ? 'READY / PREPARED' : 'PENDING IN-PERSON';
        return `• [${isSelected ? 'X' : ' '}] ${doc.title}: ${statusLabel}`;
      })
      .join('\n');
  } else {
    docsSection = [
      '• [X] Ghana Card Photocopy (Driver): Prepared for In-Person Verification',
      '• [X] Driver\'s License (Class F): Prepared for In-Person Verification',
      '• [X] DVLA Vehicle Registration Logbooks: Prepared for Physical Inspection',
      '• [X] Valid Roadworthiness Sticker: Prepared for Physical Inspection',
      '• [X] Comprehensive Marine & Transit Cover: Prepared for Physical Inspection'
    ].join('\n');
  }

  const message = [
    `🚢 *AABEST SERVICES — TEMA HARBOUR REGISTRATION*`,
    `*Container Fleet & Driver Intake Dossier*`,
    divider,
    `📋 *Reference No:* ${submission.referenceNumber}`,
    `📅 *Submission Date:* ${submission.createdAt}`,
    `🏷️ *Category:* ${submission.categoryLabel}`,
    divider,
    `🏢 *APPLICANT & CONTACT DETAILS*`,
    `• *Entity / Name:* ${submission.legalName}`,
    `• *Contact Person:* ${submission.contactPerson}`,
    `• *Primary Phone:* ${submission.phone}`,
    `• *WhatsApp Line:* ${submission.whatsapp}`,
    submission.altPhone ? `• *Alternate Phone:* ${submission.altPhone}` : null,
    `• *Email:* ${submission.email}`,
    `• *Operating Base / Address:* ${submission.address}`,
    divider,
    `🚛 *TRUCK REGISTRATIONS (${submission.trucks?.length || 0} Units)*`,
    trucksSection,
    divider,
    `👤 *ASSIGNED DRIVERS (${submission.drivers?.length || 0} Personnel)*`,
    driversSection,
    `_(Notice: Private Ghana Card and Driver License numbers are withheld from WhatsApp for applicant security)_`,
    divider,
    `📁 *DOCUMENT SUBMISSION CHECKLIST*`,
    docsSection,
    divider,
    `⚖️ *LEGAL DECLARATION & NON-CIRCUMVENTION*`,
    `• *Truthful Declaration:* Confirmed & Accepted`,
    `• *Non-Circumvention Agreement:* Confirmed & Accepted (Sleek Investment Consult / Aabest Services)`,
    submission.declaration?.driverDeclarationConfirmed ? `• *Driver Coordinating Channel Declaration:* Confirmed` : null,
    `• *Authorized Signatory:* ${submission.declaration?.authorizedName || submission.contactPerson}`,
    `• *Capacity:* ${submission.declaration?.capacity || 'Applicant'}`,
    `• *Position / Title:* ${submission.declaration?.positionTitle || 'Representative'}`,
    `• *Electronic Signature:* ${submission.declaration?.electronicSignature || submission.declaration?.authorizedName || 'Signed'}`,
    `• *Execution Date:* ${submission.declaration?.date || submission.createdAt}`,
    divider,
    `🔒 *VERIFICATION & PHYSICAL VETTING NOTICE*`,
    `Physical DVLA logbook inspection, roadworthiness cross-check, and biometric Ghana Card verification will be completed in-person at the Aabest Services Tema Port Operations Desk (Community 1) prior to port corridor credential activation.`,
    divider,
    `_Sent via Aabest Services Tema Harbour Registration Portal (aabestservices.com)_`
  ]
    .filter(Boolean)
    .join('\n');

  return message;
}

/**
 * Builds the official wa.me Click-to-Chat URL with URL encoding.
 */
export function buildWhatsAppChatUrl(submission: RegistrationSubmission): string {
  const message = buildRegistrationWhatsAppMessage(submission);
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_DESTINATION_NUMBER}?text=${encodedText}`;
}

/**
 * Opens WhatsApp in a new tab/window using the standard wa.me click-to-chat method.
 * Works seamlessly across WhatsApp Mobile app and WhatsApp Web on desktop.
 */
export function openWhatsAppRegistration(submission: RegistrationSubmission): string {
  const url = buildWhatsAppChatUrl(submission);
  if (typeof window !== 'undefined') {
    // Attempt to open WhatsApp directly
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  return url;
}
