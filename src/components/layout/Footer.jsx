import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import TextLink from '../ui/TextLink';
import CtaBand from '../ui/CtaBand';
import Logo from './Logo';
import { DIVISIONS } from '../../content/divisions';
import { FOOTER_BRAND_LINE, MOTTO, COPYRIGHT, CONTACT } from '../../content/site';
// Social icons hidden until real URLs are supplied — rendering non-interactive
// icon-shaped spans alongside clickable links breaks consistency (H4).

export default function Footer() {
  const { pathname } = useLocation();
  // ServiceDetail.jsx renders its own division-specific CtaBand as item 8
  // of its template; without this check, the six /services/:slug routes
  // would show that band and then this generic one back to back. Every
  // other route (including /services itself, which has no CtaBand of its
  // own) keeps this instance — it's deck §3.11 on the homepage.
  const hideOnServiceDetail = /^\/services\/[^/]+\/?$/.test(pathname);

  return (
    // `bg-black` here, not the shared `c-primary-bg` navy token — by
    // request, just for the footer surface itself. CtaBand paints its own
    // `bg-c-primary` over the top portion regardless, so this only affects
    // the link columns + copyright bar beneath it.
    <footer className="bg-black text-c-ondark">
      {/* Closing CTA band (A3 §3g) — the shared component, not hand-coded
          here; Phase 4's ServiceDetail template reuses the same one. */}
      {!hideOnServiceDetail && (
        <CtaBand
          heading="Let's Build the Right Solution for Your Operation."
          body="Tell us what you need. Our team will work with you to develop the right solution."
        />
      )}

      {/* Main footer links — py-section-sm (not py-16 like CtaBand) so this
          black surface reads as substantial in its own right rather than
          feeling thin next to the CTA band's large heading above it. */}
      <div className="mfav-container py-section-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link to="/" className="inline-flex items-center w-fit rounded-token-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-c-ondark-primary">
              <Logo onDark />
            </Link>
            <p className="text-sm text-c-ondark/70 max-w-sm leading-relaxed">
              {FOOTER_BRAND_LINE}
            </p>
            <p className="text-micro uppercase tracking-wide text-c-ondark-primary">
              {MOTTO}
            </p>

          </div>

          {/* Services */}
          <div>
            <h3 className="text-eyebrow uppercase text-c-ondark/70 mb-4 pb-2 border-b border-c-ondark/15">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {DIVISIONS.map((division) => (
                <li key={division.id}>
                  <TextLink to={`/services/${division.id}`} onDark>
                    {division.name}
                  </TextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-eyebrow uppercase text-c-ondark/70 mb-4 pb-2 border-b border-c-ondark/15">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><TextLink to="/about" onDark>About Us</TextLink></li>
              <li><TextLink to="/industries" onDark>Industries</TextLink></li>
              <li><TextLink to="/faq" onDark>FAQ</TextLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-eyebrow uppercase text-c-ondark/70 mb-4 pb-2 border-b border-c-ondark/15">
              Contact
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-c-ondark/80">
              <li className="flex items-start gap-2">
                <MapPin size={16} aria-hidden="true" className="shrink-0 mt-0.5 text-c-ondark-primary" />
                <span>
                  {CONTACT.addressLines.map((line, idx) => (
                    <React.Fragment key={line}>
                      {idx > 0 && <br />}
                      {line}
                    </React.Fragment>
                  ))}
                </span>
              </li>
              {CONTACT.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-2">
                  <Phone size={16} aria-hidden="true" className="shrink-0 text-c-ondark-primary" />
                  <a className="underline-offset-4 hover:underline" href={`tel:${phone.replace(/\(0\)/g, '').replace(/[^+\d]/g, '')}`}>{phone}</a>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <Mail size={16} aria-hidden="true" className="shrink-0 text-c-ondark-primary" />
                <a className="break-all underline-offset-4 hover:underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-c-ondark/15">
        <div className="mfav-container flex flex-col sm:flex-row items-center justify-center gap-4 py-8 text-sm text-c-ondark/70">
          <p>{COPYRIGHT}</p>

        </div>
      </div>
    </footer>
  );
}
