# COPY-FOR-REVIEW.md

Every word below is agent-authored (A7) and is **not final** until the
client approves or replaces it. Bold/italic strings in the build brief
itself are client-approved and are not repeated here except where a page
reuses them verbatim (noted inline). Organised by page/section, in build
order. This is the Phase 7e consolidated version — it closes the gap the
Phase 5 pass flagged: every Phase 2–4 string is now itemized here, not just
referenced.

**Post-Phase-7 note:** eyebrow labels (the small "Eyebrow: ..." lines noted
throughout this document) were retired sitewide in a later pass — see
DESIGN-SYSTEM.md. The approved *text* below is unaffected (most eyebrow
strings duplicated their section's own heading and are still live as that
heading), but none of it renders as a separate small label above a heading
any more.

---

## Homepage (`/`)

### Hero (`Hero.jsx`) — client-approved, reproduced verbatim (A7), not agent-authored
- H1: "Integrated Solutions. Built for What Moves the World."
- Body: "MFAV Offshore and Allied Resources delivers integrated marine, offshore, aviation, logistics, energy, infrastructure and industrial solutions with safety and operational excellence at the core."
- CTAs: "Explore Our Services" / "Contact Us"

### Our Capabilities (`Capabilities.jsx`, `content/divisions.js`)
- Eyebrow/H2 "Our Capabilities" and the supporting line — client-approved verbatim (A6 table / A3 §2b).
- **Agent-authored:** each division's one-line `blurb` (written for a header mega-menu that was built and then deliberately removed — see `PLACEHOLDERS.md` — but still live on Company.jsx's division grid and folded into ServiceDetail's meta description):
  - Marine & Offshore: "Offshore marine operations, vessel chartering and marine support."
  - Aviation: "Private jet, charter, airline and helicopter services."
  - Energy & Infrastructure: "Pipeline installation and maintenance, and industrial infrastructure."
  - Logistics & Haulage: "Haulage, equipment transportation and journey management."
  - Equipment & PPE: "Equipment supply, PPE and industrial supplies."
  - Property & Investment: "Property, investment and asset opportunities."

### About / company introduction (`WhoWeAre.jsx`) — H2 client-approved verbatim; body agent-authored
- H2: "Built Around Capability. Driven by Excellence." (client-approved, A6 table)
- Three paragraphs (agent-authored):
  1. "MFAV Offshore and Allied Resources is an integrated services group operating across marine, offshore, aviation, logistics, energy, infrastructure and industrial sectors."
  2. "Bringing these capabilities together under one accountable partner reduces the coordination risk that comes with managing multiple vendors across a complex operation — a single point of contact, a single standard of delivery."
  3. "Safety, discipline and international operating standards are the constant across every division, regardless of sector or scale."
- Link label: "Discover MFAV" (client-approved, A6 table)

### Statistics (`KeyStats.jsx`) — labels client-approved verbatim (A3 §2d table): "10+ Service Capabilities" / "24/7 Operational Support" / "100% Safety Commitment" / "Nigeria & Beyond Operational Reach". No agent-authored copy here.

### Featured Services (`FeaturedServices.jsx`)
- **H2 — `[AGENT-AUTHORED]`, requires sign-off (A7):** "Capabilities That Keep Operations Moving" (the brief's own suggested line, used as written).
- Card titles are client-approved (A3 §3a list). Descriptions are agent-authored:
  - Offshore Marine Operations: "Vessel support and platform operations for deepwater and coastal installations, run to the continuity offshore work demands."
  - Vessel Chartering: "Access to OSVs, tugs, barges and specialized maritime vessels, chartered and coordinated to match the scope of the operation."
  - Aviation & Charter Services: "Private jet and helicopter charter for executive travel, crew rotation and time-sensitive offshore access."
  - Pipeline Installation & Maintenance: "Installation, inspection and maintenance of pipeline infrastructure across onshore and offshore sites."
  - Equipment & PPE Supply: "Industrial equipment, marine gear and certified personal protective equipment, supplied and maintained to specification."
  - Haulage & Logistics: "Heavy haulage and end-to-end logistics coordination, from port to site, for equipment and materials on a schedule."

### Industries We Serve (`IndustriesWeServe.jsx`, `content/industries.jsx`)
- Eyebrow/H2 "Industries We Serve" — client-approved verbatim (A3 §3b).
- **Agent-authored** one-line `relevance` strings (shared with the `/industries` page tiles):
  - Oil & Gas: "Marine and logistics support across upstream and midstream operations."
  - Maritime: "Vessel operations, chartering and marine support for commercial shipping."
  - Energy: "Infrastructure and technical services for power generation and distribution."
  - Aviation: "Charter, crew transfer and journey management for time-critical air travel."
  - Construction: "Heavy equipment, haulage and materials logistics for civil works."
  - Infrastructure: "Pipeline, port and industrial infrastructure installation and upkeep."
  - Logistics: "Haulage, equipment transport and supply chain coordination end to end."
  - Industrial Operations: "Equipment, PPE and technical support for plant and refinery operations."

### Safety & Operational Excellence (`SafetyExcellence.jsx`) — H2 client-approved verbatim; six points agent-authored
- H2: "Safety at Every Level of Operation" (A3 §3c).
- Six point titles/bodies (agent-authored, no certifications/statistics per A2.7):
  - Safety-first culture — "Safety is treated as a shared responsibility, built into how every operation is planned and run — not a step added at the end."
  - Operational discipline — "Standard operating procedures and pre-mission checks are followed consistently, across every division and every site."
  - Regulatory compliance — "Operations are structured to meet the regulatory expectations of the sectors and jurisdictions we work in."
  - Risk management — "Hazards are identified and assessed before mobilisation, with mitigation built into the plan rather than added after the fact."
  - Quality assurance — "Work is checked against defined standards at each stage of an operation, not only at handover."
  - Environmental responsibility — "Operations are planned to limit environmental impact, from marine discharge to waste handling on site."
- CTA label: "Our Commitment to Safety" (client-approved, A3 §3c).

### Projects / Operations (`ProjectsSection.jsx`) — homepage teaser
- Illustrative banner: "The portfolio below is illustrative and does not represent completed client engagements. Project titles, locations and details are placeholders pending real content from the client." (agent-authored)
- Five card descriptions (agent-authored, all prefixed "Illustrative:"):
  - Marine Operations: "Illustrative: offshore platform supply vessel chartering and journey management."
  - Offshore Support: "Illustrative: aviation and rotary-wing crew transfer support for remote site operations."
  - Infrastructure: "Illustrative: pipeline installation and engineering maintenance."
  - Logistics: "Illustrative: heavy machinery haulage and port-to-site supply coordination."
  - Equipment Supply: "Illustrative: industrial equipment and PPE supply for site mobilisation."
- Link: "View All Projects" (client-approved, A3 §3d).

### Why MFAV (`WhyMfav.jsx`)
- **H2 — `[AGENT-AUTHORED]`, requires sign-off (A7):** "Why MFAV" (the brief's own suggested alternative, used as written).
- Six differentiator headings/lines — client-approved verbatim (A3 §3e table): Integrated Capabilities, Operational Reliability, Safety First, Industry Expertise, Responsive Support, Quality & Compliance, each with its exact line from the brief.

### Partners / Clients (`Partners.jsx`)
- H2: "Trusted to Support Critical Operations" — client-approved verbatim (A3 §3f).
- Disclaimer (agent-authored): "Logos shown are placeholders and do not represent real clients or partners."

### Closing CTA (`CtaBand.jsx`, rendered via `Footer.jsx`) — client-approved verbatim (A3 §3g)
- H2: "Let's Build the Right Solution for Your Operation."
- Body: "Tell us what you need. Our team will work with you to develop the right solution."
- CTAs: "Start a Conversation" / "View Our Services"

---

## Service detail template (`ServiceDetail.jsx`, `content/services.js`) — all six divisions, all agent-authored

Grounded in real industry terminology (OSVs, AHTS vessels, cathodic
protection, etc.) — "sector-literate" describes the *language*, not a
claim about MFAV's own track record. No client names, contract values,
certifications or invented statistics appear anywhere in this file.

**Marine & Offshore**
- Positioning: "Vessel operations and marine support built for the realities of working offshore."
- Overview: "Marine & Offshore covers the operational core of working at sea: chartering the right vessel for the job, running marine support alongside platform operations, and keeping personnel and cargo moving safely between shore and site. Work here is planned around tide, weather windows and vessel availability — not a fixed schedule."
- Capabilities: Offshore Marine Operations, Vessel Chartering, Marine Support, Journey Management — one-line description each (see `content/services.js:25-28`).
- Process: Consultation → Assessment & Planning → Mobilisation → Execution → Monitoring & Reporting, each with a one-line description (`content/services.js:31-35`).
- Benefits (4): vessel options matched to the job; single point of contact; journey management built around safety; marine support that understands offshore conditions.
- CTA: "Ready to Move Your Next Operation by Sea?" / "Tell us the vessel, route and timeline — we'll put together the right marine solution."

**Aviation**
- Positioning: "Private and charter aviation for people and cargo that can't wait on a scheduled flight."
- Overview: "Aviation covers private jet and helicopter charter, airline services, and the brokerage work around buying or selling rotary aircraft. Charter operations are built around the realities of aviation scheduling — crew duty times, aircraft availability, weather holds — not a promise of instant departure."
- Capabilities (5): Private Jet Services, Charter Services, Airline Services, Helicopter Services, Purchase & Sale of Helicopters (`content/services.js:62-66`).
- Process: same five-stage structure, aviation-specific descriptions (`content/services.js:69-73`).
- Benefits (4): charter across fixed-wing and rotary; realistic crew/weather-based scheduling; one contact for charter and brokerage; time-sensitive travel support.
- CTA: "Need Aircraft on the Ground, Not on Hold?" / "Tell us the route and timing — we'll confirm what's actually available."

**Energy & Infrastructure**
- Positioning: "Pipeline and infrastructure work, from installation through to ongoing maintenance."
- Overview: "Energy & Infrastructure covers the installation and upkeep of pipeline and industrial infrastructure — work measured in welds, pressure tests and inspection intervals, not just completion dates. Technical services support the infrastructure through its working life, not only at handover."
- Capabilities (4): Pipeline Installation, Pipeline Maintenance, Industrial Infrastructure, Technical Services (`content/services.js:100-103`).
- Process: same five-stage structure (`content/services.js:106-110`).
- Benefits (4): installation and maintenance under one technical team; testing built into every stage; onshore/offshore pipeline experience; technical services continuing post-installation.
- CTA: "Have a Pipeline or Infrastructure Scope to Plan?" / "Tell us the scope and site conditions — we'll bring in the right technical team."

**Logistics & Haulage**
- Positioning: "Haulage and logistics coordination for equipment and materials that have to arrive on schedule."
- Overview: "Logistics & Haulage moves heavy equipment and materials from port to site, coordinating haulage, transportation and journey management as one job rather than three separate handoffs. The work is planned around load limits, route restrictions and delivery windows."
- Capabilities (4): Haulage Services, Equipment Transportation, Journey Management, Logistics Support (`content/services.js:137-140`).
- Process: same five-stage structure (`content/services.js:143-147`).
- Benefits (4): route/permit planning before the load moves; abnormal/heavy-load capacity; journey management that tracks the load; one contact port-to-site.
- CTA: "Got a Load That Needs to Move Without Surprises?" / "Tell us the dimensions, weight and route — we'll plan it before it moves."

**Equipment & PPE**
- Positioning: "Industrial equipment and certified PPE, supplied and maintained to the specification the job requires."
- Overview: "Equipment & PPE supplies the machinery, tools, marine equipment and protective gear operations depend on — sourced to specification and supported after delivery, not just sold and forgotten."
- Capabilities (4): Equipment Supply, Personal Protective Equipment, Industrial Supplies, Marine Equipment (`content/services.js:174-177`).
- Process: same five-stage structure (`content/services.js:180-184`).
- Benefits (4): sourced to spec, not substituted; one-off and standing orders both supported; marine-rated equipment; lead times confirmed upfront.
- CTA: "Need Equipment or PPE Sourced to Spec?" / "Tell us the specification and quantity — we'll confirm lead time before you order."

**Property & Investment**
- Positioning: "Industrial and commercial property, and the investment work that sits alongside it."
- Overview: "Property & Investment covers industrial and commercial real estate and the asset opportunities around it — port-adjacent land, serviced industrial yards and facilities that support operational businesses, evaluated with the same operational discipline as the rest of the group."
- Capabilities (3): Property, Investment, Asset Opportunities (`content/services.js:211-213`).
- Process: same five-stage structure (`content/services.js:216-220`).
- Benefits (4): operational insight applied to property evaluation; port-adjacent/industrial-yard access; opportunities assessed individually; direct engagement over a generic investment product.
- CTA: "Evaluating an Industrial Property or Asset?" / "Tell us the opportunity — we'll evaluate it on its own merits."

---

## `/about`

**Hero**
- Eyebrow: "About"
- H1: "About MFAV"
- Sub-line: "An integrated industrial services group built around capability, safety and accountability — one partner across marine, offshore, aviation, logistics, energy, infrastructure and industrial sectors."

**Company overview** (3 paragraphs)
- "MFAV Offshore and Allied Resources is a diversified Nigerian integrated services group operating across marine, offshore, aviation, logistics, energy, infrastructure, equipment and PPE, and property and investment. Each division carries its own operational discipline, but all of them answer to the same standard."
- "Bringing these capabilities together under one accountable partner reduces the coordination risk that comes with managing multiple vendors across a complex operation. Where a project touches several domains — a vessel charter that also needs haulage and equipment on the ground, or an infrastructure scope that needs both technical crews and PPE supply — that coordination happens inside one organisation instead of across several contracts."
- "Safety, discipline and international operating standards are the constant across every division, regardless of sector or scale."

**Mission** — "To deliver integrated marine, offshore, aviation, logistics, energy and industrial solutions with safety and operational excellence at the core of every engagement."

**Vision** — "To be the accountable partner operators turn to for complex, multi-discipline operations across Nigeria and beyond."

**Values** (heading "What We Hold Ourselves To")
- Safety — "Every operation is planned and run with the safety of our people and partners as the first consideration, not a constraint applied afterward."
- Integrity — "We do what we say we will do, and we say plainly when we can't — with clients, regulators and each other."
- Excellence — "Work is checked against defined standards at every stage, across every division, regardless of scale."
- Accountability — "One partner, one point of contact, one standard of delivery — across marine, aviation, logistics and every other division."
- Collaboration — "Complex operations move multiple teams at once; we coordinate them as one, not as a chain of handoffs."

**Leadership** — intro line: "Team profiles are pending client-supplied names, roles and portraits — no individuals are represented below."

**Safety detail** (expands the homepage §3c teaser to full depth)
- Culture — "Safety is treated as a shared responsibility rather than a compliance checkbox — every person on an operation, regardless of division or seniority, has standing to stop work they judge unsafe. That expectation is set before mobilisation, not discovered on site."
- Compliance posture — "Operations are structured to meet the regulatory expectations of the sectors and jurisdictions we work in. Where a division operates under a specific regulatory regime — maritime, aviation, or otherwise — its procedures are built around that regime's requirements, not a generic policy applied uniformly across the group."
- Risk management — "Hazards are identified and assessed before mobilisation, with mitigation designed into the operating plan rather than bolted on afterward. Risk assessment is revisited when conditions change — a shifting weather window, a route restriction, a change in scope — rather than treated as a one-time sign-off."
- Environmental responsibility — "Operations are planned to limit environmental impact across the full range of what the group does — marine discharge, waste handling on site, and the footprint of haulage and logistics work. This is a planning input, not an afterthought raised only when a project draws scrutiny."

**Certifications** — "This section is intentionally empty. Regulatory memberships and certifications will be published here once supplied and verified by the client. MFAV does not publish unverified credentials."

---

## `/services` (overview)

- H1: "Our Services"
- Intro: "Six divisions, one accountable partner. Each operates to its own technical discipline; all of them are coordinated as a single point of contact for operations that touch more than one domain."
- Per-division positioning lines and sub-capability lists reuse the `content/services.js`/`content/divisions.js` content itemized above verbatim — nothing new authored on this page.

---

## `/industries`

- H1: "Industries We Serve" (reuses the client-approved homepage H2)
- Sub-line: "Eight sectors, one set of capabilities applied differently depending on what each operation actually needs."
- Eight sector paragraphs (`content/industries.jsx` → `detail`), one per sector — full text:
  - Oil & Gas: "Upstream and midstream operations run on vessel availability, pipeline integrity and equipment that meets specification the first time. MFAV supports oil & gas operators with vessel chartering and marine operations for platform supply, pipeline installation and maintenance for flowlines and infrastructure, and the equipment and PPE crews need to work safely on site."
  - Maritime: "Commercial shipping and marine operators need vessel access that matches the job, not a fixed fleet, plus the marine-rated equipment and crew transfer support to keep a vessel working. MFAV covers vessel chartering and marine support directly, with aviation crew transfer and marine-rated equipment supply alongside it."
  - Energy: "Power generation and distribution projects depend on infrastructure that is installed to specification and maintained through its working life. MFAV supports energy operators with pipeline and industrial infrastructure work, marine transport for equipment and personnel, and the equipment and PPE supply that keeps technical teams working safely."
  - Aviation: "Time-critical travel for crew, executives and cargo doesn't run on a scheduled-airline timetable. MFAV's aviation division covers private jet and helicopter charter, crew rotation and journey management, coordinated where needed with marine operations for offshore crew transfer."
  - Construction: "Civil works move on the availability of heavy equipment, haulage capacity and materials arriving on schedule. MFAV supports construction operators with abnormal-load haulage and equipment transportation, industrial equipment and PPE supply, and infrastructure work where a build touches pipeline or plant."
  - Infrastructure: "Pipeline, port and industrial infrastructure projects need installation, ongoing maintenance and the logistics to move equipment and materials to site. MFAV covers the technical infrastructure work directly, with haulage and logistics support for site mobilisation and property expertise where the project involves port-adjacent land."
  - Logistics: "Supply chains that depend on heavy or abnormal loads need route planning, permits and journey management handled before the load moves, not during. MFAV's logistics & haulage division covers this end to end, with property and investment support where a supply chain needs port-adjacent facilities."
  - Industrial Operations: "Plant and refinery operations depend on a steady supply of certified equipment and PPE, technical infrastructure support, and logistics that get materials to site without disrupting the operation. MFAV brings these three together for industrial operators working under continuous production pressure."

---

## `/projects`

- H1: "Experience in Motion" (reuses the client-approved homepage H2)
- Intro: "A representative view of the kind of work MFAV's divisions take on. Filter by sector to see how that looks across marine, offshore, logistics, infrastructure and equipment engagements."
- Illustrative-content banner (reused from the homepage `ProjectsSection`): "This portfolio is illustrative and does not represent completed client engagements. Project titles, locations and details are placeholders pending real content from the client."
- 10 one-line project descriptions (all prefixed "Illustrative:", no invented specifics) across the five sector categories — see `pages/Projects.jsx`.

---

## `/company`

- H1: "MFAV Offshore and Allied Resources"
- Hero sub-line: "A single group operating six distinct divisions, coordinated under one operating model, one governance posture and one HSE policy."
- Operating model (2 paragraphs) — how divisions coordinate under one accountable partner.
- Governance & Standards (2 paragraphs) — documented-standards posture; explicitly states MFAV does not publish unverifiable certifications.
- HSE summary — "Safety-first culture, operational discipline, risk management and environmental responsibility apply as one policy across every division — not a stricter standard for offshore work and a looser one for haulage or supply. The full detail behind that policy — culture, compliance posture, risk management and environmental responsibility — is set out on the About page." Cross-links to `/about#safety` rather than duplicating it.
- Careers teaser heading: "Work Across the Group".

---

## `/contact`

- H1: "Get in Touch"
- Intro: "Tell us what you need. Our team will work with you to develop the right solution." (reused verbatim from the brief's A3 §3g closing CTA copy, since this page **is** that conversion moment)
- Success panel: "Enquiry Sent" / "Thank you — we've received your enquiry and will be in touch."
- Error panel: "Something Went Wrong" / "Your enquiry couldn't be sent. Please try again, or reach us directly at [EMAIL PLACEHOLDER]."

---

## Deviation flagged for sign-off: no duplicate CTA bands on generic pages

The brief's §5a/§5b/§5c text ("close with the CTA band" / "the CTA band")
is already satisfied automatically: `Footer` renders the shared `CtaBand`
site-wide, immediately below every page's content, on every route,
including About, Services, and Industries. Adding a second, identically-
worded CtaBand instance directly above it (as `ServiceDetail` does
deliberately, with genuinely different, division-specific copy) would have
put the same sentence twice back-to-back on those three pages. Flagging in
case the intent was a stronger mid-page CTA push on any of them
specifically.

---

## SEO / infrastructure copy (Phase 7c, agent-authored, not brief-specified)

- `public/robots.txt` and `public/sitemap.xml` — added in Phase 7c to fix a
  failing SEO audit. Both reference a **placeholder production domain**
  (`https://www.mfavoffshore.com`) since none was supplied. Update once the
  real domain is confirmed — see `PLACEHOLDERS.md`.
