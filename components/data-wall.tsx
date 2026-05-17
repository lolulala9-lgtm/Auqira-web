'use client';

import { AnimateOnScroll } from './animate-on-scroll';

const cards = [
  {
    type: 'quote' as const,
    theme: 'dark' as const,
    tag: 'data',
    quote:
      'Recruiting firms that deploy AI sourcing tools report a 40–50% reduction in time-to-fill within the first 90 days. The bottleneck is never the technology — it\'s knowing which workflows to prioritize.',
    attribution: 'Aptitude Research, 2024 Talent Acquisition Technology Report',
  },
  {
    type: 'quote' as const,
    theme: 'light' as const,
    quote:
      'The average recruiter spends 60–70% of their day on administrative tasks that have no direct impact on placements. AI is not a threat to recruiters — it\'s the only way to give them their week back.',
    attribution: 'LinkedIn Workforce Report, 2024',
  },
  {
    type: 'stat' as const,
    theme: 'teal' as const,
    stat: '17 hours',
    subtext:
      'Recovered per recruiter per week when AI workflows are implemented with a structured approach.',
    attribution: 'McKinsey Global Institute',
  },
  {
    type: 'quote' as const,
    theme: 'light' as const,
    quote:
      '73% of AI pilot programs fail before they reach scale. The failure mode is almost never the AI — it\'s the absence of a structured audit of which workflows to automate first.',
    attribution: 'Gartner, AI in the Enterprise 2024',
  },
  {
    type: 'quote' as const,
    theme: 'dark' as const,
    quote:
      'A single additional win per quarter more than covers the cost of an operational audit. The question for boutique business founders is not whether AI has ROI — it\'s whether they can afford to let competitors find it first.',
    attribution: 'Staffing Industry Analysts, 2024',
    accentLine: 'it\'s whether they can afford to let competitors find it first.',
  },
  {
    type: 'stat' as const,
    theme: 'teal' as const,
    stat: '10×',
    subtext:
      'ROI from a single additional placement per quarter — covering the $1,500 audit cost with $13,500+ to spare.',
    attribution:
      'Based on industry average 15% placement fee on $100K salary',
  },
];

export function DataWall() {
  return (
    <section className="bg-ivory py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll variant="fadeUp" delay={0.1} className="mb-16">
          <p className="uppercase-label text-teal font-semibold mb-3">
            What the data says
          </p>
          <h2 className="text-[2.5rem] lg:text-[4rem] font-bold text-obsidian leading-[1.1] tracking-[-0.02em] max-w-4xl">
            The AI opportunity in service businesses is not coming. It&apos;s here.
          </h2>
        </AnimateOnScroll>

        <div className="columns-1 md:columns-2 gap-4 space-y-4">
          {cards.map((card, index) => (
            <AnimateOnScroll
              key={index}
              variant="fadeUp"
              delay={0.1 + index * 0.08}
            >
              <div
                className={`break-inside-avoid rounded-xl p-7 transition-all duration-200 hover:scale-[1.01] ${
                  card.theme === 'dark'
                    ? 'text-white shadow-xl'
                    : card.theme === 'teal'
                    ? 'text-white'
                    : 'border border-[#E4E4E7] text-obsidian bg-white'
                }`}
                style={{
                  backgroundColor:
                    card.theme === 'dark'
                      ? '#0D0F14'
                      : card.theme === 'teal'
                      ? '#0D5C63'
                      : undefined,
                }}
              >
                {card.type === 'stat' ? (
                  <div className="space-y-3">
                    <p className="text-6xl lg:text-7xl font-extrabold leading-none tracking-[-0.03em]">
                      {card.stat}
                    </p>
                    <p className={`text-sm leading-relaxed ${card.theme === 'teal' ? 'text-white/85' : ''}`}>
                      {card.subtext}
                    </p>
                    <p className={`text-[10px] uppercase tracking-wider font-medium ${card.theme === 'teal' ? 'text-white/50' : 'text-[#A1A1AA]'}`}>
                      {card.attribution}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {card.tag && (
                      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-teal/20 text-teal">
                        {card.tag}
                      </span>
                    )}
                    <p className={`text-[15px] leading-relaxed ${card.theme === 'dark' ? 'text-[#E4E4E7]' : 'text-[#3F3F46]'}`}>
                      &ldquo;{card.quote}&rdquo;
                    </p>
                    <p className={`text-[11px] uppercase tracking-wider font-medium ${card.theme === 'dark' ? 'text-[#71717A]' : 'text-[#A1A1AA]'}`}>
                      — {card.attribution}
                    </p>
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
