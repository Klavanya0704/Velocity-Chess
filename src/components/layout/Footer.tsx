import React from 'react';
import { Container } from '../ui/Container';
import { VelocityLogo } from '../ui/VelocityLogo';
import { siteConfig } from '../../data/siteConfig';
import { footerNavigation } from '../../data/navigation';
import { ChessIcon, ChessBoardPattern } from '../ui/ChessDecoration';
import { MapPin, Phone, Mail, Clock, Send, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#071A3A] text-white pt-16 pb-8 overflow-hidden border-t-2 border-[#D89A18]/30">
      {/* Background chess board subtle texture */}
      <ChessBoardPattern className="opacity-10" />

      {/* Background subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#D89A18]/10 via-transparent to-transparent pointer-events-none blur-3xl" />

      <Container size="wide" className="relative z-10">
        {/* Top Brand Banner section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div className="flex flex-col gap-2">
            <VelocityLogo variant="light" size="lg" />
            <p className="font-serif italic text-lg text-[#F5C542] mt-1">
              "{siteConfig.tagline}"
            </p>
          </div>

          {/* Back to top CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FCFAF5]/70 hover:text-[#F5C542] transition-colors"
            >
              <span>Back to Top</span>
              <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#D89A18] group-hover:text-[#071A3A] flex items-center justify-center transition-all duration-300">
                <ArrowUp className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>

        {/* Main Footer Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-white/10">
          {/* Col 1: About & Motto */}
          <div className="lg:col-span-2 flex flex-col gap-4 pr-0 lg:pr-6">
            <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              <ChessIcon type="knight" className="w-5 h-5 text-[#D89A18]" />
              About Velocity Chess Academy
            </h3>
            <p className="text-sm text-white/70 leading-relaxed font-sans">
              {siteConfig.description} Dedicated to cultivating analytical thinking, emotional resilience, and competitive excellence in young minds across India.
            </p>

            {/* Quick Contact Chips */}
            <div className="flex flex-col gap-2.5 mt-2 text-xs text-white/80">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#D89A18] shrink-0" />
                <span>{siteConfig.contact.address}, {siteConfig.contact.city}, {siteConfig.contact.state}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D89A18] shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D89A18] shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D89A18] shrink-0" />
                <span>{siteConfig.contact.operatingHours}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D89A18]">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-white/70">
              {footerNavigation.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#F5C542] transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Training Programs */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D89A18]">
              Learning Programs
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-white/70">
              {footerNavigation.learning.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#F5C542] transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Resources & Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D89A18]">
              Resources
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-white/70">
              {footerNavigation.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#F5C542] transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter Subscription Box */}
            <div className="mt-2 flex flex-col gap-2">
              <span className="text-xs font-semibold text-white/90">Stay Updated on Tournaments</span>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
                <input
                  type="email"
                  placeholder="Enter email..."
                  className="w-full px-3 py-2 text-xs rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#D89A18]"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-[#D89A18] text-[#071A3A] hover:bg-[#F5C542] rounded-r-lg font-bold transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social icons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Velocity Chess Academy. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D89A18] hover:text-[#071A3A] flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            )}
            {siteConfig.social.facebook && (
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D89A18] hover:text-[#071A3A] flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
            )}
            {siteConfig.social.youtube && (
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D89A18] hover:text-[#071A3A] flex items-center justify-center transition-all duration-200"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
};
