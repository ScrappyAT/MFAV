// Global identity + contact strings (CONTENT-UPDATE-BRIEF.md Pass 1, A5).
// Centralised here because Header, Footer and the Contact page all quote
// the same name/motto/contact values — one source so a future change
// doesn't have to be re-applied file by file.
//
// A7: general enquiry email and operating hours are explicitly "suggested,
// not decided" in COPY-APPROVED.md — rendered as placeholders, not the
// deck's suggested values. Phone numbers and the support/procurement
// emails are `[VERIFY]`-tagged in the deck but not on A7's placeholder
// list, so they're applied as given.

export const BRAND_NAME_FULL = 'M-FAV Offshore and Allied Services Limited';
export const BRAND_NAME_SHORT = 'M-FAV';

// For the logo lockup's own visual artwork only — see Logo.jsx. `LTD`
// belongs here and nowhere else (A5).
export const LOGO_LOCKUP_LINE_2 = 'OFFSHORE AND ALLIED SERVICES LTD';
export const LOGO_ALT = 'M-FAV Offshore and Allied Services Limited';

export const MOTTO = 'Delivering Excellence at All Times.';

export const FOOTER_BRAND_LINE = 'Integrated marine, offshore, aviation, logistics and industrial solutions.';

export const COPYRIGHT = `© 2026 ${BRAND_NAME_FULL}. All Rights Reserved.`;
export const RC_PLACEHOLDER = '[RC PLACEHOLDER]';

export const CONTACT = {
  address: '[ADDRESS PLACEHOLDER]',
  addressLine2: '[CITY, STATE PLACEHOLDER], Nigeria',
  phones: ['+234 (0) 810 642 1702', '+234 (0) 708 668 1182'],
  generalEmail: '[EMAIL PLACEHOLDER]',
  supportEmail: 'support@mfavoffshore.com',
  procurementEmail: 'procurement@mfavoffshore.com',
  hours: '[OPERATING HOURS PLACEHOLDER]',
  map: '[MAP EMBED PLACEHOLDER]',
};
