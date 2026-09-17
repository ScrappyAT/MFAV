# PLACEHOLDERS.md

Consolidated, final checklist of every placeholder on the site awaiting
real client content or a client decision — every phase, in one place, per
the Phase 7e handover requirement. Nothing listed here is invented fact —
each is a bracketed marker, an explicitly-labeled empty state, or an open
decision, per A2.6/A2.7.

Legend: 🔲 content placeholder (client to supply) · ❓ decision needed
(client to choose) · ✅ resolved during this build.

## Site-wide (Header / Footer — every page)

- ✅ **Registered office address — RESOLVED.** 26 Prof Kiumi Akingbehin
  Street, off Awkuzu Street, off Omorinre Johnson Street, Lekki 105102,
  Lagos, Nigeria. Live in the footer, the mobile nav, and `/contact`.
- ✅ **General enquiry email — RESOLVED.** There is no separate
  info@/enquiries@ address; support@mfavoffshore.com is the single public
  address and the contact form's destination.
- ✅ **RC number — RESOLVED: deliberately not displayed.** Not shown in
  the footer legal line or anywhere else.
- 🔲 Social icons (LinkedIn, X, Facebook, Instagram) — rendered as inert,
  `aria-hidden` placeholders pending real profile URLs (`Footer.jsx`).
  **Note for whoever wires them up:** once they become real links, give
  each one an explicit `aria-label` and confirm the 36px (`h-9 w-9`) box
  still clears the 44×44px touch-target guideline — it's fine inert
  (nothing to click), but not once it's a real control.
- ❓ `Privacy` / `Terms` — rendered as plain text, not links; no `/privacy`
  or `/terms` route exists in the approved IA (A5). Decision needed: add
  real pages, or omit permanently (`Footer.jsx`)
- ✅ **Header mega-menu — deliberately removed, not a gap.** A5/§1c's
  flyout mega-menu was built in an earlier pass, then explicitly reversed
  by client decision: "Services" is a plain link to `/services` again, on
  both the desktop bar and the mobile overlay, same as every other nav
  item. `DIVISIONS[].blurb` (the mega-menu's one-line descriptor content)
  stayed in `content/divisions.js` since Company.jsx's division grid and
  ServiceDetail's meta description still use it — see README.md's
  "Services nav item" section if this is revisited later.
- ✅ **Logo — resolved.** Client's official full-color lockup (wordmark
  baked in), two colorways (`mfav_logo.png` / `mfav_logo_ondark.png` — the
  latter only recolors the wordmark, for navy-footer legibility). See
  `IMAGES.md`.
- ✅ **`public/favicon.svg` — resolved.** Deleted (confirmed unreferenced
  first). The real favicon is `index.html`'s `<link rel="icon">` plus
  `favicon.ico`/`apple-touch-icon.png`, all cropped from the same artwork's
  icon mark — unaffected by the removal.
- ❓ **`robots.txt`/`sitemap.xml` domain — placeholder.** Added in Phase 7c
  to fix a failing SEO audit; both reference `https://www.mfavoffshore.com`
  as a placeholder domain since no real production domain was supplied.
  Update both files once the client confirms the live domain.

## Homepage (`/`)

- 🔲 `[IMAGE CAPTION PLACEHOLDER]` — About/company-intro image caption
  (`WhoWeAre.jsx`)
- ✅ Projects/Operations cards — real project titles and descriptions
  (COPY-APPROVED.md §3.8/A6.1), five of the eight sourced from
  `content/projects.js`, one per sector. 🔲 Two of the five shown still
  carry `[LOCATION PLACEHOLDER]`, and every card carries `[DATE
  PLACEHOLDER]` (dates not yet supplied).
- 🔲 Partners/Clients logos — generic placeholder marks, explicitly
  captioned as not representing real clients (`Partners.jsx`)

## `/about`

- 🔲 `[NAME PLACEHOLDER 1–4]`, `[ROLE PLACEHOLDER 1–4]` — Leadership grid;
  portraits are a neutral icon placeholder, not a photo (`About.jsx`
  `#leadership`)
- 🔲 `[CERTIFICATIONS PLACEHOLDER]` — Certifications section is
  intentionally empty pending client-supplied, verifiable credentials
  (`About.jsx` `#certifications`)
- 🔲 Mission, Vision, Values and Safety-detail copy are agent-authored —
  see `COPY-FOR-REVIEW.md`, not yet client-approved

## `/services`

- No bracketed placeholders — content is entirely sourced from the
  division and service data. Intro copy is agent-authored — see
  `COPY-FOR-REVIEW.md`.

## `/industries`

- No bracketed placeholders — the eight sector paragraphs are
  agent-authored operational copy (no invented client-specific facts) —
  see `COPY-FOR-REVIEW.md`.

## `/projects`

- ✅ All eight real projects (COPY-APPROVED.md §8/A6.1), same
  `content/projects.js` source as the homepage. 🔲 Three carry
  `[LOCATION PLACEHOLDER]`; every card carries `[DATE PLACEHOLDER]`.
- ✅ Illustrative-content banner — removed; real project content no
  longer needs it (A6.1).

## `/company`

- 🔲 `[CAREERS CONTENT PLACEHOLDER]` — careers teaser has no real open
  roles yet (`Company.jsx` `#careers`)
- 🔲 `[CAREERS EMAIL PLACEHOLDER]` — careers enquiry address
  (`Company.jsx` `#careers`)
- ✅ **Company profile download — removed, not a gap.** Client decision
  (COPY-APPROVED.md §9.6): the download slot is omitted entirely, not
  shipped as a disabled button. Deliberate deviation from
  `MFAV-AGENT-BRIEF.md` Phase 5e — see the Pass 5 report.
- 🔲 Structure/operating-model/governance/HSE-summary copy is
  agent-authored — see `COPY-FOR-REVIEW.md`

## `/contact`

- ✅ Office address, phone, general-enquiry email, and the form's
  error-panel fallback address — all resolved, see site-wide section
  above. Procurement enquiries use procurement@mfavoffshore.com, labelled
  separately in the info column.
- 🔲 `[OPERATING HOURS PLACEHOLDER]` — office hours
- 🔲 `[MAP EMBED PLACEHOLDER]` — fixed-aspect-ratio (16:9) block reserved
  for a real map embed (no third-party embed wired without approval, per
  A2.4)
- ✅ Response time — resolved with deck copy ("within one business day";
  urgent/operational matters by phone, 24/7), applied in the right column
  and the success panel.
- ❓ The submit handler is a documented **stub** (`stubSubmitEnquiry` in
  `Contact.jsx`) — logs to the console only. No backend or third-party
  form service is wired up; needs an explicit decision on what to
  integrate (see `README.md` → "Wiring the contact form to a real backend").

## Service detail pages (`/services/:slug`, ×6)

- No bracketed placeholders in the six division pages themselves; every
  unverifiable specific (certifications, client names, figures) was kept
  out entirely rather than placeholder-marked, per A2.6/A2.7. All
  capability/process/benefit copy is agent-authored — see
  `COPY-FOR-REVIEW.md`.
- 🔲 See `IMAGES.md` — only Marine & Offshore has photo-style imagery
  today (reused from the homepage hero); the other five divisions use
  abstract SVG placeholders, not photography.

## Imagery (see `IMAGES.md` for full detail)

- 🔲 Every image slot site-wide is placeholder photography or an abstract
  SVG illustration, pending real operational photography per the A4
  imagery direction.

## Copy

- 🔲 Every agent-authored string across every page — consolidated in
  `COPY-FOR-REVIEW.md`, organised by page/section, pending client
  approval or replacement (A7).
