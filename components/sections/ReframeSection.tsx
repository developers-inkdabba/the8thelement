'use client'

import { motion } from 'framer-motion'
import { FlaskConical, Heart, Sparkles, TrendingUp } from 'lucide-react'

const approachPoints = [
  {
    icon: <Heart size={18} />,
    title: 'Perimenopause changes the way your body responds to nutrition, movement, sleep, stress, and recovery.',
    desc: 'MenoThrive is built around these changes, helping you understand your body, work with it, and create lasting transformation through the STRONG-HER\u2122 Framework.',
  },
  {
    icon: <FlaskConical size={18} />,
    title: 'Science-Informed. Personally Applied.',
    desc: 'Every recommendation is grounded in evidence and tailored to your unique hormones, health history, lifestyle, and goals. Because no two women experience perimenopause in exactly the same way.',
  },
  {
    icon: <Sparkles size={18} />,
    title: 'A Truly Holistic Approach',
    desc: 'Lasting transformation requires more than nutrition or exercise alone. Through the STRONG-HER\u2122 Framework, we address the interconnected pillars that influence your health, including movement, sleep, stress, emotional regulation, habits, mindset, and accountability.',
  },
  {
    icon: <TrendingUp size={18} />,
    title: 'Results That Last Beyond the Program',
    desc: "This is not about quick fixes or temporary motivation. Together, we'll build sustainable habits, confidence, and a way of living that supports your health through perimenopause, menopause, and beyond.",
  },
]

export function ReframeSection() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden" aria-labelledby="reframe-heading">
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-rose-faint/50 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="w-full px-8 sm:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative bg-warm-bg border border-cream rounded-3xl p-8 lg:p-12 shadow-md overflow-hidden group">
              <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full border border-accent/8 pointer-events-none" aria-hidden="true" />

              <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center mb-8">
                <span className="text-gold font-playfair text-xl">&ldquo;</span>
              </div>

              <blockquote className="relative z-10">
                <p
                  className="text-2xl lg:text-3xl font-bold text-navy leading-relaxed italic mb-8"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Your body isn&apos;t working against you. It has simply entered a new season, and it deserves a new approach.
                </p>
                <footer className="text-xs uppercase tracking-widest font-semibold text-dark/70">
                  &mdash; Coach Srividya
                </footer>
              </blockquote>
            </div>

            <div className="absolute inset-0 border border-gold/30 rounded-3xl translate-x-4 -translate-y-4 -z-10" />
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              id="reframe-heading"
              className="text-section text-navy mb-6 tracking-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              A Different Approach for a Changing Body
            </h2>

            <ul className="flex flex-col gap-5" role="list">
              {approachPoints.map((row) => (
                <li
                  key={row.title}
                  className="flex items-start gap-5 p-4 rounded-2xl border border-transparent hover:border-cream hover:bg-warm-bg/30 transition-all duration-300 group"
                  role="listitem"
                >
                  <div
                    className="w-10 h-10 rounded-full bg-navy/5 text-navy group-hover:bg-navy group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300"
                    aria-hidden="true"
                  >
                    {row.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark text-xl leading-snug group-hover:text-accent transition-colors duration-300">
                      {row.title}
                    </h3>
                    <p className="text-muted mt-1.5 leading-relaxed font-light">
                      {row.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
