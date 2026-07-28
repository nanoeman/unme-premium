// features/booking/actions/create-booking.ts
'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { createBookingSchema } from '../schemas';
import { BookingService } from '../services/booking.service';

export async function createBooking(
  input: z.infer<typeof createBookingSchema>
) {
  // 1. Autenticación
  const session = await auth();
  if (!session?.user) {
    throw new Error('UNAUTHORIZED');
  }

  // 2. Validación
  const validated = createBookingSchema.parse(input);

  // 3. Ejecución de negocio (servicio desacoplado)
  const bookingService = new BookingService(prisma);
  const booking = await bookingService.create(validated);

  // 4. Side effects (notificaciones, etc.)
  // ... handled via event bus or queue

  // 5. Revalidación de cache
  revalidatePath('/retiros');
  revalidatePath('/admin/reservas');

  return { success: true, data: booking };
}
