// Per-route <title>/description pairs — COPY-APPROVED.md §2, applied verbatim.
// Replaces the old "<page title> | <site name>" auto-suffix pattern (see
// useDocumentMeta.js): the deck gives each route a complete, final title
// string already, so pages pass METADATA[route].title straight through.
export const METADATA = {
  home: {
    title: 'M-FAV Offshore and Allied Services Limited',
    description: 'Integrated marine, offshore, aviation, logistics, energy and industrial solutions across Nigeria and West Africa. Safety and operational excellence at the core.',
  },
  about: {
    title: 'About Us — M-FAV',
    description: 'An integrated services group built around operational capability, safety discipline and accountable delivery across complex industrial environments.',
  },
  services: {
    title: 'Our Services — M-FAV',
    description: 'Six divisions covering marine and offshore, aviation, energy and infrastructure, logistics, equipment supply and property investment.',
  },
  'services/marine-offshore': {
    title: 'Marine & Offshore — M-FAV',
    description: 'Vessel management, chartering, offshore marine operations and marine support for oil, gas and maritime operators.',
  },
  'services/aviation': {
    title: 'Aviation Services — M-FAV',
    description: 'Private jet and helicopter charter, airline support services, and aircraft purchase and sale advisory.',
  },
  'services/energy-infrastructure': {
    title: 'Energy & Infrastructure — M-FAV',
    description: 'Pipeline installation and maintenance, subsea infrastructure and technical services for energy operators.',
  },
  'services/logistics-haulage': {
    title: 'Logistics & Haulage — M-FAV',
    description: 'Heavy haulage, equipment transportation, journey management and logistics support across Nigeria.',
  },
  'services/equipment-ppe': {
    title: 'Equipment & PPE — M-FAV',
    description: 'Certified personal protective equipment, marine equipment and technical procurement with compliant sourcing.',
  },
  'services/property-investment': {
    title: 'Property & Investment — M-FAV',
    description: 'Industrial and port-adjacent property, asset opportunities and investment partnerships.',
  },
  industries: {
    title: 'Industries We Serve — M-FAV',
    description: 'Capability across oil and gas, maritime, energy, aviation, construction, infrastructure, logistics and industrial operations.',
  },
  projects: {
    title: 'Projects — M-FAV',
    description: 'Selected offshore, marine, logistics and infrastructure operations delivered by M-FAV.',
  },
  company: {
    title: 'Company — M-FAV',
    description: 'Group structure, operating model, standards posture and careers at M-FAV Offshore and Allied Services Limited.',
  },
  contact: {
    title: 'Contact Us — M-FAV',
    description: 'Speak to our team about marine, offshore, aviation, logistics or equipment requirements.',
  },
  notFound: {
    title: 'Page Not Found — M-FAV',
    description: 'The page you requested could not be found.',
  },
  faq: {
    title: 'FAQ — M-FAV',
    description: 'Answers to common questions about M-FAV services, operations, how to engage us and how to apply.',
  },
};
