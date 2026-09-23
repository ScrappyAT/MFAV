# COPY-FOR-REVIEW.md

Regenerated in Pass 6 (CONTENT-UPDATE-BRIEF.md A1a) to reflect what is
**actually live on the site today**, not the pre-update build this file
used to describe. The overwhelming majority of the site's words now come
from `COPY-APPROVED.md`, applied verbatim and verified line-by-line
against the deck during Passes 1–6. This document exists only to name
the exceptions: every string still on the site that is **not** the
client's own words, so nothing agent-authored can hide inside a "content
update" that was supposed to eliminate it.

If a page or section isn't named below, treat it as fully deck-sourced.

---

## Still agent-authored, not from the deck

**1. `content/divisions.js`'s six `blurb` strings** — on hold, per your
explicit instruction this session, pending your decision on whether they
should instead use the deck's mega-menu descriptor text (COPY-APPROVED.md
§1). Currently unchanged from the pre-update build:
- Marine & Offshore: "Offshore marine operations, vessel chartering and marine support."
- Aviation: "Private jet, charter, airline and helicopter services."
- Energy & Infrastructure: "Pipeline installation and maintenance, and industrial infrastructure."
- Logistics & Haulage: "Haulage, equipment transportation and journey management."
- Equipment & PPE: "Equipment supply, PPE and industrial supplies."
- Property & Investment: "Property, investment and asset opportunities."

Live only on `/company`'s division grid — as of Pass 1, service-page meta
descriptions come from `content/metadata.js` directly, so `blurb` no
longer feeds into those.

**2. Section headings the deck never specified replacement text for.**
The deck rewrites body copy extensively but doesn't always give a literal
on-page heading for every subsection — where it's silent, the original
build's heading stayed:
- `/about` — "What We Hold Ourselves To" (Values section; the deck's §4.3 has no H2 of its own)
- `/company` — "Divisions at a Glance", "How the Group Operates", "Governance & Standards", "Health, Safety & Environment" (the deck's §9.1–9.4 are the document's own organisational markers, not literal page headings)
- `/contact` — "Office Details" (info column heading)

**3. Functional UI text the deck doesn't address**, because it isn't
persuasive/informational copy — accessibility and interaction labels
required for the page to work at all: "Skip to content" (skip link),
"Try Again" (error-panel retry button), aria-labels on the mobile-nav
toggle and filter controls, the honeypot field's internal `name`
attribute. None of this is visible marketing copy; none of it was ever
in scope for the deck to supply.

**4. Two small labels I added beyond the deck's literal wording**, to
disambiguate content the deck's own table format didn't need to (a two-
column table doesn't need inline labels; a page with two adjacent email
addresses does):
- `/contact` info column: "General enquiries:" and "Procurement:" prefixes before the two email addresses (deck §10.2's table just labels the rows "Enquiries" / "Procurement").

**5. Placeholder bracket text I wrote to fit specific slots**, distinct
from the deck's own placeholder markers (which are applied verbatim
elsewhere):
- `/company` careers: `[CAREERS EMAIL PLACEHOLDER]` — deliberately generic rather than the deck's own bracketed suggestion (`[EMAIL PLACEHOLDER — suggested: careers@mfavoffshore.com]`), consistent with A7 treating suggested values as undecided.
- `content/site.js`: `[OPERATING HOURS PLACEHOLDER]`, `[MAP EMBED PLACEHOLDER]` — same reasoning; the deck's own suggested hours are not baked in.

## Deck content that exists but is not applied anywhere — flagging, not hiding

- **The site tagline** (§1 — "Trusted Partner in Vessel Management and
  Safety Solutions" or its suggested broader alternative) is not used.
  The deck presents this as an open choice between two options, not a
  decision; every route's actual meta description instead uses the
  specific text COPY-APPROVED.md §2 gives per route.
- **The Corporate Aim pull-quote** (§4.2, "To constantly innovate...") is
  not placed anywhere on `/about`. No pull-quote treatment exists in the
  current design, and the deck itself frames it as optional styling
  ("usable as a pull quote"), not mandatory copy.
- **The homepage hero's optional division-name hairline strip** (§3.1)
  was never built — the deck itself marks it optional and the original
  brief left it to editorial judgement; it wasn't in the pre-update build
  either, so this isn't new.
- **The Services mega-menu descriptors** (§1) are unused. The flyout menu
  itself was built and then deliberately removed in an earlier, approved
  reversal (well before this session). Per your explicit ruling, these
  six descriptor lines are not relocated anywhere else to "use them up."
- **Eyebrow labels** throughout the deck (`01 — Our Capabilities`, etc.)
  are not rendered anywhere. The `Eyebrow` component was retired
  site-wide in an earlier pass; per A1b, the deck is understood to be
  supplying words for a presentational element that no longer exists,
  not instructing its reinstatement.

## Known, disclosed conversions from deck markdown to real markup

Not agent-authored words — the deck's own text, with its markdown syntax
converted to actual interactive elements rather than rendered as literal
brackets:
- `/projects` empty state: `[get in touch](/contact)` → a real `<Link>`.
- `/company` HSE summary: `[safety page](/about#safety)` → a real `<TextLink>`.
- Marine & Offshore's "Journey Management (marine interface)" capability: the embedded link to Logistics & Haulage is kept as plain text (the capability description slot doesn't support inline links) rather than rendered with visible markdown syntax; the Related Services section on the same page links there regardless.
- Contact form success/error panels: the deck's bold lead sentence (`**Enquiry received.**`, `**We couldn't send your enquiry.**`) is rendered as a real `<h2>`, with the rest of each panel as a `<p>` below it — not literal asterisks.

---

## Everything else

Every other page, section and string on the site — the homepage in full,
all six service detail pages, `/industries`, the projects data, `/about`'s
body copy, `/company`'s operating-model/governance/HSE text, and the
entire `/contact` page including every validation message — is applied
from `COPY-APPROVED.md` verbatim, cross-checked programmatically against
the deck during Passes 2–6. See the Pass 6 report for the verification
method and its results.


## 22 September 2026 refresh ? proposed copy

The new Hero.jsx, WhoWeAre.jsx and EnquiryGuide.jsx copy is proposed for review. Homepage capability introduction: ?Find the right division for your scope, or speak to us about coordinating support across more than one service.? New action labels: ?Discuss your project?, ?Discuss this service?, ?Preview enquiry?. Contact preview notice explicitly states no enquiry is sent; direct email/phone links remain available. No existing approved source deck was overwritten. Full changed wording is recorded in the source diff.

### Complete new homepage copy

The support behind your next operation.

M-FAV Offshore and Allied Services Limited brings together marine, aviation, logistics and industrial capabilities to support your operation, from planning to delivery.

Explore our services / Discuss your project / Meet M-FAV

Six specialist divisions. One point of coordination.

Across sea, land and air.
Connected capabilities for demanding operations.

Specialist capabilities. Connected delivery.
Find the right division for your scope, or speak to us about coordinating support across more than one service.
All services

One partner for the moving parts.

Moving people, vessels, equipment and materials takes coordination. M-FAV brings specialist services together so clients can plan connected scopes through one point of contact.

Our six divisions span marine and offshore operations, aviation, energy and infrastructure, logistics and haulage, equipment and PPE, and property and investment.

Safety, clear responsibilities and transparent communication guide how we approach each engagement.

Start with your operation.
A useful conversation begins with a clear brief. Here is what to share when you get in touch.
Discuss your requirements

01 Define the scope
Tell us the service you need, the work involved and any equipment or personnel requirements.

02 Share the location and timing
Include the operating location, target start date and key delivery milestones.

03 Discuss the requirements
Talk through the relevant capabilities, documentation and next steps with our team.

### Service and contact copy

What this means for your operation / Industries we support / Discuss this service

Contact our team directly
Online enquiry delivery is not connected yet. Please email or call us to discuss your requirements.

Preview enquiry
Preview complete. No enquiry sent.
This form is not connected to enquiry delivery yet. To reach our team, email [existing contact email] or call [existing contact phone].


## Copy corrections following browser review

Corrected the Mission punctuation and spelling: engineering, strategic partnerships, Nigerian content development. Restored the missing end of company in the Vision statement. Both now start with a complete subject and verb: Our mission is / Our vision is. Reworded the 30 service-process descriptions as complete sentences without adding service claims. Updated the consultation FAQ to match the current Discuss your project button and direct contact options; clarified that the form is a preview. Completed the multi-division FAQ sentence. Existing factual confirmation markers remain unresolved.

### Revised service-process descriptions

marine-offshore
1. We establish the scope, duration, operating area and marine assurance requirements with the client.
2. We match vessel selection to the scope and verify certification, class status and crew competency before commitment.
3. We complete documentation, permits, crew mobilisation and pre-mobilisation inspections ahead of sailing.
4. Operations follow agreed marine procedures, with daily position and status reports.
5. We report vessel performance, HSE events, fuel use and downtime on an agreed cycle, with a close-out report at demobilisation.

aviation
1. We confirm the route, passenger numbers, payload, timing and applicable client aviation standards.
2. We match the aircraft type to the requirement and verify operator certification, insurance and crew currency.
3. We arrange permits, slots, ground handling and passenger documentation.
4. We coordinate the flight through departure, transit and arrival.
5. We confirm completed movements and provide programme-level reporting on longer contracts.

energy-infrastructure
1. We confirm the scope, route, tolerances, environmental constraints and client standards.
2. We review survey and site data, prepare the method statement and risk assessment, and define the marine spread and equipment.
3. We arrange permits and regulatory notifications, mobilise vessels and equipment, and complete pre-works inspections.
4. Work follows the approved method statement, with daily progress and HSE reports.
5. We provide as-built documentation, inspection records and close-out reports.

logistics-haulage
1. We confirm the cargo or personnel profile, origin, destination, timing and client security requirements.
2. We survey the route, assess security risks and determine escort requirements and timing.
3. We confirm vehicles, drivers and permits, and complete the pre-movement inspection and briefing.
4. We track the movement in real time and report its status from checkpoint to checkpoint.
5. We provide proof of delivery, report exceptions and document the completed movement.

equipment-ppe
1. We confirm the specification, quantities, required standards and delivery window.
2. We evaluate suppliers on certification, quality record and lead time reliability, as well as price.
3. We inspect goods and check compliance against the specification before dispatch.
4. We deliver to the site or vessel on the confirmed schedule, with the required documentation.
5. We arrange scheduled replenishment and track consumption on term contracts.

property-investment
1. We confirm the requirement, location, intended operational use and timeline.
2. We review suitability, access, services and title.
3. We structure and document the commercial terms.
4. We complete the transaction or agreement in line with legal and regulatory requirements.
5. We provide ongoing support where M-FAV retains an operational role.


## About and Company consolidation
Company operating-model, governance and careers copy moved to About without rewriting it. Duplicate HSE summary omitted because About already has the full safety statement. Division grid replaced with a Services link and this summary: M-FAV operates six specialist divisions under one management structure. Each has its own operational leadership and technical capability, supported by shared commercial, HSE and quality functions. New section links: Overview, How we operate, Safety, Careers.
