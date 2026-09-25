'use client'

import { motion } from 'framer-motion'
import { Apple, BedDouble, Dumbbell, Leaf } from 'lucide-react'

const approachPoints = [
  {
    icon: <Apple size={18} />,
    title: 'Nourish',
    desc: 'Nutrition that works with your real life.',
  },
  {
    icon: <Dumbbell size={18} />,
    title: 'Strengthen',
    desc: 'Build strength, not just lose weight.',
  },
  {
    icon: <BedDouble size={18} />,
    title: 'Regulate',
    desc: 'Support energy, stress, sleep & recovery.',
  },
  {
    icon: <Leaf size={18} />,
    title: 'Sustain',
    desc: 'Build habits you can actually keep.',
  },
]

export function ReframeSection() {
  return (
    <section className="py-14 lg:py-16 bg-white relative overflow-hidden" aria-labelledby="reframe-heading">
      <div className="w-full px-8 sm:px-12 lg:px-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              id="reframe-heading"
              className="text-section mb-5 text-navy tracking-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              A Different Approach for a Changing Body
            </h2>

            <div className="mx-auto mb-10 max-w-3xl border-b border-dark/10 pb-8">
              <p className="mb-2 text-xl font-bold leading-snug text-dark sm:text-2xl">
                Your body isn&apos;t working against you.
              </p>
              <p className="text-base italic leading-relaxed text-dark/75 sm:text-lg">
                It just needs an approach that works with where you are now.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-4" role="list">
              {approachPoints.map((row) => (
                <li
                  key={row.title}
                  className="group flex items-start gap-4 rounded-2xl border border-cream bg-warm-bg/35 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white hover:shadow-lg hover:shadow-navy/5"
                  role="listitem"
                >
                  <div
                    className="w-10 h-10 rounded-full bg-navy/5 text-navy group-hover:bg-navy group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300"
                    aria-hidden="true"
                  >
                    {row.icon}
                  </div>
                  <div>
                    <h3
                      className="text-xl font-semibold leading-tight tracking-tight text-navy transition-colors duration-300 group-hover:text-accent"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {row.title}
                    </h3>
                    <p className="mt-1.5 text-[0.95rem] font-normal leading-relaxed text-muted">
                      {row.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mx-auto mt-10 max-w-3xl border-t border-dark/10 pt-8">
              <p className="mb-2 text-sm font-bold uppercase tracking-wide text-dark">
                Bottom Line
              </p>
              <p className="text-lg font-bold leading-relaxed text-dark sm:text-xl">
                No extreme diets. No quick fixes. No starting over.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
