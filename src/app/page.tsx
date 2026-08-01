import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Compass,
  Heart,
  ShieldCheck,
  Leaf,
  Moon,
  Sun,
  Wind,
  Calendar,
  Users,
  Star,
} from "lucide-react";

const FEATURES = [
  {
    title: "Silencio Consciente",
    desc: "Espacios diseñados para la introspección profunda y el reseteo mental lejos de las notificaciones.",
    icon: Moon,
  },
  {
    title: "Nutrición Orgánica",
    desc: "Gastronomía basada en plantas, cosechada en nuestra propia finca y diseñada para revitalizarte.",
    icon: Leaf,
  },
  {
    title: "Despertar Solar",
    desc: "Prácticas de yoga y meditación al amanecer, sincronizando tu ritmo circadiano con la naturaleza.",
    icon: Sun,
  },
  {
    title: "Respiración Guiada",
    desc: "Sesiones de breathwork para liberar tensiones somáticas y expandir tu capacidad vital.",
    icon: Wind,
  },
  {
    title: "Comunidad Auténtica",
    desc: "Conecta con personas afines en un entorno seguro, libre de juicios y lleno de empatía.",
    icon: Heart,
  },
  {
    title: "Terapias de Sonido",
    desc: "Baños sonoros con cuencos de cuarzo y gongs para una afinación celular completa.",
    icon: Sparkles,
  },
];

const STATS = [
  { value: "€1.53M", label: "Proyección año 5" },
  { value: "85%", label: "Ocupación objetivo" },
  { value: "42", label: "Eventos/año" },
  { value: "345%", label: "ROI a 5 años" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-linen">
      {/* ================= HERO ================= */}
      <section className="relative flex h-screen min-h-[700px] items-center justify-center overflow-hidden bg-earth-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-taupe-800" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-earth-900/30 to-transparent z-10" />

        <div className="relative z-20 mx-auto max-w-5xl px-6 text-center text-linen mt-16">
          <div className="mb-6 inline-flex items-center gap-2 border border-linen/20 bg-linen/10 px-4 py-1.5 text-xs uppercase tracking-widest text-amber-400 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Centro de Bienestar Premium — Zaragoza</span>
          </div>

          <h1 className="font-display text-display-1 md:text-display-1 mb-6 tracking-tight">
            El lujo del silencio,
            <br />
            <span className="font-light italic text-amber-400">
              el despertar del ser.
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-linen/70">
            Experiencias inmersivas de bienestar profundo en enclaves naturales
            exclusivos. Diseñadas para trascender lo ordinario.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/experiencias"
              className="group flex w-full items-center justify-center gap-3 bg-forest-700 px-8 py-4 text-sm font-medium text-linen transition-all hover:bg-forest-800 sm:w-auto"
            >
              <span>Explorar Experiencias</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/quienes-somos"
              className="w-full border border-linen/30 bg-linen/10 px-8 py-4 text-sm font-medium text-linen backdrop-blur-md transition-all hover:bg-linen/20 sm:w-auto"
            >
              Conoce UNME
            </Link>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="border-b border-taupe-200 bg-linen-100 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-big-number text-amber-600">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm uppercase tracking-wide text-taupe-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PILARES ================= */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="mb-2 block text-xs uppercase tracking-widest text-forest-700">
              Pilares
            </span>
            <h2 className="font-display text-heading-1 text-forest-700">
              La experiencia UNME
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-start border border-taupe-200 bg-linen p-8 transition-all hover:shadow-soft">
              <div className="mb-6 flex h-12 w-12 items-center justify-center bg-forest-100 text-forest-700">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="font-display text-heading-3 mb-3 text-forest-700">
                Ubicaciones Sagradas
              </h3>
              <p className="text-sm text-earth-600">
                Espacios arquitectónicos integrados en entornos naturales
                vírgenes, seleccionados por su alta vibración y aislamiento.
              </p>
            </div>

            <div className="flex flex-col items-start border border-taupe-200 bg-linen p-8 transition-all hover:shadow-soft">
              <div className="mb-6 flex h-12 w-12 items-center justify-center bg-amber-100 text-amber-700">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-display text-heading-3 mb-3 text-forest-700">
                Facilitadores Maestros
              </h3>
              <p className="text-sm text-earth-600">
                Guías de renombre internacional en meditación, medicina
                integrativa, respiración consciente y desarrollo holístico.
              </p>
            </div>

            <div className="flex flex-col items-start border border-taupe-200 bg-linen p-8 transition-all hover:shadow-soft">
              <div className="mb-6 flex h-12 w-12 items-center justify-center bg-taupe-100 text-taupe-700">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-display text-heading-3 mb-3 text-forest-700">
                Privacidad Absoluta
              </h3>
              <p className="text-sm text-earth-600">
                Grupos reducidos, atención personalizada al detalle y un entorno
                seguro para la introspección y el descanso real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCES GRID ================= */}
      <section className="border-y border-taupe-200 bg-linen-100 py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col items-end justify-between md:flex-row md:items-end">
            <div>
              <span className="mb-2 block text-xs uppercase tracking-widest text-forest-700">
                Catálogo
              </span>
              <h2 className="font-display text-heading-1 text-forest-700">
                Experiencias destacadas
              </h2>
            </div>
            <Link
              href="/experiencias"
              className="mt-4 flex items-center gap-2 text-sm font-medium text-forest-700 transition-colors hover:text-forest-900 md:mt-0"
            >
              <span>Ver todas</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Retiro de Yoga & Meditación",
                price: "Consultar",
                tag: "Más popular",
              },
              {
                title: "Sound Healing Retreat",
                price: "Consultar",
                tag: "Nuevo",
              },
              {
                title: "Corporate Wellness B2B",
                price: "Consultar",
                tag: "B2B",
              },
            ].map((exp) => (
              <div
                key={exp.title}
                className="group flex flex-col overflow-hidden border border-taupe-200 bg-linen transition-all hover:shadow-elevated"
              >
                <div className="relative h-64 bg-taupe-100">
                  <span className="absolute right-4 top-4 bg-forest-700 px-3 py-1 text-xs font-medium uppercase tracking-wide text-linen">
                    {exp.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-heading-3 text-forest-700">
                    {exp.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between border-t border-taupe-200 pt-4">
                    <span className="font-display text-lg text-amber-600">
                      {exp.price}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-wide text-forest-700">
                      Ver detalles →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="font-display text-heading-1 text-forest-700">
              Cada detalle cuenta
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-earth-600">
              Combinamos sabiduría ancestral con comodidad contemporánea.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="border border-taupe-200 bg-linen p-8 transition-all hover:shadow-soft"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center bg-forest-50 text-forest-600">
                    <Icon className="h-6 w-6 stroke-[1.5]" />
                  </div>
                  <h3 className="font-display text-heading-3 text-forest-700">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm text-earth-600">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-forest-700 py-24 px-6">
        <div className="mx-auto max-w-4xl text-center text-linen">
          <h2 className="font-display text-heading-1 mb-6">
            ¿Listo para transformar tu fin de semana?
          </h2>
          <p className="mb-10 text-lg text-linen/70">
            Solo fines de semana. Solo exclusividad. Tu experiencia te espera.
          </p>
          <Link
            href="/reserva"
            className="inline-block bg-amber-500 px-10 py-4 text-sm font-medium uppercase tracking-wide text-linen transition-colors hover:bg-amber-600"
          >
            Reservar ahora
          </Link>
        </div>
      </section>
    </div>
  );
}
