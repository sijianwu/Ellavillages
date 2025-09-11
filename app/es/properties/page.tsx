export default function PropertiesPageES() {
  const properties = [
    { id: 'unitA', name: 'Unidad A', price: '$1,600', size: '800 pies²', bedrooms: 2, available: true },
    { id: 'unitB', name: 'Unidad B', price: '$1,600', size: '800 pies²', bedrooms: 2, available: true },
    { id: 'unitC', name: 'Unidad C', price: '$1,600', size: '800 pies²', bedrooms: 2, available: true },
    { id: 'unitD', name: 'Unidad D', price: '$1,600', size: '800 pies²', bedrooms: 2, available: false },
    { id: 'unitE', name: 'Unidad E', price: '$1,800', size: '950 pies²', bedrooms: 2, available: true },
    { id: 'unitF', name: 'Unidad F', price: '$1,800', size: '950 pies²', bedrooms: 2, available: true }
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
              <a href="/es" className="text-gray-700 hover:text-gray-900">Inicio</a>
              <a href="/es/about" className="text-gray-700 hover:text-gray-900">Acerca de</a>
              <a href="/es/properties" className="text-gray-900 font-medium border-b-2 border-gray-900">Propiedades</a>
              <a href="/es/contact" className="text-gray-700 hover:text-gray-900">Contacto</a>
              <div className="ml-4">
                <a href="/en/properties" className="text-sm bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200">🇺🇸 EN</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nuestras Propiedades
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explora nuestra colección de condominios modernos y acogedores diseñados para una 
              vida cómoda a precios razonables.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="text-2xl font-semibold text-blue-900 mb-2">Unidades $1,600</h3>
                <p className="text-blue-700 mb-4">Unidades A, B, C, D</p>
                <ul className="text-blue-600 text-sm space-y-1 text-left">
                  <li>• 2 Recámaras, 1 Baño</li>
                  <li>• Electrodomésticos modernos de cocina</li>
                  <li>• Lavadora/secadora en la unidad</li>
                  <li>• Aire acondicionado central</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-2xl">
                <h3 className="text-2xl font-semibold text-purple-900 mb-2">Unidades $1,800</h3>
                <p className="text-purple-700 mb-4">Unidades E, F</p>
                <ul className="text-purple-600 text-sm space-y-1 text-left">
                  <li>• 2 Recámaras, 2 Baños</li>
                  <li>• Acabados premium</li>
                  <li>• Espacio de vida más amplio</li>
                  <li>• Balcón privado</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Unidades Disponibles</h2>
            
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
                        {property.price} /mes
                      </div>
                    </div>
                    
                    {/* Availability Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        property.available 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {property.available ? 'Disponible' : 'Ocupada'}
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
                          <span>{property.bedrooms} REC • {property.size}</span>
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
                        {property.available ? 'Programar Visita' : 'Actualmente Ocupada'}
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
              ¿Listo para Programar una Visita?
            </h2>
            <p className="text-gray-600 mb-8">
              Contáctanos hoy para programar una visita a cualquier unidad disponible. 
              Estaremos encantados de mostrarte el lugar y responder cualquier pregunta.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13462682140"
                className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
              >
                Llamar Ahora: +1 346 268 2140
              </a>
              <a 
                href="mailto:ellavillages@gmail.com"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors"
              >
                Enviar Correo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Ellavillages. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}