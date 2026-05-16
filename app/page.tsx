import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { StatsTicker } from '@/components/stats-ticker';
import { ATSLogoWall } from '@/components/ats-logo-wall';
import { ProblemSection } from '@/components/problem-section';
import { BentoGrid } from '@/components/bento-grid';
import { DataWall } from '@/components/data-wall';
import { ROICalculator } from '@/components/roi-calculator';
import { ComparisonTable } from '@/components/comparison-table';
import { IsThisForYou } from '@/components/is-this-for-you';
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
      <Navigation />

      <article>
        {/* DARK ZONE: Hero → Ticker → ATS Wall */}
        <HeroSection />
        <StatsTicker />
        <ATSLogoWall />

        {/* IVORY ZONE: Content sections */}
        <ProblemSection />
        <BentoGrid />
        <DataWall />
        <ROICalculator />
        <ComparisonTable />
        <IsThisForYou />
        <PricingSection />
        <AboutSection />
        <FAQSection />

        {/* DARK ZONE: Closing CTA */}
        <CTASection />
      </article>

      <Footer />
      <FloatingCTA />
      <ExitIntentModal />
    </main>
  );
}
