'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimateOnScroll } from './animate-on-scroll';
import { ArrowRight, Target, Home, Megaphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const industries = [
  { id: 'recruitment', icon: <Target className="w-3.5 h-3.5" />, label: 'Recruitment' },
  { id: 'real-estate', icon: <Home className="w-3.5 h-3.5" />, label: 'Real Estate' },
  { id: 'marketing', icon: <Megaphone className="w-3.5 h-3.5" />, label: 'Marketing' },
];

const industryStats: Record<string, { stat1: [string, string], stat2: [string, string], stat3: [string, string], stat4: [string, string] }> = {
  'recruitment': {
    stat1: ["10+ hrs/week", "Recovered per person, conservative cross-industry estimate"],
    stat2: ["7 Days", "Guaranteed delivery from discovery call"],
    stat3: ["$1,500", "Founding client rate — normally $3,000"],
    stat4: ["10× ROI", "From a single additional placement"],
  },
  'real-estate': {
    stat1: ["35 hrs/month", "Saved on listing copy alone (10-agent office)"],
    stat2: ["7 Days", "Guaranteed delivery from discovery call"],
    stat3: ["$1,500", "Founding client rate — normally $3,000"],
    stat4: ["8 min", "AI-assisted listing description vs 40 min manual"],
  },
  'marketing': {
    stat1: ["2,800+ hrs/yr", "Recovered at an 8-person agency"],
    stat2: ["7 Days", "Guaranteed delivery from discovery call"],
    stat3: ["$1,500", "Founding client rate — normally $3,000"],
    stat4: ["75%", "Reduction in client reporting time with automation"],
  },
};

export function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeIndustry, setActiveIndustry] = useState('recruitment');

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const activeStats = industryStats[activeIndustry];
  const statsArray = [activeStats.stat1, activeStats.stat2, activeStats.stat3, activeStats.stat4];

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-36 pb-28 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40"
      style={{ backgroundColor: '#0D0F14' }}
    >
      {/* Background Grid Texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Radial Glow Effect — top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(13, 92, 99, 0.25), transparent)',
        }}
      />

      {/* Cursor ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(13, 92, 99, 0.07), transparent)`,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <AnimateOnScroll variant="fadeUp" delay={0.1}>
          <p className="uppercase-label text-teal font-semibold mb-6">
            AI Workflow Audit
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.2}>
          <h1 className="text-shimmer text-[3.5rem] sm:text-[5rem] lg:text-[6.5rem] font-extrabold leading-[1.05] tracking-[-0.03em] mb-8">
            Your Team Is Losing Hours
            <br />
            Every Day To Tasks
            <br />
            AI Can Handle.
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.3}>
          <p className="text-lg sm:text-xl text-[#A1A1AA] leading-relaxed max-w-2xl mx-auto mb-12">
            A fixed-price AI Workflow Audit that shows you exactly where — with the ROI math, tool names, and a 90-day roadmap. Delivered in 7 days.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.4}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveIndustry(ind.id)}
                className={`inline-flex items-center gap-2 transition-all duration-200 rounded-full px-[18px] py-[8px] text-[13px] border ${
                  activeIndustry === ind.id
                    ? 'bg-[#0D5C63] text-white border-[#0D5C63]'
                    : 'bg-transparent text-[#A1A1AA] border-white/15 hover:border-white/35'
                }`}
              >
                {ind.icon}
                {ind.label}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.5} className="w-full max-w-4xl mx-auto mb-16">
          <div className="relative min-h-[120px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
              >
                {statsArray.map((stat, idx) => (
                  <div key={idx} className="border-l border-white/10 pl-4">
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{stat[0]}</div>
                    <div className="text-sm text-[#A1A1AA] leading-snug">{stat[1]}</div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimateOnScroll>

        {/* Floating Glassmorphic Dashboard Mockup */}
        <AnimateOnScroll variant="fadeUp" delay={0.55} className="w-full max-w-3xl mx-auto mb-16">
          <div className="relative rounded-2xl border border-white/[0.12] bg-white/[0.04] backdrop-blur-xl p-6 sm:p-8 shadow-2xl overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-br from-white/[0.06] via-transparent to-teal/[0.04]" />

            {/* Header */}
            <div className="relative z-10 flex items-center gap-2 mb-6">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              </div>
              <span className="ml-3 text-xs font-medium text-[#A1A1AA] tracking-wide uppercase">AI Opportunity Matrix</span>
            </div>

            {/* 2×2 Matrix Grid */}
            <div className="relative z-10 mx-auto mb-8" style={{ maxWidth: '340px' }}>
              {/* Axis labels */}
              <div className="flex justify-between text-[10px] text-[#6B7280] uppercase tracking-widest mb-2 px-1">
                <span>Low Impact</span>
                <span>High Impact</span>
              </div>
              <div className="relative aspect-square border border-white/10 rounded-xl bg-white/[0.02]">
                {/* Grid lines */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-px bg-white/[0.06]" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-px bg-white/[0.06]" />
                </div>

                {/* Dot: Top-Left — Low Impact, Hard */}
                <div className="absolute top-[22%] left-[20%] flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#6B7280] shadow-[0_0_8px_rgba(107,114,128,0.4)] dot-pulse" />
                  <span className="text-[10px] text-[#A1A1AA] whitespace-nowrap">Email Triage</span>
                </div>
                {/* Dot: Top-Right — High Impact, Hard */}
                <div className="absolute top-[18%] right-[12%] flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.4)] dot-pulse" />
                  <span className="text-[10px] text-[#D4AF37] whitespace-nowrap">Lead Scoring</span>
                </div>
                {/* Dot: Bottom-Left — Low Impact, Easy */}
                <div className="absolute bottom-[22%] left-[18%] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A1A1AA] shadow-[0_0_6px_rgba(161,161,170,0.3)] dot-pulse" />
                  <span className="text-[10px] text-[#A1A1AA] whitespace-nowrap">Meeting Notes</span>
                </div>
                {/* Dot: Bottom-Right — High Impact, Easy (winner) */}
                <div className="absolute bottom-[18%] right-[10%] flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#0D5C63] shadow-[0_0_12px_rgba(13,92,99,0.5)] dot-pulse" />
                  <span className="text-[10px] text-[#34D399] whitespace-nowrap font-medium">Report Gen ★</span>
                </div>

                {/* Axis side labels */}
                <span className="absolute -left-1 top-1/2 -translate-y-1/2 -rotate-90 text-[9px] text-[#6B7280] uppercase tracking-widest whitespace-nowrap">Hard → Easy</span>
              </div>
            </div>

            {/* Floating Metric Badges */}
            <div className="relative z-10 flex flex-wrap justify-center gap-3 sm:gap-4">
              <div className="animate-float inline-flex items-center gap-2 rounded-full border border-[#28C840]/30 bg-[#28C840]/[0.08] px-4 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#28C840]" />
                <span className="text-xs font-semibold text-[#28C840]">10+ hrs/week recovered</span>
              </div>
              <div className="animate-float-delayed inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/[0.08] px-4 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                <span className="text-xs font-semibold text-teal">7-day delivery</span>
              </div>
              <div className="animate-float-slow inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/[0.08] px-4 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span className="text-xs font-semibold text-[#D4AF37]">$1,500 fixed price</span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/auqira"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal text-white rounded-full font-semibold hover:bg-[#0a4a51] transition-all duration-300 shadow-lg hover:shadow-xl text-base group"
            >
              Book Discovery Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="mailto:hello@auqira.com?subject=Sample%20Report%20Request%20%E2%80%94%20%5Byour%20industry%5D"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white rounded-full font-semibold hover:bg-white/5 transition-all duration-300 text-base"
            >
              Request Sample Report
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
