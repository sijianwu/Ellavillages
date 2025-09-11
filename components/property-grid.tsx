'use client';

import { useTranslations } from 'next-intl';
// import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function PropertyGrid() {
  const t = useTranslations('properties');

  // Mock property data
  const properties = [
    { 
      id: 'unitA', 
      price: '$1600',
      name: 'Unit A',
      size: '$1600 M',
      bedrooms: 2,
      location: 'Available',
      image: '/assets/images/unit-a.jpg'
    },
    { 
      id: 'unitB', 
      price: '$1600',
      name: 'Unit B', 
      size: '$1600 M',
      bedrooms: 2,
      location: 'Available',
      image: '/assets/images/unit-b.jpg'
    },
    { 
      id: 'unitC', 
      price: '$1600',
      name: 'Unit C',
      size: '$1600 M', 
      bedrooms: 2,
      location: 'Available',
      image: '/assets/images/unit-c.jpg'
    },
    { 
      id: 'unitD', 
      price: '$1600',
      name: 'Unit D',
      size: '$1600 M',
      bedrooms: 2,
      location: 'Available', 
      image: '/assets/images/unit-d.jpg'
    },
    { 
      id: 'unitE', 
      price: '$1800',
      name: 'Unit E',
      size: '$1800 M',
      bedrooms: 2,
      location: 'Available',
      image: '/assets/images/unit-e.jpg'
    },
    { 
      id: 'unitF', 
      price: '$1800',
      name: 'Unit F',
      size: '$1800 M',
      bedrooms: 2,
      location: 'Available',
      image: '/assets/images/unit-f.jpg'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              {t('title')}
            </h2>
            <p className="text-gray-600">
              {t('subtitle')}
            </p>
          </div>

          {/* Properties Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Card 
                key={property.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              >
                {/* Property Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* Image placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🏠</span>
                      </div>
                      <span className="text-xs">{property.name}</span>
                    </div>
                  </div>
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {property.price} Month
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Property Details */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {property.name} {property.size}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{property.bedrooms}BR</span>
                        <span className="font-medium text-green-600">
                          {property.location}
                        </span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button 
                      className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 rounded-lg transition-colors focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                      aria-label={`${t('schedule')} for ${property.name}`}
                    >
                      {t('schedule')}
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