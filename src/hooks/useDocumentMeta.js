import { useEffect } from 'react';
import { BRAND_NAME_SHORT } from '../content/site';

const SITE_NAME = BRAND_NAME_SHORT;

// Placeholder production domain — the same one already used in
// public/robots.txt and public/sitemap.xml (see PLACEHOLDERS.md for the
// note to update all three together once the client confirms the real
// domain). Needed here because Open Graph/Twitter Card tags require
// absolute URLs, not relative paths.
const SITE_URL = 'https://www.mfavoffshore.com';

// The only real, already-in-use photo suitable as a generic share-card
// image (see IMAGES.md) — reused as the default `og:image`/`twitter:image`
// for any route that doesn't pass its own `image`, rather than inventing
// a dedicated social-share asset that doesn't exist yet.
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/images/hero_section.jpg`;

/**
 * useDocumentMeta — sets a unique <title>, meta description, and Open
 * Graph/Twitter Card tags per route, without adding a head-management
 * dependency (react-helmet etc.). A2.4 requires asking before new
 * dependencies; this hook covers it directly.
 *
 * Every page component calls this once. index.html's static tags (title,
 * description, and the Open Graph/Twitter Card defaults added in Phase 7)
 * are the fallback for the brief instant before React mounts — this hook
 * overwrites the same tag names/properties rather than adding duplicates,
 * and restores whatever was there before on unmount (a brand-new tag this
 * hook created is removed outright; one that already existed — e.g. the
 * static `<meta name="description">` — has its original content put
 * back). JSON-LD Organization structured data is NOT managed here: it
 * doesn't vary by route, so it's a single static <script> in index.html
 * instead of being torn down and rebuilt on every navigation.
 *
 * @param {string|undefined} title - the complete, final <title> string for
 *   the route (content/metadata.js supplies one per route verbatim from
 *   COPY-APPROVED.md §2 — no site-name suffix is appended here any more;
 *   falls back to the short brand name if a route doesn't pass one)
 * @param {string|undefined} description - meta description / OG+Twitter
 *   description
 * @param {string} [image] - absolute or root-relative image URL for
 *   `og:image`/`twitter:image`; defaults to the site's hero photo
 */
export function useDocumentMeta(title, description, image) {
  useEffect(() => {
    const fullTitle = title || SITE_NAME;
    const ogImage = image
      ? image.startsWith('http') ? image : `${SITE_URL}${image}`
      : DEFAULT_OG_IMAGE;
    const url = `${SITE_URL}${window.location.pathname}`;

    const previousTitle = document.title;
    document.title = fullTitle;

    // Open Graph uses the `property` attribute; the plain description and
    // Twitter Card tags use `name` — tracked separately since they select
    // different <meta> elements.
    const nameTags = [
      ['description', description],
      ['twitter:card', 'summary_large_image'],
      ['twitter:title', fullTitle],
      ['twitter:description', description],
      ['twitter:image', ogImage],
    ];
    const propertyTags = [
      ['og:type', 'website'],
      ['og:site_name', SITE_NAME],
      ['og:title', fullTitle],
      ['og:description', description],
      ['og:url', url],
      ['og:image', ogImage],
    ];

    const restoreQueue = [];

    function upsertMeta(attr, key, content) {
      if (content == null) return;
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      const existed = !!el;
      const previousContent = el ? el.getAttribute('content') : null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
      restoreQueue.push({ el, existed, previousContent });
    }

    nameTags.forEach(([key, content]) => upsertMeta('name', key, content));
    propertyTags.forEach(([key, content]) => upsertMeta('property', key, content));

    return () => {
      document.title = previousTitle;
      restoreQueue.forEach(({ el, existed, previousContent }) => {
        if (existed) {
          if (previousContent != null) el.setAttribute('content', previousContent);
        } else {
          el.remove();
        }
      });
    };
  }, [title, description, image]);
}
