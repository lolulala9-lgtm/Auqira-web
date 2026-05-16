'use client';

import { AnimateOnScroll } from './animate-on-scroll';
import { Check } from 'lucide-react';

export function BentoGrid() {
  return (
    <section id="audit" className="bg-ivory py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll variant="fadeUp" delay={0.1} className="mb-16">
          <p className="uppercase-label text-teal font-semibold mb-3">
            What You Get
          </p>
          <h2 className="text-[2.5rem] lg:text-[4rem] font-bold text-obsidian leading-[1.1] tracking-[-0.02em] max-w-3xl">
            Everything Inside the Audit.
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-12 gap-4">
          {/* ROW 1 — Card 1: AI Opportunity Matrix (7 cols) */}
          <AnimateOnScroll variant="fadeUp" delay={0.15} className="col-span-12 lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#E4E4E7] p-8 h-full hover:shadow-lg hover:scale-[1.01] transition-all duration-200 group">
              <p className="uppercase-label text-teal font-semibold mb-2">Featured Deliverable</p>
              <h3 className="text-xl font-bold text-obsidian mb-2">AI Opportunity Matrix</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-6 max-w-md">
                Every workflow scored by ROI potential vs. implementation effort. Your top 8 opportunities, ranked. No guessing.
              </p>
              {/* 2×2 Quadrant visual */}
              <div className="relative w-full max-w-sm aspect-square mx-auto">
                {/* Axes */}
                <div className="absolute left-8 top-0 bottom-8 w-px bg-[#E4E4E7]" />
                <div className="absolute left-8 bottom-8 right-0 h-px bg-[#E4E4E7]" />
                {/* Labels */}
                <span className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] text-[#A1A1AA] uppercase tracking-wider font-medium whitespace-nowrap">ROI Potential</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] text-[#A1A1AA] uppercase tracking-wider font-medium">Implementation Effort →</span>
                {/* Quadrants */}
                <div className="absolute left-8 bottom-8 right-0 top-0 grid grid-cols-2 grid-rows-2">
                  {/* Top-left: High ROI / Low Effort — highlighted */}
                  <div className="bg-teal/10 rounded-tl-lg border border-teal/20 relative group/q">
                    <div className="absolute inset-0 rounded-tl-lg bg-teal/5 group-hover/q:bg-teal/15 transition-colors" />
                  </div>
                  <div className="rounded-tr-lg" />
                  <div className="rounded-bl-lg" />
                  <div className="rounded-br-lg" />
                </div>
                {/* Plotted dots */}
                <div className="absolute left-[25%] top-[18%] flex flex-col items-center z-10">
                  <div className="w-3.5 h-3.5 rounded-full bg-teal shadow-lg shadow-teal/30" />
                  <span className="text-[10px] font-semibold text-obsidian mt-1">Interview Scheduling</span>
                </div>
                <div className="absolute left-[42%] top-[28%] flex flex-col items-center z-10">
                  <div className="w-3 h-3 rounded-full bg-teal/70" />
                  <span className="text-[10px] font-medium text-[#6B7280] mt-1">JD Generation</span>
                </div>
                <div className="absolute left-[65%] top-[40%] flex flex-col items-center z-10">
                  <div className="w-3 h-3 rounded-full bg-[#A1A1AA]" />
                  <span className="text-[10px] font-medium text-[#6B7280] mt-1">ATS Auto-Fill</span>
                </div>
                <div className="absolute left-[80%] top-[60%] flex flex-col items-center z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D4D4D8]" />
                  <span className="text-[10px] font-medium text-[#A1A1AA] mt-1">Candidate Re-engagement</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* ROW 1 — Card 2: 7-Day Delivery (5 cols) */}
          <AnimateOnScroll variant="fadeUp" delay={0.25} className="col-span-12 lg:col-span-5">
            <div className="bg-teal rounded-2xl p-8 h-full text-white hover:shadow-lg hover:scale-[1.01] transition-all duration-200">
              <h3 className="text-xl font-bold mb-2">7-Day Delivery</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-8">
                Discovery call Monday. Report in your inbox by Friday of the following week. Guaranteed.
              </p>
              {/* Timeline visual */}
              <div className="flex items-center gap-0 mt-auto">
                <div className="flex flex-col items-center text-center flex-1">
                  <div className="w-4 h-4 rounded-full bg-white border-2 border-white" />
                  <div className="text-[11px] font-semibold mt-2">Day 1</div>
                  <div className="text-[10px] text-white/70 mt-0.5">Discovery Call</div>
                </div>
                <div className="flex-1 h-px bg-white/30 -mt-6" />
                <div className="flex flex-col items-center text-center flex-1">
                  <div className="w-4 h-4 rounded-full bg-white/60 border-2 border-white/60" />
                  <div className="text-[11px] font-semibold mt-2">Day 3–5</div>
                  <div className="text-[10px] text-white/70 mt-0.5">Analysis</div>
                </div>
                <div className="flex-1 h-px bg-white/30 -mt-6" />
                <div className="flex flex-col items-center text-center flex-1">
                  <div className="w-4 h-4 rounded-full bg-white border-2 border-white shadow-lg shadow-white/30" />
                  <div className="text-[11px] font-semibold mt-2">Day 7</div>
                  <div className="text-[10px] text-white/70 mt-0.5">Report Delivered</div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* ROW 2 — Card 3: ROI in Black and White (4 cols) */}
          <AnimateOnScroll variant="fadeUp" delay={0.2} className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="bg-[#F9F9F9] rounded-2xl border border-[#E4E4E7] p-8 h-full hover:shadow-lg hover:scale-[1.01] transition-all duration-200">
              <h3 className="text-xl font-bold text-obsidian mb-2">ROI in Black and White</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                Every recommendation comes with conservative dollar projections. Hours saved × your loaded hourly rate × 52 weeks.
              </p>
              <div className="bg-[#0D0F14] rounded-lg p-4 font-mono text-sm text-teal">
                <span className="text-[#A1A1AA]">15 hrs/week</span>
                <span className="text-white/40"> × </span>
                <span className="text-[#A1A1AA]">$40/hr</span>
                <span className="text-white/40"> × </span>
                <span className="text-[#A1A1AA]">52</span>
                <span className="text-white/40"> = </span>
                <span className="text-teal font-bold">$31,200/yr</span>
              </div>
            </div>
          </AnimateOnScroll>

          {/* ROW 2 — Card 4: 90-Day Roadmap (4 cols) */}
          <AnimateOnScroll variant="fadeUp" delay={0.3} className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="bg-white rounded-2xl border border-[#E4E4E7] p-8 h-full hover:shadow-lg hover:scale-[1.01] transition-all duration-200">
              <h3 className="text-xl font-bold text-obsidian mb-2">90-Day Roadmap</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                Not just what to do — exactly when to do it. A phased implementation plan your ops lead can execute immediately.
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Week 1–4: Quick Wins', pct: 100 },
                  { label: 'Week 5–8: Core Automation', pct: 60 },
                  { label: 'Week 9–12: Advanced Integrations', pct: 0 },
                ].map((phase, i) => (
                  <div key={i}>
                    <p className="text-[11px] font-semibold text-obsidian mb-1">{phase.label}</p>
                    <div className="w-full h-2 rounded-full bg-[#E4E4E7] overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${phase.pct}%`,
                          backgroundColor: phase.pct > 0 ? '#0D5C63' : '#D4D4D8',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* ROW 2 — Card 5: ATS-Compatible (4 cols) */}
          <AnimateOnScroll variant="fadeUp" delay={0.35} className="col-span-12 lg:col-span-4">
            <div className="rounded-2xl p-8 h-full hover:shadow-lg hover:scale-[1.01] transition-all duration-200" style={{ backgroundColor: '#0D0F14' }}>
              <h3 className="text-xl font-bold text-white mb-2">ATS-Compatible</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6">
                Every tool recommendation is cross-checked against your specific ATS before it goes in the deck.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Bullhorn', 'Greenhouse', 'Lever'].map((ats) => (
                  <span
                    key={ats}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold bg-teal/15 text-teal border border-teal/25"
                  >
                    <Check className="w-3 h-3" />
                    {ats}
                  </span>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* ROW 3 — Card 6: Debrief Call (full width) */}
          <AnimateOnScroll variant="fadeUp" delay={0.25} className="col-span-12">
            <div
              className="rounded-2xl p-8 lg:p-12 hover:shadow-lg hover:scale-[1.005] transition-all duration-200 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #0D5C63 0%, #1A1A2E 100%)',
              }}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    The Debrief Call — Where It Gets Interesting
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    7 days after the discovery call, we walk through every finding together on Zoom. You ask questions. I show you how to present the top 3 opportunities to your partners. And if it makes sense, we talk about what implementation would look like.
                  </p>
                </div>

                {/* Mock Zoom UI */}
                <div className="bg-[#0D0F14] rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[10px] text-[#A1A1AA] ml-2 font-mono">Auqira Debrief — Zoom</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="aspect-video bg-[#1A1A2E] rounded-lg flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-teal/30 flex items-center justify-center">
                        <span className="text-teal text-sm font-bold">SS</span>
                      </div>
                    </div>
                    <div className="aspect-video bg-[#1A1A2E] rounded-lg flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-[#A1A1AA]/20 flex items-center justify-center">
                        <span className="text-[#A1A1AA] text-sm font-bold">You</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 bg-[#1A1A2E] rounded-lg p-2 border border-white/5">
                    <p className="text-[9px] text-[#A1A1AA] uppercase tracking-wider mb-1">Slide Preview</p>
                    <div className="flex gap-1">
                      {[40, 60, 80, 95].map((h, i) => (
                        <div key={i} className="flex-1 rounded-sm bg-teal/40" style={{ height: `${h / 4}px` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
