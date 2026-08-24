import Link from "next/link";

const footerLinks = {
  experiencia: [
    { href: "/experiencias", label: "Yoga & Meditación" },
    { href: "/experiencias", label: "Glamping Premium" },
    { href: "/experiencias", label: "Gastronomía" },
    { href: "/experiencias", label: "Espacios" },
  ],
  partners: [
    { href: "#", label: "Escuelas de Yoga" },
    { href: "#", label: "Coaches & Terapeutas" },
    { href: "#", label: "Empresas" },
    { href: "#", label: "Organizadores" },
  ],
  contacto: [
    { href: "mailto:unmezgz@gmail.com", label: "unmezgz@gmail.com", external: true },
    { href: "tel:+34609371555", label: "+34 609 371 555", external: true },
    { href: "https://instagram.com/unme.experience", label: "Instagram", external: true },
    { href: "#", label: "LinkedIn", external: true },
  ],
  legal: [
    { href: "/terminos", label: "Términos y Condiciones" },
    { href: "/privacidad", label: "Política de Privacidad" },
    { href: "/cookies", label: "Política de Cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-earth-900 py-16 text-linen/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="mb-4 font-display text-3xl tracking-wider text-linen uppercase">
              UNME
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Ultimate Natural Meditation Experience. La naturaleza como herramienta de transformación personal.
            </p>
            <p className="text-sm text-linen/40">
              Camino Molino del Rey, 112<br />
              Pinseque, Zaragoza
            </p>
          </div>

          {/* Experiencia */}
          <div>
            <h4 className="mb-4 text-sm font-medium tracking-wide text-linen uppercase">
              Experiencia
            </h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.experiencia.map((link) => (
                <li key={link.label}>
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

          {/* Partners */}
          <div>
            <h4 className="mb-4 text-sm font-medium tracking-wide text-linen uppercase">
              Partners
            </h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.partners.map((link) => (
                <li key={link.label}>
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

          {/* Contacto */}
          <div>
            <h4 className="mb-4 text-sm font-medium tracking-wide text-linen uppercase">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.contacto.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-amber-400"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-amber-400"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal + Bottom */}
        <div className="mt-12 border-t border-linen/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 text-xs">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-amber-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="text-center text-xs">
              © {new Date().getFullYear()} UNME — Ultimate Natural Meditation Experience. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}