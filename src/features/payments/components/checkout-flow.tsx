// features/payments/components/checkout-flow.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ChevronRight, ChevronLeft, CreditCard, User, FileText } from 'lucide-react';

const checkoutSchema = z.object({
  firstName: z.string().min(2, 'Nombre requerido'),
  lastName: z.string().min(2, 'Apellido requerido'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(9, 'Teléfono requerido'),
  diet: z.enum(['OMNIVORE', 'VEGETARIAN', 'VEGAN', 'GLUTEN_FREE']),
  allergies: z.string().optional(),
  specialRequests: z.string().optional(),
  couponCode: z.string().optional(),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

interface CheckoutFlowProps {
  retreatName: string;
  retreatPrice: number;
  depositAmount?: number;
  onSubmit: (data: CheckoutFormData) => Promise<void>;
}

const steps = [
  { id: 1, label: 'Datos personales', icon: User },
  { id: 2, label: 'Preferencias', icon: FileText },
  { id: 3, label: 'Pago', icon: CreditCard },
];

export function CheckoutFlow({
  retreatName,
  retreatPrice,
  depositAmount,
  onSubmit,
}: CheckoutFlowProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleFormSubmit = async (data: CheckoutFormData) => {
    if (currentStep < steps.length) {
      nextStep();
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress Header */}
      <div className="mb-8">
        <div className="mb-4 flex justify-between">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;

            return (
              <div key={step.id} className="flex flex-col items-center gap-2">
                <motion.div
                  animate={{
                    backgroundColor: isActive || isCompleted ? '#5a855a' : '#e7e5e4',
                    scale: isActive ? 1.1 : 1,
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                >
                  {isCompleted ? (
                    <Check className="h-5 w-5 text-white" />
                  ) : (
                    <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-stone-500'}`} />
                  )}
                </motion.div>
                <span
                  className={`text-xs ${
                    isActive ? 'font-medium text-stone-800' : 'text-stone-400'
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <AnimatePresence mode="wait" custom={currentStep}>
          <motion.div
            key={currentStep}
            custom={currentStep}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-heading-3">
                    Datos personales
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nombre</Label>
                      <Input
                        id="firstName"
                        {...register('firstName')}
                        className={errors.firstName ? 'border-red-500' : ''}
                      />
                      {errors.firstName && (
                        <p className="text-xs text-red-500">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Apellido</Label>
                      <Input
                        id="lastName"
                        {...register('lastName')}
                        className={errors.lastName ? 'border-red-500' : ''}
                      />
                      {errors.lastName && (
                        <p className="text-xs text-red-500">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register('phone')}
                      className={errors.phone ? 'border-red-500' : ''}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500">{errors.phone.message}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {currentStep === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-heading-3">
                    Preferencias del retiro
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Tipo de dieta</Label>
                    <select
                      {...register('diet')}
                      className="w-full rounded-subtle border border-stone-200 p-2"
                    >
                      <option value="OMNIVORE">Omnívoro</option>
                      <option value="VEGETARIAN">Vegetariano</option>
                      <option value="VEGAN">Vegano</option>
                      <option value="GLUTEN_FREE">Sin gluten</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="allergies">Alergias o intolerancias</Label>
                    <Input
                      id="allergies"
                      {...register('allergies')}
                      placeholder="Ninguna"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialRequests">Peticiones especiales</Label>
                    <textarea
                      id="specialRequests"
                      {...register('specialRequests')}
                      className="w-full rounded-subtle border border-stone-200 p-2"
                      rows={3}
                      placeholder="¿Algo que debamos saber?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="couponCode">Código de descuento</Label>
                    <div className="flex gap-2">
                      <Input
                        id="couponCode"
                        {...register('couponCode')}
                        placeholder="Opcional"
                      />
                      <Button type="button" variant="outline">
                        Aplicar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {currentStep === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-heading-3">
                    Resumen y pago
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-subtle bg-stone-50 p-4">
                    <h4 className="font-medium text-stone-800">{retreatName}</h4>
                    <div className="mt-2 space-y-1 text-sm text-stone-600">
                      <div className="flex justify-between">
                        <span>Precio por persona</span>
                        <span>{retreatPrice}€</span>
                      </div>
                      {depositAmount && (
                        <div className="flex justify-between text-terracotta">
                          <span>Depósito requerido</span>
                          <span>{depositAmount}€</span>
                        </div>
                      )}
                      <div className="flex justify-between border-t border-stone-200 pt-2 font-medium">
                        <span>Total</span>
                        <span>{retreatPrice}€</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-subtle border border-stone-200 p-4">
                    <p className="text-sm text-stone-500">
                      El pago se procesará de forma segura mediante Stripe.
                      Puedes pagar el depósito ahora y el resto más adelante.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="mt-6 flex justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Anterior
          </Button>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="gap-2 bg-sage-600 text-white hover:bg-sage-700"
          >
            {isSubmitting ? (
              'Procesando...'
            ) : currentStep === steps.length ? (
              <>
                Confirmar reserva
                <Check className="h-4 w-4" />
              </>
            ) : (
              <>
                Siguiente
                <ChevronRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}