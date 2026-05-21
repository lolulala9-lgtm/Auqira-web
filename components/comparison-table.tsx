'use client';

import { useRef } from 'react';
import { AnimateOnScroll } from './animate-on-scroll';
import { Check, X } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

type CellValue = string | 'check' | 'x' | 'rarely' | 'sometimes' | 'varies' | 'depends';

interface ComparisonRow {
  label: string;
  auqira: CellValue;
  hourly: CellValue;
  enterprise: CellValue;
  diy: CellValue;
}

const rows: ComparisonRow[] = [
  {
    label: 'Cost',
    auqira: '$1,500 fixed',
    hourly: '$150–300/hr (unknown total)',
    enterprise: '$50,000–100,000+',
    diy: 'Your time (months)',
  },
  {
    label: 'Time to insights',
    auqira: '7 days',
    hourly: '4–8 weeks',
    enterprise: '3–6 months',
    diy: '3–6 months',
  },
  {
    label: 'Industry-specific knowledge',
    auqira: 'check',
    hourly: 'rarely',
    enterprise: 'rarely',
    diy: 'depends',
  },
  {
    label: 'Fixed scope + deliverable',
    auqira: 'check',
    hourly: 'x',
    enterprise: 'sometimes',
    diy: 'x',
  },
  {
    label: 'ATS integration knowledge',
    auqira: 'check',
    hourly: 'rarely',
    enterprise: 'sometimes',
    diy: 'x',
  },
  {
    label: 'Vendor-agnostic',
    auqira: 'check',
    hourly: 'varies',
    enterprise: 'x',
    diy: 'check',
  },
];

/* ── Animated icon wrapper (scale-in on scroll) ── */
function AnimatedIcon({
  children,
  rowIndex,
}: {
  children: React.ReactNode;
  rowIndex: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.3 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 }}
      transition={{
        duration: 0.4,
        delay: rowIndex * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="inline-flex"
    >
      {children}
    </motion.span>
  );
}

function renderCell(value: CellValue, isAuqira: boolean = false, rowIndex: number = 0) {
  if (value === 'check') {
    return (
      <AnimatedIcon rowIndex={rowIndex}>
        <Check className={`w-5 h-5 mx-auto ${isAuqira ? 'text-teal' : 'text-teal/60'}`} />
      </AnimatedIcon>
    );
  }
  if (value === 'x') {
    return (
      <AnimatedIcon rowIndex={rowIndex}>
        <X className="w-5 h-5 mx-auto text-gray-300" />
      </AnimatedIcon>
    );
  }
  const muted = ['rarely', 'sometimes', 'varies', 'depends'].includes(value);
  return (
    <span className={`text-sm ${muted ? 'text-slate-custom italic' : isAuqira ? 'text-obsidian font-semibold' : 'text-slate-custom'}`}>
      {value.charAt(0).toUpperCase() + value.slice(1)}
    </span>
  );
}

export function ComparisonTable() {
  return (
    <section className="bg-ivory py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll variant="fadeUp" delay={0.1} className="mb-14">
          <p className="text-teal font-semibold text-[11px] tracking-widest uppercase mb-3">
            Comparison
          </p>
          <h2 className="text-[2.5rem] lg:text-[4rem] font-bold text-obsidian leading-[1.1] tracking-[-0.02em]">
            Why Not Just Figure It Out Yourself?
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.2}>
          {/* ── Glow card wrapper ── */}
          <div className="glow-card overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left min-w-[640px]">
              <thead>
                <tr className="bg-teal text-ivory">
                  <th className="px-5 py-4 text-xs uppercase tracking-wider font-semibold w-[20%]"></th>

                  {/* ── Floating Auqira header ── */}
                  <th
                    className="relative px-6 py-5 text-xs uppercase tracking-wider font-bold w-[20%] bg-[#0a4a51]"
                    style={{
                      boxShadow: '-4px 0 16px rgba(13,92,99,0.25), 4px 0 16px rgba(13,92,99,0.25)',
                    }}
                  >
                    {/* Founding Offer badge */}
                    <span className="absolute -top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-obsidian text-[10px] font-bold tracking-wide uppercase px-3 py-0.5 rounded-full whitespace-nowrap shadow-md">
                      Founding Offer
                    </span>
                    Auqira Audit
                  </th>

                  <th className="px-5 py-4 text-xs uppercase tracking-wider font-semibold w-[20%]">
                    Hourly AI Consultant
                  </th>
                  <th className="px-5 py-4 text-xs uppercase tracking-wider font-semibold w-[20%]">
                    Enterprise Consultancy
                  </th>
                  <th className="px-5 py-4 text-xs uppercase tracking-wider font-semibold w-[20%]">
                    DIY Research
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-t border-gray-100 transition-colors duration-200 group
                      ${idx % 2 === 0 ? 'bg-ivory' : 'bg-cream/50'}
                      hover:bg-teal/[0.04]`}
                  >
                    {/* Row label with hover left-border accent */}
                    <td className="px-5 py-4 text-sm font-semibold text-obsidian border-l-2 border-l-transparent group-hover:border-l-teal transition-colors duration-200">
                      {row.label}
                    </td>

                    {/* ── Floating Auqira data cell ── */}
                    <td
                      className="px-6 py-5 text-center border-l-2 border-r-2 border-l-teal/30 border-r-teal/30 bg-teal/[0.04]"
                      style={{
                        boxShadow: '-4px 0 12px rgba(13,92,99,0.08), 4px 0 12px rgba(13,92,99,0.08)',
                      }}
                    >
                      {renderCell(row.auqira, true, idx)}
                    </td>

                    <td className="px-5 py-4 text-center">{renderCell(row.hourly, false, idx)}</td>
                    <td className="px-5 py-4 text-center">{renderCell(row.enterprise, false, idx)}</td>
                    <td className="px-5 py-4 text-center">{renderCell(row.diy, false, idx)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
