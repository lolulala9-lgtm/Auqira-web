'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimateOnScroll } from './animate-on-scroll';

const faqs = [
  {
    question: 'Do you work with industries other than recruitment?',
    answer:
      "Yes — the audit is built for any service business with document-heavy, repetitive workflows. I currently work with recruitment agencies, real estate brokerages, and marketing agencies. If your team spends significant time on tasks that follow a repeatable pattern, there's almost certainly an AI opportunity worth auditing.",
  },
  {
    question: 'Is the audit the same across industries?',
    answer:
      "The methodology is the same. The content is entirely different. Every audit is built from your specific discovery call — your tools, your workflows, your team structure. I don't have an off-the-shelf report. What you receive reflects your business, not a template.",
  },
  {
    question: 'Will this disrupt my team\'s daily workflow?',
    answer:
      "No. The entire audit requires only one 60-minute call with you — the founder or ops lead. Your team doesn't attend. I work from your intake form and our discovery call. They won't notice the audit is happening.",
  },
  {
    question: 'We already use ChatGPT. Isn\'t that enough?',
    answer:
      "ChatGPT is a good starting point for writing copy or drafting emails. The audit focuses on agentic AI — systems that autonomously handle repetitive tasks, integrate with your existing tools, and run without someone prompting them each time. That's where the 10+ hours per week of recovery comes from.",
  },
  {
    question: 'What if our client or business data is confidential?',
    answer:
      "All recommended tools are enterprise-grade and do not use your proprietary data to train public AI models. A core output of the audit is flagging any tools in your current stack with weak data governance, and replacing them with privacy-compliant alternatives.",
  },
  {
    question: 'How is this different from a software vendor pitching me AI?',
    answer:
      "I don't sell software. I don't have affiliate deals or vendor commissions. I'm entirely vendor-agnostic — my only incentive is finding the highest-ROI solution for your specific business and tech stack. If the best tool for your situation is free, I'll tell you that.",
  },
  {
    question: 'What if I\'m not happy with the audit?',
    answer:
      "If the audit doesn't surface at least 5 specific, actionable AI opportunities tailored to your workflows, I'll refund your fee in full. That guarantee has never been triggered — there are always more opportunities than expected.",
  },
  {
    question: 'How do I know your recommendations will work with our existing tools?',
    answer:
      "I've worked with businesses across multiple tech stacks — CRMs, ATSs, CMSs, e-commerce platforms, and marketing suites. Every tool recommendation in the report is cross-checked against your specific stack for native integration or API compatibility before it goes in the deck.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-ivory py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll variant="fadeUp" delay={0.1} className="mb-16">
          <p className="uppercase-label text-teal font-semibold mb-3">Questions</p>
          <h2 className="text-[2.5rem] lg:text-[4rem] font-bold text-obsidian mb-4 leading-[1.1] tracking-[-0.02em]">
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
            <AnimateOnScroll key={index} variant="fadeUp" delay={0.3 + index * 0.05}>
              <div className="overflow-hidden rounded-xl border border-gray-200 hover:border-teal/30 transition-colors duration-300">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left px-6 py-5 bg-ivory flex items-center justify-between group"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
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
                      id={`faq-answer-${index}`}
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
