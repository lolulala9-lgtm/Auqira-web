'use client';

import { AnimateOnScroll } from './animate-on-scroll';

const credentials = [
  'AI Systems Builder',
  'Enterprise AI Consultant',
  'Vendor-Agnostic Advisor',
];

export function AboutSection() {
  return (
    <section className="bg-ivory py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - text */}
          <div className="space-y-6">
            <AnimateOnScroll variant="fadeUp" delay={0.1}>
              <div>
                <p className="text-teal font-semibold text-[11px] tracking-widest uppercase mb-3">
                  About
                </p>
                <h2 className="text-[2.5rem] lg:text-[4rem] font-bold text-obsidian leading-[1.1] tracking-[-0.02em]">
                  From Chaos to Strategy.
                </h2>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fadeUp" delay={0.2}>
              <p className="text-lg text-slate-custom leading-relaxed mb-6">
                Before building Auqira, I spent years building AI systems at the infrastructure level — understanding not just what AI tools claim to do, but exactly how they process data, where they fail, and which ones actually integrate with real business workflows.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fadeUp" delay={0.3}>
              <p className="text-lg text-slate-custom leading-relaxed mb-6">
                Auqira exists because most recruitment agencies are using AI like a novelty. I built this audit to change that — to give boutique founders the same structured AI strategy that enterprise firms pay $100K+ to get, delivered in 7 days for a fraction of the cost.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Right side - founder card */}
          <AnimateOnScroll variant="fadeLeft" delay={0.4} className="flex flex-col items-center space-y-6">
            {/* Founder card */}
            <div className="card-premium p-8 w-full max-w-sm space-y-6 border-t-4 border-t-teal">
              {/* Stylized monogram */}
              <div className="w-20 h-20 bg-gradient-to-br from-teal to-[#0a4a51] rounded-xl flex items-center justify-center shadow-lg mx-auto">
                <span className="text-3xl font-bold text-ivory/90 tracking-tight">SS</span>
              </div>

              <div className="text-center space-y-2">
                <p className="text-xl font-bold text-obsidian">Soham Singh</p>
                <p className="text-teal text-xs font-semibold uppercase tracking-widest">
                  Founder, Auqira · AI Infrastructure Builder
                </p>
              </div>

              {/* Credential badges */}
              <div className="flex flex-wrap justify-center gap-2">
                {credentials.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-3 py-1.5 bg-teal/10 text-teal text-[10px] font-semibold uppercase tracking-wider rounded-full border border-teal/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
