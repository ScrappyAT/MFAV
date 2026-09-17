# PLACEHOLDERS.md

Rebuilt from scratch in Pass 6 (CONTENT-UPDATE-BRIEF.md) against every
placeholder A7 lists as still open, plus a fresh inventory of every
bracketed marker actually in the codebase today. Supersedes the previous
version in full — nothing here is carried over unverified.

Legend: 🔲 content placeholder (client to supply) · ❓ decision needed
(client to choose) · ✅ resolved.

---

## Global identity — resolved this session

- ✅ Company name and motto — M-FAV Offshore and Allied Services Limited;
  "Delivering Excellence at All Times."
- ✅ Registered office address — 26 Prof Kiumi Akingbehin Street, off
  Awkuzu Street, off Omorinre Johnson Street, Lekki 105102, Lagos,
  Nigeria. Live in the footer, the mobile nav, and `/contact`.
- ✅ General enquiry email — support@mfavoffshore.com is the single
  public address (no separate info@/enquiries@). Also the contact form's
  destination and the form's error-panel fallback address.
- ✅ RC number — deliberately not displayed, anywhere.

## Still outstanding — site-wide

- 🔲 **Operating hours** — `[OPERATING HOURS PLACEHOLDER]` (`content/site.js`), shown on `/contact`.
- 🔲 **Map embed** — `[MAP EMBED PLACEHOLDER]` (`content/site.js`), shown on `/contact`.
- 🔲 **Careers email** — `[CAREERS EMAIL PLACEHOLDER]` (`Company.jsx` `#careers`). The deck's own suggestion (`careers@mfavoffshore.com`) is not applied — A7 treats it as a suggestion, not a decision.
- 🔲 **Social media URLs** — LinkedIn, X, Facebook, Instagram icons render as inert, `aria-hidden` placeholders in the footer, no real destinations. Left exactly this way by explicit instruction this session; a decision is coming separately. Do not treat the inert state as a bug.
- ❓ **Privacy / Terms** — no `/privacy` or `/terms` route exists. Rendered as plain, non-interactive text in the footer (not links, not `href="#"`). Decision needed: write real pages, or confirm permanent omission.

## `/` (homepage)

- 🔲 **Image caption** — `WhoWeAre.jsx`: `[IMAGE CAPTION PLACEHOLDER — e.g. "Offshore support operations, Gulf of Guinea"]`.
- 🔲 **Projects teaser** — shows 5 of the 8 real projects (one per sector). Of those 5, 2 (2DHR Project Support, 20" EPWD Pipeline Project) still carry `[LOCATION PLACEHOLDER]`; all 5 carry `[DATE PLACEHOLDER]` (no dates supplied yet).
- ❓ **Partners** — unattributed fallback line in use (COPY-APPROVED.md A6.3); generic placeholder marks, captioned as not representing real clients. Decision needed: secure consent to name Shell, Chevron, Saipem, TotalEnergies and First E&P, or keep unattributed permanently.

## `/about`

- 🔲 **Leadership** (`#leadership`) — 4 slots, each `[NAME PLACEHOLDER n]` / `[ROLE PLACEHOLDER n]` / `[BIO PLACEHOLDER — 40 WORDS]`, neutral icon in place of a portrait. The deck's own "recommended roles" (Managing Director, etc.) are not pre-filled — A7 treats them as suggestions.
- 🔲 **Safety — regulatory registrations** (`#safety`) — rendered exactly as the deck gives it: "including `[VERIFY: NIMASA · Nigerian Navy · NUPRC/NMDPRA · NCDMB · NPA · NSCDC · FIRS]`." Needs confirmation of which registrations are actually current before publishing as fact.
- 🔲 **Certifications** (`#certifications`) — explicitly empty block: `[CERTIFICATION LOGOS AND REFERENCE NUMBERS PLACEHOLDER]`. No "ISO certified" or standards claim exists anywhere without this being resolved first.

## `/services` and `/industries`

- No bracketed placeholders on either page. All copy is deck-sourced.

## `/projects`

- 🔲 All eight real projects. Three (2DHR Project Support, 20" EPWD Pipeline Project, Offshore Seismic Survey Support) carry `[LOCATION PLACEHOLDER]`; all eight carry `[DATE PLACEHOLDER]`.
- ❓ Operator naming — where consent isn't secured, counterparties should read generically ("a deepwater operator", etc.) per the deck's own instruction; currently no operator is named anywhere on this page.

## Service detail pages (`/services/:slug`)

- 🔲 **Aviation** — Support model (`[PLACEHOLDER: e.g. 24/7 charter desk with defined response time]`), Operator basis (`[PLACEHOLDER: own AOC, partner operators, or brokerage — confirm which]`), and the scope of "Airline Services" (`[PLACEHOLDER: specify — ground handling, crew logistics, procurement, technical support]`). This division is intentionally thinner than the other five — not padded to match.
- 🔲 **Equipment & PPE** — three `[VERIFY]`-tagged facts: Portwest master-distributor status, in-house manufacturing facility, and ASTM standards posture. Sourced from the client's profile but not yet confirmed for publication.
- 🔲 **Property & Investment** — Typical engagement model (`[PLACEHOLDER: lease, sale, joint venture, or investment partnership — confirm which]`) and the Investment capability's actual model (`[PLACEHOLDER: describe the actual investment model — this line is intentionally non-specific until confirmed]`). If investment participation is offered to third parties, the deck flags this needs legal review before publication — not yet done.

## `/company`

- 🔲 Careers email (see site-wide, above).
- ✅ **Company profile download — removed, not a gap.** Deliberate deviation from `MFAV-AGENT-BRIEF.md` Phase 5e, per COPY-APPROVED.md §9.6 (Pass 5).

## `/contact`

- 🔲 Operating hours, map embed (see site-wide, above).
- ❓ **Submit handler is a documented stub** (`stubSubmitEnquiry` in `Contact.jsx`) — logs to the console only, no backend or third-party service wired. Needs an explicit decision on what to integrate before launch.

## Imagery

- 🔲 Every image slot site-wide remains placeholder photography or an abstract SVG illustration (see `IMAGES.md`). Only Marine & Offshore uses photo-style imagery today, reused from the homepage hero.
- 🔲 `robots.txt` / `sitemap.xml` reference a placeholder production domain (`https://www.mfavoffshore.com`) — update once the live domain is confirmed.

## Open decisions carried from the deck itself (COPY-APPROVED.md §0 / §13)

- Journey Management's canonical home is Logistics & Haulage (the deck's own decision, applied as such) — flagging in case you want to revisit it.
- The stats band keeps "10+ Service Capabilities," not the "10+ Years of Operations" alternative — per your explicit Pass 2 instruction; the years claim was never verified and is not used.
- The site tagline (COPY-APPROVED.md §1 — "Trusted Partner in Vessel Management and Safety Solutions" or its suggested broader alternative) is not applied anywhere; the deck presents it as an open choice rather than a decision, and every route's actual meta description instead uses the specific text given in §2.
- The Corporate Aim pull-quote (§4.2) is not placed anywhere — no pull-quote treatment exists on `/about`, and the deck frames it as optional.
- The `divisions.js` `blurb` field (used on `/company`'s division grid and folded into each service page's meta description) still carries its original agent-authored wording from before this session — you asked me to hold this pending your decision on whether it should instead use the deck's mega-menu descriptor text (§1). Still open.
