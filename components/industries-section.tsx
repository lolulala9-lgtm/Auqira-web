'use client';

import { useState } from 'react';
import { AnimateOnScroll } from './animate-on-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const industriesData = [
  {
    id: 'recruitment',
    label: '🎯 Recruitment & Staffing',
    painPoints: [
      { icon: '⏱', text: 'Interview scheduling — 3 days of email tag per booking' },
      { icon: '📋', text: 'ATS data entry — manual candidate profile creation after every call' },
      { icon: '📝', text: 'Job description writing — from scratch for every role, every time' },
      { icon: '📨', text: 'Candidate re-engagement — manual follow-ups that get deprioritized' },
      { icon: '📊', text: 'Client reporting — manually compiled status updates each week' }
    ],
    roi: {
      title: 'The math your partners need to see',
      content: '3 recruiters × 17 hrs recovered/week × $40 loaded hourly rate × 52 weeks\n= $106,080 in recovered capacity per year\nYour audit investment: $1,500\nPayback period: 6 working days'
    },
    tools: [
      'Bullhorn AI', 'Greenhouse', 'Paradox (Olivia)', 'HireEZ', 'Gem', 'Fathom', 'Calendly AI', 'Zapier', 'Make', 'Loxo'
    ],
    toolsNote: 'Every recommendation is cross-checked against your specific ATS before it goes in the deck.',
    callout: 'One additional placement per quarter covers the cost of this audit more than 10×. Most agencies find 6–8 improvement opportunities in the first audit.'
  },
  {
    id: 'real-estate',
    label: '🏘️ Real Estate',
    painPoints: [
      { icon: '🏠', text: 'Listing descriptions — 30–45 min per property, written from scratch every time' },
      { icon: '📊', text: 'CMA reports — market analysis reports built manually per client' },
      { icon: '📨', text: 'Lead follow-up — most agents follow up once, then the lead goes cold' },
      { icon: '📝', text: 'CRM data entry — showing notes, inquiry details entered manually' },
      { icon: '📱', text: 'Social media — listing content posted manually per property' }
    ],
    roi: {
      title: 'The math for a 10-agent office',
      content: '10 agents × 30 listings/month × 32 min saved per listing description\n= 160 hrs/month recovered on listing copy alone\nAt $75/hr opportunity cost = $12,000/month in recovered selling time\nYour audit investment: $1,500\nPayback period: 3.75 working days'
    },
    tools: [
      'ChatGPT (listings)', 'Claude (reports)', 'Canva AI', 'Follow Up Boss AI', 'Zapier', 'Styldod', 'CINC AI', 'Sierra Interactive', 'ListingAI', 'Mailchimp AI'
    ],
    toolsNote: '',
    callout: 'Real estate is one of the highest-density manual writing industries on the planet. Every listing, every email, every market update — written from scratch. The audit shows you which 3 to automate first.'
  },
  {
    id: 'marketing',
    label: '📣 Marketing & Creative',
    painPoints: [
      { icon: '✍️', text: 'Content production — first drafts still written manually by senior staff' },
      { icon: '📊', text: 'Client reporting — half a day every Friday pulling data from 5 different platforms' },
      { icon: '📋', text: 'Creative briefs — typed up from call notes after every client intake' },
      { icon: '🔍', text: 'Research — competitor analysis and trend monitoring done ad hoc' },
      { icon: '📬', text: 'Proposals — new business decks rebuilt from scratch each time' }
    ],
    roi: {
      title: 'The math for an 8-person agency',
      content: '8 content staff × 2.25 hrs saved per piece × 3 pieces/week × $45/hr × 52 weeks\n= $126,360/year in recovered production capacity\nPlus: client reporting automation saves 4 hrs/week across the team\n= additional $46,800/year\nCombined: $173,160/year recovered\nYour audit investment: $1,500'
    },
    tools: [
      'Claude', 'Jasper', 'ChatGPT', 'Fathom', 'Supermetrics AI', 'Looker Studio', 'Perplexity', 'Make', 'Canva AI', 'Notion AI'
    ],
    toolsNote: '',
    callout: 'Most marketing agencies are using AI for exactly one thing: writing social captions. The audit maps the 7 other places where it saves significantly more time.'
  },
  {
    id: 'ecommerce',
    label: '🛍️ E-commerce / DTC',
    painPoints: [
      { icon: '🏷️', text: 'Product descriptions — every SKU written manually, rewritten seasonally' },
      { icon: '💬', text: 'Customer service — repetitive ticket responses handled by humans every time' },
      { icon: '📧', text: 'Email campaigns — welcome series, abandon cart, post-purchase written from scratch' },
      { icon: '📣', text: 'Ad copy — A/B variants written manually for every campaign' },
      { icon: '📊', text: 'Performance reporting — data pulled from Shopify, GA4, Meta manually' }
    ],
    roi: {
      title: 'The math for a 200-SKU brand',
      content: '200 product descriptions × 32 min saved each = 107 hrs per catalogue refresh\nCustomer service AI: 40% ticket deflection × $8/ticket × 500 tickets/month × 12 = $19,200/yr\nEmail automation improvement: 15% open rate lift on AI-optimized subject lines\nYour audit investment: $1,500'
    },
    tools: [
      'Shopify Magic', 'Gorgias AI', 'Klaviyo AI', 'Claude', 'ChatGPT', 'AdCreative.ai', 'Yotpo AI', 'Zapier', 'Triple Whale AI', 'Canva AI'
    ],
    toolsNote: '',
    callout: "A 200-SKU catalogue refresh used to take 67 hours of writing time. With AI workflows properly configured, it takes 13 hours. That's a week of someone's time returned — from one workflow change."
  },
  {
    id: 'pr',
    label: '📰 PR & Comms',
    painPoints: [
      { icon: '📰', text: 'Press releases — written from brief to final in 2–3 hours, every time' },
      { icon: '📨', text: 'Media pitches — should be personalized per journalist. Almost never are.' },
      { icon: '📋', text: 'Briefing documents — spokesperson prep docs built manually before every interview' },
      { icon: '📊', text: 'Coverage reports — monthly reports compiled from monitoring tools by hand' },
      { icon: '📣', text: 'Social execution — client social content written individually per post' }
    ],
    roi: {
      title: 'The math for a 6-person PR team',
      content: '6 PR executives × 5 hrs/week in press release + pitch + report writing × $50/hr × 52\n= $78,000/year in recovered capacity\nMedia pitch personalization: 30 pitches at 4 min each vs 15 min each = 5.5 hrs recovered per campaign\nYour audit investment: $1,500'
    },
    tools: [
      'Claude (press releases)', 'Muckrack AI', 'Cision AI', 'ChatGPT', 'Fathom', 'Notion AI', 'Zapier', 'Canva AI', 'Perplexity', 'HubSpot AI'
    ],
    toolsNote: '',
    callout: 'PR agencies produce more words per employee than almost any other service business. The audit identifies which writing tasks can be 80% AI-drafted — and which ones need to stay human to preserve client relationships.'
  }
];

export function IndustriesSection() {
  const [activeTab, setActiveTab] = useState('recruitment');

  const activeData = industriesData.find(ind => ind.id === activeTab) || industriesData[0];

  return (
    <section id="industries" className="py-24 sm:py-32 bg-ivory">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimateOnScroll variant="fadeUp" delay={0.1}>
            <p className="text-teal font-semibold text-sm uppercase tracking-widest mb-4">
              Who We Work With
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fadeUp" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-obsidian tracking-tight mb-6">
              Built for Service Businesses With Real Workflow Pain
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fadeUp" delay={0.3}>
            <p className="text-lg text-obsidian/70">
              Every audit is tailored to your industry&apos;s specific tools, workflows, and ROI drivers. Choose yours.
            </p>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll variant="fadeUp" delay={0.4}>
          <div className="flex overflow-x-auto pb-4 mb-8 justify-start lg:justify-center hide-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
            <div className="flex gap-2 min-w-max">
              {industriesData.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setActiveTab(ind.id)}
                  className={`transition-all duration-200 rounded-full px-[24px] py-[10px] text-[14px] font-medium border whitespace-nowrap ${
                    activeTab === ind.id
                      ? 'bg-teal text-white border-teal'
                      : 'bg-transparent text-obsidian/60 border-obsidian/10 hover:border-obsidian/30'
                  }`}
                >
                  {ind.label}
                </button>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.5}>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-3xl border border-obsidian/5 p-6 md:p-10 shadow-sm"
              >
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-12">
                  {/* Left Column */}
                  <div className="w-full lg:w-[60%] flex flex-col gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-obsidian mb-6">Where the time is going</h3>
                      <ul className="space-y-4">
                        {activeData.painPoints.map((pt, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-obsidian/80">
                            <span className="text-xl leading-none shrink-0">{pt.icon}</span>
                            <span className="leading-snug">{pt.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white border-l-4 border-teal rounded-lg p-5 sm:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] mt-4">
                      <h4 className="font-bold text-obsidian mb-3">{activeData.roi.title}</h4>
                      <div className="text-obsidian/70 whitespace-pre-wrap text-sm leading-relaxed">
                        {activeData.roi.content}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="w-full lg:w-[40%] flex flex-col">
                    <h3 className="text-lg font-semibold text-obsidian mb-6">Tools we commonly recommend</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {activeData.tools.map((tool, idx) => (
                        <span key={idx} className="bg-[#F4F4F5] text-[#1A1A2E] rounded-full px-[14px] py-[6px] text-[13px] font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>
                    {activeData.toolsNote && (
                      <p className="text-sm italic text-obsidian/60 mt-auto">
                        {activeData.toolsNote}
                      </p>
                    )}
                  </div>
                </div>

                {/* Bottom Callout */}
                <div className="bg-teal text-white rounded-2xl p-6 sm:p-8 text-lg sm:text-xl font-medium leading-relaxed">
                  {activeData.callout}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
