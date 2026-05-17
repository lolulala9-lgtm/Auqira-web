'use client';

import { AnimateOnScroll } from './animate-on-scroll';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-32 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#0D0F14' }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(13, 92, 99, 0.3), transparent)',
        }}
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimateOnScroll variant="fadeUp" delay={0.1}>
          <p className="uppercase-label text-teal font-semibold mb-8">
            5 Industries. One Audit. 7 Days.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.2}>
          <h2 className="text-[2.5rem] lg:text-[4rem] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-6 text-balance">
            The businesses that figure out AI first will be impossible to compete with.
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.3}>
          <p className="text-lg text-[#A1A1AA] mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you're placing candidates, selling properties, running campaigns, shipping products, or pitching journalists — the workflows are different. The opportunity is the same.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://calendly.com/auqira"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal text-white rounded-full font-semibold hover:bg-[#0a4a51] transition-all duration-300 shadow-lg hover:shadow-xl text-base group"
            >
              Book Discovery Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#sample-audit"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white rounded-full font-semibold hover:bg-white/5 transition-all duration-300 text-base"
            >
              View Sample Report
            </a>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.5}>
          <div className="flex flex-wrap justify-center gap-6 text-[12px] text-[#71717A] font-medium">
            <span>🔒 50% upfront, 50% on delivery</span>
            <span className="hidden sm:inline text-[#3F3F46]">|</span>
            <span>📋 Full refund if we don&apos;t find 5 opportunities</span>
            <span className="hidden sm:inline text-[#3F3F46]">|</span>
            <span>⚡ 7-day delivery, guaranteed</span>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
