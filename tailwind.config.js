/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Wired through "R G B" companion vars for Tailwind opacity modifiers.
        // All values sourced from mfav design tokens.json (light theme).
        'c-bg': 'rgb(var(--clr-bg-rgb) / <alpha-value>)',
        'c-bg-alt': 'rgb(var(--clr-bg-alt-rgb) / <alpha-value>)',
        'c-surface': 'rgb(var(--clr-surface-rgb) / <alpha-value>)',
        'c-surface-high': 'rgb(var(--clr-surface-high-rgb) / <alpha-value>)',
        'c-surface-highest': 'rgb(var(--clr-surface-highest-rgb) / <alpha-value>)',
        'c-surface-low': 'rgb(var(--clr-surface-low-rgb) / <alpha-value>)',
        'c-surface-lowest': 'rgb(var(--clr-surface-lowest-rgb) / <alpha-value>)',
        'c-on': 'rgb(var(--clr-on-surface-rgb) / <alpha-value>)',
        'c-on-muted': 'rgb(var(--clr-on-muted-rgb) / <alpha-value>)',
        'c-muted': 'rgb(var(--clr-on-muted-rgb) / <alpha-value>)',
        'c-on-primary': 'rgb(var(--clr-on-primary-rgb) / <alpha-value>)',
        'c-primary': 'rgb(var(--clr-primary-rgb) / <alpha-value>)',
        'c-primary-bg': 'rgb(var(--clr-primary-bg-rgb) / <alpha-value>)',
        'c-border': 'rgb(var(--clr-border-rgb) / <alpha-value>)',
        'c-border-hl': 'rgb(var(--clr-border-hl-rgb) / <alpha-value>)',
        'c-ondark': 'rgb(var(--clr-ondark-rgb) / <alpha-value>)',
        'c-ondark-primary': 'rgb(var(--clr-ondark-primary-rgb) / <alpha-value>)',
        'c-scrim': 'rgb(var(--clr-scrim-rgb) / <alpha-value>)',
        'c-error': 'rgb(var(--clr-error-rgb) / <alpha-value>)',
      },

      // --- Type scale: project-specific tokens (kept for existing components)
      // plus Figma DM Sans type scale (mfav design tokens.json > typography). ---
      fontSize: {
        // Project-specific (no direct Figma equivalent)
        'hero': ['4.5rem', { lineHeight: '0.97', letterSpacing: '-0.02em', fontWeight: '700' }],
        'hero-sm': ['2.75rem', { lineHeight: '1.05', letterSpacing: '-0.01em', fontWeight: '700' }],
        'display': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '600' }],
        'display-sm': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '600' }],
        'stat': ['4rem', { lineHeight: '1', fontVariantNumeric: 'tabular-nums', fontWeight: '500' }],
        'eyebrow': ['0.75rem', { letterSpacing: '0.15em', fontWeight: '700' }],
        'micro': ['0.6875rem', { letterSpacing: '0.08em', fontWeight: '600' }],
        // Figma DM Sans — Display
        'figma-display-lg': ['4rem', { lineHeight: '1.6', letterSpacing: '-4px', fontWeight: '500' }],
        'figma-display-md': ['3.125rem', { lineHeight: '1.5', letterSpacing: '-3px', fontWeight: '500' }],
        'figma-display-sm': ['2.5rem', { lineHeight: '1.5', letterSpacing: '-2.3px', fontWeight: '500' }],
        // Figma DM Sans — Headline
        'figma-headline-lg': ['2rem', { lineHeight: '1.5', letterSpacing: '-1.55px', fontWeight: '500' }],
        'figma-headline-md': ['1.75rem', { lineHeight: '1.5', letterSpacing: '-1.2px', fontWeight: '500' }],
        'figma-headline-sm': ['1.5rem', { lineHeight: '1.5', letterSpacing: '-1px', fontWeight: '500' }],
        // Figma DM Sans — Title
        'figma-title-lg': ['1.375rem', { lineHeight: '1.5', letterSpacing: '-1px', fontWeight: '500' }],
        'figma-title-md': ['1rem', { lineHeight: '1.5', letterSpacing: '-0.85px', fontWeight: '500' }],
        'figma-title-sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '-0.75px', fontWeight: '600' }],
        // Figma DM Sans — Body
        'figma-body-lg': ['1rem', { lineHeight: '1.5', letterSpacing: '-0.8px', fontWeight: '500' }],
        'figma-body-md': ['0.875rem', { lineHeight: '1.5', letterSpacing: '-0.75px', fontWeight: '500' }],
        'figma-body-sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '-0.75px', fontWeight: '500' }],
        // Figma DM Sans — Label
        'figma-label-lg': ['0.875rem', { lineHeight: '1.5', letterSpacing: '-0.9px', fontWeight: '500' }],
        'figma-label-md': ['0.75rem', { lineHeight: '1.5', letterSpacing: '-0.9px', fontWeight: '500' }],
        'figma-label-sm': ['0.6875rem', { lineHeight: '1.5', letterSpacing: '-0.9px', fontWeight: '500' }],
      },

      // --- Spacing: section rhythm (project) + Figma spacing scale. ---
      spacing: {
        // Project-specific section padding
        'section-sm': '5rem',
        'section': '9rem',
        'section-lg': '11.25rem',
        // Figma spacing scale (primitive colours > spacing)
        'space-0': '0',
        'space-xs': '4px',
        'space-sm': '8px',
        'space-md': '12px',
        'space-base': '16px',
        'space-lg': '20px',
        'space-xl': '24px',
        'space-2xl': '32px',
      },

      // --- Radii (A3: near-square, 0–4px max on cards/buttons). `rounded`
      // stays at Tailwind's default 4px; these are named aliases so intent
      // is explicit in component code and reviewers can grep for them. ---
      borderRadius: {
        'token-sm': '2px',
        'token': '4px',
      },

      // --- Shadows (Figma effect tokens: 4px blur, 4px/4px offset, 0 spread) ---
      boxShadow: {
        'token': '0 4px 4px 0 rgba(0, 0, 0, 0.2)',
        'token-modal': '0 4px 4px 0 rgba(0, 0, 0, 0.4)',
      },

      // --- Motion (A6 Phase 6 durations, brought forward now so Phase 1
      // primitives have real tokens to use instead of ad hoc values). ---
      transitionDuration: {
        '120': '120ms',
        '200': '200ms',
        '320': '320ms',
        '500': '500ms',
        '700': '700ms',
      },
      transitionTimingFunction: {
        'standard': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'entrance': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'exit': 'cubic-bezier(0.4, 0, 1, 1)',
      },

      // --- Stagger steps for the Phase 6 section-reveal system: "~60ms
      // stagger capped at six [children]". Named tokens rather than
      // Tailwind's default delay-* scale so the exact 60ms cadence is
      // explicit and grep-able, same convention as transitionDuration
      // above. `Reveal`'s STAGGER_DELAY_CLASSES array is the only place
      // that reads these class names, so Tailwind's JIT scanner can see
      // the literal strings and generate the CSS. ---
      transitionDelay: {
        'stagger-0': '0ms',
        'stagger-1': '60ms',
        'stagger-2': '120ms',
        'stagger-3': '180ms',
        'stagger-4': '240ms',
        'stagger-5': '300ms',
      },

      // --- Flex-grow ratio for the Hero's vertical-position spacers
      // (Hero.jsx) — `flex-1` already exists as a stock Tailwind utility
      // (`flex: 1 1 0%`) for the bottom spacer; `flex-6` is the only new
      // step needed, at 6x the grow so the two spacers split leftover
      // vertical space 6:1 (bumped from 5:1 when the header became
      // permanently solid — see Hero.jsx). Added here rather than
      // reached for as `flex-[6]` per A2.3 (no arbitrary Tailwind values
      // in components). ---
      flex: {
        '6': '6 6 0%',
      },

      // --- Z-index layers, named so a component never has to guess what
      // else is in the stack. ---
      zIndex: {
        'header': '50',
        'overlay': '900',
        'modal': '1000',
        'toast': '1100',
      },

      // --- Container widths (A3: ~1280–1440px content max-width). 1320
      // already covers this via .mfav-container; content-lg is reserved
      // for Phase 5's wide editorial split-rows. ---
      // Named aspect ratios for image slots (A4: consistent, documented
      // aspect ratios per slot — see IMAGES.md, added in a later phase).
      aspectRatio: {
        '4/3': '4 / 3',
        '4/5': '4 / 5',
        '16/9': '16 / 9',
      },

      maxWidth: {
        'content': '1320px',
        'content-lg': '1440px',
        // A3: body measure capped at ~65-70 characters.
        'measure': '65ch',
      },

      // A6 §2a: "full-viewport (min-h-[92vh], not a rigid 100vh)" — named
      // so the exact value is a token, not an arbitrary bracket value.
      minHeight: {
        'hero': '92vh',
      },

      // Fixed header height (100px, by request) — named so `h-header` is
      // reachable without `h-[100px]` (A2.3). Also referenced by
      // `index.css`'s global `scroll-margin-top` and by the mobile nav
      // overlay's top offset in Header.jsx, so both stay in lockstep
      // with the header's real height instead of drifting independently.
      height: {
        'header': '100px',
      },
    },
  },
  plugins: [],
}
