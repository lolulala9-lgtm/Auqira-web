'use client';

import { useState, useMemo, useEffect } from 'react';
import { AnimateOnScroll } from './animate-on-scroll';
import { Calculator, ArrowRight } from 'lucide-react';
import { useSpring, useTransform, motion, useMotionValue } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  AnimatedNumber – smooth count-up between value changes             */
/* ------------------------------------------------------------------ */
function AnimatedNumber({
  value,
  prefix = '',
  suffix = '',
  className = '',
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, { stiffness: 80, damping: 20, mass: 0.8 });
  const [display, setDisplay] = useState(Math.round(value));

  useEffect(() => {
    motionVal.set(value);
  }, [value, motionVal]);

  useEffect(() => {
    const unsubscribe = springVal.on('change', (latest) => {
      setDisplay(Math.round(latest));
    });
    return unsubscribe;
  }, [springVal]);

  return (
    <span className={className}>
      {prefix}
      {display.toLocaleString('en-US')}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Slider track helper – computes filled-track gradient               */
/* ------------------------------------------------------------------ */
function sliderTrackStyle(value: number, min: number, max: number) {
  const pct = ((value - min) / (max - min)) * 100;
  return {
    background: `linear-gradient(to right, #0D5C63 0%, #0D5C63 ${pct}%, rgba(253,251,247,0.1) ${pct}%, rgba(253,251,247,0.1) 100%)`,
  };
}

const salaryOptions = [
  { label: '$45,000', value: 45000 },
  { label: '$55,000', value: 55000 },
  { label: '$65,000', value: 65000 },
  { label: '$80,000', value: 80000 },
];

export function ROICalculator() {
  const [recruiters, setRecruiters] = useState(5);
  const [salary, setSalary] = useState(55000);
  const [hoursLost, setHoursLost] = useState(15);

  const results = useMemo(() => {
    const hourlyRate = (salary / 2080) * 1.3;
    const weeklyHoursLost = recruiters * hoursLost;
    const annualCost = weeklyHoursLost * hourlyRate * 52;
    const recovery = annualCost * 0.6;
    const paybackDays = Math.round((1500 / recovery) * 365);

    return {
      weeklyHoursLost,
      annualCost,
      recovery,
      paybackDays: Math.max(1, paybackDays),
    };
  }, [recruiters, salary, hoursLost]);

  /* Recovery gauge math */
  const gaugeRadius = 34;
  const gaugeCircumference = 2 * Math.PI * gaugeRadius;
  const recoveryPct = Math.min(
    100,
    results.annualCost > 0 ? (results.recovery / results.annualCost) * 100 : 0,
  );
  const gaugeDashoffset = gaugeCircumference - (recoveryPct / 100) * gaugeCircumference;

  return (
    <section className="bg-obsidian py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll variant="fadeUp" delay={0.1} className="mb-14 text-center">
          <p className="text-teal font-semibold text-[11px] tracking-widest uppercase mb-3">
            ROI Calculator
          </p>
          <h2 className="text-[2.5rem] lg:text-[4rem] font-bold text-ivory leading-[1.1] tracking-[-0.02em] mb-4">
            See Your Numbers
          </h2>
          <p className="text-lg text-ivory/70 max-w-2xl mx-auto">
            How much is manual admin time actually costing your team?
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUpScale" delay={0.2}>
          <div className="rounded-2xl border border-teal/20 bg-[#161616] p-8 md:p-10 space-y-10">
            {/* Inputs */}
            <div className="space-y-8">
              {/* Number of recruiters */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <label className="text-ivory/80 text-sm font-medium">Number of Team Members</label>
                  <span className="text-teal font-bold text-lg">{recruiters}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={50}
                  value={recruiters}
                  onChange={(e) => setRecruiters(Number(e.target.value))}
                  style={sliderTrackStyle(recruiters, 1, 50)}
                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-teal [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-teal [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-ivory [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:transition-shadow [&::-webkit-slider-thumb]:duration-200 hover:[&::-webkit-slider-thumb]:shadow-[0_0_10px_2px_rgba(13,92,99,0.55)] [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-teal [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-ivory [&::-moz-range-thumb]:transition-shadow [&::-moz-range-thumb]:duration-200 hover:[&::-moz-range-thumb]:shadow-[0_0_10px_2px_rgba(13,92,99,0.55)]"
                />
                <div className="flex justify-between text-[10px] text-ivory/30">
                  <span>1</span>
                  <span>50</span>
                </div>
              </div>

              {/* Average salary */}
              <div className="space-y-3">
                <label className="text-ivory/80 text-sm font-medium block">Average Annual Team Member Salary (USD)</label>
                <div className="grid grid-cols-4 gap-2">
                  {salaryOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setSalary(opt.value)}
                      className={`py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                        salary === opt.value
                          ? 'bg-teal text-ivory shadow-md'
                          : 'bg-ivory/5 text-ivory/60 hover:bg-ivory/10 border border-ivory/10'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hours lost per week */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <label className="text-ivory/80 text-sm font-medium">Hours Lost to Admin per Team Member per Week</label>
                  <span className="text-teal font-bold text-lg">{hoursLost}h</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={25}
                  value={hoursLost}
                  onChange={(e) => setHoursLost(Number(e.target.value))}
                  style={sliderTrackStyle(hoursLost, 5, 25)}
                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-teal [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-teal [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-ivory [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:transition-shadow [&::-webkit-slider-thumb]:duration-200 hover:[&::-webkit-slider-thumb]:shadow-[0_0_10px_2px_rgba(13,92,99,0.55)] [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-teal [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-ivory [&::-moz-range-thumb]:transition-shadow [&::-moz-range-thumb]:duration-200 hover:[&::-moz-range-thumb]:shadow-[0_0_10px_2px_rgba(13,92,99,0.55)]"
                />
                <div className="flex justify-between text-[10px] text-ivory/30">
                  <span>5h</span>
                  <span>25h</span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-ivory/10" />

            {/* Recovery Gauge */}
            <div className="flex flex-col items-center gap-2">
              <svg width={80} height={80} viewBox="0 0 80 80" className="-rotate-90">
                {/* Background track */}
                <circle
                  cx={40}
                  cy={40}
                  r={gaugeRadius}
                  fill="none"
                  stroke="rgba(253,251,247,0.1)"
                  strokeWidth={6}
                />
                {/* Filled arc */}
                <circle
                  cx={40}
                  cy={40}
                  r={gaugeRadius}
                  fill="none"
                  stroke="#0D5C63"
                  strokeWidth={6}
                  strokeLinecap="round"
                  strokeDasharray={gaugeCircumference}
                  strokeDashoffset={gaugeDashoffset}
                  style={{ transition: 'stroke-dashoffset 0.6s ease' }}
                />
              </svg>
              {/* Percentage overlay */}
              <p className="text-ivory text-sm font-bold -mt-[58px] mb-[30px]">
                {Math.round(recoveryPct)}%
              </p>
              <p className="text-ivory/40 text-[10px] uppercase tracking-widest font-medium">
                Recovery Rate
              </p>
            </div>

            {/* Outputs */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-1.5 p-5 rounded-xl bg-ivory/[0.03] border border-ivory/5">
                <p className="text-ivory/50 text-xs uppercase tracking-wider font-medium">Hours lost per week across your team</p>
                <p className="text-3xl font-bold text-ivory">
                  <AnimatedNumber value={results.weeklyHoursLost} />
                  <span className="text-lg text-ivory/50 ml-1">hrs</span>
                </p>
              </div>
              <div className="space-y-1.5 p-5 rounded-xl bg-ivory/[0.03] border border-ivory/5">
                <p className="text-ivory/50 text-xs uppercase tracking-wider font-medium">Annual cost of that lost time</p>
                <p className="text-3xl font-bold text-red-400">
                  <AnimatedNumber value={Math.round(results.annualCost)} prefix="$" />
                </p>
              </div>
              <div className="space-y-1.5 p-5 rounded-xl bg-teal/10 border border-teal/20">
                <p className="text-ivory/50 text-xs uppercase tracking-wider font-medium">Conservative recovery with AI (60%)</p>
                <p className="text-3xl font-bold text-teal">
                  <AnimatedNumber value={Math.round(results.recovery)} prefix="$" />
                  <span className="text-lg text-ivory/50 ml-1">/yr</span>
                </p>
              </div>
              <div className="space-y-1.5 p-5 rounded-xl bg-teal/10 border border-teal/20">
                <p className="text-ivory/50 text-xs uppercase tracking-wider font-medium">Your audit pays back in</p>
                <p className="text-3xl font-bold text-teal">
                  <AnimatedNumber value={results.paybackDays} />
                  <span className="text-lg text-ivory/50 ml-1">days</span>
                </p>
              </div>
            </div>

            <p className="text-ivory/40 text-sm text-center">
              These are conservative estimates. Most businesses exceed them within 90 days.
            </p>

            {/* CTA */}
            <div className="text-center pt-2">
              <a
                href="https://calendly.com/auqira"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-primary group"
              >
                Book your audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
