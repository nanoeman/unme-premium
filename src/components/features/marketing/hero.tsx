"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Efecto parallax: la imagen se mueve a un 50% de la velocidad del scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden bg-sand-900 flex items-center justify-center"
    >
      <motion.div 
        style={{ y, opacity }} 
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=2500&auto=format&fit=crop"
          alt="Retiro espiritual UNME en la naturaleza"
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        {/* Gradiente sutil para legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sand-900/20 to-sand-50" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center text-sand-50 flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="uppercase tracking-[0.2em] text-sm md:text-base font-medium text-gold-light mb-6"
        >
          Bienvenido a tu santuario
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-display-2 md:text-display-1 font-medium mb-8 max-w-4xl"
        >
          Desconecta del ruido. <br className="hidden md:block" />
          <span className="italic text-sand-200">Reconecta contigo.</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            href="/retiros"
            className="inline-block bg-sand-50 text-sage-900 px-8 py-4 rounded-full text-base font-medium hover:bg-white transition-all hover:shadow-elevated hover:-translate-y-1"
          >
            Descubrir Experiencias
          </Link>
        </motion.div>
      </div>
    </section>
  );
}