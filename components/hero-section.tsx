'use client';

import { AnimateOnScroll } from './animate-on-scroll';
import { Check, BarChart3, TrendingUp, Calendar, FileText, ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="bg-ivory py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle decorative accent */}
      <div className="absolute top-24 right-0 w-72 h-72 opacity-[3%] -z-10">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="200" cy="200" r="150" fill="none" stroke="#0D5C63" strokeWidth="1" />
          <circle cx="200" cy="200" r="100" fill="none" stroke="#0D5C63" strokeWidth="1" />
          <line x1="0" y1="200" x2="400" y2="200" stroke="#0D5C63" strokeWidth="0.5" />
          <line x1="200" y1="0" x2="200" y2="400" stroke="#0D5C63" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left side content */}
          <div className="space-y-7 lg:col-span-6">
            <AnimateOnScroll variant="fadeUp" delay={0.1}>
              <div className="space-y-3">
                <p className="text-teal font-semibold text-[11px] tracking-widest uppercase">
                  Executive Advisory
                </p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-obsidian leading-tight">
                  Find Where AI Delivers Real Value.
                </h1>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fadeUp" delay={0.2}>
              <p className="text-lg text-slate-custom leading-relaxed max-w-2xl">
                A fixed-price, comprehensive AI Workflow Audit designed specifically for recruitment agencies. Delivered in 7 business days with ROI projections, tool recommendations, and a 90-day implementation roadmap.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fadeUp" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://calendly.com/auqira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-primary group"
                >
                  Schedule a Discovery Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <button className="btn-secondary">
                  View Sample Audit
                </button>
              </div>
            </AnimateOnScroll>

            {/* Key differentiators */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <AnimateOnScroll variant="fadeUp" delay={0.4}>
                <div className="space-y-1">
                  <p className="text-[11px] uppercase text-teal font-semibold tracking-wider">$1,500</p>
                  <p className="text-xs text-slate-custom">Founding client rate</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll variant="fadeUp" delay={0.5}>
                <div className="space-y-1">
                  <p className="text-[11px] uppercase text-teal font-semibold tracking-wider">7 Days</p>
                  <p className="text-xs text-slate-custom">Delivery guarantee</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll variant="fadeUp" delay={0.6}>
                <div className="space-y-1">
                  <p className="text-[11px] uppercase text-teal font-semibold tracking-wider">ROI-Focused</p>
                  <p className="text-xs text-slate-custom">Metrics-driven recommendations</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll variant="fadeUp" delay={0.7}>
                <div className="space-y-1">
                  <p className="text-[11px] uppercase text-teal font-semibold tracking-wider">Expert-Led</p>
                  <p className="text-xs text-slate-custom">Founder consultation included</p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Right side - Audit Report Preview Card */}
          <AnimateOnScroll variant="fadeUpScale" delay={0.4} className="hidden lg:block lg:col-span-6">
            <div className="relative">
              {/* Floating label */}
              <div className="absolute -top-3 -right-2 z-10 px-3 py-1.5 bg-teal text-ivory text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                Sample Output
              </div>

              {/* Main preview card */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
                {/* Card header */}
                <div className="bg-obsidian px-6 py-4 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <p className="text-ivory/60 text-[10px] font-mono tracking-wide">auqira-audit-report.pdf</p>
                </div>

                {/* Card body */}
                <div className="p-6 space-y-5">
                  {/* Mini matrix preview */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BarChart3 className="w-4 h-4 text-teal" />
                      <p className="text-xs font-bold text-obsidian uppercase tracking-wider">AI Opportunity Matrix</p>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="p-3 bg-teal/10 rounded-lg border border-teal/20">
                        <p className="text-[9px] font-bold text-teal uppercase tracking-wider mb-1">High ROI / Low Effort</p>
                        <p className="text-xs font-semibold text-obsidian">Interview Scheduling</p>
                        <p className="text-[10px] text-slate-custom">~5hrs saved/week</p>
                      </div>
                      <div className="p-3 bg-teal/5 rounded-lg border border-teal/10">
                        <p className="text-[9px] font-bold text-teal/70 uppercase tracking-wider mb-1">High ROI / Med Effort</p>
                        <p className="text-xs font-semibold text-obsidian">JD Generation</p>
                        <p className="text-[10px] text-slate-custom">~3hrs saved/week</p>
                      </div>
                    </div>
                  </div>

                  {/* Mini ROI bar */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-4 h-4 text-teal" />
                      <p className="text-xs font-bold text-obsidian uppercase tracking-wider">Projected ROI</p>
                    </div>
                    <div className="flex items-end gap-1.5 h-12">
                      {[35, 55, 70, 85, 92].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-teal to-teal/60" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                    <div className="flex justify-between mt-1.5">
                      <p className="text-[9px] text-slate-custom">Month 1</p>
                      <p className="text-[9px] text-teal font-semibold">+$85K projected</p>
                    </div>
                  </div>

                  {/* Mini roadmap */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-teal" />
                      <p className="text-xs font-bold text-obsidian uppercase tracking-wider">90-Day Roadmap</p>
                    </div>
                    <div className="space-y-2">
                      {[
                        { phase: 'Week 1–2', task: 'Quick wins implementation', done: true },
                        { phase: 'Week 3–6', task: 'Core automation rollout', done: true },
                        { phase: 'Week 7–12', task: 'Advanced integrations', done: false },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5">
                          <Check className={`w-3.5 h-3.5 flex-shrink-0 ${item.done ? 'text-teal' : 'text-gray-300'}`} />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-[9px] font-bold text-teal uppercase tracking-wider">{item.phase}</span>
                              <span className="text-[10px] text-obsidian font-medium truncate">{item.task}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
