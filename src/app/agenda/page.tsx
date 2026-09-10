import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agenda | UNME",
  description:
    "Consulta la disponibilidad de experiencias y retiros en UNME.",
};

export default function AgendaPage() {
  return (
    <main className="min-h-screen bg-linen">
      {/* Hero */}
      <section className="relative flex h-[50vh] items-center justify-center bg-earth-900">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-earth-900/50 to-linen" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-linen">
          <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-amber-400">
            Planifica tu experiencia
          </span>
          <h1 className="font-display text-display-2 md:text-display-1 mb-6">
            Agenda
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-linen/70">
            Consulta disponibilidad y reserva tu próximo fin de semana de
            transformación.
          </p>
        </div>
      </section>

      {/* Availability */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-2xl border border-taupe-200 bg-linen p-8 text-center md:p-12">
          <span className="mb-3 block text-xs uppercase tracking-[0.3em] text-forest-700">
            Próximamente
          </span>
          <h2 className="font-display text-heading-2 text-forest-700">
            Estamos preparando nuevas experiencias
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-earth-600">
            Cuéntanos qué experiencia te interesa y te informaremos de las
            próximas fechas disponibles.
          </p>
        </div>
      </section>
    </main>
  );
}
