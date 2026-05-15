'use client';

import { AnimateOnScroll } from './animate-on-scroll';

export function CTASection() {
  return (
    <section id="cta" className="bg-obsidian text-ivory py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="20" height="20" fill="none" stroke="#0D5C63" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#pattern)" />
        </svg>
      </div>

      <AnimateOnScroll variant="fadeUpScale" delay={0.1} className="max-w-3xl mx-auto text-center relative z-10 space-y-8">
        <div className="space-y-4">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance">
            Ready to Unlock AI Value?
          </h2>
          <p className="text-xl text-ivory/80 max-w-2xl mx-auto">
            Schedule a brief discovery call to see if your agency is a fit for our audit.
          </p>
        </div>

        <a
          href="https://calendly.com/auqira"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block btn-primary bg-ivory text-obsidian hover:bg-cream px-8 py-4"
        >
          Book Your Discovery Call
        </a>

        <p className="text-xs uppercase text-ivory/60 font-semibold tracking-widest">
          15 Minutes • No Commitment • Zero Cost
        </p>
      </AnimateOnScroll>
    </section>
  );
}
