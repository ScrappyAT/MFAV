// Shared division/nav data — the single source for the six service slugs
// (A5) so the footer links, Company.jsx's division grid, and the Services
// overview / ServiceDetail template (Phase 4) never drift out of sync.
//
// `blurb` is agent-authored copy (one-line division descriptor — written
// for a header mega-menu that was built, then deliberately removed per a
// later, approved reversal of the A5/§1c spec; `blurb` stayed since
// Company.jsx and ServiceDetail's meta description still use it) — logged
// here for COPY-FOR-REVIEW.md consolidation in Phase 3a, not yet
// client-approved.
// Order is canonical (COPY-APPROVED.md's own consistent table/section
// order throughout — §1, §3.2, §5, §6.1-6.6 — and A5 of the original
// brief): Marine & Offshore, Aviation, Energy & Infrastructure, Logistics
// & Haulage, Equipment & PPE, Property & Investment. Every consumer
// (Capabilities grid, Footer, Company's division grid, Services overview
// rows, Contact's service dropdown) maps this single array directly, so
// reordering it here fixes all of them at once rather than leaving one
// surface (the footer) diverging from a duplicated list.
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

// Contact deliberately excluded (COPY-APPROVED.md §1) — the header CTA
// ("Request a Consultation") is the sole header route to /contact; a nav
// link to the same destination was duplicative.
export const NAV_LINKS = [
  { name: 'Home', to: '/' },
  { name: 'About Us', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Industries', to: '/industries' },
  { name: 'Company', to: '/company' },
];
