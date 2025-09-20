'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PropertyImageGallery } from '@/components/property-image-gallery';
import { ArrowLeft, MapPin, Home, Bath, Maximize, Calendar, Phone, Mail, Check } from 'lucide-react';
import Link from 'next/link';

interface PropertyDetailProps {
  property: {
    id: string;
    price: string;
    name: string;
    bedrooms: number;
    bathrooms: number;
    status: string;
    address: string;
    sqft: number;
    images: string[];
    features: string[];
    description: string;
  };
  locale: string;
}

export function PropertyDetail({ property, locale }: PropertyDetailProps) {
  // Translations
  const translations = {
    en: {
      backToProperties: "Back to Properties",
      available: "Available",
      month: "Month",
      monthAbbr: "M",
      sqft: "sq ft",
      bedrooms: "Bedrooms",
      bathrooms: "Bathrooms",
      features: "Features and Amenities",
      description: "Description",
      scheduleViewing: "Schedule a Viewing",
      contactUs: "Contact Us",
      callNow: "Call Now",
      sendEmail: "Send Email",
      propertyDetails: "Property Details",
      location: "Location"
    },
    es: {
      backToProperties: "Volver a Propiedades",
      available: "Disponible",
      month: "Mes",
      monthAbbr: "M",
      sqft: "pies²",
      bedrooms: "Habitaciones",
      bathrooms: "Baños",
      features: "Características y Amenidades",
      description: "Descripción",
      scheduleViewing: "Programar Visita",
      contactUs: "Contáctanos",
      callNow: "Llamar Ahora",
      sendEmail: "Enviar Email",
      propertyDetails: "Detalles de la Propiedad",
      location: "Ubicación"
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb / Back Button */}
          <div className="mb-8 pt-6">
            <Link 
              href={`/${locale}/properties`}
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.backToProperties}
            </Link>
          </div>

          {/* Property Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h1 className="text-[38px] font-serif font-normal text-black leading-[42px] mb-2">
                  {property.name}
                </h1>
                <Badge 
                  variant="secondary" 
                  className="bg-green-500 text-white border-green-500 rounded-none"
                >
                  {t.available}
                </Badge>
              </div>
              
              <div className="text-right">
                <div className="text-4xl font-serif font-normal text-black mb-1">
                  <span className="font-sans mr-1">$</span>{property.price.replace('$', '')}
                  <span className="text-lg font-normal text-gray-600">/{t.monthAbbr}</span>
                </div>
                <div className="text-sm text-gray-600">
                  {property.sqft} {t.sqft}
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Images */}
            <div className="lg:col-span-2">
              <PropertyImageGallery images={property.images} propertyName={property.name} />
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card className="rounded-none">
                <CardContent className="p-6">
                  <h3 className="text-lg font-serif font-normal text-black mb-4">
                    {t.propertyDetails}
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Home className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="text-gray-600">{t.bedrooms}</span>
                      </div>
                      <span className="font-normal">{property.bedrooms}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Bath className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="text-gray-600">{t.bathrooms}</span>
                      </div>
                      <span className="font-normal">{property.bathrooms}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Maximize className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="text-gray-600">Area</span>
                      </div>
                      <span className="font-normal">{property.sqft} {t.sqft}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="text-gray-600">{t.location}</span>
                      </div>
                      <span className="font-normal text-sm">{property.address}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Section */}
              <Card className="rounded-none">
                <CardContent className="p-6">
                  <h3 className="text-lg font-serif font-normal text-black mb-4">
                    {t.contactUs}
                  </h3>
                  
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-none"
                      onClick={() => {
                        // In a real app, this would open a scheduling modal or redirect to a booking page
                        alert('Scheduling feature would be implemented here');
                      }}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      {t.scheduleViewing}
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-black text-gray-900 hover:bg-gray-50 rounded-none"
                      onClick={() => {
                        window.open('tel:+1234567890');
                      }}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      {t.callNow}
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-black text-gray-900 hover:bg-gray-50 rounded-none"
                      onClick={() => {
                        window.open('mailto:info@ellavillages.com?subject=Inquiry about ' + property.name);
                      }}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {t.sendEmail}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Description Section */}
          <div className="mt-12">
            <Card className="rounded-none">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-2xl font-serif font-normal text-black mb-4">
                  {t.description}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {property.description}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Features Section */}
          <div className="mt-8">
            <Card className="rounded-none">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-2xl font-serif font-normal text-black mb-6">
                  {t.features}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {property.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center p-4 bg-gradient-to-r from-green-50 to-white border border-green-100 rounded-none shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex items-center justify-center w-6 h-6 bg-green-500 rounded-full mr-4 flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                      </div>
                      <span className="text-gray-800 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}