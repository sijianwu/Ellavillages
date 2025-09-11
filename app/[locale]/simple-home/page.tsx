export default function SimpleHomePage() {
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
              <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Properties</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Discover <span className="text-green-600 italic">Cozy Living</span><br/>
              With Reasonable Rent
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Modern, cozy condos in safe neighborhoods.
            </p>
            <div className="space-x-4">
              <button className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800">
                Schedule a Viewing
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-2xl text-center">
              <p className="text-sm uppercase mb-2">Available</p>
              <h3 className="text-4xl font-bold mb-1">$1600</h3>
              <p className="text-lg">/ Month</p>
              <p className="mt-4">Unit A/B/C/D</p>
              <button className="bg-white text-gray-900 px-6 py-2 rounded-full mt-6 hover:bg-gray-100">
                Schedule a Viewing
              </button>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-8 rounded-2xl text-center">
              <p className="text-sm uppercase mb-2">Available</p>
              <h3 className="text-4xl font-bold mb-1">$1800</h3>
              <p className="text-lg">/ Month</p>
              <p className="mt-4">Unit E/F</p>
              <button className="bg-white text-gray-900 px-6 py-2 rounded-full mt-6 hover:bg-gray-100">
                Schedule a Viewing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+1 346 268 2140</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">ellavillages@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">5420 Eglinton St, Houston, TX 77026</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}