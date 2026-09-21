# CONTENT-COVERAGE.md — Pass 0 Audit

Maps every section of `COPY-APPROVED.md` (the client-approved deck — see the
note on file identity below) to its current state in the live build.

**Status key**
- **Present** — copy exists and already matches the deck (verbatim or close enough that Pass 1–5 need only touch the name/motto).
- **Partial** — the slot/section exists but the wording differs from the deck, or only part of the deck's content for that slot is implemented.
- **Missing** — the slot exists in the component tree but currently renders nothing for this content (e.g. an intro paragraph that isn't there yet).
- **Not built** — there is no component/element to hold this content at all.

---

## 0. File identity — read this first

`CONTENT-UPDATE-BRIEF.md` (§A1, §Pass 0 step 1) refers to the deck as
**`COPY-FOR-REVIEW.md`**. That filename already exists in this repo, but it
is **not** the deck — it's the Phase 7 consolidated log of the *previous*
agent-authored copy (confirmed by reading it: it opens "Every word below is
agent-authored... not final until the client approves or replaces it," and
its content matches the *old* build almost line for line). Treating it as
the source of truth would mean re-applying superseded copy.

Per the task instructions, **`COPY-APPROVED.md`** is the actual deck this
session applies. It is self-consistent with that role (versioned legend,
`[CLIENT-APPROVED]`/`[DRAFT]`/`[PLACEHOLDER]`/`[VERIFY]` tags, organised by
route to match the brief's A7). All coverage below maps against
`COPY-APPROVED.md`. `COPY-FOR-REVIEW.md` is treated as obsolete — Pass 6
already requires confirming no copy from it survives.

---

## 1. Routing & where copy lives today

All eight brief routes are built and wired in `src/App.jsx`, plus a
dev-only `/styleguide` (excluded from production). No route is missing.

| Route | Page file | Copy location |
|---|---|---|
| `/` | `pages/Home.jsx` (composes 10 section components) | Inline JSX in each `components/*.jsx` section file, plus `content/divisions.js`, `content/industries.jsx` |
| `/about` | `pages/About.jsx` | Entirely inline JSX (`VALUES`, `LEADERSHIP_SLOTS`, `SAFETY_DETAIL` arrays + hardcoded hero/overview/mission/vision/certifications text) |
| `/services` | `pages/Services.jsx` | Hero text inline; body sourced from `content/divisions.js` + `content/services.js` |
| `/services/:slug` | `pages/ServiceDetail.jsx` | Entirely from `content/services.js` (`SERVICES` object) — one template, one source, as required |
| `/industries` | `pages/Industries.jsx` | Hero inline; tile/detail content from `content/industries.jsx` |
| `/company` | `pages/Company.jsx` | Entirely inline JSX |
| `/contact` | `pages/Contact.jsx` | Entirely inline JSX (validation messages, panel copy, field labels) |
| 404 | `pages/NotFound.jsx` | Entirely inline JSX |
| App shell | `layout/Header.jsx`, `layout/Footer.jsx`, `layout/Logo.jsx` | Inline JSX; nav labels from `content/divisions.js` (`NAV_LINKS`) |
| Metadata | `hooks/useDocumentMeta.js` + per-page `useDocumentMeta(...)` calls + `index.html` static fallback | `SITE_NAME` constant in the hook; title/description strings inline per page |

**Two duplicated data sets that must become one** (A4 "one content source per page or collection"):
- **Moot now** - both project placeholder arrays were deleted along with the `/projects` page and its homepage teaser (commit bbb53ae). There is no duplicated project data set left to reconcile.
- `content/divisions.js`'s `blurb` field (one-liner per division) is reused as both Company.jsx's division-grid description *and* ServiceDetail's meta-description input, but its wording doesn't match the deck's "Services mega-menu descriptors" (§1) — see §4 below on where that text is even supposed to go.

---

## 2. Section-by-section coverage

### Global strings (deck §1)

| Item | Status | Note |
|---|---|---|
| Brand lockup image | **Present** | `mfav_logo.png`/`_ondark.png` already have the *new* wordmark (`M-FAV` / `OFFSHORE AND ALLIED SERVICES LTD`) baked into the artwork per `Logo.jsx`'s own comment — this predates this session. |
| Logo `alt` text | **Partial** | Reads `"MFAV Offshore and Allied Services Ltd"` — missing the hyphen and using `Ltd` outside the lockup context. Needs `"M-FAV Offshore and Allied Services Limited"` (or a lockup-describing alt — see Pass 1 note). |
| Footer brand line | **Present** | Text is byte-identical to the deck already: *"Integrated marine, offshore, aviation, logistics and industrial solutions."* No change needed to this line itself. |
| Nav labels | **Present** | Identical to deck. |
| Header CTA | **Present** | "Request a Consultation" — identical. |
| Services mega-menu descriptors | **Not built** | See §4, cross-cutting issue #1. |
| Copyright line | **Partial** | Renders `"© 2026 MFAV Offshore and Allied Resources. All Rights Reserved."` — needs the new name. No RC-number line exists at all yet (deck adds one as a placeholder). |
| Tagline (OG/meta fallback) | **Missing** | Neither the profile tagline nor the broader `[DRAFT]` alternative appears anywhere; current OG copy is different, agent-written text. |
| Motto "Delivering Excellence at All Times" | **Missing** | Not present anywhere. Old motto "Safety at All Times" is also not present anywhere in source (confirmed by repo-wide search) — so this is net-new content, not a replacement in the mechanical sense. |

### Page metadata (deck §2)

**Partial**, structurally. The mechanism exists (`useDocumentMeta` hook + `index.html` static fallback) but every title/description string differs from the deck, and the *pattern* differs: the current hook renders `"<title> | MFAV Offshore & Allied Resources"`; the deck specifies full literal titles like `"About Us — M-FAV"` with no auto-appended suffix. Applying the deck verbatim means changing how titles are assembled, not just the words — flagged as a Pass 1 decision, not a layout break.

### 3. Homepage — all eleven sections (deck §3)

| § | Section | Status | Note |
|---|---|---|---|
| 3.1 | Hero | **Partial** | H1 and both CTAs are already byte-identical to the deck. Only the body paragraph needs the name swap (see §5, layout-risk note). |
| 3.2 | Our Capabilities | **Partial** | Heading/supporting line present (old name in supporting line only). Sub-capability table matches deck exactly, verbatim. Panel **accessible names** (`"Explore Marine & Offshore"`, etc.) are **not built** — `DivisionPanel` has no `aria-label`; today's accessible name is whatever the visible heading + sub-capability list resolve to. |
| 3.3 | About / company intro | **Partial** | Heading present. All three body paragraphs are different wording from the deck's new draft (not a name-swap — a full rewrite). Link label needs `MFAV`→`M-FAV`. |
| 3.4 | Statistics | **Present** | Exact match to the deck's table; deck explicitly says don't adopt the alternate stat, so no change at all needed here. |
| 3.5 | Featured Services | **Partial** | H2 happens to already match the deck's suggested line verbatim (lucky coincidence). All six card descriptions are different wording and need full replacement. |
| 3.6 | Industries We Serve | **Partial** | Heading matches. All eight one-line relevance strings differ from the deck's new wording. |
| 3.7 | Safety & Operational Excellence | **Partial** | Heading matches. Deck adds a new intro paragraph — **missing** entirely today. All six point headings/bodies are different wording (deck rewrote these to stop leaning on the old motto). |
| 3.8 | Projects / Operations | **REMOVED** | The `/projects` page and its homepage teaser were deleted together (commit bbb53ae); no projects page remains to cover. |
| 3.9 | Why M-FAV | **Partial** | The six differentiators (heading + line) are already **verbatim-identical** to the deck — no change needed there. Only the section H2 itself (`"Why MFAV"`) needs the hyphen. |
| 3.10 | Partners / Clients | **Partial** | H2 matches. The unattributed supporting paragraph required by A6.3 is **missing** (only the placeholder-marks note is there today, with different wording than the deck's suggested note). |
| 3.11 | Closing CTA | **Present** | Heading, body and both button labels are already byte-identical to the deck. No change needed. |

### 4. `/about` (deck §4)

**Partial**, and the least-aligned inner page. Hero H1 changes from *"About MFAV"* (10 characters) to *"An Integrated Partner for Demanding Operations"* (48 characters) — see layout-risk flag below. Mission/Vision panels currently carry different (older) statements than the deck's `[VERIFY]` profile-sourced Mission/Vision/corporate-aim text. Values list exists but as 5 different values with different wording (current: Safety, Integrity, Excellence, Accountability, Collaboration) vs. the deck's 6 (adds Operational Excellence, Local Capability, Sustainability; drops Excellence/Collaboration as named) — a content replacement, not a slot-count problem since it's a `dl` that maps over an array. Leadership section present with 4 placeholder slots (deck doesn't specify a count but recommends 4 roles — matches). Safety section present but wording fully superseded by deck §4.5 (culture/compliance/risk/quality/environmental — deck's version adds a "Quality Assurance" point not present today, and an intro paragraph not present today). Certifications section present as an empty labelled placeholder — deck's version is similar in spirit but has different exact wording and explicitly requires the `[VERIFY: NIMASA · Nigerian Navy · ...]` list to *not* be added without confirmation (currently the page has no such list at all, which is compliant, just needs the new wording).

### 5. `/services` overview (deck §5)

**Partial.** H1 and structure (alternating full-bleed rows, sourced from `DIVISIONS`+`SERVICES`) already match the brief's intent exactly. Intro paragraph and all six positioning lines are different wording from the deck and need replacement. Row link label "View division" matches.

### 6. Service detail pages, all six (deck §6)

**Partial — largest content-volume gap.** The template (`ServiceDetail.jsx`) is correctly built as one reusable template over one content source (`content/services.js`), satisfying the structural requirement. But every field inside `SERVICES` for all six divisions is agent-authored placeholder-grade copy from the original build, not the deck's client-informed copy (which references real vessel classes — FSIV/AHV/PSV vs. the current OSV/AHTS/tugs — Portwest distributorship, DP2 vessels, specific process-step renames for three divisions, etc.). This is a full-file rewrite of `services.js`, not a partial edit. Divisions' `subCapabilities` names (in `divisions.js`) already match the deck's capability names, so those stay. Note: three divisions (Marine & Offshore, Logistics & Haulage, Equipment & PPE) get **division-specific process step names** per the deck — current `services.js` uses the same 5-step generic sequence for all six divisions today, so this is also a new distinction to introduce, not present at all.

### 7. `/industries` (deck §7)

**Partial.** Structure matches (hero + full-depth sector list with 2–3 linked divisions each). Hero H1 matches, hero sub-line differs slightly (cosmetic — current "Eight sectors, one set of capabilities..." vs deck's intro elsewhere). All eight `detail` paragraphs in `content/industries.jsx` are different wording from the deck's new `[DRAFT]` paragraphs (which reference more specific service names — FSIVs/AHVs/PSVs, DP2, etc., consistent with the service-page rewrite).

### 8. `/projects` (deck 8) - **REMOVED**

The `/projects` page and its homepage teaser were deleted together (commit bbb53ae). Nothing on this page remains to cover.

### 9. `/company` (deck §9)

**Partial.** H1 changes from the full company name to *"The Company"* (shorter — no layout risk). Structure/divisions-at-a-glance section already sources from `DIVISIONS` correctly (just needs `blurb` text updated — see §4/cross-cutting below). Operating model, Governance & Standards, HSE policy summary sections all exist but with materially different wording than deck §9.2–9.4 (e.g. deck's HSE summary explicitly ties the section to the new motto — "Delivering Excellence at All Times sets the standard..." — which requires the motto to exist as global content first). Careers section present at `#careers` anchor with placeholder email — deck wording differs (deck spells out expected hires and gives a `careers@` suggested address). **Company profile download section exists today and must be deleted outright** — deck §9.6 / Pass 5 instruction. This is a removal, correctly anticipated by the brief's own Pass 5, not a Pass 0 surprise.

### 10. `/contact` (deck §10)

**Partial.** Field set, required flags, and select options already match the deck exactly (six divisions + "General Enquiry"). Submit button label matches ("Submit Enquiry"). Validation message *wording* differs from the deck's exact strings (e.g. current "Enter your full name." vs. deck "Please enter your name."). The error-summary heading is currently static text ("Please fix the following before submitting:") — the deck requires a dynamically pluralized count ("There are 2 problems with this form"), which is a small logic change to the existing `hasErrors`/`errors` state, not a structural one. Success and error panel copy differ substantially in wording from the deck's versions. Contact-info column and response-time note are present as placeholders already, compatible with deck §10.2's placeholder framing.

### 11. Footer (deck §11)

**Partial.** Structure (5-column grid: brand/services/company/contact) already matches deck §11.2 exactly, including the four existing Company links. The deck's "consider adding Company → `/company` and Industries → `/industries`" is an *open suggestion*, not a firm instruction — flagged as a Pass 1 decision rather than an automatic change. Contact column, copyright line and Privacy/Terms handling covered above and in §12 below.

### 12. 404 (deck §12)

**Partial.** Structure present with a heading, body and Return-Home CTA. Wording differs slightly (current "Page Not Found" / "The page you're looking for doesn't exist or has moved." vs deck's near-identical text) and the deck adds a **second CTA** ("View Our Services") that isn't present today — additive, no layout risk expected (the current single-button layout already has room; still worth a screenshot check per A3 scope boundary rather than assuming).

---

## 3. Files referencing the old name or the old motto

**Old motto ("Safety at All Times")**: not present anywhere in the codebase. Only appears in `COPY-APPROVED.md` and `CONTENT-UPDATE-BRIEF.md` themselves (both discussing the change). Zero remediation needed for the motto *removal* — it's purely an *addition* of the new motto.

**Old name** (`MFAV` without the hyphen, and/or `Allied Resources`) — confirmed by repo-wide search, excluding `node_modules` and the two brief documents:

| File | What's there |
|---|---|
| `index.html` | `<title>`, meta description, OG/Twitter tags, JSON-LD `Organization` name/description — all use "MFAV Offshore & Allied Resources(...)" |
| `src/hooks/useDocumentMeta.js` | `SITE_NAME` constant used as the title suffix on every route |
| `src/components/layout/Logo.jsx` | `alt` text only (the image asset itself is already updated) |
| `src/components/layout/Footer.jsx` | Copyright line |
| `src/components/Hero.jsx` | Hero body paragraph |
| `src/components/WhoWeAre.jsx` | Body paragraph + "Discover MFAV" link label |
| `src/components/Capabilities.jsx` | Supporting line |
| `src/components/WhyMfav.jsx` | Section heading ("Why MFAV") |
| `src/pages/Home.jsx` | Fallback meta description passed to `useDocumentMeta` |
| `src/pages/About.jsx` | H1, meta description, body copy (multiple instances) |
| `src/pages/Company.jsx` | H1 (full old name used as the page's H1), meta description |
| `src/pages/Contact.jsx` | Meta description |
| `src/pages/Services.jsx` | Meta description |
| `src/pages/Industries.jsx` | Meta description |
| `src/content/services.js` | Comment only (not rendered copy) — low priority but should be swept |
| `src/content/industries.jsx` | One `detail` paragraph (Oil & Gas) references "MFAV" |
| `src/components/ui/TextLink.jsx` | Comment only, and a demo string inside `Styleguide.jsx`'s usage example — dev-only route, excluded from production, out of scope for this content pass unless you want it swept too |
| `README.md`, `DESIGN-SYSTEM.md`, `TOKENS-GAPS.md` | Project docs, not site content — not in the deck's scope; flagging for awareness only, no action assumed |

No file mixes up the lowercase `mfavoffshore.com` domain with the brand name — the domain only appears in email addresses and URLs (`index.html`, `useDocumentMeta.js`, `public/robots.txt`, `public/sitemap.xml`), all lowercase and correctly left alone per A5's warning.

---

## 4. Cross-cutting conflicts — need a decision before Pass 1 proceeds

These aren't per-section wording gaps; they're places where the deck assumes something the current, already-approved build doesn't have — and building it would cross the A3 scope boundary ("you may not change... layout, component structure... routing").

**1. The Services mega-menu doesn't exist.** `CONTENT-UPDATE-BRIEF.md` Pass 1 says to apply "Services mega-menu descriptors from deck section 1" to the header. `Header.jsx` today has a flat "Services" link with no flyout at all — `divisions.js`'s own code comment confirms a mega-menu "was built, then deliberately removed per a later, approved reversal" of the original brief's §1c spec. There is nowhere in the current component tree to place these six descriptor lines. Building a flyout would be a component-structure change, which this session isn't authorised to make. **I'm treating this as blocked pending your call**: either (a) skip applying the mega-menu descriptors this session and leave them logged as unapplied in the Pass 1 report, or (b) you confirm reintroducing the flyout is in scope, which would need to be flagged back to whoever owns the original design decision.

**2. Eyebrow labels ("`01 — Our Capabilities`", "`02 — About M-FAV`", hero eyebrows like "About Us") have no component to render in.** `SectionHeader.jsx`'s own doc comment and `DESIGN-SYSTEM.md` §6 both confirm eyebrows were "retired site-wide" as an approved design decision after Phase 7 — there's no `Eyebrow.jsx` component left in the repo, and `SectionHeader` has no eyebrow prop. The deck (written seemingly without awareness of that retirement) attaches an eyebrow to nearly every homepage section and several hero sections. Applying them would mean reintroducing a retired component — a structural change. **My assumption unless told otherwise**: the eyebrow *numeral/label* is not applied (it was a presentational device, not client-approved text — nothing in the deck marks eyebrows `[CLIENT-APPROVED]`), and the heading/body text underneath each one is applied on its own, consistent with how the current build already works. Flagging this explicitly rather than deciding it silently.

**3. `divisions.js`'s `blurb` field needs a new home for its meaning, not just its wording.** It's currently reused for two different jobs (Company.jsx's division-grid descriptions, and ServiceDetail's meta-description input) and was originally written *for* the now-removed mega-menu. The deck's closest equivalent text is the "Services mega-menu descriptors" table in §1 — given issue #1 above, I'd propose using that text for `blurb` regardless of whether the mega-menu itself gets built, since it's the correct one-line divisional descriptor either way. Flagging as a Pass 1/3 decision rather than assuming it.

---

## 5. Layout-risk flags (per A3: report and stop, don't silently fix)

| Location | Old → New | Risk |
|---|---|---|
| `/about` H1 (`About.jsx`) | `"About MFAV"` (10 chars) → `"An Integrated Partner for Demanding Operations"` (48 chars) | Rendered at `text-hero-sm md:text-hero` inside a `max-w-3xl` container with no fixed height (the section grows with content), so it should reflow safely, but a ~5x length increase on the site's largest text step needs an actual 375px screenshot before sign-off, not an assumption. Flagging per A3 rather than deciding it's fine. |
| Hero body (`Hero.jsx`) | `"MFAV Offshore and Allied Resources"` (35 chars) → `"M-FAV Offshore and Allied Services Limited"` (43 chars) inside the full sentence | Low risk — it's a wrapping paragraph (`max-w-measure`) already handling multi-line body text, and the delta is small — but this sentence sits in the hero's fixed-position flex layout (`Hero.jsx`'s own comments describe careful `min-h-32`/`min-h-12` spacer tuning at 375×667), so any added line should still be re-checked at 375px. |
| Nav labels, footer labels, capability sub-lists | Unchanged | **No risk** — none of these strings differ in length between the old build and the deck, so Pass 0's specific concern here doesn't apply. |
| 404 page | Adds a second CTA button | Current layout only renders one `Button`; deck wants two (primary + "View Our Services" outline). Likely fine (the button row isn't width-constrained) but flagging since it's a net-new element, not a same-slot text swap. |
| `/company` H1 | Full legal name → `"The Company"` | Shrinks — no risk. |

No other heading in the deck grows meaningfully beyond its current length; the rest of the H1/H2 changes are lateral (similar length) or shrink.

---

## 6. Content files to create or restructure (A4)

New files:
- **`src/content/site.js`** (or similar) — global strings currently hardcoded across `Header.jsx`, `Footer.jsx`, `Logo.jsx`, `useDocumentMeta.js`, `index.html`: brand name forms, motto, footer brand line, copyright, RC placeholder, social list, tagline.
- **`src/content/metadata.js`** — per-route `<title>`/description pairs (14 routes), replacing the scattered inline strings passed to `useDocumentMeta()` in every page file, and replacing `useDocumentMeta.js`'s `SITE_NAME`-suffix pattern with the deck's literal per-route titles.
- **`src/content/about.js`** — About page's overview, mission/vision/corporate-aim, values, leadership intro, safety detail, certifications text (currently all inline JSX in `About.jsx`).
- **`src/content/company.js`** — Company page's operating-model, governance, HSE and careers copy (currently inline in `Company.jsx`).
- **`src/content/contact.js`** — validation messages, success/error panel copy, response-time note (currently inline in `Contact.jsx`).

Restructured (existing files, content replaced/extended in place, not renamed):
- `src/content/divisions.js` — `blurb` field rewritten (see §4 issue #3).
- `src/content/services.js` — full rewrite per division, plus new `processStepsOverride`-style field for the three divisions with division-specific step names.
- `src/content/industries.jsx` — `relevance` and `detail` fields rewritten.

Left as inline JSX (no restructure needed, just string edits in place) because the surrounding markup is genuinely page-specific and one-off: `Hero.jsx`, `WhoWeAre.jsx`, `SafetyExcellence.jsx` intro line, `WhyMfav.jsx` heading, `Partners.jsx`, `Services.jsx` hero/intro, `Industries.jsx` hero, `NotFound.jsx`, `Header.jsx`/`Footer.jsx` structural labels not already covered by `content/site.js`.
