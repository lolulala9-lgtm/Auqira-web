'use client';

import { AnimateOnScroll } from './animate-on-scroll';

const testimonials = [
  {
    quote: 'The audit revealed opportunities we never would have found on our own. We saved 12 hours/week within the first month.',
    author: 'Managing Director',
    company: 'London-based Executive Search Firm',
  },
  {
    quote: 'Clear, actionable, zero fluff. Exactly what we needed to make confident AI decisions.',
    author: 'Operations Lead',
    company: 'Boutique Recruitment Agency, US',
  },
  {
    quote: 'The ROI projections were conservative — we actually exceeded them by 40% in the first quarter.',
    author: 'CEO',
    company: 'Specialized Staffing Firm, UK',
  },
];

export function SocialProof() {
  return (
    <section className="bg-mist py-20 px-4 sm:px-6 lg:px-8 border-y border-gray-200">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll variant="fadeUp" delay={0.1}>
          <p className="text-center text-teal font-semibold text-[11px] tracking-widest uppercase mb-12">
            Trusted by Forward-Thinking Agencies
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <AnimateOnScroll key={index} variant="fadeUp" delay={0.2 + index * 0.15}>
              <blockquote className="card-premium p-8 h-full flex flex-col justify-between space-y-6">
                <p className="text-slate-custom leading-relaxed text-sm italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-obsidian font-semibold text-sm">{item.author}</p>
                  <p className="text-slate-custom text-xs">{item.company}</p>
                </div>
              </blockquote>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
