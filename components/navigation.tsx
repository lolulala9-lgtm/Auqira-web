'use client';

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { label: 'The Audit', target: 'audit' },
  { label: 'Pricing', target: 'pricing' },
  { label: 'FAQ', target: 'faq' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 100);
  });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileOpen(false);
  };

  return (
    <motion.nav
      animate={{
        backgroundColor: isScrolled ? 'rgba(253, 251, 247, 0.92)' : 'rgba(253, 251, 247, 0)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
        boxShadow: isScrolled ? '0 2px 8px rgba(15, 15, 15, 0.08)' : '0 0 0 rgba(0, 0, 0, 0)',
      }}
      className="sticky top-0 w-full z-50 border-b border-border-custom"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Wordmark Logo */}
        <Link href="#" className="text-xl font-bold text-obsidian tracking-tight">
          Au<span className="text-teal">q</span>ira
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollTo(link.target)}
              className="text-obsidian hover:text-teal transition-colors text-xs font-semibold uppercase tracking-wide"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://calendly.com/auqira"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-teal text-ivory rounded-full font-semibold text-xs hover:bg-[#0a4a51] transition-all duration-300 shadow-md hover:shadow-lg uppercase tracking-wide"
          >
            Book Call
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 text-obsidian hover:text-teal transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="md:hidden overflow-hidden border-t border-gray-200 bg-ivory"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => scrollTo(link.target)}
                  className="block w-full text-left text-obsidian hover:text-teal transition-colors text-sm font-semibold uppercase tracking-wide py-2"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://calendly.com/auqira"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center btn-primary mt-4"
              >
                Book Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
