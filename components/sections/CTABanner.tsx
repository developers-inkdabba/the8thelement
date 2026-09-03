'use client'

import { useState } from 'react'
import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ASSESSMENT_FORM_URL } from '@/lib/links'

interface CTABannerProps {
  headline?: string
  subtext?: ReactNode
  ctaText?: string
  ctaHref?: string
  ctaMicrocopy?: ReactNode
  secondaryText?: ReactNode
  secondaryHref?: string
  secondaryLinks?: Array<{
    text: ReactNode
    href: string
  }>
}

export function CTABanner({
  headline = 'Ready to Feel Like Yourself Again?',
  subtext = (
    <>
      You&apos;ve spent enough time guessing.
      <br />
      Now it&apos;s time to understand your body, work with it, and create lasting change through a
      personalised, science-backed approach.
      <br />
      If you&apos;re ready to reclaim your health, strength, confidence, and energy, I&apos;d love to
      support you.
    </>
  ),
  ctaText = 'Book Your Appointment Today',
  ctaHref = ASSESSMENT_FORM_URL,
  ctaMicrocopy,
  secondaryText,
  secondaryHref = '/menothrive',
  secondaryLinks,
}: CTABannerProps) {
  const [hovered, setHovered] = useState(false)
  const isExternalCta = /^https?:\/\//.test(ctaHref)
  const ctaClassName =
    'inline-flex max-w-full items-center justify-center px-8 py-4 bg-white text-navy font-bold rounded-full transition-all duration-500 min-h-14 text-center text-base leading-snug whitespace-normal sm:px-10 sm:text-lg'
  const ctaStyle = {
    backgroundColor: hovered ? '#8E0000' : '#ffffff',
    color: hovered ? '#ffffff' : '#192028',
    boxShadow: hovered
      ? '0 0 32px 6px rgba(142,0,0,0.45)'
      : '0 0 0px 0px rgba(142,0,0,0)',
  }
  const resolvedSecondaryLinks =
    secondaryLinks ??
    (secondaryText
      ? [{ text: secondaryText, href: secondaryHref }]
      : [
          { text: 'Explore MenoThrive', href: '/menothrive' },
          { text: 'Explore Transform & Thrive', href: '/transform-thrive' },
        ])

  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: '#192028' }}
      aria-labelledby="cta-heading"
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(142,0,0,0.32) 0%, rgba(100,0,0,0.1) 18%, transparent 40%)',
        }}
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.55, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="cta-heading"
            className="text-white mb-4"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            {headline}
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            {subtext}
          </p>

          {isExternalCta ? (
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className={ctaClassName}
              style={ctaStyle}
            >
              {ctaText}
            </a>
          ) : (
            <Link
              href={ctaHref}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className={ctaClassName}
              style={ctaStyle}
            >
              {ctaText}
            </Link>
          )}

          {ctaMicrocopy && (
            <p className="mt-4 text-white/65 text-sm leading-relaxed max-w-xl mx-auto">
              {ctaMicrocopy}
            </p>
          )}

          {resolvedSecondaryLinks.length > 0 && (
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {resolvedSecondaryLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="inline-flex items-center justify-center rounded-full border border-gold/40 bg-gold/10 px-5 py-2 text-sm font-semibold text-gold transition-all duration-300 hover:bg-gold hover:text-navy"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
