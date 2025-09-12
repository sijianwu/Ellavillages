'use client';

import { motion } from 'framer-motion';

interface CommunityFeaturesAnimatedProps {
  locale?: string;
}

export function CommunityFeaturesAnimated({ locale = 'en' }: CommunityFeaturesAnimatedProps) {
  // Translations
  const translations = {
    en: {
      title: "Community",
      features: [
        {
          title: "Modern",
          description: "Smart use of space with modern layouts"
        },
        {
          title: "Quiet",
          description: "Quiet, safe neighborhood"
        },
        {
          title: "Convenient",
          description: "Close to shops, cafes, and public transport"
        },
        {
          title: "Long-term",
          description: "Ideal for long-term stays"
        }
      ]
    },
    es: {
      title: "Comunidad",
      features: [
        {
          title: "Moderno",
          description: "Uso inteligente del espacio con diseños modernos"
        },
        {
          title: "Tranquilo",
          description: "Vecindario tranquilo y seguro"
        },
        {
          title: "Conveniente",
          description: "Cerca de tiendas, cafés y transporte público"
        },
        {
          title: "Largo plazo",
          description: "Ideal para estancias de largo plazo"
        }
      ]
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.en;

  const features = [
    {
      title: t.features[0].title,
      description: t.features[0].description,
      image: "/assets/images/modern-living.jpg",
      icon: "/assets/images/icon-modern.svg"
    },
    {
      title: t.features[1].title,
      description: t.features[1].description,
      image: "/assets/images/quiet-dining.jpg",
      icon: "/assets/images/icon-quiet.svg"
    },
    {
      title: t.features[2].title,
      description: t.features[2].description,
      image: "/assets/images/convenient-living.jpg",
      icon: "/assets/images/icon-convenient.svg"
    },
    {
      title: t.features[3].title,
      description: t.features[3].description,
      image: "/assets/images/longterm-living.jpg",
      icon: "/assets/images/icon-longterm.svg"
    }
  ];

  return (
    <section className="bg-white px-4 py-20">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-[38px] font-serif font-normal text-black leading-[42px] mb-6">
            {t.title}
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-[#F7F8EF] overflow-hidden transition-transform duration-300 relative aspect-[4/5] lg:aspect-[2/3] xl:aspect-[4/5] w-full max-w-sm mx-auto"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 lg:p-4 xl:p-6 pb-8 sm:pb-10 lg:pb-8 xl:pb-10">
                <h3 className="text-lg sm:text-xl lg:text-lg xl:text-xl font-serif font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-xs xl:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Icon */}
              <div className="absolute bottom-2 right-3 sm:bottom-3 sm:right-4">
                <img 
                  src={feature.icon} 
                  alt={`${feature.title} icon`}
                  className="w-6 h-6 sm:w-8 sm:h-8 opacity-70"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
