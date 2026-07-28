// Stripe stub - reemplazar con dependencia real cuando configures pagos
// npm install stripe

class StripeStub {
  constructor(private apiKey: string) {}

  // Simula cualquier llamada a Stripe
  get checkout() {
    return {
      sessions: {
        create: async (_params: unknown) => {
          console.log("[Stripe Stub] Checkout no creado - Stripe no configurado");
          return { id: "stub-session", url: "#" };
        },
      },
    };
  }

  get paymentIntents() {
    return {
      create: async (_params: unknown) => {
        console.log("[Stripe Stub] PaymentIntent no creado - Stripe no configurado");
        return { id: "stub-pi", client_secret: "stub-secret" };
      },
      retrieve: async (_id: string) => {
        console.log("[Stripe Stub] PaymentIntent no recuperado - Stripe no configurado");
        return { id: "stub-pi", status: "succeeded", client_secret: "stub-secret" };
      },
    };
  }
    return {
      create: async (_params: unknown) => {
        console.log("[Stripe Stub] PaymentIntent no creado - Stripe no configurado");
        return { id: "stub-pi", client_secret: "stub-secret" };
      },
    };
  }
}

export const stripe = new StripeStub(process.env.STRIPE_SECRET_KEY || "");
