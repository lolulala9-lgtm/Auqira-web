'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

export function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const showModal = useCallback(() => {
    if (hasTriggered) return;
    // Don't show if user has dismissed before this session
    if (typeof window !== 'undefined' && sessionStorage.getItem('exit-intent-dismissed')) return;
    setHasTriggered(true);
    setIsOpen(true);
  }, [hasTriggered]);

  useEffect(() => {
    // Desktop: mouse leave toward top of viewport
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5) {
        showModal();
      }
    };

    // Mobile: inactivity timeout (45 seconds)
    let inactivityTimer: ReturnType<typeof setTimeout>;
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    if (isMobile) {
      const resetTimer = () => {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(showModal, 45000);
      };
      resetTimer();
      window.addEventListener('touchstart', resetTimer);
      window.addEventListener('scroll', resetTimer);

      return () => {
        clearTimeout(inactivityTimer);
        window.removeEventListener('touchstart', resetTimer);
        window.removeEventListener('scroll', resetTimer);
      };
    } else {
      document.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        document.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [showModal]);

  const handleClose = () => {
    setIsOpen(false);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('exit-intent-dismissed', 'true');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    // Store email in localStorage for manual retrieval
    // In production, connect to Mailchimp/Resend API
    const leads = JSON.parse(localStorage.getItem('auqira-leads') || '[]');
    leads.push({ email, timestamp: new Date().toISOString() });
    localStorage.setItem('auqira-leads', JSON.stringify(leads));

    setSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-obsidian/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="relative bg-ivory rounded-2xl shadow-2xl max-w-md w-full p-8 space-y-6 border border-gray-200"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1.5 text-slate-custom hover:text-obsidian transition-colors rounded-full hover:bg-gray-100"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {!submitted ? (
              <>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-obsidian">
                    Not ready to book yet?
                  </h3>
                  <p className="text-slate-custom text-sm leading-relaxed">
                    Get the free <span className="font-semibold text-obsidian">5-Point AI Readiness Checklist</span> for Recruitment Agencies — the exact framework we use to identify AI opportunities in the first 20 minutes of every audit.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-obsidian placeholder:text-slate-custom/50 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2 group"
                  >
                    Send me the checklist
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </form>

                <p className="text-[11px] text-slate-custom/60 text-center">
                  No spam. Unsubscribe anytime.
                </p>
              </>
            ) : (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-obsidian">Check your inbox</h3>
                <p className="text-slate-custom text-sm">
                  We&apos;ll send the AI Readiness Checklist shortly.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
