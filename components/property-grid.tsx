'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ProgressiveImage } from '@/components/progressive-image';
import { generatePlaceholder } from '@/lib/image-placeholders';

interface PropertyGridProps {
  locale?: string;
}

export function PropertyGrid({ locale = 'en' }: PropertyGridProps) {
  const [selectedAddress, setSelectedAddress] = useState('5420 Elysian St');
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Translations
  const translations = {
    en: {
      title: "Properties",
      available: "Available",
      scheduleVisit: "Schedule Visit",
      month: "Month",
      monthAbbr: "M"
    },
    es: {
      title: "Propiedades",
      available: "Disponible",
      scheduleVisit: "Programar Visita",
      month: "Mes",
      monthAbbr: "M"
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.en;

  const addresses = ['5420 Elysian St', '6688 Elysian St', '9966 Elysian St'];

  const updateUnderlinePosition = (selectedIndex: number) => {
    const selectedButton = buttonRefs.current[selectedIndex];
    if (selectedButton) {
      const { offsetLeft, offsetWidth } = selectedButton;
      setUnderlineStyle({
        width: offsetWidth,
        left: offsetLeft
      });
    }
  };

  useEffect(() => {
    const selectedIndex = addresses.indexOf(selectedAddress);
    if (selectedIndex !== -1) {
      updateUnderlinePosition(selectedIndex);
    }
  }, [selectedAddress]);

  useEffect(() => {
    const handleResize = () => {
      const selectedIndex = addresses.indexOf(selectedAddress);
      if (selectedIndex !== -1) {
        updateUnderlinePosition(selectedIndex);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [selectedAddress]);

  const handleAddressClick = (address: string) => {
    setSelectedAddress(address);
  };

  // Mock property data
  const properties = [
    { 
      id: 'unitA', 
      price: '$1600',
      name: 'Unit A',
      bedrooms: 2,
      bathrooms: 2,
      status: t.available,
      image: '/assets/images/unit-a.jpg'
    },
    { 
      id: 'unitB', 
      price: '$1600',
      name: 'Unit B', 
      bedrooms: 2,
      bathrooms: 2,
      status: t.available,
      image: '/assets/images/unit-b.jpg'
    },
    { 
      id: 'unitC', 
      price: '$1600',
      name: 'Unit C',
      bedrooms: 2,
      bathrooms: 2,
      status: t.available,
      image: '/assets/images/unit-c.jpg'
    },
    { 
      id: 'unitD', 
      price: '$1600',
      name: 'Unit D',
      bedrooms: 2,
      bathrooms: 2,
      status: t.available, 
      image: '/assets/images/unit-d.jpg'
    },
    { 
      id: 'unitE', 
      price: '$1800',
      name: 'Unit E',
      bedrooms: 2,
      bathrooms: 2,
      status: t.available,
      image: '/assets/images/unit-e.jpg'
    },
    { 
      id: 'unitF', 
      price: '$1800',
      name: 'Unit F',
      bedrooms: 2,
      bathrooms: 2,
      status: t.available,
      image: '/assets/images/unit-f.jpg'
    }
  ];

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="text-[38px] font-serif font-normal text-black leading-[42px] mb-6">
              {t.title}
            </h2>
            
            {/* Address Filter */}
            <div className="grid grid-cols-3 sm:flex sm:flex-row sm:flex-wrap gap-2 sm:gap-8 relative">
              {/* Animated underline - hidden on mobile */}
              <div 
                className="hidden sm:block absolute -bottom-1.5 h-[1px] bg-black transition-all duration-300 ease-in-out"
                style={{
                  width: `${underlineStyle.width}px`,
                  left: `${underlineStyle.left}px`
                }}
              ></div>
              
              {addresses.map((address, index) => (
                <button
                  key={address}
                  ref={(el) => { buttonRefs.current[index] = el; }}
                  onClick={() => handleAddressClick(address)}
                  className={`text-xs sm:text-sm font-medium transition-all duration-200 px-2 py-2 sm:px-0 sm:py-0 rounded-lg sm:rounded-none border sm:border-none text-center ${
                    selectedAddress === address
                      ? 'text-white bg-black sm:text-black sm:bg-transparent border-black'
                      : 'text-gray-700 bg-gray-50 hover:bg-gray-100 sm:text-gray-500 sm:bg-transparent sm:hover:text-gray-700 sm:hover:bg-transparent border-gray-200'
                  }`}
                >
                  {address}
                </button>
              ))}
            </div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {properties.map((property) => (
              <Card 
                key={property.id}
                className="group overflow-hidden border-0 shadow-md sm:shadow-none hover:shadow-lg transition-all duration-300 bg-white rounded-none sm:rounded-none"
              >
                {/* Property Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ProgressiveImage
                    src={property.image}
                    alt={property.name}
                    width={400}
                    height={300}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                    placeholder={generatePlaceholder(property.id.replace('unit', 'unit-').toLowerCase(), 400, 300)}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Price Badge */}
                  <div className="absolute top-3 left-3 sm:top-0 sm:left-0">
                    <div className="text-white px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-lg font-serif font-bold rounded-none sm:rounded-none" style={{ backgroundColor: '#92D63B' }}>
                      <span className="font-sans mr-1">$</span>{property.price.replace('$', '')}/{t.month}
                    </div>
                  </div>
                </div>

                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4 text-center">
                    {/* Property Details */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-gray-900 mb-1">
                        {property.name} &nbsp;&nbsp; <span className="font-sans mr-1">$</span>{property.price.replace('$', '')}/{t.monthAbbr}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {property.bedrooms}B{property.bathrooms}B &nbsp;&nbsp; {property.status}
                      </p>
                    </div>

                    {/* Action Button */}
                    <Button 
                      className="w-full bg-white border border-black text-gray-900 hover:bg-black hover:text-white py-2.5 sm:py-3 transition-colors focus:outline-none font-medium text-sm sm:text-base rounded-none sm:rounded-none shadow-none active:scale-95 sm:active:scale-100"
                      onClick={() => {
                        // Navigate to property detail page in current window
                        const detailUrl = `/${locale}/properties/${property.id}`;
                        window.location.href = detailUrl;
                      }}
                    >
                      {t.scheduleVisit}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}