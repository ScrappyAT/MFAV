# IMAGES.md

Every image slot on the site: current placeholder file, intended real
subject (per the brief's A4 imagery direction), aspect ratio/framing, and
treatment. All current imagery is placeholder — either a stock-style photo
(`hero_section.jpg`, reused across several slots) or hand-made abstract SVG
illustrations (`division_*.svg`, `who_we_are_plant.svg`) — pending real
operational photography from the client.

## Cool-tone grade — the standard treatment for warm photography

The one photo currently in the codebase (`hero_section.jpg`) runs warm (a
sunset sky); A4 calls for "cinematic, cool-toned, desaturated slightly."
**Apply this same treatment to every future photograph that comes in
warm** — it's two parts, always used together, and both already exist in
`src/index.css`:

```css
.grade-cool      { filter: grayscale(0.7) saturate(0.5) brightness(0.9); }
.grade-cool-tint { background-color: rgb(var(--clr-scrim-rgb) / 0.45); mix-blend-mode: multiply; }
```

`.grade-cool` mutes/cools the photo itself (a `filter()` alone can't fully
neutralize a photo this warm); `.grade-cool-tint` is a sibling absolutely-
positioned layer in the site's navy scrim color, blended with
`multiply`, so whatever warmth is left reads as navy rather than orange.
Every component that supports it takes a boolean `graded` prop
(`Hero` always applies it internally; `DivisionPanel`/`ServiceCard`/
`ProjectCard` take `graded` as a prop) which renders both pieces together.
**Neutral abstract SVG placeholders don't need grading** — only real/
stock-style photography does. When real photography arrives, judge each
one on set — a photo shot in flat overcast light or already cool may not
need the filter at full strength; the two classes are safe to leave
un-applied if the source is already on-brand.

## Image slots

| Slot | File(s) used in `public/assets/images/` | Used in | Aspect / framing | Real subject (A4 direction) | Treatment |
|---|---|---|---|---|---|
| Homepage hero | `hero_section.jpg` | `Hero.jsx` | Full-bleed, `min-h-hero` (92vh), `object-cover`, intrinsic 1081×720 set for CLS | Offshore supply vessel or rig at blue hour, or equivalent operational subject | `.grade-cool` + directional navy scrim (2 stacked gradients, ~65% combined at the text corner) |
| Capabilities panel — Marine & Offshore | `hero_section.jpg` (reused) | `Capabilities.jsx` → `DivisionPanel` | `min-h-80` (320px), `object-cover`, no fixed aspect ratio (panel-height driven) | Vessel/marine operations photo distinct from the hero shot | `.grade-cool` (flagged `graded: true` since it reuses the warm hero photo) |
| Capabilities panel — Aviation | `division_aviation.svg` | `Capabilities.jsx` | Same as above | Helicopter on a deck, or private jet on a ramp | None (neutral illustration) |
| Capabilities panel — Energy & Infrastructure | `who_we_are_plant.svg` (reused) | `Capabilities.jsx` | Same as above | Pipeline/welding work, industrial plant | None |
| Capabilities panel — Logistics & Haulage | `division_logistics.svg` | `Capabilities.jsx` | Same as above | Heavy haulage on Nigerian roads | None |
| Capabilities panel — Equipment & PPE | `division_equipment.svg` | `Capabilities.jsx` | Same as above | Heavy plant/equipment on site, PPE and crew at work | None |
| Capabilities panel — Property & Investment | `division_property.svg` | `Capabilities.jsx` | Same as above | Commercial/industrial real estate, port-adjacent land — architectural, never residential-lifestyle | None |
| About/company-intro split (homepage) | `who_we_are_plant.svg` | `WhoWeAre.jsx` | `min-h-96` mobile / `lg:min-h-full` desktop (matches the text column's height), `object-cover` | Industrial plant at dusk, or engineering/inspection work | None; has a `[IMAGE CAPTION PLACEHOLDER]` overlay chip |
| Safety & Operational Excellence (homepage) | `who_we_are_plant.svg` (reused) | `SafetyExcellence.jsx` | Full-bleed section background, `object-cover` | Industrial/offshore image suiting the site's most serious section | Heavy navy scrim (`bg-c-scrim/90`) — no `.grade-cool` (source is already a neutral illustration) |
| Projects — homepage teaser & full portfolio cards | `hero_section.jpg` (×2 cards, graded) / `division_aviation.svg` / `who_we_are_plant.svg` / `division_logistics.svg` / `division_equipment.svg` | `ProjectsSection.jsx`, `pages/Projects.jsx` → `ProjectCard` | `aspect-4/3`, `object-cover` | Per the card's sector: marine ops, offshore/aviation support, infrastructure, logistics, equipment — all illustrative | `.grade-cool` only on the two `hero_section.jpg` cards |
| About page hero | `hero_section.jpg` (reused) | `pages/About.jsx` | Full-bleed section background, `object-cover` | Same as homepage hero, or a distinct About-specific operational shot | `.grade-cool` + flat `bg-c-scrim/80` |
| Industries page hero | `hero_section.jpg` (reused) | `pages/Industries.jsx` | Full-bleed section background, `object-cover` | Operational shot representing breadth across sectors | `.grade-cool` + flat `bg-c-scrim/80` |
| Service detail hero (×6 routes) | `service.image` per division in `content/services.js` (currently `hero_section.jpg` for marine-offshore, division SVGs for the other five) | `pages/ServiceDetail.jsx` | Full-bleed section background, `object-cover` | Division-specific: a vessel/deck shot for Marine & Offshore, a charter/ramp shot for Aviation, pipeline/welding for Energy & Infrastructure, haulage for Logistics, PPE/equipment for Equipment & PPE, industrial real estate for Property & Investment | `.grade-cool` where `service.graded` is `true` (marine-offshore only today) |
| Services overview split-rows (×6) | Same `service.image` per division, reused | `pages/Services.jsx` | `min-h-80` mobile / `lg:min-h-full` desktop, `object-cover` | Same six division subjects as above | Same `graded` flag, reused |
| Leadership portraits (×4, placeholder) | None shipped — rendered as a neutral `<User>` icon glyph, not an image file | `pages/About.jsx` `#leadership` | 4:5 (per A5 §5a) | Real staff portraits, once supplied — **no people are represented today** | N/A until real photos exist |
| Map embed | None — a bordered placeholder block with `[MAP EMBED PLACEHOLDER]` text, no image or third-party embed | `pages/Contact.jsx` | 16:9 (`aspect-16/9`) | A real map embed once the client approves a provider (A2.4 — no third-party embed without sign-off) | N/A |
| Logo — light-surface colorway | `mfav_logo.png` | `Logo.jsx` (default) | Intrinsic 801×423, rendered at `h-10` (header) | Official full-color lockup (red crescent, blue/black wave, black wordmark), as supplied by the client | None |
| Logo — dark-surface colorway | `mfav_logo_ondark.png` | `Logo.jsx` (`onDark`) | Same 801×423 | Same artwork, wordmark recolored near-white for legibility on the navy footer (black text on `--clr-primary-bg` fails contrast) | None |
| Favicon / touch icon | `favicon.png`, `favicon.ico`, `apple-touch-icon.png` | `index.html` | 192×192 / multi-size / 180×180 | Icon-only crop (crescent+wave) of the same artwork, true colors | None |

## Known gaps / inconsistencies to flag for the client

- **Only 4 of 6 divisions have a dedicated photo-style image** — Marine &
  Offshore and Energy & Infrastructure currently fall back to
  `hero_section.jpg`/`who_we_are_plant.svg` respectively (a gap flagged as
  far back as the Phase 0 audit in `TOKENS-GAPS.md`, still open). The other
  four divisions use custom abstract SVG illustrations rather than
  photography at all — none of the six divisions currently has *real*
  operational photography.
- **`hero_section.jpg` is reused in eight distinct slots** (homepage hero,
  the marine-offshore capability panel, two project cards, the About page
  hero, the Industries page hero, and the Marine & Offshore service-detail
  hero + its Services-overview row). This is deliberate placeholder economy,
  not a bug, but it means the same photo appears many times across a single
  session if a visitor browses several pages — worth prioritizing real
  photography for this slot first.
- **No `srcset`/responsive `<img>` sizes** exist yet — A4 asks for
  responsive images with `srcset`. There's currently only one resolution of
  each placeholder asset, so there's nothing to build a `srcset` from; once
  real photography lands, each slot above should ship at 2–3 widths (e.g.
  640/1280/1920 for full-bleed hero-style slots) with a matching `srcset`.
