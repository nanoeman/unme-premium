import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | UNME",
  description:
    "Artículos de estilo de vida, tendencias wellness, guías exclusivas y entrevistas a expertos.",
};

const POSTS = [
  {
    title: "El poder del silencio: por qué la desconexión digital es el nuevo lujo",
    excerpt:
      "En un mundo donde estar ocupado es sinónimo de éxito, aprender a hacer pausa se convierte en la habilidad más valiosa.",
    category: "Bienestar",
    date: "10 Jul 2026",
    readTime: "5 min",
  },
  {
    title: "Glamping vs Hotel: por qué los viajeros premium eligen la naturaleza",
    excerpt:
      "El sector hospitality está viviendo una revolución silenciosa. Los datos no mienten: el glamping premium crece un 13.9% anual.",
    category: "Tendencias",
    date: "5 Jul 2026",
    readTime: "7 min",
  },
  {
    title: "Breathwork 101: la técnica de respiración que cambiará tu vida",
    excerpt:
      "Desde Wim Hof hasta las técnicas ancestrales tibetanas, descubre cómo la respiración consciente puede transformar tu estado mental.",
    category: "Guía",
    date: "28 Jun 2026",
    readTime: "8 min",
  },
  {
    title: "Entrevista: María López, pionera del yoga terapéutico en España",
    excerpt:
      "Conversamos con una de las maestras más respetadas del panorama nacional sobre el futuro del bienestar holístico.",
    category: "Entrevista",
    date: "20 Jun 2026",
    readTime: "10 min",
  },
  {
    title: "Nutrición consciente: alimentar el cuerpo, nutrir el alma",
    excerpt:
      "No se trata solo de comer sano. Se trata de entender la relación entre lo que consumes y cómo te sientes.",
    category: "Nutrición",
    date: "15 Jun 2026",
    readTime: "6 min",
  },
  {
    title: "Aragón, destino wellness emergente: el informe completo",
    excerpt:
      "Análisis de por qué Aragón está posicionándose como el nuevo hub de bienestar del norte de España.",
    category: "Destinos",
    date: "8 Jun 2026",
    readTime: "12 min",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-linen">
      {/* Hero */}
      <section className="relative flex h-[40vh] items-center justify-center bg-earth-900">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-earth-900/50 to-linen" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-linen">
          <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-amber-400">
            Centro de conocimiento
          </span>
          <h1 className="font-display text-display-2 md:text-display-1 mb-6">
            Blog
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-linen/70">
            Artículos, guías y entrevistas para tu viaje de transformación.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          {/* Search */}
          <div className="mb-12">
            <input
              type="text"
              placeholder="Buscar artículos..."
              className="w-full max-w-xl border border-taupe-300 bg-linen p-4 text-earth-800 focus:border-forest-700 focus:outline-none"
            />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((post) => (
              <article
                key={post.title}
                className="group flex flex-col border border-taupe-200 bg-linen transition-all hover:shadow-elevated"
              >
                <div className="relative h-48 bg-taupe-100" />
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-wide text-taupe-500">
                    <span className="text-forest-700">{post.category}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-heading-3 mb-3 text-forest-700 group-hover:text-forest-900">
                    {post.title}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-earth-600">
                    {post.excerpt}
                  </p>
                  <span className="text-sm font-medium uppercase tracking-wide text-forest-700">
                    Leer más →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
