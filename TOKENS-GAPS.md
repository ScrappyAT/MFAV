# M-FAV — Phase 0 Token & Repo Audit

Generated during Phase 0 (audit only — no code changed). Reconciled directly against the files in this repo, not assumed.

---

## 1. Repo inventory

```
MFAV/
├── index.html                       # loads DM Sans + Roboto from Google Fonts
├── package.json                     # react, react-dom, vite, tailwindcss, lucide-react — no router, no motion lib
├── postcss.config.js                # tailwindcss + autoprefixer
├── tailwind.config.js                # only `colors` extended — no spacing/radius/shadow/fontSize/zIndex/duration tokens wired
├── vite.config.js                    # stock @vitejs/plugin-react, no aliasing
├── mfav design tokens.json           # 323KB raw Figma "Material Theme" export (source file, not consumed directly)
├── mfav design tokens.css            # 1498-line generated CSS: ~380 Material-3 color vars + a handful of spacing/typography vars (see §2)
├── src/
│   ├── main.jsx                      # ReactDOM root, no router provider
│   ├── App.jsx                       # single static page — mounts Header + 9 sections + Footer + 2 modals, no <Routes>
│   ├── index.css                     # imports tokens.css, then defines the ACTUAL curated --clr-* tokens the app uses, plus .mfav-container/.mfav-section/.btn-*/.industrial-card utility classes
│   └── components/
│       ├── Header.jsx (125L)         # fixed nav, scroll-triggered transparent→solid, mobile drawer — anchor links (#services etc.), no routes, no mega-menu, single-line image logo
│       ├── Hero.jsx (104L)           # centered layout, animate-bounce scroll cue, decorative dot-grid overlay
│       ├── WhoWeAre.jsx (83L)        # split-screen "About" equivalent
│       ├── Capabilities.jsx (125L)   # 6 equal-size division cards (no editorial asymmetry), reuses 2 images across 2 divisions
│       ├── KeyStats.jsx (60L)        # stats band — light background, teal/charcoal alternating numerals, font-mono
│       ├── FeaturedServices.jsx (198L) # includes a filter/tab UI not in the brief
│       ├── IndustriesWeServe.jsx (55L)
│       ├── SafetyExcellence.jsx (122L)
│       ├── ProjectsSection.jsx (105L) # uses brightness/contrast image filters, not a navy scrim
│       ├── WhyMfav.jsx (77L)
│       ├── ConsultationModal.jsx (182L) # the site's only "contact" surface today (modal, not /contact route)
│       ├── ServiceModal.jsx (95L)       # the site's only "service detail" surface today (modal, not /services/:slug)
│       └── Footer.jsx (135L)         # already contains fabricated phone/email + an unverified certification claim
├── public/assets/images/             # hero_offshore.svg, division_aviation.svg, division_equipment.svg, division_logistics.svg, division_property.svg, who_we_are_plant.svg, mfav_logo.png — only 4 of 6 divisions have a dedicated image; marine-offshore and energy-infrastructure currently reuse hero_offshore.svg and who_we_are_plant.svg
└── dist/                             # stale prior `vite build` output — not source, not gitignored (no git repo exists yet at all)
```

**Routing:** none. No `react-router-dom` (or any router) in `package.json`. `App.jsx` renders every section of the homepage in one static tree; all "navigation" is same-page `#anchor` scrolling. None of the seven routes in brief §A5 exist (`/about`, `/services`, `/services/:slug`, `/industries`, `/projects`, `/company`, `/contact`). This is the single largest structural gap and is squarely Phase 1c's job.

**Libraries:** `lucide-react` (icons) is the only UI-adjacent dependency beyond React/Vite/Tailwind — no animation library, no carousel, no UI kit. Nothing here needs an approval request yet; flagging now so Phase 1 knows the baseline is clean.

---

## 2. Token coverage table

| Design-law dimension | What A3 asks for | What actually exists | Verdict |
|---|---|---|---|
| **Color roles** | 5 roles: deep navy, charcoal, white, off-white/light-gray, blue accent (sparingly) | 18 curated `--clr-*` tokens in `src/index.css` (wired to Tailwind as `c-*`), *plus* ~380 unused Material-3 color vars in `mfav design tokens.css` | **Partial + conflict** — two accent hues (blue **and** teal) are fully wired end-to-end with their own `-bg`/`-ondark` variants; A3 sanctions exactly one. See §3. |
| **Type scale** | Hero H1 very large (leading 0.95–1.05), section H2 large, body 16–18px/1.6, eyebrow small/uppercase/wide-tracked, stat numerals very large/tabular | Font: **DM Sans**, loaded correctly (variable weight 100–1000, `display=swap`) ✓. No `fontSize` scale in `tailwind.config.js` — components use raw Tailwind defaults (`text-4xl`…`text-7xl`) plus two authored CSS classes (`.section-title` 36→56px responsive, `.section-description` 16.8px). No hero-specific step, no stat-numeral step, no tabular-figure setting anywhere. | **Gap** — no true token scale exists; sizing is ad hoc per component. |
| **Spacing scale** | ~120–180px desktop section padding | `.mfav-section` = 80px mobile → **112px** desktop (hard-coded in CSS, not a token). `mfav design tokens.css` has a leftover Material spacing primitive set (0/4/8/12/16/20/24/32px) that is **not wired into Tailwind at all** and tops out at 32px. | **Gap + shortfall** — 112px falls short of the 120px floor, and no token scale reaches section-rhythm sizes. |
| **Radii** | 0–4px max on cards/buttons | Buttons (`.btn-primary`/`.btn-secondary` in CSS) already use **4px** ✓. No radius scale in `tailwind.config.js`, so components reach for Tailwind's unconstrained defaults: `rounded-lg` (8px) and `rounded-full` on nearly every card, panel, badge, and image frame. One instance of `rounded-t-8` in `ServiceModal.jsx` isn't even a valid Tailwind class (dead CSS). | **Conflict** — buttons comply, everything else (cards, panels, the Capabilities grid, ProjectCards, the footer CTA box, WhoWeAre's image frame) exceeds the 4px ceiling. |
| **Shadows** | "Almost absent" — prefer a 1px border or tone shift | No shadow tokens. `shadow-md`/`shadow-lg`/`shadow-2xl` (Tailwind defaults) used throughout: Header's scrolled state, every card's hover state, modal, footer logo chip. | **Conflict** — directly contradicts "shadows almost absent." |
| **Motion durations/easings** | Tokens: 120/200/320/500/700ms; standard/entrance/exit cubic-béziers; no spring/bounce anywhere | No CSS custom properties for duration/easing. Hard-coded values cluster near the brief's intended scale (0.2s/0.25s/0.3s/0.5s/0.6s/0.7s) and `cubic-bezier(0.16,1,0.3,1)` (brief's exact "entrance" curve) is reused several places — encouraging, but not tokenized, and inconsistent (`ease` is also used raw in a few spots). `animate-bounce` (Tailwind's infinite bounce keyframe) drives the Hero's scroll-cue arrow. | **Gap + hard-ban conflict** — no tokens exist, and `animate-bounce` is exactly the "bouncy/springy easing" A3 bans. |
| **Reduced motion** | A global rule disabling transform/opacity animation under `prefers-reduced-motion: reduce` | **Absent entirely** — no such rule exists anywhere in `index.css`. | **Gap** (A8 compliance item, currently unmet). |
| **Breakpoints** | Renders cleanly at 1920/1440/1280/1024/834/768/430/375 | Tailwind defaults, unmodified: `sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536`. | **No gap** — 768/1024/1280 align exactly with the brief's QA widths; 834 and 430 sit inside existing `md`/`<sm` ranges, which is normal practice. Nothing to add here. |
| **Z-index layers** | A documented layering scale | No token scale. Ad hoc `z-0`/`z-10`/`z-50` in components, `z-index: 1000` hard-coded on `.modal-backdrop` in CSS. It doesn't currently collide, but nothing is named or documented. | **Gap** — works today, undocumented. |
| **Container widths** | ~1280–1440px content max-width | `.mfav-container` = **1320px**, with 24px→40px side gutters. | **No gap** — already inside the requested band. |

---

## 3. Gaps and conflicts, explicitly checked against the three flagged questions

**Does the palette ratio support "under 10% accent"? No.**
The token layer defines the blue accent twice over — `c-primary` (#3A5488, text/link weight) *and* `c-primary-bg` (#2C4678, fill weight) — and additionally wires a **second, undocumented accent hue**, teal (`c-teal` #186B53 / `c-teal-bg` #A5F2D4 / `c-ondark-teal` #89D6B8), with the same full `-bg`/`-ondark` treatment as the sanctioned blue. A3's palette table lists exactly one accent role; teal appears nowhere in it. In practice `c-primary-bg` is already used to **fill large surfaces** — the entire closing-CTA banner background in `Footer.jsx`, badge chips at 80% opacity on every Capabilities card, the Hero's top badge pill — which is the specific mistake A3 calls out ("the accent is a scalpel, not a paint roller"). Teal is layered on top of that for stat numerals, safety icons, and industry hover states. Between the two hues and the large-surface fills, the current build reads well over 10% accent, not under it.

Separately, the hero and card image overlays are implemented as raw `rgba(18,19,24,…)` gradients (a near-black charcoal, hand-written inline in `Hero.jsx`/`Capabilities.jsx`) rather than the navy token — so even the "dark overlay" isn't drawing from `c-primary-bg` at all right now. That's a second, independent conflict: the scrim color and the accent-fill color have drifted apart from each other and from the design law.

**Do the radii support the near-square rule (0–4px max)? Mostly no.**
The button primitives already comply (4px, hard-coded in CSS). Every other surface — Capabilities panels, ProjectCards, the WhoWeAre image frame, the footer CTA box, icon chips, badges — uses Tailwind's default `rounded-lg` (8px) or `rounded-full`, because no radius ceiling is wired into `tailwind.config.js` to stop them. `rounded-full` on small circular dots/avatar-style icons is a defensible exception (they're not "cards or buttons"), but on badges and image-adjacent elements it stacks in visually with the rest of the rounding and reads as a generally soft, boxed design — the opposite of the near-square, editorial direction A3 asks for.

**Does the spacing scale support ~120–180px desktop section padding? No, not yet.**
`.mfav-section` desktop padding is 112px (`7rem`), short of the 120px floor, and there's no token that reaches 120–180px at all — the one spacing primitive set that exists in `mfav design tokens.css` tops out at 32px and isn't even wired into Tailwind. This is a straightforward token-gap, not a conflict — nothing fights it, it just needs a new step added.

**Other conflicts worth naming now, since they touch the same law:**
- **Glassmorphism (hard-banned):** `backdrop-filter: blur(...)` appears repeatedly — Header's scrolled state, Hero's badge pill, Capabilities' badge chips, SafetyExcellence's stat callouts.
- **Decorative glow blob (hard-ban adjacent):** Footer's CTA box has an absolutely-positioned `blur-3xl` teal glow behind the copy — reads as the "gradient mesh as decoration" A3 explicitly rejects.
- **Bouncy motion (hard-banned):** `animate-bounce` on the Hero's scroll-down arrow.
- **Centered hero (hard-banned):** Hero content is `text-center`/`mx-auto`, not the left-aligned 7-of-12-column layout A3 §2a calls for.
- **Arbitrary values already in components (A2.3 violation today):** `leading-[1.1]` in `Hero.jsx`, `top-[68px]` in `Header.jsx`, `h-[420px]`/`h-[500px]` in `WhoWeAre.jsx`, `text-[11px]`/`max-w-[180px]` in `KeyStats.jsx`, `rounded-t-8` (invalid class) in `ServiceModal.jsx`. 21 raw hex values also exist, but all 21 are inside `src/index.css`'s token-definition block itself, which is the correct place for them — the ban is on hex/arbitrary values in *component* code, and component code is clean of raw hex today.
- **Fabricated content already present (A2.6/A2.7 violation today, not just a future risk):** `Footer.jsx` currently ships a real-looking phone number, a real-looking email address, and the unverified claim "Certified Industrial & Offshore Support Operator." None of this is marked as placeholder. This needs to be placeholder-ified in Phase 1, not carried forward.
- **Stat numerals colored with the accent (A3 §2d violation today):** `KeyStats.jsx` alternates `c-teal` and `c-on-surface` per numeral and sets them in `font-mono` — A3 is explicit that stat numerals are off-white-on-navy and never accent-colored, and a monospace face isn't in the type tokens at all.
- **Copy drift from the canonical section order (A6 §, not yet fixed):** none of the nine numbered eyebrows (`01 — Our Capabilities` … `07 — Why MFAV`) exist anywhere in the current build; eyebrows today read as short un-numbered labels ("OUR CAPABILITIES", "SECTORS", "PORTFOLIO", "VALUE PROPOSITION"), and several required H2s ("Built Around Capability. Driven by Excellence.", "Our Capabilities") are replaced with different, non-verbatim copy ("Engineered for Scale.", "Core Operational Divisions"). This is a content-authority issue for Phase 2/3, flagged here because it means the current build cannot be treated as "mostly there, just re-skin it" — the section content itself needs rewriting to the letter of A7.

---

## 4. Proposed new tokens (proposed only — not added yet)

All proposed in the existing `--clr-*` / kebab-case convention already established in `src/index.css`, extended into `tailwind.config.js` the same way color tokens already are (a plain value where Tailwind needs one, an `-rgb` companion only where an opacity modifier is genuinely needed).

**Color — resolve the two-accent conflict (needs your decision, see §5):**
```css
/* If teal is retired: */
--clr-scrim-rgb: 44 70 120;   /* = c-primary-bg, so overlay gradients pull from */
                              /* the token instead of a hand-written rgba(18,19,24,…) */

/* If teal is kept as the brief's one sanctioned "second hue" exception: */
/* no new token — just stop using c-primary-bg as a fill on large surfaces, */
/* and stop using c-teal on stat numerals / anything above icon-scale. */
```

**Typography** (`tailwind.config.js` → `theme.extend.fontSize`, value + line-height/letter-spacing/weight pairing):
```js
fontSize: {
  'hero':    ['4.5rem',  { lineHeight: '0.97', letterSpacing: '-0.02em', fontWeight: '700' }], // 72px desktop H1
  'hero-sm': ['2.75rem', { lineHeight: '1.05', letterSpacing: '-0.01em', fontWeight: '700' }], // 44px mobile H1
  'display': ['3.5rem',  { lineHeight: '1.1',  letterSpacing: '-0.01em', fontWeight: '600' }], // section H2 desktop (matches .section-title's existing 56px step)
  'stat':    ['4rem',    { lineHeight: '1',    fontVariantNumeric: 'tabular-nums', fontWeight: '500' }], // statistics numerals
  'eyebrow': ['0.75rem', { letterSpacing: '0.15em', fontWeight: '700' }], // codifies the existing .section-tag values
}
```

**Spacing** (`theme.extend.spacing`):
```js
spacing: {
  'section-sm': '5rem',    // 80px — mobile section padding (already the de facto value, now a token)
  'section':    '9rem',    // 144px — desktop section padding, mid-band of the 120–180px target
  'section-lg': '11.25rem',// 180px — upper band, for the Hero/closing-CTA bookends
}
```

**Radii** (`theme.extend.borderRadius`):
```js
borderRadius: {
  'token-sm': '2px', // tags/chips
  'token':    '4px', // the enforced ceiling for cards, buttons, panels, image frames
}
```
Intent: components stop reaching for `rounded-lg`/`rounded-xl` entirely; `rounded-full` stays available but is reserved for genuinely circular elements (status dots, avatar-style icons), never cards or buttons.

**Shadows** (`theme.extend.boxShadow`):
```js
boxShadow: {
  'token':       '0 1px 2px rgb(26 27 32 / 0.06)',  // the one "barely there" elevation, replacing shadow-md/lg
  'token-modal': '0 24px 48px rgb(26 27 32 / 0.24)', // the single legitimate exception: true overlays (modal/mega-menu)
}
```

**Motion** (new CSS custom properties in `src/index.css`, mirrored into `theme.extend.transitionDuration` / `transitionTimingFunction`):
```css
--dur-1: 120ms;  --dur-2: 200ms;  --dur-3: 320ms;  --dur-4: 500ms;  --dur-5: 700ms;
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
--ease-entrance: cubic-bezier(0.16, 1, 0.3, 1); /* already in informal use today — just formalize it */
--ease-exit:     cubic-bezier(0.4, 0, 1, 1);
```
Plus the one non-negotiable addition regardless of anything else in this file:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Z-index** (`theme.extend.zIndex`):
```js
zIndex: { header: '50', overlay: '900', modal: '1000', toast: '1100' }
```

**Container** — no change needed to the existing 1320px `.mfav-container`; optionally add a `content-lg` (1440px) variant later in Phase 5 for the wide editorial split-rows on `/services`, but nothing here blocks Phase 1.

---

## 5. Keep / extend / replace

**Keep as-is:**
- The `--clr-*` → `c-*` wiring pattern in `tailwind.config.js` (the `-rgb` companion trick for opacity modifiers) — this is correct and should be the template for every new token category above.
- DM Sans as the typeface, loaded with `display=swap`.
- `.mfav-container` at 1320px.
- The button primitives' existing 4px radius — it's already right; the gap is that nothing else follows its lead.
- Tailwind's default breakpoints — no evidence they need to change.
- The dependency set (`lucide-react` only) — clean, nothing to remove or flag.

**Extend:**
- `tailwind.config.js` — add the `fontSize`/`spacing`/`borderRadius`/`boxShadow`/`transitionDuration`/`transitionTimingFunction`/`zIndex` blocks proposed in §4, following the same pattern already used for colors.
- `src/index.css` — add the motion custom properties and the reduced-motion global rule.
- The surface/border color ladder (`c-bg` → `c-surface-lowest`, `c-border`/`c-border-hl`) is already more granular than the brief strictly asks for and works well for "alternating section bands" — keep the full ladder, no changes needed there.

**Replace / retire (with reasoning) — recommend, pending your approval:**
- **Remove `mfav design tokens.css`'s ~380 unused Material-3 color variables and the Roboto font import.** Nothing in the app references them (confirmed by search); they're 300+KB of dead CSS and an unused font family being downloaded on every page load for zero visual benefit. Recommend deleting the Material-theme block from the generated CSS and dropping `Roboto` from the Google Fonts URL in `index.html`, keeping only the curated `--clr-*` block this app actually uses.
- **Retire the teal accent, OR get explicit sign-off to keep it as the brief's one allowed "second hue."** I can't resolve this one myself — A3's palette table only lists a single blue accent, but the token layer and every component already assume two. Rather than silently deleting a token you may want, I'm flagging it as a decision (see the question below) rather than proposing its removal outright.
- **Replace the modal-based "contact"/"service detail" pattern with real routed pages in Phase 1/4/5**, per A5. `ConsultationModal.jsx` and `ServiceModal.jsx` aren't bad components on their own — they're reasonably well-built — but they're currently standing in for `/contact` and `/services/:slug`, which the brief treats as full pages with their own hero, breadcrumb, and metadata. Recommend keeping the modal *code* as a possible future micro-interaction (e.g., a quick-quote popover) but no longer treating it as the primary conversion path once real routes exist.
- **Rewrite `Footer.jsx`'s contact details and the "Certified Industrial & Offshore Support Operator" line as marked placeholders** — not a token issue, but it's a live A2.6/A2.7 violation sitting in the repo today and should be fixed at the start of Phase 1 rather than carried forward.

---

## Decision: teal accent — RETIRED

Resolved: single blue accent only, matching A3's palette table literally. `c-teal` / `c-teal-bg` / `c-ondark-teal` (and their Tailwind `c-teal`/`c-teal-bg` utilities) are to be removed in Phase 1. Every current teal usage — stat-numeral highlighting in `KeyStats.jsx`, safety icon accents in `SafetyExcellence.jsx`, industry hover-state in `IndustriesWeServe.jsx`, badge/icon accents in `WhyMfav.jsx` and `Capabilities.jsx` — moves to charcoal (`c-on`/`c-on-muted`) for neutral emphasis or to the single blue accent (`c-primary`/`c-primary-bg`) only where the existing accent-discipline rule already permits it (small rules, links, focus rings, eyebrow numerals — never stat numerals, never large fills). This closes the one open decision from §5; the rest of this document is approved-pending-implementation as written.
