import Image from 'next/image';
import { NavbarClient } from '@/components/navbar-client';
import { ComfortConvenienceAnimated } from '@/components/comfort-convenience-animated';
import { CommunityFeaturesAnimated } from '@/components/community-features-animated';
import { PropertyGrid } from '@/components/property-grid';
import { ContactPanelSSR } from '@/components/contact-panel-ssr';
import { FooterSSR } from '@/components/footer-ssr';
import { PageTransition } from '@/components/page-transition';
import { PrefetchLinks } from '@/components/prefetch-links';
import { SmartCache } from '@/components/smart-cache';
import { ProgressiveImage } from '@/components/progressive-image';
import { generatePlaceholder } from '@/lib/image-placeholders';

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
      <PrefetchLinks locale={locale} />
      <SmartCache locale={locale} />
      <PageTransition>
      
      {/* Hero Section - Enhanced from app/en/page.tsx */}
      <section className="pt-24 bg-white pb-8 md:pb-12">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="flex flex-col min-h-[80vh] sm:min-h-[85vh] md:min-h-[calc(100vh-7rem)] md:max-h-[900px]">
            {/* Top Content - Text */}
            <div className="pt-8 pb-12">
              <div className="max-w-4xl">
                <div className="mb-6">
                  <Image
                    src={`/assets/images/hero-title${locale === 'es' ? '-es' : ''}.svg`}
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
              <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-full md:min-h-[400px] lg:min-h-[500px] xl:min-h-[600px]">
                {/* Left - House Exterior (spans 2 rows) */}
                <div className="relative overflow-hidden aspect-square md:row-span-2 md:aspect-auto md:h-full">
                  <ProgressiveImage
                    src="/assets/images/house-exterior.jpg"
                    alt="Modern house exterior"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    placeholder={generatePlaceholder('house-exterior', 600, 600)}
                    priority
                  />
                </div>
                
                {/* Center Top - Kitchen Interior */}
                <div className="relative overflow-hidden aspect-[600/290] md:aspect-auto md:h-full">
                  <ProgressiveImage
                    src="/assets/images/kitchen-interior.jpg"
                    alt="Modern kitchen interior"
                    width={600}
                    height={290}
                    className="w-full h-full object-cover"
                    placeholder={generatePlaceholder('kitchen-interior', 600, 290)}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                {/* Right - Living Room (spans 2 rows) */}
                <div className="relative overflow-hidden aspect-square md:row-span-2 md:aspect-auto md:h-full">
                  <ProgressiveImage
                    src="/assets/images/living-room.jpg"
                    alt="Cozy living room"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    placeholder={generatePlaceholder('living-room', 600, 600)}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                {/* Center Bottom - House Night View */}
                <div className="relative overflow-hidden aspect-[600/290] md:aspect-auto md:h-full">
                  <ProgressiveImage
                    src="/assets/images/house-night.jpg"
                    alt="Modern house at night"
                    width={600}
                    height={290}
                    className="w-full h-full object-cover"
                    placeholder={generatePlaceholder('house-night', 600, 290)}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
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
      </PageTransition>
    </main>
  );
}