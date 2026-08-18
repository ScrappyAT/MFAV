# MFAV Offshore & Allied Resources — Agent Build Brief

**How to use this file:** Paste `SECTION A` (Master Context) into your agent once at the start of the session, or drop this file in the repo root and tell the agent to read it. Then fire `SECTION B` phases **one at a time**, in order. Do not paste all phases at once — that is how agents shallow-build the back half.

---

# SECTION A — MASTER CONTEXT (paste once, keep in context all session)

## A1. Role and mandate

You are a senior front-end engineer and UI designer building the production marketing website for **MFAV Offshore and Allied Resources**, a diversified Nigerian integrated services group operating across marine, offshore, aviation, logistics, energy, infrastructure, equipment/PPE, property and investment.

Stack: **React + Vite + Tailwind CSS**. Design tokens have already been supplied to you and already exist in this project.

Your mandate is not "a website that works." It is a site that a Shell, TotalEnergies, or NNPC procurement lead would accept as evidence that this company can hold a serious offshore contract. Credibility is the product.

## A2. Non-negotiable working rules

1. **Audit before you write.** Before Phase 1, inventory what already exists in this repo: token definitions, Tailwind config, routing, existing components, existing pages. Report the inventory back to me before changing anything.
2. **Extend, do not rewrite.** Existing structure, file conventions, and component names stay unless they actively block the design. If you believe something must be rewritten, say so and wait for my approval — do not unilaterally replace working code.
3. **The design tokens are law.** Every color, font size, spacing value, radius, shadow, and duration comes from the token set. Zero raw hex values, zero arbitrary Tailwind values (`p-[13px]`, `text-[#0A2540]`) in component code. If a needed value is missing from the tokens, stop, tell me what gap you found, propose the token, and wait.
4. **No new dependencies without asking.** Ask before adding any library. Prefer CSS and Tailwind over JS. Framer Motion is acceptable if I approve it; a scroll-animation library, a carousel library, and a UI kit are three separate approval requests.
5. **One phase at a time.** Complete a phase, run its QA gate, report what you built and what you deviated on, then stop and wait. Never run ahead into the next phase.
6. **Placeholder content is labeled as placeholder.** Do not invent real clients, contracts, project names, locations, certifications, dates, revenue figures, or staff names. Where a real detail is needed, insert a clearly marked placeholder (e.g. `[ADDRESS PLACEHOLDER]`) and list every placeholder in your phase report so the client can fill them in.
7. **Never fake credentials.** No invented ISO numbers, no fake regulatory body memberships, no made-up award badges. Safety and compliance copy describes commitment and process, never unverified certification.

## A3. Design law

**Direction:** premium international industrial group. Editorial, spacious, high-contrast, image-driven, typographically confident. The reference feeling is an offshore energy major's corporate site or a global marine logistics group — not a template, not a SaaS landing page, not a small-business site.

**Palette discipline** (map to the existing tokens, do not introduce new hues):

| Role | Usage |
|---|---|
| Deep navy | Dark sections, footer, image overlays, CTA band |
| Charcoal | Body text, headings on light |
| White | Primary surface |
| Off-white / light gray | Alternating section bands, form fields, borders |
| Blue accent | **Sparingly only:** buttons, links, active nav state, small rules and dividers, focus rings, eyebrow numerals |

Accent does **not** fill large surfaces and does **not** color the statistics numerals (those are off-white on navy — see Phase 2d). If you find yourself reaching for the accent to make something "pop," use contrast, scale, or whitespace instead.

The accent is a scalpel, not a paint roller. If a screenshot of any section reads as "mostly blue," you have failed the palette. Aim for roughly 60% white/off-white, 30% navy/charcoal, under 10% accent across the page.

**Typography:** one modern professional sans (Inter, Söhne, Neue Haas Grotesk, Suisse Int'l or equivalent already in tokens). Hero headline very large, tight leading (~0.95–1.05), tight tracking, weight 600–700. Section headings large and confident. Body 16–18px, line-height ~1.6, measure capped at ~65–70 characters. Eyebrow labels: small, uppercase, wide tracking, muted — used to number and title sections. Statistics: very large numerals, tabular figures, light or medium weight — understated, not shouty.

**Layout:** 12-column grid, generous max-width (~1280–1440px content, full-bleed image sections). Big vertical rhythm — section padding on desktop should feel expensive (roughly 120–180px), never cramped. Asymmetry is welcome: offset images, split screens, editorial overlaps. Use hairline rules and vertical accent lines as structure instead of boxing everything in cards.

**Hard bans.** Reject your own output if it contains: gradient meshes or multi-stop gradients as decoration; a page of uniform rounded cards with drop shadows; glassmorphism; neon or "AI purple"; more than two accent hues; emoji as icons; generic multicolored icon sets; bouncy or springy easing; parallax on more than one element; animation on more than one property per element per interaction; carousels that auto-play; smiling-people-in-an-office stock photography; centered-everything layouts; a hero with a boxed white card floating on a photo.

**Radius and shadow:** near-square. Radius `0` to `4px` maximum on cards and buttons. Shadows are almost absent — prefer a 1px border in a token gray, or a background tone shift, to separate surfaces. Depth comes from contrast and image, not from blur.

## A4. Imagery direction

Subjects only: offshore supply vessels and PSVs, ocean and rig operations, helicopters on a deck, private jets on a ramp, pipeline and welding work, port cranes and container terminals, heavy plant and equipment on site (excavators, mobile cranes, generators, rigging), heavy haulage on Nigerian roads, PPE and crew at work, engineering and inspection work, marine personnel, industrial plant at dusk. For the Property & Investment division: commercial or industrial real estate, port-adjacent land and facilities, serviced industrial yards — architectural and operational, never residential lifestyle imagery.

Treatment: cinematic, cool-toned, desaturated slightly, real, operational. Faces should be at work and in PPE, not posing. Every photo behind text gets a navy overlay (roughly 55–70% at the text side) or a directional gradient scrim so text contrast clears **4.5:1 measured, not eyeballed**.

Implementation: use responsive `<img>` with `srcset`, `width`/`height` set to prevent CLS, `loading="lazy"` on everything below the fold, `fetchpriority="high"` on the hero image only, and `object-cover` framing. Ship a documented `IMAGES.md` listing every image slot, its intended subject, and its aspect ratio so real assets can be dropped in later. Use consistently-sized neutral placeholders in the meantime — never a stretched or randomly-sized filler.

## A5. Information architecture

Routes: `/` · `/about` · `/services` · `/services/:slug` · `/industries` · `/projects` · `/company` · `/contact`

Service slugs (six divisions): `marine-offshore` · `aviation` · `energy-infrastructure` · `logistics-haulage` · `equipment-ppe` · `property-investment`

## A6. The UX narrative — what the homepage must accomplish

A visitor scrolling the homepage once, without clicking anything, must come away understanding five things **in this order**:

1. **Who MFAV is** — an integrated industrial services group (hero)
2. **What MFAV does** — the six divisions and their real capabilities (capabilities grid, featured services)
3. **How broad the capability is** — one partner across many operational domains (about, statistics, industries)
4. **Why MFAV can be trusted** — safety, discipline, evidence of operations (safety, projects, why MFAV, partners)
5. **How to engage** — an unmissable, low-friction next step (CTA band, contact page)

Judge every design decision against that sequence. **Clarity, credibility, visual hierarchy and conversion beat decorative design every time** — if a treatment looks impressive but makes any of the five steps slower to grasp, remove it.

**Canonical homepage section order** (build in exactly this order; each eyebrow numeral is fixed):

| # | Section | Eyebrow | Phase |
|---|---|---|---|
| 1 | Hero | — | 2a |
| 2 | Our Capabilities (six divisions) | `01 — Our Capabilities` | 2b |
| 3 | About / company introduction | `02 — About MFAV` | 2c |
| 4 | Key statistics band | — | 2d |
| 5 | Featured services | `03 — Featured Services` | 3a |
| 6 | Industries we serve | `04 — Industries` | 3b |
| 7 | Safety & operational excellence | `05 — Safety` | 3c |
| 8 | Projects / operations | `06 — Projects` | 3d |
| 9 | Why MFAV | `07 — Why MFAV` | 3e |
| 10 | Partners / clients | — | 3f |
| 11 | Closing CTA band | — | 3g |
| 12 | Footer | — | 1c |

## A7. Copy authority

Any string given in **bold** or *italic* in this brief is **client-approved copy — reproduce it verbatim, do not paraphrase, do not "improve" it.**

Everything else — body paragraphs, service descriptions, industry relevance lines, process step descriptions, and the section headings marked `[AGENT-AUTHORED]` below — is copy you write. Collect every word you author into `COPY-FOR-REVIEW.md`, organised by page and section, so the client can approve or replace it. Do not treat your own copy as final.

`[AGENT-AUTHORED]` headings requiring client sign-off: the Featured Services H2, the Industries H2, the Why MFAV H2, and all Phase 4 and Phase 5 page headings not explicitly specified here.

## A8. Definition of done (applies to every phase)

- Renders correctly at 1920, 1440, 1280, 1024, 834, 768, 430, and 375px wide. No horizontal scroll at any width.
- Semantic HTML: one `h1` per page, ordered headings, `<nav>`/`<main>`/`<section>`/`<footer>`, real `<button>` and `<a>` elements.
- Keyboard operable end to end, with a visible focus ring on every interactive element. Mobile nav traps focus and closes on `Esc`.
- Text contrast ≥ 4.5:1, large text ≥ 3:1, verified against actual overlay values.
- `@media (prefers-reduced-motion: reduce)` disables transform and opacity animation everywhere.
- Every interactive element has hover, focus-visible, active, and disabled states.
- No console errors or warnings. No unused imports. No dead code.
- All copy is exactly as specified in the phase, or clearly marked placeholder.

---

# SECTION B — PHASED BUILD PROMPTS (fire one at a time)

---

## PHASE 0 — Audit and token reconciliation

**Do not write any feature code in this phase.**

1. Inventory the repo: file tree, Tailwind config, token definitions (file and shape), routing setup, every existing component and page, any installed animation/UI libraries.
2. Produce a **token coverage table** mapping the design law in A3 to what actually exists: color roles, type scale steps, spacing scale, radii, shadows, motion durations and easings, breakpoints, z-index layers, container widths.
3. Flag every gap and every conflict — for example a token palette that is too blue-dominant, a type scale with no hero step, a spacing scale too coarse for 160px section padding, radii that are too round for the near-square rule.
4. Propose additions as **new tokens in the existing naming convention**, with values. Do not add them yet.
5. State plainly which parts of the existing build you would keep, extend, or (with reasoning) replace.

**Deliverable:** a written audit + `TOKENS-GAPS.md`. Then stop and wait for my approval.

---

## PHASE 1 — Foundation: token wiring, primitives, app shell

Once I approve the Phase 0 gaps, implement them, then build the foundation.

**1a. Wire tokens** into Tailwind's theme so every value is reachable as a utility class (`bg-surface`, `text-ink-muted`, `py-section`, `duration-base`). Add an ESLint rule or a documented convention forbidding arbitrary values in components.

**1b. Primitives** — build these as real reusable components with variants, plus a `/styleguide` dev-only route that renders every one in every state:

- `Button` — variants: `primary` (accent fill, near-square, white label), `secondary` (navy or charcoal outline, transparent fill), `ghost`, `onDark`. Sizes `sm|md|lg`. States: default, hover, focus-visible, active, disabled, loading. Optional trailing arrow that translates ~4px on hover.
- `TextLink` — inline and standalone-with-arrow variants; underline that animates from left on hover, never a color-only change.
- `Eyebrow` — small uppercase wide-tracked label, with optional index numeral (`01 —`).
- `SectionHeader` — eyebrow + heading + optional supporting paragraph + optional right-aligned action; left-aligned by default.
- `Tag` — square, hairline border, uppercase micro-label, for sector and location metadata.
- `Stat` — large numeral + label + optional hairline rule.
- `Card` shells — `ServiceCard`, `IndustryCard`, `ProjectCard`, `DivisionPanel` (structure and states now, content later).
- Form controls — `Input`, `Textarea`, `Select`, `Label`, `FieldError`, `Checkbox`. Off-white fill, 1px border, accent border + focus ring on focus, red-token error state with message, generous 48px+ hit height.
- `Container`, `Section`, `Grid` layout helpers that own the vertical rhythm so no page hardcodes padding.

**1c. App shell**

- **Header:** transparent over the hero with white logo and white nav; on scroll past ~80px, transitions to a solid white (or navy) bar with charcoal nav, a hairline bottom border, and reduced height — a smooth, brief transition, no bounce. Logo lockup is two lines: `MFAV` bold and prominent, `OFFSHORE & ALLIED RESOURCES` beneath it, small, uppercase, wide-tracked. Nav: Home · About Us · Services · Industries · Projects · Company · Contact. Active route gets an accent underline or a small accent marker. Services gets a **wide flyout mega-menu** listing all six divisions with a one-line descriptor each — not a narrow dropdown list. CTA `Request a Consultation` as a primary button on the right.
- **Mobile nav:** hamburger to full-screen navy overlay, links stacked at large type, staggered fade-in (~40ms apart), the CTA full-width at the bottom, contact details beneath it. Locks body scroll, traps focus, closes on `Esc`, on backdrop click, and on route change.
- **Footer:** navy. Multi-column: brand column (logo lockup + `Integrated marine, offshore, aviation, logistics and industrial solutions.`), Company, Services, Contact. **Every footer link must resolve to a real destination — no dead links, no `href="#"`:**

| Column | Link | Destination |
|---|---|---|
| Company | About Us | `/about` |
| Company | Leadership | `/about#leadership` |
| Company | Projects | `/projects` |
| Company | Careers | `/company#careers` |
| Services | all six divisions | `/services/<slug>` |
| Contact | `[ADDRESS PLACEHOLDER]` · `[PHONE PLACEHOLDER]` · `[EMAIL PLACEHOLDER]` | — |

Ensure the `#leadership` and `#careers` anchors are actually created in Phase 5, with correct `scroll-margin-top` to clear the fixed header. Simple monoline social icons — LinkedIn, X, Facebook, Instagram — as inline SVG, no icon font, no colored logos. Hairline divider, then `© 2026 MFAV Offshore and Allied Resources. All Rights Reserved.` and a small Privacy · Terms group.
- **Routing:** all routes from A5 wired with placeholder page bodies. Scroll restores to top on navigation. A `NotFound` page in the same visual language.

**QA gate:** run the Definition of Done (A8) plus — every primitive appears on `/styleguide` in all states; grep the codebase for `#` hex values and `[` arbitrary values in `className` and report the result as zero; header transition tested at all breakpoints; mobile nav keyboard-tested.

Report, then stop.

---

## PHASE 2 — Homepage part 1: hero, capabilities, about, statistics

Use the exact copy below. Do not paraphrase.

**2a. Hero** — full-viewport (`min-h-[92vh]`, not a rigid `100vh`), full-bleed cinematic image of an offshore supply vessel in open water at blue hour, or an equivalent operational subject. Navy scrim: strong on the left/bottom where text sits, lighter at the opposite corner — directional, not a flat wash. Content sits on the grid, left-aligned, roughly the left 7 of 12 columns, vertically centered-to-lower-third. Optional: a slow, barely-perceptible image scale from 1.06 to 1.0 over ~1.6s on load, and nothing more.

- H1: **Integrated Solutions. Built for What Moves the World.**
- Body: *MFAV Offshore and Allied Resources delivers integrated marine, offshore, aviation, logistics, energy, infrastructure and industrial solutions with safety and operational excellence at the core.*
- Primary CTA: **Explore Our Services** → `/services`
- Secondary CTA: **Contact Us** → `/contact` (outline-on-dark)
- Scroll indicator: bottom-left or bottom-center — a thin vertical line with a slow travelling accent segment, plus a small `SCROLL` label. Subtle. Hidden on mobile and under reduced-motion.
- Optional restrained addition: a hairline strip along the hero's bottom edge listing the six division names in small uppercase type, as a table of contents for the site. Include it only if it reads as premium and not as clutter.

**2b. Our Capabilities** — the six divisions. This must be the most visually confident section on the page after the hero.

- Eyebrow: `01 — Our Capabilities`
- H2: **Our Capabilities**
- Supporting: *From offshore operations and marine logistics to aviation, infrastructure and industrial supply, MFAV brings multiple capabilities together to support complex operations.*

Layout: an editorial grid of six large image panels, deliberately **not** six identical squares — vary the spans so the composition has rhythm (for example a 2-column-wide feature panel for Marine & Offshore, then a mix of 1- and 2-wide panels; on tablet 2-up; on mobile a single stack). Each panel: image with navy scrim, division name at large weight, its sub-capability list in small type, and an `Explore` affordance.

Panel content:

| Division | Sub-capabilities | Link |
|---|---|---|
| Marine & Offshore | Offshore Marine Operations · Vessel Chartering · Marine Support · Journey Management | `/services/marine-offshore` |
| Aviation | Private Jet Services · Charter Services · Airline Services · Helicopter Services · Purchase & Sale of Helicopters | `/services/aviation` |
| Energy & Infrastructure | Pipeline Installation · Pipeline Maintenance · Industrial Infrastructure · Technical Services | `/services/energy-infrastructure` |
| Logistics & Haulage | Haulage Services · Equipment Transportation · Journey Management · Logistics Support | `/services/logistics-haulage` |
| Equipment & PPE | Equipment Supply · Personal Protective Equipment · Industrial Supplies · Marine Equipment | `/services/equipment-ppe` |
| Property & Investment | Property · Investment · Asset Opportunities | `/services/property-investment` |

Hover (desktop): image scales to ~1.04 and the scrim deepens, the sub-capability list slides up from a clipped state, and the `Explore` label's arrow translates. One coordinated transition, ~400ms, token easing. On touch devices the sub-capabilities are visible by default — never hover-only content on mobile. The whole panel is a single focusable link, not nested interactive elements.

**2c. About / company introduction** — split screen, image on one side running to the viewport edge (full-bleed on that side, not inset), content on the other.

- Eyebrow: `02 — About MFAV`
- H2: **Built Around Capability. Driven by Excellence.**
- Two to three short paragraphs: MFAV as an integrated services company operating across marine, offshore, aviation, logistics, energy, infrastructure and industrial sectors; how bringing these capabilities under one accountable partner reduces coordination risk on complex operations; safety, discipline and international operating standards as the constant across every division. Confident, plain, specific — no filler adjectives, no unverifiable claims about size or history.
- Link: **Discover MFAV →** `/about`
- Detail treatment: a vertical accent hairline down the left edge of the text column, the eyebrow numeral as a design element, and a small caption on the image (`[IMAGE CAPTION PLACEHOLDER]`). Optionally a subtle image reveal — a clip-path or mask wipe on scroll into view, once, ~700ms.

**2d. Statistics** — full-width band on navy (or a full-bleed image with a heavy navy scrim). Four items separated by hairline vertical rules, evenly spread; 2×2 on mobile.

| Numeral | Label |
|---|---|
| 10+ | Service Capabilities |
| 24/7 | Operational Support |
| 100% | Safety Commitment |
| Nigeria & Beyond | Operational Reach |

Numerals very large, light-to-medium weight, off-white, tabular figures. Labels small, uppercase, wide-tracked, muted. Numeric values count up once when the band scrolls into view — ~1.2s, ease-out, `IntersectionObserver`, runs once only, and static under reduced-motion. `Nigeria & Beyond` does not animate; it fades in. Reserve the layout space so no counter causes reflow. Understated — no boxes, no icons, no accent fills.

**QA gate:** Definition of Done, plus — measure the hero overlay contrast and report the actual ratio; confirm no capability content is hover-only on touch; confirm counters fire once and never on re-scroll; screenshot at 1440 and 390 and check the accent still reads as under 10% of the surface.

Report, then stop.

---

## PHASE 3 — Homepage part 2: featured services, industries, safety, projects, why MFAV, partners, CTA

**3a. Featured Services** — six priority capabilities, presented differently from the Capabilities grid so the page does not repeat itself. Use large photographic cards, near-square, hairline-bordered, with the description and CTA revealed on hover on desktop and always visible on mobile.

- Eyebrow: `03 — Featured Services`
- H2: `[AGENT-AUTHORED]` — write one authoritative line, no exclamation, no cleverness. Suggested: *Capabilities That Keep Operations Moving*. Log it in `COPY-FOR-REVIEW.md` for client sign-off.

Cards, in this order: Offshore Marine Operations · Vessel Chartering · Aviation & Charter Services · Pipeline Installation & Maintenance · Equipment & PPE Supply · Haulage & Logistics. Each gets a one-to-two-sentence description grounded in operational reality — what it is and what it enables — plus a `Learn more →` link to the parent division page. Write these; keep every one factual and non-boastful.

**3b. Industries We Serve** — eyebrow `04 — Industries`, H2 **Industries We Serve**. Clean grid (4 across desktop, 2 tablet, 2 mobile). Oil & Gas · Maritime · Energy · Aviation · Construction · Infrastructure · Logistics · Industrial Operations. Each tile: hairline border, industry name, one short line of relevance, a minimal abstract industrial mark (custom inline SVG — a geometric line motif, not a downloaded icon set), and an accent hairline that draws in on hover. Restrained; this is a scannable section, not a showpiece.

**3c. Safety & Operational Excellence** — the most serious-feeling section on the page. Full-bleed industrial or offshore image with heavy navy treatment, content in a single strong column or offset split.

- Eyebrow: `05 — Safety`
- H2: **Safety at Every Level of Operation**
- Copy covering, as short scannable points with brief supporting lines: a safety-first culture; operational discipline; regulatory compliance; risk management; quality assurance; environmental responsibility. Describe commitment and process only — **no certification numbers, no standards claims, no statistics** unless I supply them.
- CTA: **Our Commitment to Safety** → `/about#safety`
- Tone: sober, declarative, no decoration. This section earns trust or loses it.

**3d. Projects / Operations** — editorial showcase.

- Eyebrow: `06 — Projects`
- H2: **Experience in Motion**
- Cards carrying: image · title · sector `Tag` · location · short description. Categories to represent: Marine Operations · Offshore Support · Logistics · Infrastructure · Equipment Supply.
- **Every card is explicit placeholder content** — titles like `[PROJECT TITLE PLACEHOLDER]`, locations like `[LOCATION PLACEHOLDER]`, and a visible note that project details are illustrative pending client input. Invent nothing.
- Layout: a large editorial grid, or a horizontal scroll rail with real drag/keyboard support, snap points, a thin progress rule, and prev/next controls. If you build the rail: no auto-play, arrow-key operable, `overflow-x` scoped so the page never scrolls sideways, and it must degrade to a vertical stack on mobile.
- Link: **View All Projects →** `/projects`

**3e. Why MFAV** — eyebrow `07 — Why MFAV`, H2 `[AGENT-AUTHORED]` (suggested: *Why MFAV*, or a short authoritative alternative — log it for sign-off). Six differentiators, three across on desktop. Each: a numeral or minimal abstract mark, a bold short heading, one line beneath. Use this copy exactly:

| Heading | Line |
|---|---|
| Integrated Capabilities | Multiple services under one trusted partner. |
| Operational Reliability | Solutions designed around continuity and efficiency. |
| Safety First | Safety embedded into every operation. |
| Industry Expertise | Practical knowledge across complex operational environments. |
| Responsive Support | Reliable support for time-sensitive requirements. |
| Quality & Compliance | Professional standards across our services. |

Separate with hairlines rather than cards. Off-white band. No boxes, no shadows.

**3f. Partners / Clients** — heading **Trusted to Support Critical Operations**. A single restrained row (or two) of **generic grayscale placeholder marks** — abstract geometric wordmark shapes you generate as inline SVG, at uniform optical weight, low opacity, no hover color. Add a small italic note that logos are placeholders. Do not name, imply, or resemble any real company.

**3g. Closing CTA** — full-width deep navy band, generous padding, high contrast, no image or a barely-visible dark texture.

- H2: **Let's Build the Right Solution for Your Operation.**
- Body: *Tell us what you need. Our team will work with you to develop the right solution.*
- Primary: **Start a Conversation** → `/contact`
- Secondary: **View Our Services** → `/services` (outline-on-dark)

**QA gate:** Definition of Done, plus — the homepage reads as one system, not eight stitched templates; scan for repeated layout patterns sitting adjacent to each other and vary them; confirm the rail (if built) never causes page-level horizontal scroll; confirm every project field is a labeled placeholder; total homepage weight and LCP reported.

Report, then stop.

---

## PHASE 4 — Service detail template + six division pages

Build **one** reusable, data-driven `ServiceDetail` template consumed by all six routes from a single content file (`src/content/services.ts` or equivalent) — no copy-pasted pages.

Template sections, in order:

1. **Hero** — division image, navy scrim, breadcrumb (`Home / Services / <Division>`), eyebrow with the division label, `h1` division name, one-sentence positioning line, primary CTA `Request a Consultation`.
2. **Overview** — two-column: a short authoritative summary on the left, and a key-facts list on the right (scope, typical engagement, sectors served, support model) using hairline-separated rows.
3. **Capabilities** — the division's sub-services as a clean list or 2-up grid, each with a one-line description. Content comes from the table in Phase 2b, expanded with real descriptive copy you write.
4. **Approach / Process** — a numbered horizontal or vertical sequence (Consultation → Assessment & Planning → Mobilisation → Execution → Monitoring & Reporting), tuned per division where it genuinely differs. Numerals as design elements, connected by a hairline.
5. **Benefits** — four to six short value points, hairline-separated, no icons-in-circles.
6. **Relevant Industries** — a filtered subset of the industry tiles from 3b, linking to `/industries`.
7. **Related Services** — two or three sibling divisions as compact cards.
8. **CTA band** — reuse the Phase 3g component with division-specific copy.

Write genuine, sector-literate copy for each of the six divisions. Marine & Offshore should read like it was written by someone who has stood on a deck; Aviation like someone who understands charter operations; Energy & Infrastructure like someone who knows pipeline work. Concrete and operational, never marketing fluff, and never a specific claim you cannot support.

**QA gate:** Definition of Done, plus — all six routes render from one template and one content source; each page has a unique `h1`, `<title>` and meta description; no lorem; every unverifiable specific is a marked placeholder.

Report, then stop.

---

## PHASE 5 — Inner pages: About, Services overview, Industries, Projects, Company, Contact

**5a. `/about`** — hero; company overview; Mission and Vision as a two-panel contrast block (navy / off-white); Values as a hairline-separated list with short definitions; **Leadership** as a placeholder grid (`[NAME PLACEHOLDER]` / `[ROLE PLACEHOLDER]` / neutral portrait placeholders at a uniform 4:5 ratio — invent no people); a **Safety** section at anchor `#safety` expanding Phase 3c into full detail on culture, compliance posture, risk management and environmental responsibility; **Certifications** as an explicitly empty, clearly-labeled placeholder block with a note that credentials will be supplied by the client — fabricate none. Close with the CTA band.

**5b. `/services`** — overview of all six divisions in a substantial editorial layout (alternating full-bleed split rows read more premium than another six-card grid). Each row: image, division name, positioning line, its sub-capability list, and a `View division →` link. Plus a short intro and the CTA band.

**5c. `/industries`** — hero; the eight sectors at greater depth than the homepage tiles, each with a paragraph on how MFAV's capabilities apply to it and links to the two or three relevant divisions; CTA band.

**5d. `/projects`** — portfolio interface: filter chips by sector (All · Marine Operations · Offshore Support · Logistics · Infrastructure · Equipment Supply) with an accessible active state, an editorial masonry-ish or 2/3-column grid of `ProjectCard`s, and an empty state for filters with no matches. **All content is labeled placeholder**, with a visible banner stating the portfolio is illustrative pending client content. Filtering is client-side, keyboard-operable, and reflected in the URL query string.

**5e. `/company`** — a group-level page distinct from `/about`: structure and divisions at a glance, operating model, governance and standards posture, HSE policy summary, careers teaser, and a downloadable company-profile slot (`[COMPANY PROFILE PDF PLACEHOLDER]`, disabled with a tooltip until supplied).

**5f. `/contact`** — the conversion page, and it must not feel like an afterthought.

- Two-column: form on the left (roughly 7 columns), contact information on the right (5 columns).
- Fields: Full Name* · Company · Email* · Phone · Service of Interest (select — the six divisions plus `General Enquiry`) · Message* · submit **Submit Enquiry**.
- Real validation: required-field and email-format checks, inline error messages tied to fields via `aria-describedby`, `aria-invalid`, error summary on submit, focus moved to the first invalid field. Loading state on submit, then a clear success panel and a distinct error state. Wire to a documented stub submit handler — do not integrate any third-party service without asking.
- Right column: address, phone, email, operating hours (all placeholders), a `[MAP EMBED PLACEHOLDER]` block at a fixed aspect ratio, and a short note on expected response time.
- Honeypot field plus a simple timing check for spam. No CAPTCHA.

**QA gate:** Definition of Done, plus — every page has unique metadata; the form is fully screen-reader-navigable and error states are announced; filters are keyboard-operable and URL-reflected; every placeholder across all pages is collected into a single `PLACEHOLDERS.md` checklist for the client.

Report, then stop.

---

## PHASE 6 — Motion system pass

Consolidate all animation into one documented system. No ad-hoc transitions left in components.

- **Tokens:** durations `120 / 200 / 320 / 500 / 700ms`; easings — standard `cubic-bezier(0.4, 0, 0.2, 1)`, entrance `cubic-bezier(0.16, 1, 0.3, 1)`, exit `cubic-bezier(0.4, 0, 1, 1)`. No spring, no bounce, no overshoot anywhere.
- **Section reveal:** a single reusable hook or component — `opacity 0→1` plus `translateY 16→0`, ~500ms entrance easing, triggered at ~15% visibility, **once**. Stagger children ~60ms, capped at six. Never animate a whole section as one heavy block, and never re-animate on scroll-back.
- **Image reveal:** scale 1.04→1.0 with a clip or mask wipe, ~700ms, once, on primary imagery only.
- **Hover:** image zoom to 1.04; card scrim deepen; button arrow +4px; link underline wipe from left; nav item accent marker. One coordinated transition per element, 200–400ms.
- **Header:** height, background and text color transition together over 200ms on the scroll threshold, with hysteresis so it cannot flicker at the boundary.
- **Counters:** as specified in 2d — once only, layout space reserved.
- **Page transitions:** a brief opacity-and-lift on route change, ~200ms in, ~120ms out. Never block interaction, never delay first paint.
- **Smooth scrolling:** `scroll-behavior: smooth` on anchor links only, plus correct `scroll-margin-top` to clear the fixed header. Never hijack the wheel. Never implement custom scroll physics or a scroll-jacking library.
- **Reduced motion:** one global rule that disables transform and opacity animation, sets all durations to `0.01ms`, disables counters and image reveals, and leaves every state change instant but complete. Verify by toggling the OS setting.
- **Budget:** animate only `transform` and `opacity`. Nothing animates `width`, `height`, `top`, `left`, or `box-shadow`. No layout thrash. Keep the main thread free — report anything that drops below 60fps on a mid-tier Android profile.

**QA gate:** record a full-page scroll at 1440 and at 390 and review it; the site should feel like an expensive corporate film, not a demo reel. If any single animation draws attention to itself, remove it.

Report, then stop.

---

## PHASE 7 — Responsive, accessibility, performance and final QA

**7a. Responsive sweep.** Walk every page at 1920 / 1440 / 1280 / 1024 / 834 / 768 / 430 / 375. Fix: any horizontal scroll; hero headlines that break awkwardly (set explicit mobile type steps, do not just scale down); split screens that must become stacks; the stats band at 2×2; grids collapsing 3→2→1; the project rail becoming a stack; tap targets under 44×44px; section padding that stays desktop-sized on mobile; images that lose their subject when cropped (set `object-position` per slot). Verify the mobile nav at the shortest viewport with the keyboard open.

**7b. Accessibility.** Run axe or Lighthouse a11y on every route and fix everything. Then verify by hand: full keyboard traversal of each page; skip-to-content link; focus visible everywhere and never trapped except in the intentional mobile-nav trap; landmark structure; heading order; `alt` text that describes each image's operational content (empty `alt` for purely decorative images); accessible names on icon-only controls; form labels and error associations; `aria-current` on the active nav item; contrast measured on every text-over-image instance.

**7c. Performance.** Lighthouse on `/` and one service page, mobile profile. Targets: Performance ≥ 90, Accessibility 100, Best Practices ≥ 95, SEO ≥ 95. Compress and correctly size all imagery, serve modern formats with fallbacks, code-split routes, subset and preload the font with `font-display: swap`, eliminate CLS from images and counters, keep LCP under 2.5s on a throttled mobile connection. Report the actual numbers — do not claim a pass without the report.

**7d. Consistency audit.** Grep for and eliminate: raw hex values; arbitrary Tailwind values; duplicated spacing constants; one-off font sizes; components that bypass `Container`/`Section`; inconsistent radii; stray shadows; any button not built from the `Button` primitive. Confirm every element in the A3 hard-ban list is absent.

**7e. Handover.** Produce:
- `README.md` — setup, structure, how to add a service or project, how to swap imagery.
- `DESIGN-SYSTEM.md` — every token, every component with its variants and states, and the layout rules.
- `IMAGES.md` — every image slot with subject direction and aspect ratio.
- `PLACEHOLDERS.md` — one consolidated checklist of every placeholder awaiting client content.
- `COPY-FOR-REVIEW.md` — every word you authored, by page and section, for client approval (per A7).
- A final honest self-assessment: which sections meet the premium international bar, which are merely competent, and the specific highest-leverage change for each of the weaker ones.

**Final gate — answer these plainly.** Would an offshore energy major's procurement team believe this company can hold a serious contract? Scrolling the homepage once without clicking, does a visitor get all five steps of the A6 narrative, in order? Does anything read as a template? Is the accent still under 10% of the surface? Is any claim on the site unverifiable? Is anything hover-only on touch? Are there any dead links? Where reality falls short of the brief, say so specifically instead of declaring done.

---

# SECTION C — STANDING RULES FOR EVERY REPLY

At the end of each phase, report in this shape:

1. **Built** — files added or changed, and what each does.
2. **Deviated** — anything you did differently from the brief, and why.
3. **Gaps** — missing tokens, missing content, unresolved decisions.
4. **Placeholders added** — every one, so they reach `PLACEHOLDERS.md`. Plus every string you authored, for `COPY-FOR-REVIEW.md`.
5. **QA results** — actual measured numbers, not assertions.
6. **Next** — what Phase N+1 will cover. Then stop and wait.

Never mark a phase complete with failing checks, unverified contrast, or partial implementation. Report the shortfall instead. Never add a dependency, invent a client fact, or claim a certification. Never introduce a color, size, or duration that is not a token.