import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, Shield } from 'lucide-react';

export default function Footer({ onRequestConsultation }) {
  return (
    <footer className="bg-c-bg-alt text-c-on-muted border-t border-c-border">

      {/* 11. Final CTA Banner */}
      <div id="contact" className="border-b border-c-border py-16">
        <div className="mfav-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 sm:p-12 rounded-lg bg-c-primary-bg border border-c-primary-bg relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-c-teal/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-xl">
              <span className="text-xs font-bold text-c-ondark-teal uppercase tracking-widest">GET STARTED</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 mb-3">
                Ready to elevate your operations?
              </h2>
              <p className="text-sm text-c-ondark/75">
                Contact our commercial team to discuss customized marine, aviation, energy, or logistics solutions for your business.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <button
                onClick={onRequestConsultation}
                className="btn-secondary text-sm uppercase py-3.5 px-7"
                style={{ backgroundColor: 'var(--clr-ondark)', color: 'var(--clr-primary-bg)', borderColor: 'transparent' }}
              >
                GET IN TOUCH
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="py-16">
        <div className="mfav-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

            {/* Col 1: Brand Info */}
            <div className="lg:col-span-2 space-y-4">
              <a href="#" className="inline-block text-decoration-none">
                <div className="bg-white rounded-lg px-3.5 py-2 shadow-md border border-c-border inline-flex items-center">
                  <img
                    src="/assets/images/mfav_logo.png"
                    alt="M-FAV Offshore & Allied Services Ltd"
                    className="h-10 md:h-12 w-auto object-contain"
                  />
                </div>
              </a>

              <p className="text-xs text-c-on-muted leading-relaxed max-w-sm">
                Integrated Solutions. Built for What Moves the World. Providing comprehensive maritime, aviation, energy, equipment, and logistics support.
              </p>

              <div className="pt-2 text-xs text-c-primary-bg font-semibold flex items-center gap-2">
                <Shield size={16} className="text-c-teal" />
                <span>Certified Industrial & Offshore Support Operator</span>
              </div>
            </div>

            {/* Col 2: Divisions */}
            <div>
              <h4 className="text-xs font-bold text-c-on uppercase tracking-wider mb-4 border-b border-c-border pb-2">
                DIVISIONS
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#divisions" className="hover:text-c-primary-bg transition-colors text-decoration-none">Marine & Offshore</a></li>
                <li><a href="#divisions" className="hover:text-c-primary-bg transition-colors text-decoration-none">Aviation Support</a></li>
                <li><a href="#divisions" className="hover:text-c-primary-bg transition-colors text-decoration-none">Energy & Infrastructure</a></li>
                <li><a href="#divisions" className="hover:text-c-primary-bg transition-colors text-decoration-none">Logistics & Haulage</a></li>
                <li><a href="#divisions" className="hover:text-c-primary-bg transition-colors text-decoration-none">Equipment & PPE</a></li>
                <li><a href="#divisions" className="hover:text-c-primary-bg transition-colors text-decoration-none">Property & Investment</a></li>
              </ul>
            </div>

            {/* Col 3: Company Links */}
            <div>
              <h4 className="text-xs font-bold text-c-on uppercase tracking-wider mb-4 border-b border-c-border pb-2">
                COMPANY
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#about" className="hover:text-c-primary-bg transition-colors text-decoration-none">About Us</a></li>
                <li><a href="#services" className="hover:text-c-primary-bg transition-colors text-decoration-none">Services Overview</a></li>
                <li><a href="#industries" className="hover:text-c-primary-bg transition-colors text-decoration-none">Industries Served</a></li>
                <li><a href="#projects" className="hover:text-c-primary-bg transition-colors text-decoration-none">Projects Portfolio</a></li>
                <li><a href="#safety" className="hover:text-c-primary-bg transition-colors text-decoration-none">Safety & HSE Policy</a></li>
                <li><a href="#contact" className="hover:text-c-primary-bg transition-colors text-decoration-none">Contact Us</a></li>
              </ul>
            </div>

            {/* Col 4: Contact / Office Info */}
            <div>
              <h4 className="text-xs font-bold text-c-on uppercase tracking-wider mb-4 border-b border-c-border pb-2">
                HEADQUARTERS
              </h4>
              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="text-c-teal shrink-0 mt-0.5" />
                  <span>MFAV Corporate Headquarters, Industrial Zone</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-c-primary-bg shrink-0" />
                  <span>inquiries@mfavoffshore.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-c-teal shrink-0" />
                  <span>+234 (0) 800 MFAV-CORP</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="py-6 bg-c-surface-high border-t border-c-border text-xs text-c-on-muted/70">
        <div className="mfav-container flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 MFAV Offshore & Allied Resources Limited. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-c-on cursor-pointer">Privacy Policy</span>
            <span className="hover:text-c-on cursor-pointer">Terms of Service</span>
            <span className="hover:text-c-on cursor-pointer">HSE Commitment</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
