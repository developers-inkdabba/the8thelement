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
      className="relative flex items-center overflow-hidden bg-warm-bg pt-20 pb-10 sm:min-h-screen sm:pt-32 sm:pb-14"
      aria-label="Welcome"
    >
      <div className="z-10 w-full px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="grid w-full grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(430px,560px)] lg:gap-14 xl:gap-18">

          {/* Left Column */}
          <motion.div
            className="order-2 flex flex-col justify-center lg:order-1 lg:pl-16 xl:pl-24"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >

            <motion.p
              className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-dark/70 sm:text-[0.95rem]"
              variants={itemVariants}
            >
              For Women 40+
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              className="mb-5 max-w-4xl text-navy"
              style={{ fontFamily: 'var(--font-playfair)' }}
              variants={itemVariants}
            >
              <span className="block text-[clamp(2.25rem,10vw,4.55rem)] font-semibold leading-[1.05] text-dark">
                Your Body Hasn&apos;t
              </span>
              <span className="block text-[clamp(2.25rem,10vw,4.55rem)] font-semibold leading-[1.05] text-accent">
                Stopped Working.
              </span>
              <span className="mt-4 block text-[clamp(1.95rem,8.5vw,3.75rem)] font-semibold leading-[1.08] text-navy">
                You Just Need a New System.
              </span>
            </motion.h1>

            {/* Body Copy */}
            <motion.p
              className="mb-7 max-w-4xl text-[1.15rem] font-normal leading-relaxed text-dark/80 sm:text-[1.32rem]"
              variants={itemVariants}
            >
              Lose stubborn weight, regain strength &amp; energy, and feel like yourself again.
            </motion.p>

            {/* Credentials strip */}
            <motion.p
              className="mb-8 max-w-4xl text-xs font-medium uppercase tracking-[0.16em] text-dark/70 sm:text-sm"
              variants={itemVariants}
            >
              Gold Medalist &middot; Precision Nutrition Certified &middot; Women&apos;s Health Specialist
            </motion.p>

            {/* CTAs */}
            <motion.div className="flex flex-col gap-3 sm:flex-row sm:items-center" variants={itemVariants}>
              <a
                href={ASSESSMENT_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[52px] w-full max-w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-accent px-5 py-3.5 text-center text-[0.95rem] font-bold uppercase leading-snug text-white transition-all duration-300 hover:bg-navy hover:shadow-lg hover:shadow-navy/10 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Book Your Appointment Today
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/quiz"
                className="group inline-flex min-h-[44px] w-full max-w-full items-center justify-center gap-2 whitespace-nowrap px-2 py-2 text-center text-sm font-semibold leading-snug text-navy transition-colors duration-300 hover:text-accent sm:w-auto"
              >
                Discover My Menopause Stage
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Portrait */}
          <motion.div
            className="order-1 flex justify-center py-2 sm:py-4 lg:order-2 lg:justify-end"
            initial={shouldReduce ? {} : { opacity: 0, scale: 0.95 }}
            animate={shouldReduce ? {} : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative h-[15.5rem] w-[14rem] sm:h-[25rem] sm:w-96 lg:h-[34rem] lg:w-[29rem] lg:-translate-x-12 xl:h-[36rem] xl:w-[31rem] xl:-translate-x-20">

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
                  src="/images/srividya.jpg"
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
