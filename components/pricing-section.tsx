'use client';

import { useState, useRef, useEffect } from 'react';
import { Check, ShieldCheck, ChevronDown } from 'lucide-react';
import { AnimateOnScroll } from './animate-on-scroll';
import { motion, AnimatePresence, useInView, useSpring, useTransform } from 'framer-motion';

/* ── Animated counter component ── */
function AnimatedPrice({ target, inView }: { target: number; inView: boolean }) {
  const spring = useSpring(0, { stiffness: 50, damping: 20, duration: 1.8 });
  const display = useTransform(spring, (v) => {
    const rounded = Math.round(v);
    return `$${rounded.toLocaleString('en-US')}`;
  });
  const [text, setText] = useState('$0');

  useEffect(() => {
    if (inView) {
      spring.set(target);
    }
  }, [inView, spring, target]);

  useEffect(() => {
    const unsubscribe = display.on('change', (v) => setText(v));
    return unsubscribe;
  }, [display]);

  return <span className="text-7xl font-bold text-obsidian">{text}</span>;
}

/* ── Stagger animation variants ── */
const featureListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const featureItemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

const features = [
  'Full Workflow Audit & Analysis',
  '60-Minute Deep-Dive Discovery Call',
  'AI Opportunity Matrix',
  'Tool & Integration Recommendations',
  'Conservative ROI Projections — with visible math, not just numbers',
  '90-Day Implementation Roadmap',
  'Executive Debrief & Q&A',
  'Tool Integration Compatibility Check (ATS, CRM, CMS + more)',
  'Shareable Presentation Deck (present to your partners in 60 seconds)',
];

export function PricingSection() {
  const [faqOpen, setFaqOpen] = useState(false);
  const priceRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);
  const priceInView = useInView(priceRef, { once: true, margin: '-80px' });
  const featuresInView = useInView(featureRef, { once: true, margin: '-60px' });

  return (
    <section id="pricing" className="bg-cream py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll variant="fadeUp" delay={0.1} className="mb-16">
          <p className="text-teal font-semibold text-[11px] tracking-widest uppercase mb-3">Pricing</p>
          <h2 className="text-[2.5rem] lg:text-[4rem] font-bold text-obsidian leading-[1.1] tracking-[-0.02em]">Fixed-Price Engagement.</h2>
        </AnimateOnScroll>

        <div className="flex justify-center">
          <AnimateOnScroll variant="fadeUpScale" delay={0.2} className="relative w-full max-w-xl">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
              <span className="inline-block px-5 py-2 bg-teal text-ivory text-xs font-semibold uppercase tracking-widest rounded-full shadow-md">
                Founding Client Rate
              </span>
            </div>

            {/* Subtle radial teal gradient backdrop */}
            <div
              className="pointer-events-none absolute inset-0 -inset-x-16 -inset-y-20 z-0"
              aria-hidden="true"
              style={{
                background:
                  'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(13,92,99,0.08) 0%, transparent 70%)',
              }}
            />

            <div className="glow-card card-premium border-2 border-teal p-12 space-y-8 mt-4 relative z-[1]">
              {/* Founding client banner */}
              <div className="bg-teal/5 border border-teal/20 rounded-xl p-4 text-center">
                <p className="text-sm font-semibold text-teal">
                  Founding client rate — 3 spots only, in exchange for a testimonial. Spots are limited.
                </p>
              </div>

              <div ref={priceRef} className="text-center space-y-3">
                <p className="text-teal text-sm font-semibold uppercase tracking-wider">Complete AI Audit</p>
                <div className="space-y-1">
                  <AnimatedPrice target={1500} inView={priceInView} />
                  <p className="text-slate-custom text-sm line-through">Normally $3,000</p>
                </div>
                <p className="text-teal font-bold text-sm">Founding client rate available for 3 businesses only.</p>
              </div>

              <motion.div
                ref={featureRef}
                className="space-y-3 border-y border-border-custom py-8"
                variants={featureListVariants}
                initial="hidden"
                animate={featuresInView ? 'visible' : 'hidden'}
              >
                {features.map((feature, idx) => (
                  <motion.div key={idx} className="flex gap-3" variants={featureItemVariants}>
                    <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                    <p className="text-slate-custom font-medium text-sm">{feature}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Risk reversal box */}
              <div className="rounded-xl border border-teal/30 bg-teal/5 p-5 flex gap-3">
                <ShieldCheck className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-custom leading-relaxed">
                  <span className="font-semibold text-obsidian">Risk-Free Guarantee:</span>{' '}
                  If the audit doesn&apos;t surface at least 5 specific, actionable AI opportunities for your business, I&apos;ll refund your fee in full. No questions asked.
                </p>
              </div>

              {/* Founding client FAQ */}
              <div className="rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setFaqOpen(!faqOpen)}
                  className="w-full text-left px-5 py-4 bg-ivory flex items-center justify-between group"
                  aria-expanded={faqOpen}
                >
                  <span className="font-semibold text-obsidian text-sm pr-4 group-hover:text-teal transition-colors">
                    Why the founding client rate?
                  </span>
                  <motion.div animate={{ rotate: faqOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-4 h-4 text-slate-custom" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {faqOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 py-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-slate-custom text-sm leading-relaxed">
                          Auqira is in its earliest stage. In exchange for the discounted rate, I ask only for an honest testimonial if the audit delivers value. No other obligation.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="https://calendly.com/auqira"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center btn-primary w-full"
              >
                Schedule Your Audit
              </a>

              <p className="text-center text-xs text-slate-custom uppercase tracking-wider font-semibold">
                Delivered in 7 Business Days, Guaranteed
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

