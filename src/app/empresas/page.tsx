import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empresas Colaboradoras | UNME",
  description:
    "Nuestras alianzas B2B con marcas de prestigio internacional en el sector wellness.",
};

const PARTNERS = [
  { name: "Manduka Spain", category: "Equipamiento Yoga" },
  { name: "LUSH Wellness", category: "Cosmética Natural" },
  { name: "Sonos Retreats", category: "Sonoterapia" },
  { name: "EcoGlamping EU", category: "Infraestructura" },
  { name: "NutriVida Pro", category: "Nutrición" },
  { name: "Aragón Turismo", category: "Promoción" },
];

const BENEFITS = [
  "Acceso exclusivo a instalaciones para eventos corporativos",
  "Descuentos preferenciales en alquiler de finca",
  "Co-branding en materiales de comunicación",
  "Networking con otros partners del ecosistema wellness",
  "Prioridad en reservas de fines de semana",
  "Acceso al área B2B con métricas y reportes",
];

export default function EmpresasPage() {
  return (
    <main className="min-h-screen bg-linen">
      {/* Hero */}
      <section className="relative flex h-[50vh] items-center justify-center bg-earth-900">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-earth-900/50 to-linen" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-linen">
          <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-amber-400">
            Alianzas estratégicas
          </span>
          <h1 className="font-display text-display-2 md:text-display-1 mb-6">
            Empresas Colaboradoras
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-linen/70">
            Juntos construimos el ecosistema wellness más completo de Aragón.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-heading-1 mb-12 text-center text-forest-700">
            Nuestros partners
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center border border-taupe-200 bg-linen p-8 text-center transition-all hover:shadow-soft"
              >
                <div className="mb-4 flex h-20 w-20 items-center justify-center bg-taupe-100 text-taupe-600">
                  <span className="font-display text-2xl">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-display text-heading-3 text-forest-700">
                  {partner.name}
                </h3>
                <span className="mt-1 text-sm text-taupe-600">
                  {partner.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-linen-100 py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-heading-1 mb-12 text-center text-forest-700">
            Beneficios para colaboradores
          </h2>
          <div className="space-y-4">
            {BENEFITS.map((benefit, i) => (
              <div
                key={i}
                className="flex items-start gap-4 border-l-2 border-amber-500 bg-linen p-6"
              >
                <span className="font-display text-2xl text-amber-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg text-earth-700">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/contacto"
              className="inline-block bg-forest-700 px-8 py-4 text-sm font-medium uppercase tracking-wide text-linen transition-colors hover:bg-forest-800"
            >
              Conviértete en partner
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
