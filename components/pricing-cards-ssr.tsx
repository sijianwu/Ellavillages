import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export function PricingCardsSSR() {
  const pricingOptions = [
    {
      id: 'unitA',
      price: '$1600',
      unit: 'Unit A - Studio',
      color: 'from-blue-500 to-purple-600',
      features: ['Fully furnished', 'Modern kitchen', 'High-speed internet', 'Parking included']
    },
    {
      id: 'unitB',
      price: '$1700',
      unit: 'Unit B - 1 Bedroom',
      color: 'from-green-500 to-teal-600',
      features: ['Spacious bedroom', 'Living area', 'Balcony access', 'In-unit laundry']
    },
    {
      id: 'unitC',
      price: '$1800',
      unit: 'Unit C - 2 Bedroom',
      color: 'from-orange-500 to-red-600',
      features: ['Two bedrooms', 'Large living room', 'Modern bathroom', 'Storage space']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[38px] font-serif font-normal text-black leading-[42px] mb-6">
            Choose Your Perfect Space
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select from our range of modern, comfortable units designed for different lifestyles and needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingOptions.map((option) => (
            <Card key={option.id} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-5`}></div>
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${option.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">
                    {option.id.charAt(option.id.length - 1)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{option.unit}</h3>
                <div className="text-3xl font-bold text-gray-900 mt-2">{option.price}</div>
                <div className="text-sm text-gray-500">per month</div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {option.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full bg-gradient-to-r ${option.color} hover:opacity-90 text-white border-0`}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All prices include utilities, internet, and parking
          </p>
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            Contact Us for More Options
          </Button>
        </div>
      </div>
    </section>
  );
}
