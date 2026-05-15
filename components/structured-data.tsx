export default function StructuredDataScript() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Auqira',
    url: 'https://auqira.com',
    logo: 'https://auqira.com/icon.svg',
    description: 'Executive AI advisory for recruitment agencies. Fixed-price AI workflow audits delivered in 7 business days.',
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
    description: 'A comprehensive, fixed-price AI Workflow Audit designed specifically for recruitment agencies. Includes AI Opportunity Matrix, tool recommendations, ROI projections, and a 90-day implementation roadmap.',
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
      description: '50% off founding client rate. Limited to 3 agencies. Normally $3,000.',
      url: 'https://calendly.com/auqira',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Audit Deliverables',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full Workflow Audit & Analysis' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '30-Minute Discovery Call' } },
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
        name: 'Do you implement the tools?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, we deliver the audit and roadmap. Implementation is your responsibility, but our 90-day roadmap makes it straightforward. We can recommend implementation partners if needed.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does the audit take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Exactly 7 business days from kickoff to final deliverables. The process includes a discovery call, workflow analysis, matrix creation, and executive debrief.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this suitable for boutique agencies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, absolutely. We specialize in firms with 10–50 employees. Our recommendations scale based on your team size and complexity.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is sensitive data handled?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All data is treated with strict confidentiality. We sign NDAs and use secure, GDPR-compliant processes. Details are never shared or retained longer than necessary.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if I\'m not satisfied?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We stand behind our work. If the audit doesn\'t meet your expectations, we offer a full revision at no extra cost.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I see a sample report?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Schedule a discovery call and we\'ll walk you through an anonymized case study showing the format and depth of our deliverables.',
        },
      },
    ],
  };

  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Auqira | AI Workflow Audit for Recruitment Agencies',
    description: 'Discover exactly where AI can save your recruitment agency 10–20 hours per recruiter weekly.',
    url: 'https://auqira.com',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Auqira',
      url: 'https://auqira.com',
    },
    about: {
      '@type': 'Thing',
      name: 'AI Workflow Automation for Recruitment',
    },
    mainEntity: {
      '@type': 'Service',
      name: 'AI Workflow Audit',
    },
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
    </>
  );
}

export { StructuredDataScript as StructuredData };
