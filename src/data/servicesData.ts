import { CompanyService } from '../types';
import { FLEET_IMAGES } from './fleetImages';

export const COMPANY_SERVICES: CompanyService[] = [
  {
    id: 'tow-truck',
    title: 'Tow Truck Services',
    shortDesc: 'Professional vehicle recovery, roadside assistance, and transport for disabled or accident-involved vehicles.',
    fullDesc: 'Aabest Services provides rapid-response towing solutions across urban centers and transit routes in Ghana. Whether resolving mechanical breakdowns, clearing accident sites safely, or transferring non-operational vehicles between facilities, our modern recovery fleet operates with trained operators and compliant rigging.',
    image: FLEET_IMAGES['69bcu2vm'].cdnUrl,
    fallbackImage: FLEET_IMAGES['69bcu2vm'].localUrl,
    gallery: [
      {
        url: FLEET_IMAGES['69bcu2vm'].cdnUrl,
        fallbackUrl: FLEET_IMAGES['69bcu2vm'].localUrl,
        caption: 'Towing Vehicle 1 — Heavy-duty roadside recovery & tilt-tray hauler',
      },
      {
        url: FLEET_IMAGES['xwnhpd84'].cdnUrl,
        fallbackUrl: FLEET_IMAGES['xwnhpd84'].localUrl,
        caption: 'Towing Vehicle 2 — Commercial towing unit for urban and highway transit',
      },
    ],
    benefits: [
      'Rapid dispatch for breakdowns and highway recovery',
      'Hydraulic tilt-tray flatbeds ensuring zero vehicle damage',
      'Trained operators equipped with safety and securing gear',
      'Coordination for commercial fleets and individual motorists'
    ],
    capabilities: [
      'Light and medium-duty vehicle towing',
      'Accident recovery and site clearance',
      'Inter-depot fleet transfers',
      'Commercial roadside assistance'
    ],
    ctaText: 'Request Towing Support'
  },
  {
    id: 'container-truck',
    title: 'Container Truck Services',
    shortDesc: 'Intermodal container haulage, port container evacuation, and corridor transport for shipping lines and logistics operators.',
    fullDesc: 'Specialized in dry and empty container transportation connecting port terminals, inland container depots (ICDs), and bonded yards. With dedicated tractor heads and twist-lock flatbed trailers, Aabest Services provides high-reliability container logistics tailored to maritime schedules and turnaround demands.',
    image: FLEET_IMAGES['xbbrj6hb'].cdnUrl,
    fallbackImage: FLEET_IMAGES['xbbrj6hb'].localUrl,
    gallery: [
      {
        url: FLEET_IMAGES['xbbrj6hb'].cdnUrl,
        fallbackUrl: FLEET_IMAGES['xbbrj6hb'].localUrl,
        caption: 'Container Transportation 4 — Prime mover & twist-lock trailer for 20ft/40ft units',
      },
      {
        url: FLEET_IMAGES['9jj5sk8g'].cdnUrl,
        fallbackUrl: FLEET_IMAGES['9jj5sk8g'].localUrl,
        caption: 'Container Transportation 3 — Dedicated Tema Harbour container evacuation tractor head',
      },
    ],
    benefits: [
      'Experienced port operations management and route coordination',
      'Fleet adherence to GPHA safety and inspection protocols',
      'Dedicated flatbeds supporting 20ft and 40ft container movements',
      'High vehicle uptime through structured maintenance schedules'
    ],
    capabilities: [
      'Port container evacuation and repositioning',
      'Shipping line empty return runs',
      'Off-dock terminal transfers',
      'Bonded corridor transport'
    ],
    ctaText: 'Inquire Container Haulage'
  },
  {
    id: 'lowbed-truck',
    title: 'Lowbed Truck Services',
    shortDesc: 'Heavy haulage solutions for earthmoving machinery, industrial equipment, transformers, and oversized cargo.',
    fullDesc: 'Moving heavy machinery demands specialized multi-axle trailers, load calculations, and route assessments. Aabest Services provides heavy-duty lowbed transport for construction firms, mining operations, and industrial contractors requiring safe mobilization of oversize equipment across Ghanaian routes.',
    image: FLEET_IMAGES['vgwm9r5n'].cdnUrl,
    fallbackImage: FLEET_IMAGES['vgwm9r5n'].localUrl,
    gallery: [
      {
        url: FLEET_IMAGES['vgwm9r5n'].cdnUrl,
        fallbackUrl: FLEET_IMAGES['vgwm9r5n'].localUrl,
        caption: 'Lowbed Truck 1 — Multi-axle heavy-haul transport for construction plant',
      },
      {
        url: FLEET_IMAGES['vpzbpsgr'].cdnUrl,
        fallbackUrl: FLEET_IMAGES['vpzbpsgr'].localUrl,
        caption: 'Lowbed Truck 2 — Low-profile heavy equipment transporter with safety tie-downs',
      },
      {
        url: FLEET_IMAGES['v2xyx9fe'].cdnUrl,
        fallbackUrl: FLEET_IMAGES['v2xyx9fe'].localUrl,
        caption: 'Lowbed Truck 3 — Industrial machinery & abnormal load transport trailer',
      },
    ],
    benefits: [
      'Multi-axle heavy-duty lowbed configurations with heavy payload capacity',
      'Route clearance assessment and escort planning support',
      'Skilled loading, chain lashing, and tie-down compliance',
      'Reliable mobilization to construction sites and mine locations'
    ],
    capabilities: [
      'Excavator, bulldozer, and grader transport',
      'Industrial generator and transformer delivery',
      'Oversized structural steel haulage',
      'Quarry and plant plant-to-plant machinery shifts'
    ],
    ctaText: 'Book Lowbed Equipment'
  },
  {
    id: 'tipper-truck',
    title: 'Tipper Truck Services',
    shortDesc: 'Bulk aggregate, sand, gravel, and construction material hauling for commercial projects and infrastructure works.',
    fullDesc: 'Our tipper truck transport operations deliver high-volume movement of granular building supplies, road base gravel, quarry stone, and excavated materials. Built on rugged multi-axle chassis, our tipper fleet supports civil contractors, real estate developers, and infrastructure projects with consistent round-trip efficiency.',
    image: FLEET_IMAGES['2bkpxz86'].cdnUrl,
    fallbackImage: FLEET_IMAGES['2bkpxz86'].localUrl,
    gallery: [
      {
        url: FLEET_IMAGES['2bkpxz86'].cdnUrl,
        fallbackUrl: FLEET_IMAGES['2bkpxz86'].localUrl,
        caption: 'Tipper Truck 1 — Multi-axle dump truck for bulk quarry aggregate supply',
      },
      {
        url: FLEET_IMAGES['8em4z8zp'].cdnUrl,
        fallbackUrl: FLEET_IMAGES['8em4z8zp'].localUrl,
        caption: 'Tipper Truck 2 — High-capacity commercial tipper for infrastructure fill',
      },
      {
        url: FLEET_IMAGES['53mpm4t3'].cdnUrl,
        fallbackUrl: FLEET_IMAGES['53mpm4t3'].localUrl,
        caption: 'Tipper Truck 3 — Rugged heavy-duty haulage tipper for civil works sites',
      },
    ],
    benefits: [
      'Robust high-capacity tipper bodies for heavy bulk aggregates',
      'Scheduled quarry-to-site delivery logistics',
      'Experienced commercial drivers with site-safety orientation',
      'Turnaround tracking for uninterrupted supply on project sites'
    ],
    capabilities: [
      'Granite quarry stone and aggregate distribution',
      'Sharp sand and plaster sand haulage',
      'Construction spoil and excavation clearing',
      'Sub-base material transport for road works'
    ],
    ctaText: 'Schedule Bulk Material Haulage'
  }
];
