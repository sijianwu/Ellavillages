import type { Metadata } from "next";
// import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
// import { NextIntlClientProvider } from 'next-intl';
// import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
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

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   display: "swap",
//   subsets: ["latin"],
// });

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

  // Temporarily disabled internationalization
  // const messages = {};

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      {/* Simple Navbar for testing */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-24">
            {/* Left Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/en" className="text-sm font-medium text-black">Home</Link>
              <Link href="/en/about" className="text-sm font-medium text-gray-500 hover:text-gray-600">About</Link>
              <Link href="/en/properties" className="text-sm font-medium text-gray-500 hover:text-gray-600">Properties</Link>
            </div>

            {/* Centered Logo */}
            <Link href="/en" className="flex items-center absolute left-1/2 transform -translate-x-1/2">
              <Image
                src="/assets/images/navbar_logo.svg"
                alt="Ellavillages"
                width={78}
                height={78}
                className="w-20 h-20"
              />
            </Link>

            {/* Right Navigation */}
            <div className="flex items-center gap-8">
              <Link href="/en/contact" className="hidden md:block text-sm font-medium text-gray-500 hover:text-gray-600">Contact</Link>
              <Button asChild variant="default" className="bg-black text-white hover:bg-gray-800">
                <Link href="/es" className="flex items-center space-x-2">
                  <span>English</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </ThemeProvider>
  );
}