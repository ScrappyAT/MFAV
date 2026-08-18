import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

/**
 * Scroll restoration: plain top-of-page on a normal route change, or a
 * scroll to the matching element when the URL carries a hash (e.g. the
 * footer's /about#leadership link). React Router v6 doesn't do this on
 * its own. Anchor targets get `scroll-margin-top` globally (index.css)
 * so this never lands them under the fixed header.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function Layout() {
  return (
    <div className="min-h-screen bg-c-bg text-c-on selection:bg-c-primary-bg selection:text-white">
      <ScrollManager />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-toast focus:rounded-token focus:bg-c-on focus:px-4 focus:py-2 focus:text-c-bg"
      >
        Skip to content
      </a>
      <Header />
      <div id="main-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
