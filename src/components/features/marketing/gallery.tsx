"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Imágenes de prueba. En producción vendrían del CMS o de un bucket de S3/Cloudinary.
const IMAGES = [
  { id: 1, src: "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { id: 2, src: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=800&auto=format&fit=crop", aspect: "aspect-square" },
  { id: 3, src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop", aspect: "aspect-video" },
  { id: 4, src: "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[4/5]" },
  { id: 5, src: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=800&auto=format&fit=crop", aspect: "aspect-square" },
  { id: 6, src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[3/4]" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-terracotta font-medium tracking-widest uppercase text-sm mb-4 block">
              Nuestro Espacio
            </span>
            <h2 className="font-display text-heading-2 text-sage-900">
              Un vistazo al refugio
            </h2>
          </div>
          <p className="text-sand-600 max-w-md text-body-sm">
            Diseño orgánico, materiales nobles y una integración absoluta con el entorno natural.
          </p>
        </div>

        {/* CSS Columns para Masonry Layout real */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {IMAGES.map((img) => (
            <motion.div
              key={img.id}
              whileHover={{ y: -4 }}
              className={`relative w-full overflow-hidden rounded-2xl cursor-zoom-in break-inside-avoid ${img.aspect} group`}
              onClick={() => setSelectedImage(img.src)}
            >
              <Image
                src={img.src}
                alt="Instalaciones del retiro UNME"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-sage-900/0 group-hover:bg-sage-900/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-sand-900/95 backdrop-blur-sm p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-sand-50 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-md transition-all"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="Cerrar galería"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full max-w-5xl max-h-[85vh] rounded-xl overflow-hidden shadow-premium"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Vista ampliada"
                fill
                className="object-contain bg-black/20"
                sizes="100vw"
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}