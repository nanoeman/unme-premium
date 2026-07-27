import { z } from "zod";

export const createBookingSchema = z.object({
  experience: z.string().min(1, "Selecciona una experiencia"),
  date: z.string().min(1, "Selecciona una fecha"),
  guests: z.number().min(1).max(20),
  name: z.string().min(2, "Nombre requerido"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(6, "Teléfono requerido"),
});

export type BookingInput = z.infer<typeof createBookingSchema>;
