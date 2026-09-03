'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  CheckCircle2, XCircle, Dumbbell, Salad, BedDouble, Zap, Apple,
  Target, Activity, HeartHandshake, Users, BookOpen, Phone, MessageCircle, BarChart2,
} from 'lucide-react'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { ASSESSMENT_FORM_URL } from '@/lib/links'

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' }, transition: { duration: 0.5 } }
const stagger = (delay: number) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' }, transition: { duration: 0.5, delay } })

const forYouItems = [
  `You're tired of doing "everything right" but your body isn't responding the way it used to.`,
  `You're experiencing stubborn weight gain, fatigue, poor sleep, mood swings, or low energy.`,
  `You want a personalized roadmap—not generic advice.`,
  `You're ready to create lasting lifestyle change.`,
  `You value expert guidance, accountability, and long-term support.`,
]
const notForYouItems = [
  `You're looking for rapid weight-loss solutions.`,
  `You prefer restrictive diets, calorie counting, or generic meal plans.`,
  `You're not ready to build sustainable habits for long-term health.`,
  `You're looking for a passive program rather than a personalised coaching partnership.`,
]
const strongherPillars = [
  { letter: 'S', name: 'Sleep & Recovery', description: 'Restore your body through better sleep, recovery, and nervous system regulation.', Icon: BedDouble },
  { letter: 'T', name: 'Training for Strength & Mobility', description: 'Build strength, improve mobility, and support healthy aging with movement tailored to your body.', Icon: Dumbbell },
  { letter: 'R', name: 'Regulate Emotions & Stress', description: 'Develop practical tools to manage emotional eating, mood swings, overwhelm, and chronic stress.', Icon: HeartHandshake },
  { letter: 'O', name: 'Own Your Health', description: `Learn to listen to your body's signals, eat mindfully, and make confident choices without restrictive diets or calorie counting.`, Icon: Activity },
  { letter: 'N', name: 'Nourish with Balanced Nutrition', description: 'Support your hormones and overall health with personalized nutrition that fits your lifestyle.', Icon: Salad },
  { letter: 'G', name: 'Grow Through Sustainable Habits', description: 'Create simple, sustainable habits that make healthy living effortless and lasting.', Icon: Target },
  { letter: 'H', name: 'Heal Your Relationship with Yourself', description: 'Cultivate self-compassion, confidence, body acceptance, and healthier relationships with yourself and others.', Icon: Users },
  { letter: 'E', name: 'Elevate Self-Trust', description: 'Build confidence in your ability to make decisions, stay consistent, and navigate this stage of life with resilience.', Icon: Zap },
  { letter: 'R', name: 'Reflect, Reset & Rise', description: 'Regularly review your progress, celebrate wins, overcome setbacks, and keep moving forward with clarity and purpose.', Icon: Apple },
]
const included = [
  { Icon: Salad, title: 'Personalised Nutrition Plan', description: 'A fully customised nutrition blueprint built around your hormonal stage, preferences, and health goals.' },
  { Icon: Dumbbell, title: 'Custom Strength Program', description: 'A progressive, hormone-aware strength training plan updated as you grow stronger.' },
  { Icon: Phone, title: 'Weekly 1:1 Coaching Calls', description: 'Regular video coaching sessions to review progress, troubleshoot, and recalibrate your plan.' },
  { Icon: BarChart2, title: 'Track 2 Transform Tool', description: 'A proprietary tracking system to monitor your nutrition, habits, energy, and symptoms week by week.' },
  { Icon: BookOpen, title: 'Menopause Resource Library', description: 'An ever-growing library of guides, recipes, research summaries, and video resources.' },
  { Icon: MessageCircle, title: 'WhatsApp Support', description: 'Direct messaging access for accountability check-ins and quick questions between sessions.' },
]
const faqs = [
  { question: 'Who is MenoThrive designed for?', answer: 'MenoThrive is designed for women in perimenopause and postmenopause who are ready to take a personalised, science-backed approach to improving their health, strength, energy, and confidence.' },
  { question: `Is MenoThrive suitable if I'm already postmenopausal?`, answer: `Yes. Whether you're in perimenopause or postmenopause, the program is tailored to your current stage, symptoms, health history, and goals.` },
  { question: 'Do I need previous fitness or nutrition experience?', answer: `Not at all. Your coaching plan is designed around your current fitness level, lifestyle, and medical history. Whether you're just getting started or already active, every recommendation is personalised to you.` },
  { question: 'How much time should I expect to commit each week?', answer: 'Most clients spend 3–5 hours per week, including exercise, meal planning, coaching activities, and implementing new habits. The focus is on creating sustainable routines that fit your lifestyle—not adding unnecessary complexity.' },
  { question: 'Is MenoThrive delivered online?', answer: 'Yes. MenoThrive is a fully online coaching program, allowing you to receive personalised support wherever you are. Coaching, check-ins, resources, and accountability are all provided virtually.' },
  { question: 'How do I start?', answer: `Start with the Menopause Health Assessment so we can understand your symptoms, goals, health history, and current challenges before recommending the right next step.` },
]

export function MenoThriveContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 lg:py-32" aria-labelledby="menothrive-hero-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20 text-center">
          <motion.h1 {...stagger(0.1)} id="menothrive-hero-heading" className="text-hero text-white max-w-4xl mx-auto" style={{ fontFamily: 'var(--font-playfair)' }}>MenoThrive - Reclaim Your Health, Strength &amp; Confidence</motion.h1>
          <motion.h2 {...stagger(0.2)} className="mt-6 text-2xl lg:text-3xl font-bold text-white max-w-4xl mx-auto leading-snug" style={{ fontFamily: 'var(--font-playfair)' }}>Through the STRONG-HER™ 9 Pillar Framework for Women Navigating Perimenopause &amp; Menopause</motion.h2>
          <motion.p {...stagger(0.3)} className="mt-6 text-white/75 text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">A deeply personalised coaching experience that combines science-backed nutrition, strength training, sustainable lifestyle strategies, emotional wellbeing, and accountability to help you thrive—not just survive—through perimenopause and menopause.</motion.p>
          <motion.div {...stagger(0.4)} className="mt-10">
            <a href={ASSESSMENT_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex max-w-full items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-full hover:opacity-90 hover:scale-[1.03] hover:shadow-2xl transition-all duration-200 min-h-[56px] text-center text-base leading-snug whitespace-normal sm:px-10 sm:text-lg" id="assessment">See If MenoThrive Is Right for You</a>
          </motion.div>
          <motion.p {...stagger(0.5)} className="mt-6 text-white/50 text-base">Suitable for women aged 30–60+ | Peri- and post-menopause stages</motion.p>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="who-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 id="who-heading" className="text-section text-navy" style={{ fontFamily: 'var(--font-playfair)' }}>Is MenoThrive Right for You?</h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div {...stagger(0.1)} className="bg-warm-bg rounded-2xl p-8 lg:p-10 border border-gray-100">
              <h3 className="text-3xl font-bold text-navy mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>This program is for you if&hellip;</h3>
              <ul className="space-y-4" role="list">
                {forYouItems.map((item) => (
                  <li key={item} className="flex items-start gap-3" role="listitem">
                    <CheckCircle2 size={25} className="text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-dark text-[1.1rem] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...stagger(0.2)} className="bg-warm-bg rounded-2xl p-8 lg:p-10 border border-gray-100">
              <h3 className="text-3xl font-bold text-navy mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>MenoThrive may not be the right fit if&hellip;</h3>
              <ul className="space-y-4" role="list">
                {notForYouItems.map((item) => (
                  <li key={item} className="flex items-start gap-3" role="listitem">
                    <XCircle size={25} className="text-muted shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-muted text-[1.1rem]  leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STRONG-HER™ Framework */}
      <section className="py-20 lg:py-28 bg-cream" aria-labelledby="strongher-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <motion.div {...fadeUp} className="text-center mb-4">
            <h2 id="strongher-heading" className="text-section text-navy" style={{ fontFamily: 'var(--font-playfair)' }}>The STRONG-HER™ 9 Pillar Framework</h2>
          </motion.div>
          <motion.p {...stagger(0.15)} className="text-center text-muted text-xl max-w-3xl mx-auto mb-5">A holistic, science-backed framework designed to help women thrive through perimenopause and menopause.</motion.p>
          <motion.p {...stagger(0.2)} className="text-center text-muted text-lg italic leading-relaxed max-w-4xl mx-auto mb-14">Lasting transformation doesn&apos;t come from focusing on just one aspect of your health. The STRONG-HER™ Framework integrates 9 interconnected pillars that support your body, mind, and lifestyle—helping you build strength, resilience, confidence, and lifelong wellbeing.</motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {strongherPillars.map(({ letter, name, description, Icon }, idx) => (
              <motion.article key={`${letter}-${name}`} {...stagger(idx * 0.07)} role="listitem" className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-full bg-navy flex items-center justify-center shrink-0" aria-hidden="true">
                  <span className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-playfair)' }}>{letter}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={16} className="text-gold shrink-0" aria-hidden="true" />
                    <h3 className="font-bold text-2xl text-dark">{name}</h3>
                  </div>
                  <p className="text-muted leading-relaxed">{description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="included-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 id="included-heading" className="text-section text-navy" style={{ fontFamily: 'var(--font-playfair)' }}>What You Get Inside MenoThrive</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {included.map(({ Icon, title, description }, idx) => (
              <motion.article key={title} {...stagger(idx * 0.08)} role="listitem" className="bg-warm-bg rounded-2xl p-7 border border-gray-100 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center" aria-hidden="true">
                  <Icon size={22} className="text-navy" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-dark text-2xl mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>{title}</h3>
                  <p className="text-muted text-base leading-relaxed">{description}</p>
                </div>
              </motion.article>
            ))}
          </div>
          <motion.p {...stagger(0.4)} className="mt-10 text-center text-muted text-base">
            <span className="font-semibold text-dark">Duration:</span> &nbsp;6 months &nbsp;|&nbsp;
            <span className="font-semibold text-dark">Format:</span> &nbsp;Online &nbsp;|&nbsp;
            <span className="font-semibold text-dark">Spots:</span> Limited
          </motion.p>
        </div>
      </section>

      <TestimonialsSection />

      {/* Pricing */}
      <section className="py-20 lg:py-28 bg-navy" aria-labelledby="pricing-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 id="pricing-heading" className="text-section text-white" style={{ fontFamily: 'var(--font-playfair)' }}>Ready to Take the Next Step?</h2>
          </motion.div>
          <motion.div {...stagger(0.15)} className="max-w-3xl mx-auto bg-white rounded-3xl p-10 lg:p-14 text-center shadow-2xl">
            <p className="text-4xl font-bold text-navy mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>Your Journey Starts Here</p>
            <p className="text-muted text-[1.1rem] leading-relaxed mb-4">MenoThrive is a high-touch, personalized coaching experience for women who are ready to make a meaningful investment in their long-term health, strength, and wellbeing.</p>
            <p className="text-muted text-[1.1rem] leading-relaxed mb-8">To ensure every client receives exceptional support and attention, I work with a limited number of women at any given time.</p>
            <a href={ASSESSMENT_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-full max-w-full items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-full hover:opacity-90 hover:scale-[1.03] hover:shadow-xl transition-all duration-200 min-h-[56px] text-center text-base leading-snug whitespace-normal sm:w-auto sm:px-10 sm:text-lg">See If MenoThrive Is Right for You</a>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 id="faq-heading" className="text-section text-navy" style={{ fontFamily: 'var(--font-playfair)' }}>Frequently Asked Questions</h2>
          </motion.div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-cream" aria-labelledby="meno-transform-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <motion.div
            {...fadeUp}
            className="max-w-4xl mx-auto bg-white rounded-3xl p-8 lg:p-10 text-center shadow-sm border border-gold/20"
          >
            <h2
              id="meno-transform-heading"
              className="text-3xl lg:text-4xl font-bold text-navy mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Looking for a small-group coaching experience?
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              Explore Transform &amp; Thrive, our 20-week small-group coaching program for women who want
              expert guidance, accountability, and a supportive community while building sustainable habits.
            </p>
            <Link
              href="/transform-thrive"
              className="inline-flex items-center justify-center px-8 py-4 bg-navy text-white font-bold rounded-full hover:bg-accent transition-all duration-200 min-h-14"
            >
              Explore Transform &amp; Thrive
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Next Step */}
      <section className="py-20 lg:py-28 bg-cream" aria-labelledby="next-step-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <p className="text-accent font-bold uppercase tracking-[0.2em] mb-4">Your Next Step</p>
            <h2 id="next-step-heading" className="text-section text-navy mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>Let&apos;s See If MenoThrive Is the Right Fit for You</h2>
            <p className="text-muted text-xl leading-relaxed mb-10">
              If MenoThrive feels like the right next step, every woman begins with our Menopause
              Health Assessment. This helps me understand your health history, symptoms, lifestyle,
              and goals before recommending the most appropriate level of support.
            </p>
          </motion.div>

          <motion.div {...stagger(0.15)} className="max-w-2xl mx-auto bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100 mb-8 text-left">
            <ol className="space-y-5" role="list">
              <li className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-white font-bold" aria-hidden="true">1</span>
                <p className="text-dark text-lg font-bold pt-0.5">Complete your Menopause Health Assessment.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-white font-bold" aria-hidden="true">2</span>
                <p className="text-dark text-lg font-bold pt-0.5">I&apos;ll personally review your assessment.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-white font-bold" aria-hidden="true">3</span>
                <p className="text-dark text-lg font-bold pt-0.5">
                  If we&apos;re a good fit, you&apos;ll be invited to a Menopause Strategy Session,
                  where we&apos;ll discuss your health goals, answer your questions, and determine
                  whether MenoThrive is the right coaching partnership for you.
                </p>
              </li>
            </ol>
          </motion.div>

          <motion.div {...stagger(0.25)}>
            <a href={ASSESSMENT_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex max-w-full items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-full hover:opacity-90 hover:scale-[1.03] hover:shadow-xl transition-all duration-200 min-h-[56px] text-center text-base leading-snug whitespace-normal sm:px-10 sm:text-lg">Book Your Appointment Today</a>
            <p className="mt-5 text-muted max-w-2xl mx-auto">
              To ensure every client receives exceptional support and attention, I work with a
              limited number of 1:1 clients at any given time.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
