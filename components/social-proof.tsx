'use client';

import { AnimateOnScroll } from './animate-on-scroll';

const industryStats = [
  {
    value: '60–70%',
    label: 'of recruiter time spent on tasks AI can automate',
    source: 'LinkedIn Workforce Report 2024',
  },
  {
    value: '17 hrs/week',
    label: 'saved per recruiter when AI workflows are implemented',
    source: 'McKinsey Global Institute',
  },
  {
    value: '50%',
    label: 'reduction in time-to-fill reported by AI-adopting agencies',
    source: 'Aptitude Research 2024',
  },
];

export function SocialProof() {
  return (
    <section className="bg-teal py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {industryStats.map((stat, index) => (
            <AnimateOnScroll key={index} variant="fadeUp" delay={0.1 + index * 0.15}>
              <div className="text-center space-y-3">
                <p className="text-4xl md:text-5xl font-bold text-ivory">{stat.value}</p>
                <p className="text-ivory/90 text-sm leading-relaxed max-w-xs mx-auto">
                  {stat.label}
                </p>
                <p className="text-ivory/50 text-[10px] uppercase tracking-wider font-medium">
                  Source: {stat.source}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
