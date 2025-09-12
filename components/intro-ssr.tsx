export function IntroSSR() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-[38px] font-serif font-normal text-black leading-[42px] mb-6">
                Welcome to Ellavillages
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We provide modern, comfortable living spaces in safe neighborhoods 
                with reasonable rent prices. Our properties are designed for singles, 
                couples, and working professionals who value quality and convenience.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Safe Neighborhoods</h3>
                    <p className="text-gray-600">All our properties are located in secure, well-maintained areas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Reasonable Rent</h3>
                    <p className="text-gray-600">Competitive pricing starting from $1600 per month</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Modern Amenities</h3>
                    <p className="text-gray-600">Fully equipped with modern appliances and fixtures</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Image */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden">
                <img
                  src="/assets/images/hero-house.jpg"
                  alt="Modern apartment building"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Happy Residents</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
