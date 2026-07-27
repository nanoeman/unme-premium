// features/booking/actions/get-retreat-availability.ts
'use server';

import { z } from 'zod';
import { prisma } from '@/lib/prisma';

const getAvailabilitySchema = z.object({
  retreatId: z.string(),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
});

export async function getRetreatAvailability(
  input: z.infer<typeof getAvailabilitySchema>
) {
  const validated = getAvailabilitySchema.parse(input);

  // TODO: Consultar disponibilidad en tiempo real
  // TODO: Verificar calendario de eventos
  // TODO: Calcular spots disponibles

  const schedules = await prisma.retreatSchedule.findMany({
    where: {
      retreatId: validated.retreatId,
      startDate: { gte: new Date(validated.startDate) },
      endDate: { lte: new Date(validated.endDate) },
      status: 'OPEN',
    },
    include: {
      bookings: true,
    },
  });

  const availability = schedules.map(schedule => ({
    ...schedule,
    spotsLeft: schedule.spotsTotal - schedule.bookings.length,
  }));

  return { success: true, data: availability };
}