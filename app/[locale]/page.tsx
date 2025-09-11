import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Intro } from '@/components/intro';
import { PricingCards } from '@/components/pricing-cards';
import { CommunityFeatures } from '@/components/community-features';
import { PropertyGrid } from '@/components/property-grid';
import { ContactPanel } from '@/components/contact-panel';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Intro />
      <PricingCards />
      <CommunityFeatures />
      <PropertyGrid />
      <ContactPanel />
      <Footer />
    </main>
  );
}