'use client';

export function StatsTicker() {
  const stats = [
    '60-70% of service business time is spent on tasks AI can automate — McKinsey',
    'Real estate agents spend 30-45 min writing each listing description — AI gets it to 8 minutes',
    '10+ hours saved per team member per week with structured AI workflows — McKinsey',
    'Marketing agencies waste 4 hrs/week per person on manual client reporting',
    '50% reduction in time-to-fill at AI-adopting recruitment businesses — Aptitude Research 2024',
    'Businesses using AI workflows report 30-50% faster proposal turnaround',
    'Average boutique business recovers $40,000+ per employee annually with the right AI stack',
    '$1,500 audit \u00b7 7-day delivery \u00b7 vendor-agnostic \u00b7 compatible with 20+ tools',
  ];

  const loopItems = [...stats, ...stats];

  return (
    <div
      className="w-full overflow-hidden py-4 relative"
      style={{
        backgroundColor: '#111318',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="flex w-max marquee-track">
        {loopItems.map((item, idx) => (
          <span key={idx} className="flex items-center shrink-0">
            <span className="text-white text-[14px] font-medium whitespace-nowrap px-4">
              {item}
            </span>
            <span className="text-teal font-bold text-lg">&middot;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
