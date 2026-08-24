export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-stone-50 py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-8 font-display text-4xl text-stone-900">
          Política de Cookies
        </h1>
        
        <div className="space-y-8 text-stone-600 leading-relaxed">
          
          <section>
            <h2 className="mb-3 text-xl font-semibold text-stone-800">1. ¿Qué son las Cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo 
              cuando visita un sitio web. Permiten recordar preferencias y mejorar la experiencia.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-stone-800">2. Cookies que Utilizamos</h2>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="py-2 text-left font-semibold">Tipo</th>
                  <th className="py-2 text-left font-semibold">Finalidad</th>
                  <th className="py-2 text-left font-semibold">Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-200">
                  <td className="py-2">Técnicas</td>
                  <td className="py-2">Funcionamiento básico de la web</td>
                  <td className="py-2">Sesión / 1 año</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <td className="py-2">Analíticas</td>
                  <td className="py-2">Medir tráfico y comportamiento</td>
                  <td className="py-2">14 meses</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-stone-800">3. Terceros</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Google Analytics 4:</strong> análisis de tráfico web</li>
              <li><strong>Stripe:</strong> procesamiento de pagos (solo durante checkout)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-stone-800">4. Gestión de Cookies</h2>
            <p>
              Puede configurar su navegador para rechazar cookies o eliminarlas. 
              Las cookies técnicas son necesarias para el funcionamiento de la web y no pueden desactivarse.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-stone-800">5. Cómo Eliminar Cookies</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Chrome:</strong> Configuración → Privacidad → Borrar datos de navegación</li>
              <li><strong>Firefox:</strong> Opciones → Privacidad → Cookies y datos del sitio</li>
              <li><strong>Safari:</strong> Preferencias → Privacidad → Gestionar datos de sitios web</li>
            </ul>
          </section>

        </div>
      </div>
    </main>
  );
}