import { Home, Volume2, MapPin, Calendar } from 'lucide-react';

export function CommunityFeaturesSSR() {
  const features = [
    {
      id: 'modern',
      icon: Home,
      title: 'Modern Design',
      description: 'Contemporary architecture with clean lines and modern amenities',
      image: 'modern-interior.jpg'
    },
    {
      id: 'quiet',
      icon: Volume2,
      title: 'Quiet Environment',
      description: 'Peaceful surroundings perfect for relaxation and focus',
      image: 'quiet-neighborhood.jpg'
    },
    {
      id: 'location',
      icon: MapPin,
      title: 'Prime Location',
      description: 'Convenient access to shopping, dining, and transportation',
      image: 'prime-location.jpg'
    },
    {
      id: 'flexible',
      icon: Calendar,
      title: 'Flexible Leasing',
      description: 'Short and long-term rental options to fit your needs',
      image: 'flexible-leasing.jpg'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Ellavillages?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of comfort, convenience, and community in our thoughtfully designed living spaces.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.id} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-gray-900">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Additional Info Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Maintenance Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
