'use client';

import { AnimateOnScroll } from './animate-on-scroll';
import { ShieldCheck, Layers, Globe } from 'lucide-react';

const pillars = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-teal" />,
    title: 'Vendor-Agnostic',
    body: 'No affiliate deals, no software commissions. Every recommendation is based entirely on what fits your existing stack.',
  },
  {
    icon: <Layers className="w-5 h-5 text-teal" />,
    title: 'Infrastructure-Level Knowledge',
    body: 'Built on years of designing AI systems from the ground up — understanding exactly where tools fail in real business workflows.',
  },
  {
    icon: <Globe className="w-5 h-5 text-teal" />,
    title: 'Fixed Scope, Fixed Price',
    body: 'No runaway consulting engagements. One audit, one price, delivered in 7 days — with a full refund if we don\'t surface 5 real opportunities.',
  },
];

export function AboutSection() {
  return (
    <section className="bg-ivory py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
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
              <p className="text-lg text-slate-custom leading-relaxed">
                Before building Auqira, we spent years building AI systems at the infrastructure level — understanding not just what AI tools claim to do, but exactly how they process data, where they fail, and which ones actually integrate with real business workflows.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fadeUp" delay={0.3}>
              <p className="text-lg text-slate-custom leading-relaxed">
                Auqira exists because most service businesses are using AI like a novelty. The audit changes that — giving founders and ops leaders the same structured AI strategy that enterprise firms pay $100K+ to get, delivered in 7 days for a fraction of the cost.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Right — trust pillars */}
          <AnimateOnScroll variant="fadeLeft" delay={0.4} className="flex flex-col gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="card-premium p-6 flex items-start gap-4 border-l-4 border-l-teal"
              >
                <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                  {pillar.icon}
                </div>
                <div>
                  <p className="font-bold text-obsidian mb-1">{pillar.title}</p>
                  <p className="text-sm text-slate-custom leading-relaxed">{pillar.body}</p>
                </div>
              </div>
            ))}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
