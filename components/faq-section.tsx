'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimateOnScroll } from './animate-on-scroll';

const faqs = [
  {
    question: 'Will this disrupt our recruiters\u0027 daily workflow?',
    answer:
      'No. The entire audit requires only one 60-minute call with you — the founder or ops lead. Your recruiters don\u0027t attend. I work from your intake form and our discovery call. They won\u0027t notice the audit is happening.',
  },
  {
    question: 'We already use ChatGPT. Isn\u0027t that enough?',
    answer:
      'ChatGPT is a good starting point for writing job descriptions or emails. The audit focuses on agentic AI — systems that autonomously source candidates, auto-fill your ATS, schedule interviews, and follow up with leads without requiring a recruiter to prompt them each time. That\u0027s where the 15+ hours per week of recovery comes from.',
  },
  {
    question: 'What if our candidate data is confidential?',
    answer:
      'All recommended tools are enterprise-grade and do not use your proprietary candidate or client data to train public AI models. A core output of the audit is flagging any tools in your current stack with weak data governance, and replacing them with privacy-compliant alternatives.',
  },
  {
    question: 'What about AI bias in hiring?',
    answer:
      'AI bias is a real legal risk, and the audit addresses it directly. Every tool recommendation includes a bias compliance review. I flag vendors with poor audit trails and only recommend tools aligned with emerging EU AI Act and US state-level hiring fairness standards.',
  },
  {
    question: 'How is this different from a software vendor pitching me AI?',
    answer:
      'I don\u0027t sell software. I don\u0027t have affiliate deals or vendor commissions. I\u0027m entirely vendor-agnostic — my only incentive is finding the highest-ROI solution for your specific agency and ATS stack. If the best tool for your situation is free, I\u0027ll tell you that.',
  },
  {
    question: 'What if I\u0027m not happy with the audit?',
    answer:
      'If the audit doesn\u0027t surface at least 5 specific, actionable AI opportunities tailored to your agency\u0027s workflows, I\u0027ll refund your fee in full. That guarantee has never been triggered — there are always more opportunities than expected.',
  },
  {
    question: 'We\u0027re in a hiring freeze. Is now the right time?',
    answer:
      'Hiring freezes are the best time to do this. When headcount is locked, the only path to more revenue is improving output per recruiter. The audit gives you the blueprint to do that — so when the freeze lifts, your team operates at 40–50% higher efficiency from day one.',
  },
  {
    question: 'How do I know your recommendations will work with our ATS?',
    answer:
      'We\u0027ve worked with agencies using Bullhorn, Greenhouse, Lever, JobAdder, Vincere, Loxo, Workable, SmartRecruiters, and more. Every tool recommendation in the report is cross-checked against your specific ATS for native integration or API compatibility before it goes in the deck.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-ivory py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll variant="fadeUp" delay={0.1} className="mb-16">
          <p className="text-teal font-semibold text-[11px] tracking-widest uppercase mb-3">
            Questions
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold text-obsidian mb-4 leading-tight">
            Frequently Asked.
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.2}>
          <p className="text-lg text-slate-custom mb-12 max-w-2xl">
            Real objections, honest answers — everything you need to know before booking.
          </p>
        </AnimateOnScroll>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimateOnScroll key={index} variant="fadeUp" delay={0.3 + index * 0.08}>
              <div className="overflow-hidden rounded-xl border border-gray-200 hover:border-teal/30 transition-colors duration-300">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left px-6 py-5 bg-ivory flex items-center justify-between group"
                >
                  <span className="font-semibold text-obsidian pr-4 group-hover:text-teal transition-colors">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
                    >
                      <ChevronDown className="w-5 h-5 text-slate-custom" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                        <p className="text-slate-custom leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
