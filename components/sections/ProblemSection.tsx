'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Scale,
  Moon,
  Zap,
  Cookie,
  Thermometer,
  Dumbbell,
  ArrowRight,
} from 'lucide-react'
import { ASSESSMENT_FORM_URL } from '@/lib/links'

const problems = [
  {
    icon: <Scale size={20} />,
    image: '/home-image/weight.png',
    imageAlt: 'Woman looking unhappily at a bowl of salad',
    title: 'Weight Gain',
    description: 'Eating much the same, but your body is changing.',
  },
  {
    icon: <Moon size={20} />,
    image: '/home-image/sleep.png',
    imageAlt: 'Woman lying awake in bed at night, sweating and holding her forehead',
    title: 'Sleep & Night Sweats',
    description: 'Restless nights leave you tired the next day.',
  },
  {
    icon: <Zap size={20} />,
    image: '/home-image/fatigue.png',
    imageAlt: 'Tired woman resting her head on her hand at a desk with a laptop',
    title: 'Fatigue & Brain Fog',
    description: "Your energy and mental clarity aren't what they used to be.",
  },
  {
    icon: <Cookie size={20} />,
    image: '/home-image/carving.png',
    imageAlt: 'Woman on a sofa looking distressed while eating chocolate cake',
    title: 'Cravings & Emotional Eating',
    description: 'Stress, overwhelm or fatigue can make food harder to navigate.',
  },
  {
    icon: <Thermometer size={20} />,
    image: '/home-image/heating.png',
    imageAlt: 'Woman with her eyes closed and a hand on her forehead, feeling overheated',
    title: 'Hot Flashes',
    description: 'Unexpected heat and sweating can disrupt your day or night.',
  },
  {
    icon: <Dumbbell size={20} />,
    image: '/home-image/loss-strength.png',
    imageAlt: 'Woman sitting tired on a staircase, holding the railing',
    title: 'Loss of Strength',
    description: "You don't feel as strong or capable as you once did.",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 15,
    },
  },
}

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-cream/30 py-14 lg:py-20" aria-labelledby="problem-heading">
      <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 w-full px-8 sm:px-12 lg:px-20">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.h2
            id="problem-heading"
            className="text-section tracking-tight text-navy"
            style={{ fontFamily: 'var(--font-playfair)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Does This Sound Familiar?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 h-0.5 w-16 origin-center bg-gold/50"
          />
          <motion.p
            className="mt-6 text-lg font-light italic leading-relaxed text-muted"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Common changes during perimenopause and menopause.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {problems.map((problem) => (
            <motion.article
              key={problem.title}
              variants={item}
              className={`group flex flex-col justify-between rounded-2xl border border-cream bg-white/80 p-5 shadow-sm sm:p-8 shadow-navy/5 backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lg hover:shadow-navy/5 ${problem.image ? '' : 'min-h-[15rem]'}`}
            >
              <div className={problem.image ? 'flex items-center gap-4 sm:gap-5' : undefined}>
                {problem.image ? (
                  <div className="relative aspect-[4/3] w-24 shrink-0 sm:w-32 overflow-hidden rounded-xl">
                    <Image
                      src={problem.image}
                      alt={problem.imageAlt ?? ''}
                      fill
                      sizes="384px"
                      quality={95}
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-navy/5 text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white" aria-hidden="true">
                    {problem.icon}
                  </div>
                )}
                <div>
                  <h3
                    className="mb-2 text-xl font-bold leading-snug text-navy transition-colors sm:mb-4 sm:text-2xl duration-300 group-hover:text-accent"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {problem.title}
                  </h3>
                  <p className="text-base font-light leading-relaxed text-muted sm:text-[1.05rem]">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-2xl font-bold text-navy">
            You&apos;re not imagining it.
          </p>
          <p className="mb-8 text-xl font-light leading-relaxed text-muted">
            Your body is changing. You need a different approach - not more willpower.
          </p>
          <a
            href={ASSESSMENT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-center text-sm font-semibold leading-snug text-white transition-all duration-300 hover:bg-accent hover:shadow-md"
          >
            Book Your Appointment Today
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
