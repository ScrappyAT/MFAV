import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import TextLink from '../ui/TextLink';
import CtaBand from '../ui/CtaBand';
import Logo from './Logo';
import { DIVISIONS } from '../../content/divisions';
import { FOOTER_BRAND_LINE, MOTTO, COPYRIGHT, CONTACT } from '../../content/site';

// No real social URLs exist yet (client hasn't supplied handles). Per A2.6
// these render as non-interactive placeholders rather than fake `href="#"`
// links — see the Phase 1 report for the open item.
const SOCIALS = [
  { name: 'LinkedIn', Icon: Linkedin },
  { name: 'X', Icon: Twitter },
  { name: 'Facebook', Icon: Facebook },
  { name: 'Instagram', Icon: Instagram },
];

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
            <div className="flex items-center gap-3 pt-2">
              {SOCIALS.map(({ name, Icon }) => (
                <span
                  key={name}
                  title={`${name} — placeholder, pending client-supplied URL`}
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-token border border-c-ondark/25 text-c-ondark/40"
                >
                  <Icon size={16} />
                </span>
              ))}
            </div>
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
              <li><TextLink to="/company" onDark>Company</TextLink></li>
              <li><TextLink to="/industries" onDark>Industries</TextLink></li>
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
                  <span>{phone}</span>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <Mail size={16} aria-hidden="true" className="shrink-0 text-c-ondark-primary" />
                <span>{CONTACT.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-c-ondark/15">
        <div className="mfav-container flex flex-col sm:flex-row items-center justify-between gap-4 py-8 text-sm text-c-ondark/70">
          <p>{COPYRIGHT}</p>
          {/* No /privacy or /terms route exists in the A5 IA — rendered as
              plain text rather than a fake href="#" link. Flagged in the
              Phase 1 report as an open question (add real pages, or omit). */}
          <div className="flex items-center gap-6 text-c-ondark/70">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
