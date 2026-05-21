'use client';

import { AnimateOnScroll } from './animate-on-scroll';
import { Check, X } from 'lucide-react';

const forYou = [
  'You run a service business with 5–100 employees',
  'Your team uses AI tools individually with no unified strategy',
  'You\'re spending hours on tasks that feel repetitive and manual',
  'You want specific tool recommendations that fit your existing stack',
  'You\'re in the US, UK, Canada, or Australia',
  'You\'re the founder or ops leader — you can make decisions without a committee',
];

const notForYou = [
  'You want someone to build or implement the tools for you (we advise, you execute)',
  'You\'re looking for a guarantee that AI fixes a broken sales or service process',
  'You need a six-month procurement process to approve a $1,500 purchase',
  'You have a dedicated internal AI team already doing this work',
  'You\'re an individual freelancer (minimum team size: 5)',
];

export function IsThisForYou() {
  return (
    <section className="bg-cream py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll variant="fadeUp" delay={0.1} className="mb-4">
          <p className="text-teal font-semibold text-[11px] tracking-widest uppercase mb-3">
            Ideal Client
          </p>
          <h2 className="text-[2.5rem] lg:text-[4rem] font-bold text-obsidian leading-[1.1] tracking-[-0.02em]">
            Built for Service Businesses
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.15} className="mb-14">
          <p className="text-lg text-slate-custom max-w-2xl">
            I work with a very specific client. Here&apos;s how to know if that&apos;s you.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left column — For You */}
          <AnimateOnScroll variant="fadeUp" delay={0.2}>
            <div className="card-premium p-8 h-full border-l-4 border-l-teal bg-teal/[0.02] space-y-5 glow-card">
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
            <div className="card-premium p-8 h-full border-l-4 border-l-gray-300 space-y-5 glow-card">
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
