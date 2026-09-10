import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes (FAQ) | UNME Experience",
  description:
    "Resuelve tus dudas sobre UNME Experience: ubicación, horarios, mascotas, WiFi, cocina, cancelaciones, actividades y más.",
};

const faqs = [
  {
    question: "¿Dónde está ubicado UNME Experience?",
    answer: (
      <p className="text-earth-700">
        Estamos en <strong>Camino Molino del Rey, 112, Pinseque, Zaragoza</strong>, en un entorno natural especialmente protegido.
      </p>
    ),
  },
  {
    question: "¿Cuál es el horario de entrada y salida?",
    answer: (
      <>
        <ul className="list-disc pl-5 space-y-1 text-earth-700">
          <li><strong>Entrada:</strong> a partir de las 11:00 h.</li>
          <li><strong>Salida:</strong> antes de las 12:00 h.</li>
        </ul>
        <p className="mt-2 text-earth-700">
          Puedes consultar la disponibilidad de <strong>early check-in</strong> o <strong>late check-out</strong>.
        </p>
      </>
    ),
  },
  {
    question: "¿Se admiten mascotas?",
    answer: (
      <>
        <p className="text-earth-700">
          Sí, previa comunicación y autorización de UNME Experience.
        </p>
        <p className="mt-2 text-earth-700">
          Las mascotas deberán estar controladas, identificadas y con su documentación en regla. Sus responsables deberán recoger los excrementos y respetar las normas del recinto.
        </p>
        <p className="mt-2 text-earth-700">
          Los perros potencialmente peligrosos deberán cumplir las obligaciones legales correspondientes, incluido el uso de bozal cuando sea obligatorio.
        </p>
        <p className="mt-2 text-earth-700">
          No se aplica recargo adicional, salvo que se informe expresamente de lo contrario antes de la reserva.
        </p>
      </>
    ),
  },
  {
    question: "¿Hay WiFi en el recinto?",
    answer: (
      <p className="text-earth-700">
        Sí. Hay WiFi disponible en las <strong>zonas habilitadas</strong>.
      </p>
    ),
  },
  {
    question: "¿Se puede cocinar en los alojamientos?",
    answer: (
      <>
        <p className="text-earth-700">
          Los alojamientos <strong>no disponen de cocina propia</strong>.
        </p>
        <p className="mt-2 text-earth-700">
          Podemos ofrecer <strong>servicio de comidas bajo encargo previo</strong>.
        </p>
        <p className="mt-2 text-earth-700">
          El horno y la barbacoa están disponibles previa solicitud y según disponibilidad.
        </p>
      </>
    ),
  },
  {
    question: "¿Qué incluye el precio de la reserva?",
    answer: (
      <>
        <p className="mb-3 text-earth-700">
          Salvo que la experiencia contratada indique condiciones diferentes, incluye:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-earth-700">
          <li>Uso del alojamiento reservado.</li>
          <li>Áreas comunes autorizadas.</li>
          <li>Acceso al huerto para recolectar y plantar.</li>
          <li>Baños y duchas compartidas.</li>
          <li>WiFi en zonas habilitadas.</li>
        </ul>
        <p className="mt-3 text-earth-700">
          El uso del horno y la barbacoa requiere <strong>solicitud previa</strong>.
        </p>
      </>
    ),
  },
  {
    question: "¿Cómo puedo cancelar mi reserva?",
    answer: (
      <>
        <p className="mb-3 text-earth-700">
          Puedes solicitar la cancelación escribiendo a{" "}
          <a href="mailto:unmezgz@gmail.com" className="text-forest-700 underline hover:text-forest-900">
            unmezgz@gmail.com
          </a>
          .
        </p>
        <p className="mb-3 text-earth-700">
          La política general es:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-earth-700">
          <li><strong>Más de 10 días antes:</strong> reembolso del 100 %.</li>
          <li><strong>Entre 10 y 5 días:</strong> reembolso del 50 %.</li>
          <li><strong>Menos de 5 días:</strong> sin reembolso.</li>
          <li><strong>No-show:</strong> se cobrará el 100 %.</li>
        </ul>
        <p className="mt-3 text-earth-700">
          Estas condiciones se aplican sin perjuicio de los derechos que legalmente correspondan al consumidor.
        </p>
      </>
    ),
  },
  {
    question: "¿Cómo se realiza el pago?",
    answer: (
      <>
        <ul className="list-disc pl-5 space-y-1 text-earth-700">
          <li>Para confirmar la reserva se abona el <strong>70 % del importe total</strong>.</li>
          <li>El <strong>30 % restante</strong> se abona 7 días antes de la fecha de entrada.</li>
          <li>Los pagos se realizan mediante <strong>Stripe</strong>.</li>
        </ul>
      </>
    ),
  },
  {
    question: "¿Hay aparcamiento?",
    answer: (
      <p className="text-earth-700">
        Sí. Hay <strong>aparcamiento gratuito</strong> dentro del recinto, sujeto a las zonas habilitadas.
      </p>
    ),
  },
  {
    question: "¿Se pueden hacer fuegos o barbacoas?",
    answer: (
      <>
        <p className="text-earth-700">
          La <strong>barbacoa</strong> está disponible previa solicitud y autorización.
        </p>
        <p className="mt-2 text-earth-700">
          Por seguridad y por las características del entorno natural, está <strong>prohibido</strong> encender hogueras, velas, lámparas de aceite u otros fuegos fuera de los espacios expresamente habilitados.
        </p>
      </>
    ),
  },
  {
    question: "¿Se puede fumar?",
    answer: (
      <>
        <p className="text-earth-700">
          <strong>No está permitido fumar</strong> dentro de los alojamientos ni en las zonas comunes.
        </p>
        <p className="mt-2 text-earth-700">
          Cuando se permita fumar en exteriores, deberán extremarse las precauciones y recogerse las colillas.
        </p>
      </>
    ),
  },
  {
    question: "¿Qué actividades hay en la zona?",
    answer: (
      <>
        <p className="text-earth-700">
          El entorno permite disfrutar de actividades como <strong>senderismo, observación de fauna, rutas en bicicleta, contacto con el huerto</strong> y espacios para la desconexión y el descanso.
        </p>
        <p className="mt-2 text-earth-700">
          Además, UNME Experience ofrece diferentes experiencias y actividades relacionadas con el <strong>bienestar, la naturaleza, la meditación y el yoga</strong>.
        </p>
      </>
    ),
  },
  {
    question: "¿Necesito experiencia previa en yoga o meditación?",
    answer: (
      <>
        <p className="text-earth-700">
          No necesariamente.
        </p>
        <p className="mt-2 text-earth-700">
          Cuando una experiencia incluya yoga, meditación u otras actividades dirigidas, se indicará su nivel y características. Las sesiones podrán adaptarse a las necesidades del grupo cuando así se haya previsto.
        </p>
      </>
    ),
  },
  {
    question: "¿Cómo contacto para obtener más información?",
    answer: (
      <>
        <p className="mb-3 text-earth-700">
          Puedes contactar con UNME Experience:
        </p>
        <ul className="space-y-1 text-earth-700">
          <li><strong>Email:</strong> <a href="mailto:unmezgz@gmail.com" className="text-forest-700 underline hover:text-forest-900">unmezgz@gmail.com</a></li>
          <li><strong>Teléfono:</strong> 609 371 555</li>
          <li><strong>WhatsApp:</strong> disponible en el número indicado.</li>
        </ul>
      </>
    ),
  },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-linen py-16 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-heading-1 mb-8 text-forest-700">
          Preguntas Frecuentes (FAQ)
        </h1>

        <p className="mb-12 text-earth-600">
          Resuelve tus dudas sobre UNME Experience. Si no encuentras lo que buscas,{" "}
          <Link href="/contacto" className="text-forest-700 underline hover:text-forest-900">
            contáctanos
          </Link>
          .
        </p>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group border border-taupe-200 bg-linen p-6 transition-all hover:shadow-soft"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-heading-3 text-forest-700">
                {faq.question}
                <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-4 text-sm leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        {/* CTA final */}
        <div className="mt-12 border-t border-taupe-200 pt-8">
          <p className="text-center text-earth-700">
            ¿Tienes más dudas?{" "}
            <Link href="/contacto" className="text-forest-700 font-medium underline hover:text-forest-900">
              Contáctanos aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
