import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Mail, Phone } from 'lucide-react';
import Button from '../ui/Button';
import { DIVISIONS, NAV_LINKS } from '../../content/divisions';

const SCROLL_SOLID_AT = 80;
const SCROLL_TRANSPARENT_AT = 40;

/**
 * Two-line text lockup — "MFAV" bold + "OFFSHORE & ALLIED RESOURCES"
 * subline, per Phase 1c. NOTE: the repo ships a pre-existing raster logo
 * (mfav_logo.png) that reads "M-FAV Offshore and Allied Services Ltd" in a
 * red/blue mark — a different company name and a palette outside the A3
 * law (see Phase 1 report). This text lockup is used instead until the
 * client resolves that conflict with a real vector mark.
 */
function LogoLockup({ solid }) {
  return (
    <span className="flex flex-col leading-none">
      <span className={['text-2xl font-extrabold tracking-tight', solid ? 'text-c-on' : 'text-white'].join(' ')}>
        MFAV
      </span>
      <span
        className={[
          'mt-1 text-micro uppercase',
          solid ? 'text-c-on-muted' : 'text-white/80',
        ].join(' ')}
      >
        Offshore &amp; Allied Resources
      </span>
    </span>
  );
}

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const mobileNavRef = useRef(null);
  const servicesRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Scroll-triggered header transition, with hysteresis (two different
  // thresholds for entering vs leaving "solid") so it can't flicker at a
  // single boundary value while the user scrolls near it.
  useEffect(() => {
    const handleScroll = () => {
      setSolid((prev) => {
        if (window.scrollY > SCROLL_SOLID_AT) return true;
        if (window.scrollY < SCROLL_TRANSPARENT_AT) return false;
        return prev;
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close everything on route change.
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Escape closes whichever overlay is open.
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key !== 'Escape') return;
      if (servicesOpen) setServicesOpen(false);
      if (mobileOpen) setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [servicesOpen, mobileOpen]);

  // Close the mega-menu on outside click.
  useEffect(() => {
    if (!servicesOpen) return;
    const handleClick = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [servicesOpen]);

  // Lock body scroll + trap focus while the mobile nav is open.
  useEffect(() => {
    if (!mobileOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const container = mobileNavRef.current;
    const focusables = () =>
      container
        ? Array.from(container.querySelectorAll('a, button, input, select, textarea'))
            .filter((el) => !el.hasAttribute('disabled'))
        : [];

    focusables()[0]?.focus();

    const handleTrap = (e) => {
      if (e.key !== 'Tab') return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    container?.addEventListener('keydown', handleTrap);

    return () => {
      document.body.style.overflow = previousOverflow;
      container?.removeEventListener('keydown', handleTrap);
      menuButtonRef.current?.focus();
    };
  }, [mobileOpen]);

  const navTextClass = solid ? 'text-c-on hover:text-c-primary-bg' : 'text-white/90 hover:text-white';

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-header transition-colors duration-200 ease-standard',
        solid
          ? 'bg-c-bg border-b border-c-border py-3 shadow-token'
          : 'py-5 border-b border-transparent',
      ].join(' ')}
    >
      {/* Measured contrast failure (Phase 2 QA): white nav text over a
          bright photo sky dropped as low as 1.82:1 with nothing behind
          the transparent header but the page's own scrim, which is
          weakest at the very top. This scrim is independent of whatever
          image sits behind the header, on every page, not just the
          Home hero. */}
      {!solid && (
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-c-scrim/90 to-c-scrim/70" />
      )}
      <div className="relative z-10 mfav-container flex items-center justify-between gap-6">
        <Link to="/" className="shrink-0 rounded-token-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-c-primary">
          <LogoLockup solid={solid} />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) =>
            link.name === 'Services' ? (
              <div key={link.name} ref={servicesRef} className="relative">
                <div className="flex items-center gap-1">
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      [
                        'text-sm font-medium transition-colors duration-200 ease-standard',
                        navTextClass,
                        isActive && 'border-b-2 border-c-primary',
                      ]
                        .filter(Boolean)
                        .join(' ')
                    }
                  >
                    {link.name}
                  </NavLink>
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    aria-controls="services-mega-menu"
                    aria-label="Toggle Services menu"
                    onClick={() => setServicesOpen((v) => !v)}
                    onMouseEnter={() => setServicesOpen(true)}
                    className={['rounded-token-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-c-primary', navTextClass].join(' ')}
                  >
                    <ChevronDown
                      size={14}
                      aria-hidden="true"
                      className={['transition-transform duration-200 ease-standard', servicesOpen && 'rotate-180'].filter(Boolean).join(' ')}
                    />
                  </button>
                </div>

                {servicesOpen && (
                  <div
                    id="services-mega-menu"
                    role="menu"
                    onMouseLeave={() => setServicesOpen(false)}
                    className="absolute left-1/2 top-full mt-4 w-screen max-w-content-lg -translate-x-1/2 rounded-token border border-c-border bg-c-surface p-8 shadow-token-modal"
                  >
                    <div className="grid grid-cols-3 gap-8">
                      {DIVISIONS.map((division) => (
                        <Link
                          key={division.id}
                          role="menuitem"
                          to={`/services/${division.id}`}
                          className="group flex flex-col gap-1.5 rounded-token-sm p-2 -m-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-c-primary"
                        >
                          <span className="font-bold text-c-on group-hover:text-c-primary-bg transition-colors duration-200 ease-standard">
                            {division.name}
                          </span>
                          <span className="text-sm text-c-on-muted leading-snug">{division.blurb}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.name}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  [
                    'text-sm font-medium transition-colors duration-200 ease-standard',
                    navTextClass,
                    isActive && 'border-b-2 border-c-primary',
                  ]
                    .filter(Boolean)
                    .join(' ')
                }
              >
                {link.name}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden lg:block shrink-0">
          <Button to="/contact" variant="primary" size="sm">
            Request a Consultation
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className={[
            'lg:hidden rounded-token border p-2 transition-colors duration-200 ease-standard',
            solid ? 'text-c-on border-c-border' : 'text-white border-white/30',
          ].join(' ')}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          ref={mobileNavRef}
          className="lg:hidden fixed inset-0 top-0 z-header flex flex-col bg-c-primary-bg px-6 pt-24 pb-10 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
            className="absolute right-6 top-6 text-white rounded-token border border-white/30 p-2"
          >
            <X size={22} />
          </button>

          <nav aria-label="Mobile primary" className="flex flex-col gap-2">
            {NAV_LINKS.map((link, idx) => (
              <NavLink
                key={link.name}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  [
                    'animate-fade-in text-3xl font-bold py-2 transition-colors duration-200 ease-standard',
                    isActive ? 'text-c-ondark-primary' : 'text-white hover:text-c-ondark-primary',
                  ].join(' ')
                }
                style={{ animationDelay: `${idx * 40}ms`, opacity: 0 }}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-6 pt-10">
            <Button to="/contact" variant="onDark" size="lg" className="w-full">
              Request a Consultation
            </Button>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <Mail size={16} aria-hidden="true" /> [EMAIL PLACEHOLDER]
              </span>
              <span className="flex items-center gap-2">
                <Phone size={16} aria-hidden="true" /> [PHONE PLACEHOLDER]
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
