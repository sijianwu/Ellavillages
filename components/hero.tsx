'use client';

import { useTranslations } from 'next-intl';
// import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

export function Hero() {
  const t = useTranslations('hero');

  // Mock data for property images - replace with real images
  const propertyImages = [
    {
      id: 1,
      src: '/assets/images/property1.jpg',
      alt: 'Modern white house exterior',
      className: 'col-span-2 row-span-2'
    },
    {
      id: 2,
      src: '/assets/images/property2.jpg',
      alt: 'Contemporary house with lighting',
      className: 'col-span-2 row-span-1'
    },
    {
      id: 3,
      src: '/assets/images/property3.jpg',
      alt: 'Modern dining room interior',
      className: 'col-span-1 row-span-1'
    },
    {
      id: 4,
      src: '/assets/images/property4.jpg',
      alt: 'Cozy living room with gray sofa',
      className: 'col-span-1 row-span-1'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('title')}{' '}
                <span className="text-green-600 italic font-script text-5xl lg:text-7xl">
                  Cozy Living
                </span>
                <br />
                {t('subtitle')}
              </h1>
              
              <p className="text-lg text-gray-600 max-w-md">
                {t('description')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full transition-colors focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                aria-label="Schedule a viewing"
              >
                Schedule a Viewing
              </Button>
              
              <Button
                variant="ghost"
                size="lg"
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 px-8 py-3 rounded-full transition-colors focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                aria-label="Watch video tour"
              >
                <Play className="w-5 h-5" />
                <span>Watch Tour</span>
              </Button>
            </div>
          </div>

          {/* Right Content - Property Grid */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-4 h-[600px]">
              {propertyImages.map((image) => (
                <div
                  key={image.id}
                  className={`relative overflow-hidden ${image.className}`}
                >
                  {/* Placeholder for missing images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="w-12 h-12 mx-auto mb-2 bg-gray-300 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🏠</span>
                      </div>
                      <span className="text-xs">Property Image</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Play Button */}
            <div className="absolute bottom-8 right-8">
              <Button
                size="icon"
                className="w-16 h-16 rounded-full bg-white shadow-lg hover:shadow-xl text-gray-900 hover:bg-gray-50 transition-all duration-300 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                aria-label="Play property tour video"
              >
                <Play className="w-6 h-6 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
