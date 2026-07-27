"use client";

import { motion } from "framer-motion";
import { Leaf, Moon, Sun, Wind, Heart, Sparkles } from "lucide-react";

const FEATURES = [
  {
    title: "Silencio Consciente",
    description: "Espacios diseñados para la introspección profunda y el reseteo mental lejos de las notificaciones.",
    icon: Moon,
  },
  {
    title: "Nutrición Orgánica",
    description: "Gastronomía basada en plantas, cosechada en nuestra propia finca y diseñada para revitalizarte.",
    icon: Leaf,
  },
  {
    title: "Despertar Solar",
    description: "Prácticas de yoga y meditación al amanecer, sincronizando tu ritmo circadiano con la naturaleza.",
    icon: Sun,
  },
  {
    title: "Respiración Guiada",
    description: "Sesiones de breathwork para liberar tensiones somáticas y expandir tu capacidad vital.",
    icon: Wind,
  },
  {
    title: "Comunidad Auténtica",
    description: "Conecta con personas afines en un entorno seguro, libre de juicios y lleno de empatía.",
    icon: Heart,
  },
  {
    title: "Terapias de Sonido",
    description: "Baños sonoros con cuencos de cuarzo y gongs para una afinación celular completa.",
    icon: Sparkles,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
};

export function Experience() {
  return (
    <section className="py-24 md:py-32 bg-sand-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-heading-2 md:text-heading-1 text-sage-900 mb-6">
            La Experiencia UNME
          </h2>
          <p className="text-sand-700 text-body font-elegant text-xl">
            Cada detalle ha sido cuidadosamente curado para facilitar tu viaje interior. 
            Combinamos sabiduría ancestral con comodidad contemporánea.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-subtle hover:shadow-soft transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-sage-50 text-sage-600 flex items-center justify-center mb-6 group-hover:bg-sage-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-display text-heading-3 text-sage-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-sand-600 text-body-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}