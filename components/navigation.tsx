'use client';

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { label: 'The Audit', target: 'audit' },
  { label: 'Industries', target: 'industries' },
  { label: 'Pricing', target: 'pricing' },
  { label: 'FAQ', target: 'faq' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isInDarkZone, setIsInDarkZone] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  // IntersectionObserver: detect when hero is visible
  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInDarkZone(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileOpen(false);
  };

  // Dynamic colors based on dark/light zone
  const bgColor = isScrolled
    ? isInDarkZone
      ? 'rgba(13, 15, 20, 0.85)'
      : 'rgba(253, 251, 247, 0.92)'
    : 'rgba(0, 0, 0, 0)';

  const textColor = isInDarkZone ? '#FFFFFF' : '#0F0F0F';
  const borderColor = isScrolled
    ? isInDarkZone
      ? 'rgba(255,255,255,0.06)'
      : 'rgba(0,0,0,0.06)'
    : 'rgba(0,0,0,0)';

  return (
    <motion.nav
      animate={{
        backgroundColor: bgColor,
        backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
        borderBottomColor: borderColor,
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 w-full z-50 border-b"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Wordmark Logo */}
        <Link
          href="#"
          className="text-xl font-bold tracking-tight transition-colors duration-300"
          style={{ color: textColor }}
        >
          Au<span className="text-teal">q</span>ira
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollTo(link.target)}
              className="text-xs font-semibold uppercase tracking-wide transition-colors duration-300 hover:text-teal"
              style={{ color: textColor }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://calendly.com/auqira"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-teal text-white rounded-full font-semibold text-xs hover:bg-[#0a4a51] transition-all duration-300 shadow-md hover:shadow-lg uppercase tracking-wide"
          >
            Book Call
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 transition-colors hover:text-teal"
          aria-label="Toggle menu"
          style={{ color: textColor }}
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
            className="md:hidden overflow-hidden border-t"
            style={{
              backgroundColor: isInDarkZone ? '#0D0F14' : '#FDFBF7',
              borderColor: isInDarkZone ? 'rgba(255,255,255,0.06)' : '#E5E3DF',
            }}
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => scrollTo(link.target)}
                  className="block w-full text-left text-sm font-semibold uppercase tracking-wide py-2 hover:text-teal transition-colors"
                  style={{ color: isInDarkZone ? '#FFFFFF' : '#0F0F0F' }}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://calendly.com/auqira"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-3 bg-teal text-white rounded-full font-semibold hover:bg-[#0a4a51] transition-all duration-300 shadow-md mt-4"
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
