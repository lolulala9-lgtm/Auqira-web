'use client';

import { AnimateOnScroll } from './animate-on-scroll';
import { Check, X } from 'lucide-react';

const forYou = [
  'You run a boutique recruitment agency with 10–50 internal staff',
  'Your team uses AI tools individually but has no unified strategy',
  'You\u0027re losing candidates to faster competitors',
  'You want specific tool recommendations, not generic advice',
  'You\u0027re targeting US, UK, Canadian, or Australian clients',
  'You make decisions yourself — no six-month committee approval process',
];

const notForYou = [
  'You\u0027re a solo recruiter or freelance headhunter (minimum team of 5)',
  'You want us to build or implement the tools for you',
  'You\u0027re looking for a guarantee that AI will fix a broken sales process',
  'You\u0027re an internal corporate HR team (we work with agencies only)',
  'You need a decision in 6+ months (this moves fast)',
];

export function IsThisForYou() {
  return (
    <section className="bg-cream py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll variant="fadeUp" delay={0.1} className="mb-4">
          <p className="text-teal font-semibold text-[11px] tracking-widest uppercase mb-3">
            Ideal Client
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold text-obsidian leading-tight">
            Built for One Type of Agency
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.15} className="mb-14">
          <p className="text-lg text-slate-custom max-w-2xl">
            We work with a very specific client. Here&apos;s how to know if that&apos;s you.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left column — For You */}
          <AnimateOnScroll variant="fadeUp" delay={0.2}>
            <div className="card-premium p-8 h-full border-l-4 border-l-teal bg-teal/[0.02] space-y-5">
              <h3 className="text-lg font-bold text-obsidian flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-teal/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-teal" />
                </span>
                This is for you if:
              </h3>
              <ul className="space-y-3.5">
                {forYou.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <Check className="w-4 h-4 text-teal flex-shrink-0 mt-1" />
                    <span className="text-sm text-slate-custom leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Right column — Not For You */}
          <AnimateOnScroll variant="fadeUp" delay={0.3}>
            <div className="card-premium p-8 h-full border-l-4 border-l-gray-300 space-y-5">
              <h3 className="text-lg font-bold text-obsidian flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                  <X className="w-4 h-4 text-gray-400" />
                </span>
                This is NOT for you if:
              </h3>
              <ul className="space-y-3.5">
                {notForYou.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <X className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" />
                    <span className="text-sm text-slate-custom leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
