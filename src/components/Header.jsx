import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header({ onRequestConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Safety', href: '#safety' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-c-bg/95 backdrop-blur-md border-b border-c-border py-3 shadow-md'
          : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent py-4 border-b border-white/10'
      }`}
    >
      <div className="mfav-container relative flex items-center justify-between">
        {/* Official Brand Logo */}
        <a href="#" className="flex items-center text-decoration-none group">
          <div className="bg-white rounded-lg px-3 py-1.5 shadow-lg border border-white/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
            <img
              src="/assets/images/mfav_logo.png"
              alt="M-FAV Offshore & Allied Services Ltd"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain"
            />
          </div>
        </a>

        {/* Desktop Navigation — absolutely centered on the header itself,
            so it stays truly centered regardless of how wide the logo
            or CTA button are (a plain flex justify-between only centers
            it relative to its siblings' widths, not the header). */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 text-decoration-none ${
                isScrolled
                  ? 'text-c-on hover:text-c-primary-bg'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onRequestConsultation}
            className="btn-primary !text-xs uppercase tracking-wider font-semibold !py-2 !px-4"
          >
            Request Quote
            <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded border ${
            isScrolled
              ? 'text-c-on bg-c-bg-alt border-c-border'
              : 'text-white bg-white/10 border-white/20'
          }`}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[68px] bg-c-bg border-b border-c-border p-6 shadow-2xl animate-fade-in flex flex-col gap-5">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-c-on hover:text-c-primary-bg py-1 text-decoration-none"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-c-border/60">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestConsultation();
              }}
              className="btn-primary w-full justify-center"
            >
              Request Quote
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
