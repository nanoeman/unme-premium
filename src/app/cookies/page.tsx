import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies | UNME Experience",
  description:
    "Política de cookies de UNME Experience. Información sobre los tipos de cookies utilizadas, su finalidad y cómo gestionarlas.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-linen py-16 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-heading-1 mb-8 text-forest-700">
          Política de Cookies
        </h1>

        <p className="mb-8 text-sm text-earth-600">
          Última actualización: agosto de 2026
        </p>

        <div className="space-y-8 text-sm text-earth-700">
          {/* 1. QUÉ SON LAS COOKIES */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              1. ¿Qué son las cookies?
            </h2>
            <p className="text-earth-700">
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Permiten recordar preferencias y mejorar la experiencia de navegación.
            </p>
          </section>

          {/* 2. COOKIES QUE UTILIZAMOS */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              2. Cookies que utilizamos
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-taupe-200 text-sm">
                <thead className="bg-linen-100">
                  <tr>
                    <th className="border border-taupe-200 px-4 py-2 text-left font-medium text-forest-700">Tipo</th>
                    <th className="border border-taupe-200 px-4 py-2 text-left font-medium text-forest-700">Finalidad</th>
                    <th className="border border-taupe-200 px-4 py-2 text-left font-medium text-forest-700">Duración</th>
                    <th className="border border-taupe-200 px-4 py-2 text-left font-medium text-forest-700">¿Quién las gestiona?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-taupe-200 px-4 py-2">Técnicas</td>
                    <td className="border border-taupe-200 px-4 py-2">Funcionamiento básico de la web (sesión, preferencias)</td>
                    <td className="border border-taupe-200 px-4 py-2">Sesión / 1 año</td>
                    <td className="border border-taupe-200 px-4 py-2">UNME Experience</td>
                  </tr>
                  <tr>
                    <td className="border border-taupe-200 px-4 py-2">Analíticas</td>
                    <td className="border border-taupe-200 px-4 py-2">Medir tráfico, páginas visitadas, comportamiento</td>
                    <td className="border border-taupe-200 px-4 py-2">14 meses</td>
                    <td className="border border-taupe-200 px-4 py-2">Google Analytics</td>
                  </tr>
                  <tr>
                    <td className="border border-taupe-200 px-4 py-2">Funcionales</td>
                    <td className="border border-taupe-200 px-4 py-2">Recordar preferencias de idioma, formato</td>
                    <td className="border border-taupe-200 px-4 py-2">1 año</td>
                    <td className="border border-taupe-200 px-4 py-2">UNME Experience</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. TERCEROS */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              3. Terceros
            </h2>
            <p className="mb-3 text-earth-700">
              Utilizamos los siguientes servicios que pueden instalar cookies:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-earth-700">
              <li>
                <strong>Google Analytics 4:</strong> análisis de tráfico web.{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-700 underline hover:text-forest-900"
                >
                  Más información
                </a>
              </li>
              <li>
                <strong>Stripe:</strong> procesamiento de pagos (solo durante el checkout).{" "}
                <a
                  href="https://stripe.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-700 underline hover:text-forest-900"
                >
                  Más información
                </a>
              </li>
            </ul>
          </section>

          {/* 4. GESTIÓN DE COOKIES */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              4. Gestión de cookies
            </h2>
            <p className="mb-3 text-earth-700">
              Puede gestionar sus preferencias de cookies de las siguientes formas:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-earth-700">
              <li>
                <strong>Configuración del navegador:</strong> Chrome, Firefox, Safari y Edge permiten bloquear o eliminar cookies.
              </li>
              <li>
                <strong>Nuestro banner de cookies:</strong> al acceder a la web, podrá aceptar o rechazar cookies no esenciales.
              </li>
            </ul>
            <p className="mt-3 text-earth-700">
              <strong>Nota:</strong> Las cookies técnicas son necesarias para el funcionamiento de la web y no pueden desactivarse.
            </p>
          </section>

          {/* 5. CÓMO ELIMINAR COOKIES */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              5. Cómo eliminar cookies
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-earth-700">
              <li>
                <strong>Chrome:</strong> Configuración → Privacidad y seguridad → Borrar datos de navegación.
              </li>
              <li>
                <strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio.
              </li>
              <li>
                <strong>Safari:</strong> Preferencias → Privacidad → Gestionar datos de sitios web.
              </li>
            </ul>
          </section>
        </div>

        {/* Enlaces a otras políticas */}
        <div className="mt-12 border-t border-taupe-200 pt-8">
          <p className="text-sm text-earth-600">
            También puedes consultar:{" "}
            <Link href="/terminos" className="text-forest-700 underline hover:text-forest-900">
              Aviso Legal y Términos
            </Link>
            {" | "}
            <Link href="/privacidad" className="text-forest-700 underline hover:text-forest-900">
              Política de Privacidad
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
