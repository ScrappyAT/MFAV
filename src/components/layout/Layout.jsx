import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import PageTransition from './PageTransition';

/**
 * Scroll restoration: plain top-of-page on a normal route change, or a
 * scroll to the matching element when the URL carries a hash (e.g. a
 * page anchor like /about#safety, whether linked to or typed directly).
 * React Router v6 doesn't do this on its own. Anchor targets get
 * `scroll-margin-top` globally (index.css)
 * so this never lands them under the fixed header.
 *
 * Phase 6: smooth scrolling is scoped to anchor navigation only (A3
 * Phase 6: "scroll-behavior: smooth on anchor links only... never hijack
 * the wheel"). `html { scroll-behavior: smooth }` (index.css) makes this
 * the default for any scroll on the page, which also caught the plain
 * "jump to top" on an ordinary route change — every navigation was
 * animating a scroll instead of snapping there. `behavior: 'instant'`
 * here opts the non-anchor case back out explicitly; `scrollIntoView`'s
 * default `behavior: 'smooth'` is what the CSS rule is actually for.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Lazy pages and route transitions may mount after the URL changes.
      const scrollToTarget = () => {
        const target = document.getElementById(hash.slice(1));
        if (!target) return false;
        target.scrollIntoView({ behavior: 'instant' });
        return true;
      };
      if (scrollToTarget()) return undefined;
      const observer = new MutationObserver(() => {
        if (scrollToTarget()) observer.disconnect();
      });
      observer.observe(document.getElementById('main-content'), { childList: true, subtree: true });
      return () => observer.disconnect();
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

/**
 * Alt+C navigates to /contact — a quick-access shortcut for keyboard
 * users (H7: Flexibility & Efficiency of Use).
 */
function ContactShortcut() {
  const navigate = useNavigate();
  useEffect(() => {
    function handleKey(e) {
      if (e.altKey && e.key === 'c') {
        e.preventDefault();
        navigate('/contact');
      }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [navigate]);
  return null;
}

export default function Layout() {
  return (
    <div className="min-h-screen bg-c-bg text-c-on selection:bg-c-primary-bg selection:text-white">
      <ScrollManager />
      <ContactShortcut />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-toast focus:rounded-token focus:bg-c-on focus:px-4 focus:py-2 focus:text-c-bg"
      >
        Skip to content
      </a>
      <Header />
      <div id="main-content">
        <PageTransition />
      </div>
      <Footer />
    </div>
  );
}
