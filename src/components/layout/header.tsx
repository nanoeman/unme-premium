import Link from "next/link";

const navLinks = [
  { href: "/experiencias", label: "Experiencias" },
  { href: "/eventos", label: "Eventos" },
  { href: "/agenda", label: "Agenda" },
  { href: "/blog", label: "Blog" },
  { href: "/galeria", label: "Galería" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-2xl tracking-wider text-linen uppercase"
        >
          UNME
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-linen/70 transition-colors hover:text-linen uppercase"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/area-privada"
            className="bg-amber-500 px-6 py-2.5 text-sm font-medium text-linen transition-all hover:bg-amber-600 uppercase tracking-wide"
          >
            Reservar
          </Link>
        </nav>
      </div>
    </header>
  );
}
