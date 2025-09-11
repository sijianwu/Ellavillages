'use client';

import { useTranslations } from 'next-intl';

export function Intro() {
  const t = useTranslations('intro');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {t('title')}
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('description')}
              </p>
            </div>

            {/* Right Content - Feature Image Placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-4xl">🏡</span>
                  </div>
                  <span className="text-sm">Comfort & Convenience</span>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-100 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}