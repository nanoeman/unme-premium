// features/notifications/actions/send-notification.ts
'use server';

import { z } from 'zod';
import { resend } from '@/lib/resend';

const sendNotificationSchema = z.object({
  to: z.string().email(),
  subject: z.string(),
  body: z.string(),
  type: z.enum(['EMAIL', 'SMS', 'WHATSAPP']),
});

export async function sendNotification(
  input: z.infer<typeof sendNotificationSchema>
) {
  const validated = sendNotificationSchema.parse(input);

  // TODO: Implementar envío según tipo
  // EMAIL: usar Resend
  // SMS: usar Twilio
  // WHATSAPP: usar Twilio o Meta API

  if (validated.type === 'EMAIL') {
    // TODO: Enviar email con Resend
    // await resend.emails.send({
    //   from: 'UNME <noreply@unme.retreats>',
    //   to: validated.to,
    //   subject: validated.subject,
    //   html: validated.body,
    // });
  }

  return { success: true };
}