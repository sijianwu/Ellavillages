'use client';

import { motion } from 'framer-motion';

export function CommunityFeaturesAnimated() {
  const features = [
    {
      title: "Modern",
      description: "Smart use of space with modern layouts",
      image: "/assets/images/modern-living.jpg",
      icon: "/assets/images/icon-modern.svg"
    },
    {
      title: "Quiet",
      description: "Quiet, safe neighborhood",
      image: "/assets/images/quiet-dining.jpg",
      icon: "/assets/images/icon-quiet.svg"
    },
    {
      title: "Convenient",
      description: "Close to shops, cafes, and public transport",
      image: "/assets/images/convenient-living.jpg",
      icon: "/assets/images/icon-convenient.svg"
    },
    {
      title: "Long-term",
      description: "Ideal for long-term stays",
      image: "/assets/images/longterm-living.jpg",
      icon: "/assets/images/icon-longterm.svg"
    }
  ];

  return (
    <section className="bg-white px-4 py-20">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-[38px] font-serif font-normal text-black leading-[42px] mb-4">
            Community
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-[#F7F8EF] overflow-hidden transition-transform duration-300 relative aspect-[4/5] max-w-sm mx-auto"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 pb-12">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Icon */}
              <div className="absolute bottom-4 right-4">
                <img 
                  src={feature.icon} 
                  alt={`${feature.title} icon`}
                  className="w-8 h-8 opacity-70"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
