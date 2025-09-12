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
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-[38px] font-serif font-normal text-black leading-[42px] mb-6">
                About Ellavillages
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We&apos;re dedicated to providing modern, comfortable, and affordable living spaces 
                in safe neighborhoods across Houston.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  At Ellavillages, we believe everyone deserves a cozy home at a reasonable price. 
                  Our carefully curated properties offer modern amenities, thoughtful design, 
                  and the convenience you need for comfortable living.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Whether you&apos;re a young professional, a couple starting out, or someone looking 
                  for a fresh start, our communities are designed to feel like home from day one.
                </p>
              </div>
              
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-4xl">🏡</span>
                  </div>
                  <span className="text-sm">Our Community</span>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety First</h3>
                <p className="text-gray-600 text-sm">
                  All our properties are located in safe, well-maintained neighborhoods with good lighting and security.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fair Pricing</h3>
                <p className="text-gray-600 text-sm">
                  Transparent, reasonable rent with no hidden fees. What you see is what you pay.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Support</h3>
                <p className="text-gray-600 text-sm">
                  Responsive management and maintenance team to ensure your comfort and satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <FooterSSR locale={locale} />
    </main>
  );
}