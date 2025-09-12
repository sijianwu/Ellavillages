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
          
          <div className="grid md:grid-cols-3 gap-12">
            {contactInfo.map((item, index) => (
              <div key={index} className="text-center p-6 bg-white">
                <div className="flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-gray-800" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-900 font-medium mb-2">
                  {item.value}
                </p>
                <p className="text-gray-600 text-sm">
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
