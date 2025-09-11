import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface NavbarSSRProps {
  locale?: string;
}

export function NavbarSSR({ locale = 'en' }: NavbarSSRProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href={`/${locale}`} className="text-sm font-medium text-black font-poppins relative">
              Home
              <div className="absolute bottom-[-8px] left-0 w-full h-[1px] bg-black"></div>
            </Link>
            <Link href={`/${locale}/about`} className="text-sm font-medium text-gray-500 hover:text-gray-600 font-poppins">About</Link>
            <Link href={`/${locale}/properties`} className="text-sm font-medium text-gray-500 hover:text-gray-600 font-poppins">Properties</Link>
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
            <Link href={`/${locale}/contact`} className="hidden md:block text-sm font-medium text-gray-500 hover:text-gray-600 font-poppins">Contact</Link>
            <Button asChild variant="default" className="bg-black text-white hover:bg-gray-800 rounded-none">
              <Link href={locale === 'en' ? '/es' : '/en'} className="flex items-center space-x-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                  <path d="M2 12h20"/>
                </svg>
                <span>{locale === 'en' ? 'English' : 'Español'}</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
