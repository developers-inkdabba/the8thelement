'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function AboutPreviewSection() {
  const storyCardShape = '60% 40% 60% 40% / 40% 60% 40% 60%'

  return (
    <section className="relative overflow-hidden bg-white py-10 lg:py-12" aria-labelledby="about-preview-heading">
      <div className="absolute inset-x-0 top-0 h-px bg-gold/20" aria-hidden="true" />

      <div className="relative z-10 w-full px-8 sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 border-y border-dark/10 py-10 lg:grid-cols-[minmax(16rem,22rem)_minmax(0,1fr)] lg:gap-14 lg:py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-1 flex justify-center lg:order-1 lg:justify-start"
          >
            <div className="relative h-72 w-64 sm:h-80 sm:w-72 lg:h-[24rem] lg:w-[19rem]">
              <div
                className="absolute inset-0 -z-10 translate-x-3 border border-gold/40 shadow-sm shadow-navy/5"
                style={{ borderRadius: storyCardShape }}
              />

              <div
                className="relative h-full w-full overflow-hidden bg-cream shadow-xl shadow-navy/5"
                style={{ borderRadius: storyCardShape }}
                aria-label="Srividya's first transformation photo"
              >
                <Image
                  src="/images/old.jpg"
                  alt="Srividya's early health journey photo"
                  fill
                  sizes="(min-width: 1024px) 25rem, (min-width: 640px) 24rem, 18rem"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-2 lg:pl-2"
          >
            <h2
              id="about-preview-heading"
              className="mb-5 max-w-2xl text-[clamp(2rem,5vw,3.2rem)] font-semibold leading-tight tracking-tight text-navy"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              The Story Behind The 8th Element
            </h2>

            <p className="mb-7 max-w-3xl text-sm font-semibold uppercase italic tracking-[0.14em] text-accent sm:text-base">
              From personal transformation to purposeful coaching
            </p>

            <div className="mb-8 max-w-3xl space-y-5 text-[1.05rem] font-medium leading-relaxed text-dark/90 sm:text-[1.16rem]">
              <p>
                Before I coached women through midlife health, I had my own turning point. I know what
                it feels like to want change, to feel disconnected from your body, and to wonder where
                to begin.
              </p>
              <p>
                That experience shaped how I coach today - with a system that considers the whole
                woman, not just food or exercise.
              </p>
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-dark transition-colors duration-300 hover:text-accent"
            >
              Read Srividya&apos;s Full Story
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
