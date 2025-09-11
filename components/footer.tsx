'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export function Footer() {
  const t = useTranslations('navigation');
  const locale = useLocale();

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/about' },
    { key: 'properties', href: '/properties' },
    { key: 'contact', href: '/contact' },
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link 
                href={`/${locale}`}
                className="flex items-center space-x-2 mb-6"
                aria-label="Ellavillages Home"
              >
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                  <span className="text-black font-bold text-lg">E</span>
                </div>
                <span className="font-semibold text-xl">
                  Ellavillages
                </span>
              </Link>
              
              <p className="text-gray-400 max-w-md mb-6">
                Modern, cozy condos in safe neighborhoods with reasonable rent. 
                Your perfect home awaits.
              </p>
              
              <div className="text-sm text-gray-500">
                <p>5420 Eglinton St, Houston, TX 77026</p>
                <p>Phone: +1 346 268 2140</p>
                <p>Email: ellavillages@gmail.com</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
              <nav className="space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    href={`/${locale}${item.href}`}
                    className="block text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                    aria-label={t(item.key as any)}
                  >
                    {t(item.key as any)}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Get in Touch</h3>
              <div className="space-y-3 text-gray-400">
                <a 
                  href="tel:+13462682140"
                  className="block hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                  aria-label="Call us"
                >
                  +1 346 268 2140
                </a>
                <a 
                  href="mailto:ellavillages@gmail.com"
                  className="block hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                  aria-label="Email us"
                >
                  ellavillages@gmail.com
                </a>
                <a 
                  href="https://maps.google.com/?q=5420+Eglinton+St,+Houston,+TX+77026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                  aria-label="View location on map"
                >
                  View on Map
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-500 text-sm">
                © 2024 Ellavillages. All rights reserved.
              </p>
              
              <div className="flex space-x-6 text-sm text-gray-500">
                <Link 
                  href={`/${locale}/privacy`}
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                  aria-label="Privacy Policy"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href={`/${locale}/terms`}
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                  aria-label="Terms of Service"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}