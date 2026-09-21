import React from 'react';
import Container from './ui/Container';

/**
 * Clients / Partners — real client marks laid out along three dashed
 * guide arcs (replaces the A3 §3f placeholder-mark row, by request).
 * The first ten carries the `.lit` marker treatment from the supplied
 * markup; all marks render at equal weight so the bottom row's supplier
 * brands aren't hidden.
 */
const CLIENTS = [
  { alt: 'First E&P', file: 'first-ep', left: '9.6935%', top: '82.8513%', lit: true },
  { alt: 'Seplat Energy', file: 'seplat', left: '22.107%', top: '65.4539%', lit: true },
  { alt: 'Petralon Energy', file: 'petralon', left: '40.0451%', top: '55.7991%', lit: true },
  { alt: 'NLNG', file: 'nlng', left: '59.9549%', top: '55.7991%', lit: true },
  { alt: 'Brightwaters Energy', file: 'brightwaters', left: '77.893%', top: '65.4539%', lit: true },
  { alt: 'Sahara Group', file: 'sahara', left: '90.3065%', top: '82.8513%', lit: true },
  { alt: 'Savannah Energy', file: 'savannah', left: '23.7913%', top: '86.9318%', lit: true },
  { alt: 'Saipem', file: 'saipem', left: '34.8684%', top: '74.0377%', lit: true },
  { alt: 'TotalEnergies', file: 'totalenergies', left: '50%', top: '69.3182%', lit: true },
  { alt: 'Tulcan Energy', file: 'tulcan', left: '65.1316%', top: '74.0377%', lit: true },
  { alt: 'Dangote Refinery', file: 'dangote-refinery', left: '76.2087%', top: '86.9318%', lit: true },
  { alt: 'Dangote Cement', file: 'dangote-cement', left: '36.3259%', top: '94.5455%' },
  { alt: 'Deltaplus', file: 'deltaplus', left: '42.1053%', top: '87.2249%' },
  { alt: 'Safety Jogger', file: 'safety-jogger', left: '50%', top: '84.5455%' },
  { alt: '3M', file: '3m', left: '57.8947%', top: '87.2249%' },
  { alt: 'Portwest', file: 'portwest', left: '63.6741%', top: '94.5455%' },
];

const ARCS = [
  'M 40 460 A 340 220 0 0 1 720 460',
  'M 150 460 A 230 155 0 0 1 610 460',
  'M 260 460 A 120 88 0 0 1 500 460',
];

export default function Partners() {
  return (
    <section className="bg-c-bg">
      <Container className="py-section-sm md:py-section">
        <h2 className="text-display-sm md:text-display text-c-on text-center mb-8">
          Clients We've Worked With
        </h2>
        <p className="max-w-2xl mx-auto text-center text-base md:text-lg text-c-on-muted leading-relaxed mb-4">
          We're proud to have collaborated with industry leaders and forward-thinking
          organizations across sectors.
        </p>
        {/* The arcs are decorative (aria-hidden); the marks are the content.
            The stage is `hidden lg:block` per the supplied markup — on
            smaller screens the section is heading + line only. */}
        <div className="arc-stage hidden lg:block" id="arcStage">
          <svg viewBox="0 0 760 440" className="arc-svg" aria-hidden="true" preserveAspectRatio="none">
            {ARCS.map((d) => (
              <path key={d} d={d} fill="none" strokeWidth="1.2" strokeDasharray="5 5" />
            ))}
          </svg>
          {CLIENTS.map((client) => (
            <React.Fragment key={client.alt}>
              <div
                className={`dot-marker${client.lit ? ' lit' : ''}`}
                style={{ left: client.left, top: client.top }}
              />
              <div className="logo-dot" style={{ left: client.left, top: client.top }}>
                <div className="logo-img-wrap">
                  <img
                    src={`/assets/images/brands/${client.file}.png`}
                    alt={client.alt}
                    loading="lazy"
                  />
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}