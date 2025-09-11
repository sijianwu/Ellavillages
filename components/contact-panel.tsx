'use client';

import { useTranslations } from 'next-intl';
import { Phone, Mail, MapPin } from 'lucide-react';

export function ContactPanel() {
  const t = useTranslations('contact');

  const contactInfo = [
    {
      id: 'phone',
      icon: Phone,
      label: t('phone'),
      value: t('phoneNumber'),
      href: `tel:${t('phoneNumber')}`,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      id: 'email', 
      icon: Mail,
      label: t('email'),
      value: t('emailAddress'),
      href: `mailto:${t('emailAddress')}`,
      color: 'bg-green-50 text-green-600'
    },
    {
      id: 'address',
      icon: MapPin,
      label: t('address'),
      value: t('fullAddress'),
      href: `https://maps.google.com/?q=${encodeURIComponent(t('fullAddress'))}`,
      color: 'bg-orange-50 text-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('title')}
            </h2>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((contact) => (
              <a
                key={contact.id}
                href={contact.href}
                target={contact.id === 'address' ? '_blank' : '_self'}
                rel={contact.id === 'address' ? 'noopener noreferrer' : undefined}
                className="group block text-center p-8 rounded-2xl hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                aria-label={`${contact.label}: ${contact.value}`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${contact.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <contact.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {contact.label}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}