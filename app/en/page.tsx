export default function EnglishHomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple Navbar */}
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
              <a href="/en" className="text-gray-900 font-medium border-b-2 border-gray-900">Home</a>
              <a href="/en/about" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="/en/properties" className="text-gray-700 hover:text-gray-900">Properties</a>
              <a href="/en/contact" className="text-gray-700 hover:text-gray-900">Contact</a>
              <div className="ml-4">
                <a href="/es" className="text-sm bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200">🇪🇸 ES</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Discover <span className="text-green-600 italic">Cozy Living</span><br/>
                With Reasonable Rent
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Modern, cozy condos in safe neighborhoods. Your perfect home awaits in Houston, Texas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
                  Schedule a Viewing
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <span>▶️</span>
                  Watch Tour
                </button>
              </div>
            </div>
            
            {/* Property Grid Placeholder */}
            <div className="grid grid-cols-3 gap-4 h-[400px]">
              <div className="col-span-2 row-span-2 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🏠</div>
                  <p className="text-sm text-blue-700">Modern House</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl mb-1">🏡</div>
                  <p className="text-xs text-green-700">Cozy Living</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl mb-1">🛋️</div>
                  <p className="text-xs text-purple-700">Furnished</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Where Comfort Meets Convenience
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Discover the perfect blend of comfort and convenience in our thoughtfully designed smart cozy condo units. 
              Ideal for singles, couples, or working professionals seeking a living solution that feels like home 
              the moment you walk in.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-sm uppercase mb-2 opacity-90">Available</p>
              <h3 className="text-4xl font-bold mb-1">$1,600</h3>
              <p className="text-lg mb-2">/ Month</p>
              <p className="text-sm opacity-80 mb-4">Unit A/B/C/D</p>
              <div className="space-y-2 mb-6 text-sm opacity-90">
                <p>Security deposit not included</p>
                <p>Utilities not included</p>
              </div>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors w-full">
                Schedule a Viewing
              </button>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-sm uppercase mb-2 opacity-90">Available</p>
              <h3 className="text-4xl font-bold mb-1">$1,800</h3>
              <p className="text-lg mb-2">/ Month</p>
              <p className="text-sm opacity-80 mb-4">Unit E/F</p>
              <div className="space-y-2 mb-6 text-sm opacity-90">
                <p>Security deposit not included</p>
                <p>Utilities not included</p>
              </div>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors w-full">
                Schedule a Viewing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Community</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏠', title: 'Modern', desc: 'Smart use of space with modern layouts' },
              { icon: '🔇', title: 'Quiet', desc: 'Quiet, safe neighborhood' },
              { icon: '📍', title: 'Convenient', desc: 'Close to shops, cafes, and public transport' },
              { icon: '📅', title: 'Long-term', desc: 'Ideal for long-term stays' }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="text-4xl mb-2">{feature.icon}</div>
                    <p className="text-sm text-gray-600">{feature.title} Space</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a href="tel:+13462682140" className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 group-hover:text-gray-900 transition-colors">+1 346 268 2140</p>
            </a>
            
            <a href="mailto:ellavillages@gmail.com" className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 group-hover:text-gray-900 transition-colors">ellavillages@gmail.com</p>
            </a>
            
            <a href="https://maps.google.com/?q=5420+Eglinton+St,+Houston,+TX+77026" target="_blank" rel="noopener noreferrer" className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600 group-hover:text-gray-900 transition-colors">5420 Eglinton St, Houston, TX 77026</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
              <span className="text-black font-bold text-lg">E</span>
            </div>
            <span className="font-semibold text-xl">Ellavillages</span>
          </div>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Modern, cozy condos in safe neighborhoods with reasonable rent. Your perfect home awaits.
          </p>
          <div className="flex justify-center space-x-8 text-sm mb-8">
            <a href="/en" className="hover:text-white transition-colors">Home</a>
            <a href="/en/about" className="hover:text-white transition-colors">About</a>
            <a href="/en/properties" className="hover:text-white transition-colors">Properties</a>
            <a href="/en/contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-gray-500 text-sm">
            <p>© 2024 Ellavillages. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}