import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

export function HeroSSR() {
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
      alt: 'Cozy living room interior',
      className: 'col-span-1 row-span-1'
    },
    {
      id: 3,
      src: '/assets/images/property3.jpg',
      alt: 'Modern kitchen with island',
      className: 'col-span-1 row-span-1'
    },
    {
      id: 4,
      src: '/assets/images/property4.jpg',
      alt: 'Bedroom with large windows',
      className: 'col-span-1 row-span-1'
    },
    {
      id: 5,
      src: '/assets/images/property5.jpg',
      alt: 'Bathroom with modern fixtures',
      className: 'col-span-1 row-span-1'
    },
    {
      id: 6,
      src: '/assets/images/property6.jpg',
      alt: 'Balcony with city view',
      className: 'col-span-2 row-span-1'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Find Your Perfect
                <span className="block text-blue-600">Cozy Home</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Modern, cozy condos in safe neighborhoods with reasonable rent. 
                Perfect for singles, couples, and working professionals.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                View Properties
              </Button>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Watch Video
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Properties</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">$1600</div>
                <div className="text-sm text-gray-600">Starting Rent</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Property Images Grid */}
          <div className="grid grid-cols-3 grid-rows-3 gap-4 h-96 lg:h-[500px]">
            {propertyImages.map((image) => (
              <div
                key={image.id}
                className={`bg-gray-200 rounded-lg overflow-hidden ${image.className}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-blue-100 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-indigo-100 rounded-full opacity-60 animate-pulse delay-1000"></div>
    </section>
  );
}
