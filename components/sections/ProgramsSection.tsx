'use client'

import { motion } from 'framer-motion'
import { ProgramCard } from '@/components/ui/ProgramCard'
import { ASSESSMENT_FORM_URL } from '@/lib/links'

export function ProgramsSection() {
  return (
    <section className="py-24 lg:py-32 bg-navy relative overflow-hidden" aria-labelledby="programs-heading">
      {/* Editorial dark botanical decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-accent/[0.03] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      
      <div className="w-full px-8 sm:px-12 lg:px-20 relative z-10">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2
            id="programs-heading"
            className="text-section text-white tracking-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Two Ways to Transform Your Health
          </h2>
          <p className="mt-5 text-white/70 text-lg italic leading-relaxed max-w-3xl mx-auto">
            Whether you&apos;re looking for a deeply personalised 1:1 experience or the support of a small,
            intimate group, you&apos;ll receive science-backed coaching designed specifically for women navigating
            perimenopause and menopause.
          </p>
          <div className="w-16 h-0.5 bg-gold/30 mx-auto mt-6" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <ProgramCard
              eyebrow="Signature 1:1 Experience"
              title="MenoThrive"
              subtitle="A premium 1:1 coaching experience for women seeking personalised support, expert guidance, and lasting transformation."
              benefits={[
                'Fully personalised nutrition, movement, and lifestyle strategy',
                'Dedicated 1:1 coaching tailored to your unique goals and stage of life',
                'Daily accountability and ongoing support',
                'The complete STRONG-HER\u2122 Framework for lasting transformation',
              ]}
              ctaText="Book Your Appointment Today"
              ctaHref={ASSESSMENT_FORM_URL}
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
              subtitle="A small-group coaching program for women who value expert guidance, accountability, and the motivation of a supportive community."
              benefits={[
                'Small boutique cohort with personalised attention',
                'Live coaching sessions with practical implementation',
                'Sustainable nutrition, movement, and lifestyle coaching',
                'Community support and accountability',
              ]}
              ctaText="Book Your Appointment Today"
              ctaHref={ASSESSMENT_FORM_URL}
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
            Not sure which program is right for you?
          </h3>
          <p className="text-white/75 text-lg leading-relaxed mb-3">
            You don&apos;t have to decide.
          </p>
          <p className="text-white/75 text-lg leading-relaxed mb-3">
            Every woman begins with our Menopause Health Assessment.
          </p>
          <p className="text-white/70 text-base lg:text-lg leading-relaxed mb-8">
            Once I&apos;ve reviewed your assessment, if we&apos;re a good fit, I&apos;ll recommend
            the most appropriate way for us to work together - whether that&apos;s MenoThrive,
            Transform &amp; Thrive, or another suitable next step.
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
