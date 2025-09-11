export function ComfortConvenienceSSR() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text Description */}
          <div className="space-y-6">
            <h2 className="text-[32px] font-serif font-bold text-gray-900 leading-tight max-w-[438px]">
              Where Comfort Meets<br />Convenience
            </h2>
            <p className="text-[14px] text-gray-600 leading-relaxed max-w-[438px]">
              Discover the perfect blend of comfort and convenience in our thoughtfully designed small cozy condo units. 
              Ideal for singles, couples, or working professionals, each unit offers a warm, inviting space that feels 
              like home the moment you walk in.
            </p>
          </div>
          
          {/* Right Content - Pricing Cards */}
          <div className="flex flex-row justify-center gap-4">
            {/* Unit A/B/C/D Card */}
            <div className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl p-8 bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative z-10 text-white">
                <span className="mb-3 block w-fit rounded-full bg-white/20 backdrop-blur-sm px-3 py-0.5 text-sm font-medium text-white border border-white/20">
                  Available
                </span>
                <span className="my-2 block origin-top-left font-serif text-[46px] font-normal leading-[0.9]">
                  $1600 /<br />Month
                </span>
                <p className="text-lg text-white/90 mb-2 font-medium">Unit A/B/C/D</p>
                <p className="text-sm text-white/80 mb-1">Month Deposit · 12-Month Lease</p>
                <p className="text-sm text-white/80">Utilities Not Included</p>
              </div>
              <button className="absolute bottom-4 left-4 right-4 z-20 rounded-lg border-2 border-white bg-white py-2 text-center font-mono font-normal text-blue-600 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:text-white hover:border-white/80 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent">
                Schedule a viewing
              </button>
              {/* Background Pattern */}
              <div className="absolute inset-0 z-0 opacity-20">
                <svg
                  width="320"
                  height="384"
                  viewBox="0 0 320 384"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0"
                >
                  <circle
                    cx="160.5"
                    cy="114.5"
                    r="101.5"
                    fill="rgba(0, 0, 0, 0.2)"
                  />
                  <ellipse
                    cx="160.5"
                    cy="265.5"
                    rx="101.5"
                    ry="43.5"
                    fill="rgba(0, 0, 0, 0.2)"
                  />
                </svg>
              </div>
            </div>

            {/* Unit E/F Card */}
            <div className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl p-8 bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative z-10 text-white">
                <span className="mb-3 block w-fit rounded-full bg-white/20 backdrop-blur-sm px-3 py-0.5 text-sm font-medium text-white border border-white/20">
                  Available
                </span>
                <span className="my-2 block origin-top-left font-serif text-[46px] font-normal leading-[0.9]">
                  $1800 /<br />Month
                </span>
                <p className="text-lg text-white/90 mb-2 font-medium">Unit E/F</p>
                <p className="text-sm text-white/80 mb-1">Month Deposit · 12-Month Lease</p>
                <p className="text-sm text-white/80">Utilities Not Included</p>
              </div>
              <button className="absolute bottom-4 left-4 right-4 z-20 rounded-lg border-2 border-white bg-white py-2 text-center font-mono font-normal text-purple-600 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:text-white hover:border-white/80 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent">
                Schedule a viewing
              </button>
              {/* Background Pattern */}
              <div className="absolute inset-0 z-0 opacity-20">
                <svg
                  width="320"
                  height="384"
                  viewBox="0 0 320 384"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0"
                >
                  <rect
                    x="14"
                    width="153"
                    height="153"
                    rx="15"
                    fill="rgba(0, 0, 0, 0.2)"
                  />
                  <rect
                    x="155"
                    width="153"
                    height="153"
                    rx="15"
                    fill="rgba(0, 0, 0, 0.2)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
