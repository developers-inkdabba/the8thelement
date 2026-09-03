'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ASSESSMENT_FORM_URL } from '@/lib/links'

export function HeroSection() {
  const shouldReduce = useReducedMotion()
  const heroCardShape = '60% 40% 60% 40% / 40% 60% 40% 60%'

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 70,
        damping: 15,
      },
    },
  }

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-warm-bg pt-28 pb-14"
      aria-label="Welcome"
    >
      <div className="z-10 w-full px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(430px,560px)] lg:gap-14 xl:gap-18">

          {/* Left Column */}
          <motion.div
            className="order-1 flex flex-col justify-center lg:pl-16 xl:pl-24"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >

            {/* Main Headline */}
            <motion.h1
              className="mb-5 max-w-3xl text-navy"
              style={{ fontFamily: 'var(--font-playfair)' }}
              variants={itemVariants}
            >
              <span className="block text-[clamp(2.55rem,4.8vw,4.8rem)] font-semibold leading-[1.05]">
                Your Body{' '}
                <span className="text-accent">Hasn&apos;t Stopped Working</span>.
              </span>
              <span className="mt-2 block text-[clamp(2.2rem,4.1vw,4.05rem)] font-semibold leading-[1.08]">
                You Just Need a New System.
              </span>
            </motion.h1>

            {/* Credentials strip */}
            <motion.p
              className="mb-5 max-w-2xl text-xs font-semibold uppercase tracking-[0.18em] text-muted/70"
              variants={itemVariants}
            >
              Gold Medalist, Nutrition &amp; Dietetics &middot; Precision Nutrition Certified &middot; Women&apos;s Health Specialist
            </motion.p>

            {/* Body Copy */}
            <motion.div
              className="mb-8 max-w-2xl space-y-3 text-base leading-relaxed text-muted sm:text-lg"
              variants={itemVariants}
            >
              <p>
                If you&apos;re over 40 and struggling with stubborn weight, belly fat, poor
                sleep, low energy, emotional eating, or menopause changes, you&apos;re not alone.
              </p>
              <p className="font-semibold text-navy">
                You&apos;re not failing. Your body has changed. Your strategy should too.
              </p>
              <p>
                Through the StrongHER&trade; Framework, I&apos;ll help you understand what&apos;s
                holding you back and build a sustainable plan to lose weight, gain strength,
                restore energy, and feel like yourself again.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div className="flex flex-col gap-3 sm:flex-row sm:items-center" variants={itemVariants}>
              <a
                href={ASSESSMENT_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[54px] max-w-full items-center justify-center gap-2 rounded-full bg-navy px-7 py-4 text-center font-semibold leading-snug text-white transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-navy/10 sm:px-8"
              >
                Book Your Appointment Today
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/quiz"
                className="inline-flex min-h-[54px] max-w-full items-center justify-center rounded-full border border-navy/50 px-7 py-4 text-center font-semibold leading-snug text-navy transition-all duration-300 hover:bg-cream/40 sm:px-8"
              >
                Discover My Menopause Stage
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Portrait */}
          <motion.div
            className="order-2 flex justify-center py-4 lg:justify-end"
            initial={shouldReduce ? {} : { opacity: 0, scale: 0.95 }}
            animate={shouldReduce ? {} : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative h-[20rem] w-72 sm:h-[25rem] sm:w-96 lg:h-[34rem] lg:w-[29rem] lg:-translate-x-12 xl:h-[36rem] xl:w-[31rem] xl:-translate-x-20">

              {/* Back Card (Gold Outline) */}
              <div
                className="absolute inset-0 border border-gold/40 rounded-3xl translate-x-3 -z-10"
                style={{ borderRadius: heroCardShape }}
              />

              {/* Main Graphic Card */}
              <div
                className="w-full h-full rounded-3xl overflow-hidden bg-cream relative shadow-xl shadow-navy/5"
                style={{ borderRadius: heroCardShape }}
                aria-label="Coach Srividya portrait"
              >
                <Image
                  src="/images/srividya.png"
                  alt="Coach Srividya"
                  fill
                  priority
                  sizes="(min-width: 1280px) 31rem, (min-width: 1024px) 29rem, (min-width: 640px) 24rem, 18rem"
                  className="object-cover"
                />
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
