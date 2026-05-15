'use client';

import { Check } from 'lucide-react';
import { AnimateOnScroll } from './animate-on-scroll';

export function PricingSection() {
  return (
    <section id="pricing" className="bg-cream py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll variant="fadeUp" delay={0.1} className="mb-16">
          <p className="text-teal font-semibold text-[11px] tracking-widest uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold text-obsidian leading-tight">
            Fixed-Price Engagement
          </h2>
        </AnimateOnScroll>

        <div className="flex justify-center">
          <AnimateOnScroll variant="fadeUpScale" delay={0.2} className="relative w-full max-w-xl">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
              <span className="inline-block px-5 py-2 bg-teal text-ivory text-xs font-semibold uppercase tracking-widest rounded-full shadow-md">
                Founding Client Rate
              </span>
            </div>

            {/* Premium Card */}
            <div className="card-premium border-2 border-teal p-12 space-y-8 mt-4 relative">
              <div className="text-center space-y-3">
                <p className="text-teal text-sm font-semibold uppercase tracking-wider">Complete AI Audit</p>
                <div className="space-y-1">
                  <span className="text-7xl font-bold text-obsidian">$1,500</span>
                  <p className="text-slate-custom text-sm line-through">Normally $3,000</p>
                </div>
                <p className="text-teal font-bold text-sm">50% off for first 3 agencies</p>
              </div>

              {/* Spots remaining indicator */}
              <div className="flex items-center justify-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-teal" />
                  <div className="w-3 h-3 rounded-full bg-teal" />
                  <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300" />
                </div>
                <p className="text-xs text-slate-custom font-semibold">2 of 3 spots taken</p>
              </div>

              <div className="space-y-3 border-y border-border-custom py-8">
                {[
                  'Full Workflow Audit & Analysis',
                  '30-Minute Discovery Call',
                  'AI Opportunity Matrix',
                  'Tool & Integration Recommendations',
                  'Conservative ROI Projections',
                  '90-Day Implementation Roadmap',
                  'Executive Debrief & Q&A',
                  'Delivered in Google Slides',
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-3">
                    <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                    <p className="text-slate-custom font-medium text-sm">{feature}</p>
                  </div>
                ))}
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
