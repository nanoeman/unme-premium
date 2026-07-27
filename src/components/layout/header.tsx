"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User } from "lucide-react";

const navLinks = [
  { href: "/experiencias", label: "Experiencias" },
  { href: "/eventos", label: "Eventos" },
  { href: "/agenda", label: "Agenda" },
  { href: "/blog", label: "Blog" },
  { href: "/galeria", label: "Galería" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-earth-900/90 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
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

          {session?.user ? (
            <div className="flex items-center gap-4">
              <Link
                href="/area-privada"
                className="flex items-center gap-2 text-sm tracking-wide text-amber-400 hover:text-amber-300"
              >
                <User className="h-4 w-4" />
                <span className="uppercase">
                  {session.user.name || session.user.email}
                </span>
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="text-sm tracking-wide text-linen/50 transition-colors hover:text-linen uppercase"
              >
                Salir
              </button>
            </div>
          ) : (
            <Link
              href="/area-privada"
              className="bg-amber-500 px-6 py-2.5 text-sm font-medium text-linen transition-all hover:bg-amber-600 uppercase tracking-wide"
            >
              Reservar
            </Link>
          )}
        </nav>

        <button
          className="text-linen md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-earth-900 md:hidden"
          >
            <nav className="flex flex-col gap-4 px-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-linen/70 transition-colors hover:text-linen uppercase tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {session?.user ? (
                <>
                  <Link
                    href="/area-privada"
                    className="text-amber-400 uppercase tracking-wide"
                    onClick={() => setIsOpen(false)}
                  >
                    Mi cuenta
                  </Link>
                  <button
                    onClick={() => {
                      signOut({ callbackUrl: "/" });
                      setIsOpen(false);
                    }}
                    className="text-left text-linen/50 uppercase tracking-wide"
                  >
                    Cerrar sesión
                  </button>
                </>
              ) : (
                <Link
                  href="/area-privada"
                  className="mt-2 bg-amber-500 px-6 py-3 text-center text-sm font-medium text-linen uppercase tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  Reservar
                </Link>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
