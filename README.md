# M-FAV Offshore and Allied Services Limited — Website

Production marketing site for M-FAV Offshore and Allied Services Limited, a
diversified Nigerian integrated services group (marine/offshore, aviation,
energy & infrastructure, logistics & haulage, equipment & PPE, property &
investment). React 18 + Vite 5 + Tailwind CSS 3 + React Router 6.

This is the Phase 7 handover. Read alongside:

- [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md) — every token, every primitive, layout rules.
- [`IMAGES.md`](./IMAGES.md) — every image slot, its subject, aspect ratio and treatment.
- [`PLACEHOLDERS.md`](./PLACEHOLDERS.md) — every bracketed placeholder awaiting client content.
- [`COPY-FOR-REVIEW.md`](./COPY-FOR-REVIEW.md) — every agent-authored string, for sign-off.
- [`MFAV-AGENT-BRIEF.md`](./MFAV-AGENT-BRIEF.md) — the build brief this site was built against.
- [`TOKENS-GAPS.md`](./TOKENS-GAPS.md) — the Phase 0 token audit that set the design-token foundation.

## Setup

```bash
npm install
npm run dev        # http://localhost:5173, includes the dev-only /styleguide route
npm run build       # production build to dist/
npm run preview     # serve the dist/ build locally
npm run lint:tokens  # fails if raw hex / arbitrary Tailwind values sneak into src/
```

Node 18+ recommended (built and tested on Node 24). No environment variables
are required — there is no backend. The contact form's submit handler
(`stubSubmitEnquiry` in `src/pages/Contact.jsx`) only logs to the console;
see "Wiring the contact form to a real backend" below before launch.

## Structure

```
src/
├── App.jsx                  # <Routes> — every route past "/" is React.lazy-loaded
├── main.jsx                 # ReactDOM root + <BrowserRouter>
├── index.css                # design tokens (CSS custom properties) + global rules
├── content/                 # data files — the single source of truth per content type
│   ├── divisions.js          #   the six service divisions + top nav links
│   ├── services.js           #   full ServiceDetail content, keyed by slug
│   └── industries.jsx        #   the eight industry sectors
├── hooks/
│   ├── useInView.js           #   IntersectionObserver + the section-reveal class helper
│   └── useDocumentMeta.js     #   sets <title>/meta description per route
├── components/
│   ├── layout/                #   Header, Footer, Layout (route shell), Logo, PageTransition
│   ├── ui/                    #   every primitive — Button, Section, Container, cards, form fields…
│   └── *.jsx                  #   homepage-only sections (Hero, Capabilities, KeyStats, …)
└── pages/                    # one file per route (see src/App.jsx for the route table)
```

Routes (`src/App.jsx`): `/` · `/about` · `/services` · `/services/:slug` ·
`/industries` · `/projects` · `/company` · `/contact` · `/styleguide`
(dev-only, stripped from production via `import.meta.env.DEV`) · `*` → `NotFound`.

## How to add a service (division)

Everything about a division flows from two files — there is no copy-pasted
per-division page.

1. **`src/content/divisions.js`** — add an entry to the `DIVISIONS` array:
   `id` (this becomes the URL slug), `name`, `blurb` (one-line descriptor —
   shown on Company.jsx's division grid and folded into ServiceDetail's meta
   description), `subCapabilities` (array of strings — shown on the homepage
   Capabilities panel and the division's own detail page).
2. **`src/content/services.js`** — add a matching entry to `SERVICES`, keyed
   by the same `id`: `positioning` (one-sentence hero line), `image` +
   `graded` (see IMAGES.md), `overview`, `keyFacts` (label/value pairs),
   `capabilities` (name/description pairs — usually the same names as
   `subCapabilities` above, expanded), `process` (ordered steps), `benefits`
   (array of strings), and any related-industries/related-services data the
   template reads (check `src/pages/ServiceDetail.jsx` for the exact shape
   it destructures).
3. **`src/components/Capabilities.jsx`** — add the new division's image to
   `IMAGE_BY_DIVISION` and a grid span to `SPAN_BY_DIVISION` (any Tailwind
   `lg:col-span-*` against the 6-wide desktop grid; the six existing spans
   sum to 12 across two rows — rebalance if you're adding a seventh).
4. `src/pages/Services.jsx` and `src/pages/ServiceDetail.jsx` read from
   these two files automatically — no route wiring needed since
   `/services/:slug` is already generic.
5. If the division needs a footer link, it's automatic too —
   `src/components/layout/Footer.jsx` maps `DIVISIONS` directly.

## How to add a project (portfolio card)

Projects are placeholder data today (see `PLACEHOLDERS.md`). To add one:

- Homepage teaser: `src/components/ProjectsSection.jsx` → `PROJECTS` array.
- Full portfolio: `src/pages/Projects.jsx` → `PROJECTS` array (note this is a
  **separate** array from the homepage teaser — they're allowed to show
  different illustrative sets). Each entry needs `sectorSlug` matching one
  of `SECTORS` in the same file so the filter chips pick it up.
- Once real project content exists, replace the `title`/`location` props
  passed to `ProjectCard` (currently hardcoded to
  `[PROJECT TITLE PLACEHOLDER]` / `[LOCATION PLACEHOLDER]` in both files) and
  remove the "illustrative portfolio" banner copy.

## How to swap the logo or imagery

**Logo:** `src/components/layout/Logo.jsx` renders two PNGs — the client's
official full-color lockup, wordmark baked in —
`public/assets/images/mfav_logo.png` (light surfaces) and
`mfav_logo_ondark.png` (same artwork, wordmark recolored near-white for the
navy footer). To swap the mark: replace both PNGs (keep them the same
intrinsic aspect ratio or update the `width`/`height` props in `Logo.jsx` to
match, so the browser doesn't reflow while the image loads). The favicon
(`index.html`'s `<link rel="icon">`, plus `favicon.ico` and
`apple-touch-icon.png`) is a separate icon-only crop of the same artwork —
update all three if the icon changes.

**Other imagery:** every image slot, its file, its intended real-world
subject and its aspect ratio is catalogued in `IMAGES.md`. In short: drop a
same-aspect-ratio replacement into `public/assets/images/` under the same
filename and nothing else needs to change, since every component references
images by path/prop rather than hardcoding dimensions beyond the documented
aspect ratio. If a new file name is used, update the reference in the
component or content file listed in `IMAGES.md`'s "Used in" column.
Photography that runs warm should get the `.grade-cool` + `.grade-cool-tint`
treatment (see `src/index.css`, and `IMAGES.md`'s "Treatment" section) to
match the site's cool-toned direction — pass `graded` where the component
already supports it (`Hero`, `DivisionPanel`, `ServiceCard`, `ProjectCard`).

## Services nav item

"Services" in the header (`src/components/layout/Header.jsx`, both the
desktop bar and the mobile full-screen overlay) is a plain link to
`/services`, exactly like every other nav item — no flyout/dropdown. A6/§1c
originally specified a mega-menu here; one was built in an earlier pass and
then deliberately removed by client decision, back to a plain link. If
that's revisited later, `DIVISIONS[].blurb` (`content/divisions.js`) is
already written with a mega-menu-appropriate one-line descriptor per
division and is still live elsewhere (Company.jsx's division grid,
ServiceDetail's meta description).

## Wiring the contact form to a real backend

`src/pages/Contact.jsx` validates and submits to `stubSubmitEnquiry`, a
documented stub that logs to the console and resolves after 900ms — no
backend or third-party service is called (per the build brief, no
integration was added without an explicit decision). To go live, replace the
body of `stubSubmitEnquiry` with a real `fetch`/API call and keep its
signature (`(payload) => Promise`) so the surrounding submit/loading/error
state logic doesn't need to change.

## Design-token discipline

`npm run lint:tokens` (`scripts/check-tokens.mjs`) greps `src/` for raw hex
values and arbitrary Tailwind bracket syntax (`text-[#...]`, `p-[13px]`) in
component code and fails the build if it finds any outside the two places
they're allowed: `src/index.css`'s token-definition block and
`tailwind.config.js`. Run it before committing; CI should call it too. See
`DESIGN-SYSTEM.md` for the full token catalogue and the reasoning behind the
`-rgb` companion-variable pattern.

## What's not real yet

This is a front-end build with no backend. Nothing on the site invents a
real client, contract, certification, staff member or figure — every
unverifiable specific is either a bracketed placeholder or omitted entirely.
See `PLACEHOLDERS.md` for the full list and `COPY-FOR-REVIEW.md` for every
string the agent authored pending client sign-off.
