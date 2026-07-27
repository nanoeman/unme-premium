import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventos | UNME",
  description:
    "Próximos eventos exclusivos, galas, lanzamientos y masterclasses en UNME.",
};

const EVENTS = [
  {
    title: "Gala de Lanzamiento UNME 2026",
    date: "15 de Agosto, 2026",
    time: "18:00 - 23:00",
    type: "Gala",
    spots: 50,
    vip: true,
  },
  {
    title: "Masterclass: Breathwork Avanzado",
    date: "22 de Agosto, 2026",
    time: "10:00 - 14:00",
    type: "Masterclass",
    spots: 20,
    vip: false,
  },
  {
    title: "Concierto de Cuencos Tibetanos",
    date: "5 de Septiembre, 2026",
    time: "19:30 - 21:00",
    type: "Concierto",
    spots: 40,
    vip: false,
  },
  {
    title: "Retiro Corporativo: Liderazgo Consciente",
    date: "12-13 de Septiembre, 2026",
    time: "Fin de semana",
    type: "B2B",
    spots: 15,
    vip: true,
  },
];

export default function EventosPage() {
  return (
    <main className="min-h-screen bg-linen">
      {/* Hero */}
      <section className="relative flex h-[50vh] items-center justify-center bg-earth-900">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-earth-900/50 to-linen" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-linen">
          <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-amber-400">
            Calendario
          </span>
          <h1 className="font-display text-display-2 md:text-display-1 mb-6">
            Eventos
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-linen/70">
            Experiencias exclusivas, masterclasses y encuentros diseñados para
            transformar.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-6">
            {EVENTS.map((event) => (
              <div
                key={event.title}
                className="flex flex-col gap-6 border border-taupe-200 bg-linen p-8 transition-all hover:shadow-soft md:flex-row md:items-center"
              >
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="bg-taupe-100 px-3 py-1 text-xs uppercase tracking-wide text-taupe-700">
                      {event.type}
                    </span>
                    {event.vip && (
                      <span className="bg-amber-100 px-3 py-1 text-xs uppercase tracking-wide text-amber-700">
                        VIP
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-heading-3 text-forest-700">
                    {event.title}
                  </h3>
                  <p className="mt-1 text-sm text-earth-500">
                    {event.date} · {event.time}
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <span className="block text-sm text-earth-500">
                      Plazas
                    </span>
                    <span className="font-display text-lg text-forest-700">
                      {event.spots}
                    </span>
                  </div>
                  <button className="bg-forest-700 px-6 py-3 text-sm font-medium uppercase tracking-wide text-linen transition-colors hover:bg-forest-800">
                    Solicitar invitación
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
