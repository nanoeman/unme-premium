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
  MessageCircle,
  Mail,
  Phone,
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

const TESTIMONIALS = [
  {
    text: "Una experiencia transformadora. El entorno, la comida y las sesiones de yoga me ayudaron a resetear por completo.",
    author: "María, Madrid",
    rating: 5,
  },
  {
    text: "Nunca había desconectado tanto del ruido diario. Los tipis son increíbles y la atención, impecable.",
    author: "Carlos, Barcelona",
    rating: 5,
  },
  {
    text: "Volví con otra energía. El baño de sonido fue lo más potente que he vivido en un retiro.",
    author: "Laura, Valencia",
    rating: 5,
  },
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
            <span>Retiros de Yoga y Bienestar en Aragón — Zaragoza</span>
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
              href="/reserva"
              className="group flex w-full items-center justify-center gap-3 bg-forest-700 px-8 py-4 text-sm font-medium text-linen transition-all hover:bg-forest-800 sm:w-auto"
            >
              <span>Reserva tu experiencia</span>
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

      {/* ================= TESTIMONIALS ================= */}
      <section className="border-y border-taupe-200 bg-linen-50 py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="mb-2 block text-xs uppercase tracking-widest text-forest-700">
              Testimonios
            </span>
            <h2 className="font-display text-heading-1 text-forest-700">
              Lo que dicen quienes ya han venido
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="flex flex-col items-start border border-taupe-200 bg-linen p-8"
              >
                <div className="mb-4 flex gap-1 text-amber-500">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mb-6 text-sm text-earth-700">&ldquo;{t.text}&rdquo;</p>
                <p className="text-xs font-medium uppercase tracking-wide text-forest-700">
                  {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
          {/* ================= CTA ================= */}
      <section className="bg-earth-900 py-24 px-6">
        <div className="mx-auto max-w-4xl text-center text-linen">
          <h2 className="font-display text-heading-1 mb-6">
            ¿Listo para transformar tu fin de semana?
          </h2>
          <p className="mb-10 text-lg text-linen/70">
            Solo fines de semana. Solo exclusividad. Tu experiencia te espera.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/reserva"
              className="inline-block bg-amber-500 px-10 py-4 text-sm font-medium uppercase tracking-wide text-linen transition-colors hover:bg-amber-600"
            >
              Reservar ahora
            </Link>
            <Link
              href="/contacto"
              className="inline-block border border-linen/30 px-10 py-4 text-sm font-medium text-linen transition-colors hover:bg-linen/10"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-taupe-200 bg-linen px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-4">
            {/* Columna 1: Branding */}
            <div>
              <h3 className="font-display text-heading-3 mb-4 text-forest-700">
                UNME Experience
              </h3>
              <p className="mb-4 text-sm text-earth-600">
                Retiros exclusivos de yoga y bienestar en Pinseque, Zaragoza.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-earth-500 transition-colors hover:text-forest-700"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Link>
                {/* Añade más redes si las tienes */}
              </div>
            </div>

            {/* Columna 2: Enlaces rápidos */}
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-forest-700">
                Experiencias
              </h4>
              <ul className="space-y-2 text-sm text-earth-600">
                <li>
                  <Link href="/experiencias" className="hover:text-forest-700">
                    Todas las experiencias
                  </Link>
                </li>
                <li>
                  <Link href="/reserva" className="hover:text-forest-700">
                    Reservar
                  </Link>
                </li>
                <li>
                  <Link href="/eventos" className="hover:text-forest-700">
                    Eventos
                  </Link>
                </li>
                <li>
                  <Link href="/empresas" className="hover:text-forest-700">
                    Empresas
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 3: Información */}
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-forest-700">
                Información
              </h4>
              <ul className="space-y-2 text-sm text-earth-600">
                <li>
                  <Link href="/quienes-somos" className="hover:text-forest-700">
                    Quiénes somos
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-forest-700">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-forest-700">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="hover:text-forest-700">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 4: Contacto */}
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-forest-700">
                Contacto
              </h4>
              <ul className="space-y-2 text-sm text-earth-600">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:unmezgz@gmail.com" className="hover:text-forest-700">
                    unmezgz@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+34609371555" className="hover:text-forest-700">
                    +34 609 371 555
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Compass className="h-4 w-4 mt-0.5" />
                  <span>Pinseque, Zaragoza, España</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Línea divisoria */}
          <div className="mt-12 border-t border-taupe-200 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 text-xs text-earth-500 md:flex-row">
              <p>
                &copy; {new Date().getFullYear()} UNME Experience. Todos los derechos reservados.
              </p>
              <div className="flex gap-6">
                <Link href="/terminos" className="hover:text-forest-700">
                  Términos y condiciones
                </Link>
                <Link href="/privacidad" className="hover:text-forest-700">
                  Política de privacidad
                </Link>
                <Link href="/cookies" className="hover:text-forest-700">
                  Política de cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ================= WHATSAPP FLOTANTE ================= */}
      <Link
        href="https://wa.me/34609371555?text=Hola,%20quiero%20info%20sobre%20retiros%20UNME"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-medium text-white shadow-lg transition-all hover:bg-green-600 hover:scale-105"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </Link>
    </div>
  );
}
