import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, PhoneCall, ChevronRight } from 'lucide-react';
import { VelocityLogo } from '../ui/VelocityLogo';
import { Button } from '../ui/Button';
import { navItems } from '../../data/navigation';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  onOpenSearch,
}) => {
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#071A3A]/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#FCFAF5] shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-[#D89A18]/20"
          >
            <div className="p-5 flex items-center justify-between border-b border-[#F5EFE2] bg-white/80 backdrop-blur-md sticky top-0 z-10">
              <VelocityLogo size="sm" variant="dark" />
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#071A3A] hover:bg-[#071A3A]/5 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="px-5 py-6 flex flex-col gap-1.5 flex-1">
              <button
                onClick={() => {
                  onClose();
                  onOpenSearch();
                }}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-white border border-[#F5EFE2] text-[#647084] hover:text-[#071A3A] hover:border-[#D89A18]/40 transition-all text-sm mb-3"
              >
                <Search className="w-4 h-4 text-[#D89A18]" />
                <span>Search courses, events, trophies...</span>
              </button>

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A18] px-2 mb-1">
                Navigation
              </span>

              {navItems.map((item) => {
                const isActive =
                  location.pathname === item.href ||
                  (item.href !== '/' && location.pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.label + item.href}
                    to={item.href}
                    onClick={onClose}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-medium text-base transition-all ${
                      isActive
                        ? 'bg-[#071A3A] text-white font-semibold shadow-sm'
                        : 'text-[#18243A] hover:bg-[#F5EFE2] hover:text-[#071A3A]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#F5C542]" />}
                      {item.label}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isActive ? 'text-[#F5C542]' : 'text-[#647084]'
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            <div className="p-5 border-t border-[#F5EFE2] bg-white flex flex-col gap-3">
              <Link to="/contact" onClick={onClose} className="w-full">
                <Button variant="gold" size="lg" className="w-full justify-center shadow-md">
                  Enroll Now
                </Button>
              </Link>
              <div className="flex items-center justify-between text-xs text-[#647084] pt-2 px-1">
                <span className="flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-[#D89A18]" />
                  +91 98765 43210
                </span>
                <span className="font-serif italic text-[#071A3A]">Discipline today</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
