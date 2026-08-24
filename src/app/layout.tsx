import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Quattrocento_Sans, Cormorant_Garamond } from "next/font/google";

// CSS global: usa ruta relativa desde src/app
import "./globals.css";

import { ClientLayout } from "@/components/client-layout";

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

export const metadata: Metadata = {
  title: "UNME — Ultimate Natural Meditation Experience",
  description:
    "Centro de bienestar premium en Zaragoza. Retiros espirituales, glamping de lujo y experiencias de transformación personal en la naturaleza.",
  keywords: [
    "wellness",
    "meditación",
    "glamping",
    "retiros",
    "Zaragoza",
    "bienestar",
    "naturaleza",
  ],
  openGraph: {
    title: "UNME — Ultimate Natural Meditation Experience",
    description: "La naturaleza como herramienta de transformación personal.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${quattrocento.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z75P6NM4SN"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z75P6NM4SN');
            `,
          }}
        />
      </head>
      <body
        className="font-sans bg-linen text-earth-800 antialiased selection:bg-forest-200 selection:text-forest-900"
        suppressHydrationWarning
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}