import { NavbarClient } from '@/components/navbar-client';
import { PropertyGrid } from '@/components/property-grid';
import { FooterSSR } from '@/components/footer-ssr';

interface PropertiesPageProps {
  params: {
    locale: string;
  };
}

export default async function PropertiesPage({ params }: PropertiesPageProps) {
  const { locale } = await params;
  return (
    <main className="min-h-screen">
      <NavbarClient locale={locale} />
      
      <section className="pt-40 pb-40">
        <PropertyGrid />
      </section>
      
      <FooterSSR locale={locale} />
    </main>
  );
}