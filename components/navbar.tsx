'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu, ChevronDown, Globe } from 'lucide-react';

export function Navbar() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll behavior for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get current path without locale
  const currentPath = pathname.replace(`/${locale}`, '') || '/';

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/about' },
    { key: 'properties', href: '/properties' },
    { key: 'contact', href: '/contact' },
  ];

  const switchLanguage = (newLocale: string) => {
    const newPath = `/${newLocale}${currentPath}`;
    router.push(newPath);
  };

  const isActiveRoute = (href: string) => {
    return currentPath === href;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href={`/${locale}`}
            className="flex items-center space-x-2"
            aria-label="Ellavillages Home"
          >
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <span className="font-semibold text-lg text-gray-900">
              Ellavillages
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={`/${locale}${item.href}`}
                className={`text-sm font-medium transition-colors hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-sm px-2 py-1 ${
                  isActiveRoute(item.href)
                    ? 'text-gray-900 border-b-2 border-gray-900'
                    : 'text-gray-700'
                }`}
                aria-label={t(item.key as any)}
              >
                {t(item.key as any)}
              </Link>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center space-x-1"
                  aria-label="Switch language"
                >
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    {locale === 'en' ? 'EN' : 'ES'}
                  </span>
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem 
                  onClick={() => switchLanguage('en')}
                  className={locale === 'en' ? 'bg-gray-100' : ''}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => switchLanguage('es')}
                  className={locale === 'es' ? 'bg-gray-100' : ''}
                >
                  Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  aria-label="Open mobile menu"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.key}
                      href={`/${locale}${item.href}`}
                      className={`text-lg font-medium transition-colors hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-sm px-2 py-2 ${
                        isActiveRoute(item.href)
                          ? 'text-gray-900 bg-gray-100'
                          : 'text-gray-700'
                      }`}
                      onClick={() => setIsOpen(false)}
                      aria-label={t(item.key as any)}
                    >
                      {t(item.key as any)}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}