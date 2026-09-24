'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { ASSESSMENT_FORM_URL } from '@/lib/links'

export function CTABanner() {
  return (
    <section
      className="relative overflow-hidden py-10 lg:py-12"
      style={{ background: '#192028' }}
      aria-labelledby="cta-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(142,0,0,0.1) 0%, transparent 35%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-8 sm:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h2
              id="cta-heading"
              className="text-section mb-4 text-white tracking-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Ready to Feel Like Yourself Again?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-lg font-semibold leading-relaxed text-white/90 lg:mx-0">
              Start with a personalised Menopause Health Assessment.
            </p>
            <a
              href={ASSESSMENT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[54px] max-w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.08em] text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-white hover:shadow-[0_0_32px_rgba(142,0,0,0.35)] sm:px-8"
            >
              Book Your Appointment Today
              <ArrowRight size={17} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <p className="mx-auto mt-4 max-w-2xl text-base italic leading-relaxed text-white/70 lg:mx-0">
              10-15 minutes - Personally reviewed before your next step is recommended.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative mx-auto w-44 sm:w-52 lg:mx-0 lg:w-full"
          >
            <div
              className="absolute inset-0 -translate-x-3 translate-y-3 border border-gold/40"
              style={{ borderRadius: '58% 42% 62% 38% / 42% 58% 42% 58%' }}
              aria-hidden="true"
            />
            <div
              className="relative aspect-[3/4] overflow-hidden bg-cream shadow-xl shadow-black/30"
              style={{ borderRadius: '58% 42% 62% 38% / 42% 58% 42% 58%' }}
            >
              <Image
                src="/lead-magnet/cta-portrait.jpg"
                alt="Srividya smiling"
                fill
                sizes="(min-width: 1024px) 18rem, 14rem"
                className="object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
