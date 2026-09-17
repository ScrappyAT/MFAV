// Phase 4: the single content source driving ServiceDetail — one
// template, six routes, no copy-pasted pages. Sub-capability names come
// from DIVISIONS in ./divisions.js (Phase 2b division data) —
// reused here, not re-invented; only their one-line descriptions are new.
//
// All copy is agent-authored (A7) and grounded in real industry
// terminology (OSVs, AHTS vessels, FPSOs, cathodic protection, etc.) —
// that's what "sector-literate" means here, not a claim about M-FAV's own
// track record. No specific claim M-FAV can't support (no client names,
// no contract values, no certifications, no invented statistics) appears
// anywhere in this file. Logged for COPY-FOR-REVIEW.md.
export const SERVICES = {
  'marine-offshore': {
    positioning: 'Vessel operations and marine support built for the realities of working offshore.',
    image: '/assets/images/hero_section.jpg',
    graded: true,
    overview: 'Marine & Offshore covers the operational core of working at sea: chartering the right vessel for the job, running marine support alongside platform operations, and keeping personnel and cargo moving safely between shore and site. Work here is planned around tide, weather windows and vessel availability — not a fixed schedule.',
    keyFacts: [
      { label: 'Scope', value: 'Vessel chartering, offshore marine operations, marine support, journey management' },
      { label: 'Typical engagement', value: 'Single-vessel charters through multi-vessel campaign support' },
      { label: 'Sectors served', value: 'Oil & gas, maritime, energy, infrastructure' },
      { label: 'Support model', value: 'Dedicated coordination from mobilisation through demobilisation' },
    ],
    capabilities: [
      { name: 'Offshore Marine Operations', description: 'Platform supply, crew transfer and marine coordination for offshore installations, run to the safety margins the environment demands.' },
      { name: 'Vessel Chartering', description: 'Access to OSVs, AHTS vessels, tugs and barges, chartered and scheduled to match the scope and duration of the operation.' },
      { name: 'Marine Support', description: 'Bunkering coordination, port agency support and technical assistance for vessels operating on long rotations.' },
      { name: 'Journey Management', description: 'Structured planning and tracking for personnel and cargo movements between shore base and offshore site.' },
    ],
    process: [
      { title: 'Consultation', description: 'Understand the vessel, route and cargo requirements before anything is quoted.' },
      { title: 'Assessment & Planning', description: 'Vessel selection, routing and weather-window planning against the operation’s timeline.' },
      { title: 'Mobilisation', description: 'Vessel and crew mobilised, documentation and port clearances confirmed.' },
      { title: 'Execution', description: 'Marine operations run against the plan, with a single point of contact for changes.' },
      { title: 'Monitoring & Reporting', description: 'Journey tracking and post-voyage reporting through to demobilisation.' },
    ],
    benefits: [
      'Vessel options matched to the job, not a fixed fleet.',
      'A single point of contact from charter through demobilisation.',
      'Journey management built around personnel safety.',
      'Marine support that understands offshore working conditions.',
    ],
    relevantIndustries: ['Oil & Gas', 'Maritime', 'Energy', 'Infrastructure'],
    relatedServices: ['aviation', 'energy-infrastructure', 'logistics-haulage'],
    cta: {
      heading: 'Ready to Move Your Next Operation by Sea?',
      body: 'Tell us the vessel, route and timeline — we’ll put together the right marine solution.',
    },
  },

  aviation: {
    positioning: 'Private and charter aviation for people and cargo that can’t wait on a scheduled flight.',
    image: '/assets/images/division_aviation.svg',
    overview: 'Aviation covers private jet and helicopter charter, airline services, and the brokerage work around buying or selling rotary aircraft. Charter operations are built around the realities of aviation scheduling — crew duty times, aircraft availability, weather holds — not a promise of instant departure.',
    keyFacts: [
      { label: 'Scope', value: 'Private jet services, charter services, airline services, helicopter services, purchase & sale of helicopters' },
      { label: 'Typical engagement', value: 'Single charter through standing crew-rotation contracts' },
      { label: 'Sectors served', value: 'Energy, maritime, corporate travel' },
      { label: 'Support model', value: 'Charter coordination with defined lead times per aircraft type' },
    ],
    capabilities: [
      { name: 'Private Jet Services', description: 'Executive charter for time-sensitive travel, booked against real aircraft and crew availability.' },
      { name: 'Charter Services', description: 'On-demand charter coordination across fixed-wing and rotary aircraft for corporate and operational travel.' },
      { name: 'Airline Services', description: 'Coordination with scheduled carriers for personnel travel where charter isn’t the right fit.' },
      { name: 'Helicopter Services', description: 'Crew rotation, offshore transfer and executive helicopter charter, scheduled around flight-time limits and weather.' },
      { name: 'Purchase & Sale of Helicopters', description: 'Brokerage and advisory support for acquiring or selling rotary aircraft, including technical inspection coordination.' },
    ],
    process: [
      { title: 'Consultation', description: 'Confirm passenger count, route and timing against realistic aircraft availability.' },
      { title: 'Assessment & Planning', description: 'Aircraft type, crew and permissions matched to the route and payload.' },
      { title: 'Mobilisation', description: 'Aircraft, crew and ground handling confirmed ahead of departure.' },
      { title: 'Execution', description: 'Charter operated to the confirmed schedule, with contingency for weather or delay.' },
      { title: 'Monitoring & Reporting', description: 'Flight tracking and post-charter reporting.' },
    ],
    benefits: [
      'Charter options across fixed-wing and rotary aircraft.',
      'Scheduling built around real crew duty-time and weather constraints.',
      'A single contact for both charter and aircraft brokerage.',
      'Support for time-sensitive executive and crew travel.',
    ],
    relevantIndustries: ['Aviation', 'Oil & Gas', 'Maritime', 'Energy'],
    relatedServices: ['marine-offshore', 'logistics-haulage'],
    cta: {
      heading: 'Need Aircraft on the Ground, Not on Hold?',
      body: 'Tell us the route and timing — we’ll confirm what’s actually available.',
    },
  },

  'energy-infrastructure': {
    positioning: 'Pipeline and infrastructure work, from installation through to ongoing maintenance.',
    image: '/assets/images/who_we_are_plant.svg',
    overview: 'Energy & Infrastructure covers the installation and upkeep of pipeline and industrial infrastructure — work measured in welds, pressure tests and inspection intervals, not just completion dates. Technical services support the infrastructure through its working life, not only at handover.',
    keyFacts: [
      { label: 'Scope', value: 'Pipeline installation, pipeline maintenance, industrial infrastructure, technical services' },
      { label: 'Typical engagement', value: 'Discrete installation projects through ongoing maintenance contracts' },
      { label: 'Sectors served', value: 'Oil & gas, energy, infrastructure, industrial operations' },
      { label: 'Support model', value: 'Technical teams engaged for the project duration or on a standing maintenance basis' },
    ],
    capabilities: [
      { name: 'Pipeline Installation', description: 'Onshore and offshore pipeline installation, from route preparation through tie-in and pressure testing.' },
      { name: 'Pipeline Maintenance', description: 'Inspection, integrity testing and corrosion management for pipelines already in service.' },
      { name: 'Industrial Infrastructure', description: 'Construction and upkeep of industrial infrastructure supporting energy and processing operations.' },
      { name: 'Technical Services', description: 'Engineering and technical support across installation, inspection and maintenance work.' },
    ],
    process: [
      { title: 'Consultation', description: 'Understand the pipeline or infrastructure scope, site conditions and constraints.' },
      { title: 'Assessment & Planning', description: 'Route survey, engineering review and materials planning ahead of mobilisation.' },
      { title: 'Mobilisation', description: 'Crew, equipment and materials mobilised to site.' },
      { title: 'Execution', description: 'Installation or maintenance work carried out against the engineering plan, with testing at each stage.' },
      { title: 'Monitoring & Reporting', description: 'Inspection records, test results and handover documentation.' },
    ],
    benefits: [
      'Installation and maintenance under one technical team.',
      'Testing and inspection built into every stage, not left to the end.',
      'Experience with both onshore and offshore pipeline work.',
      'Technical services that continue after installation is complete.',
    ],
    relevantIndustries: ['Oil & Gas', 'Energy', 'Infrastructure', 'Industrial Operations'],
    relatedServices: ['marine-offshore', 'equipment-ppe'],
    cta: {
      heading: 'Have a Pipeline or Infrastructure Scope to Plan?',
      body: 'Tell us the scope and site conditions — we’ll bring in the right technical team.',
    },
  },

  'logistics-haulage': {
    positioning: 'Haulage and logistics coordination for equipment and materials that have to arrive on schedule.',
    image: '/assets/images/division_logistics.svg',
    overview: 'Logistics & Haulage moves heavy equipment and materials from port to site, coordinating haulage, transportation and journey management as one job rather than three separate handoffs. The work is planned around load limits, route restrictions and delivery windows.',
    keyFacts: [
      { label: 'Scope', value: 'Haulage services, equipment transportation, journey management, logistics support' },
      { label: 'Typical engagement', value: 'Single consignment moves through ongoing site-supply logistics' },
      { label: 'Sectors served', value: 'Construction, energy, industrial operations, infrastructure' },
      { label: 'Support model', value: 'Route and load planning ahead of every haulage job' },
    ],
    capabilities: [
      { name: 'Haulage Services', description: 'Heavy and abnormal load haulage, planned against route and weight restrictions.' },
      { name: 'Equipment Transportation', description: 'Port-to-site transport for industrial equipment and machinery, including loading and securing.' },
      { name: 'Journey Management', description: 'Route planning and tracking for haulage movements, with contingency for road and weather conditions.' },
      { name: 'Logistics Support', description: 'Coordination of multi-leg equipment and materials moves across suppliers and sites.' },
    ],
    process: [
      { title: 'Consultation', description: 'Confirm load dimensions, weight and delivery timeline.' },
      { title: 'Assessment & Planning', description: 'Route survey and permit requirements checked against the load.' },
      { title: 'Mobilisation', description: 'Haulage vehicles, escorts and permits confirmed ahead of the move.' },
      { title: 'Execution', description: 'Load moved to plan, with journey tracking throughout.' },
      { title: 'Monitoring & Reporting', description: 'Delivery confirmation and reporting on route conditions encountered.' },
    ],
    benefits: [
      'Route and permit planning done before the load moves, not during.',
      'Haulage capacity for abnormal and heavy loads.',
      'Journey management that tracks the load, not just books the truck.',
      'One point of contact from port to site.',
    ],
    relevantIndustries: ['Construction', 'Logistics', 'Industrial Operations', 'Infrastructure'],
    relatedServices: ['marine-offshore', 'equipment-ppe'],
    cta: {
      heading: 'Got a Load That Needs to Move Without Surprises?',
      body: 'Tell us the dimensions, weight and route — we’ll plan it before it moves.',
    },
  },

  'equipment-ppe': {
    positioning: 'Industrial equipment and certified PPE, supplied and maintained to the specification the job requires.',
    image: '/assets/images/division_equipment.svg',
    overview: 'Equipment & PPE supplies the machinery, tools, marine equipment and protective gear operations depend on — sourced to specification and supported after delivery, not just sold and forgotten.',
    keyFacts: [
      { label: 'Scope', value: 'Equipment supply, personal protective equipment, industrial supplies, marine equipment' },
      { label: 'Typical engagement', value: 'One-off equipment orders through standing supply arrangements' },
      { label: 'Sectors served', value: 'Marine, energy, construction, industrial operations' },
      { label: 'Support model', value: 'Supply against specification, with ongoing availability for repeat orders' },
    ],
    capabilities: [
      { name: 'Equipment Supply', description: 'Industrial machinery, generators, pumps and tools sourced to the specification the operation requires.' },
      { name: 'Personal Protective Equipment', description: 'Certified PPE — safety wear, protective gear and site-specific equipment — supplied for crews working in hazardous conditions.' },
      { name: 'Industrial Supplies', description: 'General industrial consumables and supplies for site and vessel operations.' },
      { name: 'Marine Equipment', description: 'Equipment and gear specified for marine and offshore operating conditions.' },
    ],
    process: [
      { title: 'Consultation', description: 'Confirm the equipment or PPE specification and quantity required.' },
      { title: 'Assessment & Planning', description: 'Sourcing against specification, with lead times confirmed upfront.' },
      { title: 'Mobilisation', description: 'Equipment prepared and dispatched to site.' },
      { title: 'Execution', description: 'Delivery confirmed against the order and specification.' },
      { title: 'Monitoring & Reporting', description: 'Ongoing availability tracked for repeat and standing orders.' },
    ],
    benefits: [
      'Equipment and PPE sourced to specification, not substituted.',
      'Support for both one-off orders and standing supply arrangements.',
      'Marine-rated equipment for offshore operating conditions.',
      'Lead times confirmed before the order is placed.',
    ],
    relevantIndustries: ['Industrial Operations', 'Maritime', 'Construction', 'Energy'],
    relatedServices: ['marine-offshore', 'logistics-haulage'],
    cta: {
      heading: 'Need Equipment or PPE Sourced to Spec?',
      body: 'Tell us the specification and quantity — we’ll confirm lead time before you order.',
    },
  },

  'property-investment': {
    positioning: 'Industrial and commercial property, and the investment work that sits alongside it.',
    image: '/assets/images/division_property.svg',
    overview: 'Property & Investment covers industrial and commercial real estate and the asset opportunities around it — port-adjacent land, serviced industrial yards and facilities that support operational businesses, evaluated with the same operational discipline as the rest of the group.',
    keyFacts: [
      { label: 'Scope', value: 'Property, investment, asset opportunities' },
      { label: 'Typical engagement', value: 'Individual property or asset transactions through ongoing portfolio involvement' },
      { label: 'Sectors served', value: 'Industrial, logistics, energy-adjacent property' },
      { label: 'Support model', value: 'Direct engagement on each opportunity, evaluated on its own merits' },
    ],
    capabilities: [
      { name: 'Property', description: 'Commercial and industrial property, including port-adjacent land and serviced industrial yards.' },
      { name: 'Investment', description: 'Asset investment structured around industrial and operational property.' },
      { name: 'Asset Opportunities', description: 'Identification and evaluation of industrial property and asset opportunities as they arise.' },
    ],
    process: [
      { title: 'Consultation', description: 'Understand the property or investment objective.' },
      { title: 'Assessment & Planning', description: 'Site, asset or opportunity assessed against the objective.' },
      { title: 'Mobilisation', description: 'Terms and documentation prepared for the transaction or engagement.' },
      { title: 'Execution', description: 'Transaction or investment carried out to agreed terms.' },
      { title: 'Monitoring & Reporting', description: 'Ongoing oversight for property and asset positions held.' },
    ],
    benefits: [
      'Industrial and commercial property evaluated with operational insight.',
      'Access to port-adjacent and industrial-yard opportunities.',
      'Asset opportunities assessed on their individual merits.',
      'Direct engagement rather than a generic investment product.',
    ],
    relevantIndustries: ['Infrastructure', 'Logistics', 'Industrial Operations'],
    relatedServices: ['energy-infrastructure', 'logistics-haulage'],
    cta: {
      heading: 'Evaluating an Industrial Property or Asset?',
      body: 'Tell us the opportunity — we’ll evaluate it on its own merits.',
    },
  },
};
