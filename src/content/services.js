// Phase 4/Pass 3: the single content source driving ServiceDetail — one
// template, six routes. All copy below is COPY-APPROVED.md §6, applied
// verbatim (client-approved deck, not agent-authored — see
// CONTENT-UPDATE-BRIEF.md A2). `[PLACEHOLDER: ...]` and `[VERIFY]`
// markers inside values are reproduced exactly as the deck gives them,
// consistent with how bracketed markers are rendered everywhere else on
// the site (A2.6) — not resolved, not guessed, not dropped.
//
// `overview` is an array of the deck's three paragraphs per division, not
// a single string — ServiceDetail's Overview section maps over it,
// rendering one <p> per entry (a narrowly-scoped exception authorised the
// same way as the CTA-band double-render fix). Every consumer of
// `service.overview` must treat it as an array; there is exactly one
// (ServiceDetail.jsx's Overview section).
//
// `capabilities[].name`/`description` are each division's OWN list
// (independent of `divisions.js`'s `subCapabilities`, which stays as the
// homepage panel's plain sub-capability strings) — free to match the
// deck's exact capability headings, including Marine & Offshore's fourth
// one, which the deck names "Journey Management (marine interface)".
// That same entry's deck description embeds a markdown link
// (`[Logistics & Haulage](/services/logistics-haulage)`), which this
// description slot renders as plain text, not markdown — rendered here
// with the link text kept but the markdown syntax dropped, rather than
// showing literal brackets/parentheses. The Related Services section
// further down the same page already links to Logistics & Haulage.
//
// Per-division process steps: three divisions (Marine & Offshore,
// Logistics & Haulage, Equipment & PPE) have deck-specified custom step
// names, applied as written, not normalised to the default sequence.
// Property & Investment's steps also differ from the stated default in
// the deck's own content (Consultation, Assessment, Structuring,
// Completion, Ongoing Support) even though the deck's own framing note
// doesn't call it out alongside the other three — applied literally as
// given regardless, flagged as an aside in the Pass 3 report.
export const SERVICES = {
  'marine-offshore': {
    positioning: 'Vessel management, chartering and offshore support for operations that cannot afford downtime.',
    image: '/assets/images/marine_offshore.gif',
    graded: true,
    overview: [
      'Offshore operations are measured in vessel availability. A craft off-hire for a certification lapse, a fuel transfer that misses a window, a crew change that slips a tide — each one costs more than the vessel day rate it interrupts.',
      'M-FAV manages and charters offshore support craft including Fast Support Intervention Vessels, Anchor Handling Vessels, Platform Supply Vessels and specialised assets, and operates them in compliance with the regulatory and class requirements applicable to Nigerian waters. Our scope extends past the vessel itself to crew transfer, AGO supply coordination, security escort and offshore chandling — the support functions that determine whether an offshore programme runs to plan.',
      'Operations are backed by experienced marine personnel and a proactive maintenance and certification posture, so vessel documentation is current before it is asked for rather than after.',
    ],
    keyFacts: [
      { label: 'Scope', value: 'Vessel management, chartering, offshore marine support, crew transfer, security escort, AGO coordination, offshore chandling' },
      { label: 'Vessel types', value: 'FSIV · AHV · PSV · security escort vessels · specialised offshore assets' },
      { label: 'Typical engagement', value: 'Spot charter through to long-term vessel management contracts' },
      { label: 'Sectors served', value: 'Oil & Gas · Maritime · Energy' },
      { label: 'Support model', value: '24/7 operational support with a named marine coordinator per contract' },
      { label: 'Operating area', value: 'Nigerian waters and the Gulf of Guinea' },
    ],
    capabilities: [
      { name: 'Offshore Marine Operations', description: 'Day-to-day management of offshore support vessels: crewing, certification, maintenance planning, bunkering and voyage execution, with compliance maintained against the applicable regulatory and class requirements.' },
      { name: 'Vessel Chartering', description: 'Sourcing and contracting the right vessel for the scope, whether a single mobilisation or a sustained campaign, with commercial terms and off-hire conditions made clear before signature.' },
      { name: 'Marine Support', description: 'Crew transfer, AGO supply coordination, security escort and offshore chandling — the functions that keep an offshore facility supplied and its personnel moving safely.' },
      { name: 'Journey Management (marine interface)', description: 'Coordination between vessel movements and onshore transport so crew rotations connect without exposure at the quayside or the airport. Full journey management sits under Logistics & Haulage.' },
    ],
    process: [
      { title: 'Consultation', description: 'We establish the scope, duration, operating area and the client’s marine assurance requirements.' },
      { title: 'Vessel & Scope Assessment', description: 'Vessel selection matched to scope, with certification, class status and crew competency verified before commitment.' },
      { title: 'Mobilisation', description: 'Documentation, permits, crew mobilisation and pre-mobilisation inspection completed ahead of sailing.' },
      { title: 'Execution', description: 'Operations run under an agreed marine procedure with daily position and status reporting.' },
      { title: 'Monitoring & Reporting', description: 'Vessel performance, HSE events, fuel and downtime reported on an agreed cycle, with a close-out report at demobilisation.' },
    ],
    benefits: [
      'Vessel availability protected through planned maintenance and current certification.',
      'One accountable contact across vessel, crew, fuel and escort requirements.',
      'Compliance documentation maintained and audit-ready.',
      'Local operating knowledge of Nigerian waters, ports and security conditions.',
      'Commercial terms structured around your operating window, not a standard template.',
    ],
    relevantIndustries: ['Oil & Gas', 'Maritime', 'Energy'],
    relatedServices: ['logistics-haulage', 'energy-infrastructure', 'equipment-ppe'],
    cta: {
      heading: 'Need Vessel Support for an Upcoming Operation?',
      body: 'Tell us the scope and operating window. We will come back with a vessel and a plan.',
    },
  },

  aviation: {
    positioning: 'Charter and aircraft services arranged around operational schedules, not timetables.',
    image: '/assets/images/division_aviation.jpg',
    overview: [
      'Moving people to and from operational sites is rarely a scheduled-airline problem. Crew rotations run to shift patterns, offshore movements depend on weather windows, and executive travel changes at short notice.',
      'M-FAV arranges fixed-wing and rotary aviation services covering private jet charter, ad-hoc and programme charter, helicopter services for offshore and remote site access, and support to airline operations. We work with approved operators and verify certification, insurance and crew currency before an aircraft is committed to a client movement.',
      'Alongside charter, we advise on and broker helicopter purchase and sale transactions for clients acquiring or disposing of rotary assets.',
    ],
    keyFacts: [
      { label: 'Scope', value: 'Private jet charter · charter services · airline services · helicopter services · helicopter purchase and sale' },
      { label: 'Typical engagement', value: 'Ad-hoc movements, rotation programmes, and asset transactions' },
      { label: 'Sectors served', value: 'Oil & Gas · Aviation · Energy · Corporate' },
      { label: 'Support model', value: '[PLACEHOLDER: e.g. 24/7 charter desk with defined response time]' },
      { label: 'Operator basis', value: '[PLACEHOLDER: own AOC, partner operators, or brokerage — confirm which]' },
    ],
    capabilities: [
      { name: 'Private Jet Services', description: 'Executive fixed-wing charter for management and client travel, arranged to your schedule, with ground handling and arrival coordination included.' },
      { name: 'Charter Services', description: 'Ad-hoc and programme charter for crew movement and time-critical passenger or cargo requirements.' },
      { name: 'Airline Services', description: 'Support services to airline operations, including [PLACEHOLDER: specify — ground handling, crew logistics, procurement, technical support].' },
      { name: 'Helicopter Services', description: 'Rotary operations for offshore and remote site access, crew rotation and medevac support, arranged with operators holding the relevant approvals.' },
      { name: 'Purchase & Sale of Helicopters', description: 'Advisory and transaction support for clients acquiring or disposing of rotary aircraft, including sourcing, valuation input and transaction coordination.' },
    ],
    process: [
      { title: 'Consultation', description: 'Route, passenger numbers, payload, timing and any client aviation standard.' },
      { title: 'Assessment & Planning', description: 'Aircraft type matched to the requirement; operator certification, insurance and crew currency verified.' },
      { title: 'Mobilisation', description: 'Permits, slots, ground handling and passenger documentation arranged.' },
      { title: 'Execution', description: 'Movement flown, with coordination through departure, transit and arrival.' },
      { title: 'Monitoring & Reporting', description: 'Movement confirmation, and programme-level reporting on longer contracts.' },
    ],
    benefits: [
      'Aircraft matched to the movement rather than the other way round.',
      'Operator certification and insurance verified before commitment.',
      'Coordination across air and ground legs of the same journey.',
      'Short-notice capability for operational and medical movements.',
      'Single commercial relationship across charter and asset transactions.',
    ],
    relevantIndustries: ['Aviation', 'Oil & Gas', 'Energy'],
    relatedServices: ['marine-offshore', 'logistics-haulage'],
    cta: {
      heading: 'Have a Movement to Arrange?',
      body: 'Send us the route, dates and passenger numbers and we will come back with options.',
    },
  },

  'energy-infrastructure': {
    positioning: 'Pipeline and infrastructure delivery executed to the standards the scope demands.',
    image: '/assets/images/energy and infrasture division.png',
    overview: [
      'Pipeline work is unforgiving. Lay tolerance, weld integrity, seabed conditions and weather windows all constrain the job, and the consequences of getting any of them wrong are measured in environmental damage and regulatory exposure, not just cost.',
      'M-FAV supports pipeline installation, cable laying and subsea infrastructure work for offshore and onshore energy operations, using DP2-capable vessels and positioning technology appropriate to the accuracy the scope requires. We work in partnership with local and international contractors, taking the marine and support scope on projects where that is where we add most value.',
      'The same discipline extends to industrial infrastructure and technical services onshore — installation, maintenance and support scopes delivered against specification and handed over with documentation.',
    ],
    keyFacts: [
      { label: 'Scope', value: 'Pipeline installation · pipeline maintenance · cable laying · subsea infrastructure · industrial infrastructure · technical services' },
      { label: 'Vessel capability', value: 'DP2-capable vessel support' },
      { label: 'Typical engagement', value: 'Project-based scopes, and term maintenance contracts' },
      { label: 'Sectors served', value: 'Oil & Gas · Energy · Infrastructure · Construction' },
      { label: 'Delivery model', value: 'Direct delivery and partnership with local and international stakeholders' },
      { label: 'Standards posture', value: 'Executed to the client specification and applicable safety and environmental requirements' },
    ],
    capabilities: [
      { name: 'Pipeline Installation', description: 'Installation support for offshore and onshore pipelines, including lay support, positioning and marine spread coordination, executed under the project’s safety and environmental requirements.' },
      { name: 'Pipeline Maintenance', description: 'Inspection support, repair scopes and maintenance campaigns on existing lines, planned to minimise production interruption.' },
      { name: 'Industrial Infrastructure', description: 'Installation and support scopes on industrial facilities and associated infrastructure, delivered against specification with handover documentation.' },
      { name: 'Technical Services', description: 'Engineering and inspection support, cable laying, and specialist technical scopes supporting energy and infrastructure assets.' },
    ],
    process: [
      { title: 'Consultation', description: 'Scope, route, tolerances, environmental constraints and client standards.' },
      { title: 'Assessment & Planning', description: 'Survey and site data reviewed, method statement and risk assessment prepared, marine spread and equipment defined.' },
      { title: 'Mobilisation', description: 'Permits and regulatory notifications, vessel and equipment mobilisation, pre-works inspection.' },
      { title: 'Execution', description: 'Works executed under the approved method statement with daily progress and HSE reporting.' },
      { title: 'Monitoring & Reporting', description: 'As-built documentation, inspection records and close-out reporting.' },
    ],
    benefits: [
      'DP2-capable vessel support for precision offshore work.',
      'Method statements and risk assessments prepared before mobilisation, not during.',
      'Environmental controls built into the job plan.',
      'Experience working alongside international EPC contractors on Nigerian scopes.',
      'Documented handover that stands up to client and regulatory review.',
    ],
    relevantIndustries: ['Oil & Gas', 'Energy', 'Infrastructure', 'Construction'],
    relatedServices: ['marine-offshore', 'logistics-haulage', 'equipment-ppe'],
    cta: {
      heading: 'Planning a Pipeline or Infrastructure Scope?',
      body: 'Share the scope and constraints. We will tell you what we can deliver and how.',
    },
  },

  'logistics-haulage': {
    positioning: 'Heavy movement across Nigeria, tracked and accounted for from collection to delivery.',
    image: '/assets/images/division_logistics.jpeg',
    overview: [
      'Nigerian road logistics is a security and compliance problem as much as a transport one. Route conditions, checkpoint delays, product security and driver welfare all determine whether a load arrives intact and on time.',
      'M-FAV provides onshore and offshore haulage for petroleum products, machinery, spare parts, plant and raw materials including sand, cement, metals and chemicals. Movements are tracked and monitored in real time, and high-value or hazardous loads are planned with route assessment and, where required, escort.',
      'We also deliver journey management for personnel — airport meet-and-greet, executive transport, pilot escort vehicles, armed and plain-clothed security details, and arrival and departure clearance — with serviced executive accommodation available for visiting personnel.',
    ],
    keyFacts: [
      { label: 'Scope', value: 'Haulage · equipment transportation · journey management · logistics support · offshore AGO supply' },
      { label: 'Cargo types', value: 'Petroleum products (AGO) · machinery and plant · spares · sand, cement, metals · chemicals' },
      { label: 'Typical engagement', value: 'Single movements, scheduled supply contracts, and term journey management' },
      { label: 'Sectors served', value: 'Oil & Gas · Logistics · Construction · Industrial Operations' },
      { label: 'Support model', value: 'Real-time tracking with 24/7 movement coordination' },
      { label: 'Coverage', value: 'Nationwide, Nigeria' },
    ],
    capabilities: [
      { name: 'Haulage Services', description: 'Onshore and offshore haulage of petroleum products, industrial materials and equipment, with real-time tracking and delivery confirmation on every movement.' },
      { name: 'Equipment Transportation', description: 'Movement of plant, machinery and project cargo, including route assessment and lifting coordination for oversized loads.' },
      { name: 'Journey Management', description: 'Secure personnel movement: airport reception, executive transport, escort vehicles, security details, and arrival and departure clearance, supported by serviced executive accommodation with workstations and conference facilities.' },
      { name: 'Logistics Support', description: 'Coordination of supply into offshore and remote operations, including offshore AGO supply and vessel chandling.' },
    ],
    process: [
      { title: 'Consultation', description: 'Cargo or personnel profile, origin and destination, timing and any client security requirement.' },
      { title: 'Route & Risk Assessment', description: 'Route surveyed, security posture assessed, escort and timing decided.' },
      { title: 'Mobilisation', description: 'Vehicles, drivers and permits confirmed; pre-movement inspection and briefing completed.' },
      { title: 'Execution', description: 'Movement tracked in real time with checkpoint-to-checkpoint status.' },
      { title: 'Monitoring & Reporting', description: 'Proof of delivery, exception reporting and movement close-out.' },
    ],
    benefits: [
      'Real-time visibility of every movement from dispatch to delivery.',
      'Route and security risk assessed before departure.',
      'Hazardous and high-value cargo handled under defined controls.',
      'Personnel movement and cargo movement coordinated under one contract.',
      'Nationwide coverage with local route knowledge.',
    ],
    relevantIndustries: ['Logistics', 'Oil & Gas', 'Construction', 'Industrial Operations'],
    relatedServices: ['marine-offshore', 'equipment-ppe', 'energy-infrastructure'],
    cta: {
      heading: 'Have a Load or a Movement to Plan?',
      body: 'Tell us what is moving, from where and by when. We will plan the route and confirm the cost.',
    },
  },

  'equipment-ppe': {
    positioning: 'Certified equipment and protective gear, sourced to specification and delivered on schedule.',
    image: '/assets/images/division_equipment.png',
    overview: [
      'Procurement fails in two directions. Cheap sourcing puts uncertified equipment on a worksite, and slow sourcing stops the worksite entirely. Both are avoidable with the right supplier relationships and honest lead times.',
      'M-FAV supplies personal protective equipment, marine equipment, industrial consumables and technical equipment for oil production, drilling and petrochemical operations. Sourcing is competitive but specification-led: items are procured against the applicable standards and inspected before they reach your site.',
      'We are a master distributor for Portwest, and we manufacture protective workwear locally in our own facility. In-house production means customised workwear — client branding, specific fabrics, sizing for your workforce — produced in-country with shorter lead times than imported equivalents.',
    ],
    keyFacts: [
      { label: 'Scope', value: 'PPE · locally manufactured workwear · marine equipment · industrial supplies · technical procurement' },
      { label: 'Distribution', value: 'Master distributor for Portwest [VERIFY]' },
      { label: 'Manufacturing', value: 'In-house workwear production facility, Nigeria [VERIFY]' },
      { label: 'Typical engagement', value: 'One-off supply, scheduled replenishment, and term supply contracts' },
      { label: 'Sectors served', value: 'Oil & Gas · Maritime · Construction · Industrial Operations' },
      { label: 'Standards posture', value: 'Procured against applicable standards including ASTM specifications [VERIFY]' },
    ],
    capabilities: [
      { name: 'Personal Protective Equipment', description: 'Helmets, eye and hearing protection, gloves, coveralls, safety footwear, fall-arrest harnesses and high-visibility clothing, supplied against the standards your site requires.' },
      { name: 'Locally Manufactured Workwear', description: 'Customised coveralls and workwear produced in our own facility, allowing client-specific branding, fabric and sizing with shorter lead times and lower landed cost than imported alternatives.' },
      { name: 'Marine Equipment', description: 'Deck equipment, safety equipment, rigging and marine consumables for vessel operations.' },
      { name: 'Industrial Supplies', description: 'Consumables, tools and spares supporting continuous industrial operations.' },
      { name: 'Equipment Supply & Technical Procurement', description: 'Sourcing of technical equipment for oil production, drilling and petrochemical operations, with supplier evaluation, inspection and compliance checks built into the process.' },
    ],
    process: [
      { title: 'Consultation', description: 'Specification, quantities, standards required and delivery window.' },
      { title: 'Sourcing & Supplier Evaluation', description: 'Suppliers evaluated on certification, quality record and lead time reliability, not price alone.' },
      { title: 'Quality Assurance', description: 'Inspection and compliance checks against specification before dispatch.' },
      { title: 'Delivery', description: 'Delivered to site or vessel on the confirmed schedule, with documentation.' },
      { title: 'Replenishment & Support', description: 'Scheduled replenishment and consumption tracking on term contracts.' },
    ],
    benefits: [
      'Specification-led sourcing rather than lowest-cost substitution.',
      'Local manufacturing capacity shortening lead times on workwear.',
      'Inspection and compliance checks before goods reach your site.',
      'Supplier relationships that hold quality and price across repeat orders.',
      'Documented procurement supporting audit and local content reporting.',
    ],
    relevantIndustries: ['Oil & Gas', 'Maritime', 'Construction', 'Industrial Operations'],
    relatedServices: ['logistics-haulage', 'marine-offshore', 'energy-infrastructure'],
    cta: {
      heading: 'Need Equipment to Specification and on Schedule?',
      body: 'Send us your specification and quantities. We will confirm price and lead time.',
    },
  },

  'property-investment': {
    positioning: 'Industrial and port-adjacent property and asset opportunities.',
    image: '/assets/images/division_property.jpeg',
    overview: [
      'Operations need somewhere to work from. Yard space near a port, warehousing within reach of a supply base, and industrial facilities with the access and services that heavy operations require are consistently harder to find in Nigeria than the operations they support.',
      'M-FAV holds and develops property interests aligned with the sectors we serve, and works with partners on asset and investment opportunities across industrial and port-adjacent real estate.',
      'This division operates on the same basis as the rest of the group: clear terms, documented process and a single accountable point of contact.',
    ],
    keyFacts: [
      { label: 'Scope', value: 'Property · investment · asset opportunities' },
      { label: 'Asset focus', value: 'Industrial and port-adjacent property, yards, warehousing and operational facilities' },
      { label: 'Typical engagement', value: '[PLACEHOLDER: lease, sale, joint venture, or investment partnership — confirm which]' },
      { label: 'Sectors served', value: 'Oil & Gas · Logistics · Infrastructure · Industrial Operations' },
      { label: 'Enquiry route', value: 'Direct enquiry through the contact page' },
    ],
    capabilities: [
      { name: 'Property', description: 'Industrial, commercial and port-adjacent property interests suited to operational use, including yard space, warehousing and facilities with the access heavy operations require.' },
      { name: 'Investment', description: 'Participation in and structuring of opportunities in the sectors we operate across. [PLACEHOLDER: describe the actual investment model — this line is intentionally non-specific until confirmed]' },
      { name: 'Asset Opportunities', description: 'Identification and structuring of asset opportunities, including operational assets relevant to marine, logistics and industrial activity.' },
    ],
    process: [
      { title: 'Consultation', description: 'Requirement, location, operational use and timeline.' },
      { title: 'Assessment', description: 'Suitability, access, services and title reviewed.' },
      { title: 'Structuring', description: 'Commercial terms structured and documented.' },
      { title: 'Completion', description: 'Transaction or agreement completed with legal and regulatory requirements met.' },
      { title: 'Ongoing Support', description: 'Continued support where M-FAV retains an operational role.' },
    ],
    benefits: [
      'Property assessed for operational suitability, not just floor area.',
      'Understanding of what marine, logistics and industrial users actually need from a site.',
      'Clear commercial terms and documented process.',
      'Access to a group that can also operate from the site it places you in.',
    ],
    relevantIndustries: ['Infrastructure', 'Logistics', 'Industrial Operations', 'Oil & Gas'],
    relatedServices: ['logistics-haulage', 'energy-infrastructure'],
    cta: {
      heading: 'Looking for Operational Property or an Asset Opportunity?',
      body: 'Tell us your requirement and we will come back with what is available.',
    },
  },
};
