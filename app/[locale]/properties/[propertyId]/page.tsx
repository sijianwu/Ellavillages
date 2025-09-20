import { NavbarClient } from '@/components/navbar-client';
import { FooterSSR } from '@/components/footer-ssr';
import { PropertyDetail } from '@/components/property-detail';
import { notFound } from 'next/navigation';

interface PropertyDetailPageProps {
  params: {
    locale: string;
    propertyId: string;
  };
}

// Mock property data - in real app this would come from a database or API
const getPropertyData = (locale: string) => {
  const properties = {
    'unitA': { 
      id: 'unitA', 
      price: '$1600',
      name: 'Unit A',
      bedrooms: 2,
      bathrooms: 2,
      status: locale === 'es' ? 'Disponible' : 'Available',
      address: '5420 Elysian St',
      sqft: 850,
      images: [
        '/assets/images/unit-a.jpg',
        '/assets/images/kitchen-interior.jpg',
        '/assets/images/living-room.jpg',
        '/assets/images/house-exterior.jpg'
      ],
      features: locale === 'es' ? [
        'Lavadora/secadora en la unidad',
        'Lavavajillas',
        'Aire acondicionado',
        'Pisos de madera',
        'Vestidor',
        'Balcón',
        'Se admiten mascotas',
        'Estacionamiento incluido'
      ] : [
        'In-unit washer/dryer',
        'Dishwasher',
        'Air conditioning',
        'Hardwood floors',
        'Walk-in closet',
        'Balcony',
        'Pet-friendly',
        'Parking included'
      ],
      description: locale === 'es' 
        ? 'Hermosa unidad de 2 habitaciones y 2 baños con comodidades modernas y vistas impresionantes. Este amplio apartamento cuenta con un plano de planta abierto, cocina actualizada con electrodomésticos de acero inoxidable y grandes ventanas que llenan el espacio con luz natural.'
        : 'Beautiful 2-bedroom, 2-bathroom unit with modern amenities and stunning views. This spacious apartment features an open floor plan, updated kitchen with stainless steel appliances, and large windows that fill the space with natural light.'
    },
  'unitB': { 
    id: 'unitB', 
    price: '$1600',
    name: 'Unit B', 
    bedrooms: 2,
    bathrooms: 2,
    status: locale === 'es' ? 'Disponible' : 'Available',
    address: '5420 Elysian St',
    sqft: 900,
    images: [
      '/assets/images/unit-b.jpg',
      '/assets/images/kitchen-interior.jpg',
      '/assets/images/living-room.jpg',
      '/assets/images/house-exterior.jpg'
    ],
    features: locale === 'es' ? [
      'Lavadora/secadora en la unidad',
      'Lavavajillas',
      'Aire acondicionado',
      'Pisos de madera',
      'Vestidor',
      'Balcón',
      'Se admiten mascotas',
      'Estacionamiento incluido'
    ] : [
      'In-unit washer/dryer',
      'Dishwasher',
      'Air conditioning',
      'Hardwood floors',
      'Walk-in closet',
      'Balcony',
      'Pet-friendly',
      'Parking included'
    ],
    description: locale === 'es'
      ? 'Amplia unidad de 2 habitaciones y 2 baños con acabados premium y diseño moderno. Las características incluyen encimeras de granito, electrodomésticos de acero inoxidable y un balcón privado con vistas a la ciudad.'
      : 'Spacious 2-bedroom, 2-bathroom unit with premium finishes and modern design. Features include granite countertops, stainless steel appliances, and a private balcony with city views.'
  },
  'unitC': { 
    id: 'unitC', 
    price: '$1600',
    name: 'Unit C',
    bedrooms: 2,
    bathrooms: 2,
    status: locale === 'es' ? 'Disponible' : 'Available',
    address: '6688 Elysian St',
    sqft: 875,
    images: [
      '/assets/images/unit-c.jpg',
      '/assets/images/kitchen-interior.jpg',
      '/assets/images/living-room.jpg',
      '/assets/images/house-exterior.jpg'
    ],
    features: locale === 'es' ? [
      'Lavadora/secadora en la unidad',
      'Lavavajillas',
      'Aire acondicionado',
      'Pisos de madera',
      'Vestidor',
      'Balcón',
      'Se admiten mascotas',
      'Estacionamiento incluido'
    ] : [
      'In-unit washer/dryer',
      'Dishwasher',
      'Air conditioning',
      'Hardwood floors',
      'Walk-in closet',
      'Balcony',
      'Pet-friendly',
      'Parking included'
    ],
    description: locale === 'es'
      ? 'Acogedora unidad de 2 habitaciones y 2 baños perfecta para una vida cómoda. Cuenta con electrodomésticos actualizados, amplio espacio de almacenamiento y fácil acceso al transporte público.'
      : 'Cozy 2-bedroom, 2-bathroom unit perfect for comfortable living. Features updated appliances, ample storage space, and easy access to public transportation.'
  },
  'unitD': { 
    id: 'unitD', 
    price: '$1600',
    name: 'Unit D',
    bedrooms: 2,
    bathrooms: 2,
    status: locale === 'es' ? 'Disponible' : 'Available',
    address: '6688 Elysian St',
    sqft: 825,
    images: [
      '/assets/images/unit-d.jpg',
      '/assets/images/kitchen-interior.jpg',
      '/assets/images/living-room.jpg',
      '/assets/images/house-exterior.jpg'
    ],
    features: locale === 'es' ? [
      'Lavadora/secadora en la unidad',
      'Lavavajillas',
      'Aire acondicionado',
      'Pisos de madera',
      'Vestidor',
      'Se admiten mascotas',
      'Estacionamiento incluido'
    ] : [
      'In-unit washer/dryer',
      'Dishwasher',
      'Air conditioning',
      'Hardwood floors',
      'Walk-in closet',
      'Pet-friendly',
      'Parking included'
    ],
    description: locale === 'es'
      ? 'Unidad bien equipada de 2 habitaciones y 2 baños con diseño cuidadoso y acabados de calidad. Disfrute de la comodidad de las amenidades modernas en un entorno residencial tranquilo.'
      : 'Well-appointed 2-bedroom, 2-bathroom unit with thoughtful design and quality finishes. Enjoy the convenience of modern amenities in a quiet, residential setting.'
  },
  'unitE': { 
    id: 'unitE', 
    price: '$1800',
    name: 'Unit E',
    bedrooms: 2,
    bathrooms: 2,
    status: locale === 'es' ? 'Disponible' : 'Available',
    address: '9966 Elysian St',
    sqft: 950,
    images: [
      '/assets/images/unit-e.jpg',
      '/assets/images/kitchen-interior.jpg',
      '/assets/images/living-room.jpg',
      '/assets/images/house-exterior.jpg'
    ],
    features: locale === 'es' ? [
      'Lavadora/secadora en la unidad',
      'Lavavajillas',
      'Aire acondicionado',
      'Pisos de madera',
      'Vestidor',
      'Balcón',
      'Se admiten mascotas',
      'Estacionamiento incluido',
      'Acceso al jardín'
    ] : [
      'In-unit washer/dryer',
      'Dishwasher',
      'Air conditioning',
      'Hardwood floors',
      'Walk-in closet',
      'Balcony',
      'Pet-friendly',
      'Parking included',
      'Garden access'
    ],
    description: locale === 'es'
      ? 'Unidad premium de 2 habitaciones y 2 baños con acabados de lujo y amenidades excepcionales. Las características incluyen techos altos, accesorios de diseñador y acceso a hermosos espacios de jardín.'
      : 'Premium 2-bedroom, 2-bathroom unit with luxury finishes and exceptional amenities. Features include high ceilings, designer fixtures, and access to beautiful garden spaces.'
  },
  'unitF': { 
    id: 'unitF', 
    price: '$1800',
    name: 'Unit F',
    bedrooms: 2,
    bathrooms: 2,
    status: locale === 'es' ? 'Disponible' : 'Available',
    address: '9966 Elysian St',
    sqft: 975,
    images: [
      '/assets/images/unit-f.jpg',
      '/assets/images/kitchen-interior.jpg',
      '/assets/images/living-room.jpg',
      '/assets/images/house-exterior.jpg'
    ],
    features: locale === 'es' ? [
      'Lavadora/secadora en la unidad',
      'Lavavajillas',
      'Aire acondicionado',
      'Pisos de madera',
      'Vestidor',
      'Balcón',
      'Se admiten mascotas',
      'Estacionamiento incluido',
      'Acceso al jardín'
    ] : [
      'In-unit washer/dryer',
      'Dishwasher',
      'Air conditioning',
      'Hardwood floors',
      'Walk-in closet',
      'Balcony',
      'Pet-friendly',
      'Parking included',
      'Garden access'
    ],
    description: locale === 'es'
      ? 'Elegante unidad de 2 habitaciones y 2 baños con diseño sofisticado y amenidades de primer nivel. Disfrute de amplias áreas de estar, electrodomésticos premium y vistas serenas del jardín.'
      : 'Elegant 2-bedroom, 2-bathroom unit with sophisticated design and top-tier amenities. Enjoy spacious living areas, premium appliances, and serene garden views.'
  }
  };
  
  return properties;
};

export default async function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const { locale, propertyId } = await params;
  
  // Get property data with locale support
  const properties = getPropertyData(locale);
  const property = properties[propertyId as keyof typeof properties];
  
  // If property doesn't exist, show 404
  if (!property) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <NavbarClient locale={locale} />
      
      <PropertyDetail property={property} locale={locale} />
      
      <FooterSSR locale={locale} />
    </main>
  );
}

// Generate static paths for known properties
export async function generateStaticParams() {
  const propertyIds = Object.keys(getPropertyData('en')); // Use any locale to get property IDs
  const locales = ['en', 'es'];
  
  const paths = [];
  for (const locale of locales) {
    for (const propertyId of propertyIds) {
      paths.push({
        locale,
        propertyId
      });
    }
  }
  
  return paths;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PropertyDetailPageProps) {
  const { locale, propertyId } = await params;
  const properties = getPropertyData(locale);
  const property = properties[propertyId as keyof typeof properties];
  
  if (!property) {
    return {
      title: 'Property Not Found',
    };
  }
  
  return {
    title: `${property.name} - ${property.price}/Month | Ella Villages`,
    description: `${property.bedrooms}BR/${property.bathrooms}BA apartment at ${property.address}. ${property.description}`,
    openGraph: {
      title: `${property.name} - ${property.price}/Month`,
      description: property.description,
      images: [property.images[0]],
    },
  };
}