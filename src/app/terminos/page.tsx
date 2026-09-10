import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones | UNME Experience",
  description:
    "Términos y condiciones de uso de UNME Experience. Condiciones de reservas, pagos, cancelaciones, normas de estancia y legislación aplicable.",
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-linen py-16 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-heading-1 mb-8 text-forest-700">
          Términos y Condiciones de Uso
        </h1>

        <p className="mb-8 text-sm text-earth-600">
          Última actualización: agosto de 2026
        </p>

        <div className="space-y-8 text-sm text-earth-700">
          {/* 1. IDENTIDAD */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              1. Identidad del prestador
            </h2>
            <ul className="space-y-1 text-earth-700">
              <li><strong>Entidad:</strong> UNME Experience</li>
              <li><strong>NIF:</strong> 25476298A</li>
              <li><strong>Dirección:</strong> Camino Molino del Rey, 112, Pinseque, Zaragoza</li>
              <li><strong>Email:</strong> <a href="mailto:unmezgz@gmail.com" className="text-forest-700 underline hover:text-forest-900">unmezgz@gmail.com</a></li>
              <li><strong>Teléfono:</strong> 609 371 555</li>
            </ul>
            <p className="mt-3 text-earth-700">
              UNME Experience comercializa y gestiona directamente las experiencias y servicios ofrecidos a través de su sitio web.
            </p>
          </section>

          {/* 2. OBJETO */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              2. Objeto
            </h2>
            <p className="text-earth-700">
              Estos Términos y Condiciones regulan el acceso y uso del sitio web{" "}
              <a href="https://www.unme-experience.com" className="text-forest-700 underline hover:text-forest-900">
                www.unme-experience.com
              </a>
              , así como las condiciones aplicables a las reservas de alojamientos, experiencias y servicios ofrecidos por UNME Experience.
            </p>
            <p className="mt-2 text-earth-700">
              La realización de una reserva implica la aceptación de las condiciones aplicables a la experiencia contratada.
            </p>
          </section>

          {/* 3. RESERVAS Y PAGOS */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              3. Reservas y pagos
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-earth-700">
              <li>Las reservas se formalizan mediante el sistema de reserva habilitado por UNME Experience.</li>
              <li>Para confirmar una reserva será necesario abonar el <strong>70 % del importe total</strong>.</li>
              <li>El <strong>30 % restante</strong> deberá abonarse 7 días antes de la fecha de entrada.</li>
              <li>La reserva quedará confirmada una vez recibido el pago correspondiente y enviada la confirmación por email.</li>
              <li>Los precios publicados incluyen los impuestos aplicables y se expresan en euros.</li>
              <li>El pago se realizará mediante Stripe, a través de los medios de pago disponibles en el proceso de reserva.</li>
              <li>UNME Experience no almacena los datos completos de las tarjetas utilizadas para realizar el pago cuando estos son procesados directamente por Stripe.</li>
            </ul>
          </section>

          {/* 4. POLÍTICA DE CANCELACIÓN */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              4. Política de cancelación
            </h2>
            <p className="mb-3 text-earth-700">
              El usuario podrá solicitar la cancelación de su reserva por escrito mediante el email{" "}
              <a href="mailto:unmezgz@gmail.com" className="text-forest-700 underline hover:text-forest-900">
                unmezgz@gmail.com
              </a>
              .
            </p>
            <p className="mb-3 text-earth-700">
              Salvo los derechos que legalmente correspondan al consumidor, se aplicarán las siguientes condiciones:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-earth-700">
              <li><strong>Más de 10 días antes</strong> de la fecha de entrada: reembolso del 100 % del importe pagado.</li>
              <li><strong>Entre 10 y 5 días antes:</strong> reembolso del 50 % del importe pagado.</li>
              <li><strong>Menos de 5 días antes:</strong> no procederá reembolso.</li>
              <li><strong>No-show o no presentación:</strong> se cobrará el 100 % del importe correspondiente a la reserva.</li>
            </ul>
            <p className="mt-3 text-earth-700">
              Los reembolsos se efectuarán mediante el medio de pago utilizado en la reserva, siempre que técnicamente sea posible.
            </p>
            <p className="mt-2 text-earth-700">
              Cuando una normativa imperativa reconozca al consumidor derechos adicionales o diferentes, prevalecerán dichos derechos.
            </p>
          </section>

          {/* 5. HORARIOS */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              5. Horarios
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-earth-700">
              <li><strong>Entrada:</strong> a partir de las 11:00 h.</li>
              <li><strong>Salida:</strong> antes de las 12:00 h.</li>
              <li>El early check-in y el late check-out estarán sujetos a consulta y disponibilidad.</li>
            </ul>
          </section>

          {/* 6. NORMAS DE CONVIVENCIA */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              6. Normas de convivencia y estancia
            </h2>

            <h3 className="font-display text-heading-4 mb-2 mt-4 text-forest-700">
              6.1. Responsabilidad del huésped
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-earth-700">
              <li>El huésped deberá hacer un uso adecuado de las instalaciones y del mobiliario.</li>
              <li>Los daños ocasionados por dolo, negligencia o uso indebido podrán ser reclamados al responsable conforme a la normativa aplicable.</li>
            </ul>

            <h3 className="font-display text-heading-4 mb-2 mt-4 text-forest-700">
              6.2. Capacidad máxima
            </h3>
            <p className="text-earth-700">
              El número de ocupantes de cada alojamiento no podrá superar el indicado en la reserva.
            </p>

            <h3 className="font-display text-heading-4 mb-2 mt-4 text-forest-700">
              6.3. Zonas restringidas
            </h3>
            <p className="text-earth-700">
              Queda prohibido el acceso a las zonas de STAFF y a las instalaciones privadas no incluidas en la reserva.
            </p>

            <h3 className="font-display text-heading-4 mb-2 mt-4 text-forest-700">
              6.4. Descanso y silencio
            </h3>
            <p className="text-earth-700">
              Se solicita respetar el descanso de los demás huéspedes, especialmente entre las <strong>23:00 h y las 08:00 h</strong>.
            </p>
          </section>

          {/* 7. NORMAS DE SEGURIDAD */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              7. Normas de seguridad
            </h2>

            <h3 className="font-display text-heading-4 mb-2 mt-4 text-forest-700">
              7.1. Fuego
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-earth-700">
              <li>Por razones de seguridad y debido al entorno natural, está prohibido encender velas, lámparas de aceite, hogueras o cualquier otro fuego fuera de los espacios expresamente habilitados para ello.</li>
              <li>Asimismo, queda prohibida la introducción o utilización indebida de materias o sustancias peligrosas o inflamables.</li>
              <li>La barbacoa y el horno estarán disponibles únicamente cuando hayan sido autorizados y en las condiciones indicadas por UNME Experience.</li>
            </ul>

            <h3 className="font-display text-heading-4 mb-2 mt-4 text-forest-700">
              7.2. Tabaco
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-earth-700">
              <li>No está permitido fumar dentro de los alojamientos ni en las zonas comunes.</li>
              <li>Cuando se permita fumar en zonas exteriores, deberán extremarse las precauciones y depositarse las colillas en los lugares habilitados.</li>
            </ul>

            <h3 className="font-display text-heading-4 mb-2 mt-4 text-forest-700">
              7.3. Fuerza mayor
            </h3>
            <p className="text-earth-700">
              UNME Experience podrá modificar, aplazar o cancelar una experiencia cuando circunstancias extraordinarias o de fuerza mayor hagan imposible o insegura su realización.
            </p>
            <p className="mt-2 text-earth-700">
              Cuando corresponda, se ofrecerá una alternativa o el reembolso de las cantidades abonadas, de acuerdo con la normativa aplicable y las circunstancias concretas.
            </p>
          </section>

          {/* 8. MASCOTAS */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              8. Mascotas
            </h2>
            <p className="mb-3 text-earth-700">
              Se permite la presencia de animales domésticos previa comunicación y autorización expresa de UNME Experience.
            </p>
            <p className="mb-3 text-earth-700">Las mascotas deberán:</p>
            <ul className="list-disc pl-5 space-y-1 text-earth-700">
              <li>Permanecer bajo control de sus responsables.</li>
              <li>No utilizar camas, baños u otros elementos destinados al uso de los huéspedes.</li>
              <li>No molestar a otros usuarios ni alterar el entorno.</li>
              <li>Tener su documentación y vacunación en regla.</li>
              <li>Recoger sus excrementos.</li>
              <li>Permanecer atadas cuando así lo exijan las normas del recinto o las circunstancias.</li>
              <li>Cumplir las obligaciones legales aplicables a los perros considerados potencialmente peligrosos, incluido el uso de bozal cuando corresponda.</li>
            </ul>
            <p className="mt-3 text-earth-700">
              La autorización podrá estar condicionada a las características del animal y de la experiencia.
            </p>
            <p className="mt-2 text-earth-700">
              No se aplicará recargo adicional por mascota, salvo que se informe expresamente de una condición diferente antes de formalizar la reserva.
            </p>
          </section>

          {/* 9. SERVICIOS INCLUIDOS */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              9. Servicios incluidos
            </h2>
            <p className="mb-3 text-earth-700">
              Salvo que una experiencia concreta indique lo contrario, el precio de la reserva incluye:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-earth-700">
              <li>Uso del alojamiento reservado.</li>
              <li>Uso de las áreas comunes autorizadas.</li>
              <li>Acceso al huerto para recolectar y plantar, conforme a las normas de uso.</li>
              <li>Baños y duchas compartidas.</li>
              <li>WiFi en las zonas habilitadas.</li>
            </ul>
            <p className="mt-3 text-earth-700">
              <strong>Bajo solicitud previa y disponibilidad:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-earth-700">
              <li>Uso del horno.</li>
              <li>Uso de la barbacoa.</li>
            </ul>
            <p className="mt-3 text-earth-700">
              Los servicios adicionales que puedan ofrecerse tendrán las condiciones y precios que se indiquen antes de su contratación.
            </p>
          </section>

          {/* 10. EXCLUSIONES */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              10. Exclusiones
            </h2>
            <p className="mb-3 text-earth-700">No está permitido:</p>
            <ul className="list-disc pl-5 space-y-1 text-earth-700">
              <li>Acceder a zonas de STAFF.</li>
              <li>Acceder a instalaciones privadas no incluidas en la reserva.</li>
              <li>Utilizar espacios o equipamientos no autorizados.</li>
            </ul>
            <p className="mt-3 text-earth-700">
              Los alojamientos no disponen de cocina propia.
            </p>
            <p className="mt-2 text-earth-700">
              Cuando se ofrezca servicio de comidas bajo encargo previo, sus condiciones se comunicarán antes de la contratación.
            </p>
          </section>

          {/* 11. RESPONSABILIDAD */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              11. Responsabilidad y objetos personales
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-earth-700">
              <li>El huésped es responsable de custodiar sus objetos personales.</li>
              <li>UNME Experience no será responsable de la pérdida, robo o deterioro de objetos personales cuando no exista responsabilidad legalmente imputable a UNME Experience.</li>
              <li>Se recomienda no dejar objetos de valor sin vigilancia.</li>
            </ul>
          </section>

          {/* 12. PROTECCIÓN DE DATOS */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              12. Protección de datos
            </h2>
            <p className="text-earth-700">
              El tratamiento de los datos personales se realizará conforme a la{" "}
              <Link href="/privacidad" className="text-forest-700 underline hover:text-forest-900">
                Política de Privacidad
              </Link>{" "}
              de UNME Experience.
            </p>
            <p className="mt-2 text-earth-700">
              El usuario puede consultar dicha política para conocer las finalidades del tratamiento, bases jurídicas, conservación de datos y derechos que le corresponden.
            </p>
          </section>

          {/* 13. PROPIEDAD INTELECTUAL */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              13. Propiedad intelectual
            </h2>
            <p className="text-earth-700">
              Los contenidos, textos, imágenes, fotografías, logotipos, diseños y demás elementos de{" "}
              <a href="https://www.unme-experience.com" className="text-forest-700 underline hover:text-forest-900">
                www.unme-experience.com
              </a>{" "}
              están protegidos por la legislación aplicable.
            </p>
            <p className="mt-2 text-earth-700">
              No podrán reproducirse, distribuirse, modificarse o utilizarse con fines comerciales sin autorización, salvo en los casos permitidos por la legislación.
            </p>
          </section>

          {/* 14. MODIFICACIONES */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              14. Modificaciones
            </h2>
            <p className="text-earth-700">
              UNME Experience podrá actualizar estos Términos y Condiciones para adaptarlos a cambios legales, técnicos, comerciales o en los servicios ofrecidos.
            </p>
            <p className="mt-2 text-earth-700">
              Las condiciones aplicables a una reserva serán las vigentes en el momento de su contratación, sin perjuicio de las modificaciones que deban aplicarse por imperativo legal.
            </p>
          </section>

          {/* 15. LEGISLACIÓN */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              15. Legislación y jurisdicción
            </h2>
            <p className="text-earth-700">
              Estos Términos y Condiciones se regirán por la <strong>legislación española</strong>.
            </p>
            <p className="mt-2 text-earth-700">
              Cuando el usuario tenga la condición de consumidor, se respetarán las normas imperativas relativas a sus derechos y a la competencia territorial que resulten aplicables.
            </p>
          </section>

          {/* 16. CONTACTO */}
          <section>
            <h2 className="font-display text-heading-3 mb-4 text-forest-700">
              16. Contacto
            </h2>
            <p className="mb-3 text-earth-700">
              Para cualquier consulta relacionada con estos Términos y Condiciones:
            </p>
            <ul className="space-y-1 text-earth-700">
              <li><strong>UNME Experience</strong></li>
              <li><strong>Email:</strong> <a href="mailto:unmezgz@gmail.com" className="text-forest-700 underline hover:text-forest-900">unmezgz@gmail.com</a></li>
              <li><strong>Teléfono:</strong> 609 371 555</li>
              <li><strong>Dirección:</strong> Camino Molino del Rey, 112, Pinseque, Zaragoza</li>
            </ul>
          </section>
        </div>

        {/* Enlaces a otras políticas */}
        <div className="mt-12 border-t border-taupe-200 pt-8">
          <p className="text-sm text-earth-600">
            También puedes consultar:{" "}
            <Link href="/privacidad" className="text-forest-700 underline hover:text-forest-900">
              Política de Privacidad
            </Link>
            {" | "}
            <Link href="/cookies" className="text-forest-700 underline hover:text-forest-900">
              Política de Cookies
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
