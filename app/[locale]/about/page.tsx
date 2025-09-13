import { NavbarClient } from '@/components/navbar-client';
import { FooterSSR } from '@/components/footer-ssr';
import { ProgressiveImage } from '@/components/progressive-image';
import { generatePlaceholder } from '@/lib/image-placeholders';

interface AboutPageProps {
  params: {
    locale: string;
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  
  // Simple translations to avoid next-intl complexity
  const translations = {
    en: {
      title: 'Ellavillages',
      description: "Whether you're looking for a peaceful space to unwind or a stylish spot to call home, our condo units offer everything you need in a compact, charming setting.",
      card1: {
        category: 'MODERN WITH STYLE',
        title: 'A Touch of Modern Happiness',
        description: 'Look ahead to the festive seasons at Ella destinations, a three-course preparation for joy-filled celebrations.',
        button: 'Discover more'
      },
      card2: {
        category: 'CURATED BY ROYAL DIALOGUE',
        title: 'Professional Living Programme',
        description: 'Offered exclusively at seven Ella destinations, embark on a three-day Personalization Programme by Royal Deluxe.',
        button: 'Discover more'
      },
      card3: {
        category: 'SAFE ESCAPE',
        title: 'Safe & Secure Living',
        description: 'In partnership with local security, enjoy a secure haven designed for worry-free living.',
        button: 'Discover more'
      }
    },
    es: {
      title: 'Ellavillages',
      description: 'Ya sea que busques un espacio tranquilo para relajarte o un lugar elegante para llamar hogar, nuestras unidades de condominio ofrecen todo lo que necesitas en un entorno compacto y encantador.',
      card1: {
        category: 'MODERNO CON ESTILO',
        title: 'Un Toque de Felicidad Moderna',
        description: 'Mira hacia adelante a las temporadas festivas en los destinos de Ella, una preparación de tres cursos para celebraciones llenas de alegría.',
        button: 'Descubre más'
      },
      card2: {
        category: 'CURADO POR DIÁLOGO REAL',
        title: 'Programa de Vida Profesional',
        description: 'Ofrecido exclusivamente en siete destinos de Ella, embárcate en un Programa de Personalización de tres días por Royal Deluxe.',
        button: 'Descubre más'
      },
      card3: {
        category: 'ESCAPE SEGURO',
        title: 'Vida Segura y Protegida',
        description: 'En asociación con la seguridad local, disfruta de un refugio seguro diseñado para una vida sin preocupaciones.',
        button: 'Descubre más'
      }
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.en;
  
  return (
    <main className="min-h-screen">
      <NavbarClient locale={locale} />
      
      <section className="pt-40 pb-40 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left Content Area */}
            <div className="lg:col-span-2 space-y-6">
              <h1 className="text-[38px] font-serif font-normal text-black leading-[42px] mb-4">
                {t.title}
              </h1>
              <p className="text-gray-600 leading-relaxed text-sm max-w-xs">
                {t.description}
              </p>
            </div>

            {/* Right Cards Area */}
            <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/5] mb-4 overflow-hidden">
                  <ProgressiveImage 
                    src="/assets/images/unit-about01.jpg" 
                    alt="Modern Living"
                    width={400}
                    height={500}
                    className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                    placeholder={generatePlaceholder('unit-about01', 400, 500)}
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{t.card1.category}</p>
                  <h3 className="font-medium text-gray-900 text-sm">
                    {t.card1.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {t.card1.description}
                  </p>
                  <button className="text-xs text-gray-900 hover:underline">
                    {t.card1.button}
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/5] mb-4 overflow-hidden">
                  <ProgressiveImage 
                    src="/assets/images/unit-about02.jpg" 
                    alt="Professional Living"
                    width={400}
                    height={500}
                    className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                    placeholder={generatePlaceholder('unit-about02', 400, 500)}
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{t.card2.category}</p>
                  <h3 className="font-medium text-gray-900 text-sm">
                    {t.card2.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {t.card2.description}
                  </p>
                  <button className="text-xs text-gray-900 hover:underline">
                    {t.card2.button}
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/5] mb-4 overflow-hidden">
                  <ProgressiveImage 
                    src="/assets/images/unit-about03.jpg" 
                    alt="Safe Environment"
                    width={400}
                    height={500}
                    className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                    placeholder={generatePlaceholder('unit-about03', 400, 500)}
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{t.card3.category}</p>
                  <h3 className="font-medium text-gray-900 text-sm">
                    {t.card3.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {t.card3.description}
                  </p>
                  <button className="text-xs text-gray-900 hover:underline">
                    {t.card3.button}
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