'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

interface NavbarClientProps {
  locale?: string;
}

export function NavbarClient({ locale = 'en' }: NavbarClientProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === `/${locale}`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href={`/${locale}`} 
              className={`text-sm font-medium font-poppins relative ${
                isActive(`/${locale}`) 
                  ? 'text-black' 
                  : 'text-gray-500 hover:text-gray-600'
              }`}
            >
              Home
              {isActive(`/${locale}`) && (
                <div className="absolute bottom-[-8px] left-0 w-full h-[1px] bg-black"></div>
              )}
            </Link>
            <Link 
              href={`/${locale}/about`} 
              className={`text-sm font-medium font-poppins relative ${
                isActive(`/${locale}/about`) 
                  ? 'text-black' 
                  : 'text-gray-500 hover:text-gray-600'
              }`}
            >
              About
              {isActive(`/${locale}/about`) && (
                <div className="absolute bottom-[-8px] left-0 w-full h-[1px] bg-black"></div>
              )}
            </Link>
            <Link 
              href={`/${locale}/properties`} 
              className={`text-sm font-medium font-poppins relative ${
                isActive(`/${locale}/properties`) 
                  ? 'text-black' 
                  : 'text-gray-500 hover:text-gray-600'
              }`}
            >
              Properties
              {isActive(`/${locale}/properties`) && (
                <div className="absolute bottom-[-8px] left-0 w-full h-[1px] bg-black"></div>
              )}
            </Link>
          </div>

          {/* Centered Logo */}
          <Link href={`/${locale}`} className="flex items-center absolute left-1/2 transform -translate-x-1/2">
            <Image
              src="/assets/images/navbar_logo.svg"
              alt="Ellavillages"
              width={78}
              height={78}
              className="w-20 h-20"
            />
          </Link>

          {/* Right Navigation */}
          <div className="flex items-center" style={{gap: '30px'}}>
            <Link 
              href={`/${locale}/contact`} 
              className={`hidden md:block text-sm font-medium font-poppins relative ${
                isActive(`/${locale}/contact`) 
                  ? 'text-black' 
                  : 'text-gray-500 hover:text-gray-600'
              }`}
            >
              Contact
              {isActive(`/${locale}/contact`) && (
                <div className="absolute bottom-[-8px] left-0 w-full h-[1px] bg-black"></div>
              )}
            </Link>
            <Button asChild variant="default" className="bg-black text-white hover:bg-gray-800 rounded-none">
              <Link href={locale === 'en' ? '/es' : '/en'} className="flex items-center space-x-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                  <path d="M2 12h20"/>
                </svg>
                <span>{locale === 'en' ? 'Español' : 'English'}</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
