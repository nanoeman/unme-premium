"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    category: "Reservas",
    questions: [
      {
        q: "¿Cómo puedo hacer una reserva?",
        a: "Puedes reservar directamente a través de nuestro formulario web. Seleccionas el retiro, fecha, tipo (individual o grupo), y realizas el pago mínimo del 70% para confirmar tu plaza. El resto se abona 7 días antes del evento.",
      },
      {
        q: "¿Cuál es el número mínimo de personas?",
        a: "Los retiros individuales son para 1 persona. Para reservas de grupo, el mínimo es 4 personas y el máximo 15.",
      },
      {
        q: "¿Puedo reservar para un grupo privado?",
        a: "Sí, ofrecemos experiencias exclusivas para grupos. Contáctanos en unmezgz@gmail.com o 609 371 555 y coordinamos fechas y actividades personalizadas.",
      },
    ],
  },
  {
    category: "Pagos",
    questions: [
      {
        q: "¿Qué métodos de pago aceptan?",
        a: "Aceptamos tarjetas de crédito/débito a través de Stripe. Próximamente añadiremos PayPal y Bizum.",
      },
      {
        q: "¿Cuánto tengo que pagar para confirmar?",
        a: "El pago mínimo es el 70% del total para confirmar tu plaza. El resto se abona 7 días antes del retiro.",
      },
    ],
  },
  {
    category: "Políticas",
    questions: [
      {
        q: "¿Cuál es la política de cancelación?",
        a: "Más de 10 días antes: reembolso del 100%. Entre 10 y 5 días: reembolso del 50%. Menos de 5 días: sin reembolso. No-show: se cobra el 100%.",
      },
      {
        q: "¿Qué pasa si llueve?",
        a: "Nuestras instalaciones están preparadas para todo tipo de climatología. En caso de alerta meteorológica severa, reprogramamos el evento sin coste adicional.",
      },
      {
        q: "¿Se admiten mascotas?",
        a: "Sí, previo aviso y autorización. Deben ir atados, identificados, con documentación en regla. Los perros potencialmente peligrosos deben llevar bozal. Sin recargo.",
      },
    ],
  },
  {
    category: "Experiencia",
    questions: [
      {
        q: "¿Necesito experiencia previa en yoga o meditación?",
        a: "No es necesaria. Nuestros facilitadores adaptan cada sesión al nivel del grupo, desde principiantes hasta avanzados.",
      },
      {
        q: "¿Está incluida la alimentación?",
        a: "Los alojamientos no tienen cocina propia. Ofrecemos servicio de comidas bajo encargo previo. El horno y barbacoa están disponibles bajo solicitud.",
      },
      {
        q: "¿Qué incluye el precio?",
        a: "Uso del alojamiento, áreas comunes, huerto (recolectar y plantar), baños y duchas, WiFi. Horno y barbacoa bajo solicitud.",
      },
      {
        q: "¿Dónde está ubicado UNME?",
        a: "Camino Molino del Rey, 112, Pinseque, Zaragoza. En una zona protegida del Parque Natural.",
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
