"use client";

import { useState } from "react";
import { Metadata } from "next";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ | UNME",
  description:
    "Preguntas frecuentes sobre reservas, pagos, políticas de cancelación y acceso.",
};

const FAQS = [
  {
    category: "Reservas",
    questions: [
      {
        q: "¿Cómo puedo hacer una reserva?",
        a: "Puedes reservar directamente a través de nuestro formulario web en la sección 'Reserva'. El proceso es multipaso: seleccionas experiencia, fecha, número de personas y completas el pago seguro vía Stripe o PayPal.",
      },
      {
        q: "¿Cuál es el número mínimo de personas?",
        a: "La mayoría de nuestras experiencias están diseñadas para grupos. El mínimo es 1 persona para retiros individuales y 8 personas para eventos B2B corporativos.",
      },
      {
        q: "¿Puedo reservar para un grupo grande?",
        a: "Sí, contamos con infraestructura para hasta 120 personas. Para grupos superiores a 20 personas, contáctanos directamente para un presupuesto personalizado.",
      },
    ],
  },
  {
    category: "Pagos",
    questions: [
      {
        q: "¿Qué métodos de pago aceptan?",
        a: "Aceptamos tarjetas de crédito/débito (Stripe), PayPal y transferencia bancaria para reservas B2B. Todas las transacciones son seguras y encriptadas.",
      },
      {
        q: "¿Puedo pagar en cuotas?",
        a: "Sí, ofrecemos financiación en 3, 6 o 12 meses sin intereses para reservas superiores a €500. Elige la opción al finalizar tu reserva.",
      },
    ],
  },
  {
    category: "Políticas",
    questions: [
      {
        q: "¿Cuál es la política de cancelación?",
        a: "Cancelación gratuita hasta 30 días antes del evento. Entre 30 y 7 días, se retiene el 50% del depósito. Menos de 7 días, no hay reembolso pero puedes transferir tu reserva a otra fecha.",
      },
      {
        q: "¿Qué pasa si llueve?",
        a: "Nuestras instalaciones están preparadas para todo tipo de climatología. En caso de alerta meteorológica severa, reprogramamos el evento sin coste adicional.",
      },
    ],
  },
  {
    category: "Experiencia",
    questions: [
      {
        q: "¿Necesito experiencia previa en yoga o meditación?",
        a: "No es necesaria experiencia previa. Nuestros facilitadores adaptan cada sesión al nivel del grupo, desde principiantes hasta practicantes avanzados.",
      },
      {
        q: "¿Está incluida la alimentación?",
        a: "Sí, todas nuestras experiencias incluyen gastronomía saludable basada en plantas, preparada por nuestro equipo de nutricionistas y chefs.",
      },
    ],
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-taupe-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="font-display text-lg text-forest-700">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-taupe-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 leading-relaxed text-earth-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-linen">
      {/* Hero */}
      <section className="relative flex h-[40vh] items-center justify-center bg-earth-900">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-earth-900/50 to-linen" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-linen">
          <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-amber-400">
            Centro de ayuda
          </span>
          <h1 className="font-display text-display-2 md:text-display-1 mb-6">
            Preguntas frecuentes
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-linen/70">
            Todo lo que necesitas saber antes de tu experiencia UNME.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <input
              type="text"
              placeholder="Buscar preguntas..."
              className="w-full border border-taupe-300 bg-linen p-4 text-earth-800 focus:border-forest-700 focus:outline-none"
            />
          </div>

          {FAQS.map((section) => (
            <div key={section.category} className="mb-12">
              <h2 className="font-display text-heading-2 mb-6 text-forest-700">
                {section.category}
              </h2>
              <div className="border-t border-taupe-200">
                {section.questions.map((faq) => (
                  <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
