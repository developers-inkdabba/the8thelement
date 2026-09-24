'use client'

import { motion } from 'framer-motion'
import { ProgramCard } from '@/components/ui/ProgramCard'
import { ASSESSMENT_FORM_URL } from '@/lib/links'

export function ProgramsSection() {
  return (
    <section className="py-16 lg:py-24 bg-navy relative overflow-hidden" aria-labelledby="programs-heading">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-accent/[0.03] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="w-full px-8 sm:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="programs-heading"
            className="text-section text-white tracking-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Two Ways to Work With Me
          </h2>
          <p className="mt-5 text-white/70 text-lg italic leading-relaxed max-w-3xl mx-auto">
            Personalised support for women navigating midlife health.
          </p>
          <div className="w-16 h-0.5 bg-gold/30 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <ProgramCard
              eyebrow="Private 1:1 Coaching"
              title="MenoThrive"
              subtitle="For women who want deeper personalisation, accountability and high-touch support."
              ctaText="Explore MenoThrive"
              ctaHref="/menothrive"
              featured={true}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ProgramCard
              eyebrow="Small-Group Coaching"
              title="Transform & Thrive"
              subtitle="For women who want personalised guidance, accountability and the support of a community."
              ctaText="Explore Transform & Thrive"
              ctaHref="/transform-thrive"
              featured={false}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-14 max-w-3xl mx-auto text-center"
        >
          <h3
            className="text-3xl text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Not sure which is right for you?
          </h3>
          <p className="text-white/75 text-lg leading-relaxed mb-3">
            You don&apos;t have to decide.
          </p>
          <p className="text-white/70 text-base lg:text-lg leading-relaxed mb-8">
            Every woman begins with a Menopause Health Assessment. I&apos;ll review where you are
            and recommend the right next step.
          </p>
          <a
            href={ASSESSMENT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[52px] max-w-full items-center justify-center rounded-full border border-gold/60 px-7 py-4 text-center text-sm font-semibold leading-snug whitespace-normal text-gold transition-all duration-300 hover:bg-gold hover:text-navy hover:shadow-lg sm:px-8"
          >
            Book Your Appointment Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}
