import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

export default function ServiceModal({ item, onClose, onRequestConsultation }) {
  if (!item) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content p-6 sm:p-8 max-w-2xl bg-c-surface border-c-border" 
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-c-muted hover:text-c-primary-bg p-1 rounded hover:bg-c-bg-alt"
        >
          <X size={20} />
        </button>

        {/* Modal Image Header if available */}
        {item.image && (
          <div className="relative h-48 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 overflow-hidden rounded-t-8 border-b border-c-border">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover filter brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-c-surface via-c-surface/40 to-transparent" />
            <div className="absolute bottom-4 left-6 sm:left-8">
              <span className="text-[10px] uppercase font-bold tracking-widest text-c-teal bg-c-bg/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                {item.badge || item.category || 'MFAV DIVISION'}
              </span>
            </div>
          </div>
        )}

        <div className="mb-4">
          <h3 className="text-2xl font-bold text-c-on mb-2">{item.title}</h3>
          <p className="text-sm text-c-muted leading-relaxed">
            {item.fullDesc || item.description}
          </p>
        </div>

        {/* Key Features / Operations List */}
        <div className="bg-c-bg p-4 rounded border border-c-border/50 mb-6">
          <h4 className="text-xs font-bold text-c-primary uppercase tracking-wider mb-3 flex items-center gap-2">
            <Cpu size={16} /> Key Capabilities & Operational Specifications
          </h4>
          <ul className="space-y-2 text-xs text-c-on">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-c-teal shrink-0 mt-0.5" />
              <span>Full compliance with international maritime and aviation safety protocols.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-c-teal shrink-0 mt-0.5" />
              <span>24/7 dedicated dispatch and active journey monitoring.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-c-teal shrink-0 mt-0.5" />
              <span>Certified technical personnel and high-grade equipment deployment.</span>
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-c-border/50">
          <div className="flex items-center gap-2 text-xs text-c-muted">
            <ShieldCheck size={16} className="text-c-teal" />
            <span>MFAV Verified Operational Service</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="btn-secondary text-xs uppercase"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestConsultation();
              }}
              className="btn-primary text-xs uppercase"
            >
              Inquire About This Service
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
