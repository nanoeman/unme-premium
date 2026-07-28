import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Quattrocento_Sans, Cormorant_Garamond } from "next/font/google";
import "@/app/globals.css";
import { HeaderHydrationGuard } from "@/components/layout/header-hydration-guard";
import { Footer } from "@/components/layout/footer";
import { AuthProvider } from "@/components/providers/auth-provider";

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
    >
      <body className="font-sans bg-linen text-earth-800 antialiased selection:bg-forest-200 selection:text-forest-900">
        <AuthProvider>
          <HeaderHydrationGuard />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
