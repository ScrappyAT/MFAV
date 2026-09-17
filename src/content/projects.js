// The eight real projects from COPY-APPROVED.md §3.8/§8 (A6.1) — the single
// source for both the homepage "Experience in Motion" teaser
// (components/ProjectsSection.jsx) and the full /projects portfolio
// (pages/Projects.jsx). Order matches the deck's own table.
//
// Dates are not supplied yet (A7) — `date` stays `[DATE PLACEHOLDER]` on
// every entry; consuming components append it to the location line rather
// than the deck adding a new field/slot to ProjectCard.
//
// `sectorSlug` matches the five filter-chip slugs already used on
// /projects (deck §8's filter list): marine-operations, offshore-support,
// infrastructure, logistics, equipment-supply.
export const PROJECTS = [
  {
    id: '2dhr-project-support',
    title: '2DHR Project Support',
    sectorSlug: 'offshore-support',
    sector: 'Offshore Support',
    location: '[LOCATION PLACEHOLDER], Nigeria',
    date: '[DATE PLACEHOLDER]',
    description: 'Security escort vessel operations and offshore support services provided across the project duration.',
    image: '/assets/images/division_aviation.svg',
  },
  {
    id: 'bonga-top-chain-replacement',
    title: 'Bonga Top Chain Replacement',
    sectorSlug: 'marine-operations',
    sector: 'Marine Operations',
    location: 'Bonga Field, Nigeria',
    date: '[DATE PLACEHOLDER]',
    description: 'Marine support and escort vessel operations supporting top chain replacement on a deepwater facility.',
    image: '/assets/images/hero_section.jpg',
    graded: true,
  },
  {
    id: '20-epwd-pipeline-project',
    title: '20" EPWD Pipeline Project',
    sectorSlug: 'infrastructure',
    sector: 'Infrastructure',
    location: '[LOCATION PLACEHOLDER], Nigeria',
    date: '[DATE PLACEHOLDER]',
    description: 'Marine and vessel support for pipeline installation works on a 20-inch export line.',
    image: '/assets/images/who_we_are_plant.svg',
  },
  {
    id: 'offshore-seismic-survey-support',
    title: 'Offshore Seismic Survey Support',
    sectorSlug: 'offshore-support',
    sector: 'Offshore Support',
    location: '[LOCATION PLACEHOLDER], Nigeria',
    date: '[DATE PLACEHOLDER]',
    description: 'Escort and support vessel operations for seismic survey campaigns in Nigerian waters.',
    image: '/assets/images/division_aviation.svg',
  },
  {
    id: 'offshore-ago-supply-koko-field',
    title: 'Offshore AGO Supply — Koko Field',
    sectorSlug: 'logistics',
    sector: 'Logistics',
    location: 'Koko Field, Nigeria',
    date: '[DATE PLACEHOLDER]',
    description: 'Scheduled offshore supply of Automotive Gas Oil to producing field operations.',
    image: '/assets/images/division_logistics.svg',
  },
  {
    id: 'offshore-ago-supply-ladol',
    title: 'Offshore AGO Supply — LADOL',
    sectorSlug: 'logistics',
    sector: 'Logistics',
    location: 'LADOL, Lagos',
    date: '[DATE PLACEHOLDER]',
    description: 'Fuel supply and offshore vessel chandling services from the LADOL free zone.',
    image: '/assets/images/division_logistics.svg',
  },
  {
    id: 'ppe-supply-programme',
    title: 'PPE Supply Programme',
    sectorSlug: 'equipment-supply',
    sector: 'Equipment Supply',
    location: 'Nigeria',
    date: '[DATE PLACEHOLDER]',
    description: 'Multi-year protective equipment supply supporting workforce compliance across offshore and industrial sites.',
    image: '/assets/images/division_equipment.svg',
  },
  {
    id: 'expatriate-journey-management',
    title: 'Expatriate Journey Management',
    sectorSlug: 'logistics',
    sector: 'Logistics',
    location: 'Nationwide, Nigeria',
    date: '[DATE PLACEHOLDER]',
    description: 'Airport reception, secure executive transport and escort services for client expatriate personnel.',
    image: '/assets/images/division_logistics.svg',
  },
];

// Homepage teaser basis (Pass 2 report): the first-listed project for each
// of the five sector categories, in the deck's own table order — mirrors
// the original section's one-card-per-category design instead of showing
// all eight (that full set is /projects' job). Not exported for filtering
// use elsewhere; ProjectsSection.jsx derives it directly from PROJECTS.
