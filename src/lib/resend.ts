// Resend stub - reemplazar con dependencia real cuando configures emails
// npm install resend

class ResendStub {
  constructor(private apiKey: string) {}

  async send(_params: unknown) {
    console.log("[Email Stub] Email no enviado - Resend no configurado");
    return { id: "stub-id", status: "sent" };
  }
}

export const resend = new ResendStub(process.env.RESEND_API_KEY || "");
