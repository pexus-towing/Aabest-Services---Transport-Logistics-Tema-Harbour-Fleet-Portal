/**
 * Fleet Image Registry
 * Direct URLs and metadata for Aabest Services verified fleet imagery
 * Configured from user-provided Savedly links.
 */

export interface FleetImageItem {
  id: string;
  name: string;
  category: 'container' | 'lowbed' | 'tipper' | 'towing';
  savedlyUrl: string; // The canonical savedly link
  cdnUrl: string;     // Direct CDN streaming image link
  localUrl: string;   // Local fallback cache
  alt: string;
}

export const FLEET_IMAGES: Record<string, FleetImageItem> = {
  // Container Trucks (Tema Port Evacuation & Intermodal Transport)
  '9jj5sk8g': {
    id: '9jj5sk8g',
    name: 'Container Transportation 3',
    category: 'container',
    savedlyUrl: 'https://savedly.net/f/9jj5sk8g',
    cdnUrl: 'https://cdn.savedly.net/9jj5sk8g',
    localUrl: '/images/fleet/9jj5sk8g.jpg',
    alt: 'Aabest Services container truck tractor unit at Tema port enclave',
  },
  'xbbrj6hb': {
    id: 'xbbrj6hb',
    name: 'Container Transportation 4',
    category: 'container',
    savedlyUrl: 'https://savedly.net/f/xbbrj6hb',
    cdnUrl: 'https://cdn.savedly.net/xbbrj6hb',
    localUrl: '/images/fleet/xbbrj6hb.jpg',
    alt: 'Aabest Services heavy container haulage truck and twist-lock flatbed',
  },

  // Lowbed Heavy Equipment Haulage
  'vgwm9r5n': {
    id: 'vgwm9r5n',
    name: 'Lowbed Truck 1',
    category: 'lowbed',
    savedlyUrl: 'https://savedly.net/f/vgwm9r5n',
    cdnUrl: 'https://cdn.savedly.net/vgwm9r5n',
    localUrl: '/images/fleet/vgwm9r5n.jpg',
    alt: 'Aabest Services multi-axle heavy-haul lowbed transporter',
  },
  'vpzbpsgr': {
    id: 'vpzbpsgr',
    name: 'Lowbed Truck 2',
    category: 'lowbed',
    savedlyUrl: 'https://savedly.net/f/vpzbpsgr',
    cdnUrl: 'https://cdn.savedly.net/vpzbpsgr',
    localUrl: '/images/fleet/vpzbpsgr.jpg',
    alt: 'Aabest Services lowbed trailer for industrial machinery mobilization',
  },
  'v2xyx9fe': {
    id: 'v2xyx9fe',
    name: 'Lowbed Truck 3',
    category: 'lowbed',
    savedlyUrl: 'https://savedly.net/f/v2xyx9fe',
    cdnUrl: 'https://cdn.savedly.net/v2xyx9fe',
    localUrl: '/images/fleet/v2xyx9fe.jpg',
    alt: 'Aabest Services oversized equipment lowbed transport vehicle',
  },

  // Tipper Trucks & Bulk Earthmoving
  '2bkpxz86': {
    id: '2bkpxz86',
    name: 'Tipper Truck 1',
    category: 'tipper',
    savedlyUrl: 'https://savedly.net/f/2bkpxz86',
    cdnUrl: 'https://cdn.savedly.net/2bkpxz86',
    localUrl: '/images/fleet/2bkpxz86.jpg',
    alt: 'Aabest Services commercial multi-axle tipper truck for bulk quarry haulage',
  },
  '8em4z8zp': {
    id: '8em4z8zp',
    name: 'Tipper Truck 2',
    category: 'tipper',
    savedlyUrl: 'https://savedly.net/f/8em4z8zp',
    cdnUrl: 'https://cdn.savedly.net/8em4z8zp',
    localUrl: '/images/fleet/8em4z8zp.jpg',
    alt: 'Aabest Services aggregate and construction material tipper truck',
  },
  '53mpm4t3': {
    id: '53mpm4t3',
    name: 'Tipper Truck 3',
    category: 'tipper',
    savedlyUrl: 'https://savedly.net/f/53mpm4t3',
    cdnUrl: 'https://cdn.savedly.net/53mpm4t3',
    localUrl: '/images/fleet/53mpm4t3.jpg',
    alt: 'Aabest Services heavy-duty construction tipper haulage vehicle',
  },

  // Towing & Vehicle Recovery Fleet
  '69bcu2vm': {
    id: '69bcu2vm',
    name: 'Towing Vehicle 1',
    category: 'towing',
    savedlyUrl: 'https://savedly.net/f/69bcu2vm',
    cdnUrl: 'https://cdn.savedly.net/69bcu2vm',
    localUrl: '/images/fleet/69bcu2vm.jpg',
    alt: 'Aabest Services breakdown recovery and towing truck',
  },
  'xwnhpd84': {
    id: 'xwnhpd84',
    name: 'Towing Vehicle 2',
    category: 'towing',
    savedlyUrl: 'https://savedly.net/f/xwnhpd84',
    cdnUrl: 'https://cdn.savedly.net/xwnhpd84',
    localUrl: '/images/fleet/xwnhpd84.jpg',
    alt: 'Aabest Services commercial towing and vehicle recovery fleet',
  },
};

// Primary visual mappings for services and hero
export const SITE_IMAGES = {
  hero: FLEET_IMAGES['xbbrj6hb'].cdnUrl,
  heroFallback: FLEET_IMAGES['xbbrj6hb'].localUrl,

  about: FLEET_IMAGES['9jj5sk8g'].cdnUrl,
  aboutFallback: FLEET_IMAGES['9jj5sk8g'].localUrl,

  services: {
    towing: FLEET_IMAGES['69bcu2vm'].cdnUrl,
    towingSecondary: FLEET_IMAGES['xwnhpd84'].cdnUrl,
    container: FLEET_IMAGES['xbbrj6hb'].cdnUrl,
    containerSecondary: FLEET_IMAGES['9jj5sk8g'].cdnUrl,
    lowbed: FLEET_IMAGES['vgwm9r5n'].cdnUrl,
    lowbedSecondary: [FLEET_IMAGES['vpzbpsgr'].cdnUrl, FLEET_IMAGES['v2xyx9fe'].cdnUrl],
    tipper: FLEET_IMAGES['2bkpxz86'].cdnUrl,
    tipperSecondary: [FLEET_IMAGES['8em4z8zp'].cdnUrl, FLEET_IMAGES['53mpm4t3'].cdnUrl],
  },
};
