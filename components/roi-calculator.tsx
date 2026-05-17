'use client';

import { useState, useMemo } from 'react';
import { AnimateOnScroll } from './animate-on-scroll';
import { Calculator, ArrowRight } from 'lucide-react';

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

  const formatCurrency = (val: number) =>
    '$' + Math.round(val).toLocaleString('en-US');

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
                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-ivory/10 accent-teal [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-teal [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-ivory [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-teal [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-ivory"
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
                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-ivory/10 accent-teal [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-teal [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-ivory [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-teal [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-ivory"
                />
                <div className="flex justify-between text-[10px] text-ivory/30">
                  <span>5h</span>
                  <span>25h</span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-ivory/10" />

            {/* Outputs */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-1.5 p-5 rounded-xl bg-ivory/[0.03] border border-ivory/5">
                <p className="text-ivory/50 text-xs uppercase tracking-wider font-medium">Hours lost per week across your team</p>
                <p className="text-3xl font-bold text-ivory">{results.weeklyHoursLost}<span className="text-lg text-ivory/50 ml-1">hrs</span></p>
              </div>
              <div className="space-y-1.5 p-5 rounded-xl bg-ivory/[0.03] border border-ivory/5">
                <p className="text-ivory/50 text-xs uppercase tracking-wider font-medium">Annual cost of that lost time</p>
                <p className="text-3xl font-bold text-red-400">{formatCurrency(results.annualCost)}</p>
              </div>
              <div className="space-y-1.5 p-5 rounded-xl bg-teal/10 border border-teal/20">
                <p className="text-ivory/50 text-xs uppercase tracking-wider font-medium">Conservative recovery with AI (60%)</p>
                <p className="text-3xl font-bold text-teal">{formatCurrency(results.recovery)}<span className="text-lg text-ivory/50 ml-1">/yr</span></p>
              </div>
              <div className="space-y-1.5 p-5 rounded-xl bg-teal/10 border border-teal/20">
                <p className="text-ivory/50 text-xs uppercase tracking-wider font-medium">Your audit pays back in</p>
                <p className="text-3xl font-bold text-teal">{results.paybackDays}<span className="text-lg text-ivory/50 ml-1">days</span></p>
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
