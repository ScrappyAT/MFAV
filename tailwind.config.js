/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Wired through the "R G B" companion vars so Tailwind's opacity
        // modifiers (bg-c-x/50, border-c-x/30, ...) actually work — a
        // color bound straight to a hex var can't take a /NN modifier.
        'c-bg': 'rgb(var(--clr-bg-rgb) / <alpha-value>)',
        'c-bg-alt': 'rgb(var(--clr-bg-alt-rgb) / <alpha-value>)',
        'c-surface': 'rgb(var(--clr-surface-rgb) / <alpha-value>)',
        'c-surface-high': 'rgb(var(--clr-surface-high-rgb) / <alpha-value>)',
        'c-surface-highest': 'rgb(var(--clr-surface-highest-rgb) / <alpha-value>)',
        'c-surface-low': 'rgb(var(--clr-surface-low-rgb) / <alpha-value>)',
        'c-surface-lowest': 'rgb(var(--clr-surface-lowest-rgb) / <alpha-value>)',
        'c-on': 'rgb(var(--clr-on-surface-rgb) / <alpha-value>)',
        'c-on-muted': 'rgb(var(--clr-on-muted-rgb) / <alpha-value>)',
        // Alias: components reference "c-muted" (not "c-on-muted")
        // throughout — kept so existing Phase-2/3-scope components don't
        // silently lose color when those sections are rebuilt.
        'c-muted': 'rgb(var(--clr-on-muted-rgb) / <alpha-value>)',
        'c-on-primary': 'rgb(var(--clr-on-primary-rgb) / <alpha-value>)',
        'c-primary': 'rgb(var(--clr-primary-rgb) / <alpha-value>)',
        'c-primary-bg': 'rgb(var(--clr-primary-bg-rgb) / <alpha-value>)',
        // Retired per Phase 0 audit + client decision: teal was a second,
        // unsanctioned accent hue. A3 names exactly one accent (blue).
        // 'c-teal' / 'c-teal-bg' / 'c-ondark-teal' intentionally removed —
        // do not re-add without a design-law amendment.
        'c-border': 'rgb(var(--clr-border-rgb) / <alpha-value>)',
        'c-border-hl': 'rgb(var(--clr-border-hl-rgb) / <alpha-value>)',
        'c-ondark': 'rgb(var(--clr-ondark-rgb) / <alpha-value>)',
        'c-ondark-primary': 'rgb(var(--clr-ondark-primary-rgb) / <alpha-value>)',
        // Dedicated scrim token for image overlays (Hero, division/project
        // cards, Safety banner) — pulls from the same navy as c-primary-bg
        // so overlays and the accent fill are never allowed to drift apart.
        'c-scrim': 'rgb(var(--clr-scrim-rgb) / <alpha-value>)',
        // Semantic error color for form validation states (Contact form,
        // FieldError primitive). Not part of the A3 palette law — this is
        // a functional/system color, sparingly used, on error states only.
        'c-error': 'rgb(var(--clr-error-rgb) / <alpha-value>)',
      },

      // --- Type scale (A3: hero H1 very large/tight leading & tracking,
      // section H2 large, eyebrow small/uppercase/wide-tracked, stat
      // numerals very large/tabular). Values proposed in TOKENS-GAPS.md §4,
      // approved as written. ---
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '0.97', letterSpacing: '-0.02em', fontWeight: '700' }],
        'hero-sm': ['2.75rem', { lineHeight: '1.05', letterSpacing: '-0.01em', fontWeight: '700' }],
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '600' }],
        'display-sm': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '600' }],
        'stat': ['4rem', { lineHeight: '1', fontVariantNumeric: 'tabular-nums', fontWeight: '500' }],
        'eyebrow': ['0.75rem', { letterSpacing: '0.15em', fontWeight: '700' }],
        'micro': ['0.6875rem', { letterSpacing: '0.08em', fontWeight: '600' }],
      },

      // --- Spacing scale, section-rhythm steps (A3: ~120–180px desktop
      // section padding). Named, not just numbered, so `py-section` reads
      // as intent in component code. ---
      spacing: {
        'section-sm': '5rem',    // 80px  — mobile section padding
        'section': '9rem',       // 144px — desktop section padding (mid-band)
        'section-lg': '11.25rem',// 180px — upper band (Hero / closing CTA)
      },

      // --- Radii (A3: near-square, 0–4px max on cards/buttons). `rounded`
      // stays at Tailwind's default 4px; these are named aliases so intent
      // is explicit in component code and reviewers can grep for them. ---
      borderRadius: {
        'token-sm': '2px',
        'token': '4px',
      },

      // --- Shadows (A3: "almost absent" — a 1px border or tone shift
      // instead of blur). One barely-there elevation, one exception for
      // genuine overlays (modal, mega-menu). ---
      boxShadow: {
        'token': '0 1px 2px rgb(26 27 32 / 0.06)',
        'token-modal': '0 24px 48px rgb(26 27 32 / 0.24)',
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
    },
  },
  plugins: [],
}
