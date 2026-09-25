'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  CheckCircle2, XCircle, Dumbbell, Salad,
  Target, BookOpen, Phone, MessageCircle, ArrowRight,
} from 'lucide-react'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { ASSESSMENT_FORM_URL } from '@/lib/links'

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' }, transition: { duration: 0.5 } }
const stagger = (delay: number) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' }, transition: { duration: 0.5, delay } })

const dreamOutcomeItems = [
  {
    title: 'Lose stubborn weight',
    detail: 'without living on another restrictive diet.',
    imageSrc: '/menothrive/dream-weight.jpg',
    imageAlt: 'South Indian woman feeling hopeful while checking the fit of comfortable clothes',
  },
  {
    title: 'Build strength',
    detail: 'so your body feels capable again.',
    imageSrc: '/menothrive/dream-strength.jpg',
    imageAlt: 'South Indian woman doing simple strength training at home',
  },
  {
    title: 'Have more energy',
    detail: 'for work, family, travel and yourself.',
    imageSrc: '/menothrive/dream-energy.jpg',
    imageAlt: 'South Indian woman feeling energized in her home kitchen',
  },
  {
    title: 'Feel calmer around food',
    detail: 'without constantly starting over.',
    imageSrc: '/menothrive/dream-food.jpg',
    imageAlt: 'South Indian woman preparing a balanced everyday meal at home',
  },
  {
    title: 'Trust yourself again',
    detail: 'to follow through without perfectionism.',
    imageSrc: '/menothrive/dream-trust.jpg',
    imageAlt: 'South Indian woman journaling calmly at a dining table',
  },
  {
    title: 'Build habits that last',
    detail: 'because they fit your actual life.',
    imageSrc: '/menothrive/dream-habits.jpg',
    imageAlt: 'South Indian woman tying walking shoes at her doorway',
  },
]

const offerItems = [
  { Icon: Salad, title: 'Personalised Nutrition', detail: 'Your food strategy, built around your life.' },
  { Icon: Dumbbell, title: 'Progressive Strength Training', detail: 'Build strength and physical confidence.' },
  { Icon: Phone, title: 'Weekly 1:1 Coaching', detail: 'Review. Troubleshoot. Recalibrate.' },
  { Icon: Target, title: 'Daily-Life Habit Coaching', detail: 'Turn intentions into routines.' },
  { Icon: MessageCircle, title: 'WhatsApp Support', detail: 'Guidance and accountability between sessions.' },
  { Icon: BookOpen, title: 'Practical Resources', detail: 'Tools you can keep using for life.' },
]

const coachingSteps = ['Understand', 'Personalise', 'Implement', 'Adjust', 'Sustain']

const coachingPromises = [
  'No generic plan.',
  'No "just be more disciplined."',
  'No starting over every Monday.',
]

const realWomenCases = [
  {
    name: 'Bhuvana',
    stat: '75 years, stronger and independent',
    detail: 'Mobility, confidence, blood sugar control, and daily strength improved through steady lifestyle change.',
    imageSrc: '/success-stories/Bhuvana.jpg',
    imageAlt: "Bhuvana's MenoThrive transformation",
    href: '/success-stories#story-bhuvana-75-years-srividya-s-mom',
  },
  {
    name: 'Uthra',
    stat: 'Strength, stability, and self-trust rebuilt',
    detail: 'A dancer rebuilt consistency and confidence without the all-or-nothing pressure.',
    imageSrc: '/success-stories/Uthra.jpg',
    imageAlt: "Uthra's MenoThrive transformation",
    href: '/success-stories#story-uthra',
  },
  {
    name: 'Nirupa Seshadri',
    stat: '10+ kg lost and 118 cm reduced',
    detail: 'A PCOS-focused transformation built through nutrition, strength, and sustainable routines.',
    imageSrc: '/success-stories/niupa.jpeg',
    imageAlt: "Nirupa Seshadri's MenoThrive transformation",
    href: '/success-stories#story-nirupa-seshadri',
  },
  {
    name: 'Ishwarya',
    stat: 'Post-pregnancy strength and rhythm',
    detail: 'Returned to her pre-pregnancy weight while building habits she could actually keep.',
    imageSrc: '/success-stories/Ishwarya.jpg',
    imageAlt: "Ishwarya's MenoThrive transformation",
    href: '/success-stories#story-ishwarya',
  },
  {
    name: 'Kavitha',
    stat: 'Food awareness and GI relief',
    detail: 'A careful, personalised approach helped her feel comfortable around food and social meals again.',
    imageSrc: '/success-stories/Kavitha.jpg',
    imageAlt: "Kavitha's MenoThrive transformation",
    href: '/success-stories#story-kavitha',
  },
  {
    name: 'Akila',
    stat: '8 kg and 52 cm lost',
    detail: 'Energy, strength, sleep, confidence, and food control improved through steady habit coaching.',
    imageSrc: '/success-stories/Akila.jpg',
    imageAlt: "Akila's MenoThrive transformation",
    href: '/success-stories#story-akila',
  },
  {
    name: 'Krithiga',
    stat: 'Consistency without perfection',
    detail: 'Built sustainable habits by showing up imperfectly, kindly, and consistently.',
    imageSrc: '/success-stories/Krithiga.jpg',
    imageAlt: "Krithiga's MenoThrive transformation",
    href: '/success-stories#story-krithiga',
  },
  {
    name: 'Swetha',
    stat: 'Visible strength and body confidence',
    detail: 'A stronger routine helped her reconnect with confidence, style, and self-assurance.',
    imageSrc: '/success-stories/swetha.jpg',
    imageAlt: "Swetha's MenoThrive transformation",
    href: '/success-stories#story-swetha',
  },
  {
    name: 'Aritu',
    stat: '10+ kg lost through perimenopause',
    detail: 'Learned to stay consistent through stressful seasons with a more compassionate strategy.',
    imageSrc: '/success-stories/Aritu.jpeg',
    imageAlt: "Aritu's MenoThrive transformation",
    href: '/success-stories#story-aritu',
  },
  {
    name: 'Pavithra',
    stat: 'Inch loss and posture confidence',
    detail: 'Small, repeatable habits helped her feel lighter, stronger, and more relaxed in her body.',
    imageSrc: '/success-stories/pavithra.jpg',
    imageAlt: "Pavithra's MenoThrive transformation",
    href: '/success-stories#story-pavithra',
  },
  {
    name: 'Lakshmi',
    stat: 'Diabetes support and renewed energy',
    detail: 'Built strength, food awareness, and confidence while changing her relationship with health.',
    imageSrc: '/success-stories/Lakshmi.jpg',
    imageAlt: "Lakshmi's MenoThrive transformation",
    href: '/success-stories#story-lakshmi',
  },
  {
    name: 'Sharmila',
    stat: '8 kg and 73 cm lost',
    detail: 'Reduced pain, lighter movement, stronger dance practice, and a healthier relationship with food.',
    imageSrc: '/success-stories/Sharmila.jpeg',
    imageAlt: "Sharmila's MenoThrive transformation",
    href: '/success-stories#story-sharmila',
  },
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
  { question: 'How much time will I need?', answer: 'Most clients spend 3-5 hours per week, including exercise, meal planning, coaching activities, and implementing new habits. The focus is on creating sustainable routines that fit your lifestyle, not adding unnecessary complexity.' },
  { question: 'Is MenoThrive delivered online?', answer: 'Yes. MenoThrive is a fully online coaching program, allowing you to receive personalised support wherever you are. Coaching, check-ins, resources, and accountability are all provided virtually.' },
  { question: 'What happens after the assessment?', answer: `I'll personally review your assessment. If we're a good fit, you'll be invited to a Menopause Strategy Session, where we'll discuss your health goals, answer your questions, and determine whether MenoThrive is the right coaching partnership for you.` },
]

export function MenoThriveContent() {
  return (
    <>
      {/* 1. Hero - Sell the Outcome */}
      <section className="bg-navy pt-24 pb-16 lg:pt-28 lg:pb-24" aria-labelledby="menothrive-hero-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-20">
            <div className="text-center lg:col-span-6 lg:text-left">
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
              <motion.p {...stagger(0.5)} className="mt-6 text-white/50 text-base italic">Limited 1:1 spots.</motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative mx-auto w-full max-w-[300px] sm:max-w-[380px] lg:col-span-6 lg:mr-0 lg:ml-auto lg:max-w-[460px] xl:max-w-[520px]"
            >
              <div
                className="absolute inset-0 -translate-x-3 translate-y-3 rounded-[2rem] border border-gold/40 sm:-translate-x-4 sm:translate-y-4"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/35">
                <Image
                  src="/success-stories/Uthra.jpg"
                  alt="Client transformation before and after from the MenoThrive coaching journey"
                  fill
                  priority
                  sizes="(min-width: 1280px) 520px, (min-width: 1024px) 460px, (min-width: 640px) 380px, 300px"
                  className="object-cover"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-full border border-white/15 bg-navy/75 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur-sm">
                  Client Transformation
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Problem */}
      <section className="py-12 lg:py-20 bg-white" aria-labelledby="problem-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <motion.div
              {...stagger(0.12)}
              className="relative order-2 mx-auto w-full max-w-[320px] sm:max-w-[390px] lg:order-1 lg:col-span-5 lg:mx-0"
            >
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border border-gold/40" aria-hidden="true" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-cream shadow-xl shadow-black/10">
                <Image
                  src="/lead-magnet/cta-portrait.jpg"
                  alt="Srividya Gowri, menopause nutrition and lifestyle coach"
                  fill
                  sizes="(min-width: 1024px) 390px, (min-width: 640px) 390px, 320px"
                  className="object-cover object-[50%_32%]"
                />
              </div>
            </motion.div>

            <div className="order-1 text-center lg:order-2 lg:col-span-7 lg:text-left">
              <motion.h2 {...stagger(0.1)} id="problem-heading" className="text-section text-navy" style={{ fontFamily: 'var(--font-playfair)' }}>
                You Know What To Do.
              </motion.h2>
              <motion.p {...stagger(0.16)} className="mt-4 text-navy text-xl lg:text-2xl font-bold leading-snug" style={{ fontFamily: 'var(--font-playfair)' }}>
                So Why Isn&apos;t It Working Anymore?
              </motion.p>
              <motion.div {...stagger(0.24)} className="mt-8 space-y-4 text-muted text-lg leading-relaxed">
                <p>Your body has changed.</p>
                <p>The strategies that worked before may not be working the same way now.</p>
                <p>You keep trying. You keep restarting.</p>
                <p>And you&apos;re tired of feeling like <strong className="font-semibold text-dark">you&apos;re the problem</strong>.</p>
              </motion.div>
              <motion.div {...stagger(0.32)} className="mt-8 rounded-2xl border border-gold/25 bg-warm-bg p-6 text-center lg:text-left">
                <p className="text-navy text-xl font-semibold leading-relaxed">
                  You&apos;re not.
                  <br />
                  Your strategy needs to change with you.
                </p>
              </motion.div>
            </div>
          </div>
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
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {dreamOutcomeItems.map(({ title, detail, imageSrc, imageAlt }, idx) => (
              <motion.div
                key={title}
                {...stagger(idx * 0.07)}
                role="listitem"
                className="group relative overflow-hidden rounded-2xl bg-white text-left shadow-sm border border-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-cream">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center sm:p-5">
                  <p className="font-bold text-dark text-lg" style={{ fontFamily: 'var(--font-playfair)' }}>{title}</p>
                  <p className="mt-2 text-muted text-sm leading-relaxed">{detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Vehicle */}
      <section className="py-12 lg:py-16 bg-white" aria-labelledby="vehicle-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <div className="mx-auto max-w-5xl rounded-2xl border border-gold/20 bg-warm-bg px-6 py-10 text-center shadow-sm sm:px-10 lg:px-14 lg:py-12">
            <motion.p {...fadeUp} className="text-accent uppercase tracking-[0.18em] text-sm font-semibold mb-4">This Is Not Another Diet Or Workout Plan.</motion.p>
            <motion.h2 {...stagger(0.1)} id="vehicle-heading" className="text-section text-navy" style={{ fontFamily: 'var(--font-playfair)' }}>This Is Personalised Coaching.</motion.h2>
            <motion.p {...stagger(0.2)} className="mx-auto mt-6 max-w-3xl text-muted text-lg leading-relaxed">
              We look at <strong className="font-semibold text-dark">your body, your habits, your lifestyle and your goals</strong> - then build the strategy around you.
            </motion.p>

            <motion.div {...stagger(0.28)} className="relative mx-auto mt-9 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-5">
              <span className="absolute left-[10%] right-[10%] top-5 hidden h-px bg-gold/40 sm:block" aria-hidden="true" />
              {coachingSteps.map((step, idx) => (
                <span key={step} className="relative z-10 flex items-center justify-center gap-3 sm:block">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-gold shadow-sm sm:mx-auto" style={{ fontFamily: 'var(--font-playfair)' }} aria-hidden="true">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="block rounded-full bg-white px-4 py-2 text-sm font-bold text-navy shadow-sm sm:mt-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {step}
                  </span>
                </span>
              ))}
            </motion.div>

            <motion.div {...stagger(0.36)} className="mx-auto mt-9 grid max-w-4xl gap-3 border-t border-gold/30 pt-7 text-left sm:grid-cols-3">
              {coachingPromises.map((promise) => (
                <p key={promise} className="flex items-start gap-3 rounded-xl bg-white/70 px-4 py-3 text-sm font-semibold leading-relaxed text-navy">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                  <span>{promise}</span>
                </p>
              ))}
            </motion.div>
          </div>
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
      <section className="scroll-mt-32 bg-white pt-20 pb-14 lg:pt-24 lg:pb-20" aria-labelledby="real-women-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <motion.div {...fadeUp} className="mx-auto max-w-4xl text-center mb-12">
            <p className="text-accent uppercase tracking-[0.18em] text-sm font-semibold mb-4">Don&apos;t Take My Word For It.</p>
            <h2 id="real-women-heading" className="text-section text-navy mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>Real Women. Real Transformations.</h2>
            <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed">See What Can Change When the Strategy Changes.</p>
          </motion.div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {realWomenCases.map(({ name, stat, detail, imageSrc, imageAlt, href }, idx) => (
              <motion.article
                key={name}
                {...stagger(idx * 0.04)}
                className="group overflow-hidden rounded-xl border border-gold/20 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
              >
                <Link href={href} className="block h-full">
                  <div className="relative aspect-[5/4] overflow-hidden bg-warm-bg">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      sizes="(min-width: 1280px) 15rem, (min-width: 1024px) 22vw, (min-width: 640px) 40vw, 100vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[0.66rem] uppercase tracking-[0.16em] font-semibold text-accent mb-2">{name}</p>
                    <p className="font-bold text-navy text-[0.98rem] leading-snug" style={{ fontFamily: 'var(--font-playfair)' }}>{stat}</p>
                    <p className="mt-2 text-muted text-[0.92rem] leading-relaxed">{detail}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-navy transition-colors group-hover:text-accent">
                      Read story
                      <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </motion.article>
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

      {/* 7. Why MenoThrive Is Different */}
      <section className="py-14 lg:py-20 bg-cream" aria-labelledby="different-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="text-center max-w-3xl mx-auto lg:col-span-7 lg:text-left">
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
              className="relative mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:col-span-5 lg:w-full lg:max-w-[340px]"
            >
              <div
                className="absolute inset-0 -translate-x-3 translate-y-3 rounded-[2rem] border border-gold/40"
                aria-hidden="true"
              />
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-black/10">
                <Image
                  src="/lead-magnet/strength-focus.jpg"
                  alt="Woman strength training as part of the MenoThrive coaching approach"
                  fill
                  sizes="(min-width: 1024px) 384px, (min-width: 640px) 360px, 280px"
                  className="object-cover object-[62%_50%]"
                />
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
            <p className="text-navy font-semibold text-[1.1rem] leading-relaxed mb-8">Limited 1:1 spots available.</p>
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
