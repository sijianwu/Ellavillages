'use client';

import { motion } from 'framer-motion';

const PricingCard = ({ label, monthlyPrice, unit, description, cta, background, BGComponent }) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{ duration: 1, ease: "backInOut" }}
      variants={{ hover: { scale: 1.05 } }}
      className={`relative h-96 w-80 shrink-0 overflow-hidden rounded-xl p-8 ${background} shadow-lg hover:shadow-xl transition-shadow`}
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/20 backdrop-blur-sm px-3 py-0.5 text-sm font-medium text-white border border-white/20">
          {label}
        </span>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{ hover: { scale: 1 } }}
          transition={{ duration: 1, ease: "backInOut" }}
          className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
        >
          ${monthlyPrice} /<br />Month
        </motion.span>
        <p className="text-lg text-white/90 mb-2">{unit}</p>
        <p className="text-sm text-white/80 mb-1">{description}</p>
        <p className="text-sm text-white/80">Utilities Not Included</p>
      </div>
      <button className="absolute bottom-4 left-4 right-4 z-20 rounded-lg border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:text-white hover:border-white/80 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent">
        {cta}
      </button>
      <BGComponent />
    </motion.div>
  );
};

const BGComponent1 = () => (
  <motion.svg
    width="320"
    height="384"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.5 } }}
    transition={{ duration: 1, ease: "backInOut" }}
    className="absolute inset-0 z-0"
  >
    <motion.circle
      variants={{ hover: { scaleY: 0.5, y: -25 } }}
      transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
      cx="160.5"
      cy="114.5"
      r="101.5"
      fill="rgba(0, 0, 0, 0.2)"
      className="dark:fill-white/10"
    />
    <motion.ellipse
      variants={{ hover: { scaleY: 2.25, y: -25 } }}
      transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
      cx="160.5"
      cy="265.5"
      rx="101.5"
      ry="43.5"
      fill="rgba(0, 0, 0, 0.2)"
      className="dark:fill-white/10"
    />
  </motion.svg>
);

const BGComponent2 = () => (
  <motion.svg
    width="320"
    height="384"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.05 } }}
    transition={{ duration: 1, ease: "backInOut" }}
    className="absolute inset-0 z-0"
  >
    <motion.rect
      x="14"
      width="153"
      height="153"
      rx="15"
      fill="rgba(0, 0, 0, 0.2)"
      className="dark:fill-white/10"
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
      className="dark:fill-white/10"
      variants={{ hover: { y: 12, rotate: "90deg", scaleX: 2 } }}
      style={{ y: 219 }}
      transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
    />
  </motion.svg>
);

export function ComfortConvenience() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text Description */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
              Where Comfort Meets Convenience
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Discover the perfect blend of comfort and convenience in our thoughtfully designed small cozy condo units. 
              Ideal for singles, couples, or working professionals, each unit offers a warm, inviting space that feels 
              like home the moment you walk in.
            </p>
          </div>
          
          {/* Right Content - Pricing Cards */}
          <div className="flex flex-wrap justify-center gap-4">
            <PricingCard
              label="Available"
              monthlyPrice="1600"
              unit="Unit A/B/C/D"
              description="Month Deposit · 12-Month Lease"
              cta="Schedule a Viewing"
              background="bg-gradient-to-br from-blue-500 to-purple-600"
              BGComponent={BGComponent1}
            />
            <PricingCard
              label="Available"
              monthlyPrice="1800"
              unit="Unit E/F"
              description="Month Deposit · 12-Month Lease"
              cta="Schedule a Viewing"
              background="bg-gradient-to-br from-purple-500 to-pink-600"
              BGComponent={BGComponent2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
