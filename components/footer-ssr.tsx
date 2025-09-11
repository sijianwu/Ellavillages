import Link from 'next/link';
import Image from 'next/image';

interface FooterSSRProps {
  locale?: string;
}

export function FooterSSR({ locale = 'en' }: FooterSSRProps) {
  const navItems = [
    { key: 'home', href: '' },
    { key: 'about', href: '/about' },
    { key: 'properties', href: '/properties' },
    { key: 'contact', href: '/contact' },
  ];

  const translations: Record<string, Record<string, string>> = {
    en: {
      home: 'Home',
      about: 'About',
      properties: 'Properties',
      contact: 'Contact',
      language: 'English',
      'footer.description': 'Modern, cozy condos in safe neighborhoods with reasonable rent.',
      'footer.rights': '© 2024 Ellavillages. All rights reserved.',
    },
    es: {
      home: 'Inicio',
      about: 'Acerca de',
      properties: 'Propiedades',
      contact: 'Contacto',
      language: 'Español',
      'footer.description': 'Condominios modernos y acogedores en vecindarios seguros con alquiler razonable.',
      'footer.rights': '© 2024 Ellavillages. Todos los derechos reservados.',
    }
  };

  const t = translations[locale] || translations.en;

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/assets/images/navbar_logo.svg"
                alt="Ellavillages"
                width={40}
                height={40}
                className="w-10 h-10 mr-3"
              />
              <span className="text-xl font-bold">Ellavillages</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {t['footer.description']}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={`/${locale}${item.href}`}
                  className="block text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                >
                  {t[item.key]}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>Houston, TX</p>
              <p>Phone: (346) 268-2140</p>
              <p>Email: info@ellavillages.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{t['footer.rights']}</p>
        </div>
      </div>
    </footer>
  );
}
