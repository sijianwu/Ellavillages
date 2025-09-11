export default function AboutPageES() {
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
              <a href="/es/about" className="text-gray-900 font-medium border-b-2 border-gray-900">Acerca de</a>
              <a href="/es/properties" className="text-gray-700 hover:text-gray-900">Propiedades</a>
              <a href="/es/contact" className="text-gray-700 hover:text-gray-900">Contacto</a>
              <div className="ml-4">
                <a href="/en/about" className="text-sm bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200">🇺🇸 EN</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Acerca de Ellavillages
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nos dedicamos a proporcionar espacios de vida modernos, cómodos y asequibles 
                en vecindarios seguros en todo Houston.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Nuestra Misión</h2>
                <p className="text-gray-600 leading-relaxed">
                  En Ellavillages, creemos que todos merecen un hogar acogedor a un precio razonable. 
                  Nuestras propiedades cuidadosamente seleccionadas ofrecen comodidades modernas, diseño 
                  reflexivo y la conveniencia que necesitas para una vida cómoda.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Ya seas un joven profesional, una pareja que está empezando, o alguien que busca 
                  un nuevo comienzo, nuestras comunidades están diseñadas para sentirse como hogar 
                  desde el primer día.
                </p>
              </div>
              
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-4xl">🏡</span>
                  </div>
                  <span className="text-sm">Nuestra Comunidad</span>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Seguridad Primero</h3>
                <p className="text-gray-600 text-sm">
                  Todas nuestras propiedades están ubicadas en vecindarios seguros y bien mantenidos con buena iluminación y seguridad.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Precios Justos</h3>
                <p className="text-gray-600 text-sm">
                  Alquiler transparente y razonable sin tarifas ocultas. Lo que ves es lo que pagas.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Apoyo Comunitario</h3>
                <p className="text-gray-600 text-sm">
                  Equipo de administración y mantenimiento receptivo para garantizar tu comodidad y satisfacción.
                </p>
              </div>
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