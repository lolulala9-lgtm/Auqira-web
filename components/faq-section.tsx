'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimateOnScroll } from './animate-on-scroll';

const faqs = [
  {
    question: 'Do you implement the tools?',
    answer:
      'No, we deliver the audit and roadmap. Implementation is your responsibility, but our 90-day roadmap makes it straightforward. We can recommend implementation partners if needed.',
  },
  {
    question: 'How long does the audit take?',
    answer:
      'Exactly 7 business days from kickoff to final deliverables. The process includes a discovery call, workflow analysis, matrix creation, and executive debrief.',
  },
  {
    question: 'Is this suitable for boutique agencies?',
    answer:
      'Yes, absolutely. We specialize in firms with 10–50 employees. Our recommendations scale based on your team size and complexity.',
  },
  {
    question: 'How is sensitive data handled?',
    answer:
      'All data is treated with strict confidentiality. We sign NDAs and use secure, GDPR-compliant processes. Details are never shared or retained longer than necessary.',
  },
  {
    question: 'What if I\u0026apos;m not satisfied?',
    answer:
      'We stand behind our work. If the audit doesn\'t meet your expectations, we offer a full revision at no extra cost.',
  },
  {
    question: 'Can I see a sample report?',
    answer:
      'Yes. Schedule a discovery call and we\u0026apos;ll walk you through an anonymized case study showing the format and depth of our deliverables.',
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
            Everything you need to know about our AI Workflow Audit.
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
