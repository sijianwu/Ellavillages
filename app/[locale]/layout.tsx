import type { Metadata } from "next";
// import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
// import { NextIntlClientProvider } from 'next-intl';
// import { getMessages } from 'next-intl/server';
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
      {children}
    </ThemeProvider>
  );
}