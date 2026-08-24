export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-stone-50 py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-8 font-display text-4xl text-stone-900">
          Términos y Condiciones
        </h1>
        
        <div className="space-y-8 text-stone-600 leading-relaxed">
          
          <section>
            <h2 className="mb-3 text-xl font-semibold text-stone-800">1. Identidad del Prestador</h2>
            <p>
              <strong>Denominación:</strong> UNME Experience<br />
              <strong>NIF:</strong> 25476298A<br />
              <strong>Dirección:</strong> Camino Molino del Rey, 112<br />
              <strong>Email:</strong> unmezgz@gmail.com<br />
              <strong>Teléfono:</strong> 609 371 555
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-stone-800">2. Objeto</h2>
            <p>
              Estos términos regulan el uso del sitio web www.unme-experience.com y las condiciones 
              de reserva de los alojamientos y experiencias ofrecidas por UNME Experience.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-stone-800">3. Reservas y Pagos</h2>
            <p>
              Las reservas se formalizan mediante pago anticipado del 50% del importe total. 
              El resto del pago se abonará 7 días antes de la fecha de entrada. 
              Los precios incluyen IVA y están sujetos a disponibilidad.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-stone-800">4. Política de Cancelación</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Más de 10 días de antelación: reembolso del 100%</li>
              <li>Entre 10 y 5 días: reembolso del 50%</li>
              <li>Menos de 5 días: no hay reembolso</li>
              <li>No-show: se cobrará el 100% de la estancia</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-stone-800">5. Horarios</h2>
            <p>
              <strong>Entrada:</strong> a partir de las 11:00h<br />
              <strong>Salida:</strong> antes de las 12:00h
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-stone-800">6. Normas de Convivencia</h6>
            <ul className="list-disc pl-5 space-y-1">
              <li>El huésped es responsable del buen uso de las instalaciones</li>
              <li>No superar el número de ocupantes indicado en la reserva</li>
              <li>Prohibido el acceso a zonas de STAFF e instalaciones privadas</li>
              <li>Respeto al descanso (silencio de 23:00h a 08:00h)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-stone-800">7. Seguridad</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Prohibido introducir materias explosivas o inflamables</li>
              <li>Prohibido encender velas, lámparas de aceite o hogueras</li>
              <li>Prohibido fumar dentro de alojamientos y zonas comunes</li>
              <li>Zona protegida del Parque Natural — máximo cuidado</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-stone-800">8. Mascotas</h2>
            <p>
              Se permiten animales domésticos previo aviso y autorización expresa. 
              Deben ir atados, identificados, con documentación en regla y recoger sus excrementos. 
              Los perros potencialmente peligrosos deben llevar bozal. <strong>Sin recargo adicional.</strong>
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-stone-800">9. Servicios Incluidos</h2>
            <p>
              Uso del alojamiento, áreas comunes, huerto, baños y duchas, WiFi. 
              Horno y barbacoa bajo solicitud previa. No hay cocina propia — servicio de comidas bajo encargo.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-stone-800">10. Responsabilidad</h2>
            <p>
              UNME Experience no se responsabiliza de objetos personales perdidos o robados. 
              El usuario es responsable de los daños causados por negligencia.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-stone-800">11. Legislación</h2>
            <p>
              Estos términos se rigen por la legislación española. 
              Para cualquier controversia, las partes se someten a los Juzgados y Tribunales de Zaragoza.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}