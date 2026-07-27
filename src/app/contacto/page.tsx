import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | UNME",
  description:
    "Conserjería digital avanzada. Contacta con UNME para reservas, partnerships o información general.",
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-linen">
      {/* Hero */}
      <section className="relative flex h-[40vh] items-center justify-center bg-earth-900">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-earth-900/50 to-linen" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-linen">
          <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-amber-400">
            Estamos aquí
          </span>
          <h1 className="font-display text-display-2 md:text-display-1 mb-6">
            Contacto
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-linen/70">
            Conserjería digital avanzada. Respuesta en menos de 24 horas.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="font-display text-heading-2 mb-8 text-forest-700">
                Escríbenos
              </h2>
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-wide text-taupe-600">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="w-full border border-taupe-300 bg-linen p-3 text-earth-800 focus:border-forest-700 focus:outline-none"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-wide text-taupe-600">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full border border-taupe-300 bg-linen p-3 text-earth-800 focus:border-forest-700 focus:outline-none"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wide text-taupe-600">
                    Asunto
                  </label>
                  <select className="w-full border border-taupe-300 bg-linen p-3 text-earth-800 focus:border-forest-700 focus:outline-none">
                    <option>Información general</option>
                    <option>Reserva</option>
                    <option>Partnership B2B</option>
                    <option>Prensa & Media</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wide text-taupe-600">
                    Mensaje
                  </label>
                  <textarea
                    rows={5}
                    className="w-full border border-taupe-300 bg-linen p-3 text-earth-800 focus:border-forest-700 focus:outline-none"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-forest-700 px-8 py-4 text-sm font-medium uppercase tracking-wide text-linen transition-colors hover:bg-forest-800"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-heading-3 mb-4 text-forest-700">
                  Información de contacto
                </h3>
                <div className="space-y-3 text-earth-600">
                  <p>📧 info@unme-experience.com</p>
                  <p>📱 +34 123 456 789</p>
                  <p>📍 Zaragoza, Aragón, España</p>
                </div>
              </div>

              <div>
                <h3 className="font-display text-heading-3 mb-4 text-forest-700">
                  Canales VIP
                </h3>
                <a
                  href="https://wa.me/34123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-700"
                >
                  WhatsApp Business
                </a>
              </div>

              <div>
                <h3 className="font-display text-heading-3 mb-4 text-forest-700">
                  Horario de atención
                </h3>
                <p className="text-earth-600">
                  Lunes - Viernes: 9:00 - 18:00
                  <br />
                  Fines de semana: Atención exclusiva para huéspedes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
