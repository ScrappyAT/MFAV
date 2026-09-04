import React from 'react';

/**
 * Logo — the one shared brand lockup, consumed by both Header and Footer
 * so it's never hand-placed/duplicated.
 *
 * Full-artwork lockup (reverted from the icon+live-text split): the client
 * supplied the official crescent+wave mark with the "M-FAV / OFFSHORE AND
 * ALLIED SERVICES LTD" wordmark baked in, in its true brand colors (red
 * ring, blue/black wave) — this is now rendered as-is rather than
 * recombined from a recolored icon plus CSS text.
 *
 * Two colorways ship as separate assets (not one image + a CSS filter)
 * because only the wordmark needs to change between them, not the icon:
 *   - `mfav_logo.png`        — true colors + black wordmark, for light
 *     surfaces (the header, which is permanently solid/light).
 *   - `mfav_logo_ondark.png` — same true-color icon, wordmark recolored to
 *     near-white (the --clr-ondark token), for the navy footer — solid
 *     black text on the `--clr-primary-bg` navy background fails contrast
 *     (~2.2:1), so the wordmark alone is swapped; the red ring and blue
 *     wave are saturated/light enough to stay legible on navy unchanged,
 *     and the wave's black underlayer is kept black in both colorways
 *     (a subtle shadow tone, not something read as text).
 *
 * Both PNGs were produced from the same source raster: the white backing
 * plate was removed via alpha-unblending (not a hard cutout), so edges
 * stay anti-aliased instead of haloed/jagged.
 *
 * width/height are the image's real intrinsic dimensions (801×423) so the
 * browser reserves the correct aspect ratio at any rendered height.
 */
export default function Logo({ className = 'h-10', onDark = false }) {
  const src = onDark ? '/assets/images/mfav_logo_ondark.png' : '/assets/images/mfav_logo.png';

  return (
    <img
      src={src}
      alt="MFAV Offshore and Allied Services Ltd"
      width={801}
      height={423}
      className={['w-auto', className].join(' ')}
    />
  );
}
