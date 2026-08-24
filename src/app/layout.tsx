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
  title: "UNME — Ultimate Natural Meditation Experience | Retiros exclusivos de yoga y meditación en Zaragoza",
  description:
    "Retiros exclusivos de yoga y meditación en Zaragoza. La naturaleza como herramienta de transformación personal. Naturaleza, silencio y bienestar para desconectar del ruido y reconectar contigo.",
  keywords: [
    "retiros yoga",
    "meditación",
    "silencio",
    "naturaleza",
    "Zaragoza",
    "bienestar",
    "exclusivo",
    "fin de semana",
    "transformación personal",
    "desconectar",
    "wellness",
    "mindfulness",
    "glamping",
    "retiros",
    "conexion con la naturaleza",
  ],
  openGraph: {
    title: "UNME — Ultimate Natural Meditation Experience | Retiros exclusivos de yoga y meditación en Zaragoza",
    description: "Retiros exclusivos de yoga y meditación en Zaragoza. La naturaleza como herramienta de transformación personal. Naturaleza, silencio y bienestar para desconectar del ruido y reconectar contigo.",
    type: "website",
    locale: "es_ES",
    siteName: "UNME Experience",
  },
  twitter: {
    card: "summary_large_image",
    title: "UNME — Ultimate Natural Meditation Experience | Retiros exclusivos de yoga y meditación en Zaragoza",
    description: "Retiros exclusivos de yoga y meditación en Zaragoza. La naturaleza como herramienta de transformación personal. Naturaleza, silencio y bienestar para desconectar del ruido y reconectar contigo.",
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