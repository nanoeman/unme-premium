"use client";

import { useEffect, useState } from "react";
import { Quattrocento_Sans, Cormorant_Garamond } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const quattrocento = Quattrocento_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-quattrocento",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <html lang="es" className={`${quattrocento.variable} ${cormorant.variable}`}>
        <body className="font-sans bg-linen text-earth-800 antialiased">
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="font-display text-4xl tracking-wider text-forest-700 uppercase mb-4">UNME</div>
              <div className="text-sm text-taupe-600 uppercase tracking-wide">Cargando experiencia...</div>
            </div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="es" className={`${quattrocento.variable} ${cormorant.variable}`}>
      <body className="font-sans bg-linen text-earth-800 antialiased selection:bg-forest-200 selection:text-forest-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
