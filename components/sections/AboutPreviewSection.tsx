'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function AboutPreviewSection() {
  const storyCardShape = '60% 40% 60% 40% / 40% 60% 40% 60%'

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" aria-labelledby="about-preview-heading">
      <div className="absolute inset-x-0 top-0 h-px bg-gold/20" aria-hidden="true" />

      <div className="w-full px-8 sm:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 flex justify-center relative py-6 lg:order-1 lg:col-span-5"
          >
            <div className="relative w-72 h-80 sm:w-96 sm:h-[28rem] lg:w-[25rem] lg:h-[31rem]">
              <div
                className="absolute inset-0 translate-x-3 -z-10 border border-gold/40 rounded-3xl"
                style={{ borderRadius: storyCardShape }}
              />

              <div
                className="relative h-full w-full overflow-hidden rounded-3xl bg-cream shadow-xl shadow-navy/5"
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
            className="order-2 lg:order-2 lg:col-span-7"
          >
            <h2
              id="about-preview-heading"
              className="text-section text-navy mb-4 tracking-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              The Story Behind The 8th Element
            </h2>

            <p className="text-accent font-semibold uppercase tracking-[0.18em] text-sm mb-5">
              From personal transformation to purposeful coaching
            </p>

            <div className="space-y-5 text-muted leading-relaxed mb-8 lg:text-[1.2rem] font-light">
              <p>
                Before I coached women through midlife health, I had my own turning point. I know what
                it feels like to want change, to feel disconnected from your body, and to wonder where
                to begin.
              </p>
              <p>
                That experience is why my work is never just about food plans or workouts. It is about
                helping women feel seen, understood, and supported with a system that respects their
                hormones, lifestyle, strength, and story.
              </p>
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-navy text-white font-semibold rounded-full hover:bg-accent transition-all duration-300 hover:shadow-md"
            >
              Read Srividya&apos;s Full Story
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
