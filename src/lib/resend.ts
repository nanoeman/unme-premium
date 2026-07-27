// Resend placeholder - configure con tu API key real
import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY || "");
