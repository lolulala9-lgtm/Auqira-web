'use client';

import { AnimateOnScroll } from './animate-on-scroll';
import { Clock, Puzzle, Timer, Map } from 'lucide-react';

const problems = [
  {
    number: '01',
    title: 'Recruiters Buried in Manual Tasks',
    description: 'Hours daily on admin work that should be automated, pulling focus from revenue-generating activities.',
    icon: Clock,
  },
  {
    number: '02',
    title: 'Fragmented AI Tool Usage',
    description: 'No coordinated strategy means inconsistent results, wasted subscriptions, and missed productivity gains.',
    icon: Puzzle,
  },
  {
    number: '03',
    title: 'Slow Response Times',
    description: 'Manual workflows delay candidate outreach and engagement, costing placements and reputation.',
    icon: Timer,
  },
  {
    number: '04',
    title: 'No Implementation Roadmap',
    description: 'Without a clear plan, AI adoption stalls or fails to deliver measurable ROI on investment.',
    icon: Map,
  },
];

export function ProblemSection() {
  return (
    <section id="audit" className="bg-ivory py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll variant="fadeUp" delay={0.1} className="mb-16">
          <p className="text-teal font-semibold text-[11px] tracking-widest uppercase mb-3">
            The Challenge
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold text-obsidian leading-tight max-w-3xl">
            Most Agencies Leave AI Value on the Table.
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <AnimateOnScroll key={index} variant="fadeUp" delay={0.2 + index * 0.1}>
                <div className="card-premium p-8 space-y-4 h-full group hover:border-teal/30 transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center group-hover:bg-teal/15 transition-colors">
                      <Icon className="w-5 h-5 text-teal" />
                    </div>
                    <p className="text-sm text-teal font-semibold tracking-wider uppercase">{problem.number}</p>
                  </div>
                  <h3 className="text-lg font-bold text-obsidian">
                    {problem.title}
                  </h3>
                  <p className="text-slate-custom leading-relaxed text-sm">
                    {problem.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
