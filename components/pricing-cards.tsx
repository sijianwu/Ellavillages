'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export function PricingCards() {
  const t = useTranslations('pricing');

  const pricingOptions = [
    {
      id: 'unitA',
      price: '$1600',
      unit: t('unitA'),
      color: 'from-blue-500 to-purple-600',
      textColor: 'text-white'
    },
    {
      id: 'unitE', 
      price: '$1800',
      unit: t('unitE'),
      color: 'from-purple-500 to-pink-600',
      textColor: 'text-white'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {pricingOptions.map((option) => (
              <Card
                key={option.id}
                className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className={`bg-gradient-to-r ${option.color} text-center py-8`}>
                  <div className="text-white">
                    <p className="text-sm uppercase tracking-wide opacity-90 mb-2">
                      {t('available')}
                    </p>
                    <h3 className="text-4xl font-bold mb-1">
                      {option.price}
                    </h3>
                    <p className="text-lg opacity-90">
                      / {t('month')}
                    </p>
                    <p className="text-sm mt-3 opacity-80">
                      {option.unit}
                    </p>
                  </div>
                </CardHeader>
                
                <CardContent className="p-8 text-center">
                  <div className="space-y-4 mb-8">
                    <p className="text-sm text-gray-600">
                      {t('deposit')}
                    </p>
                    <p className="text-sm text-gray-600">
                      {t('utilities')}
                    </p>
                  </div>
                  
                  <Button 
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-full transition-colors focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    aria-label={`${t('schedule')} for ${option.unit}`}
                  >
                    {t('schedule')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}