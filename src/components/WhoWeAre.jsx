import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, Layers } from 'lucide-react';

export default function WhoWeAre() {
  return (
    <section id="about" className="mfav-section bg-c-bg border-b border-c-border/30 relative">
      <div className="mfav-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="section-tag">WHO WE ARE</span>
            
            <h2 className="section-title">
              Engineered for Scale.<br />
              Delivered with Precision.
            </h2>

            <p className="text-base md:text-lg text-c-muted leading-relaxed mb-6">
              MFAV Offshore & Allied Resources is an integrated services company providing comprehensive solutions across maritime, aviation, energy, and infrastructure sectors. We partner with industry leaders to ensure operational continuity in the most demanding environments.
            </p>

            <p className="text-sm md:text-base text-c-muted/80 leading-relaxed mb-8">
              Through strategic asset deployment, rigorous compliance, and specialized technical expertise, MFAV delivers mission-critical support that reduces risk and maximizes performance across land, air, and sea operations.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-3 rounded bg-c-surface border border-c-border/40">
                <ShieldCheck className="text-c-teal mt-0.5 shrink-0" size={20} />
                <div>
                  <h4 className="text-sm font-bold text-c-on mb-0.5">High Safety Protocol</h4>
                  <p className="text-xs text-c-muted">Standardized compliance & zero-compromise safety practices.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded bg-c-surface border border-c-border/40">
                <Layers className="text-c-primary mt-0.5 shrink-0" size={20} />
                <div>
                  <h4 className="text-sm font-bold text-c-on mb-0.5">End-to-End Execution</h4>
                  <p className="text-xs text-c-muted">Unified logistics, equipment, and journey management.</p>
                </div>
              </div>
            </div>

            {/* Discover More Link */}
            <div>
              <a href="#services" className="btn-outline-blue">
                DISCOVER MORE
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Visual Column - Industrial Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden border border-c-border shadow-2xl group">
              <img
                src="/assets/images/who_we_are_plant.svg"
                alt="MFAV Industrial Operations & Infrastructure"
                className="w-full h-[420px] md:h-[500px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 filter brightness-90"
              />
              {/* Overlay accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-c-primary-bg via-c-teal to-c-primary" />
              
              {/* Floating Stat Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-c-bg/90 backdrop-blur-md border border-c-border/60 flex items-center justify-between">
                <div>
                  <div className="text-xs text-c-primary font-semibold uppercase tracking-wider">Mission Statement</div>
                  <div className="text-sm text-c-on font-medium">Powering energy, maritime & aviation operations seamlessly.</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-c-primary-bg flex items-center justify-center text-white shrink-0 ml-3">
                  <Cpu size={16} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
