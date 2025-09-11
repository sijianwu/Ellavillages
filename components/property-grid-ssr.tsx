import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function PropertyGridSSR() {
  const properties = [
    {
      id: 'unit-a',
      name: 'Unit A',
      price: '$1600',
      bedrooms: '2 Bedrooms',
      status: 'Available',
      image: '/assets/images/unit-a.jpg'
    },
    {
      id: 'unit-b',
      name: 'Unit B',
      price: '$1600',
      bedrooms: '2 Bedrooms',
      status: 'Available',
      image: '/assets/images/unit-b.jpg'
    },
    {
      id: 'unit-c',
      name: 'Unit C',
      price: '$1600',
      bedrooms: '2 Bedrooms',
      status: 'Available',
      image: '/assets/images/unit-c.jpg'
    },
    {
      id: 'unit-d',
      name: 'Unit D',
      price: '$1600',
      bedrooms: '2 Bedrooms',
      status: 'Available',
      image: '/assets/images/unit-d.jpg'
    },
    {
      id: 'unit-e',
      name: 'Unit E',
      price: '$1800',
      bedrooms: '2 Bedrooms',
      status: 'Available',
      image: '/assets/images/unit-e.jpg'
    },
    {
      id: 'unit-f',
      name: 'Unit F',
      price: '$1800',
      bedrooms: '2 Bedrooms',
      status: 'Available',
      image: '/assets/images/unit-f.jpg'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="aspect-video bg-gray-200 relative">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
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
                <span className="text-sm font-normal text-gray-500">/month</span>
              </p>
              <p className="text-gray-600">{property.bedrooms}</p>
            </div>
            <Button className="w-full bg-white border border-black text-gray-900 hover:bg-black hover:text-white py-3 transition-colors focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 font-medium rounded-none shadow-none">
              Schedule Visit
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
