'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimateOnScroll } from './animate-on-scroll';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

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
            AI Workflow Audit for Recruitment Agencies
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.2}>
          <h1 className="text-[3.5rem] sm:text-[5rem] lg:text-[6.5rem] font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-8">
            Your Recruiters
            <br />
            Are Losing 15+ Hours
            <br />
            a Week.
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.3}>
          <p className="text-lg sm:text-xl text-[#A1A1AA] leading-relaxed max-w-2xl mx-auto mb-12">
            To manual tasks AI can handle. We show you exactly where — in 7
            days.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/auqira"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal text-white rounded-full font-semibold hover:bg-[#0a4a51] transition-all duration-300 shadow-lg hover:shadow-xl text-base group"
            >
              Schedule a Discovery Call
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
