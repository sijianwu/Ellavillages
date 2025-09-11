import { Phone, Mail, MapPin } from 'lucide-react';

export function ContactPanelSSR() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '(346) 268-2140',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@ellavillages.com',
      description: 'Send us an email anytime'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Houston, TX',
      description: 'Visit our office'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to find your new home? Have questions about our properties? 
              We&apos;d love to hear from you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
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
