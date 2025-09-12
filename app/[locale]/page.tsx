import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NavbarClient } from '@/components/navbar-client';
import { ComfortConvenienceAnimated } from '@/components/comfort-convenience-animated';
import { CommunityFeaturesAnimated } from '@/components/community-features-animated';
import { PropertyGrid } from '@/components/property-grid';
import { ContactPanelSSR } from '@/components/contact-panel-ssr';
import { FooterSSR } from '@/components/footer-ssr';

interface HomePageProps {
  params: {
    locale: string;
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  // Hero section translations
  const heroTranslations = {
    en: {
      description: "Modern, cozy condos in safe neighborhoods."
    },
    es: {
      description: "Condominios modernos y acogedores en vecindarios seguros."
    }
  };

  const t = heroTranslations[locale as keyof typeof heroTranslations] || heroTranslations.en;

  return (
    <main className="min-h-screen">
      <NavbarClient locale={locale} />
      
      {/* Hero Section - Enhanced from app/en/page.tsx */}
      <div className="pt-24 min-h-screen relative bg-white">
        <div className="w-full px-4 md:px-8 lg:px-12 h-full">
          <div className="flex flex-col min-h-[calc(100vh-7rem)]">
            {/* Top Content - Text */}
            <div className="pt-8 pb-12">
              <div className="max-w-4xl">
                <div className="mb-6">
                  <Image
                    src="/assets/images/hero-title.svg"
                    alt="Discover Easy Living With Reasonable Rent"
                    width={600}
                    height={200}
                    className="w-full h-auto max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[600px]"
                    priority
                  />
                </div>
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wide font-poppins">
                  {t.description}
                </p>
              </div>
            </div>

            {/* Bottom Content - Hero Images Grid */}
            <div className="flex-1 relative">
              <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-full min-h-[400px]">
                {/* Left - House Exterior (spans 2 rows) */}
                <div className="relative overflow-hidden  md:row-span-2">
                  <Image
                    src="/assets/images/house-exterior.jpg"
                    alt="Modern house exterior"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                
                {/* Center Top - Kitchen Interior */}
                <div className="relative overflow-hidden ">
                  <Image
                    src="/assets/images/kitchen-interior.jpg"
                    alt="Modern kitchen interior"
                    width={600}
                    height={290}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Right - Living Room (spans 2 rows) */}
                <div className="relative overflow-hidden  md:row-span-2">
                  <Image
                    src="/assets/images/living-room.jpg"
                    alt="Cozy living room"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Center Bottom - House Night View */}
                <div className="relative overflow-hidden ">
                  <Image
                    src="/assets/images/house-night.jpg"
                    alt="Modern house at night"
                    width={600}
                    height={290}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Where Comfort Meets Convenience Section */}
      <ComfortConvenienceAnimated locale={locale} />
      
      {/* Community Features Section */}
      <CommunityFeaturesAnimated locale={locale} />
      
      {/* Properties Section */}
      <PropertyGrid locale={locale} />
      
      {/* Contact Section */}
      <ContactPanelSSR locale={locale} />
      
      {/* Footer */}
      <FooterSSR locale={locale} />
    </main>
  );
}