'use client';

import { AnimateOnScroll } from './animate-on-scroll';

const opportunities = [
  {
    title: 'Interview Scheduling Automation',
    position: 'top-left',
    isHighlight: true,
  },
  {
    title: 'ATS Data Entry',
    position: 'top-right',
    isHighlight: true,
  },
  {
    title: 'Email Campaigns',
    position: 'bottom-left',
    isHighlight: false,
  },
  {
    title: 'Job Description Generation',
    position: 'bottom-right',
    isHighlight: true,
  },
  {
    title: 'Candidate Outreach',
    position: 'center',
    isHighlight: true,
  },
];

export function OpportunityMatrix() {
  return (
    <section className="bg-ivory py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll variant="fadeUp" delay={0.1} className="mb-16">
          <p className="text-teal font-semibold text-[11px] tracking-widest uppercase mb-3">
            Opportunity Assessment
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold text-obsidian leading-tight">
            Prioritized AI Opportunities.
          </h2>
        </AnimateOnScroll>

        <div className="card-premium p-8 md:p-12">
          <div className="grid grid-cols-2 gap-1 mb-8">
            <AnimateOnScroll variant="fadeUp" delay={0.2}>
              <div className="p-8 md:p-12 bg-gradient-to-br from-teal/10 to-transparent rounded-lg border border-teal/20 h-full">
                <h4 className="text-xs uppercase font-bold text-teal mb-4 tracking-widest">
                  High ROI / Low Effort
                </h4>
                <div className="space-y-3">
                  <p className="font-semibold text-obsidian">Interview Scheduling Automation</p>
                  <p className="text-sm text-slate-custom">Save 5+ hours/week per recruiter</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fadeUp" delay={0.3}>
              <div className="p-8 md:p-12 bg-gradient-to-bl from-teal/10 to-transparent rounded-lg border border-teal/20 h-full">
                <h4 className="text-xs uppercase font-bold text-teal mb-4 tracking-widest">
                  High ROI / High Effort
                </h4>
                <div className="space-y-3">
                  <p className="font-semibold text-obsidian">ATS Data Entry</p>
                  <p className="text-sm text-slate-custom">Integrate AI tools for bulk updates</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fadeUp" delay={0.4}>
              <div className="p-8 md:p-12 bg-gray-100/50 rounded-lg border border-gray-200 h-full">
                <h4 className="text-xs uppercase font-bold text-slate-custom mb-4 tracking-widest">
                  Low ROI / Low Effort
                </h4>
                <div className="space-y-3">
                  <p className="font-semibold text-obsidian">Email Campaigns</p>
                  <p className="text-sm text-slate-custom">Use AI for templates and copy</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fadeUp" delay={0.5}>
              <div className="p-8 md:p-12 bg-gradient-to-tl from-teal/10 to-transparent rounded-lg border border-teal/20 h-full">
                <h4 className="text-xs uppercase font-bold text-teal mb-4 tracking-widest">
                  High ROI / Medium Effort
                </h4>
                <div className="space-y-3">
                  <p className="font-semibold text-obsidian">Job Description Generation</p>
                  <p className="text-sm text-slate-custom">AI-powered content creation</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        <AnimateOnScroll variant="fadeUpScale" delay={0.6} className="mx-auto max-w-sm p-6 bg-teal text-ivory rounded-xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-2">Quick Win</p>
          <p className="text-2xl font-bold">Candidate Outreach</p>
          <p className="text-ivory/80 mt-2 text-sm">Implement within week 1</p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
