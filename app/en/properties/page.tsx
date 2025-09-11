export default function PropertiesPage() {
  const properties = [
    { id: 'unitA', name: 'Unit A', price: '$1,600', size: '800 sqft', bedrooms: 2, available: true },
    { id: 'unitB', name: 'Unit B', price: '$1,600', size: '800 sqft', bedrooms: 2, available: true },
    { id: 'unitC', name: 'Unit C', price: '$1,600', size: '800 sqft', bedrooms: 2, available: true },
    { id: 'unitD', name: 'Unit D', price: '$1,600', size: '800 sqft', bedrooms: 2, available: false },
    { id: 'unitE', name: 'Unit E', price: '$1,800', size: '950 sqft', bedrooms: 2, available: true },
    { id: 'unitF', name: 'Unit F', price: '$1,800', size: '950 sqft', bedrooms: 2, available: true }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="font-semibold text-lg">Ellavillages</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="/en" className="text-gray-700 hover:text-gray-900">Home</a>
              <a href="/en/about" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="/en/properties" className="text-gray-900 font-medium border-b-2 border-gray-900">Properties</a>
              <a href="/en/contact" className="text-gray-700 hover:text-gray-900">Contact</a>
              <div className="ml-4">
                <a href="/es/properties" className="text-sm bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200">🇪🇸 ES</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Properties
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our collection of modern, cozy condos designed for comfortable living 
              at reasonable prices.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="text-2xl font-semibold text-blue-900 mb-2">$1,600 Units</h3>
                <p className="text-blue-700 mb-4">Units A, B, C, D</p>
                <ul className="text-blue-600 text-sm space-y-1 text-left">
                  <li>• 2 Bedrooms, 1 Bathroom</li>
                  <li>• Modern kitchen appliances</li>
                  <li>• In-unit washer/dryer</li>
                  <li>• Central air conditioning</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-2xl">
                <h3 className="text-2xl font-semibold text-purple-900 mb-2">$1,800 Units</h3>
                <p className="text-purple-700 mb-4">Units E, F</p>
                <ul className="text-purple-600 text-sm space-y-1 text-left">
                  <li>• 2 Bedrooms, 2 Bathrooms</li>
                  <li>• Premium finishes</li>
                  <li>• Larger living space</li>
                  <li>• Private balcony</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Properties Grid */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Available Units</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property) => (
                <div key={property.id} className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow rounded-2xl">
                  {/* Property Image Placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                    <div className="text-center text-gray-400">
                      <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🏠</span>
                      </div>
                      <span className="text-xs">{property.name}</span>
                    </div>
                    
                    {/* Price Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {property.price} /month
                      </div>
                    </div>
                    
                    {/* Availability Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        property.available 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {property.available ? 'Available' : 'Occupied'}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-4">
                      {/* Property Details */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {property.name}
                        </h3>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>{property.bedrooms} BR • {property.size}</span>
                        </div>
                      </div>

                      {/* Action Button */}
                      <button 
                        className={`w-full py-3 rounded-lg font-medium transition-colors ${
                          property.available
                            ? 'bg-gray-900 text-white hover:bg-gray-800'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                        disabled={!property.available}
                      >
                        {property.available ? 'Schedule Visit' : 'Currently Occupied'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact CTA */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Schedule a Visit?
            </h2>
            <p className="text-gray-600 mb-8">
              Contact us today to schedule a viewing of any available unit. 
              We'll be happy to show you around and answer any questions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13462682140"
                className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
              >
                Call Now: +1 346 268 2140
              </a>
              <a 
                href="mailto:ellavillages@gmail.com"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Ellavillages. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}