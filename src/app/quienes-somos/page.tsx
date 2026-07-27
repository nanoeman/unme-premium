import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiénes somos | UNME",
  description:
    "Historia, manifiesto y valores de UNME. La naturaleza como herramienta de transformación personal.",
};

export default function QuienesSomosPage() {
  return (
    <main className="min-h-screen bg-linen">
      {/* Hero */}
      <section className="relative flex h-[60vh] items-center justify-center bg-earth-900">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-earth-900/50 to-linen" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-linen">
          <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-amber-400">
            Nuestra esencia
          </span>
          <h1 className="font-display text-display-2 md:text-display-1 mb-6">
            Quiénes somos
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-linen/70">
            Más que un centro de bienestar. Un santuario donde la naturaleza y
            el ser humano se reencuentran.
          </p>
        </div>
      </section>

      {/* Manifiesto */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-heading-1 mb-8 text-center text-forest-700">
            Manifiesto UNME
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-earth-700">
            <p>
              Creemos que la naturaleza es la herramienta más poderosa para la
              transformación personal. En un mundo hiperconectado y acelerado,
              UNME nace como un espacio de desconexión consciente.
            </p>
            <p>
              No somos un hotel. No somos un camping. Somos una experiencia
              inmersiva diseñada para quienes buscan algo más que un fin de
              semana de descanso.
            </p>
            <p>
              Cada detalle de nuestra infraestructura — desde las tiendas
              glamping hasta el bosque terapéutico — ha sido cuidadosamente
              pensado para facilitar el viaje interior.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-linen-100 py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-heading-1 mb-16 text-center text-forest-700">
            Nuestros valores
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Exclusividad",
                desc: "Solo fines de semana. Solo grupos reducidos. Solo experiencias únicas.",
              },
              {
                title: "Sostenibilidad",
                desc: "Infraestructura eco-friendly comprometida con el entorno natural.",
              },
              {
                title: "Transformación",
                desc: "Cada experiencia está diseñada para generar un cambio real en quien la vive.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="border border-taupe-200 bg-linen p-8"
              >
                <h3 className="font-display text-heading-3 mb-4 text-forest-700">
                  {v.title}
                </h3>
                <p className="text-earth-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
