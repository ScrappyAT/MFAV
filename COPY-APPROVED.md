# M-FAV — Website Copy Deck

Full drafted content for every route, ready to drop into `src/content/`.
Organised by page and section to match the agent brief (Section A7).

**Legend**
- `[CLIENT-APPROVED]` — copy given verbatim in the brief. Do not alter.
- `[DRAFT]` — written here. Needs client sign-off.
- `[PLACEHOLDER]` — real detail required from client.
- `[VERIFY]` — sourced from the company profile PDF. Factually real, but needs confirmation (and, for client names, written consent) before publishing.

---

## 0. Decisions and open questions — read first

**0.1 Company name — RESOLVED. The logo is authoritative.**

The name across this site is **M-FAV Offshore and Allied Services Limited**, taken from the logo as it currently stands. Hyphenated `M-FAV`, **Services** not Resources.

| Context | Form |
|---|---|
| Logo lockup | `M-FAV` / `OFFSHORE AND ALLIED SERVICES LTD` |
| Body copy, first mention on a page | M-FAV Offshore and Allied Services Limited |
| Body copy, thereafter | M-FAV |
| Page titles and meta | M-FAV |
| Footer copyright and legal line | M-FAV Offshore and Allied Services Limited |

`LTD` is used in the logo lockup only, because that is how the mark is drawn. Everywhere else the word is spelled **Limited**. Never mix the two in the same block of text.

One flag, then it's closed: the agent brief and the filename of your own profile PDF both say **Resources**, while the logo artwork says **Services**. I've followed your instruction and gone with the logo. If the logo is the thing that's out of date, say so — it's a find-and-replace here, but a reprint everywhere else.

**0.2 The profile contains credentials and clients the brief told the agent not to invent — because you already have them.**

The brief's rule 7 ("never fake credentials") exists to stop an AI agent fabricating certifications. It does not apply to credentials you actually hold. Your profile lists real regulatory registrations, real named clients and real projects, and these are the strongest trust signals available to you. I have drafted them into the copy below, marked `[VERIFY]`.

Two cautions:
- **Client names.** Shell, Chevron, Saipem, TotalEnergies and First E&P are named in your profile. Naming a client publicly usually requires their consent, and oil majors enforce this. Either secure written permission, or use the unattributed fallback I've drafted for the Partners section.
- **Certifications.** The profile says "ISO Certificates" without numbering them. Do not put "ISO certified" on the website without the standard number and certificate reference. I have drafted the compliant version.

**0.3 "Journey Management" sits in two divisions.** The brief lists it under both Marine & Offshore and Logistics & Haulage. I have made **Logistics & Haulage** its canonical home (the service is primarily onshore — airport meet-and-greet, executive transport, escort vehicles) and cross-linked it from Marine & Offshore. Change this if you disagree, but it must live in one place to avoid duplicate content.

**0.4 Scope has grown well beyond the profile.** The profile covers marine, journey management, PPE, equipment, pipeline and haulage. The brief adds **Aviation** (five sub-services) and **Property & Investment** (three). I have no source material for either, so that copy is written from sector knowledge and is deliberately non-specific about assets. If you own or broker aircraft, or hold property, tell me and I'll make it concrete — right now those two divisions read thinner than the other four, and a procurement lead will notice.

**0.5 Contact details are incomplete.** See Section 11 for exactly what is missing.

---

## 1. Global strings

**Brand lockup (two lines, per Phase 1c)**
```
M-FAV
OFFSHORE AND ALLIED SERVICES LTD
```

**Footer brand line** `[CLIENT-APPROVED]`
> Integrated marine, offshore, aviation, logistics and industrial solutions.

**Navigation labels** `[CLIENT-APPROVED]`
Home · About Us · Services · Industries · Projects · Company · Contact

**Header CTA** `[CLIENT-APPROVED]` — Request a Consultation

**Services mega-menu descriptors** `[DRAFT]` — one line each, used in the flyout

| Division | Descriptor |
|---|---|
| Marine & Offshore | Vessel management, chartering and offshore support operations. |
| Aviation | Fixed-wing and rotary charter, and aircraft transactions. |
| Energy & Infrastructure | Pipeline installation, maintenance and technical services. |
| Logistics & Haulage | Heavy haulage, equipment movement and journey management. |
| Equipment & PPE | Certified protective equipment and technical procurement. |
| Property & Investment | Industrial property and asset opportunities. |

**Copyright** `[CLIENT-APPROVED]`
> © 2026 M-FAV Offshore and Allied Services Limited. All Rights Reserved.

**Tagline, for social cards and the meta description fallback** `[VERIFY]` — from the profile cover
> Trusted Partner in Vessel Management and Safety Solutions

Note: this tagline predates the aviation and property divisions and now under-describes the company. A broader alternative for the site: *Integrated solutions for marine, offshore and industrial operations.* `[DRAFT]`

**Company motto** `[CLIENT-APPROVED]`
> Delivering Excellence at All Times.

Placement: the footer, beneath the brand lockup, and as the closing line of the `/company` page. Set in small caps or wide-tracked uppercase, never as a decorated pull quote.

Note: the profile PDF closes on *"our commitment remains 'Safety at All Times'"*. That document is not going on the website, so it doesn't affect the build — but if the PDF is still being emailed to clients, it now contradicts the motto on the site.

One consequence worth naming: the motto no longer carries the safety message, so the safety sections can no longer lean on it. Excellence is a delivery claim, not a safety claim, and a procurement reader will read it that way. The safety copy in 3.7, 4.5 and 9.4 has been rewritten to stand on its own rather than restate the motto.

---

## 2. Page metadata

All titles under 60 characters, descriptions 140–160. `[DRAFT]`

| Route | `<title>` | Meta description |
|---|---|---|
| `/` | M-FAV Offshore and Allied Services Limited | Integrated marine, offshore, aviation, logistics, energy and industrial solutions across Nigeria and West Africa. Safety and operational excellence at the core. |
| `/about` | About Us — M-FAV | An integrated services group built around operational capability, safety discipline and accountable delivery across complex industrial environments. |
| `/services` | Our Services — M-FAV | Six divisions covering marine and offshore, aviation, energy and infrastructure, logistics, equipment supply and property investment. |
| `/services/marine-offshore` | Marine & Offshore — M-FAV | Vessel management, chartering, offshore marine operations and marine support for oil, gas and maritime operators. |
| `/services/aviation` | Aviation Services — M-FAV | Private jet and helicopter charter, airline support services, and aircraft purchase and sale advisory. |
| `/services/energy-infrastructure` | Energy & Infrastructure — M-FAV | Pipeline installation and maintenance, subsea infrastructure and technical services for energy operators. |
| `/services/logistics-haulage` | Logistics & Haulage — M-FAV | Heavy haulage, equipment transportation, journey management and logistics support across Nigeria. |
| `/services/equipment-ppe` | Equipment & PPE — M-FAV | Certified personal protective equipment, marine equipment and technical procurement with compliant sourcing. |
| `/services/property-investment` | Property & Investment — M-FAV | Industrial and port-adjacent property, asset opportunities and investment partnerships. |
| `/industries` | Industries We Serve — M-FAV | Capability across oil and gas, maritime, energy, aviation, construction, infrastructure, logistics and industrial operations. |
| `/projects` | Projects — M-FAV | Selected offshore, marine, logistics and infrastructure operations delivered by M-FAV. |
| `/company` | Company — M-FAV | Group structure, operating model, standards posture and careers at M-FAV Offshore and Allied Services Limited. |
| `/contact` | Contact Us — M-FAV | Speak to our team about marine, offshore, aviation, logistics or equipment requirements. |
| 404 | Page Not Found — M-FAV | The page you requested could not be found. |

---

## 3. Homepage

### 3.1 Hero — Section 1 `[CLIENT-APPROVED]`

**H1**
> Integrated Solutions. Built for What Moves the World.

**Body**
> M-FAV Offshore and Allied Services Limited delivers integrated marine, offshore, aviation, logistics, energy, infrastructure and industrial solutions with safety and operational excellence at the core.

**Primary CTA** Explore Our Services → `/services`
**Secondary CTA** Contact Us → `/contact`
**Scroll label** SCROLL

**Optional bottom hairline strip** `[DRAFT]` — the six division names, uppercase:
`MARINE & OFFSHORE · AVIATION · ENERGY & INFRASTRUCTURE · LOGISTICS & HAULAGE · EQUIPMENT & PPE · PROPERTY & INVESTMENT`

---

### 3.2 Our Capabilities — Section 2 `[CLIENT-APPROVED]` heading

**Eyebrow** `01 — Our Capabilities`
**H2** Our Capabilities
**Supporting**
> From offshore operations and marine logistics to aviation, infrastructure and industrial supply, M-FAV brings multiple capabilities together to support complex operations.

**Panel content** — sub-capability lists are client-approved; the `Explore` affordance label is fixed.

| Panel | Sub-capabilities | Link |
|---|---|---|
| Marine & Offshore | Offshore Marine Operations · Vessel Chartering · Marine Support · Journey Management | `/services/marine-offshore` |
| Aviation | Private Jet Services · Charter Services · Airline Services · Helicopter Services · Purchase & Sale of Helicopters | `/services/aviation` |
| Energy & Infrastructure | Pipeline Installation · Pipeline Maintenance · Industrial Infrastructure · Technical Services | `/services/energy-infrastructure` |
| Logistics & Haulage | Haulage Services · Equipment Transportation · Journey Management · Logistics Support | `/services/logistics-haulage` |
| Equipment & PPE | Equipment Supply · Personal Protective Equipment · Industrial Supplies · Marine Equipment | `/services/equipment-ppe` |
| Property & Investment | Property · Investment · Asset Opportunities | `/services/property-investment` |

**Panel accessible names** `[DRAFT]` — each panel is one link, so it needs a full accessible name, not just "Explore":
`Explore Marine & Offshore`, `Explore Aviation`, and so on.

---

### 3.3 About / company introduction — Section 3

**Eyebrow** `02 — About M-FAV`
**H2** `[CLIENT-APPROVED]` Built Around Capability. Driven by Excellence.

**Body** `[DRAFT]` — three paragraphs

> M-FAV Offshore and Allied Services Limited is an integrated services group operating across marine, offshore, aviation, logistics, energy, infrastructure and industrial sectors. Our work sits where operations are most demanding — offshore support vessels on station, pipeline spreads, heavy loads moving on Nigerian roads, and crews who need the right equipment before the shift starts.

> Complex operations fail at the seams between contractors. Bringing vessel management, haulage, equipment supply, journey management and technical procurement under one accountable partner removes those seams. One point of coordination, one set of standards, one party answerable for delivery.

> What stays constant across every division is how we operate: safety before schedule, compliance with the regulatory framework we work within, and transparent reporting that lets clients see what is happening on their contract.

**Link** `[CLIENT-APPROVED]` Discover M-FAV → `/about`

**Image caption** `[PLACEHOLDER]` — suggested format: *Offshore support operations, Gulf of Guinea* — replace with the real vessel, location and year once real imagery is supplied.

---

### 3.4 Statistics band — Section 4 `[CLIENT-APPROVED]`

| Numeral | Label |
|---|---|
| 10+ | Service Capabilities |
| 24/7 | Operational Support |
| 100% | Safety Commitment |
| Nigeria & Beyond | Operational Reach |

**Optional stronger alternative** `[VERIFY]` — your profile supports a harder first stat. "10+ Service Capabilities" is a weak claim; "10+ Years of Operations" is a real one and far more persuasive to a procurement reader. Swap only if the ten-year figure is verifiable and current.

---

### 3.5 Featured Services — Section 5

**Eyebrow** `03 — Featured Services`
**H2** `[DRAFT]` Capabilities That Keep Operations Moving

*Alternatives if you want less movement in it: "Where We Deliver Most" · "Core Operational Capabilities".*

Cards in the brief's fixed order. Each description `[DRAFT]`.

**1. Offshore Marine Operations** → `/services/marine-offshore`
> Vessel management and marine support for offshore assets, covering crew transfer, AGO supply coordination and security escort. We keep vessels on station, compliant and available.

**2. Vessel Chartering** → `/services/marine-offshore`
> Chartering of FSIVs, anchor handling vessels, platform supply vessels and specialised offshore craft. We match the vessel to the scope and manage the contract through to demobilisation.

**3. Aviation & Charter Services** → `/services/aviation`
> Fixed-wing and rotary charter for crew movement, executive travel and offshore rotation, arranged around your operational schedule rather than a fixed timetable.

**4. Pipeline Installation & Maintenance** → `/services/energy-infrastructure`
> Pipeline installation, cable laying and subsea infrastructure work supported by DP2-capable vessels, delivered to the safety and environmental standards the scope demands.

**5. Equipment & PPE Supply** → `/services/equipment-ppe`
> Certified protective equipment and technical procurement, including locally manufactured workwear, sourced to specification and delivered to the schedule your work depends on.

**6. Haulage & Logistics** → `/services/logistics-haulage`
> Onshore and offshore haulage of petroleum products, machinery, spares and raw materials, with tracking and monitoring across every movement.

**Card link label** Learn more →

---

### 3.6 Industries We Serve — Section 6

**Eyebrow** `04 — Industries`
**H2** `[CLIENT-APPROVED]` Industries We Serve

One-line relevance per tile. `[DRAFT]`

| Industry | Line |
|---|---|
| Oil & Gas | Offshore support, procurement and logistics for upstream operations. |
| Maritime | Vessel management, chartering and marine support services. |
| Energy | Infrastructure, equipment and technical support for energy assets. |
| Aviation | Charter and aircraft services for crew and executive movement. |
| Construction | Plant movement, equipment supply and site logistics. |
| Infrastructure | Pipeline and industrial infrastructure delivery and maintenance. |
| Logistics | Haulage, equipment transportation and journey management. |
| Industrial Operations | Protective equipment, consumables and technical procurement. |

---

### 3.7 Safety & Operational Excellence — Section 7

**Eyebrow** `05 — Safety`
**H2** `[CLIENT-APPROVED]` Safety at Every Level of Operation

**Intro** `[DRAFT]`
> Safety is not a department here. It is the condition under which work is authorised to proceed, and the reason a job stops when something is wrong.

Six points, each a short heading and one supporting line. `[DRAFT]`

**Safety-First Culture**
> Every person on an M-FAV job has the authority to stop work, and no one is penalised for using it.

**Operational Discipline**
> Procedures, permits and pre-task briefings are followed as written, on every job, regardless of schedule pressure.

**Regulatory Compliance**
> We operate within the regulatory framework governing marine, offshore and industrial work in Nigeria, and maintain the registrations our scope requires.

**Risk Management**
> Hazards are identified and controlled before mobilisation, and reassessed when conditions change.

**Quality Assurance**
> Equipment, materials and subcontracted services are inspected against specification before they reach your operation.

**Environmental Responsibility**
> Marine and pipeline operations are planned to limit environmental impact and to meet the standards applicable to the work.

**CTA** `[CLIENT-APPROVED]` Our Commitment to Safety → `/about#safety`

---

### 3.8 Projects / Operations — Section 8

**Eyebrow** `06 — Projects`
**H2** `[CLIENT-APPROVED]` Experience in Motion

**Option A — placeholder version**, per the brief, if you are not ready to publish real project detail:

Banner note `[DRAFT]`: *Project details are illustrative pending final client confirmation.*
Cards: `[PROJECT TITLE PLACEHOLDER]` · `[SECTOR TAG]` · `[LOCATION PLACEHOLDER]` · `[DESCRIPTION PLACEHOLDER]`

**Option B — real version** `[VERIFY]`. Strongly recommended. These come from your own profile and are the difference between a brochure and evidence. Confirm each before publishing, and remove the operator name from any card where you lack consent.

| Title | Sector tag | Location | Description |
|---|---|---|---|
| 2DHR Project Support | Offshore Support | `[LOCATION PLACEHOLDER]`, Nigeria | Security escort vessel operations and offshore support services provided across the project duration. |
| Bonga Top Chain Replacement | Marine Operations | Bonga Field, Nigeria | Marine support and escort vessel operations supporting top chain replacement on a deepwater facility. |
| 20" EPWD Pipeline Project | Infrastructure | `[LOCATION PLACEHOLDER]`, Nigeria | Marine and vessel support for pipeline installation works on a 20-inch export line. |
| Offshore Seismic Survey Support | Offshore Support | `[LOCATION PLACEHOLDER]`, Nigeria | Escort and support vessel operations for seismic survey campaigns in Nigerian waters. |
| Offshore AGO Supply — Koko Field | Logistics | Koko Field, Nigeria | Scheduled offshore supply of Automotive Gas Oil to producing field operations. |
| Offshore AGO Supply — LADOL | Logistics | LADOL, Lagos | Fuel supply and offshore vessel chandling services from the LADOL free zone. |
| PPE Supply Programme | Equipment Supply | Nigeria | Multi-year protective equipment supply supporting workforce compliance across offshore and industrial sites. |
| Expatriate Journey Management | Logistics | Nationwide, Nigeria | Airport reception, secure executive transport and escort services for client expatriate personnel. |

Each card needs a date range added — `[DATE PLACEHOLDER]` — as undated projects read as unverifiable.

**Link** `[CLIENT-APPROVED]` View All Projects → `/projects`

---

### 3.9 Why M-FAV — Section 9

**Eyebrow** `07 — Why M-FAV`
**H2** `[DRAFT]` Why M-FAV

*Alternative: "What Sets Our Delivery Apart" — though the brief's plain version is stronger and I'd keep it.*

Six differentiators, copy fixed by the brief. `[CLIENT-APPROVED]`

| Heading | Line |
|---|---|
| Integrated Capabilities | Multiple services under one trusted partner. |
| Operational Reliability | Solutions designed around continuity and efficiency. |
| Safety First | Safety embedded into every operation. |
| Industry Expertise | Practical knowledge across complex operational environments. |
| Responsive Support | Reliable support for time-sensitive requirements. |
| Quality & Compliance | Professional standards across our services. |

---

### 3.10 Partners / Clients — Section 10

**H2** `[CLIENT-APPROVED]` Trusted to Support Critical Operations

**Placeholder note** `[DRAFT]`, italic: *Client marks shown are placeholders pending confirmation.*

**If you secure consent** `[VERIFY]` — replace the placeholder marks with real logos and drop the note. Supporting line:
> We have delivered vessel operations, equipment supply and logistics support for operators and contractors working in Nigerian offshore and industrial environments.

**If you do not secure consent** `[DRAFT]` — unattributed version, still credible:
> Our services support international oil and gas operators, EPC contractors and marine operators working in Nigeria and the Gulf of Guinea.

---

### 3.11 Closing CTA band — Section 11 `[CLIENT-APPROVED]`

**H2** Let's Build the Right Solution for Your Operation.
**Body** Tell us what you need. Our team will work with you to develop the right solution.
**Primary** Start a Conversation → `/contact`
**Secondary** View Our Services → `/services`

---

## 4. `/about`

**Hero eyebrow** `[DRAFT]` About Us
**H1** `[DRAFT]` An Integrated Partner for Demanding Operations
**Hero line** `[DRAFT]`
> M-FAV brings marine, offshore, aviation, logistics, energy and industrial capabilities together under one accountable structure.

### 4.1 Company overview `[DRAFT]`

> M-FAV Offshore and Allied Services Limited is a Nigerian integrated services group working across marine and offshore operations, aviation, energy and infrastructure, logistics and haulage, equipment and protective equipment supply, and property and investment.

> Our operational base is Nigeria and the wider Gulf of Guinea — waters and roads where conditions, security and regulation all shape how work gets done. That context is the reason clients use us: capability is only useful if it can be delivered here, on schedule, without incident, and with documentation that stands up to audit.

> We work for international operators, EPC contractors, marine operators and industrial clients. Some engage us for a single vessel charter or a PPE supply contract. Others use several divisions at once, which is where the integrated model earns its place — fewer interfaces, fewer handover gaps, and one party accountable when something needs to change mid-operation.

### 4.2 Mission and Vision — two-panel block `[VERIFY]`

Both are taken from your profile and lightly tightened for web reading. The originals are in the profile if you prefer them verbatim.

**Vision**
> To be a leading indigenous provider of world-class support and marine services to the oil and gas, manufacturing and shipping industries in Nigeria and the Gulf of Guinea — driven by sustainability, innovation, quality, safety and exceptional expertise.

**Mission**
> To contribute, in a profitable and socially responsible manner, to the sustainable development of the maritime and offshore support services industry in Nigeria and the entire Gulf of Guinea.

**Corporate aim** `[VERIFY]` — from the profile, usable as a pull quote
> To constantly innovate and help our customers deliver their projects timely and effectively, with the highest safety standards.

### 4.3 Values `[DRAFT]` — hairline-separated list

**Safety** — Work proceeds only when it is safe to proceed. Schedule never overrides that.
**Integrity** — We describe our capability accurately, price transparently and report honestly, including when something has gone wrong.
**Accountability** — One point of responsibility on every engagement, from mobilisation to close-out.
**Operational Excellence** — Disciplined execution, maintained equipment and competent crews.
**Local Capability** — Nigerian operations, Nigerian workforce, and in-country capacity built deliberately rather than imported.
**Sustainability** — Operations planned to limit environmental impact and to contribute to the communities we work in.

### 4.4 Leadership — anchor `#leadership`

**H2** `[DRAFT]` Leadership
**Intro** `[DRAFT]`
> Our leadership team brings operational experience across marine, offshore and industrial sectors in Nigeria and West Africa.

Grid of `[NAME PLACEHOLDER]` / `[ROLE PLACEHOLDER]` / `[BIO PLACEHOLDER — 40 words]`, with 4:5 neutral portraits.

Recommended roles to fill: Managing Director · Operations Director · HSE Manager · Commercial/Procurement Lead. A named HSE lead matters more here than anywhere else on the site.

### 4.5 Safety — anchor `#safety`

**H2** `[DRAFT]` Our Commitment to Safety
**Intro** `[DRAFT]`
> Excellence in delivery is not separable from safety. A scope completed on schedule but with an incident behind it has not been delivered well, and we do not account for it that way. Safety is the condition under which our work is authorised to proceed, and the reason a job stops when conditions change.

**Safety Culture** `[DRAFT]`
> Every M-FAV operation begins with a briefing and ends with a close-out. Personnel at every level hold stop-work authority, and exercising it is treated as correct practice rather than disruption. Incidents and near misses are reported, investigated and closed out with corrective actions that are tracked to completion.

**Regulatory Compliance** `[DRAFT]` / `[VERIFY]` registrations
> Our operations are conducted within the regulatory framework governing marine and offshore work in Nigeria. M-FAV maintains registrations and clearances with the relevant authorities for the scopes we undertake, including `[VERIFY: NIMASA · Nigerian Navy · NUPRC/NMDPRA · NCDMB · NPA · NSCDC · FIRS]`. Documentation is available to clients on request during prequalification.

Note: list only bodies where the registration is current, and hold the certificate references ready for tender packs.

**Risk Management** `[DRAFT]`
> Risk assessment precedes mobilisation on every scope. Vessel movements, haulage routes and journey management plans are assessed for operational, security and environmental risk, and controls are re-evaluated when conditions change — weather, sea state, security posture or scope variation.

**Quality Assurance** `[DRAFT]`
> Equipment and materials are inspected against specification before delivery. Subcontracted services are evaluated before engagement and monitored through delivery. Where a specification cannot be met, the client is told before substitution, not after.

**Environmental Responsibility** `[DRAFT]`
> Marine, pipeline and fuel-handling operations are planned to prevent spills and limit discharge. Waste from our operations is managed through licensed routes, and environmental requirements specific to a client's site or a regulator's conditions are incorporated into the job plan.

### 4.6 Certifications `[PLACEHOLDER]`

**H2** `[DRAFT]` Certifications & Registrations
**Body** `[DRAFT]`
> M-FAV maintains the registrations and certifications required for the scopes we undertake. Full documentation is provided during prequalification and tender.

Then a labelled empty block: `[CERTIFICATION LOGOS AND REFERENCE NUMBERS PLACEHOLDER]`

**Do not publish** "ISO certified" without the standard number (e.g. ISO 9001:2015), the certificate number and the certifying body. A procurement reviewer will check, and an unverifiable claim costs more credibility than the badge gains.

---

## 5. `/services` — overview page

**H1** `[DRAFT]` Our Services
**Intro** `[DRAFT]`
> Six divisions, one operating standard. Each works as a standalone service line, and together they cover the marine, aviation, logistics, infrastructure and supply requirements of a complex operation — without the coordination risk of managing five separate contractors.

Alternating full-bleed rows. Positioning lines `[DRAFT]`:

| Division | Positioning line |
|---|---|
| Marine & Offshore | Vessel management, chartering and offshore support for operations that cannot afford downtime. |
| Aviation | Charter and aircraft services arranged around operational schedules, not timetables. |
| Energy & Infrastructure | Pipeline and infrastructure delivery executed to the standards the scope demands. |
| Logistics & Haulage | Heavy movement across Nigeria, tracked and accounted for from collection to delivery. |
| Equipment & PPE | Certified equipment and protective gear, sourced to specification and delivered on schedule. |
| Property & Investment | Industrial and port-adjacent property and asset opportunities. |

**Row link** View division →

---

## 6. Service detail pages

Template per Phase 4: Hero → Overview + Key Facts → Capabilities → Approach → Benefits → Relevant Industries → Related Services → CTA.

Process steps are the brief's default sequence unless noted: **Consultation → Assessment & Planning → Mobilisation → Execution → Monitoring & Reporting**.

---

### 6.1 Marine & Offshore — `/services/marine-offshore`

**Breadcrumb** Home / Services / Marine & Offshore
**Eyebrow** Marine & Offshore
**H1** Marine & Offshore
**Positioning** `[DRAFT]`
> Vessel management, chartering and offshore support for operations that cannot afford downtime.

**Overview** `[DRAFT]`
> Offshore operations are measured in vessel availability. A craft off-hire for a certification lapse, a fuel transfer that misses a window, a crew change that slips a tide — each one costs more than the vessel day rate it interrupts.

> M-FAV manages and charters offshore support craft including Fast Support Intervention Vessels, Anchor Handling Vessels, Platform Supply Vessels and specialised assets, and operates them in compliance with the regulatory and class requirements applicable to Nigerian waters. Our scope extends past the vessel itself to crew transfer, AGO supply coordination, security escort and offshore chandling — the support functions that determine whether an offshore programme runs to plan.

> Operations are backed by experienced marine personnel and a proactive maintenance and certification posture, so vessel documentation is current before it is asked for rather than after.

**Key facts** `[DRAFT]` / `[PLACEHOLDER]`

| | |
|---|---|
| Scope | Vessel management, chartering, offshore marine support, crew transfer, security escort, AGO coordination, offshore chandling |
| Vessel types | FSIV · AHV · PSV · security escort vessels · specialised offshore assets |
| Typical engagement | Spot charter through to long-term vessel management contracts |
| Sectors served | Oil & Gas · Maritime · Energy |
| Support model | 24/7 operational support with a named marine coordinator per contract |
| Operating area | Nigerian waters and the Gulf of Guinea |

**Capabilities** `[DRAFT]`

**Offshore Marine Operations** — Day-to-day management of offshore support vessels: crewing, certification, maintenance planning, bunkering and voyage execution, with compliance maintained against the applicable regulatory and class requirements.

**Vessel Chartering** — Sourcing and contracting the right vessel for the scope, whether a single mobilisation or a sustained campaign, with commercial terms and off-hire conditions made clear before signature.

**Marine Support** — Crew transfer, AGO supply coordination, security escort and offshore chandling — the functions that keep an offshore facility supplied and its personnel moving safely.

**Journey Management (marine interface)** — Coordination between vessel movements and onshore transport so crew rotations connect without exposure at the quayside or the airport. Full journey management sits under [Logistics & Haulage](/services/logistics-haulage).

**Approach** `[DRAFT]` — division-specific step names

1. **Consultation** — We establish the scope, duration, operating area and the client's marine assurance requirements.
2. **Vessel & Scope Assessment** — Vessel selection matched to scope, with certification, class status and crew competency verified before commitment.
3. **Mobilisation** — Documentation, permits, crew mobilisation and pre-mobilisation inspection completed ahead of sailing.
4. **Execution** — Operations run under an agreed marine procedure with daily position and status reporting.
5. **Monitoring & Reporting** — Vessel performance, HSE events, fuel and downtime reported on an agreed cycle, with a close-out report at demobilisation.

**Benefits** `[DRAFT]`
- Vessel availability protected through planned maintenance and current certification.
- One accountable contact across vessel, crew, fuel and escort requirements.
- Compliance documentation maintained and audit-ready.
- Local operating knowledge of Nigerian waters, ports and security conditions.
- Commercial terms structured around your operating window, not a standard template.

**Relevant industries** Oil & Gas · Maritime · Energy
**Related services** Logistics & Haulage · Energy & Infrastructure · Equipment & PPE

**CTA band** `[DRAFT]` — H2: *Need Vessel Support for an Upcoming Operation?* · Body: *Tell us the scope and operating window. We will come back with a vessel and a plan.*

---

### 6.2 Aviation — `/services/aviation`

> **Note:** written from sector knowledge only — no source material was supplied for this division. Every specific below is deliberately capability-level, not asset-level. Send me your fleet access, operator partnerships and any AOC arrangement and I will make this concrete, because as drafted it is the weakest of the six pages.

**Breadcrumb** Home / Services / Aviation
**H1** Aviation
**Positioning** `[DRAFT]`
> Charter and aircraft services arranged around operational schedules, not timetables.

**Overview** `[DRAFT]`
> Moving people to and from operational sites is rarely a scheduled-airline problem. Crew rotations run to shift patterns, offshore movements depend on weather windows, and executive travel changes at short notice.

> M-FAV arranges fixed-wing and rotary aviation services covering private jet charter, ad-hoc and programme charter, helicopter services for offshore and remote site access, and support to airline operations. We work with approved operators and verify certification, insurance and crew currency before an aircraft is committed to a client movement.

> Alongside charter, we advise on and broker helicopter purchase and sale transactions for clients acquiring or disposing of rotary assets.

**Key facts** `[DRAFT]` / `[PLACEHOLDER]`

| | |
|---|---|
| Scope | Private jet charter · charter services · airline services · helicopter services · helicopter purchase and sale |
| Typical engagement | Ad-hoc movements, rotation programmes, and asset transactions |
| Sectors served | Oil & Gas · Aviation · Energy · Corporate |
| Support model | `[PLACEHOLDER: e.g. 24/7 charter desk with defined response time]` |
| Operator basis | `[PLACEHOLDER: own AOC, partner operators, or brokerage — confirm which]` |

**Capabilities** `[DRAFT]`

**Private Jet Services** — Executive fixed-wing charter for management and client travel, arranged to your schedule, with ground handling and arrival coordination included.

**Charter Services** — Ad-hoc and programme charter for crew movement and time-critical passenger or cargo requirements.

**Airline Services** — Support services to airline operations, including `[PLACEHOLDER: specify — ground handling, crew logistics, procurement, technical support]`.

**Helicopter Services** — Rotary operations for offshore and remote site access, crew rotation and medevac support, arranged with operators holding the relevant approvals.

**Purchase & Sale of Helicopters** — Advisory and transaction support for clients acquiring or disposing of rotary aircraft, including sourcing, valuation input and transaction coordination.

**Approach** `[DRAFT]`

1. **Consultation** — Route, passenger numbers, payload, timing and any client aviation standard.
2. **Assessment & Planning** — Aircraft type matched to the requirement; operator certification, insurance and crew currency verified.
3. **Mobilisation** — Permits, slots, ground handling and passenger documentation arranged.
4. **Execution** — Movement flown, with coordination through departure, transit and arrival.
5. **Monitoring & Reporting** — Movement confirmation, and programme-level reporting on longer contracts.

**Benefits** `[DRAFT]`
- Aircraft matched to the movement rather than the other way round.
- Operator certification and insurance verified before commitment.
- Coordination across air and ground legs of the same journey.
- Short-notice capability for operational and medical movements.
- Single commercial relationship across charter and asset transactions.

**Relevant industries** Aviation · Oil & Gas · Energy
**Related services** Marine & Offshore · Logistics & Haulage

**CTA band** `[DRAFT]` — H2: *Have a Movement to Arrange?* · Body: *Send us the route, dates and passenger numbers and we will come back with options.*

---

### 6.3 Energy & Infrastructure — `/services/energy-infrastructure`

**Breadcrumb** Home / Services / Energy & Infrastructure
**H1** Energy & Infrastructure
**Positioning** `[DRAFT]`
> Pipeline and infrastructure delivery executed to the standards the scope demands.

**Overview** `[DRAFT]`
> Pipeline work is unforgiving. Lay tolerance, weld integrity, seabed conditions and weather windows all constrain the job, and the consequences of getting any of them wrong are measured in environmental damage and regulatory exposure, not just cost.

> M-FAV supports pipeline installation, cable laying and subsea infrastructure work for offshore and onshore energy operations, using DP2-capable vessels and positioning technology appropriate to the accuracy the scope requires. We work in partnership with local and international contractors, taking the marine and support scope on projects where that is where we add most value.

> The same discipline extends to industrial infrastructure and technical services onshore — installation, maintenance and support scopes delivered against specification and handed over with documentation.

**Key facts** `[DRAFT]` / `[PLACEHOLDER]`

| | |
|---|---|
| Scope | Pipeline installation · pipeline maintenance · cable laying · subsea infrastructure · industrial infrastructure · technical services |
| Vessel capability | DP2-capable vessel support |
| Typical engagement | Project-based scopes, and term maintenance contracts |
| Sectors served | Oil & Gas · Energy · Infrastructure · Construction |
| Delivery model | Direct delivery and partnership with local and international stakeholders |
| Standards posture | Executed to the client specification and applicable safety and environmental requirements |

**Capabilities** `[DRAFT]`

**Pipeline Installation** — Installation support for offshore and onshore pipelines, including lay support, positioning and marine spread coordination, executed under the project's safety and environmental requirements.

**Pipeline Maintenance** — Inspection support, repair scopes and maintenance campaigns on existing lines, planned to minimise production interruption.

**Industrial Infrastructure** — Installation and support scopes on industrial facilities and associated infrastructure, delivered against specification with handover documentation.

**Technical Services** — Engineering and inspection support, cable laying, and specialist technical scopes supporting energy and infrastructure assets.

**Approach** `[DRAFT]`

1. **Consultation** — Scope, route, tolerances, environmental constraints and client standards.
2. **Assessment & Planning** — Survey and site data reviewed, method statement and risk assessment prepared, marine spread and equipment defined.
3. **Mobilisation** — Permits and regulatory notifications, vessel and equipment mobilisation, pre-works inspection.
4. **Execution** — Works executed under the approved method statement with daily progress and HSE reporting.
5. **Monitoring & Reporting** — As-built documentation, inspection records and close-out reporting.

**Benefits** `[DRAFT]`
- DP2-capable vessel support for precision offshore work.
- Method statements and risk assessments prepared before mobilisation, not during.
- Environmental controls built into the job plan.
- Experience working alongside international EPC contractors on Nigerian scopes.
- Documented handover that stands up to client and regulatory review.

**Relevant industries** Oil & Gas · Energy · Infrastructure · Construction
**Related services** Marine & Offshore · Logistics & Haulage · Equipment & PPE

**CTA band** `[DRAFT]` — H2: *Planning a Pipeline or Infrastructure Scope?* · Body: *Share the scope and constraints. We will tell you what we can deliver and how.*

---

### 6.4 Logistics & Haulage — `/services/logistics-haulage`

**Breadcrumb** Home / Services / Logistics & Haulage
**H1** Logistics & Haulage
**Positioning** `[DRAFT]`
> Heavy movement across Nigeria, tracked and accounted for from collection to delivery.

**Overview** `[DRAFT]`
> Nigerian road logistics is a security and compliance problem as much as a transport one. Route conditions, checkpoint delays, product security and driver welfare all determine whether a load arrives intact and on time.

> M-FAV provides onshore and offshore haulage for petroleum products, machinery, spare parts, plant and raw materials including sand, cement, metals and chemicals. Movements are tracked and monitored in real time, and high-value or hazardous loads are planned with route assessment and, where required, escort.

> We also deliver journey management for personnel — airport meet-and-greet, executive transport, pilot escort vehicles, armed and plain-clothed security details, and arrival and departure clearance — with serviced executive accommodation available for visiting personnel.

**Key facts** `[DRAFT]` / `[PLACEHOLDER]`

| | |
|---|---|
| Scope | Haulage · equipment transportation · journey management · logistics support · offshore AGO supply |
| Cargo types | Petroleum products (AGO) · machinery and plant · spares · sand, cement, metals · chemicals |
| Typical engagement | Single movements, scheduled supply contracts, and term journey management |
| Sectors served | Oil & Gas · Logistics · Construction · Industrial Operations |
| Support model | Real-time tracking with 24/7 movement coordination |
| Coverage | Nationwide, Nigeria |

**Capabilities** `[DRAFT]`

**Haulage Services** — Onshore and offshore haulage of petroleum products, industrial materials and equipment, with real-time tracking and delivery confirmation on every movement.

**Equipment Transportation** — Movement of plant, machinery and project cargo, including route assessment and lifting coordination for oversized loads.

**Journey Management** — Secure personnel movement: airport reception, executive transport, escort vehicles, security details, and arrival and departure clearance, supported by serviced executive accommodation with workstations and conference facilities.

**Logistics Support** — Coordination of supply into offshore and remote operations, including offshore AGO supply and vessel chandling.

**Approach** `[DRAFT]` — division-specific

1. **Consultation** — Cargo or personnel profile, origin and destination, timing and any client security requirement.
2. **Route & Risk Assessment** — Route surveyed, security posture assessed, escort and timing decided.
3. **Mobilisation** — Vehicles, drivers and permits confirmed; pre-movement inspection and briefing completed.
4. **Execution** — Movement tracked in real time with checkpoint-to-checkpoint status.
5. **Monitoring & Reporting** — Proof of delivery, exception reporting and movement close-out.

**Benefits** `[DRAFT]`
- Real-time visibility of every movement from dispatch to delivery.
- Route and security risk assessed before departure.
- Hazardous and high-value cargo handled under defined controls.
- Personnel movement and cargo movement coordinated under one contract.
- Nationwide coverage with local route knowledge.

**Relevant industries** Logistics · Oil & Gas · Construction · Industrial Operations
**Related services** Marine & Offshore · Equipment & PPE · Energy & Infrastructure

**CTA band** `[DRAFT]` — H2: *Have a Load or a Movement to Plan?* · Body: *Tell us what is moving, from where and by when. We will plan the route and confirm the cost.*

---

### 6.5 Equipment & PPE — `/services/equipment-ppe`

**Breadcrumb** Home / Services / Equipment & PPE
**H1** Equipment & PPE
**Positioning** `[DRAFT]`
> Certified equipment and protective gear, sourced to specification and delivered on schedule.

**Overview** `[DRAFT]`
> Procurement fails in two directions. Cheap sourcing puts uncertified equipment on a worksite, and slow sourcing stops the worksite entirely. Both are avoidable with the right supplier relationships and honest lead times.

> M-FAV supplies personal protective equipment, marine equipment, industrial consumables and technical equipment for oil production, drilling and petrochemical operations. Sourcing is competitive but specification-led: items are procured against the applicable standards and inspected before they reach your site.

> We are a master distributor for Portwest, and we manufacture protective workwear locally in our own facility. In-house production means customised workwear — client branding, specific fabrics, sizing for your workforce — produced in-country with shorter lead times than imported equivalents.

**Key facts** `[DRAFT]` / `[VERIFY]`

| | |
|---|---|
| Scope | PPE · locally manufactured workwear · marine equipment · industrial supplies · technical procurement |
| Distribution | Master distributor for Portwest `[VERIFY]` |
| Manufacturing | In-house workwear production facility, Nigeria `[VERIFY]` |
| Typical engagement | One-off supply, scheduled replenishment, and term supply contracts |
| Sectors served | Oil & Gas · Maritime · Construction · Industrial Operations |
| Standards posture | Procured against applicable standards including ASTM specifications `[VERIFY]` |

**Capabilities** `[DRAFT]`

**Personal Protective Equipment** — Helmets, eye and hearing protection, gloves, coveralls, safety footwear, fall-arrest harnesses and high-visibility clothing, supplied against the standards your site requires.

**Locally Manufactured Workwear** — Customised coveralls and workwear produced in our own facility, allowing client-specific branding, fabric and sizing with shorter lead times and lower landed cost than imported alternatives.

**Marine Equipment** — Deck equipment, safety equipment, rigging and marine consumables for vessel operations.

**Industrial Supplies** — Consumables, tools and spares supporting continuous industrial operations.

**Equipment Supply & Technical Procurement** — Sourcing of technical equipment for oil production, drilling and petrochemical operations, with supplier evaluation, inspection and compliance checks built into the process.

**Approach** `[DRAFT]` — division-specific

1. **Consultation** — Specification, quantities, standards required and delivery window.
2. **Sourcing & Supplier Evaluation** — Suppliers evaluated on certification, quality record and lead time reliability, not price alone.
3. **Quality Assurance** — Inspection and compliance checks against specification before dispatch.
4. **Delivery** — Delivered to site or vessel on the confirmed schedule, with documentation.
5. **Replenishment & Support** — Scheduled replenishment and consumption tracking on term contracts.

**Benefits** `[DRAFT]`
- Specification-led sourcing rather than lowest-cost substitution.
- Local manufacturing capacity shortening lead times on workwear.
- Inspection and compliance checks before goods reach your site.
- Supplier relationships that hold quality and price across repeat orders.
- Documented procurement supporting audit and local content reporting.

**Relevant industries** Oil & Gas · Maritime · Construction · Industrial Operations
**Related services** Logistics & Haulage · Marine & Offshore · Energy & Infrastructure

**CTA band** `[DRAFT]` — H2: *Need Equipment to Specification and on Schedule?* · Body: *Send us your specification and quantities. We will confirm price and lead time.*

---

### 6.6 Property & Investment — `/services/property-investment`

> **Note:** no source material was supplied for this division either. Drafted without naming assets, values or returns — and deliberately free of anything that could read as a financial promotion. If this division offers investment participation to third parties, it likely carries regulatory obligations in Nigeria, and the copy should be reviewed by your counsel before publication.

**Breadcrumb** Home / Services / Property & Investment
**H1** Property & Investment
**Positioning** `[DRAFT]`
> Industrial and port-adjacent property and asset opportunities.

**Overview** `[DRAFT]`
> Operations need somewhere to work from. Yard space near a port, warehousing within reach of a supply base, and industrial facilities with the access and services that heavy operations require are consistently harder to find in Nigeria than the operations they support.

> M-FAV holds and develops property interests aligned with the sectors we serve, and works with partners on asset and investment opportunities across industrial and port-adjacent real estate.

> This division operates on the same basis as the rest of the group: clear terms, documented process and a single accountable point of contact.

**Key facts** `[DRAFT]` / `[PLACEHOLDER]`

| | |
|---|---|
| Scope | Property · investment · asset opportunities |
| Asset focus | Industrial and port-adjacent property, yards, warehousing and operational facilities |
| Typical engagement | `[PLACEHOLDER: lease, sale, joint venture, or investment partnership — confirm which]` |
| Sectors served | Oil & Gas · Logistics · Infrastructure · Industrial Operations |
| Enquiry route | Direct enquiry through the contact page |

**Capabilities** `[DRAFT]`

**Property** — Industrial, commercial and port-adjacent property interests suited to operational use, including yard space, warehousing and facilities with the access heavy operations require.

**Investment** — Participation in and structuring of opportunities in the sectors we operate across. `[PLACEHOLDER: describe the actual investment model — this line is intentionally non-specific until confirmed]`

**Asset Opportunities** — Identification and structuring of asset opportunities, including operational assets relevant to marine, logistics and industrial activity.

**Approach** `[DRAFT]`

1. **Consultation** — Requirement, location, operational use and timeline.
2. **Assessment** — Suitability, access, services and title reviewed.
3. **Structuring** — Commercial terms structured and documented.
4. **Completion** — Transaction or agreement completed with legal and regulatory requirements met.
5. **Ongoing Support** — Continued support where M-FAV retains an operational role.

**Benefits** `[DRAFT]`
- Property assessed for operational suitability, not just floor area.
- Understanding of what marine, logistics and industrial users actually need from a site.
- Clear commercial terms and documented process.
- Access to a group that can also operate from the site it places you in.

**Relevant industries** Infrastructure · Logistics · Industrial Operations · Oil & Gas
**Related services** Logistics & Haulage · Energy & Infrastructure

**CTA band** `[DRAFT]` — H2: *Looking for Operational Property or an Asset Opportunity?* · Body: *Tell us your requirement and we will come back with what is available.*

---

## 7. `/industries`

**H1** `[DRAFT]` Industries We Serve
**Intro** `[DRAFT]`
> Our capabilities were built for environments where operations are technically demanding, heavily regulated and expensive to interrupt. Below is how each division applies to the sectors we work in.

Per sector: paragraph plus the two or three relevant divisions. `[DRAFT]`

**Oil & Gas**
> Upstream operations depend on continuity: vessels on station, fuel delivered, crews rotated, equipment certified and on site. M-FAV supports operators and contractors across offshore marine operations, security escort, offshore AGO supply, PPE and technical procurement, and pipeline scopes. Our work sits in the support layer that determines whether the production programme holds its schedule.
> *Relevant divisions:* Marine & Offshore · Energy & Infrastructure · Equipment & PPE

**Maritime**
> Vessel operators need craft that are available, certified and correctly crewed. We provide vessel management and chartering across FSIVs, AHVs, PSVs and specialised assets, alongside marine equipment supply and offshore chandling.
> *Relevant divisions:* Marine & Offshore · Equipment & PPE

**Energy**
> Energy assets require infrastructure delivery, maintenance support and a reliable supply chain across long asset lives. We support pipeline and infrastructure scopes, technical services, and the logistics that keep remote energy sites supplied.
> *Relevant divisions:* Energy & Infrastructure · Logistics & Haulage · Marine & Offshore

**Aviation**
> Operational aviation runs to shift patterns and weather windows rather than published timetables. We arrange fixed-wing and rotary charter for crew rotation, executive movement and site access, and support helicopter acquisition and disposal.
> *Relevant divisions:* Aviation · Logistics & Haulage

**Construction**
> Construction programmes are held up by plant that has not arrived and crews without compliant PPE. We move heavy plant and project cargo, supply protective equipment and consumables, and support site infrastructure scopes.
> *Relevant divisions:* Logistics & Haulage · Equipment & PPE · Energy & Infrastructure

**Infrastructure**
> Infrastructure delivery demands precision execution and documentation that survives review. We deliver pipeline installation and maintenance, cable laying and industrial infrastructure scopes, supported by DP2-capable marine assets where the work is offshore.
> *Relevant divisions:* Energy & Infrastructure · Marine & Offshore · Logistics & Haulage

**Logistics**
> Moving cargo across Nigeria is a security and compliance exercise as much as a transport one. We provide tracked haulage, equipment transportation, offshore supply and journey management for personnel, with route and security assessment before every movement.
> *Relevant divisions:* Logistics & Haulage · Marine & Offshore

**Industrial Operations**
> Continuous industrial operations need consumables, spares and protective equipment delivered before they run out. We supply PPE, locally manufactured workwear, industrial supplies and technical equipment on scheduled replenishment.
> *Relevant divisions:* Equipment & PPE · Logistics & Haulage

---

## 8. `/projects`

**H1** `[DRAFT]` Projects & Operations
**Intro** `[DRAFT]`
> A selection of the marine, offshore, logistics and infrastructure operations M-FAV has supported.

**Placeholder banner** `[DRAFT]`, if using Option A from 3.8:
> *Project details shown are illustrative pending final client confirmation.*

**Filter chips** All · Marine Operations · Offshore Support · Logistics · Infrastructure · Equipment Supply

**Empty state** `[DRAFT]`
> No projects match this filter yet. **View all projects** or [get in touch](/contact) to discuss a specific capability.

**Cards** — use the eight entries from section 3.8 above, adding `[DATE PLACEHOLDER]` to each.

**Note on naming operators.** Where consent has not been obtained, describe the counterparty generically — "a deepwater operator", "an international EPC contractor" — rather than naming them. This is still credible and avoids a contractual problem.

---

## 9. `/company`

**H1** `[DRAFT]` The Company
**Intro** `[DRAFT]`
> How M-FAV is structured, how we operate, and the standards that apply across every division.

### 9.1 Structure & divisions at a glance `[DRAFT]`
> M-FAV operates as six divisions under one management structure. Each division holds its own operational leadership and technical capability; commercial, HSE and quality functions are shared across the group so that standards do not vary by service line.

Then a compact six-row list with the division name, its sub-capabilities and a link.

### 9.2 Operating model `[DRAFT]`
> Every engagement is assigned a single accountable contact who holds the scope from enquiry to close-out, regardless of how many divisions are involved. Where a client uses several services — a vessel, a haulage programme and a PPE contract, for example — coordination happens inside M-FAV rather than on the client's desk.

> Operations are planned before mobilisation, executed against a documented method, and reported on an agreed cycle. Variations are raised in writing, priced and agreed before work proceeds.

### 9.3 Governance & standards `[DRAFT]`
> M-FAV maintains the registrations and clearances required for the scopes we undertake, and operates within the regulatory framework governing marine, offshore and industrial work in Nigeria. Documentation is made available during prequalification and tender.

> Our commercial conduct is governed by transparent documentation, ethical procurement practice and clear contract terms. Supplier and subcontractor relationships are subject to evaluation before engagement and review through delivery.

### 9.4 HSE policy summary `[DRAFT]`
> Delivering Excellence at All Times sets the standard our work is held to, and safe execution is the first condition of meeting it. In practice that means stop-work authority at every level, risk assessment before mobilisation, incident and near-miss reporting with tracked corrective actions, and environmental controls built into the job plan rather than added to it. The full statement is on our [safety page](/about#safety).

### 9.5 Careers — anchor `#careers` `[DRAFT]`
**H2** Careers at M-FAV
> We hire marine personnel, drivers and logistics coordinators, HSE professionals, procurement specialists and operational support staff. Experience in offshore, marine or heavy industrial environments matters; so does a demonstrated commitment to working safely.

> To register interest, send your CV and the role you are interested in to `[EMAIL PLACEHOLDER — suggested: careers@mfavoffshore.com]`.

### 9.6 Company profile download — NOT BUILDING THIS

**Instruction to the build:** omit the download slot entirely. Do not ship a disabled button, a "coming soon" tooltip, or a placeholder file link. This is a deliberate deviation from Phase 5e of the brief — log it as such in the phase report.

The `/company` page ends on the careers section followed by the CTA band. Nothing needs to fill the gap; the page is substantial without it.

**If a downloadable profile is wanted later**, it should be a capability statement written for the site's six divisions rather than the existing sales PDF, which predates the aviation and property divisions. That is a separate piece of work.

---

## 10. `/contact`

**H1** `[DRAFT]` Contact Us
**Intro** `[DRAFT]`
> Tell us what you need. Give us the scope, the location and the timeline, and the right person will come back to you rather than a general acknowledgement.

### 10.1 Form `[CLIENT-APPROVED]` field set

| Field | Label | Required |
|---|---|---|
| name | Full Name | Yes |
| company | Company | No |
| email | Email | Yes |
| phone | Phone | No |
| service | Service of Interest | No |
| message | Message | Yes |

**Select options** General Enquiry · Marine & Offshore · Aviation · Energy & Infrastructure · Logistics & Haulage · Equipment & PPE · Property & Investment

**Submit button** `[CLIENT-APPROVED]` Submit Enquiry
**Loading state** `[DRAFT]` Sending…

**Validation messages** `[DRAFT]`
- Full Name — *Please enter your name.*
- Email, empty — *Please enter your email address.*
- Email, malformed — *Please enter a valid email address, e.g. name@company.com*
- Message — *Please tell us how we can help.*
- Error summary heading — *There are 2 problems with this form* (count updates dynamically)

**Success panel** `[DRAFT]`
> **Enquiry received.** Thank you — your enquiry has reached our team. We respond to enquiries within one business day. For urgent operational matters, call `[PHONE]`.

**Error panel** `[DRAFT]`
> **We couldn't send your enquiry.** Something went wrong on our end. Please try again, or email us directly at `[EMAIL]`.

**Honeypot label** (visually hidden) — *Leave this field blank*

### 10.2 Contact information column

| Item | Content | Status |
|---|---|---|
| Address | `[ADDRESS PLACEHOLDER]` | **Missing — see 11.1** |
| Phone | +234 (0) 810 642 1702 | `[VERIFY]` |
| Phone | +234 (0) 708 668 1182 | `[VERIFY]` |
| General enquiries | `[EMAIL PLACEHOLDER — suggested: info@mfavoffshore.com]` | **Missing** |
| Support | support@mfavoffshore.com | `[VERIFY]` |
| Procurement | procurement@mfavoffshore.com | `[VERIFY]` |
| Operating hours | `[HOURS PLACEHOLDER — suggested: Monday–Friday, 08:00–17:00 WAT. Operational support available 24/7.]` | **Missing** |
| Map | `[MAP EMBED PLACEHOLDER]` | **Missing** |

**Response time note** `[DRAFT]`
> We respond to enquiries within one business day. Operational and urgent matters are handled 24/7 by phone.

---

## 11. Footer

### 11.1 What is missing — fill these before launch

1. **Registered office address.** Nothing in either document. Needed for the footer, the contact page, the map embed and your `LocalBusiness` schema. If you have more than one location (Lagos and Port Harcourt, for example), list the head office in the footer and all of them on the contact page.
2. **A general enquiry email.** You have support@ and procurement@ only. The contact form needs a destination that is neither — recommend `info@` or `enquiries@`.
3. **A careers email.** Recommend `careers@`.
4. **RC number.** Nigerian companies normally display this. It is a cheap credibility signal for procurement readers and belongs in the footer legal line.
5. **Social handles.** The brief specifies LinkedIn, X, Facebook and Instagram icons. Supply the real URLs or drop the icons — dead social links damage credibility more than absent ones. LinkedIn is the only one that matters for B2B procurement; consider shipping that alone.
6. **Operating hours.**

### 11.2 Footer content

**Brand column**
Lockup: `M-FAV` / `OFFSHORE AND ALLIED SERVICES LTD`
Line `[CLIENT-APPROVED]`: *Integrated marine, offshore, aviation, logistics and industrial solutions.*

**Company column**

| Link | Destination |
|---|---|
| About Us | `/about` |
| Leadership | `/about#leadership` |
| Projects | `/projects` |
| Careers | `/company#careers` |

Consider adding Company → `/company` and Industries → `/industries`, which the brief's table omits but which exist as routes.

**Services column**

| Link | Destination |
|---|---|
| Marine & Offshore | `/services/marine-offshore` |
| Aviation | `/services/aviation` |
| Energy & Infrastructure | `/services/energy-infrastructure` |
| Logistics & Haulage | `/services/logistics-haulage` |
| Equipment & PPE | `/services/equipment-ppe` |
| Property & Investment | `/services/property-investment` |

**Contact column**
```
[ADDRESS PLACEHOLDER]
[CITY, STATE], Nigeria

+234 (0) 810 642 1702
+234 (0) 708 668 1182

info@mfavoffshore.com          [PLACEHOLDER — confirm]
procurement@mfavoffshore.com
```

**Legal line**
> © 2026 M-FAV Offshore and Allied Services Limited. All Rights Reserved.
> `[RC PLACEHOLDER — e.g. RC 1234567]`

**Small links** Privacy Policy `/privacy` · Terms of Use `/terms`

Note: the brief requires every footer link to resolve. If `/privacy` and `/terms` are not built, remove the links rather than pointing them at `#`.

---

## 12. 404 page `[DRAFT]`

**H1** Page Not Found
**Body** > The page you requested doesn't exist or has moved.
**Primary CTA** Return Home → `/`
**Secondary** View Our Services → `/services`

---

## 13. Consolidated placeholder checklist

Everything the client must supply before launch.

**Critical — blocks launch**
- [x] ~~Final company name~~ — RESOLVED: M-FAV Offshore and Allied Services Limited, per the logo
- [x] ~~Motto~~ — RESOLVED: Delivering Excellence at All Times
- [ ] Registered office address (all locations)
- [ ] General enquiry email address
- [ ] Contact form submission destination
- [ ] Operating hours
- [ ] Confirmation on naming Shell, Chevron, Saipem, TotalEnergies, First E&P — consent obtained, or use the unattributed fallback

**Important**
- [ ] RC number
- [ ] Careers email
- [ ] Social media URLs, or confirmation to remove the icons
- [ ] Leadership: names, roles, bios, portraits
- [ ] Certification names, numbers and certifying bodies
- [ ] Confirmation of current regulatory registrations (NIMASA, Navy, NUPRC/NMDPRA, NCDMB, NPA, NSCDC, FIRS)
- [ ] Project dates for each entry in section 3.8
- [ ] Verification of the "10+ years" claim
- [ ] Confirmation of Portwest master distributor status
- [ ] Aviation: operator basis — own AOC, partner operators, or brokerage
- [ ] Aviation: what "Airline Services" actually covers
- [ ] Property & Investment: the real engagement model, and legal review if investment is offered to third parties
- [ ] Real photography per `IMAGES.md`
- [ ] Image captions

**Decisions**
- [ ] Journey Management canonical home (currently Logistics & Haulage)
- [ ] Projects page: real content (Option B) vs placeholder (Option A)
- [ ] Tagline: keep the profile's vessel-management line, or adopt the broader alternative
- [ ] Stats band: keep "10+ Service Capabilities" or switch to "10+ Years of Operations"
- [ ] Privacy and Terms pages: write them, or remove the footer links
