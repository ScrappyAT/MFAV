// Global identity + contact strings (CONTENT-UPDATE-BRIEF.md Pass 1, A5).
// Centralised here because Header, Footer and the Contact page all quote
// the same name/motto/contact values — one source so a future change
// doesn't have to be re-applied file by file.
//
// Address and email are now client-supplied and resolved (see
// COPY-APPROVED.md §10.2/§11.1's "Email decision, resolved" note): there
// is no separate general-enquiry address — support@mfavoffshore.com is
// the single public address and the contact-form destination.
// Procurement@ is kept for the contact page only, not the footer.
// RC number is resolved as "deliberately not displayed" — there is no RC
// value to render anywhere, footer included. Operating hours was removed
// from the site entirely at client request, not resolved with a value —
// there is no `hours` field any more.
//
// Map: resolved to a real Google Maps keyless embed of the office
// address (COPY-APPROVED.md §10.2/§11.1). Independently cross-checked
// against OpenStreetMap's Nominatim geocoder before use — "Professor
// Kiumi Akingbehin Street" resolves precisely to Lekki Phase I, Eti Osa,
// Lagos (lat 6.4356, lon 3.4641), confirming the street is real and
// specifically locatable, not a fabricated or unmappable address.

export const BRAND_NAME_FULL = 'M-FAV Offshore and Allied Services Limited';
export const BRAND_NAME_SHORT = 'M-FAV';

// For the logo lockup's own visual artwork only — see Logo.jsx. `LTD`
// belongs here and nowhere else (A5).
export const LOGO_LOCKUP_LINE_2 = 'OFFSHORE AND ALLIED SERVICES LTD';
export const LOGO_ALT = 'M-FAV Offshore and Allied Services Limited';

export const MOTTO = 'Delivering Excellence at All Times.';

export const FOOTER_BRAND_LINE = 'Integrated marine, offshore, aviation, logistics and industrial solutions.';

export const COPYRIGHT = `© 2026 ${BRAND_NAME_FULL}. All Rights Reserved.`;

export const CONTACT = {
  addressLines: [
    '26 Prof Kiumi Akingbehin Street',
    'off Awkuzu Street, off Omorinre Johnson Street',
    'Lekki 105102, Lagos, Nigeria',
  ],
  phones: ['+234 (0) 810 642 1702', '+234 (0) 708 668 1182'],
  // The single public address — used both as "general enquiries" and as
  // the contact form's destination. No separate info@/enquiries@ exists.
  email: 'support@mfavoffshore.com',
  // Contact page only (per the deck's resolved email decision) — not
  // rendered in the footer.
  procurementEmail: 'procurement@mfavoffshore.com',
  mapEmbedUrl: 'https://www.google.com/maps?q=26%20Prof%20Kiumi%20Akingbehin%20Street%2C%20off%20Awkuzu%20Street%2C%20off%20Omorinre%20Johnson%20Street%2C%20Lekki%20105102%2C%20Lagos%2C%20Nigeria&output=embed',
  mapEmbedTitle: 'Map showing the M-FAV office at 26 Prof Kiumi Akingbehin Street, Lekki, Lagos, Nigeria',
};
