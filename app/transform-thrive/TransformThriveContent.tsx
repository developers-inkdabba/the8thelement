'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ClipboardCheck, FileText, MessageCircle, Users, Video, CheckCircle2, XCircle, ArrowRight, Dumbbell, Salad, Apple, Wind, Moon, Repeat } from 'lucide-react'
import { CTABanner } from '@/components/sections/CTABanner'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { ASSESSMENT_FORM_URL } from '@/lib/links'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
}
const stagger = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, delay },
})

const skillsToBuild = ['Eat with confidence.', 'Build strength.', 'Manage stress.', 'Sleep and recover better.', 'Create habits that last.']

const pillars = [
  {
    icon: <Users size={28} aria-hidden="true" />,
    title: 'Small-Group Coaching',
    description: 'Up to 10 women. Personal attention within a supportive group.',
  },
  {
    icon: <Video size={28} aria-hidden="true" />,
    title: 'Weekly Live Coaching',
    description: 'Expert guidance you can apply immediately.',
  },
  {
    icon: <MessageCircle size={28} aria-hidden="true" />,
    title: 'Daily WhatsApp Support',
    description: 'Guidance, accountability and encouragement between calls.',
  },
  {
    icon: <ClipboardCheck size={28} aria-hidden="true" />,
    title: 'Habit Tracking',
    description: 'Turn healthy actions into routines that stick.',
  },
  {
    icon: <FileText size={28} aria-hidden="true" />,
    title: 'Practical Tools',
    description: 'Meal planning, recipes, trackers and resources for everyday life.',
  },
]

const journeyPhases = [
  { number: '01', title: 'Build Your Foundation', description: 'Strength, balanced nutrition and simple routines.' },
  { number: '02', title: 'Make It Easier', description: 'Meal planning, intuitive eating and practical systems.' },
  { number: '03', title: 'Handle Real Life', description: 'Stress, cravings, setbacks and changing schedules.' },
  { number: '04', title: 'Make It Yours', description: 'Build the confidence and skills to keep going beyond the programme.' },
]

const skillsYoullBuild = [
  { Icon: Dumbbell, title: 'Strength & movement', description: 'Build a sustainable strength routine.' },
  { Icon: Salad, title: 'Balanced nutrition', description: 'Learn how to fuel your body without restriction.' },
  { Icon: Apple, title: 'Intuitive & mindful eating', description: 'Develop a healthier relationship with food.' },
  { Icon: Wind, title: 'Stress & emotional eating', description: 'Learn practical ways to navigate cravings and stress.' },
  { Icon: Moon, title: 'Sleep & recovery', description: 'Build habits that support energy and wellbeing.' },
  { Icon: Repeat, title: 'Sustainable habits', description: 'Create routines that continue beyond 20 weeks.' },
]

const forYouChecks = [
  'You want expert coaching in a supportive group.',
  "You're ready to build sustainable habits.",
  'You want to become stronger and healthier.',
  'You value accountability and encouragement.',
  "You're ready to make lasting changes — not chase quick fixes.",
]

const notForYouChecks = [
  "You're looking for a rapid weight-loss solution.",
  'You want a restrictive diet or generic plan.',
  "You're not ready to actively participate.",
  "You're looking for a passive programme.",
]

const outcomeCaptions = [
  'Lost weight. Built strength. Changed her habits.',
  'Dropped dress sizes. Improved her relationship with food.',
  'Built consistency and confidence.',
  'Created habits that fit real life.',
]

const faqs = [
  {
    question: 'Who is Transform & Thrive designed for?',
    answer:
      'Women aged 30+ who want structured coaching, accountability, and practical guidance to improve their health through sustainable nutrition and lifestyle habits.',
  },
  {
    question: 'Do I need previous fitness experience?',
    answer:
      'No. The program is suitable for all fitness levels, and every recommendation can be adapted to your starting point.',
  },
  {
    question: 'Is the programme delivered online?',
    answer:
      'Yes. Coaching calls, resources, habit tracking, and community support are all delivered online, allowing you to participate from anywhere.',
  },
  {
    question: 'What kind of support will I receive?',
    answer:
      "You'll receive weekly live coaching calls, daily WhatsApp support, structured habit tracking, practical resources, and encouragement from a supportive community throughout the program.",
  },
  {
    question: 'How much time should I expect to commit each week?',
    answer:
      'Most participants spend 3–5 hours per week, including coaching calls, meal planning, and implementing new habits. The focus is on building routines that fit your lifestyle, not adding complexity.',
  },
  {
    question: 'How do I join the next cohort?',
    answer:
      'Start with the Menopause Health Assessment. Once your symptoms, goals, and health history are reviewed, we will recommend whether Transform & Thrive is the right next step and confirm your place in the next cohort.',
  },
]

export function TransformThriveContent() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-navy pt-32 pb-14 lg:pb-28" aria-labelledby="tt-hero-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="text-center lg:col-span-7 lg:text-left">
              <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.04 }} className="text-gold uppercase tracking-[0.18em] text-sm font-semibold mb-5">
                Transform &amp; Thrive&trade;
              </motion.p>
              <motion.h1
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                id="tt-hero-heading"
                className="text-white mb-5"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(2.15rem, 10vw, 4rem)',
                  fontWeight: 700,
                  lineHeight: 1.15,
                }}
              >
                Build Healthy Habits. Gain Strength. Thrive for Life.
              </motion.h1>

              <motion.p
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.26 }}
                className="text-white/80 text-xl leading-relaxed max-w-3xl mx-auto lg:mx-0 mb-10"
              >
                A 20-week small-group coaching experience for women who want expert guidance,
                accountability and the support to make healthy habits stick.
              </motion.p>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.34 }}
                className="flex flex-col items-center lg:items-start gap-3"
              >
                <a
                  href={ASSESSMENT_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex max-w-full items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-full hover:scale-[1.03] hover:shadow-2xl transition-all duration-200 min-h-14 text-center text-base leading-snug whitespace-normal sm:px-10 sm:text-lg"
                >
                  See If Transform &amp; Thrive Is Right for You
                </a>
                <p className="text-white/50 text-base italic">Limited to 10 women per cohort.</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative mx-auto w-64 sm:w-80 lg:col-span-5 lg:mx-0 lg:ml-auto lg:w-full lg:max-w-md"
            >
              <div
                className="absolute inset-0 -translate-x-3 translate-y-3 border border-gold/40"
                style={{ borderRadius: '58% 42% 62% 38% / 42% 58% 42% 58%' }}
                aria-hidden="true"
              />
              <div
                className="relative aspect-[4/3] overflow-hidden bg-white/5 shadow-xl shadow-black/30"
                style={{ borderRadius: '58% 42% 62% 38% / 42% 58% 42% 58%' }}
              >
                <Image
                  src="/transform-thrive/hero-group-coaching.jpg"
                  alt="Small-group coaching session with women reflecting, realigning and growing together"
                  fill
                  sizes="(min-width: 1024px) 24rem, 20rem"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. The Promise */}
      <section className="py-14 lg:py-20 bg-white" aria-labelledby="tt-promise-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20 max-w-3xl mx-auto text-center">
          <motion.h2 {...fadeUp} id="tt-promise-heading" className="text-section text-navy" style={{ fontFamily: 'var(--font-playfair)' }}>
            Stop Starting Over.
          </motion.h2>
          <motion.p {...stagger(0.1)} className="mt-6 text-muted text-lg leading-relaxed">
            You don&apos;t need another diet or a perfect routine.
          </motion.p>
          <motion.p {...stagger(0.18)} className="mt-3 text-navy text-lg font-semibold leading-relaxed">
            You need <strong className="font-bold">simple strategies, consistent support and habits that fit real life</strong>.
          </motion.p>
          <motion.p {...stagger(0.28)} className="mt-10 text-dark font-semibold text-lg">
            Over 20 weeks, build the skills to:
          </motion.p>
          <motion.div {...stagger(0.34)} className="mt-4 space-y-1.5 text-muted text-lg leading-normal">
            {skillsToBuild.map((skill) => (
              <p key={skill}>{skill}</p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Why Transform & Thrive? */}
      <section className="py-14 lg:py-20 bg-cream" aria-labelledby="tt-pillars-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="text-accent uppercase tracking-[0.18em] text-sm font-semibold mb-4">More Than A Program.</p>
            <h2 id="tt-pillars-heading" className="text-section text-navy" style={{ fontFamily: 'var(--font-playfair)' }}>
              You Don&apos;t Have To Do It Alone.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8" role="list">
            {pillars.map((pillar, i) => (
              <motion.article
                key={pillar.title}
                {...stagger(i * 0.08)}
                role="listitem"
                className={`bg-white rounded-2xl p-8 flex gap-5 items-start ${
                  i === pillars.length - 1 && pillars.length % 2 === 1 ? 'sm:col-span-2 sm:mx-auto sm:w-1/2' : ''
                }`}
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-navy text-gold flex items-center justify-center" aria-hidden="true">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {pillar.title}
                  </h3>
                  <p className="text-muted text-[1.05rem] leading-relaxed">{pillar.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Your 20-Week Journey */}
      <section className="py-14 lg:py-20 bg-white" aria-labelledby="tt-curriculum-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="text-accent uppercase tracking-[0.18em] text-sm font-semibold mb-4">Your 20-Week Journey</p>
            <h2 id="tt-curriculum-heading" className="text-section text-navy" style={{ fontFamily: 'var(--font-playfair)' }}>
              Small Changes. Real Skills. Lasting Change.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" role="list">
            {journeyPhases.map((phase, i) => (
              <motion.div key={phase.number} {...stagger(i * 0.1)} role="listitem" className="bg-warm-bg rounded-2xl p-7 border border-gray-100 flex gap-4">
                <span className="shrink-0 text-2xl font-bold text-gold" style={{ fontFamily: 'var(--font-playfair)' }}>{phase.number}</span>
                <div>
                  <h3 className="font-bold text-navy text-xl mb-1" style={{ fontFamily: 'var(--font-playfair)' }}>{phase.title}</h3>
                  <p className="text-muted leading-relaxed">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. What You'll Build */}
      <section className="py-14 lg:py-20 bg-cream" aria-labelledby="tt-skills-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 id="tt-skills-heading" className="text-section text-navy" style={{ fontFamily: 'var(--font-playfair)' }}>
              Skills You Can Keep For Life.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {skillsYoullBuild.map(({ Icon, title, description }, i) => (
              <motion.div
                key={title}
                {...stagger(i * 0.08)}
                role="listitem"
                className="group relative rounded-2xl bg-white p-7 text-center shadow-sm border border-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-rose-faint/40 hover:shadow-lg"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-6" aria-hidden="true">
                  <Icon size={24} />
                </span>
                <p className="mt-5 font-bold text-navy text-lg" style={{ fontFamily: 'var(--font-playfair)' }}>{title}</p>
                <p className="mt-2 text-muted text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Is This Right for You? */}
      <section className="py-14 lg:py-20 bg-white" aria-labelledby="tt-for-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 id="tt-for-heading" className="text-section text-navy" style={{ fontFamily: 'var(--font-playfair)' }}>
              Is This Right for You?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div {...stagger(0.1)} className="bg-warm-bg rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-navy mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                Transform &amp; Thrive is for you if&hellip;
              </h3>
              <ul className="space-y-4" role="list">
                {forYouChecks.map((item) => (
                  <li key={item} className="flex items-start gap-3" role="listitem">
                    <CheckCircle2 size={25} className="text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-dark text-[1.1rem] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...stagger(0.2)} className="bg-warm-bg rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-navy mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                It may not be for you if&hellip;
              </h3>
              <ul className="space-y-4" role="list">
                {notForYouChecks.map((item) => (
                  <li key={item} className="flex items-start gap-3" role="listitem">
                    <XCircle size={25} className="text-muted shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-muted text-[1.1rem] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Real Women. Real Results. */}
      <section className="py-14 lg:py-20 bg-cream" aria-labelledby="tt-results-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="text-accent uppercase tracking-[0.18em] text-sm font-semibold mb-4">Real Women. Real Results.</p>
            <h2 id="tt-results-heading" className="text-section text-navy" style={{ fontFamily: 'var(--font-playfair)' }}>
              See What Can Change When You Stay With It.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {outcomeCaptions.map((caption, i) => (
              <motion.div key={caption} {...stagger(i * 0.08)} className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                <p className="text-navy font-semibold leading-snug">{caption}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...stagger(0.3)} className="mt-12 text-center">
            <Link href="/success-stories" className="inline-flex items-center gap-2 text-navy font-bold hover:text-accent transition-colors">
              See More Transformations
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-14 lg:py-20 bg-white" aria-labelledby="tt-faq-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 id="tt-faq-heading" className="text-section text-navy" style={{ fontFamily: 'var(--font-playfair)' }}>
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div {...stagger(0.12)} className="max-w-4xl mx-auto bg-cream/40 rounded-2xl px-6 sm:px-8">
            <FAQAccordion items={faqs} />
          </motion.div>
        </div>
      </section>

      {/* 9. Your Next Step */}
      <section className="py-14 lg:py-20 bg-navy" aria-labelledby="tt-pricing-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20 text-center">
          <motion.p {...fadeUp} className="text-gold uppercase tracking-[0.18em] text-sm font-semibold mb-4">
            Ready To Build Habits That Last?
          </motion.p>
          <motion.h2
            {...stagger(0.1)}
            id="tt-pricing-heading"
            className="text-white"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
            }}
          >
            Let&apos;s See If Transform &amp; Thrive Is Right for You.
          </motion.h2>

          <motion.div {...stagger(0.2)} className="max-w-3xl mx-auto mt-10 bg-white rounded-3xl p-10 text-center shadow-xl">
            <p className="text-muted text-[1.1rem] mb-8 leading-relaxed">
              Complete your <strong className="font-semibold text-dark">Menopause Health Assessment</strong> so we
              can understand where you are and whether this is the right coaching experience for you.
            </p>
            <a
              href={ASSESSMENT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex max-w-full items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-full hover:scale-[1.03] hover:shadow-xl transition-all duration-200 min-h-14 text-center text-base leading-snug whitespace-normal sm:px-10 sm:text-lg"
            >
              Book Your Appointment Today
            </a>
            <p className="mt-5 text-muted italic">Limited places per cohort.</p>
          </motion.div>
        </div>
      </section>

      {/* 10. MenoThrive Crossover */}
      <section className="py-10 lg:py-12 bg-cream" aria-labelledby="tt-menothrive-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <motion.div
            {...fadeUp}
            className="max-w-4xl mx-auto bg-white rounded-3xl p-8 lg:p-10 text-center shadow-sm border border-gold/20"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-4">Want More Personalised Support?</p>
            <h2
              id="tt-menothrive-heading"
              className="text-3xl lg:text-4xl font-bold text-navy mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Explore MenoThrive&trade;
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              A fully personalised 1:1 coaching experience for women who want deeper individual support
              and high-touch coaching.
            </p>
            <Link
              href="/menothrive"
              className="inline-flex items-center justify-center px-8 py-4 bg-navy text-white font-bold rounded-full hover:bg-accent transition-all duration-200 min-h-14"
            >
              Explore MenoThrive
            </Link>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
