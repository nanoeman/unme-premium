export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-stone-50 py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-8 font-display text-4xl text-stone-900">
          Política de Privacidad
        </h1>
        
        <div className="space-y-8 text-stone-600 leading-relaxed">
          
          <section>
            <h2 className="mb-3 text-xl font-semibold text-stone-800">1. Responsable del Tratamiento</h2>
            <p>
              <strong>Identidad:</strong> UNME Experience<br />
              <strong>NIF:</strong> 25476298A<br />
              <strong>Dirección:</strong> Camino Molino del Rey, 112<br />
              <strong>Email:</strong> unmezgz@gmail.com<br />
              <strong>Teléfono:</strong> 609 371 555
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-stone-800">2. Datos que Recogemos</h2>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="py-2 text-left font-semibold">Categoría</th>
                  <th className="py-2 text-left font-semibold">Datos</th>
                  <th className="py-2 text-left font-semibold">Finalidad</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-200">
                  <td className="py-2">Identificación</td>
                  <td className="py-2">Nombre y apellidos</td>
                  <td className="py-2">Gestión de reservas</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <td className="py-2">Contacto</td>
                  <td className="py-2">Email, teléfono</td>
                  <td className="py-2">Comunicaciones</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <td className="py-2">Reserva</td>
                  <td className="py-2">Fechas, personas</td>
                  <td className="py-2">Prestación del servicio</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <td className="py-2">Pago</td>
                  <td className="py-2">Gestionado por Stripe</td>
                  <td className="py-2">No almacenamos datos bancarios</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-stone-800">3. Finalidad y Base Jurídica</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Ejecución de contrato:</strong> gestionar reservas y pagos</li>
              <li><strong>Consentimiento:</strong> enviar newsletters</li>
              <li><strong>Interés legítimo:</strong> análisis de tráfico web</li>
              <li><strong>Obligación legal:</strong> cumplir requisitos fiscales</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-stone-800">4. Conservación</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Datos de reserva: 5 años (obligación mercantil/fiscal)</li>
              <li>Datos de newsletter: hasta que solicite la baja</li>
              <li>Datos de navegación: 14 meses (Google Analytics)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-stone-800">5. Derechos del Usuario</h2>
            <p>
              Puede ejercer sus derechos de acceso, rectificación, supresión, oposición, 
              limitación y portabilidad enviando un email a <strong>unmezgz@gmail.com</strong> con el asunto 
              "Ejercicio de derechos GDPR", adjuntando copia de su DNI.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-stone-800">6. Cesión a Terceros</h2>
            <p>
              Sus datos pueden ser comunicados a Stripe (pagos) y Google Analytics (tráfico web). 
              No cedemos datos a otros terceros para fines comerciales.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-stone-800">7. Seguridad</h2>
            <p>
              Implementamos medidas técnicas y organizativas para garantizar la seguridad 
              de sus datos personales.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}