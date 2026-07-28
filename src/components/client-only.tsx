"use client";

import { useEffect, useState } from "react";

export function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-linen flex items-center justify-center">
        <div className="text-earth-600 text-sm uppercase tracking-wide">Cargando...</div>
      </div>
    );
  }

  return <>{children}</>;
}
