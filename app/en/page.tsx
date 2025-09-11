
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ComfortConvenienceAnimated } from '@/components/comfort-convenience-animated';

// Using system fonts instead of Google Fonts

export default function EnglishPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
      {/* Updated Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-24">
            {/* Left Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/en" className="text-sm font-medium text-black font-poppins relative">
                Home
                <div className="absolute bottom-[-8px] left-0 w-full h-[1px] bg-black"></div>
              </Link>
              <Link href="/en/about" className="text-sm font-medium text-gray-500 hover:text-gray-600 font-poppins">About</Link>
              <Link href="/en/properties" className="text-sm font-medium text-gray-500 hover:text-gray-600 font-poppins">Properties</Link>
            </div>

            {/* Centered Logo */}
            <Link href="/en" className="flex items-center absolute left-1/2 transform -translate-x-1/2">
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
              <Link href="/en/contact" className="hidden md:block text-sm font-medium text-gray-500 hover:text-gray-600 font-poppins">Contact</Link>
              <Button asChild variant="default" className="bg-black text-white hover:bg-gray-800 rounded-none">
                <Link href="/es" className="flex items-center space-x-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                    <path d="M2 12h20"/>
                  </svg>
                  English
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="pt-24 min-h-screen relative bg-white">
        <div className="w-full px-4 md:px-8 lg:px-12 h-full">
          <div className="flex flex-col min-h-[calc(100vh-7rem)]">
            {/* Top Content - Text */}
            <div className="pt-8 pb-12">
              <div className="max-w-4xl">
                <div className="mb-6">
                  <Image
                    src="/assets/images/hero-title.svg"
                    alt="Discover Easy Living With Reasonable Rent"
                    width={600}
                    height={200}
                    className="w-full h-auto max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[600px]"
                    priority
                  />
                </div>
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wide font-poppins">
                  Modern, cozy condos in safe neighborhoods.
                </p>
              </div>
            </div>

            {/* Bottom Content - Hero Images Grid */}
            <div className="flex-1 relative">
              <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-full min-h-[400px]">
                {/* Left - House Exterior (spans 2 rows) */}
                <div className="relative overflow-hidden  md:row-span-2">
                  <Image
                    src="/assets/images/house-exterior.jpg"
                    alt="Modern house exterior"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                
                {/* Center Top - Kitchen Interior */}
                <div className="relative overflow-hidden ">
                  <Image
                    src="/assets/images/kitchen-interior.jpg"
                    alt="Modern kitchen interior"
                    width={600}
                    height={290}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Right - Living Room (spans 2 rows) */}
                <div className="relative overflow-hidden  md:row-span-2">
                  <Image
                    src="/assets/images/living-room.jpg"
                    alt="Cozy living room"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Center Bottom - House Night View */}
                <div className="relative overflow-hidden ">
                  <Image
                    src="/assets/images/house-night.jpg"
                    alt="Modern house at night"
                    width={600}
                    height={290}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
        {/* Where Comfort Meets Convenience Section */}
        <ComfortConvenienceAnimated />
      </div>
    </>
  );
}