"use client";

import { AuthProvider } from "@/components/providers/auth-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ClientOnly } from "@/components/client-only";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ClientOnly>
      <AuthProvider>
        <Header />
        {children}
        <Footer />
      </AuthProvider>
    </ClientOnly>
  );
}
