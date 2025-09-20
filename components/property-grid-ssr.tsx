'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface PropertyGridSSRProps {
  locale?: string;
}

export function PropertyGridSSR({ locale = 'en' }: PropertyGridSSRProps) {
  // Translations
  const translations = {
    en: {
      available: "Available",
      scheduleVisit: "Schedule Visit",
      month: "month",
      bedrooms: "Bedrooms"
    },
    es: {
      available: "Disponible",
      scheduleVisit: "Programar Visita",
      month: "mes",
      bedrooms: "Habitaciones"
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.en;

  const properties = [
    {
      id: 'unitA',
      name: 'Unit A',
      price: '$1600',
      bedrooms: '2 Bedrooms',
      status: t.available,
      image: '/assets/images/unit-a.jpg'
    },
    {
      id: 'unitB',
      name: 'Unit B',
      price: '$1600',
      bedrooms: '2 Bedrooms',
      status: t.available,
      image: '/assets/images/unit-b.jpg'
    },
    {
      id: 'unitC',
      name: 'Unit C',
      price: '$1600',
      bedrooms: '2 Bedrooms',
      status: t.available,
      image: '/assets/images/unit-c.jpg'
    },
    {
      id: 'unitD',
      name: 'Unit D',
      price: '$1600',
      bedrooms: '2 Bedrooms',
      status: t.available,
      image: '/assets/images/unit-d.jpg'
    },
    {
      id: 'unitE',
      name: 'Unit E',
      price: '$1800',
      bedrooms: '2 Bedrooms',
      status: t.available,
      image: '/assets/images/unit-e.jpg'
    },
    {
      id: 'unitF',
      name: 'Unit F',
      price: '$1800',
      bedrooms: '2 Bedrooms',
      status: t.available,
      image: '/assets/images/unit-f.jpg'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow !rounded-none md:!rounded-xl">
          <div className="aspect-video bg-gray-200 relative">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-none md:rounded-full">
                {property.status}
              </span>
            </div>
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {property.name}
            </h3>
            <div className="space-y-2 mb-4">
              <p className="text-2xl font-bold text-gray-900">
                {property.price}
                <span className="text-sm font-normal text-gray-500">/{t.month}</span>
              </p>
              <p className="text-gray-600">{property.bedrooms}</p>
            </div>
            <Button 
              className="w-full bg-white border border-black text-gray-900 hover:bg-black hover:text-white py-3 transition-colors focus:outline-none font-medium rounded-none shadow-none"
              onClick={() => {
                // Navigate to property detail page in current window
                const detailUrl = `/${locale}/properties/${property.id}`;
                window.location.href = detailUrl;
              }}
            >
              {t.scheduleVisit}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
