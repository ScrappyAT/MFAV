import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone } from 'lucide-react';
import Button from '../ui/Button';
import Logo from './Logo';
import { NAV_LINKS } from '../../content/divisions';
import { CONTACT } from '../../content/site';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const mobileNavRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Close everything on route change.
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Escape closes whichever overlay is open.
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key !== 'Escape') return;
      if (mobileOpen) setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [mobileOpen]);

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

  return (
    <header className="fixed inset-x-0 top-0 z-header h-header bg-c-bg border-b border-c-border shadow-token">
      {/* Permanently solid/light (by request) — this used to transition
          from transparent-over-hero to this same solid state on scroll
          (a `solid` state + scroll listener + hysteresis thresholds +
          a contrast-rescue scrim for the transparent state's white-on-
          bright-sky failure case). All of that is gone: with the header
          never transparent, there's no transition to drive and no
          low-contrast transparent state to rescue. See Hero.jsx for the
          matching spacing adjustment this made necessary (the hero's
          content block now sits under a permanently opaque bar instead
          of a soft transparent-to-scrim gradient).

          Fixed at `h-header` (100px, by request) rather than sized by
          its own padding+content — the inner row below is `h-full` so
          it fills that exact height and `items-center` centers the logo/
          nav/CTA/hamburger within it (all well under 100px tall, so
          nothing clips). */}
      <div className="mfav-container h-full flex items-center justify-between gap-6">
        <Link to="/" className="shrink-0 rounded-token-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-c-primary">
          {/* Bigger than the default h-10 — the 100px-tall header (see
              above) has plenty of headroom, and the default size read as
              too small next to the nav links. */}
          <Logo className="h-16" />
        </Link>

        {/* Absolutely centered on the header itself (not just relative to
            its flex siblings) — see the Phase 1 note this restores: a
            plain flex justify-between only centers the nav relative to
            the logo/actions' combined width, not the header's true
            center, and the two rarely match. */}
        <nav aria-label="Primary" className="hidden xl:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  [
                    'text-sm font-medium text-c-on transition-colors duration-200 ease-standard hover:text-c-primary-bg',
                    isActive && 'border-b-2 border-c-primary',
                  ]
                    .filter(Boolean)
                    .join(' ')
                }
              >
                {link.name}
              </NavLink>
          ))}
        </nav>

        <div className="shrink-0 flex items-center gap-4">
          <div className="hidden xl:block">
            <Button to="/contact" variant="primary" size="sm">
              Request a Consultation
            </Button>
          </div>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileOpen((v) => !mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="xl:hidden flex items-center justify-center h-11 w-11 rounded-token border border-c-border text-c-on transition-colors duration-200 ease-standard"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile full-screen overlay */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          ref={mobileNavRef}
          className="xl:hidden fixed inset-0 top-0 z-header flex flex-col bg-c-primary-bg px-6 pt-32 pb-10 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
            className="absolute right-6 top-6 flex items-center justify-center h-11 w-11 text-white rounded-token border border-white/30"
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
                <Mail size={16} aria-hidden="true" /> {CONTACT.generalEmail}
              </span>
              {CONTACT.phones.map((phone) => (
                <span key={phone} className="flex items-center gap-2">
                  <Phone size={16} aria-hidden="true" /> {phone}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
