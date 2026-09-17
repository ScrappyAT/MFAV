# M-FAV Design System

The single reference for every token and every reusable primitive in this
codebase. If a value isn't listed here, it isn't a token — don't use it in
component code (`npm run lint:tokens` enforces this for hex/arbitrary
values; the rest is discipline, checked in Phase 7d's consistency audit).

Live examples of every primitive in every state: run `npm run dev` and open
`/styleguide` (dev-only, excluded from the production bundle).

## 1. Color

Single accent hue (blue) per the brief's palette law — a second hue
("teal") existed early in the build and was retired in Phase 1; if you see
`teal` anywhere in a diff, that's a regression.

All colors are CSS custom properties in `src/index.css`, wired into
Tailwind as `c-*` utilities via `tailwind.config.js`. Each has a plain hex
form (`--clr-x`) for raw CSS/inline styles, and an `-rgb` triplet
companion (`--clr-x-rgb: R G B`) that Tailwind actually consumes via
`rgb(var(--clr-x-rgb) / <alpha-value>)` — **only the `-rgb` form supports
opacity modifiers** (`bg-c-primary-bg/70`); the plain hex vars can't take
one because Tailwind can't blend an alpha channel into an opaque hex
string. Adding a new color token means adding both forms.

| Token | Hex | Role |
|---|---|---|
| `c-bg` | `#faf9ff` | Default page background |
| `c-bg-alt` | `#f3f3fa` | Alternating section band, form field fill |
| `c-surface` | `#ffffff` | Card/panel surface |
| `c-surface-high` / `c-surface-highest` | `#eeedf4` / `#e2e2e9` | Raised surface steps |
| `c-surface-low` / `c-surface-lowest` | `#dad9e0` / `#ffffff` | Recessed surface steps (image placeholders) |
| `c-on` (`c-on-surface`) | `#1a1b20` | Primary body/heading text on light |
| `c-on-muted` / `c-muted` (alias) | `#44474f` | Secondary/muted text on light |
| `c-on-primary` | `#ffffff` | Text on the accent fill |
| `c-primary` | `#455e91` | Accent — links, focus rings, small rules, numbered list-item markers (process steps, differentiator cards) |
| `c-primary-bg` | `#2c4678` | Accent fill — buttons, navy sections/footer/CTA band |
| `c-border` / `c-border-hl` | `#c5c6d0` / `#757780` | Hairline border, high-contrast hairline |
| `c-ondark` | `#f1f0f7` | Text on navy/photo surfaces |
| `c-ondark-primary` | `#aec6ff` | Accent on navy/photo surfaces (active nav marker, focus outline on dark) |
| `c-scrim` | `#000000` | Photo overlay base (used only via opacity, e.g. `bg-c-scrim/70`) |
| `c-error` | `#ba1a1a` | Form validation only — never used as a decorative/brand color |

**Accent discipline (A3):** `c-primary`/`c-primary-bg` are a scalpel, not a
paint roller. They appear on: buttons, links, active-nav underline, focus
rings, hairline rules/dividers, numbered list-item markers (process steps,
differentiator cards), and the navy full-bleed bands that are load-bearing
brand surfaces (footer, CTA bands, stats band, mobile nav) — never as a
decorative fill on an otherwise-light section. Stat numerals are always
`c-ondark`/`c-on`, never the accent.

**Contrast:** every text-over-navy or text-over-scrim instance must clear
4.5:1 (3:1 for large text). Where a token color needs an opacity modifier
for a de-emphasized secondary line (`text-c-ondark/70` etc.), the
**minimum safe opacity against `c-primary-bg` (#2c4678) is 65%** — measured
during the Phase 7 audit (`/60` measured 4.10:1 and failed; `/70` measures
4.96:1). Don't drop below `/70` for body-weight text on navy without
re-measuring.

## 2. Typography

One typeface: **DM Sans** (variable, loaded via Google Fonts with
`display=swap`; weight axis narrowed to 400–800 and italic to 400-only in
Phase 7c — the actual range the app renders, see `index.html`).

| Token | Size | Line-height | Tracking | Weight | Used for |
|---|---|---|---|---|---|
| `text-hero` | 4.5rem (72px) | 0.97 | -0.02em | 700 | Homepage/hero H1, desktop |
| `text-hero-sm` | 2.75rem (44px) | 1.05 | -0.01em | 700 | Hero H1, mobile; secondary page H1, desktop |
| `text-display` | 3.5rem (56px) | 1.1 | -0.01em | 600 | Section H2, desktop; page H1, mobile |
| `text-display-sm` | 2.25rem (36px) | 1.15 | -0.01em | 600 | Section H2, mobile; sub-section H2 |
| `text-stat` | 4rem (64px) | 1 | — | 500, tabular-nums | Statistics numerals only |
| `text-eyebrow` | 0.75rem (12px) | — | 0.15em | 700 | Footer column headers, `Tag`/`Stat` labels, key-fact labels, numbered list-item markers (process steps, differentiator cards, industry index) — **not** a section-heading label; that pattern was retired, see §6 |
| `text-micro` | 0.6875rem (11px) | — | 0.08em | 600 | Tag labels, scroll-cue label |

Body copy uses Tailwind's default scale (`text-base`/`text-lg`) at the
inherited `line-height: 1.6` set on `body` — that's intentional per A3
("Body 16–18px, line-height ~1.6"), not a gap. Measure is capped with
`max-w-measure` (65ch).

Card-level headings (project/service/industry card titles, form
success/error headings) use `text-lg`/`text-xl font-bold` rather than a
dedicated token — there's no token step between `text-eyebrow` and
`text-display-sm` sized for a card title, and reusing the same raw step
consistently across every card type keeps it from reading as one-off. If a
sixth type step ever gets added, this is the gap it would fill.

There is also a large, currently-unused **`figma-*`** type scale in
`tailwind.config.js` (display/headline/title/body/label, ported from the
raw Figma export). Nothing in `src/` consumes it — it's dead weight kept
in case a future page wants to match the Figma spec literally, not part
of the live system. Don't reach for it by default; use the table above.

## 3. Spacing

| Token | Value | Used for |
|---|---|---|
| `py-section-sm` | 5rem (80px) | Section vertical padding, mobile (all `size`s) |
| `py-section` | 9rem (144px) | Section vertical padding, desktop (`Section size="md"`, the default) |
| `py-section-lg` | 11.25rem (180px) | Section vertical padding, desktop (`Section size="lg"`) |

These are never hand-applied — `<Section size="sm"|"md"|"lg">` (see §5)
owns them so no page hardcodes a `py-*` value for section rhythm. A
secondary `space-*` scale (4/8/12/16/20/24/32px, ported from Figma) exists
in `tailwind.config.js` for fine-grained gaps/padding inside components —
that one is in active use (card padding, form field gaps) via Tailwind's
own `gap-*`/`p-*` utilities at those pixel-equivalent steps.

## 4. Radius, shadow, motion, z-index

**Radius** — near-square per A3 (0–4px ceiling):
`rounded-token-sm` (2px, tags/chips) and `rounded-token` (4px, the
ceiling for cards/buttons/panels/image frames). Tailwind's own
`rounded-lg`/`xl`/`2xl`/`3xl` must never appear in component code — the
Phase 7 consistency grep confirmed zero instances. `rounded-full` is
reserved for genuinely circular elements (status dots).

**Shadow** — "almost absent" per A3: `shadow-token` (a single, barely-there
elevation) exists and is used exactly once, on the Header's scrolled
state, alongside a hairline border rather than instead of one.
`shadow-token-modal` exists for a true overlay (defined, not yet needed by
any current component). Tailwind's `shadow-md/lg/xl/2xl` must never
appear — confirmed zero instances.

**Motion** — durations `120/200/320/500/700ms` (`duration-120` …
`duration-700`) and three named easings:

| Token | Curve | Used for |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Hover states, header transition, color/opacity changes |
| `ease-entrance` | `cubic-bezier(0.16, 1, 0.3, 1)` | Section/image reveal-on-scroll, hero settle, mobile nav fade-in, page-transition-in |
| `ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Page-transition-out |

No spring/bounce/overshoot anywhere (`animate-bounce` grepped to zero).
Global rule in `index.css`: `@media (prefers-reduced-motion: reduce)`
collapses every animation/transition duration **and delay** to `0.01ms`
and forces `scroll-behavior: auto` — one rule, covers every current and
future animated element site-wide.

Motion budget: animate only `transform` and `opacity` (the one documented
exception is `.hover-reveal`'s `grid-template-rows`, chosen specifically
*because* `max-height` — the more obvious approach — is a banned
layout-thrash property; `grid-template-rows` reveals to real intrinsic
height without that cost). Nothing animates `width`/`height`/`top`/`left`/
`box-shadow`.

**Z-index** — `z-header` (50), `z-overlay` (900), `z-modal` (1000),
`z-toast` (1100). Only `z-header` is in active use today (mobile nav
overlay also uses it, since it's full-screen and never coexists with
anything else needing a higher layer); the rest are reserved.

**Flex-grow** — `flex-6` (`flex: 6 6 0%`) exists solely so Hero.jsx's two
vertical-position spacers can split leftover space 6:1 without reaching
for arbitrary `flex-[6]` syntax; the 1-side of that ratio is Tailwind's
own stock `flex-1`. Not intended for general reuse beyond that spacer
pattern — if another layout needs a different ratio, add the specific
step it needs rather than repurposing this one.

## 5. Layout primitives (`src/components/ui/`)

- **`Container`** — the one horizontal-measure wrapper: `max-w-content`
  (1320px, default) or `max-w-content-lg` (1440px, pass `wide`), centered,
  with responsive side padding. Every page's content sits inside one.
- **`Section`** — owns vertical rhythm and background tone so pages never
  hardcode padding. `size="sm"|"md"|"lg"` picks the padding step (see §3);
  `tone="base"|"alt"|"surface"|"navy"` picks the background off the
  surface ladder; `border` adds a bottom hairline. `as` overrides the tag
  (defaults to `<section>`).
- **`Grid`** — a 12-column grid helper. Pass `cols={2|3|4|12}` for a
  standard responsive N-up grid (each collapses to fewer columns at
  smaller breakpoints), or use `cols={12}` (default) and apply
  `col-span-*` directly on children for asymmetric/editorial layouts (the
  homepage Capabilities grid does this).

Full-bleed sections (hero, image splits) intentionally render their image
layer *outside* `Container` and their text layer *inside* one — that's by
design, not a primitive being bypassed.

## 6. Component primitives

**No `Eyebrow` component.** The site previously had a small uppercase,
wide-tracked label (optionally numbered, `"01 — Section Name"`) rendered
above section headings and page-hero titles, both standalone and as part
of `SectionHeader`. It was retired sitewide: every section heading now
stands alone as the true top of its content, sitting directly on the
section's own padding token with no compensating spacing. `Eyebrow.jsx` no
longer exists in the codebase — if a diff reintroduces it, or reintroduces
`SectionHeader`'s old `eyebrow`/`index` props, that's a regression, not a
restoration. This is distinct from — and doesn't affect — the small bare
numerals used as *list-item* markers within a section (ServiceDetail's
process steps, Why M-FAV's differentiator cards, the Industries page's
sector index): those number an item in a sequence, they don't label a
heading, and they were kept.

| Component | Variants / props | Notes |
|---|---|---|
| **Button** | `variant`: primary · secondary · ghost · onDark. `size`: sm · md · lg. `loading`, `disabled`, `trailingArrow`. Renders `<Link>` (`to`), `<a>` (`href`), or `<button>` — never a styled `<div>`. | States (hover/focus-visible/active/disabled/loading) are pure CSS pseudo-classes, no JS-driven hover. `size="sm"` is 36px tall (`min-h-9`) — used only in the desktop-only (`lg:`) header CTA; don't reuse it for a touch-reachable control without checking the 44px tap-target rule. |
| **TextLink** | `standalone` (adds trailing arrow), `onDark`. | Underline is a `background-size` wipe (`.u-wipe` in `index.css`) triggered by the ancestor `.group`'s hover/focus-visible — never a color-only change. |
| **SectionHeader** | `heading`, `headingLevel` (default `h2`), `supporting`, `action`, `align`, `onDark`. | No eyebrow slot (see above). Carries the section-reveal-on-scroll animation for free — nearly every section opens with one. |
| **Tag** | `onDark`. | Static label, not a control — wrap it in a real `<button>`/`<a>` if it needs to be clickable. |
| **Stat** | `value`, `label`, `hairline`, `onDark`. | Numeral is never accent-colored (A3 §2d) — always `c-on`/`c-ondark`. |
| **Card shells** — `ServiceCard`, `IndustryCard`, `ProjectCard`, `DivisionPanel` | Each takes `image`/`imageAlt` (+ `graded` on the photo-card variants, see IMAGES.md) plus its content props. | `ServiceCard`/`DivisionPanel`/`ProjectCard` are single `<Link>`/`<article>` elements — no nested interactive elements inside a card. Sub-copy reveals on hover (`.hover-reveal`, desktop only, `md:` and up) and stays visible by default on touch/mobile. |
| **Form fields** — `Input`, `Textarea`, `Select`, `Label`, `FieldError`, `Checkbox` | `id`, `label`, `required`, `error`, `hint`. | `aria-invalid`/`aria-describedby` wired automatically from `error`/`hint`; `FieldError` renders `role="alert"`. `min-h-12` (48px) on Input/Textarea/Select meets the 48px+ hit-height rule. |

## 7. Breakpoints & container widths

Tailwind defaults, unmodified: `sm 640` / `md 768` / `lg 1024` / `xl 1280` /
`2xl 1536`. The brief's QA widths (1920/1440/1280/1024/834/768/430/375) fall
inside these ranges without needing custom breakpoints — 834/430 sit inside
the `md`/`<sm` bands respectively, which is normal and doesn't require a
dedicated breakpoint of its own.

## 8. What's intentionally *not* tokenized

- The `figma-*` type scale (§2) — ported but unused; don't build on it
  without first checking whether the six live tokens already cover the
  case.
- `space-*` (§3) — a secondary, finer-grained scale for component-internal
  gaps, distinct from the section-rhythm `section-*` scale; both are
  legitimate, they answer different questions ("how much space inside this
  card" vs. "how much space between sections").
