// features/booking/actions/cancel-booking.ts
'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';

const cancelBookingSchema = z.object({
  bookingId: z.string(),
  reason: z.string().optional(),
});

export async function cancelBooking(
  input: z.infer<typeof cancelBookingSchema>
) {
  const session = await auth();
  if (!session?.user) {
    throw new Error('UNAUTHORIZED');
  }

  const validated = cancelBookingSchema.parse(input);

  // TODO: Implementar política de reembolso
  // TODO: Calcular penalización según días de antelación

  const booking = await prisma.booking.update({
    where: { id: validated.bookingId },
    data: { 
      status: 'CANCELLED',
      // TODO: Guardar razón de cancelación
    },
  });

  revalidatePath('/admin/reservas');
  revalidatePath('/dashboard/reservas');

  return { success: true, data: booking };
}