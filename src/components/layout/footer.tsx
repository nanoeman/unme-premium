import Link from "next/link";

const footerLinks = {
  experiencias: [
    { href: "/experiencias", label: "Retiros" },
    { href: "/experiencias", label: "Glamping" },
    { href: "/eventos", label: "Eventos" },
    { href: "/agenda", label: "Agenda" },
  ],
  empresa: [
    { href: "/quienes-somos", label: "Quiénes somos" },
    { href: "/empresas", label: "Empresas colaboradoras" },
    { href: "/blog", label: "Blog" },
    { href: "/galeria", label: "Galería" },
  ],
  soporte: [
    { href: "/faq", label: "Preguntas frecuentes" },
    { href: "/contacto", label: "Contacto" },
    { href: "/area-privada", label: "Área privada" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-earth-900 py-16 text-linen/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 font-display text-3xl tracking-wider text-linen uppercase">
              UNME
            </h3>
            <p className="text-sm leading-relaxed">
              Ultimate Natural Meditation Experience. Centro de bienestar premium
              en Zaragoza. La naturaleza como herramienta de transformación
              personal.
            </p>
          </div>

          {/* Experiencias */}
          <div>
            <h4 className="mb-4 text-sm font-medium tracking-wide text-linen uppercase">
              Experiencias
            </h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.experiencias.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-amber-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="mb-4 text-sm font-medium tracking-wide text-linen uppercase">
              Empresa
            </h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.empresa.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-amber-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h4 className="mb-4 text-sm font-medium tracking-wide text-linen uppercase">
              Soporte
            </h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.soporte.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-amber-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-linen/10 pt-8 text-center text-xs">
          <p>
            © {new Date().getFullYear()} UNME Experience. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
