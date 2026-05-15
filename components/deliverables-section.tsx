'use client';

import { AnimateOnScroll } from './animate-on-scroll';

const deliverables = [
  { title: 'Discovery Call', description: '30-minute intake to understand your current workflows' },
  { title: 'Workflow Analysis', description: 'Deep audit of recruitment processes and pain points' },
  { title: 'AI Opportunity Matrix', description: '2x2 matrix showing high-ROI, low-effort opportunities' },
  { title: 'Tool Recommendations', description: 'Specific AI tools and integrations matched to your needs' },
  { title: 'ROI Projections', description: 'Conservative estimates of time saved and revenue potential' },
  { title: '90-Day Roadmap', description: 'Step-by-step implementation plan with milestones' },
  { title: 'Executive Debrief', description: '30-minute presentation of findings and recommendations' },
];

export function DeliverablesSection() {
  return (
    <section className="bg-ivory py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll variant="fadeUp" delay={0.1} className="mb-16">
          <p className="text-teal font-semibold text-[11px] tracking-widest uppercase mb-3">
            The Deliverables
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold text-obsidian leading-tight max-w-3xl">
            7 Days to Complete Clarity.
          </h2>
        </AnimateOnScroll>

        {/* Timeline visualization */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal via-teal to-transparent transform -translate-x-1/2" />

          <div className="grid md:grid-cols-2 gap-12">
            {deliverables.map((item, index) => (
              <AnimateOnScroll key={index} variant={index % 2 === 0 ? 'fadeRight' : 'fadeLeft'} delay={0.2 + index * 0.1}>
                <div
                  className={`${index % 2 === 0 ? 'md:text-right' : ''} relative`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-teal rounded-full transform -translate-x-1/2 border-4 border-ivory z-10" />

                  <div className={`${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} space-y-2`}>
                    <p className="text-teal text-xs font-semibold uppercase tracking-wide">{String(index + 1).padStart(2, '0')}</p>
                    <h3 className="text-lg font-bold text-obsidian">{item.title}</h3>
                    <p className="text-slate-custom leading-relaxed text-sm">{item.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
