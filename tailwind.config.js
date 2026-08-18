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
        // Alias: the components reference "c-muted" (not "c-on-muted")
        // throughout — this was previously undefined, so every
        // text-c-muted utility silently produced no color at all.
        'c-muted': 'rgb(var(--clr-on-muted-rgb) / <alpha-value>)',
        'c-on-primary': 'rgb(var(--clr-on-primary-rgb) / <alpha-value>)',
        'c-primary': 'rgb(var(--clr-primary-rgb) / <alpha-value>)',
        'c-primary-bg': 'rgb(var(--clr-primary-bg-rgb) / <alpha-value>)',
        'c-teal': 'rgb(var(--clr-teal-rgb) / <alpha-value>)',
        'c-teal-bg': 'rgb(var(--clr-teal-bg-rgb) / <alpha-value>)',
        'c-border': 'rgb(var(--clr-border-rgb) / <alpha-value>)',
        'c-border-hl': 'rgb(var(--clr-border-hl-rgb) / <alpha-value>)',
        'c-ondark': 'rgb(var(--clr-ondark-rgb) / <alpha-value>)',
        'c-ondark-primary': 'rgb(var(--clr-ondark-primary-rgb) / <alpha-value>)',
        'c-ondark-teal': 'rgb(var(--clr-ondark-teal-rgb) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
