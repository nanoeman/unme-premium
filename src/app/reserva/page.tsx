"use client";

import { useState } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reserva | UNME",
  description:
    "Formulario de reserva multipaso. Selecciona tu experiencia, fecha y completa el pago de forma segura.",
};

const STEPS = ["Experiencia", "Fecha", "Datos", "Pago"];

const EXPERIENCES = [
  "Retiro de Yoga & Meditación",
  "Glamping Premium Experience",
  "Sound Healing Retreat",
  "Corporate Wellness B2B",
  "Detox & Nutrición Consciente",
  "Respiración Consciente & Breathwork",
];

export default function ReservaPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    experience: "",
    date: "",
    guests: 1,
    name: "",
    email: "",
    phone: "",
  });

  return (
    <main className="min-h-screen bg-linen">
      {/* Hero */}
      <section className="relative flex h-[40vh] items-center justify-center bg-earth-900">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-earth-900/50 to-linen" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-linen">
          <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-amber-400">
            Tu experiencia comienza aquí
          </span>
          <h1 className="font-display text-display-2 md:text-display-1 mb-6">
            Reserva
          </h1>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl">
          {/* Steps */}
          <div className="mb-12 flex justify-between">
            {STEPS.map((s, i) => (
              <div key={s} className="flex flex-1 flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center border-2 font-display text-sm ${
                    i <= step
                      ? "border-forest-700 bg-forest-700 text-linen"
                      : "border-taupe-300 text-taupe-400"
                  }`}
                >
                  {i + 1}
                </div>
                <span
                  className={`mt-2 text-xs uppercase tracking-wide ${
                    i <= step ? "text-forest-700" : "text-taupe-400"
                  }`}
                >
                  {s}
                </span>
                {i < STEPS.length - 1 && (
                  <div
                    className={`absolute left-0 right-0 top-5 h-0.5 ${
                      i < step ? "bg-forest-700" : "bg-taupe-200"
                    }`}
                    style={{
                      marginLeft: `${(i + 0.5) * 25}%`,
                      marginRight: `${(3 - i - 0.5) * 25}%`,
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <div className="border border-taupe-200 bg-linen p-8">
            {step === 0 && (
              <div className="space-y-4">
                <h2 className="font-display text-heading-2 mb-6 text-forest-700">
                  Selecciona tu experiencia
                </h2>
                {EXPERIENCES.map((exp) => (
                  <button
                    key={exp}
                    onClick={() => {
                      setForm({ ...form, experience: exp });
                      setStep(1);
                    }}
                    className={`w-full border p-4 text-left transition-all ${
                      form.experience === exp
                        ? "border-forest-700 bg-forest-50"
                        : "border-taupe-200 hover:border-taupe-400"
                    }`}
                  >
                    <span className="text-earth-800">{exp}</span>
                  </button>
                ))}
              </div>
            )}

            {step === 1 && (
              <div className="space-y-6">
                <h2 className="font-display text-heading-2 mb-6 text-forest-700">
                  Selecciona fecha y personas
                </h2>
                <div>
                  <label className="mb-2 block text-sm uppercase tracking-wide text-taupe-600">
                    Fecha preferida
                  </label>
                  <input
                    type="date"
                    className="w-full border border-taupe-300 bg-linen p-3 text-earth-800 focus:border-forest-700 focus:outline-none"
                    value={form.date}
                    onChange={(e) =>
                      setForm({ ...form, date: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm uppercase tracking-wide text-taupe-600">
                    Número de personas
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={20}
                    className="w-full border border-taupe-300 bg-linen p-3 text-earth-800 focus:border-forest-700 focus:outline-none"
                    value={form.guests}
                    onChange={(e) =>
                      setForm({ ...form, guests: parseInt(e.target.value) })
                    }
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(0)}
                    className="border border-taupe-300 px-6 py-3 text-sm uppercase tracking-wide text-taupe-600 transition-colors hover:bg-taupe-100"
                  >
                    Atrás
                  </button>
                  <button
                    onClick={() => setStep(2)}
                    disabled={!form.date}
                    className="bg-forest-700 px-6 py-3 text-sm font-medium uppercase tracking-wide text-linen transition-colors hover:bg-forest-800 disabled:opacity-50"
                  >
                    Continuar
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="font-display text-heading-2 mb-6 text-forest-700">
                  Tus datos
                </h2>
                <div>
                  <label className="mb-2 block text-sm uppercase tracking-wide text-taupe-600">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    className="w-full border border-taupe-300 bg-linen p-3 text-earth-800 focus:border-forest-700 focus:outline-none"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm uppercase tracking-wide text-taupe-600">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-taupe-300 bg-linen p-3 text-earth-800 focus:border-forest-700 focus:outline-none"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm uppercase tracking-wide text-taupe-600">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-taupe-300 bg-linen p-3 text-earth-800 focus:border-forest-700 focus:outline-none"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(1)}
                    className="border border-taupe-300 px-6 py-3 text-sm uppercase tracking-wide text-taupe-600 transition-colors hover:bg-taupe-100"
                  >
                    Atrás
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!form.name || !form.email}
                    className="bg-forest-700 px-6 py-3 text-sm font-medium uppercase tracking-wide text-linen transition-colors hover:bg-forest-800 disabled:opacity-50"
                  >
                    Continuar al pago
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 text-center">
                <h2 className="font-display text-heading-2 text-forest-700">
                  Resumen de tu reserva
                </h2>
                <div className="border border-taupe-200 bg-linen-100 p-6 text-left">
                  <div className="grid gap-3">
                    <div className="flex justify-between">
                      <span className="text-taupe-600">Experiencia:</span>
                      <span className="font-medium text-earth-800">
                        {form.experience}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-taupe-600">Fecha:</span>
                      <span className="font-medium text-earth-800">
                        {form.date}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-taupe-600">Personas:</span>
                      <span className="font-medium text-earth-800">
                        {form.guests}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-taupe-600">Contacto:</span>
                      <span className="font-medium text-earth-800">
                        {form.email}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-taupe-500">
                  Pasarela de pago seguro con Stripe / PayPal
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => setStep(2)}
                    className="border border-taupe-300 px-6 py-3 text-sm uppercase tracking-wide text-taupe-600 transition-colors hover:bg-taupe-100"
                  >
                    Atrás
                  </button>
                  <button className="bg-amber-500 px-8 py-3 text-sm font-medium uppercase tracking-wide text-linen transition-colors hover:bg-amber-600">
                    Confirmar y pagar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
