import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { VelocityLogo } from '../ui/VelocityLogo';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { MobileDrawer } from './MobileDrawer';
import { navItems } from '../../data/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      navigate(`/programs?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3 ${
          isScrolled
            ? 'glass-navbar shadow-md'
            : 'bg-white/40 backdrop-blur-md border-b border-white/50 shadow-sm'
        }`}
      >
        <Container size="wide">
          <div className="flex items-center justify-between gap-3">
            {/* Logo */}
            <Link
              to="/"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D89A18] rounded-lg p-1 shrink-0"
            >
              <VelocityLogo size="md" variant="dark" />
            </Link>

            {/* Desktop Center Navigation Bar - Pill Container */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow-sm">
              {navItems.map((item) => {
                const isActive =
                  location.pathname === item.href ||
                  (item.href !== '/' && location.pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.label + item.href}
                    to={item.href}
                    className={`relative px-3 py-1 text-xs xl:text-sm font-medium tracking-wide transition-all duration-200 focus:outline-none rounded-full ${
                      isActive
                        ? 'text-[#071A3A] font-bold'
                        : 'text-[#647084] hover:text-[#071A3A]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#D89A18] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right side CTA & Search Controls */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Search Icon Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#071A3A] bg-white/80 hover:bg-white border border-[#071A3A]/10 hover:border-[#D89A18] shadow-sm transition-all"
                aria-label="Search"
                title="Search"
              >
                <Search className="w-4.5 h-4.5 text-[#071A3A]" />
              </button>

              {/* Enroll Now Button */}
              <Link to="/contact">
                <Button
                  variant="primary"
                  size="md"
                  className="shadow-md hover:shadow-lg bg-[#071A3A] text-white hover:bg-[#102C59] flex items-center gap-1.5"
                >
                  <span>Enroll Now</span>
                  <span>→</span>
                </Button>
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#071A3A] bg-white/80 border border-[#071A3A]/10 shadow-sm"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              <Link to="/contact">
                <Button variant="gold" size="sm" className="text-xs px-3 py-1.5">
                  Enroll
                </Button>
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-[#071A3A] bg-white/80 hover:bg-white transition-colors border border-[#071A3A]/10 shadow-sm"
                aria-label="Open mobile navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Global Interactive Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#071A3A]/70 backdrop-blur-md"
              onClick={() => setIsSearchOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#D89A18]/30 z-10"
            >
              <form onSubmit={handleSearchSubmit} className="p-4 border-b border-[#F5EFE2] flex items-center gap-3">
                <Search className="w-5 h-5 text-[#D89A18] shrink-0" />
                <input
                  type="text"
                  placeholder="Search programs, achievements, events, or resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full text-base font-sans outline-none text-[#071A3A] placeholder-[#647084]"
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#647084] hover:text-[#071A3A] hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </form>

              <div className="p-4 max-h-80 overflow-y-auto">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#647084] mb-2">
                  Quick Search Shortcuts
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Beginner Course', path: '/programs' },
                    { label: 'State Champions', path: '/achievements' },
                    { label: 'FIDE Tournaments', path: '/events' },
                    { label: 'Contact Academy', path: '/contact' },
                  ].map((tag) => (
                    <button
                      key={tag.label}
                      type="button"
                      onClick={() => {
                        setIsSearchOpen(false);
                        navigate(tag.path);
                      }}
                      className="text-xs px-3 py-1.5 rounded-full bg-[#F5EFE2] text-[#071A3A] hover:bg-[#071A3A] hover:text-white transition-colors"
                    >
                      {tag.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
