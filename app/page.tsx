import { AnnouncementBar } from '@/components/announcement-bar';
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { SocialProof } from '@/components/social-proof';
import { ProblemSection } from '@/components/problem-section';
import { DeliverablesSection } from '@/components/deliverables-section';
import { OpportunityMatrix } from '@/components/opportunity-matrix';
import { ROISection } from '@/components/roi-section';
import { IsThisForYou } from '@/components/is-this-for-you';
import { ROICalculator } from '@/components/roi-calculator';
import { ComparisonTable } from '@/components/comparison-table';
import { PricingSection } from '@/components/pricing-section';
import { AboutSection } from '@/components/about-section';
import { FAQSection } from '@/components/faq-section';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';
import { FloatingCTA } from '@/components/floating-cta';
import { ExitIntentModal } from '@/components/exit-intent-modal';

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory overflow-x-hidden" role="main">
      <AnnouncementBar />
      <Navigation />

      <article>
        <HeroSection />
        <SocialProof />
        <ProblemSection />
        <DeliverablesSection />
        <OpportunityMatrix />
        <ROISection />
        <IsThisForYou />
        <ROICalculator />
        <ComparisonTable />
        <PricingSection />
        <AboutSection />
        <FAQSection />
        <CTASection />
      </article>

      <Footer />
      <FloatingCTA />
      <ExitIntentModal />
    </main>
  );
}
