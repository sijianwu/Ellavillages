'use client';

import { motion } from 'framer-motion';

export function ComfortConvenienceAnimated() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="flex lg:flex-row flex-col gap-12 items-center justify-between">
          {/* Left Content - Text Description */}
          <div className="flex-1 max-w-[438px] space-y-6">
            <h2 className="text-[32px] font-serif font-bold text-gray-900 leading-tight">
              Where Comfort Meets<br />Convenience
            </h2>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Discover the perfect blend of comfort and convenience in our thoughtfully designed small cozy condo units. 
              Ideal for singles, couples, or working professionals, each unit offers a warm, inviting space that feels 
              like home the moment you walk in.
            </p>
          </div>
          
          {/* Right Content - Pricing Cards */}
          <div className="flex flex-row justify-center gap-4 flex-shrink-0">
            {/* Unit A/B/C/D Card */}
            <motion.div
              whileHover="hover"
              transition={{ duration: 1, ease: "backInOut" }}
              variants={{ hover: { scale: 1.05 } }}
              className="relative h-96 w-80 shrink-0 overflow-hidden rounded-tl-[60px] rounded-tr-xl rounded-bl-xl rounded-br-xl p-8 bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative z-10 text-white flex flex-col h-full">
                <span className="mb-4 block w-fit rounded-full bg-white/20 backdrop-blur-sm px-3 py-0.5 text-sm font-medium text-white border border-white/20">
                  Available
                </span>
                <motion.span
                  initial={{ scale: 0.85 }}
                  variants={{ hover: { scale: 1 } }}
                  transition={{ duration: 1, ease: "backInOut" }}
                  className="mb-4 block origin-top-left font-serif text-[46px] font-normal leading-[0.9]"
                >
                  $1600<br />Month
                </motion.span>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-lg text-white/90 mb-3 font-medium">Unit A/B/C/D</p>
                    <p className="text-sm text-white/80 mb-2">Month Deposit · 12-Month Lease</p>
                    <p className="text-sm text-white/80">Utilities Not Included</p>
                  </div>
                  <button className="mt-6 rounded-lg border-2 border-white bg-white py-2 text-center font-mono font-normal text-blue-600 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:text-white hover:border-white/80 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent">
                    Schedule a viewing
                  </button>
                </div>
              </div>
              {/* Background Pattern */}
              <motion.svg
                width="320"
                height="384"
                viewBox="0 0 320 384"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                variants={{ hover: { scale: 1.5 } }}
                transition={{ duration: 1, ease: "backInOut" }}
                className="absolute inset-0 z-0 opacity-20"
              >
                <motion.circle
                  variants={{ hover: { scaleY: 0.5, y: -25 } }}
                  transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
                  cx="160.5"
                  cy="114.5"
                  r="101.5"
                  fill="rgba(0, 0, 0, 0.2)"
                />
                <motion.ellipse
                  variants={{ hover: { scaleY: 2.25, y: -25 } }}
                  transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
                  cx="160.5"
                  cy="265.5"
                  rx="101.5"
                  ry="43.5"
                  fill="rgba(0, 0, 0, 0.2)"
                />
              </motion.svg>
            </motion.div>

            {/* Unit E/F Card */}
            <motion.div
              whileHover="hover"
              transition={{ duration: 1, ease: "backInOut" }}
              variants={{ hover: { scale: 1.05 } }}
              className="relative h-96 w-80 shrink-0 overflow-hidden rounded-tl-[60px] rounded-tr-xl rounded-bl-xl rounded-br-xl p-8 bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative z-10 text-white flex flex-col h-full">
                <span className="mb-4 block w-fit rounded-full bg-white/20 backdrop-blur-sm px-3 py-0.5 text-sm font-medium text-white border border-white/20">
                  Available
                </span>
                <motion.span
                  initial={{ scale: 0.85 }}
                  variants={{ hover: { scale: 1 } }}
                  transition={{ duration: 1, ease: "backInOut" }}
                  className="mb-4 block origin-top-left font-serif text-[46px] font-normal leading-[0.9]"
                >
                  $1800<br />Month
                </motion.span>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-lg text-white/90 mb-3 font-medium">Unit E/F</p>
                    <p className="text-sm text-white/80 mb-2">Month Deposit · 12-Month Lease</p>
                    <p className="text-sm text-white/80">Utilities Not Included</p>
                  </div>
                  <button className="mt-6 rounded-lg border-2 border-white bg-white py-2 text-center font-mono font-normal text-purple-600 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:text-white hover:border-white/80 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent">
                    Schedule a viewing
                  </button>
                </div>
              </div>
              {/* Background Pattern */}
              <motion.svg
                width="320"
                height="384"
                viewBox="0 0 320 384"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                variants={{ hover: { scale: 1.05 } }}
                transition={{ duration: 1, ease: "backInOut" }}
                className="absolute inset-0 z-0 opacity-20"
              >
                <motion.rect
                  x="14"
                  width="153"
                  height="153"
                  rx="15"
                  fill="rgba(0, 0, 0, 0.2)"
                  variants={{ hover: { y: 219, rotate: "90deg", scaleX: 2 } }}
                  style={{ y: 12 }}
                  transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
                />
                <motion.rect
                  x="155"
                  width="153"
                  height="153"
                  rx="15"
                  fill="rgba(0, 0, 0, 0.2)"
                  variants={{ hover: { y: 12, rotate: "90deg", scaleX: 2 } }}
                  style={{ y: 219 }}
                  transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
                />
              </motion.svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
