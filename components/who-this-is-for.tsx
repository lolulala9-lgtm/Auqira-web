'use client';

import { AnimateOnScroll } from './animate-on-scroll';
import { Users, Search, Briefcase } from 'lucide-react';

const audiences = [
  {
    title: 'Boutique Recruitment Agencies',
    description: '10–50 headcount, scaling operations with AI to compete with larger firms.',
    icon: Users,
  },
  {
    title: 'Executive Search Firms',
    description: 'High-touch processes that benefit from AI-powered research and outreach.',
    icon: Search,
  },
  {
    title: 'Specialized Staffing Firms',
    description: 'Niche verticals with complex workflows ripe for intelligent automation.',
    icon: Briefcase,
  },
];

export function WhoThisIsFor() {
  return (
    <section className="bg-cream py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <AnimateOnScroll variant="fadeUp" delay={0.1}>
            <p className="text-teal font-semibold text-[11px] tracking-widest uppercase mb-3">
              Ideal For
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-obsidian mb-12 leading-tight">
              Who This Is For
            </h2>
          </AnimateOnScroll>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <AnimateOnScroll key={index} variant="fadeUp" delay={0.2 + index * 0.1}>
                <div className="card-premium p-8 h-full border-l-4 border-l-teal/30 hover:border-l-teal transition-colors duration-300 space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-teal" />
                  </div>
                  <p className="text-lg font-semibold text-obsidian">{audience.title}</p>
                  <p className="text-slate-custom text-sm leading-relaxed">{audience.description}</p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
