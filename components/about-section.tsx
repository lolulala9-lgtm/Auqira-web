'use client';

import { AnimateOnScroll } from './animate-on-scroll';

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
                <h2 className="text-5xl lg:text-6xl font-bold text-obsidian leading-tight">
                  From Chaos to Strategy.
                </h2>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fadeUp" delay={0.2}>
              <p className="text-lg text-slate-custom leading-relaxed mb-6">
                Auqira helps service businesses move from AI experimentation to measurable operational outcomes through
                structured workflow analysis and executive-level recommendations.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fadeUp" delay={0.3}>
              <p className="text-lg text-slate-custom leading-relaxed mb-6">
                Our methodology is designed to help recruitment and professional services firms uncover hidden capacity and prioritize high-ROI AI opportunities.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fadeUp" delay={0.4}>
              <p className="text-slate-custom leading-relaxed">
                <span className="font-semibold">Our methodology is simple:</span> Analyze your workflows, map AI
                opportunities, project ROI, and hand you a practical roadmap. No fluff. No buzzwords. Just results.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Right side - founder section */}
          <AnimateOnScroll variant="fadeLeft" delay={0.5} className="flex flex-col items-center space-y-6">
            {/* Stylized initials monogram */}
            <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-teal to-[#0a4a51] rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-7xl md:text-8xl font-bold text-ivory/90 tracking-tight">SS</span>
            </div>
            <div className="text-center space-y-3">
              <p className="text-lg font-bold text-obsidian">Soham Singh</p>
              <p className="text-teal text-xs font-semibold uppercase tracking-widest">Founder & AI Advisory Lead</p>
              <p className="text-slate-custom leading-relaxed max-w-xs text-sm">
                Building practical AI advisory services that help service businesses turn experimentation into measurable operational outcomes.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
