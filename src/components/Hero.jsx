import React from 'react';
import { ArrowRight, Shield, Anchor, Compass, ChevronDown } from 'lucide-react';

export default function Hero({ onRequestConsultation }) {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-c-bg">
      {/* Background Image with Dark Industrial Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/hero_offshore.svg"
          alt="Offshore Marine & Energy Platform"
          className="w-full h-full object-cover object-center scale-105 transform filter brightness-75 contrast-110"
        />
        {/* Multi-layered Vignette & Dark Gradients */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(180deg, rgba(18, 19, 24, 0.85) 0%, rgba(18, 19, 24, 0.65) 50%, rgba(18, 19, 24, 0.98) 100%), radial-gradient(circle at center, rgba(18,19,24,0.4) 0%, rgba(18,19,24,0.95) 90%)'
          }}
        />
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="mfav-container relative z-10 w-full pt-12">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-c-primary-bg/40 border border-c-ondark-primary/30 text-c-ondark-primary text-xs font-semibold uppercase tracking-widest mb-8 backdrop-blur-md">
            <Anchor size={14} className="text-c-ondark-teal" />
            Integrated Marine, Aviation & Industrial Support
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-8">
            Integrated Solutions.<br />
            <span className="text-c-ondark">
              Built for What <span className="underline decoration-c-primary-bg decoration-4 underline-offset-8">Moves the World.</span>
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg md:text-xl text-c-ondark/75 max-w-2xl font-normal leading-relaxed mb-10">
            Integrated marine, offshore, aviation, logistics, infrastructure, and industrial support services built for demanding operational environments worldwide.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <a
              href="#services"
              className="btn-primary w-full sm:w-auto text-center"
            >
              Explore Our Services
              <ArrowRight size={18} />
            </a>

            <button
              onClick={onRequestConsultation}
              className="btn-secondary w-full sm:w-auto text-center"
            >
              Contact Us
            </button>
          </div>

          {/* Industrial Highlights Pill Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl border-t border-white/15 pt-8 text-left">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-c-ondark-teal"></div>
              <span className="text-xs text-c-ondark uppercase tracking-wider font-semibold">Marine & Offshore</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-c-ondark-primary"></div>
              <span className="text-xs text-c-ondark uppercase tracking-wider font-semibold">Aviation Logistics</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-c-ondark-teal"></div>
              <span className="text-xs text-c-ondark uppercase tracking-wider font-semibold">Energy & Infra</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-c-ondark-primary"></div>
              <span className="text-xs text-c-ondark uppercase tracking-wider font-semibold">Equipment & PPE</span>
            </div>
          </div>

        </div>
      </div>

      {/* Down Arrow Cue */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-c-ondark/75 hover:text-white transition-colors duration-200 animate-bounce"
        aria-label="Scroll to content"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
}
