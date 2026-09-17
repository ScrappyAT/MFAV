import React from 'react';
import Container from './ui/Container';

/**
 * Partners / Clients — A3 §3f. A single restrained row of generic
 * grayscale placeholder marks: abstract geometric shapes generated as
 * inline SVG, uniform optical weight, low opacity, no hover color. None
 * of these resemble, name, or imply any real company.
 */
const MARKS = [
  <svg key="1" viewBox="0 0 120 32" fill="currentColor"><rect x="4" y="10" width="12" height="12" /><rect x="20" y="4" width="6" height="24" /><rect x="30" y="14" width="40" height="4" /><circle cx="90" cy="16" r="8" /></svg>,
  <svg key="2" viewBox="0 0 120 32" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 26 18 6l12 20z" /><path d="M40 8h30" /><path d="M40 16h22" /><path d="M40 24h30" /></svg>,
  <svg key="3" viewBox="0 0 120 32" fill="currentColor"><circle cx="16" cy="16" r="10" /><rect x="34" y="6" width="4" height="20" /><rect x="42" y="6" width="4" height="20" /><rect x="50" y="6" width="4" height="20" /><rect x="66" y="10" width="30" height="12" /></svg>,
  <svg key="4" viewBox="0 0 120 32" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="6" y="6" width="20" height="20" /><path d="M34 16h60" /><circle cx="104" cy="16" r="6" /></svg>,
  <svg key="5" viewBox="0 0 120 32" fill="currentColor"><path d="M6 6h10v10H6zM20 6h10v10H20zM6 20h10v10H6zM20 20h10v10H20z" /><rect x="46" y="8" width="60" height="16" /></svg>,
  <svg key="6" viewBox="0 0 120 32" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 16a10 10 0 1 1 20 0 10 10 0 0 1-20 0z" /><path d="M34 16h72" /></svg>,
];

export default function Partners() {
  return (
    <section className="bg-c-bg">
      <Container className="py-section-sm md:py-section">
        <h2 className="text-display-sm text-c-on text-center mb-12">
          Trusted to Support Critical Operations
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {MARKS.map((mark, idx) => (
            <span key={idx} className="h-8 w-28 text-c-on-muted opacity-40" aria-hidden="true">
              {mark}
            </span>
          ))}
        </div>
        <p className="mt-8 max-w-2xl mx-auto text-center text-c-on-muted leading-relaxed">
          Our services support international oil and gas operators, EPC contractors and
          marine operators working in Nigeria and the Gulf of Guinea.
        </p>
        <p className="mt-4 text-center text-sm italic text-c-on-muted">
          Client marks shown are placeholders pending confirmation.
        </p>
      </Container>
    </section>
  );
}
