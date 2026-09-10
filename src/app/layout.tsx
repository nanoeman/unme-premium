import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Quattrocento_Sans, Cormorant_Garamond } from "next/font/google";

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

const siteUrl = "https://unme-experience.com";

export const metadata: Metadata = {
  title: {
    default: "UNME — Retiros de Yoga y Bienestar en Aragón | Glamping Premium en Zaragoza",
    template: "%s | UNME Experience",
  },
  description:
    "Retiros exclusivos de yoga, meditación y bienestar en Pinseque, Zaragoza. Glamping premium en plena naturaleza para desconectar y reconectar contigo.",
  keywords: [
    "retiros yoga Zaragoza",
    "retiro bienestar Aragón",
    "glamping retiro yoga España",
    "alquiler finca retiros Zaragoza",
    "retiro meditación Pinseque",
    "wellness retreat Spain",
    "yoga weekend Zaragoza",
    "naturaleza y silencio",
    "transformación personal",
    "mindfulness",
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "UNME — Retiros de Yoga y Bienestar en Aragón | Glamping Premium",
    description:
      "Retiros exclusivos de yoga, meditación y bienestar en Pinseque, Zaragoza. Glamping premium en plena naturaleza.",
    type: "website",
    locale: "es_ES",
    siteName: "UNME Experience",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "UNME — Retiros de Yoga y Bienestar en Aragón",
    description:
      "Retiros exclusivos de yoga, meditación y bienestar en Pinseque, Zaragoza. Glamping premium en plena naturaleza.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "UNME Experience",
    description: "Retiros exclusivos de yoga y bienestar en Pinseque, Zaragoza",
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pinseque",
      addressRegion: "Zaragoza",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.7, // Ajustar con coordenadas reales
      longitude: -0.8, // Ajustar con coordenadas reales
    },
    telephone: "+34 600 000 000", // Ajustar
    email: "unmezgz@gmail.com",
    priceRange: "€€€",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Yoga", value: true },
      { "@type": "LocationFeatureSpecification", name: "Meditación", value: true },
      { "@type": "LocationFeatureSpecification", name: "Glamping", value: true },
      { "@type": "LocationFeatureSpecification", name: "Naturaleza", value: true },
    ],
  };

  return (
    <html
      lang="es"
      className={`${quattrocento.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
