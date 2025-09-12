import { NavbarClient } from '@/components/navbar-client';
import { PropertyGridSSR } from '@/components/property-grid-ssr';
import { FooterSSR } from '@/components/footer-ssr';

interface PropertiesPageProps {
  params: {
    locale: string;
  };
}

export default async function PropertiesPage({ params }: PropertiesPageProps) {
  const { locale } = await params;
  return (
    <main className="min-h-screen">
      <NavbarClient locale={locale} />
      
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-[38px] font-serif font-normal text-black leading-[42px] mb-6">
              Our Properties
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our collection of modern, cozy condos designed for comfortable living 
              at reasonable prices.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="text-2xl font-semibold text-blue-900 mb-2">$1,600 Units</h3>
                <p className="text-blue-700 mb-4">Units A, B, C, D</p>
                <ul className="text-blue-600 text-sm space-y-1">
                  <li>• 2 Bedrooms, 1 Bathroom</li>
                  <li>• Modern kitchen appliances</li>
                  <li>• In-unit washer/dryer</li>
                  <li>• Central air conditioning</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-2xl">
                <h3 className="text-2xl font-semibold text-purple-900 mb-2">$1,800 Units</h3>
                <p className="text-purple-700 mb-4">Units E, F</p>
                <ul className="text-purple-600 text-sm space-y-1">
                  <li>• 2 Bedrooms, 2 Bathrooms</li>
                  <li>• Premium finishes</li>
                  <li>• Larger living space</li>
                  <li>• Private balcony</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
            <PropertyGridSSR />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Schedule a Visit?
            </h2>
            <p className="text-gray-600 mb-8">
              Contact us today to schedule a viewing of any available unit. 
              We&apos;ll be happy to show you around and answer any questions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13462682140"
                className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Call Now: +1 346 268 2140
              </a>
              <a 
                href="mailto:ellavillages@gmail.com"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <FooterSSR locale={locale} />
    </main>
  );
}