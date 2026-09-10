import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones | UNME Experience",
  description:
    "Condiciones de uso del sitio web de UNME Experience. Información sobre propiedad intelectual, responsabilidad, enlaces a terceros y legislación aplicable.",
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-linen py-16 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-heading-1 mb-8 text-forest-700">
          Aviso Legal — UNME Experience
        </h1>

        <p className="mb-8 text-sm text-earth-600">
          Última actualización: agosto de 2026
        </p>

        <div className="prose prose-forest max-w-none">
          {/* Aquí pegas el contenido del aviso legal que ya me has pasado */}
          {/* Lo estructuramos con H2 para cada sección */}
        </div>

        <div className="mt-12 border-t border-taupe-200 pt-8">
          <p className="text-sm text-earth-600">
            También puedes consultar:{" "}
            <Link href="/privacidad" className="text-forest-700 underline hover:text-forest-900">
              Política de Privacidad
            </Link>
            {" | "}
            <Link href="/cookies" className="text-forest-700 underline hover:text-forest-900">
              Política de Cookies
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
