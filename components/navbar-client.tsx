'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

interface NavbarClientProps {
  locale?: string;
}

export function NavbarClient({ locale = 'en' }: NavbarClientProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Get current path without locale
  const currentPath = pathname.replace(`/${locale}`, '') || '/';

  // Translations for navigation items
  const translations = {
    en: {
      home: 'Home',
      about: 'About',
      properties: 'Properties',
      contact: 'Contact',
      switchToSpanish: 'Español',
      switchToEnglish: 'English',
      mobileSwitch: 'Switch to English'
    },
    es: {
      home: 'Inicio',
      about: 'Acerca de',
      properties: 'Propiedades',
      contact: 'Contacto',
      switchToSpanish: 'Español',
      switchToEnglish: 'English',
      mobileSwitch: 'Cambiar a Inglés'
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.en;

  const isActive = (path: string) => {
    if (path === `/${locale}`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname.startsWith(path);
  };

  const navigationItems = [
    { href: `/${locale}`, label: t.home, path: `/${locale}` },
    { href: `/${locale}/about`, label: t.about, path: `/${locale}/about` },
    { href: `/${locale}/properties`, label: t.properties, path: `/${locale}/properties` },
    { href: `/${locale}/contact`, label: t.contact, path: `/${locale}/contact` },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-24">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Left Navigation - Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href={`/${locale}`} 
                className={`text-sm font-medium font-poppins relative transition-all duration-200 ease-out group ${
                  isActive(`/${locale}`) 
                    ? 'text-black' 
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {t.home}
                <div className={`absolute bottom-[-8px] left-0 h-[1px] bg-black transition-all duration-200 ease-out ${
                  isActive(`/${locale}`) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
              </Link>
              <Link 
                href={`/${locale}/about`} 
                className={`text-sm font-medium font-poppins relative transition-all duration-200 ease-out group ${
                  isActive(`/${locale}/about`) 
                    ? 'text-black' 
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {t.about}
                <div className={`absolute bottom-[-8px] left-0 h-[1px] bg-black transition-all duration-200 ease-out ${
                  isActive(`/${locale}/about`) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
              </Link>
              <Link 
                href={`/${locale}/properties`} 
                className={`text-sm font-medium font-poppins relative transition-all duration-200 ease-out group ${
                  isActive(`/${locale}/properties`) 
                    ? 'text-black' 
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {t.properties}
                <div className={`absolute bottom-[-8px] left-0 h-[1px] bg-black transition-all duration-200 ease-out ${
                  isActive(`/${locale}/properties`) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
              </Link>
            </div>

            {/* Centered Logo */}
            <Link 
              href={`/${locale}`} 
              className="flex items-center absolute left-1/2 transform -translate-x-1/2"
              onClick={closeMobileMenu}
            >
              <Image
                src="/assets/images/navbar_logo.svg"
                alt="Ellavillages"
                width={78}
                height={78}
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </Link>

            {/* Right Navigation - Desktop */}
            <div className="flex items-center space-x-6">
              <Link 
                href={`/${locale}/contact`} 
                className={`hidden md:block text-sm font-medium font-poppins relative transition-all duration-200 ease-out group ${
                  isActive(`/${locale}/contact`) 
                    ? 'text-black' 
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {t.contact}
                <div className={`absolute bottom-[-8px] left-0 h-[1px] bg-black transition-all duration-200 ease-out ${
                  isActive(`/${locale}/contact`) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
              </Link>
              <Button asChild variant="default" className="bg-black text-white hover:bg-gray-800 rounded-none text-xs md:text-sm px-3 md:px-4 py-2 transition-all duration-200 ease-out hover:scale-105">
                <Link href={locale === 'en' ? `/es${currentPath}` : `/en${currentPath}`} className="flex items-center space-x-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-4 md:h-4">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                    <path d="M2 12h20"/>
                  </svg>
                  <span className="hidden sm:inline">{locale === 'en' ? t.switchToSpanish : t.switchToEnglish}</span>
                  <span className="sm:hidden">{locale === 'en' ? 'ES' : 'EN'}</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeMobileMenu}></div>
          <div className="fixed top-0 left-0 w-80 h-full bg-white shadow-lg transform transition-all duration-300 ease-out">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4">
                <Image
                  src="/assets/images/navbar_logo.svg"
                  alt="Ellavillages"
                  width={60}
                  height={60}
                  className="w-12 h-12"
                />
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-gray-600 hover:text-gray-900"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex-1 px-4 py-6 space-y-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`block text-lg font-medium font-poppins py-2 transition-all duration-200 ease-out ${
                      isActive(item.path)
                        ? 'text-black border-b border-black'
                        : 'text-gray-600 hover:text-black hover:translate-x-2'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
