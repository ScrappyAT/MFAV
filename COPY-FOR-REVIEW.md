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
