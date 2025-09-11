import { NavbarSSR } from '@/components/navbar-ssr';
import { HeroSSR } from '@/components/hero-ssr';
import { ComfortConvenienceSSR } from '@/components/comfort-convenience-ssr';
import { IntroSSR } from '@/components/intro-ssr';
import { PricingCardsSSR } from '@/components/pricing-cards-ssr';
import { CommunityFeaturesSSR } from '@/components/community-features-ssr';
import { PropertyGridSSR } from '@/components/property-grid-ssr';
import { ContactPanelSSR } from '@/components/contact-panel-ssr';
import { FooterSSR } from '@/components/footer-ssr';

interface HomePageProps {
  params: {
    locale: string;
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  return (
    <main className="min-h-screen">
      <NavbarSSR locale={locale} />
      <HeroSSR />
      <ComfortConvenienceSSR />
      <IntroSSR />
      <PricingCardsSSR />
      <CommunityFeaturesSSR />
      <PropertyGridSSR />
      <ContactPanelSSR />
      <FooterSSR locale={locale} />
    </main>
  );
}