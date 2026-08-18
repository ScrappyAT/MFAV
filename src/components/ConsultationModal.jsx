import React, { useState } from 'react';
import { X, Send, CheckCircle2, Building, Mail, Phone, User, MessageSquare } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Marine & Offshore',
    details: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep success state visible then close
    }, 1500);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content p-6 sm:p-8 bg-c-surface border-c-border" 
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-c-muted hover:text-c-primary-bg p-1 rounded hover:bg-c-bg-alt"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-bold text-c-teal uppercase tracking-wider">COMMERCIAL INQUIRY</span>
              <h3 className="text-2xl font-bold text-c-on mt-1">Request a Quote</h3>
              <p className="text-xs text-c-muted mt-1">
                Fill out your project specifications and our operations team will send you a tailored quote.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-c-on mb-1">Full Name *</label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-3 text-c-muted" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-c-bg border border-c-border rounded py-2 pl-9 pr-3 text-sm text-c-on focus:outline-none focus:border-c-teal"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-c-on mb-1">Company / Organization *</label>
                  <div className="relative">
                    <Building size={16} className="absolute left-3 top-3 text-c-muted" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Energy Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-c-bg border border-c-border rounded py-2 pl-9 pr-3 text-sm text-c-on focus:outline-none focus:border-c-teal"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-c-on mb-1">Corporate Email *</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-3 text-c-muted" />
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-c-bg border border-c-border rounded py-2 pl-9 pr-3 text-sm text-c-on focus:outline-none focus:border-c-teal"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-c-on mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3 top-3 text-c-muted" />
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-c-bg border border-c-border rounded py-2 pl-9 pr-3 text-sm text-c-on focus:outline-none focus:border-c-teal"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-c-on mb-1">Division of Interest</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-c-bg border border-c-border rounded py-2 px-3 text-sm text-c-on focus:outline-none focus:border-c-teal"
                >
                  <option value="Marine & Offshore">Marine & Offshore Operations</option>
                  <option value="Aviation Support">Aviation & Journey Management</option>
                  <option value="Energy & Infrastructure">Energy & Infrastructure Maintenance</option>
                  <option value="Logistics & Haulage">Logistics & Heavy Haulage</option>
                  <option value="Equipment & PPE">Equipment & PPE Supply</option>
                  <option value="Property & Investment">Property & Real Estate Investment</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-c-on mb-1">Project Details / Requirements</label>
                <textarea
                  rows="3"
                  placeholder="Outline your scope of work, timeline, and location details..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full bg-c-bg border border-c-border rounded py-2 px-3 text-sm text-c-on focus:outline-none focus:border-c-teal"
                ></textarea>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-secondary text-xs uppercase"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary text-xs uppercase"
                >
                  Submit Quote Request
                  <Send size={14} />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-c-teal/20 border border-c-teal flex items-center justify-center text-c-teal mx-auto">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-2xl font-bold text-c-on">Quote Request Received</h3>
            <p className="text-sm text-c-muted max-w-md mx-auto">
              Thank you, <strong className="text-c-on">{formData.name}</strong>. Our commercial operations team has logged your inquiry for <strong className="text-c-teal">{formData.service}</strong> and will send your quote directly.
            </p>
            <button
              onClick={handleReset}
              className="btn-primary text-xs uppercase mt-4"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
