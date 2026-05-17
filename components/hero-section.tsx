'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimateOnScroll } from './animate-on-scroll';
import { ArrowRight, Target, Home, Megaphone, ShoppingBag, Newspaper } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const industries = [
  { id: 'recruitment', icon: <Target className="w-3.5 h-3.5" />, label: 'Recruitment' },
  { id: 'real-estate', icon: <Home className="w-3.5 h-3.5" />, label: 'Real Estate' },
  { id: 'marketing', icon: <Megaphone className="w-3.5 h-3.5" />, label: 'Marketing' },
  { id: 'ecommerce', icon: <ShoppingBag className="w-3.5 h-3.5" />, label: 'E-commerce' },
  { id: 'pr', icon: <Newspaper className="w-3.5 h-3.5" />, label: 'PR & Comms' },
];

const industryStats: Record<string, { stat1: [string, string], stat2: [string, string], stat3: [string, string], stat4: [string, string] }> = {
  'recruitment': {
    stat1: ["17 hrs/week", "Recovered per recruiter with AI workflows"],
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
  'ecommerce': {
    stat1: ["54 hrs", "Recovered per full catalogue refresh"],
    stat2: ["7 Days", "Guaranteed delivery from discovery call"],
    stat3: ["$1,500", "Founding client rate — normally $3,000"],
    stat4: ["40%", "Customer service ticket deflection rate with AI"],
  },
  'pr': {
    stat1: ["9 hrs", "Recovered per media outreach campaign"],
    stat2: ["7 Days", "Guaranteed delivery from discovery call"],
    stat3: ["$1,500", "Founding client rate — normally $3,000"],
    stat4: ["5×", "More personalized pitches per hour with AI assistance"],
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
          <h1 className="text-[3.5rem] sm:text-[5rem] lg:text-[6.5rem] font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-8">
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
              href="#sample-audit"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white rounded-full font-semibold hover:bg-white/5 transition-all duration-300 text-base"
            >
              View Sample Report
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
