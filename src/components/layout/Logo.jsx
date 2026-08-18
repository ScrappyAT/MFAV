import React from 'react';

/**
 * Logo — the one shared brand mark, consumed by both Header and Footer
 * so it's never hand-placed/duplicated. See the Phase 4 report for the
 * open question on the asset itself (name/palette match against A3).
 *
 * width/height are the image's real intrinsic dimensions (optimized to
 * 400×218 — see IMAGES.md/Phase 4 report) so the browser reserves the
 * correct aspect ratio at any rendered size and there's no layout shift.
 */
export default function Logo({ className = 'h-10 w-auto' }) {
  return (
    <img
      src="/assets/images/mfav_logo.png"
      alt="MFAV Offshore and Allied Resources"
      width={400}
      height={218}
      className={className}
    />
  );
}
