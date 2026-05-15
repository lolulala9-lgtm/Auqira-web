'use client';

import { AnimateOnScroll } from './animate-on-scroll';
import { TrendingUp } from 'lucide-react';

const stats = [
  {
    value: '10–20',
    label: 'Hours Saved',
    detail: 'Per recruiter per week',
  },
  {
    value: '$25K–$100K',
    label: 'Annual Productivity',
    detail: 'Potential value unlocked',
  },
  {
    value: '7',
    label: 'Business Days',
    detail: 'To complete delivery',
  },
  {
    value: '10x+',
    label: 'ROI',
    detail: 'From one additional placement',
  },
];

export function ROISection() {
  return (
    <section className="bg-cream py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll variant="fadeUp" delay={0.1} className="mb-16">
          <p className="text-teal font-semibold text-[11px] tracking-widest uppercase mb-3">
            Expected Outcomes
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold text-obsidian leading-tight mb-4">
            Quantifiable Impact.
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.2}>
          <p className="text-lg text-slate-custom mb-16 max-w-2xl">
            Conservative estimates of time saved and revenue potential, mapped to your specific workflows.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <AnimateOnScroll key={index} variant="fadeUp" delay={0.3 + index * 0.1}>
              <div
                className="p-8 bg-mist rounded-2xl border border-gray-200 h-full group hover:border-teal/30 transition-colors duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-teal opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-teal mb-2">
                  {stat.value}
                </p>
                <p className="text-sm uppercase font-bold text-slate-custom tracking-widest mb-2">
                  {stat.label}
                </p>
                <p className="text-slate-custom text-sm">{stat.detail}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
