"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linen">
        <div className="text-center">
          <div className="text-4xl tracking-wider text-forest-700 uppercase mb-4 font-serif">UNME</div>
          <div className="text-sm text-taupe-600 uppercase tracking-wide">Cargando experiencia...</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
