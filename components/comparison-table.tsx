'use client';

import { AnimateOnScroll } from './animate-on-scroll';
import { Check, X } from 'lucide-react';

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
    label: 'Recruitment-specific',
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

function renderCell(value: CellValue, isAuqira: boolean = false) {
  if (value === 'check') {
    return <Check className={`w-5 h-5 mx-auto ${isAuqira ? 'text-teal' : 'text-teal/60'}`} />;
  }
  if (value === 'x') {
    return <X className="w-5 h-5 mx-auto text-gray-300" />;
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
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left min-w-[640px]">
              <thead>
                <tr className="bg-teal text-ivory">
                  <th className="px-5 py-4 text-xs uppercase tracking-wider font-semibold w-[20%]"></th>
                  <th className="px-5 py-4 text-xs uppercase tracking-wider font-bold w-[20%] bg-[#0a4a51]">
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
                    className={`border-t border-gray-100 ${idx % 2 === 0 ? 'bg-ivory' : 'bg-cream/50'}`}
                  >
                    <td className="px-5 py-4 text-sm font-semibold text-obsidian">{row.label}</td>
                    <td className="px-5 py-4 text-center border-l-2 border-l-teal/30 bg-teal/[0.03]">
                      {renderCell(row.auqira, true)}
                    </td>
                    <td className="px-5 py-4 text-center">{renderCell(row.hourly)}</td>
                    <td className="px-5 py-4 text-center">{renderCell(row.enterprise)}</td>
                    <td className="px-5 py-4 text-center">{renderCell(row.diy)}</td>
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
