import { Phone, Mail, MapPin } from 'lucide-react';

export function ContactPanelSSR() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 832 228 2749',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'ellawelcomeyou@ellavillages.com',
      description: 'Send us an email anytime'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: '5420 Elysian St, Houston, TX, 77009',
      description: 'Visit our office'
    }
  ];

  return (
    <section className="pt-16 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[38px] font-serif font-normal text-black leading-[42px] mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to find your new home? Have questions about our properties? 
              We&apos;d love to hear from you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {contactInfo.map((item, index) => (
              <div key={index} className="text-center md:text-center p-4 md:p-6 bg-white border border-gray-100 rounded-lg md:border-none md:rounded-none hover:shadow-lg md:hover:shadow-none transition-shadow duration-200">
                <div className="flex items-center justify-center mx-auto mb-3 md:mb-4 w-12 h-12 md:w-auto md:h-auto bg-gray-50 md:bg-transparent rounded-full md:rounded-none">
                  <item.icon className="w-6 h-6 md:w-8 md:h-8 text-gray-800" />
                </div>
                <h3 className="text-base md:text-lg font-serif font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-900 font-medium mb-2 break-all md:break-normal">
                  {item.value}
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
