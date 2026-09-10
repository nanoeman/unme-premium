import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Limpiar
  await prisma.booking.deleteMany();
  await prisma.retreatSchedule.deleteMany();
  await prisma.retreat.deleteMany();

  // Retiro 1
  const retreat1 = await prisma.retreat.create({
    data: {
      slug: 'silencio-profundo',
      title: 'Silencio Profundo',
      subtitle: '7 días de meditación en completo silencio',
      description: 'Un retiro diseñado para quienes buscan la profundidad del silencio interior. Durante 7 días, nos sumergimos en la práctica de la meditación Vipassana en un entorno natural privilegiado de la Sierra de Gredos.',
      price: 1200,
      duration: 7,
      maxGuests: 12,
      location: 'Sierra de Gredos, España',
      coverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
      status: 'PUBLISHED',
      featured: true,
      schedules: {
        create: [
          {
            startDate: new Date('2026-08-15'),
            endDate: new Date('2026-08-22'),
            price: 1200,
            spotsTotal: 12,
            spotsLeft: 4,
            status: 'OPEN',
          },
          {
            startDate: new Date('2026-10-10'),
            endDate: new Date('2026-10-17'),
            price: 1200,
            spotsTotal: 12,
            spotsLeft: 8,
            status: 'OPEN',
          },
        ],
      },
    },
  });

  // Retiro 2
  const retreat2 = await prisma.retreat.create({
    data: {
      slug: 'yoga-naturaleza',
      title: 'Yoga & Naturaleza',
      subtitle: 'Conecta cuerpo y mente en la montaña',
      description: 'Una experiencia de 5 días donde el yoga se fusiona con la naturaleza. Prácticas diarias de Hatha y Vinyasa, caminatas meditativas y alimentación consciente en los Pirineos.',
      price: 950,
      duration: 5,
      maxGuests: 16,
      location: 'Pirineos, España',
      coverImage: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80',
      status: 'PUBLISHED',
      featured: true,
      schedules: {
        create: [
          {
            startDate: new Date('2026-09-05'),
            endDate: new Date('2026-09-10'),
            price: 950,
            spotsTotal: 16,
            spotsLeft: 8,
            status: 'OPEN',
          },
        ],
      },
    },
  });

  // Retiro 3
  const retreat3 = await prisma.retreat.create({
    data: {
      slug: 'transformacion-personal',
      title: 'Transformación Personal',
      subtitle: 'Un viaje interior de 10 días',
      description: 'Diez días dedicados a tu transformación personal a través de talleres de crecimiento, meditación profunda y terapias holísticas en la Costa Brava.',
      price: 1800,
      duration: 10,
      maxGuests: 10,
      location: 'Costa Brava, España',
      coverImage: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=800&q=80',
      status: 'PUBLISHED',
      featured: true,
      schedules: {
        create: [
          {
            startDate: new Date('2026-10-01'),
            endDate: new Date('2026-10-11'),
            price: 1800,
            spotsTotal: 10,
            spotsLeft: 2,
            status: 'OPEN',
          },
        ],
      },
    },
  });

  console.log('✅ Seed completado:', { retreat1: retreat1.id, retreat2: retreat2.id, retreat3: retreat3.id });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });