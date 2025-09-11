import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import "../globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Ellavillages | Cozy Living with Reasonable Rent",
  description: "Modern, cozy condos in safe neighborhoods with reasonable rent. Discover comfortable living spaces perfect for singles, couples, and working professionals.",
  keywords: "rental, apartment, condo, Houston, cozy living, reasonable rent, modern apartments",
  authors: [{ name: "Ellavillages" }],
  openGraph: {
    title: "Ellavillages | Cozy Living with Reasonable Rent",
    description: "Modern, cozy condos in safe neighborhoods with reasonable rent.",
    url: defaultUrl,
    siteName: "Ellavillages",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ellavillages | Cozy Living with Reasonable Rent",
    description: "Modern, cozy condos in safe neighborhoods with reasonable rent.",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

const locales = ['en', 'es'];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              "name": "Ellavillages",
              "description": "Modern, cozy condos in safe neighborhoods with reasonable rent",
              "url": defaultUrl,
              "telephone": "+1 346 268 2140",
              "email": "ellavillages@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "5420 Eglinton St",
                "addressLocality": "Houston",
                "addressRegion": "TX",
                "postalCode": "77026",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "29.7604",
                "longitude": "-95.3698"
              },
              "priceRange": "$1600-$1800",
              "servesCuisine": "Residential Rental",
              "areaServed": "Houston, TX"
            }),
          }}
        />
      </head>
      <body className={`${geistSans.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}