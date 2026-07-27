// features/booking/components/retreat-card.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Users, Calendar } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface RetreatCardProps {
  id: string;
  slug: string;
  title: string;
  location: string;
  price: number;
  duration: number;
  maxGuests: number;
  rating?: number;
  reviewCount?: number;
  image: string;
  status: 'OPEN' | 'WAITLIST' | 'CLOSED';
  featured?: boolean;
}

export function RetreatCard({
  id,
  slug,
  title,
  location,
  price,
  duration,
  maxGuests,
  rating = 0,
  reviewCount = 0,
  image,
  status,
  featured = false,
}: RetreatCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const statusConfig = {
    OPEN: { label: 'Disponible', variant: 'default' as const, color: 'bg-sage-500' },
    WAITLIST: { label: 'Lista de espera', variant: 'secondary' as const, color: 'bg-sand-500' },
    CLOSED: { label: 'Completo', variant: 'destructive' as const, color: 'bg-stone-500' },
  };

  const statusInfo = statusConfig[status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-soft bg-white shadow-subtle transition-shadow hover:shadow-elevated"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {!imageLoaded && (
          <Skeleton className="absolute inset-0" />
        )}
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-full w-full"
        >
          <Image
            src={image}
            alt={title}
            fill
            className={`object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
        </motion.div>

        {/* Badges */}
        <div className="absolute left-3 top-3 flex gap-2">
          {featured && (
            <Badge className="bg-terracotta text-white">Destacado</Badge>
          )}
          <Badge className={`${statusInfo.color} text-white`}>
            {statusInfo.label}
          </Badge>
        </div>

        {/* Price Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          className="absolute bottom-3 right-3 rounded-soft bg-white/90 px-3 py-1.5 backdrop-blur-sm"
        >
          <span className="text-lg font-semibold text-stone-800">
            {price}€
          </span>
          <span className="text-sm text-stone-500"> / persona</span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-2 font-serif text-heading-3 text-stone-800 group-hover:text-sage-600 transition-colors">
          {title}
        </h3>

        <div className="mb-3 flex items-center gap-1 text-sm text-stone-500">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>

        {/* Rating */}
        {rating > 0 && (
          <div className="mb-3 flex items-center gap-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${
                    star <= Math.round(rating)
                      ? 'fill-terracotta text-terracotta'
                      : 'fill-stone-200 text-stone-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-stone-500">
              {rating} ({reviewCount})
            </span>
          </div>
        )}

        {/* Meta Info */}
        <div className="mb-4 flex items-center gap-4 text-sm text-stone-500">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{duration} días</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>Hasta {maxGuests}</span>
          </div>
        </div>

        {/* CTA */}
        {status === 'CLOSED' ? (
          <button
            disabled
            className="w-full rounded-lg bg-stone-400 px-4 py-2 text-sm font-medium text-white cursor-not-allowed"
          >
            No disponible
          </button>
        ) : (
          <Link
            href={`/retiros/${slug}`}
            className="inline-flex w-full items-center justify-center rounded-lg bg-sage-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sage-700"
          >
            Ver detalles
          </Link>
        )}
      </div>
    </motion.div>
  );
}

// Skeleton Loading State
export function RetreatCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-soft bg-white shadow-subtle">
      <Skeleton className="aspect-[4/3]" />
      <div className="p-5">
        <Skeleton className="mb-2 h-6 w-3/4" />
        <Skeleton className="mb-3 h-4 w-1/2" />
        <Skeleton className="mb-3 h-4 w-1/3" />
        <Skeleton className="mb-4 h-4 w-2/3" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
}
