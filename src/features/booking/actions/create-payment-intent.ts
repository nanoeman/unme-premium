// features/payments/actions/create-payment-intent.ts
'use server';

import { z } from 'zod';
import { stripe } from '@/lib/stripe';
import { auth } from '@/lib/auth';

const createPaymentIntentSchema = z.object({
  bookingId: z.string(),
  amount: z.number(),
  currency: z.string().default('EUR'),
});

export async function createPaymentIntent(
  input: z.infer<typeof createPaymentIntentSchema>
) {
  const session = await auth();
  if (!session?.user) {
    throw new Error('UNAUTHORIZED');
  }

  const validated = createPaymentIntentSchema.parse(input);

  // TODO: Verificar que el booking existe y pertenece al usuario

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(validated.amount * 100), // Stripe usa centavos
    currency: validated.currency,
    metadata: {
      bookingId: validated.bookingId,
      userId: session.user.id,
    },
  });

  return { success: true, clientSecret: paymentIntent.client_secret };
}