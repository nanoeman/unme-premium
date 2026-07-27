// features/booking/actions/update-booking-status.ts
'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';

const updateBookingStatusSchema = z.object({
  bookingId: z.string(),
  status: z.enum(['PENDING', 'CONFIRMED', 'CHECKED_IN', 'CHECKED_OUT', 'CANCELLED', 'NO_SHOW']),
});

export async function updateBookingStatus(
  input: z.infer<typeof updateBookingStatusSchema>
) {
  const session = await auth();
  if (!session?.user) {
    throw new Error('UNAUTHORIZED');
  }

  const validated = updateBookingStatusSchema.parse(input);

  const booking = await prisma.booking.update({
    where: { id: validated.bookingId },
    data: { status: validated.status },
  });

  revalidatePath('/admin/reservas');
  revalidatePath('/dashboard/reservas');

  return { success: true, data: booking };
}