import React, { useState } from 'react';
import { ShieldCheck, Lock, CheckCircle2, ArrowRight, FileText, X } from 'lucide-react';

export default function SafetyExcellence() {
  const [showPolicyModal, setShowPolicyModal] = useState(false);

  return (
    <section id="safety" className="relative py-24 bg-c-bg-alt border-b border-c-border/30 overflow-hidden">
      {/* Background Dark Industrial Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/who_we_are_plant.svg"
          alt="Safety at Every Level of Operation"
          className="w-full h-full object-cover object-center filter brightness-30 contrast-125 scale-105"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(12, 14, 19, 0.9) 0%, rgba(12, 14, 19, 0.75) 50%, rgba(12, 14, 19, 0.95) 100%)'
          }}
        />
      </div>

      <div className="mfav-container relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* Shield Badge */}
          <div className="w-14 h-14 rounded-full bg-c-primary-bg/40 border border-c-ondark-teal/40 flex items-center justify-center text-c-ondark-teal mb-6 backdrop-blur-md">
            <ShieldCheck size={28} />
          </div>

          <span className="text-xs font-bold uppercase tracking-[0.15em] text-c-ondark-primary mb-3">HSE & COMPLIANCE</span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Safety at Every Level of Operation
          </h2>

          <p className="text-base md:text-lg text-c-ondark/75 leading-relaxed mb-8 max-w-2xl">
            Uncompromising safety standards and rigorous compliance protocols protect our workforce, assets, and the environment in every operational area.
          </p>

          <button
            onClick={() => setShowPolicyModal(true)}
            className="btn-primary"
          >
            VIEW SAFETY POLICY
            <ArrowRight size={18} />
          </button>

          {/* 3 Pillars Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-16 text-left">
            <div className="p-4 rounded bg-c-surface/95 backdrop-blur-md border border-c-border shadow-sm">
              <div className="flex items-center gap-2 text-c-teal font-bold text-sm mb-2">
                <CheckCircle2 size={16} />
                Zero-Harm Philosophy
              </div>
              <p className="text-xs text-c-muted">Strict hazard identification and proactive mitigation prior to every mission deployment.</p>
            </div>

            <div className="p-4 rounded bg-c-surface/95 backdrop-blur-md border border-c-border shadow-sm">
              <div className="flex items-center gap-2 text-c-primary font-bold text-sm mb-2">
                <CheckCircle2 size={16} />
                Regulatory Compliance
              </div>
              <p className="text-xs text-c-muted">Full compliance with IMO, ICAO, NIPEX, and international maritime safety regulations.</p>
            </div>

            <div className="p-4 rounded bg-c-surface/95 backdrop-blur-md border border-c-border shadow-sm">
              <div className="flex items-center gap-2 text-c-teal font-bold text-sm mb-2">
                <CheckCircle2 size={16} />
                Continuous Auditing
              </div>
              <p className="text-xs text-c-muted">Independent safety audits and continuous crew training across all division operations.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Safety Policy Modal */}
      {showPolicyModal && (
        <div className="modal-backdrop" onClick={() => setShowPolicyModal(false)}>
          <div className="modal-content p-6 sm:p-8" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowPolicyModal(false)}
              className="absolute top-4 right-4 text-c-muted hover:text-c-primary-bg"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-4 text-c-teal">
              <FileText size={24} />
              <h3 className="text-xl font-bold text-c-on">MFAV HSE & Safety Policy Standard</h3>
            </div>

            <div className="text-sm text-c-muted space-y-4 mb-6 leading-relaxed">
              <p>
                MFAV Offshore & Allied Resources Limited is committed to conducting all marine, aviation, energy, logistics, equipment supply, and property operations in a manner that protects the health and safety of our employees, contractors, clients, and host communities.
              </p>
              <h4 className="font-bold text-c-on text-base pt-2">Our Key Health, Safety & Environment Principles:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-c-on">Management Accountability:</strong> Safety performance is integral to corporate executive evaluation.</li>
                <li><strong className="text-c-on">Risk Control:</strong> Rigorous Risk Assessment (RA) & Job Safety Analysis (JSA) prior to execution.</li>
                <li><strong className="text-c-on">Emergency Preparedness:</strong> Maintained emergency response systems across all offshore vessels and transport fleets.</li>
                <li><strong className="text-c-on">Environmental Stewardship:</strong> Minimizing marine and atmospheric emissions across vessel and aviation operations.</li>
              </ul>
            </div>

            <div className="flex justify-end pt-4 border-t border-c-border/50">
              <button
                onClick={() => setShowPolicyModal(false)}
                className="btn-secondary text-xs uppercase"
              >
                Close Document
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
