'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function PropertyGrid() {
  const [selectedAddress, setSelectedAddress] = useState('5420 Elysian St');
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

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
      status: 'Available',
      image: '/assets/images/unit-a.jpg'
    },
    { 
      id: 'unitB', 
      price: '$1600',
      name: 'Unit B', 
      bedrooms: 2,
      bathrooms: 2,
      status: 'Available',
      image: '/assets/images/unit-b.jpg'
    },
    { 
      id: 'unitC', 
      price: '$1600',
      name: 'Unit C',
      bedrooms: 2,
      bathrooms: 2,
      status: 'Available',
      image: '/assets/images/unit-c.jpg'
    },
    { 
      id: 'unitD', 
      price: '$1600',
      name: 'Unit D',
      bedrooms: 2,
      bathrooms: 2,
      status: 'Available', 
      image: '/assets/images/unit-d.jpg'
    },
    { 
      id: 'unitE', 
      price: '$1800',
      name: 'Unit E',
      bedrooms: 2,
      bathrooms: 2,
      status: 'Available',
      image: '/assets/images/unit-e.jpg'
    },
    { 
      id: 'unitF', 
      price: '$1800',
      name: 'Unit F',
      bedrooms: 2,
      bathrooms: 2,
      status: 'Available',
      image: '/assets/images/unit-f.jpg'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="text-[38px] font-serif font-normal text-black leading-[42px] mb-6">
              Properties
            </h2>
            
            {/* Address Filter */}
            <div className="flex flex-wrap gap-8 relative">
              {/* Animated underline */}
              <div 
                className="absolute -bottom-1.5 h-[1px] bg-black transition-all duration-300 ease-in-out"
                style={{
                  width: `${underlineStyle.width}px`,
                  left: `${underlineStyle.left}px`
                }}
              ></div>
              
              {addresses.map((address, index) => (
                <button
                  key={address}
                  ref={(el) => (buttonRefs.current[index] = el)}
                  onClick={() => handleAddressClick(address)}
                  className={`text-sm font-medium transition-colors ${
                    selectedAddress === address
                      ? 'text-black'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {address}
                </button>
              ))}
            </div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Card 
                key={property.id}
                className="group overflow-hidden border-0 shadow-none hover:shadow-lg transition-all duration-300 bg-white rounded-none"
              >
                {/* Property Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Price Badge */}
                  <div className="absolute top-0 left-0">
                    <div className="text-white px-4 py-2 text-lg font-serif font-bold" style={{ backgroundColor: '#92D63B' }}>
                      {property.price}/Month
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4 text-center">
                    {/* Property Details */}
                    <div>
                      <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">
                        {property.name} &nbsp;&nbsp; {property.price}/M
                      </h3>
                      <p className="text-sm text-gray-600">
                        {property.bedrooms}B{property.bathrooms}B &nbsp;&nbsp; {property.status}
                      </p>
                    </div>

                    {/* Action Button */}
                    <Button 
                      className="w-full bg-white border border-black text-gray-900 hover:bg-black hover:text-white py-3 transition-colors focus:outline-none font-medium rounded-none shadow-none"
                    >
                      Schedule Visit
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