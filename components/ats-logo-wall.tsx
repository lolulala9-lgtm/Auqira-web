'use client';

export function ATSLogoWall() {
  const tools = [
    // Recruitment
    'Bullhorn', 'Greenhouse', 'Lever', 'JobAdder', 'Vincere', 'Loxo', 'Workable', 'SmartRecruiters', 'HireEZ', 'Gem',
    // Real Estate
    'Follow Up Boss', 'CINC', 'Sierra Interactive', 'Chime', 'LionDesk', 'KvCORE',
    // Marketing
    'HubSpot', 'Supermetrics', 'Looker Studio', 'Monday.com', 'Asana', 'Notion', 'Canva',
  ];

  const loopTools = [...tools, ...tools, ...tools];

  return (
    <section className="relative w-full overflow-hidden" style={{ backgroundColor: '#0D0F14' }}>
      <div className="py-10">
        <p className="text-center text-sm font-medium text-[#A1A1AA] mb-8 tracking-wide">
          Works with the tools your team already uses
        </p>

        <div className="overflow-hidden">
          <div className="flex w-max marquee-track-slow gap-3">
            {loopTools.map((tool, idx) => (
              <span
                key={idx}
                className="shrink-0 font-mono text-[13px] text-[#E4E4E7] rounded-full whitespace-nowrap"
                style={{
                  padding: '6px 14px',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.10)',
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        className="w-full h-[80px]"
        style={{ background: 'linear-gradient(to bottom, #0D0F14, #FDFBF7)' }}
      />
    </section>
  );
}
