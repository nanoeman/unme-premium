// features/payments/actions/confirm-payment.ts
'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { stripe } from '@/lib/stripe';

const confirmPaymentSchema = z.object({
  paymentIntentId: z.string(),
});

export async function confirmPayment(
  input: z.infer<typeof confirmPaymentSchema>
) {
  const validated = confirmPaymentSchema.parse(input);

  const paymentIntent = await stripe.paymentIntents.retrieve(
    validated.paymentIntentId
  );

  if (paymentIntent.status !== 'succeeded') {
    throw new Error('PAYMENT_NOT_SUCCEEDED');
  }

  // TODO: Actualizar estado del pago en la base de datos
  // TODO: Generar factura
  // TODO: Enviar confirmación por email

  revalidatePath('/dashboard/reservas');
  revalidatePath('/admin/pagos');

  return { success: true, data: paymentIntent };
}