import type { Metadata } from "next";
import { Geist, Poppins, Prata } from "next/font/google";
import "./globals.css";

const geist = Geist({ 
  subsets: ["latin"], 
  variable: "--font-geist-sans",
  display: "swap",
});

const poppins = Poppins({ 
  weight: ["400", "500", "600"], 
  subsets: ["latin"], 
  variable: "--font-poppins",
  display: "swap",
});

const prata = Prata({ 
  weight: ["400"], 
  subsets: ["latin"], 
  variable: "--font-prata",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ellavillages | Cozy Living with Reasonable Rent",
  description: "Modern, cozy condos in safe neighborhoods with reasonable rent",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className={`${geist.variable} ${poppins.variable} ${prata.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
