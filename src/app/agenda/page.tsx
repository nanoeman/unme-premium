import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agenda | UNME",
  description:
    "Calendario interactivo con disponibilidad en tiempo real para reservas y eventos.",
};

const MONTHS = [
  "Agosto 2026",
  "Septiembre 2026",
  "Octubre 2026",
];

const SCHEDULE = [
  { date: "15-16 Ago", event: "Gala de Lanzamiento", status: "disponible" },
  { date: "22-23 Ago", event: "Masterclass Breathwork", status: "disponible" },
  { date: "29-30 Ago", event: "Retiro de Yoga", status: "ocupado" },
  { date: "5-6 Sep", event: "Concierto Cuencos", status: "disponible" },
  { date: "12-13 Sep", event: "Corporate Wellness", status: "disponible" },
  { date: "19-20 Sep", event: "Detox & Nutrición", status: "disponible" },
  { date: "26-27 Sep", event: "Sound Healing", status: "ocupado" },
  { date: "3-4 Oct", event: "Respiración Consciente", status: "disponible" },
];

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

      {/* Calendar Grid */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          {MONTHS.map((month) => (
            <div key={month} className="mb-12">
              <h2 className="font-display text-heading-2 mb-6 text-forest-700">
                {month}
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {SCHEDULE.filter((_, i) => {
                  const idx = MONTHS.indexOf(month);
                  return i >= idx * 3 && i < (idx + 1) * 3;
                }).map((item) => (
                  <div
                    key={item.date}
                    className={`border p-6 transition-all hover:shadow-soft ${
                      item.status === "ocupado"
                        ? "border-taupe-200 bg-taupe-50 opacity-60"
                        : "border-taupe-200 bg-linen"
                    }`}
                  >
                    <span className="text-xs uppercase tracking-wide text-taupe-600">
                      {item.date}
                    </span>
                    <h3 className="mt-2 font-display text-heading-3 text-forest-700">
                      {item.event}
                    </h3>
                    <span
                      className={`mt-3 inline-block px-2 py-1 text-xs uppercase tracking-wide ${
                        item.status === "disponible"
                          ? "bg-forest-100 text-forest-700"
                          : "bg-taupe-200 text-taupe-700"
                      }`}
                    >
                      {item.status === "disponible"
                        ? "Disponible"
                        : "Completo"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
