'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/retiros', label: 'Retiros' },
  { href: '/tienda', label: 'Tienda' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-stone-200 bg-white/80 backdrop-blur-md">
      <div className="unme-container flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-2xl font-semibold tracking-tight text-stone-900">
          UNME
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-sage-700"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="rounded-full bg-sage-700 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-sage-800"
          >
            Mi cuenta
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-stone-100 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-stone-700"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-sage-700 px-4 py-2.5 text-center text-sm font-medium text-white"
            >
              Mi cuenta
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}