import React from 'react';
import Container from './ui/Container';
import Button from './ui/Button';
import TextLink from './ui/TextLink';

export default function Hero() {
  return (
    <section className="home-hero relative overflow-hidden bg-c-scrim">
      <img src="/assets/images/hero_section.jpg" alt="Offshore platform and support vessels at sea" width={1081} height={720} fetchpriority="high" className="absolute inset-0 h-full w-full object-cover" />
      <div aria-hidden="true" className="home-hero-scrim absolute inset-0" />
      <Container className="relative z-10 py-16 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-hero-sm md:text-hero text-c-ondark">The support behind your next operation.</h1>
          <p className="mt-6 text-lg text-c-ondark max-w-xl leading-relaxed">M-FAV Offshore and Allied Services Limited brings together marine, aviation, logistics and industrial capabilities to support your operation, from planning to delivery.</p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mt-8">
            <Button to="/services" size="lg" trailingArrow>Explore our services</Button>
            <Button to="/contact" variant="onDark" size="lg">Contact Us</Button>
          </div>
          <div className="mt-10 pt-6 border-t border-c-ondark/30 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-c-ondark">
            <span>Six specialist divisions. One point of coordination.</span>
            <TextLink to="/about" onDark standalone>Meet M-FAV</TextLink>
          </div>
        </div>
      </Container>
      <a
        href="#capabilities"
        aria-label="Scroll to Our Capabilities"
        className="hidden md:flex motion-reduce:!hidden absolute z-10 bottom-3 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-c-ondark/60 hover:text-c-ondark transition-colors duration-200 ease-standard"
      >
        <span className="text-micro uppercase">Scroll</span>
        <span className="relative h-10 w-px bg-c-ondark/20 overflow-hidden">
          <span aria-hidden="true" className="absolute left-0 top-0 h-2.5 w-px bg-c-ondark-primary animate-scroll-travel" />
        </span>
      </a>
    </section>
  );
}
