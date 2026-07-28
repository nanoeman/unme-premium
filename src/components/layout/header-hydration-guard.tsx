"use client";

import { useEffect, useState } from "react";
import { Header } from "./header";

export function HeaderHydrationGuard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Renderiza un header estático sin estado de sesión para evitar discrepancias
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="font-display text-2xl tracking-wider text-linen uppercase">
            UNME
          </span>
          <nav className="hidden md:flex items-center gap-8">
            {["Experiencias", "Eventos", "Agenda", "Blog", "Galería", "Contacto"].map((label) => (
              <span
                key={label}
                className="text-sm tracking-wide text-linen/70 uppercase"
              >
                {label}
              </span>
            ))}
            <span className="bg-amber-500 px-6 py-2.5 text-sm font-medium text-linen uppercase tracking-wide">
              Reservar
            </span>
          </nav>
        </div>
      </header>
    );
  }

  return <Header />;
}
