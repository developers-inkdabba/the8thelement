'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  CheckCircle2, XCircle, Dumbbell, Salad,
  Target, BookOpen, Phone, MessageCircle, ArrowRight, ImageOff,
  Scale, Battery, ShieldCheck, Repeat,
} from 'lucide-react'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { ASSESSMENT_FORM_URL } from '@/lib/links'

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' }, transition: { duration: 0.5 } }
const stagger = (delay: number) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' }, transition: { duration: 0.5, delay } })

const dreamOutcomeItems = [
  { Icon: Scale, title: 'Lose stubborn weight', detail: 'without living on another restrictive diet.' },
  { Icon: Dumbbell, title: 'Build strength', detail: 'so your body feels capable again.' },
  { Icon: Battery, title: 'Have more energy', detail: 'for work, family, travel and yourself.' },
  { Icon: Salad, title: 'Feel calmer around food', detail: 'without constantly starting over.' },
  { Icon: ShieldCheck, title: 'Trust yourself again', detail: 'to follow through without perfectionism.' },
  { Icon: Repeat, title: 'Build habits that last', detail: 'because they fit your actual life.' },
]

const offerItems = [
  { Icon: Salad, title: 'Personalised Nutrition', detail: 'Your food strategy, built around your life.' },
  { Icon: Dumbbell, title: 'Progressive Strength Training', detail: 'Build strength and physical confidence.' },
  { Icon: Phone, title: 'Weekly 1:1 Coaching', detail: 'Review. Troubleshoot. Recalibrate.' },
  { Icon: Target, title: 'Daily-Life Habit Coaching', detail: 'Turn intentions into routines.' },
  { Icon: MessageCircle, title: 'WhatsApp Support', detail: 'Guidance and accountability between sessions.' },
  { Icon: BookOpen, title: 'Practical Resources', detail: 'Tools you can keep using for life.' },
]

const realWomenCases = [
  { name: 'Ranjitha', stat: '51 cm fat loss', detail: 'Scale barely changed — but her strength, body composition and confidence transformed.' },
  { name: 'Aishwarya', stat: 'Strength goals she once wasn’t sure she could achieve.', detail: 'Push-ups. Pull-ups. Squats. Deadlifts.' },
]

const differentPoints = ['Travel.', 'Stress.', 'Busy weeks.', 'Low-energy days.', 'Life transitions.']

const forYouItems = [
  `You're ready to actively participate.`,
  `You want personalised guidance.`,
  `You're done with quick fixes and starting over.`,
  `You want sustainable change, not another temporary programme.`,
  `You're ready for expert support and accountability.`,
]
const notForYouItems = [
  `You're looking for rapid weight loss.`,
  `You want a generic meal plan.`,
  `You're looking for a passive programme.`,
  `You're not ready to make changes.`,
]

const nextSteps = [
  'Complete your assessment.',
  'I personally review it.',
  'We discuss your goals in a Menopause Strategy Session.',
  'We determine the right next step.',
]

const faqs = [
  { question: 'Who is MenoThrive for?', answer: 'MenoThrive is designed for women in perimenopause and postmenopause who are ready to take a personalised, science-backed approach to improving their health, strength, energy, and confidence.' },
  { question: `Is it suitable if I'm already postmenopausal?`, answer: `Yes. Whether you're in perimenopause or postmenopause, the program is tailored to your current stage, symptoms, health history, and goals.` },
  { question: 'Do I need previous fitness or nutrition experience?', answer: `Not at all. Your coaching plan is designed around your current fitness level, lifestyle, and medical history. Whether you're just getting started or already active, every recommendation is personalised to you.` },
  { question: 'How much time will I need?', answer: 'Most clients spend 3–5 hours per week, including exercise, meal planning, coaching activities, and implementing new habits. The focus is on creating sustainable routines that fit your lifestyle—not adding unnecessary complexity.' },
  { question: 'Is MenoThrive delivered online?', answer: 'Yes. MenoThrive is a fully online coaching program, allowing you to receive personalised support wherever you are. Coaching, check-ins, resources, and accountability are all provided virtually.' },
  { question: 'What happens after the assessment?', answer: `I'll personally review your assessment. If we're a good fit, you'll be invited to a Menopause Strategy Session, where we'll discuss your health goals, answer your questions, and determine whether MenoThrive is the right coaching partnership for you.` },
]

export function MenoThriveContent() {
  return (
    <>
      {/* 1. Hero — Sell the Outcome */}
      <section className="bg-navy pt-24 pb-16 lg:pt-28 lg:pb-24" aria-labelledby="menothrive-hero-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="text-center lg:col-span-7 lg:text-left">
              <motion.p {...stagger(0.05)} className="text-gold uppercase tracking-[0.18em] text-sm font-semibold mb-5">MenoThrive&trade; Private 1:1 Coaching</motion.p>
              <motion.h1 {...stagger(0.1)} id="menothrive-hero-heading" className="text-hero text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
                <span className="block">Feel Stronger.</span>
                <span className="block">Feel Like Yourself Again.</span>
              </motion.h1>
              <motion.p {...stagger(0.2)} className="mt-6 text-white/75 text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">Lose stubborn weight. Build strength. Restore energy. Create habits that actually survive real life.</motion.p>
              <motion.p {...stagger(0.28)} className="mt-4 text-white text-lg lg:text-xl font-semibold max-w-2xl mx-auto lg:mx-0 leading-relaxed">A deeply personalised 6-month coaching experience for women navigating perimenopause and menopause.</motion.p>
              <motion.div {...stagger(0.4)} className="mt-10">
                <a href={ASSESSMENT_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex max-w-full items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-full hover:opacity-90 hover:scale-[1.03] hover:shadow-2xl transition-all duration-200 min-h-[56px] text-center text-base leading-snug whitespace-normal sm:px-10 sm:text-lg" id="assessment">See If MenoThrive Is Right for You</a>
              </motion.div>
              <motion.p {...stagger(0.5)} className="mt-6 text-white/50 text-base italic">Limited 1:1 places.</motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative mx-auto w-48 sm:w-60 lg:col-span-5 lg:mx-0 lg:w-full lg:max-w-sm"
            >
              <div
                className="absolute inset-0 -translate-x-3 translate-y-3 border border-gold/40"
                style={{ borderRadius: '58% 42% 62% 38% / 42% 58% 42% 58%' }}
                aria-hidden="true"
              />
              <div
                className="relative flex aspect-[3/4] items-center justify-center overflow-hidden bg-white/5 shadow-xl shadow-black/30"
                style={{ borderRadius: '58% 42% 62% 38% / 42% 58% 42% 58%' }}
              >
                <div className="flex flex-col items-center gap-2 px-6 text-center text-white/40">
                  <ImageOff size={30} aria-hidden="true" />
                  <span className="text-xs uppercase tracking-wider">Image placeholder</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Problem — "This Is Me" */}
      <section className="py-14 lg:py-20 bg-white" aria-labelledby="problem-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="group mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-navy text-gold shadow-sm transition-transform duration-300 ease-out hover:scale-110 hover:rotate-6"
          >
            <ImageOff size={32} aria-hidden="true" />
          </motion.div>

          <motion.p {...stagger(0.15)} className="mt-8 text-accent uppercase tracking-[0.18em] text-sm font-semibold mb-6">This Is Me</motion.p>
          <motion.h2 {...stagger(0.2)} id="problem-heading" className="text-section text-navy" style={{ fontFamily: 'var(--font-playfair)' }}>
            You Know What To Do.
          </motion.h2>
          <motion.p {...stagger(0.26)} className="mt-5 text-navy text-xl lg:text-2xl font-bold leading-snug" style={{ fontFamily: 'var(--font-playfair)' }}>
            So Why Isn&apos;t It Working Anymore?
          </motion.p>
          <motion.div {...stagger(0.3)} className="mt-10 space-y-4 text-muted text-lg leading-relaxed">
            <p>Your body has changed.</p>
            <p>The strategies that worked before may not be working the same way now.</p>
            <p>You keep trying.</p>
            <p>You keep restarting.</p>
            <p>And you&apos;re tired of feeling like <strong className="font-semibold text-dark">you&apos;re the problem</strong>.</p>
          </motion.div>
          <motion.p {...stagger(0.4)} className="mt-12 text-navy text-xl font-semibold leading-relaxed">
            You&apos;re not.
            <br />
            Your strategy needs to change with you.
          </motion.p>
        </div>
      </section>

      {/* 3. Dream Outcome */}
      <section className="py-14 lg:py-20 bg-warm-bg" aria-labelledby="dream-outcome-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="text-accent uppercase tracking-[0.18em] text-sm font-semibold mb-4">Dream Outcome</p>
            <h2 id="dream-outcome-heading" className="text-section text-navy" style={{ fontFamily: 'var(--font-playfair)' }}>
              <span className="block">Not Just A Smaller Body.</span>
              <span className="block">A Stronger Life.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {dreamOutcomeItems.map(({ Icon, title, detail }, idx) => (
              <motion.div
                key={title}
                {...stagger(idx * 0.07)}
                role="listitem"
                className="group relative rounded-2xl bg-white p-7 text-center shadow-sm border border-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-rose-faint/40 hover:shadow-lg"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-6" aria-hidden="true">
                  <Icon size={24} />
                </span>
                <p className="mt-5 font-bold text-dark text-lg" style={{ fontFamily: 'var(--font-playfair)' }}>{title}</p>
                <p className="mt-2 text-muted text-sm leading-relaxed">{detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Vehicle */}
      <section className="py-14 lg:py-20 bg-white" aria-labelledby="vehicle-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20 max-w-3xl mx-auto text-center">
          <motion.p {...fadeUp} className="text-accent uppercase tracking-[0.18em] text-sm font-semibold mb-4">This Is Not Another Diet Or Workout Plan.</motion.p>
          <motion.h2 {...stagger(0.1)} id="vehicle-heading" className="text-section text-navy" style={{ fontFamily: 'var(--font-playfair)' }}>This Is Personalised Coaching.</motion.h2>
          <motion.p {...stagger(0.2)} className="mt-6 text-muted text-lg leading-relaxed">
            We look at <strong className="font-semibold text-dark">your body, your habits, your lifestyle and your goals</strong> &mdash; then build the strategy around you.
          </motion.p>
          <motion.div {...stagger(0.28)} className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {['Understand', 'Personalise', 'Implement', 'Adjust', 'Sustain'].map((step, idx, arr) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-full bg-navy text-white text-sm font-bold px-4 py-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {step}
                </span>
                {idx < arr.length - 1 && <ArrowRight size={16} className="text-gold" aria-hidden="true" />}
              </span>
            ))}
          </motion.div>
          <motion.div {...stagger(0.36)} className="mt-8 space-y-2 text-muted text-lg leading-relaxed">
            <p>No generic plan.</p>
            <p>No &ldquo;just be more disciplined.&rdquo;</p>
            <p>No starting over every Monday.</p>
          </motion.div>
        </div>
      </section>

      {/* 5. The Offer */}
      <section className="py-14 lg:py-20 bg-warm-bg" aria-labelledby="offer-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="text-accent uppercase tracking-[0.18em] text-sm font-semibold mb-4">The Offer</p>
            <h2 id="offer-heading" className="text-section text-navy" style={{ fontFamily: 'var(--font-playfair)' }}>Your 6-Month MenoThrive Experience</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {offerItems.map(({ Icon, title, detail }, idx) => (
              <motion.div
                key={title}
                {...stagger(idx * 0.08)}
                role="listitem"
                className="group relative rounded-2xl bg-white p-7 text-center shadow-sm border border-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-rose-faint/40 hover:shadow-lg"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-6" aria-hidden="true">
                  <Icon size={24} />
                </span>
                <h3 className="mt-5 font-bold text-dark text-xl mb-1" style={{ fontFamily: 'var(--font-playfair)' }}>{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Real Women. Real Transformations. */}
      <section className="py-14 lg:py-20 bg-white" aria-labelledby="real-women-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="text-accent uppercase tracking-[0.18em] text-sm font-semibold mb-4">Don&apos;t Take My Word For It.</p>
            <h2 id="real-women-heading" className="text-section text-navy mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>Real Women. Real Transformations.</h2>
            <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed">See What Can Change When the Strategy Changes.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {realWomenCases.map(({ name, stat, detail }, idx) => (
              <motion.div key={name} {...stagger(idx * 0.1)} className="bg-warm-bg rounded-2xl p-8 border border-gray-100">
                <p className="text-[0.7rem] uppercase tracking-[0.16em] font-semibold text-accent mb-3">{name}</p>
                <p className="font-bold text-navy text-xl leading-snug" style={{ fontFamily: 'var(--font-playfair)' }}>{stat}</p>
                <p className="mt-3 text-muted leading-relaxed">{detail}</p>
              </motion.div>
            ))}
            <motion.div {...stagger(0.2)} className="rounded-2xl border border-dashed border-gray-300 p-8 flex items-center justify-center text-center">
              <p className="text-muted leading-relaxed">More transformation stories coming soon.</p>
            </motion.div>
          </div>
          <motion.div {...stagger(0.3)} className="mt-12 text-center">
            <Link href="/success-stories" className="inline-flex items-center gap-2 text-navy font-bold hover:text-accent transition-colors">
              See More Transformations
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 7. Why MenoThrive Is Different */}
      <section className="py-14 lg:py-20 bg-cream" aria-labelledby="different-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="text-center max-w-3xl mx-auto lg:mx-0 lg:col-span-7 lg:text-left">
              <motion.p {...fadeUp} className="text-accent uppercase tracking-[0.18em] text-sm font-semibold mb-4">Why MenoThrive Is Different</motion.p>
              <motion.h2 {...stagger(0.1)} id="different-heading" className="text-section text-navy" style={{ fontFamily: 'var(--font-playfair)' }}>Your Plan Changes As You Do.</motion.h2>
              <motion.div {...stagger(0.2)} className="mt-6 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-muted text-lg leading-relaxed">
                {differentPoints.map((point) => (
                  <span key={point}>{point}</span>
                ))}
              </motion.div>
              <motion.p {...stagger(0.3)} className="mt-8 text-navy text-xl font-semibold leading-relaxed">
                We adjust the strategy instead of asking you to abandon it.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative mx-auto w-48 sm:w-60 lg:col-span-5 lg:mx-0 lg:w-full lg:max-w-sm"
            >
              <div
                className="absolute inset-0 -translate-x-3 translate-y-3 border border-gold/40"
                style={{ borderRadius: '58% 42% 62% 38% / 42% 58% 42% 58%' }}
                aria-hidden="true"
              />
              <div
                className="relative flex aspect-[3/4] items-center justify-center overflow-hidden bg-white shadow-xl shadow-black/10"
                style={{ borderRadius: '58% 42% 62% 38% / 42% 58% 42% 58%' }}
              >
                <div className="flex flex-col items-center gap-2 px-6 text-center text-muted">
                  <ImageOff size={30} aria-hidden="true" />
                  <span className="text-xs uppercase tracking-wider">Image placeholder</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. MenoThrive Private 1:1 */}
      <section className="py-14 lg:py-20 bg-navy" aria-labelledby="pricing-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <motion.div {...stagger(0.15)} className="max-w-3xl mx-auto bg-white rounded-3xl p-10 lg:p-14 text-center shadow-2xl">
            <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-4">MenoThrive Private 1:1</p>
            <h2 id="pricing-heading" className="text-3xl lg:text-4xl font-bold text-navy mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>Personalised Support for Your Next Chapter</h2>
            <p className="text-muted text-[1.1rem] leading-relaxed mb-4">A high-touch, 6-month coaching experience for women who are ready to make a meaningful investment in their health, strength and wellbeing.</p>
            <p className="text-navy font-semibold text-[1.1rem] leading-relaxed mb-8">Limited 1:1 places available.</p>
            <a href={ASSESSMENT_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-full max-w-full items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-full hover:opacity-90 hover:scale-[1.03] hover:shadow-xl transition-all duration-200 min-h-[56px] text-center text-base leading-snug whitespace-normal sm:w-auto sm:px-10 sm:text-lg">See If MenoThrive Is Right for You</a>
          </motion.div>
        </div>
      </section>

      {/* 9. Is MenoThrive Right for You? */}
      <section className="py-14 lg:py-20 bg-white" aria-labelledby="who-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 id="who-heading" className="text-section text-navy" style={{ fontFamily: 'var(--font-playfair)' }}>Is MenoThrive Right for You?</h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div {...stagger(0.1)} className="bg-warm-bg rounded-2xl p-8 lg:p-10 border border-gray-100">
              <h3 className="text-2xl font-bold text-navy mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>This is for you if&hellip;</h3>
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
              <h3 className="text-2xl font-bold text-navy mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>It may not be for you if&hellip;</h3>
              <ul className="space-y-4" role="list">
                {notForYouItems.map((item) => (
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

      {/* 10. Your Next Step */}
      <section className="py-14 lg:py-20 bg-cream" aria-labelledby="next-step-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <p className="text-accent font-bold uppercase tracking-[0.2em] mb-4">Don&apos;t Choose A Programme Yet.</p>
            <h2 id="next-step-heading" className="text-section text-navy mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>Let&apos;s First Understand You.</h2>
            <p className="text-muted text-xl leading-relaxed mb-10">
              Every woman begins with a <strong className="font-semibold text-dark">Menopause Health Assessment</strong>.
            </p>
          </motion.div>

          <motion.div {...stagger(0.15)} className="max-w-2xl mx-auto bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100 mb-8 text-left">
            <ol className="space-y-5" role="list">
              {nextSteps.map((step, idx) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-white font-bold" aria-hidden="true">{idx + 1}</span>
                  <p className="text-dark text-lg font-bold pt-0.5">{step}</p>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div {...stagger(0.25)}>
            <a href={ASSESSMENT_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex max-w-full items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-full hover:opacity-90 hover:scale-[1.03] hover:shadow-xl transition-all duration-200 min-h-[56px] text-center text-base leading-snug whitespace-normal sm:px-10 sm:text-lg">Book Your Appointment Today</a>
            <p className="mt-5 text-muted max-w-2xl mx-auto italic">
              10&ndash;15 minutes &middot; Personally reviewed before your next step is recommended.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 11. Frequently Asked Questions */}
      <section className="py-14 lg:py-20 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 id="faq-heading" className="text-section text-navy" style={{ fontFamily: 'var(--font-playfair)' }}>Frequently Asked Questions</h2>
          </motion.div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* 12. Looking for a small-group experience? */}
      <section className="py-10 lg:py-12 bg-cream" aria-labelledby="meno-transform-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <motion.div
            {...fadeUp}
            className="max-w-4xl mx-auto bg-white rounded-3xl p-8 lg:p-10 text-center shadow-sm border border-gold/20"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-4">Looking for a small-group experience?</p>
            <h2
              id="meno-transform-heading"
              className="text-3xl lg:text-4xl font-bold text-navy mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Explore Transform &amp; Thrive
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              A 20-week small-group coaching experience for women who want expert guidance,
              accountability and a supportive community while building sustainable habits.
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
    </>
  )
}
