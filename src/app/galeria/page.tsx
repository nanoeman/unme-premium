"use client";

import { useState } from "react";
import { Metadata } from "next";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export const metadata: Metadata = {
  title: "Galería | UNME",
  description:
    "Portafolio visual de alta definición. Descubre UNME en imágenes.",
};

const IMAGES = [
  { id: 1, src: "/gallery/1.jpg", caption: "Tiendas Glamping Premium", aspect: "aspect-[3/4]" },
  { id: 2, src: "/gallery/2.jpg", caption: "Bosque terapéutico", aspect: "aspect-square" },
  { id: 3, src: "/gallery/3.jpg", caption: "Yoga al amanecer", aspect: "aspect-video" },
  { id: 4, src: "/gallery/4.jpg", caption: "Zona Chill Out", aspect: "aspect-[4/5]" },
  { id: 5, src: "/gallery/5.jpg", caption: "Restauración saludable", aspect: "aspect-square" },
  { id: 6, src: "/gallery/6.jpg", caption: "Escenario profesional", aspect: "aspect-[3/4]" },
  { id: 7, src: "/gallery/7.jpg", caption: "Meditación guiada", aspect: "aspect-video" },
  { id: 8, src: "/gallery/8.jpg", caption: "Atardecer en la finca", aspect: "aspect-[4/5]" },
  { id: 9, src: "/gallery/9.jpg", caption: "Baño sonoro", aspect: "aspect-square" },
];

export default function GaleriaPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-linen">
      {/* Hero */}
      <section className="relative flex h-[40vh] items-center justify-center bg-earth-900">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-earth-900/50 to-linen" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-linen">
          <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-amber-400">
            Visual
          </span>
          <h1 className="font-display text-display-2 md:text-display-1 mb-6">
            Galería
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-linen/70">
            UNME en imágenes. Cada fotografía cuenta una historia de
            transformación.
          </p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
            {IMAGES.map((img) => (
              <motion.div
                key={img.id}
                whileHover={{ y: -4 }}
                className={`relative w-full overflow-hidden cursor-pointer break-inside-avoid ${img.aspect}`}
                onClick={() => setSelected(img.id)}
              >
                <div className="absolute inset-0 bg-taupe-200" />
                <div className="absolute inset-0 flex items-center justify-center bg-taupe-100">
                  <span className="font-display text-4xl text-taupe-300">
                    {img.id}
                  </span>
                </div>
                <div className="absolute inset-0 bg-earth-900/0 transition-colors hover:bg-earth-900/20" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-earth-900/80 to-transparent p-4 opacity-0 transition-opacity hover:opacity-100">
                  <p className="text-sm text-linen">{img.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-earth-900/95 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute right-6 top-6 text-linen/70 hover:text-linen"
              onClick={() => setSelected(null)}
              aria-label="Cerrar"
            >
              <X className="h-8 w-8" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative aspect-video w-full max-w-5xl bg-taupe-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex h-full items-center justify-center">
                <span className="font-display text-6xl text-taupe-600">
                  {selected}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
