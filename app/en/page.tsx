import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function EnglishPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Updated Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-24">
            {/* Left Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/en" className="text-sm font-medium text-black">Home</a>
              <a href="/en/about" className="text-sm font-medium text-gray-500 hover:text-gray-600">About</a>
              <a href="/en/properties" className="text-sm font-medium text-gray-500 hover:text-gray-600">Properties</a>
            </div>

            {/* Centered Logo */}
            <a href="/en" className="flex items-center absolute left-1/2 transform -translate-x-1/2">
              <Image
                src="/assets/images/navbar_logo.svg"
                alt="Ellavillages"
                width={78}
                height={78}
                className="w-20 h-20"
              />
            </a>

            {/* Right Navigation */}
            <div className="flex items-center" style={{gap: '30px'}}>
              <a href="/en/contact" className="hidden md:block text-sm font-medium text-gray-500 hover:text-gray-600">Contact</a>
              <Button asChild variant="default" className="bg-black text-white hover:bg-gray-800 rounded-none">
                <a href="/es" className="flex items-center space-x-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                    <path d="M2 12h20"/>
                  </svg>
                  English
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="pt-24 min-h-screen relative bg-white">
        <div className="container mx-auto px-6 h-full">
          <div className="flex flex-col min-h-[calc(100vh-7rem)]">
            {/* Top Content - Text */}
            <div className="pt-8 pb-12">
              <div className="max-w-2xl">
                <div className="space-y-4 mb-6">
                  <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                    Discover{' '}
                    <span className="text-green-500">Easy Living</span>
                  </h1>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-black">
                    With Reasonable Rent
                  </h2>
                </div>
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                  MODERN, COZY CONDOS IN SAFE NEIGHBORHOODS
                </p>
              </div>
            </div>

            {/* Bottom Content - Hero Image */}
            <div className="flex-1 relative">
              <div className="relative overflow-hidden h-full min-h-[400px]">
                <Image
                  src="/assets/images/hero-house.jpg"
                  alt="Modern house with reasonable rent"
                  width={1200}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              
              {/* Navigation Arrow Button */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                  <svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}