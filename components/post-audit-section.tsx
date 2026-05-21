'use client';

import { AnimateOnScroll } from './animate-on-scroll';
import { CheckCircle, Phone } from 'lucide-react';

export function PostAuditSection() {
  return (
    <section className="bg-ivory py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll variant="fadeUp" delay={0.1} className="mb-16">
          <p className="text-teal font-semibold text-[11px] tracking-widest uppercase mb-3">After the Audit</p>
          <h2 className="text-[2.5rem] lg:text-[4rem] font-bold text-obsidian leading-[1.1] tracking-[-0.02em]">What Happens After the Audit</h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimateOnScroll variant="fadeUp" delay={0.2}>
            <div className="card-premium p-8 h-full border-t-4 border-t-teal space-y-4 glow-card">
              <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-teal" />
              </div>
              <h3 className="text-xl font-bold text-obsidian">Implement Yourself</h3>
              <p className="text-slate-custom text-sm leading-relaxed">
                The 90-day roadmap is self-sufficient. Take it, run it, refer back anytime.
              </p>
              <span className="inline-block px-3 py-1.5 bg-teal/10 text-teal text-[11px] font-semibold uppercase tracking-wider rounded-full">
                Included in every audit
              </span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fadeUp" delay={0.3}>
            <div className="card-premium p-8 h-full border-t-4 border-t-[#D4AF37] space-y-4 glow-card">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold text-obsidian">30-Day Implementation Advisory</h3>
              <p className="text-slate-custom text-sm leading-relaxed">
                Two 30-minute check-in calls per month as you roll out your top opportunities. I review your setup and help you troubleshoot in real time.
              </p>
              <span className="inline-block px-3 py-1.5 bg-[#D4AF37]/10 text-[#D4AF37] text-[11px] font-semibold uppercase tracking-wider rounded-full">
                $1,500-$2,500 &middot; Available to audit clients only
              </span>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
