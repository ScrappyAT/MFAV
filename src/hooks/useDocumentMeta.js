import { useEffect } from 'react';

const SITE_NAME = 'MFAV Offshore & Allied Resources';

/**
 * useDocumentMeta — sets a unique <title> and meta description per route
 * without adding a head-management dependency (react-helmet etc.). A2.4
 * requires asking before new dependencies; a 15-line hook covers this.
 *
 * Every page component calls this once. index.html's static tags are the
 * fallback for the brief instant before React mounts.
 */
export function useDocumentMeta(title, description) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

    let meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute('content');
    if (description) {
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description);
    }

    return () => {
      document.title = previousTitle;
      if (meta && previousDescription != null) meta.setAttribute('content', previousDescription);
    };
  }, [title, description]);
}
