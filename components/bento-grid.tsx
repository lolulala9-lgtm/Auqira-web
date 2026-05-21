'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimateOnScroll } from './animate-on-scroll';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';

/* ─── Mock data for interactive opportunity dots ─── */
const opportunityDots = [
  {
    id: 'interview-scheduling',
    label: 'Interview Scheduling',
    left: '25%',
    top: '18%',
    size: 'w-3.5 h-3.5',
    bg: 'bg-teal',
    shadow: 'shadow-lg shadow-teal/30',
    textClass: 'text-[10px] font-semibold text-obsidian',
    isPrimary: true,
    tooltip: {
      task: 'Interview Scheduling',
      hoursSaved: '12 hrs/week',
      tool: 'Calendly + Custom GPT Workflow',
      roi: '★★★★★  Very High',
    },
  },
  {
    id: 'jd-generation',
    label: 'JD Generation',
    left: '42%',
    top: '28%',
    size: 'w-3 h-3',
    bg: 'bg-teal/70',
    shadow: '',
    textClass: 'text-[10px] font-medium text-[#6B7280]',
    isPrimary: false,
    tooltip: {
      task: 'JD Generation',
      hoursSaved: '6 hrs/week',
      tool: 'Claude + Templating Engine',
      roi: '★★★★☆  High',
    },
  },
  {
    id: 'ats-auto-fill',
    label: 'ATS Auto-Fill',
    left: '65%',
    top: '40%',
    size: 'w-3 h-3',
    bg: 'bg-[#A1A1AA]',
    shadow: '',
    textClass: 'text-[10px] font-medium text-[#6B7280]',
    isPrimary: false,
    tooltip: {
      task: 'ATS Auto-Fill',
      hoursSaved: '4 hrs/week',
      tool: 'Zapier + ATS API Integration',
      roi: '★★★☆☆  Moderate',
    },
  },
  {
    id: 'candidate-reengagement',
    label: 'Candidate Re-engagement',
    left: '80%',
    top: '60%',
    size: 'w-2.5 h-2.5',
    bg: 'bg-[#D4D4D8]',
    shadow: '',
    textClass: 'text-[10px] font-medium text-[#A1A1AA]',
    isPrimary: false,
    tooltip: {
      task: 'Candidate Re-engagement',
      hoursSaved: '2 hrs/week',
      tool: 'Outreach Sequence Automation',
      roi: '★★☆☆☆  Low–Moderate',
    },
  },
];

/* ─── Slide data for debrief carousel ─── */
const debriefSlides = [
  { title: 'Executive Summary', bars: [95, 70, 50, 80] },
  { title: 'Workflow Bottlenecks', bars: [40, 90, 65, 55] },
  { title: 'Implementation Timeline', bars: [30, 50, 75, 95] },
];

/* ─── Interactive Dot component ─── */
function OpportunityDot({
  dot,
}: {
  dot: (typeof opportunityDots)[number];
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="absolute flex flex-col items-center z-10"
      style={{ left: dot.left, top: dot.top }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* The dot */}
      <motion.div
        className={`${dot.size} rounded-full ${dot.bg} ${dot.shadow} ${
          dot.isPrimary ? 'dot-pulse' : ''
        } cursor-pointer`}
        whileHover={{
          scale: 1.35,
          boxShadow: '0 0 14px 4px rgba(13,92,99,0.45)',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 18 }}
      />
      <span className={`${dot.textClass} mt-1`}>{dot.label}</span>

      {/* Rich tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-52 bg-[#0D0F14] border border-teal/30 rounded-lg p-3 shadow-xl shadow-teal/10 pointer-events-none z-50"
          >
            <p className="text-[11px] font-bold text-teal mb-1.5">
              {dot.tooltip.task}
            </p>
            <div className="space-y-1 text-[10px]">
              <div className="flex justify-between">
                <span className="text-[#A1A1AA]">Hours Saved</span>
                <span className="text-white font-semibold">
                  {dot.tooltip.hoursSaved}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A1A1AA]">Rec. Tool</span>
                <span className="text-white font-semibold text-right max-w-[110px] leading-tight">
                  {dot.tooltip.tool}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A1A1AA]">ROI</span>
                <span className="text-teal font-semibold">
                  {dot.tooltip.roi}
                </span>
              </div>
            </div>
            {/* Tooltip arrow */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0D0F14] border-l border-t border-teal/30 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Waveform Bars component ─── */
function WaveformBars() {
  const bars = [
    { height: '14px', delay: '0s' },
    { height: '20px', delay: '0.15s' },
    { height: '10px', delay: '0.3s' },
    { height: '18px', delay: '0.1s' },
    { height: '24px', delay: '0.25s' },
    { height: '12px', delay: '0.05s' },
    { height: '16px', delay: '0.2s' },
  ];

  return (
    <div className="flex items-end justify-center gap-[3px] h-6">
      {bars.map((bar, i) => (
        <div
          key={i}
          className="w-[3px] rounded-full bg-teal/70"
          style={{
            // @ts-expect-error CSS custom property
            '--wave-height': bar.height,
            animation: `waveform 0.8s ease-in-out ${bar.delay} infinite`,
            height: '4px',
          }}
        />
      ))}
    </div>
  );
}

/* ─── Mini Slide Carousel component ─── */
function SlideCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const prev = () =>
    setActiveSlide((s) => (s === 0 ? debriefSlides.length - 1 : s - 1));
  const next = () =>
    setActiveSlide((s) => (s === debriefSlides.length - 1 ? 0 : s + 1));

  const slide = debriefSlides[activeSlide];

  return (
    <div className="mt-2 bg-[#1A1A2E] rounded-lg p-2 border border-white/5">
      <div className="flex items-center justify-between mb-1">
        <p className="text-[9px] text-[#A1A1AA] uppercase tracking-wider">
          Slide Preview
        </p>
        <div className="flex items-center gap-1">
          <button
            onClick={prev}
            className="w-4 h-4 rounded flex items-center justify-center bg-white/5 hover:bg-white/15 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-3 h-3 text-[#A1A1AA]" />
          </button>
          <span className="text-[8px] text-[#A1A1AA] font-mono tabular-nums min-w-[20px] text-center">
            {activeSlide + 1}/{debriefSlides.length}
          </span>
          <button
            onClick={next}
            className="w-4 h-4 rounded flex items-center justify-center bg-white/5 hover:bg-white/15 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-3 h-3 text-[#A1A1AA]" />
          </button>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-[10px] text-teal font-semibold mb-1">
            {slide.title}
          </p>
          <div className="flex gap-1">
            {slide.bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-teal/40"
                style={{ height: `${h / 4}px` }}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ─── Main BentoGrid component ─── */
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
            <div className="glow-card bg-white rounded-2xl border border-[#E4E4E7] p-8 h-full hover:shadow-lg hover:scale-[1.01] transition-all duration-200 group">
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
                {/* Interactive plotted dots */}
                {opportunityDots.map((dot) => (
                  <OpportunityDot key={dot.id} dot={dot} />
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* ROW 1 — Card 2: 7-Day Delivery (5 cols) */}
          <AnimateOnScroll variant="fadeUp" delay={0.25} className="col-span-12 lg:col-span-5">
            <div className="glow-card bg-teal rounded-2xl p-8 h-full text-white hover:shadow-lg hover:scale-[1.01] transition-all duration-200">
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
            <div className="glow-card bg-[#F9F9F9] rounded-2xl border border-[#E4E4E7] p-8 h-full hover:shadow-lg hover:scale-[1.01] transition-all duration-200">
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
            <div className="glow-card bg-white rounded-2xl border border-[#E4E4E7] p-8 h-full hover:shadow-lg hover:scale-[1.01] transition-all duration-200">
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
            <div className="glow-card rounded-2xl p-8 h-full hover:shadow-lg hover:scale-[1.01] transition-all duration-200" style={{ backgroundColor: '#0D0F14' }}>
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
              className="glow-card rounded-2xl p-8 lg:p-12 hover:shadow-lg hover:scale-[1.005] transition-all duration-200 relative overflow-hidden"
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
                    7 days after the discovery call, I walk through every finding together on Zoom. You ask questions. I show you how to present the top 3 opportunities to your partners. And if it makes sense, we talk about what implementation would look like.
                  </p>
                </div>

                {/* Glassmorphic Mock Zoom UI */}
                <div className="bg-[#0D0F14]/80 backdrop-blur-md rounded-xl p-4 border border-white/15 shadow-[0_0_30px_rgba(13,92,99,0.15)]">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[10px] text-[#A1A1AA] ml-2 font-mono">Auqira Debrief — Zoom</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="aspect-video bg-[#1A1A2E] rounded-lg flex flex-col items-center justify-center gap-1.5">
                      <div className="w-10 h-10 rounded-full bg-teal/30 flex items-center justify-center">
                        <span className="text-teal text-sm font-bold">SS</span>
                      </div>
                      <WaveformBars />
                    </div>
                    <div className="aspect-video bg-[#1A1A2E] rounded-lg flex flex-col items-center justify-center gap-1.5">
                      <div className="w-10 h-10 rounded-full bg-[#A1A1AA]/20 flex items-center justify-center">
                        <span className="text-[#A1A1AA] text-sm font-bold">You</span>
                      </div>
                      <WaveformBars />
                    </div>
                  </div>
                  {/* Mini Slide Carousel */}
                  <SlideCarousel />
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
