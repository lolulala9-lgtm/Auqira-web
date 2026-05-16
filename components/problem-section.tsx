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
    <section className="bg-ivory py-28 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll variant="fadeUp" delay={0.1} className="mb-16">
          <p className="uppercase-label text-teal font-semibold mb-3">
            The Challenge
          </p>
          <h2 className="text-[2.5rem] lg:text-[4rem] font-bold text-obsidian leading-[1.1] tracking-[-0.02em] max-w-3xl">
            Most Agencies Leave AI Value on the Table.
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <AnimateOnScroll key={index} variant="fadeUp" delay={0.15 + index * 0.08}>
                <div className="bg-white rounded-2xl border border-[#E4E4E7] p-8 space-y-4 h-full group hover:shadow-lg hover:scale-[1.01] hover:border-teal/30 transition-all duration-200">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center group-hover:bg-teal/15 transition-colors">
                      <Icon className="w-5 h-5 text-teal" />
                    </div>
                    <p className="text-sm text-teal font-semibold tracking-wider uppercase">{problem.number}</p>
                  </div>
                  <h3 className="text-lg font-bold text-obsidian">
                    {problem.title}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed text-sm">
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
