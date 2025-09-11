'use client';

import { useTranslations } from 'next-intl';
import { Home, Volume2, MapPin, Calendar } from 'lucide-react';

export function CommunityFeatures() {
  const t = useTranslations('community');

  const features = [
    {
      id: 'modern',
      icon: Home,
      title: t('modern'),
      description: t('modernDesc'),
      image: 'modern-interior.jpg'
    },
    {
      id: 'quiet',
      icon: Volume2,
      title: t('quiet'), 
      description: t('quietDesc'),
      image: 'quiet-neighborhood.jpg'
    },
    {
      id: 'convenient',
      icon: MapPin,
      title: t('convenient'),
      description: t('convenientDesc'), 
      image: 'convenient-location.jpg'
    },
    {
      id: 'longTerm',
      icon: Calendar,
      title: t('longTerm'),
      description: t('longTermDesc'),
      image: 'long-term-living.jpg'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('title')}
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.id}
                className="group text-center space-y-4"
              >
                {/* Feature Image */}
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 mb-6 relative group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-8 h-8 text-gray-600" />
                      </div>
                      <span className="text-xs">{feature.title} Space</span>
                    </div>
                  </div>
                </div>

                {/* Feature Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Feature Icon */}
                <div className="flex justify-center">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    <feature.icon className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}