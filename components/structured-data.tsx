export default function StructuredDataScript() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Auqira',
    url: 'https://auqira.com',
    logo: 'https://auqira.com/icon.svg',
    description: 'Fixed-price AI Workflow Audits for Real Estate, Marketing, and Recruitment businesses. Delivered in 7 business days with ROI projections, tool recommendations, and a 90-day implementation roadmap.',
    founder: {
      '@type': 'Person',
      name: 'Soham Singh',
      jobTitle: 'Founder & AI Advisory Lead',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@auqira.com',
      contactType: 'sales',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://www.linkedin.com/company/auqira',
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Workflow Audit',
    provider: {
      '@type': 'Organization',
      name: 'Auqira',
    },
    description: 'A comprehensive, fixed-price AI Workflow Audit for service businesses in recruitment, real estate, and marketing. Includes an AI Opportunity Matrix, tool recommendations, conservative ROI projections, and a 90-day implementation roadmap. Delivered in 7 business days.',
    serviceType: 'AI Consulting',
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    offers: {
      '@type': 'Offer',
      name: 'Founding Client Rate',
      price: '1500',
      priceCurrency: 'USD',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/LimitedAvailability',
      description: 'Founding client rate — 3 spots only in exchange for a testimonial. Normally $3,000.',
      url: 'https://calendly.com/auqira',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Audit Deliverables',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full Workflow Audit & Analysis' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '60-Minute Deep-Dive Discovery Call' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Opportunity Matrix' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tool & Integration Recommendations' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Conservative ROI Projections' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '90-Day Implementation Roadmap' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Executive Debrief & Q&A' } },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What industries does Auqira work with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Auqira works with service businesses in recruitment & staffing, real estate, and marketing & creative agencies. Any business with repetitive, document-heavy workflows is a strong candidate for an AI Workflow Audit.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does the AI Workflow Audit take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Exactly 7 business days from the discovery call to final deliverables. The process includes workflow analysis, opportunity scoring, tool recommendations, ROI projections, and an executive debrief call.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the audit the same across all industries?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The methodology is the same. The content is entirely different. Every audit is built from your specific discovery call — your tools, your workflows, your team structure. There is no off-the-shelf report.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if my business data is confidential?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All recommended tools are enterprise-grade and do not use your proprietary data to train public AI models. A core output of the audit is flagging tools in your current stack with weak data governance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the guarantee?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "If the audit doesn't surface at least 5 specific, actionable AI opportunities tailored to your workflows, I'll refund your fee in full. No questions asked.",
        },
      },
      {
        '@type': 'Question',
        name: 'Can I see a sample report?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Email hello@auqira.com with the subject "Sample Report Request" and I\'ll send one across.',
        },
      },
    ],
  };

  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Auqira | AI Workflow Audit — Fixed Price, 7 Days',
    description: 'Find exactly where AI saves your team the most time. A fixed-scope AI Workflow Audit for service businesses — delivered in 7 days with ROI projections, tool recommendations, and a 90-day implementation roadmap.',
    url: 'https://auqira.com',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Auqira',
      url: 'https://auqira.com',
    },
    about: {
      '@type': 'Thing',
      name: 'AI Workflow Automation for Service Businesses',
    },
    mainEntity: {
      '@type': 'Service',
      name: 'AI Workflow Audit',
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.uppercase-label'],
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://auqira.com',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

export { StructuredDataScript as StructuredData };
