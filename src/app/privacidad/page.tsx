import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | UNME Experience",
  description:
    "Política de privacidad de UNME Experience. Información sobre el tratamiento de datos personales, derechos del usuario y medidas de seguridad conforme al RGPD.",
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-linen py-16 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-heading-1 mb-8 text-forest-700">
          Política de Privacidad
        </h1>

        <p className="mb-8 text-sm text-earth-600">
          Última actualización: agosto de 2026
        </p>

        <div className="space-y-8 text-sm text-earth-700">
          {/* 1. RESPONSABLE */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              1. Responsable del tratamiento
            </h2>
            <ul className="space-y-1 text-earth-700">
              <li><strong>Identidad:</strong> UNME Experience</li>
              <li><strong>NIF:</strong> 25476298A</li>
              <li><strong>Dirección:</strong> Camino Molino del Rey, 112, Pinseque, Zaragoza</li>
              <li><strong>Email:</strong> <a href="mailto:unmezgz@gmail.com" className="text-forest-700 underline hover:text-forest-900">unmezgz@gmail.com</a></li>
              <li><strong>Teléfono:</strong> 609 371 555</li>
            </ul>
          </section>

          {/* 2. DATOS QUE RECOGEMOS */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              2. Datos personales que recogemos
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-taupe-200 text-sm">
                <thead className="bg-linen-100">
                  <tr>
                    <th className="border border-taupe-200 px-4 py-2 text-left font-medium text-forest-700">Categoría</th>
                    <th className="border border-taupe-200 px-4 py-2 text-left font-medium text-forest-700">Datos</th>
                    <th className="border border-taupe-200 px-4 py-2 text-left font-medium text-forest-700">Finalidad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-taupe-200 px-4 py-2">Identificación</td>
                    <td className="border border-taupe-200 px-4 py-2">Nombre y apellidos</td>
                    <td className="border border-taupe-200 px-4 py-2">Gestión de reservas</td>
                  </tr>
                  <tr>
                    <td className="border border-taupe-200 px-4 py-2">Contacto</td>
                    <td className="border border-taupe-200 px-4 py-2">Email, teléfono</td>
                    <td className="border border-taupe-200 px-4 py-2">Comunicaciones sobre la reserva</td>
                  </tr>
                  <tr>
                    <td className="border border-taupe-200 px-4 py-2">Reserva</td>
                    <td className="border border-taupe-200 px-4 py-2">Fechas, número de personas, preferencias</td>
                    <td className="border border-taupe-200 px-4 py-2">Prestación del servicio</td>
                  </tr>
                  <tr>
                    <td className="border border-taupe-200 px-4 py-2">Pago</td>
                    <td className="border border-taupe-200 px-4 py-2">Gestionada por Stripe</td>
                    <td className="border border-taupe-200 px-4 py-2">No almacenamos datos bancarios</td>
                  </tr>
                  <tr>
                    <td className="border border-taupe-200 px-4 py-2">Navegación</td>
                    <td className="border border-taupe-200 px-4 py-2">Dirección IP, cookies</td>
                    <td className="border border-taupe-200 px-4 py-2">Mejora de la web (Google Analytics)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. FINALIDAD Y BASE JURÍDICA */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              3. Finalidad y base jurídica
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-taupe-200 text-sm">
                <thead className="bg-linen-100">
                  <tr>
                    <th className="border border-taupe-200 px-4 py-2 text-left font-medium text-forest-700">Finalidad</th>
                    <th className="border border-taupe-200 px-4 py-2 text-left font-medium text-forest-700">Base jurídica</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-taupe-200 px-4 py-2">Gestionar reservas y pagos</td>
                    <td className="border border-taupe-200 px-4 py-2">Ejecución de contrato</td>
                  </tr>
                  <tr>
                    <td className="border border-taupe-200 px-4 py-2">Enviar confirmaciones y comunicaciones operativas</td>
                    <td className="border border-taupe-200 px-4 py-2">Ejecución de contrato</td>
                  </tr>
                  <tr>
                    <td className="border border-taupe-200 px-4 py-2">Enviar newsletters y promociones</td>
                    <td className="border border-taupe-200 px-4 py-2">Consentimiento expreso</td>
                  </tr>
                  <tr>
                    <td className="border border-taupe-200 px-4 py-2">Análisis de tráfico web</td>
                    <td className="border border-taupe-200 px-4 py-2">Interés legítimo</td>
                  </tr>
                  <tr>
                    <td className="border border-taupe-200 px-4 py-2">Cumplir obligaciones legales</td>
                    <td className="border border-taupe-200 px-4 py-2">Obligación legal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. CONSERVACIÓN */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              4. Conservación de datos
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-earth-700">
              <li><strong>Datos de reserva:</strong> 5 años (obligación mercantil y fiscal).</li>
              <li><strong>Datos de newsletter:</strong> hasta que solicite la baja.</li>
              <li><strong>Datos de navegación:</strong> 14 meses (Google Analytics).</li>
            </ul>
          </section>

          {/* 5. DERECHOS */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              5. Derechos del usuario
            </h2>
            <p className="mb-3 text-earth-700">Puede ejercer sus derechos de:</p>
            <ul className="list-disc pl-5 space-y-1 text-earth-700">
              <li><strong>Acceso</strong> — saber qué datos tenemos.</li>
              <li><strong>Rectificación</strong> — corregir datos inexactos.</li>
              <li><strong>Supresión</strong> — solicitar el borrado.</li>
              <li><strong>Oposición</strong> — oponerse al tratamiento.</li>
              <li><strong>Limitación</strong> — restringir el tratamiento.</li>
              <li><strong>Portabilidad</strong> — recibir sus datos en formato electrónico.</li>
            </ul>
            <p className="mt-4 text-earth-700">
              Para ejercer estos derechos, envíe un email a{" "}
              <a href="mailto:unmezgz@gmail.com" className="text-forest-700 underline hover:text-forest-900">
                unmezgz@gmail.com
              </a>{" "}
              con el asunto &ldquo;Ejercicio de derechos GDPR&rdquo;, adjuntando copia de su DNI.
            </p>
          </section>

          {/* 6. CESIÓN DE DATOS */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              6. Cesión de datos a terceros
            </h2>
            <p className="mb-3 text-earth-700">Sus datos podrán ser comunicados a:</p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-taupe-200 text-sm">
                <thead className="bg-linen-100">
                  <tr>
                    <th className="border border-taupe-200 px-4 py-2 text-left font-medium text-forest-700">Tercero</th>
                    <th className="border border-taupe-200 px-4 py-2 text-left font-medium text-forest-700">Finalidad</th>
                    <th className="border border-taupe-200 px-4 py-2 text-left font-medium text-forest-700">Garantías</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-taupe-200 px-4 py-2">Stripe</td>
                    <td className="border border-taupe-200 px-4 py-2">Procesamiento de pagos</td>
                    <td className="border border-taupe-200 px-4 py-2">Certificación PCI DSS</td>
                  </tr>
                  <tr>
                    <td className="border border-taupe-200 px-4 py-2">Google (Analytics)</td>
                    <td className="border border-taupe-200 px-4 py-2">Análisis de tráfico web</td>
                    <td className="border border-taupe-200 px-4 py-2">Acuerdo de tratamiento</td>
                  </tr>
                  <tr>
                    <td className="border border-taupe-200 px-4 py-2">Vercel</td>
                    <td className="border border-taupe-200 px-4 py-2">Hosting de la web</td>
                    <td className="border border-taupe-200 px-4 py-2">Acuerdo de tratamiento</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-earth-700">
              No cedemos sus datos a otros terceros para fines comerciales.
            </p>
          </section>

          {/* 7. SEGURIDAD */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              7. Medidas de seguridad
            </h2>
            <p className="text-earth-700">
              Implementamos medidas técnicas y organizativas apropiadas para garantizar la seguridad de sus datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
            </p>
          </section>

          {/* 8. CAMBIOS */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              8. Cambios en la política
            </h2>
            <p className="text-earth-700">
              UNME Experience se reserva el derecho a modificar esta política para adaptarla a novedades legislativas o cambios en nuestros servicios. La versión actualizada estará siempre disponible en esta página.
            </p>
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
            <Link href="/cookies" className="text-forest-700 underline hover:text-forest-900">
              Política de Cookies
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
