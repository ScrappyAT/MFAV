// Shared division/nav data — the single source for the six service slugs
// (A5) so the header mega-menu, footer links, and later the Services
// overview / ServiceDetail template (Phase 4) never drift out of sync.
//
// `blurb` is agent-authored copy (one-line mega-menu descriptor) — logged
// here for COPY-FOR-REVIEW.md consolidation in Phase 3a, not yet
// client-approved.
export const DIVISIONS = [
  {
    id: 'marine-offshore',
    name: 'Marine & Offshore',
    blurb: 'Offshore marine operations, vessel chartering and marine support.',
    subCapabilities: [
      'Offshore Marine Operations',
      'Vessel Chartering',
      'Marine Support',
      'Journey Management',
    ],
  },
  {
    id: 'aviation',
    name: 'Aviation',
    blurb: 'Private jet, charter, airline and helicopter services.',
    subCapabilities: [
      'Private Jet Services',
      'Charter Services',
      'Airline Services',
      'Helicopter Services',
      'Purchase & Sale of Helicopters',
    ],
  },
  {
    id: 'energy-infrastructure',
    name: 'Energy & Infrastructure',
    blurb: 'Pipeline installation and maintenance, and industrial infrastructure.',
    subCapabilities: [
      'Pipeline Installation',
      'Pipeline Maintenance',
      'Industrial Infrastructure',
      'Technical Services',
    ],
  },
  {
    id: 'logistics-haulage',
    name: 'Logistics & Haulage',
    blurb: 'Haulage, equipment transportation and journey management.',
    subCapabilities: [
      'Haulage Services',
      'Equipment Transportation',
      'Journey Management',
      'Logistics Support',
    ],
  },
  {
    id: 'equipment-ppe',
    name: 'Equipment & PPE',
    blurb: 'Equipment supply, PPE and industrial supplies.',
    subCapabilities: [
      'Equipment Supply',
      'Personal Protective Equipment',
      'Industrial Supplies',
      'Marine Equipment',
    ],
  },
  {
    id: 'property-investment',
    name: 'Property & Investment',
    blurb: 'Property, investment and asset opportunities.',
    subCapabilities: ['Property', 'Investment', 'Asset Opportunities'],
  },
];

export const NAV_LINKS = [
  { name: 'Home', to: '/' },
  { name: 'About Us', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Industries', to: '/industries' },
  { name: 'Projects', to: '/projects' },
  { name: 'Company', to: '/company' },
  { name: 'Contact', to: '/contact' },
];
