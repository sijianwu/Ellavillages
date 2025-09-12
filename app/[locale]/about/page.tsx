import { NavbarClient } from '@/components/navbar-client';
import { FooterSSR } from '@/components/footer-ssr';

interface AboutPageProps {
  params: {
    locale: string;
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  return (
    <main className="min-h-screen">
      <NavbarClient locale={locale} />
      
      <section className="pt-40 pb-40 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left Content Area */}
            <div className="lg:col-span-2 space-y-6">
              <h1 className="text-[38px] font-serif font-normal text-black leading-[42px] mb-4">
                Ellavillages
              </h1>
              <p className="text-gray-600 leading-relaxed text-sm max-w-xs">
                Across the rental world, discover new and noteworthy experiences 
                that provide an authentic connection to the soul of a place.
              </p>
            </div>

            {/* Right Cards Area */}
            <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/5] mb-4 overflow-hidden">
                  <img 
                    src="/assets/images/unit-a.jpg" 
                    alt="Modern Living"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">MODERN WITH STYLE</p>
                  <h3 className="font-medium text-gray-900 text-sm">
                    A Touch of Modern Happiness
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Look ahead to the festive seasons at Ella destinations, 
                    a three-course preparation for joy-filled celebrations.
                  </p>
                  <button className="text-xs text-gray-900 hover:underline">
                    Discover more
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/5] mb-4 overflow-hidden">
                  <img 
                    src="/assets/images/unit-e.jpg" 
                    alt="Professional Living"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">CURATED BY ROYAL DIALOGUE</p>
                  <h3 className="font-medium text-gray-900 text-sm">
                    Professional Living Programme
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Offered exclusively at seven Ella destinations, 
                    embark on a three-day Personalization Programme by Royal Deluxe.
                  </p>
                  <button className="text-xs text-gray-900 hover:underline">
                    Discover more
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/5] mb-4 overflow-hidden">
                  <img 
                    src="/assets/images/unit-c.jpg" 
                    alt="Safe Environment"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">SAFE ESCAPE</p>
                  <h3 className="font-medium text-gray-900 text-sm">
                    Safe & Secure Living
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    In partnership with local security, 
                    enjoy a secure haven designed for worry-free living.
                  </p>
                  <button className="text-xs text-gray-900 hover:underline">
                    Discover more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <FooterSSR locale={locale} />
    </main>
  );
}