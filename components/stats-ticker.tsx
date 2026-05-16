'use client';

export function StatsTicker() {
  const stats = [
    '60–70% of recruiter time is spent on tasks AI can automate — LinkedIn Workforce Report',
    '17 hours saved per recruiter per week with structured AI workflows — McKinsey',
    '50% reduction in time-to-fill at AI-adopting agencies — Aptitude Research 2024',
    '73% of AI pilots fail without a structured implementation plan — Gartner',
    'Agencies using AI sourcing see 2.3× more qualified applications per role',
    'Average boutique agency recovers $40,000+ per recruiter annually with the right AI stack',
    '$1,500 audit · 7-day delivery · vendor-agnostic · ATS-compatible',
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
            <span className="text-teal font-bold text-lg">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
