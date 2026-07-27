"use client";

import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { User, Calendar, CreditCard, FileText, Star, LogOut } from "lucide-react";

export default function AreaPrivadaPage() {
  const { data: session, status } = useSession();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (isRegister) {
      try {
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        });
        const data = await res.json();
        if (!res.ok) {
          setError(data.error || "Error al registrarse");
        } else {
          await signIn("credentials", { email, password, callbackUrl: "/area-privada" });
        }
      } catch {
        setError("Error de conexión");
      }
    } else {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/area-privada",
      });
      if (result?.error) {
        setError("Email o contraseña incorrectos");
      }
    }
    setLoading(false);
  };

  if (status === "loading") {
    return (
      <main className="min-h-screen bg-linen flex items-center justify-center">
        <div className="text-earth-600">Cargando...</div>
      </main>
    );
  }

  if (session?.user) {
    return (
      <main className="min-h-screen bg-linen pt-24">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h1 className="font-display text-heading-1 text-forest-700">
                Bienvenido, {session.user.name || session.user.email}
              </h1>
              <p className="mt-2 text-earth-500">
                Cliente {session.user.role === "ADMIN" ? "Administrador" : "Premium"}
              </p>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex items-center gap-2 border border-taupe-300 px-4 py-2 text-sm uppercase tracking-wide text-earth-600 transition-colors hover:bg-taupe-100"
            >
              <LogOut className="h-4 w-4" />
              Cerrar sesión
            </button>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-4">
            {[
              { icon: Calendar, label: "Reservas", value: "3" },
              { icon: CreditCard, label: "Gastado", value: "€2.340" },
              { icon: Star, label: "Puntos VIP", value: "1.250" },
              { icon: FileText, label: "Facturas", value: "2" },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="border border-taupe-200 bg-linen p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Icon className="h-5 w-5 text-forest-600" />
                    <span className="text-sm uppercase tracking-wide text-taupe-600">{stat.label}</span>
                  </div>
                  <span className="font-display text-3xl text-forest-700">{stat.value}</span>
                </div>
              );
            })}
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-display text-heading-2 mb-6 text-forest-700">Próximas experiencias</h2>
              <div className="space-y-4">
                {[
                  { title: "Retiro de Yoga & Meditación", date: "15-16 de Agosto, 2026", status: "Confirmado" },
                  { title: "Sound Healing Retreat", date: "5-6 de Septiembre, 2026", status: "Pendiente de pago" },
                  { title: "Glamping Premium Experience", date: "19-20 de Septiembre, 2026", status: "Lista de espera" },
                ].map((booking) => (
                  <div key={booking.title} className="flex items-center justify-between border border-taupe-200 bg-linen p-6">
                    <div>
                      <h3 className="font-display text-lg text-forest-700">{booking.title}</h3>
                      <p className="mt-1 text-sm text-taupe-600">{booking.date}</p>
                    </div>
                    <span className={`px-3 py-1 text-xs uppercase tracking-wide ${
                      booking.status === "Confirmado" ? "bg-forest-100 text-forest-700" :
                      booking.status === "Pendiente de pago" ? "bg-amber-100 text-amber-700" :
                      "bg-taupe-100 text-taupe-700"
                    }`}>{booking.status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="border border-taupe-200 bg-linen p-6">
                <h3 className="font-display text-heading-3 mb-4 text-forest-700">Tus ventajas</h3>
                <div className="space-y-3">
                  {["15% descuento en todas las reservas", "Acceso prioritario a eventos VIP", "Descarga de facturas instantánea", "Comunidad privada de alumni"].map((b) => (
                    <div key={b} className="flex items-start gap-2">
                      <Star className="mt-0.5 h-4 w-4 text-amber-500" />
                      <span className="text-sm text-earth-600">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border border-taupe-200 bg-linen p-6">
                <h3 className="font-display text-heading-3 mb-4 text-forest-700">Acciones rápidas</h3>
                <div className="space-y-3">
                  <button className="w-full bg-forest-700 py-3 text-sm font-medium uppercase tracking-wide text-linen hover:bg-forest-800">Nueva reserva</button>
                  <button className="w-full border border-taupe-300 py-3 text-sm uppercase tracking-wide text-earth-600 hover:bg-taupe-100">Descargar facturas</button>
                  <button className="w-full border border-taupe-300 py-3 text-sm uppercase tracking-wide text-earth-600 hover:bg-taupe-100">Editar perfil</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-linen">
      <section className="relative flex h-[40vh] items-center justify-center bg-earth-900">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-earth-900/50 to-linen" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-linen">
          <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-amber-400">Clientes VIP</span>
          <h1 className="font-display text-display-2 md:text-display-1 mb-6">Área Privada</h1>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-md">
          <div className="mb-8 flex border-b border-taupe-200">
            <button onClick={() => { setIsRegister(false); setError(""); }} className={`flex-1 pb-4 text-sm uppercase tracking-wide ${!isRegister ? "border-b-2 border-forest-700 text-forest-700" : "text-taupe-500"}`}>Iniciar sesión</button>
            <button onClick={() => { setIsRegister(true); setError(""); }} className={`flex-1 pb-4 text-sm uppercase tracking-wide ${isRegister ? "border-b-2 border-forest-700 text-forest-700" : "text-taupe-500"}`}>Crear cuenta</button>
          </div>

          {error && <div className="mb-6 border border-red-300 bg-red-50 p-4 text-sm text-red-700">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            {isRegister && (
              <div>
                <label className="mb-2 block text-xs uppercase tracking-wide text-taupe-600">Nombre completo</label>
                <input type="text" required className="w-full border border-taupe-300 bg-linen p-3 text-earth-800 focus:border-forest-700 focus:outline-none" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre" />
              </div>
            )}
            <div>
              <label className="mb-2 block text-xs uppercase tracking-wide text-taupe-600">Email</label>
              <input type="email" required className="w-full border border-taupe-300 bg-linen p-3 text-earth-800 focus:border-forest-700 focus:outline-none" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@email.com" />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-wide text-taupe-600">Contraseña</label>
              <input type="password" required minLength={6} className="w-full border border-taupe-300 bg-linen p-3 text-earth-800 focus:border-forest-700 focus:outline-none" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
            </div>
            <button type="submit" disabled={loading} className="w-full bg-forest-700 px-6 py-3 text-sm font-medium uppercase tracking-wide text-linen hover:bg-forest-800 disabled:opacity-50">
              {loading ? "Procesando..." : isRegister ? "Crear cuenta" : "Iniciar sesión"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
