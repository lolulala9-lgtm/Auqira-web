'use client';

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const docHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const nearBottom = latest > docHeight - windowHeight - 400;
    setIsVisible(latest > 600 && !nearBottom);
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="https://calendly.com/auqira"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 bg-teal text-ivory rounded-full shadow-lg hover:shadow-xl hover:bg-[#0a4a51] transition-all duration-300 group"
        >
          <span className="text-xs font-semibold uppercase tracking-wider">Book Your Audit</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
