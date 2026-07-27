// components/marketing/cinematic-hero.tsx
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface CinematicHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage: string;
  ctaText?: string;
  ctaHref?: string;
}

export function CinematicHero({
  title,
  subtitle,
  description,
  backgroundImage,
  ctaText = 'Descubre nuestros retiros',
  ctaHref = '/retiros',
}: CinematicHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-stone-950"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-stone-950/20 to-stone-950/80" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {subtitle && (
            <motion.p
              variants={itemVariants}
              className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sage-300"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.h1
            variants={itemVariants}
            className="mb-6 font-serif text-display-1 text-stone-50"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-body-lg text-stone-200/80"
            >
              {description}
            </motion.p>
          )}

          <motion.div variants={itemVariants}>
            <Button
              asChild
              size="lg"
              className="group bg-terracotta text-white hover:bg-terracotta/90"
            >
              <a href={ctaHref}>
                {ctaText}
                <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-6 w-6 text-stone-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}