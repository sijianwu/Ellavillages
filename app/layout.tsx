import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
