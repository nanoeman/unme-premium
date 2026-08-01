import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiencias | UNME",
  description:
    "Catálogo de experiencias de lujo: retiros de yoga, meditación, glamping premium y bienestar en Zaragoza.",
};

const EXPERIENCES = [
  {
    title: "Retiro de Yoga & Meditación",
    desc: "Un fin de semana inmersivo con maestros certificados. Yoga al amanecer, meditación guiada y gastronomía consciente.",
    price: "Consultar",
    duration: "2 días / 1 noche",
    tag: "Más popular",
  },
  {
    title: "Glamping Premium Experience",
    desc: "Alojamiento en tiendas de lujo totalmente equipadas. Desconexión total con todas las comodidades.",
    price: "Consultar",
    duration: "2 días / 1 noche",
    tag: "Nuevo",
  },
  {
    title: "Sound Healing Retreat",
    desc: "Terapia de sonido con cuencos tibetanos, gongs y frecuencias curativas. Sanación a nivel celular.",
    price: "Consultar",
    duration: "2 días / 1 noche",
    tag: null,
  },
  {
    title: "Corporate Wellness B2B",
    desc: "Programas de team building y bienestar para empresas. Infraestructura completa para eventos corporativos.",
    price: "Consultar",
    duration: "Fin de semana completo",
    tag: "B2B",
  },
  {
    title: "Detox & Nutrición Consciente",
    desc: "Programa de desintoxicación guiado por nutricionistas. Jugos, alimentación raw y talleres de cocina saludable.",
    price: "Consultar",
    duration: "3 días / 2 noches",
    tag: null,
  },
  {
    title: "Respiración Consciente & Breathwork",
    desc: "Técnicas avanzadas de respiración para liberar tensiones y expandir la capacidad vital.",
    price: "Consultar",
    duration: "2 días / 1 noche",
    tag: null,
  },
];

export default function ExperienciasPage() {
  return (
    <main className="min-h-screen bg-linen">
      {/* Hero */}
      <section className="relative flex h-[50vh] items-center justify-center bg-earth-900">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-earth-900/50 to-linen" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-linen">
          <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-amber-400">
            Catálogo
          </span>
          <h1 className="font-display text-display-2 md:text-display-1 mb-6">
            Experiencias
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-linen/70">
            Diseñadas para trascender lo ordinario. Cada experiencia es una
            invitación al viaje interior.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.title}
                className="group flex flex-col border border-taupe-200 bg-linen transition-all hover:shadow-elevated"
              >
                <div className="relative h-56 bg-taupe-100">
                  {exp.tag && (
                    <span className="absolute left-4 top-4 bg-forest-700 px-3 py-1 text-xs font-medium uppercase tracking-wide text-linen">
                      {exp.tag}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-2 text-xs uppercase tracking-wide text-taupe-600">
                    {exp.duration}
                  </span>
                  <h3 className="font-display text-heading-3 mb-3 text-forest-700">
                    {exp.title}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-earth-600">
                    {exp.desc}
                  </p>
                  <div className="flex items-center justify-between border-t border-taupe-200 pt-4">
                    <span className="font-display text-xl text-amber-600">
                      {exp.price}
                    </span>
                    <button className="text-sm font-medium uppercase tracking-wide text-forest-700 transition-colors hover:text-forest-900">
                      Ver detalles →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
