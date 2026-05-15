'use client';

const previews = [
  {
    title: 'AI Opportunity Matrix',
    description: 'Prioritized opportunities mapped by implementation complexity and ROI impact.',
  },
  {
    title: 'ROI Projections',
    description: 'Conservative estimates of time saved and revenue potential for each opportunity.',
  },
  {
    title: '90-Day Roadmap',
    description: 'Practical, phased implementation plan with milestones and success metrics.',
  },
];

export function DeliverablesPreview() {
  return (
    <section className="bg-ivory py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-teal font-semibold text-[11px] tracking-widest uppercase mb-3">
            What You Get
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold text-obsidian leading-tight">
            Audit Preview.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {previews.map((item, index) => (
            <div key={index} className="card-premium p-8 space-y-3">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
                  <p className="text-teal font-bold text-sm">{String(index + 1).padStart(2, '0')}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-obsidian">{item.title}</h3>
                  <p className="text-slate-custom text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
