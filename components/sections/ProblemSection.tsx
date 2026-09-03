'use client'

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
    number: '01',
    title: 'Weight Gain Despite Eating Well',
    description: `You're eating much the same as you always have, yet the weight—particularly around your midsection—continues to increase, leaving you wondering why nothing seems to work anymore.`,
  },
  {
    icon: <Moon size={20} />,
    number: '02',
    title: 'Sleep Disruption & Night Sweats',
    description: 'You wake during the night feeling hot, restless, or wide awake, only to spend the next day feeling exhausted and unable to function at your best.',
  },
  {
    icon: <Zap size={20} />,
    number: '03',
    title: 'Persistent Fatigue & Brain Fog',
    description: `Your energy feels unpredictable, your concentration isn't what it used to be, and even everyday tasks can feel more mentally and physically demanding.`,
  },
  {
    icon: <Cookie size={20} />,
    number: '04',
    title: 'Food Cravings & Emotional Eating',
    description: 'Cravings feel stronger than before, and eating can sometimes become a response to stress, overwhelm, or fatigue rather than genuine hunger.',
  },
  {
    icon: <Thermometer size={20} />,
    number: '05',
    title: 'Hot Flashes & Sudden Temperature Changes',
    description: 'Unexpected waves of heat, flushing, or sweating can leave you feeling uncomfortable, unsettled, and caught off guard throughout the day or night.',
  },
  {
    icon: <Dumbbell size={20} />,
    number: '06',
    title: 'Loss of Strength & Muscle Tone',
    description: `Despite staying active, you're noticing a decline in strength, changes in muscle tone, or that your body doesn't feel as capable and resilient as it once did.`,
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: 'spring' as const,
      stiffness: 80,
      damping: 15
    } 
  },
}

export function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream/30 relative overflow-hidden" aria-labelledby="problem-heading">
      {/* Background elegant circle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-gold/5 blur-3xl pointer-events-none" aria-hidden="true" />
      
      <div className="w-full px-8 sm:px-12 lg:px-20 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2
            id="problem-heading"
            className="text-section text-navy tracking-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            If This Feels Familiar, You&apos;re Not Alone.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-0.5 bg-gold/50 mx-auto mt-6 origin-center"
          />
          <motion.p
            className="text-lg text-muted leading-relaxed font-light mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            These are some of the common changes women experience during perimenopause and menopause. While every woman&apos;s journey is unique, these symptoms often signal that your body needs a different approach—not more willpower.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {problems.map((problem) => (
            <motion.article
              key={problem.title}
              variants={item}
              className="bg-white/80 backdrop-blur-xs rounded-2xl p-8 shadow-xs border border-cream hover:border-gold/30 hover:shadow-lg hover:shadow-navy/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className="w-10 h-10 rounded-full bg-navy/5 text-navy group-hover:bg-navy group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300"
                    aria-hidden="true"
                  >
                    {problem.icon}
                  </div>
                </div>
                {/* Body Content */}
                <h3 className="font-playfair text-2xl font-bold text-navy mb-3 group-hover:text-accent transition-colors duration-300 leading-snug">
                  {problem.title}
                </h3>
                <p className="text-muted leading-relaxed font-light">
                  {problem.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Call to Action Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-xl text-muted mb-8 leading-relaxed font-light">
            You&apos;re not imagining it. Your body is changing—and it needs a different approach, not more willpower.
          </p>
          <a
            href={ASSESSMENT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex max-w-full items-center justify-center gap-2 px-6 py-3 bg-navy text-white text-sm font-semibold rounded-full hover:bg-accent hover:shadow-md transition-all duration-300 text-center leading-snug whitespace-normal"
          >
            Book Your Appointment Today
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
