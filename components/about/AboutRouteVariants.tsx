'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  Activity,
  Apple,
  Award,
  Brain,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Heart,
  Moon,
  RefreshCw,
  Salad,
  Sparkles,
  Wind,
} from 'lucide-react'
import { CTABanner } from '@/components/sections/CTABanner'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, delay },
})

const orbitContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const orbitItem = {
  hidden: { opacity: 0, scale: 0.4 },
  show: { opacity: 1, scale: 1, transition: { type: 'spring' as const, stiffness: 120, damping: 14 } },
}

const storySections = [
  {
    titleLines: ['The Body Changes.', 'The Strategy Should Too.'],
    eyebrow: 'My Approach',
    image: '/lead-magnet/lunge.jpeg',
    alt: 'Coach Srividya portrait',
    cardEyebrow: 'Science-Backed Approach',
    highlight: 'Because your body deserves a different strategy.',
    images: [
      {
        src: '/lead-magnet/lunge.jpeg',
        alt: 'Coach Srividya portrait',
        eyebrow: 'Science-Backed Approach',
        caption: 'Because your body deserves a different strategy.',
      },
      {
        src: '/lead-magnet/strength-focus.jpg',
        alt: 'Woman lifting a dumbbell with focus and determination',
        eyebrow: 'Strength With Purpose',
        caption: 'Every rep builds the resilience you need for this stage of life.',
        objectPosition: '75% 15%',
      },
    ],
    quote: '',
    body: [
      'Perimenopause and menopause can change how your body responds to nutrition, movement, sleep and stress.',
    ],
    lastParagraph: 'Your body isn’t broken. Your strategy may simply need to change.',
  },
  {
    title: 'Coaching That Works With Your Body',
    eyebrow: 'My Philosophy',
    image: '/lead-magnet/DSC00997.jpeg',
    alt: 'Coach Srividya working with clients',
    cardEyebrow: 'Personalised Coaching',
    highlight: 'Built around your body, your goals, and your life.',
    images: [
      {
        src: '/lead-magnet/DSC00997.jpeg',
        alt: 'Coach Srividya working with clients',
        eyebrow: 'Personalised Coaching',
        caption: 'Built around your body, your goals, and your life.',
      },
      {
        src: '/lead-magnet/philosophy-portrait.jpg',
        alt: 'Coach Srividya seated, smiling warmly',
        eyebrow: 'My Philosophy',
        caption: 'Every coaching journey starts with really seeing you.',
        objectPosition: 'center 15%',
      },
    ],
    quote: '“Your body isn’t broken. It simply needs a different approach.”',
    body: [
      'You deserve more than generic advice or being told to try harder.',
    ],
    lastParagraph: 'A whole-person approach — nutrition, movement, sleep, stress and mindset, built around you.',
  },
]

const journeyPhotos = [
  {
    src: '/lead-magnet/powerlifting-meet.jpg',
    alt: 'Srividya competing at a powerlifting meet',
    eyebrow: 'Where It Began',
    caption: 'Silver Medalist, 2018 Powerlifting Championship, Coimbatore.',
  },
  {
    src: '/images/old1.jpg',
    alt: 'Srividya running a road race',
    eyebrow: 'Staying Active',
    caption: 'Every run built the discipline I now bring to coaching.',
  },
]

const strongHerPillars = [
  { letter: 'S', short: 'Sleep', label: 'Sleep & Recovery', Icon: Moon },
  { letter: 'T', short: 'Strength', label: 'Training for Strength & Mobility', Icon: Dumbbell },
  { letter: 'R', short: 'Emotions', label: 'Regulate Emotions & Stress', Icon: Wind },
  { letter: 'O', short: 'Eating', label: 'Own Intuitive Eating', Icon: Apple },
  { letter: 'N', short: 'Nutrition', label: 'Nourish with Balanced Nutrition', Icon: Salad },
  { letter: 'G', short: 'Movement', label: 'Ground in Daily Movement & Mindfulness', Icon: Activity },
  { letter: 'H', short: 'Self-Image', label: 'Heal Relationships & Self-Image', Icon: Heart },
  { letter: 'E', short: 'Self-Trust', label: 'Elevate Self-Trust', Icon: Sparkles },
  { letter: 'R', short: 'Reflect', label: 'Reflect & Reset Consistently', Icon: RefreshCw },
]

const WHEEL_SLICE_ANGLE = 360 / strongHerPillars.length
const WHEEL_RADIUS = 48

function wheelPoint(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180
  return { x: 50 + radius * Math.cos(rad), y: 50 + radius * Math.sin(rad) }
}

const credentials = [
  { Icon: Award, title: 'Gold Medalist', detail: 'Nutrition & Dietetics' },
  { Icon: Sparkles, title: 'Precision Nutrition', detail: 'Level 1 & Level 2' },
  { Icon: Heart, title: "Women's Health", detail: 'Perimenopause & Menopause' },
  { Icon: Brain, title: 'Coaching Expertise', detail: 'Strength · Sleep · Stress · Behaviour Change' },
]

const pillars = [
  { Icon: Apple, label: 'Nutrition' },
  { Icon: Activity, label: 'Movement' },
  { Icon: Moon, label: 'Sleep & Recovery' },
  { Icon: Wind, label: 'Stress Management' },
  { Icon: Brain, label: 'Mindset' },
  { Icon: Heart, label: 'Hormonal Health' },
  { Icon: Sparkles, label: 'Self-Compassion' },
]

const teamMembers = [
  {
    name: 'Kshma',
    role: 'Precision Nutrition Level 1 Certified Coach',
    image: '/team/kshma.jpeg',
    alt: 'Kshma, Precision Nutrition Level 1 Certified Coach',
    imageClassName: 'object-[50%_18%]',
    description: 'Helps women build strength and healthier habits through sustainable lifestyle change.',
  },
  {
    name: 'Nithyaa Sundaramoorthy',
    role: 'Client Relations',
    image: '/team/Nithyaa.jpg',
    alt: 'Nithyaa Sundaramoorthy, Client Relations',
    imageClassName: 'object-[50%_18%]',
    description: 'A former High Court advocate, bringing empathy and calm coordination to every client conversation.',
  },
  {
    name: 'Deborah Jacob',
    role: "Clinical Dietitian & Women's Health Coach",
    image: '/team/Deborah.jpg',
    alt: "Deborah Jacob, Clinical Dietitian and Women's Health Coach",
    imageClassName: 'object-[50%_16%]',
    description: 'Combines evidence-based nutrition with practical habits for a healthier relationship with food.',
  },
]

function PortraitFrame({
  src,
  alt,
  sizes,
  priority = false,
  className = '',
  aspectClassName = 'aspect-[2/3]',
}: {
  src: string
  alt: string
  sizes: string
  priority?: boolean
  className?: string
  aspectClassName?: string
}) {
  return (
    <div className={`relative ${aspectClassName} overflow-hidden rounded-2xl bg-cream shadow-xl shadow-navy/10 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  )
}

function JourneySlider({
  photos,
  className = '',
}: {
  photos: { src: string; alt: string; eyebrow: string; caption: string; objectPosition?: string }[]
  className?: string
}) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = (nextIndex: number, dir: number) => {
    setDirection(dir)
    setIndex((nextIndex + photos.length) % photos.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setIndex((prev) => (prev + 1) % photos.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [photos.length])

  const current = photos[index]

  return (
    <div className={`relative w-full ${className}`}>
      <div className="absolute inset-0 translate-x-4 translate-y-4 border border-gold/45 rounded-2xl" aria-hidden="true" />
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-cream shadow-xl shadow-navy/10">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={current.src}
            custom={direction}
            initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="(min-width: 1024px) 23rem, 86vw"
              className="object-cover"
              style={{ objectPosition: current.objectPosition ?? 'center top' }}
            />
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={() => go(index - 1, -1)}
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-navy shadow-md transition-colors hover:bg-white"
          aria-label="Previous photo"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1, 1)}
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-navy shadow-md transition-colors hover:bg-white"
          aria-label="Next photo"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="absolute -bottom-5 left-6 right-6 rounded-2xl bg-white p-5 shadow-xl">
        <p className="text-xs uppercase tracking-[0.16em] text-accent font-semibold">{current.eyebrow}</p>
        <p className="text-navy font-semibold mt-1 leading-snug">{current.caption}</p>
      </div>

      <div className="absolute top-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5" role="tablist" aria-label="Photo selector">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show photo ${i + 1}`}
            onClick={() => go(i, i > index ? 1 : -1)}
            className={`h-1.5 rounded-full transition-all ${i === index ? 'w-5 bg-white' : 'w-1.5 bg-white/60'}`}
          />
        ))}
      </div>
    </div>
  )
}

function FeaturedPortraitHolder({
  src,
  alt,
  sizes,
  eyebrow,
  caption,
  priority = false,
  className = '',
  frameClassName = '',
  aspectClassName,
}: {
  src: string
  alt: string
  sizes: string
  eyebrow: string
  caption: string
  priority?: boolean
  className?: string
  frameClassName?: string
  aspectClassName?: string
}) {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="absolute inset-0 translate-x-4 translate-y-4 border border-gold/45 rounded-2xl" aria-hidden="true" />
      <PortraitFrame
        src={src}
        alt={alt}
        priority={priority}
        sizes={sizes}
        className={frameClassName}
        aspectClassName={aspectClassName}
      />
      <div className="absolute -bottom-5 left-6 right-6 rounded-2xl bg-white p-5 shadow-xl">
        <p className="text-xs uppercase tracking-[0.16em] text-accent font-semibold">{eyebrow}</p>
        <p className="text-navy font-semibold mt-1 leading-snug">{caption}</p>
      </div>
    </div>
  )
}

function TeamSection() {
  return (
    <section className="py-10 lg:py-12 bg-warm-bg" aria-labelledby="team-heading">
      <div className="w-full px-8 sm:px-12 lg:px-20">
        <motion.div {...fade(0)} className="mx-auto max-w-3xl text-center mb-10">
          <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-4">
            Meet My Team
          </p>
          <h2
            id="team-heading"
            className="text-navy mb-4 text-[clamp(1.9rem,3vw,2.6rem)] font-semibold leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            The People Who Help Hold the Journey With You
          </h2>
          <p className="text-muted leading-relaxed font-light">
            Behind The 8th Element is a small, thoughtful team built around care, clarity,
            nutrition expertise, and sustainable transformation for women in midlife.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              {...fade(index * 0.08)}
              className="group flex h-full flex-col rounded-2xl border border-cream/80 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-xl hover:shadow-navy/10"
            >
              <div className="relative mx-auto mb-5 h-32 w-32 overflow-hidden rounded-full bg-cream ring-4 ring-warm-bg transition-all duration-300 group-hover:ring-navy sm:h-36 sm:w-36 lg:h-40 lg:w-40">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  sizes="(min-width: 1024px) 10rem, (min-width: 640px) 9rem, 8rem"
                  className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${member.imageClassName}`}
                />
              </div>

              <div className="flex flex-1 flex-col">
                <div className="mb-4">
                  <h3
                    className="text-[1.45rem] text-navy"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {member.name}
                  </h3>
                  <p className="mt-2 text-[0.68rem] uppercase tracking-[0.14em] text-accent font-semibold leading-relaxed">
                    {member.role}
                  </p>
                </div>

                <p className="mx-auto max-w-[15rem] border-t border-gold/60 pt-4 text-sm leading-relaxed text-muted font-light">
                  {member.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function StrongHerSection() {
  return (
    <section className="relative overflow-hidden py-14 lg:py-20 bg-cream" aria-labelledby="strong-her-heading">
      <div className="absolute left-1/2 top-1/2 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />
      <div className="absolute left-[10%] top-1/4 h-64 w-64 rounded-full bg-accent/5 blur-3xl" aria-hidden="true" />
      <div className="absolute right-[10%] bottom-1/4 h-64 w-64 rounded-full bg-navy/5 blur-3xl" aria-hidden="true" />
      <div className="relative z-10 w-full px-8 sm:px-12 lg:px-20">
        <motion.div {...fade(0)} className="mx-auto max-w-3xl text-center mb-14">
          <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-4">
            My Framework
          </p>
          <h2
            id="strong-her-heading"
            className="text-section text-navy"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            STRONG-HER
          </h2>
        </motion.div>

        <div
          className="relative mx-auto h-[300px] w-[300px] sm:h-[380px] sm:w-[380px] lg:h-[480px] lg:w-[480px] xl:h-[560px] xl:w-[560px]"
          role="list"
          aria-label="The 9 pillars of the STRONG-HER framework"
        >
          {strongHerPillars.map((pillar, i) => {
            const mid = -90 + i * WHEEL_SLICE_ANGLE
            const pos = wheelPoint(mid, WHEEL_RADIUS * 0.66)
            const { Icon } = pillar
            return (
              <motion.div
                key={pillar.letter + pillar.short}
                {...fade(i * 0.05)}
                role="listitem"
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              >
                <div
                  className="flex h-20 w-20 flex-col items-center justify-center gap-1 bg-gold/20 text-center shadow-sm transition-colors duration-300 hover:bg-gold/35 sm:h-24 sm:w-24 xl:h-28 xl:w-28"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <Icon size={16} className="text-accent" aria-hidden="true" />
                  <span className="px-2 text-[0.6rem] font-semibold leading-tight text-navy sm:text-[0.65rem]">
                    <span className="font-bold text-accent">{pillar.letter}</span> {pillar.short}
                  </span>
                </div>
              </motion.div>
            )
          })}

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute left-1/2 top-1/2 flex h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white text-center shadow-lg"
          >
            <p className="text-2xl sm:text-3xl text-navy" style={{ fontFamily: 'var(--font-playfair)' }}>9</p>
            <p className="mt-1 text-[0.6rem] uppercase tracking-[0.16em] text-accent font-semibold">Pillars</p>
          </motion.div>
        </div>

        <motion.div {...fade(0.3)} className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-muted text-lg leading-relaxed font-light">
            9 pillars. One integrated approach.
          </p>
          <p className="mt-2 text-lg font-semibold text-navy">
            Built to help you become stronger, more regulated, confident and capable — in real life.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function CredentialsSection() {
  return (
    <section className="py-14 lg:py-20 bg-cream" aria-labelledby="credentials-heading">
      <div className="w-full px-8 sm:px-12 lg:px-20">
        <motion.div {...fade(0)} className="text-center mb-14">
          <h2 id="credentials-heading" className="text-section text-navy" style={{ fontFamily: 'var(--font-playfair)' }}>
            Why Women Trust Me
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
          {credentials.map(({ Icon, title, detail }, i) => (
            <motion.div
              key={title}
              {...fade(i * 0.08)}
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
  )
}

function PillarsSection() {
  return (
    <section className="py-14 lg:py-20 bg-warm-bg" aria-labelledby="pillars-heading">
      <div className="w-full px-8 sm:px-12 lg:px-20">
        <motion.div {...fade(0)} className="text-center mb-14 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-4">
            Why The 8th Element?
          </p>
          <h2 id="pillars-heading" className="text-section text-navy" style={{ fontFamily: 'var(--font-playfair)' }}>
            Transformation Is Never Just One Thing.
          </h2>
        </motion.div>
        <div
          className="relative mx-auto mt-4 mb-8 h-[300px] w-[300px] sm:h-[380px] sm:w-[380px] lg:h-[460px] lg:w-[460px]"
          role="list"
          aria-label="The 8 elements of the coaching framework"
        >
          {/* Decorative orbit ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="absolute inset-8 rounded-full border border-navy/15 sm:inset-10"
            aria-hidden="true"
          />

          {/* Centre: The Coach */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6"
          >
            <p className="text-[0.65rem] uppercase tracking-[0.18em] text-accent font-semibold mb-2">
              The 8th Element
            </p>
            <h3 className="text-2xl sm:text-3xl text-navy" style={{ fontFamily: 'var(--font-playfair)' }}>
              The Coach
            </h3>
            <p className="mt-2 text-muted text-sm">
              Bringing the pieces together.
            </p>
          </motion.div>

          {/* Orbiting pillars */}
          <motion.div
            className="orbit-ring absolute inset-0"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={orbitContainer}
          >
            {pillars.map(({ Icon, label }, i) => {
              const angle = (360 / pillars.length) * i
              return (
                <div key={label} className="absolute inset-0" style={{ transform: `rotate(${angle}deg)` }}>
                  <div
                    className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
                    style={{ transform: `rotate(${-angle}deg)` }}
                  >
                    <motion.div variants={orbitItem}>
                      <div className="orbit-item-counter flex flex-col items-center gap-2 rounded-2xl border border-navy/10 bg-white p-3 shadow-sm w-20 sm:w-24" role="listitem">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy/10 text-accent sm:h-10 sm:w-10" aria-hidden="true">
                          <Icon size={18} />
                        </span>
                        <span className="text-navy font-medium text-[0.7rem] text-center leading-snug sm:text-xs">{label}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function AboutVideoSection() {
  return (
    <section className="py-14 lg:py-20 bg-cream" aria-labelledby="about-video-heading">
      <div className="w-full px-8 sm:px-12 lg:px-20">
        <motion.div {...fade(0)} className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-4">
            Watch &amp; Connect
          </p>
          <h2
            id="about-video-heading"
            className="text-section text-navy mb-5"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Meet the Heart Behind the Work
          </h2>
          <p className="text-muted text-lg leading-relaxed max-w-3xl mx-auto font-light">
            Hear why I created The 8th Element — and why I believe women need a different approach
            to health and transformation in midlife.
          </p>
        </motion.div>

        <motion.div
          {...fade(0.12)}
          className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl bg-navy shadow-2xl shadow-navy/10"
        >
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/YB1UCPQT0AU"
              title="Meet Srividya Gowri, Founder of The 8th Element"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function PersonalJourneySection() {
  return (
    <section className="py-14 lg:py-20 bg-white" aria-labelledby="personal-journey-heading">
      <div className="w-full px-8 sm:px-12 lg:px-20">
        <motion.article
          {...fade(0)}
          className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(18rem,23rem)_minmax(0,1fr)] lg:gap-16"
        >
          <div className="flex justify-center lg:justify-start">
            <JourneySlider photos={journeyPhotos} className="mb-8 mt-6 max-w-[23rem] sm:mt-8 lg:mb-0" />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-4">
              My Journey
            </p>
            <h2
              id="personal-journey-heading"
              className="text-section text-navy mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              I Know What It Means to Start Before You Feel Ready.
            </h2>
            <div className="space-y-4 text-muted leading-relaxed text-lg font-light">
              <p>
                My own journey taught me that transformation isn&apos;t about perfection.
              </p>
              <p>
                It&apos;s about <strong className="font-semibold text-dark">showing up, rebuilding strength and learning to trust yourself again.</strong>
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}

export function AboutOneContent() {
  return (
    <>
      <section className="bg-navy pt-24 pb-14 lg:pt-28 lg:pb-16 overflow-hidden" aria-labelledby="about-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div {...fade(0.1)} className="order-2 lg:order-1 lg:col-span-7">
              <p className="text-gold uppercase tracking-[0.18em] text-xs font-semibold mb-5">Nutrition &amp; Dietetics &bull; Strength Training &bull; Behaviour Change &bull; Women&apos;s Health</p>
              <h1 id="about-heading" className="text-hero text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
                Meet Srividya
              </h1>
              <p className="mt-6 text-white/78 text-xl leading-relaxed max-w-2xl font-light">
                I help women navigate midlife with <strong className="font-semibold text-white">strength, confidence and a strategy that works with their changing bodies.</strong>
              </p>
              <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl" role="list" aria-label="Trust indicators">
                {[
                  ['1000+', 'Women coached'],
                  ['9', 'Pillar framework'],
                  ['8+', 'Years experience'],
                ].map(([value, label]) => (
                  <div key={label} role="listitem" className="border-t border-white/15 pt-4">
                    <p className="text-3xl text-white font-bold leading-none" style={{ fontFamily: 'var(--font-playfair)' }}>{value}</p>
                    <p className="text-white/55 text-xs uppercase tracking-wider mt-2">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fade(0.18)} className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end">
              <FeaturedPortraitHolder
                src="/lead-magnet/coach1.jpeg"
                alt="Coach Srividya seated on a couch"
                priority
                sizes="(min-width: 1024px) 25rem, 78vw"
                eyebrow="Science-Backed Coaching"
                caption="Helping women feel like themselves again."
                className="max-w-[18rem] sm:max-w-[25rem]"
                frameClassName="ring-1 ring-white/10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <AboutVideoSection />
      <PillarsSection />
      <PersonalJourneySection />

      <section className="py-14 lg:py-20 bg-white" aria-labelledby="about-story-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <h2 id="about-story-heading" className="sr-only">Srividya&apos;s Story</h2>
          <div className="space-y-24 lg:space-y-28">
            {storySections.map((section, index) => (
              <motion.article
                key={section.title ?? section.titleLines?.join(' ')}
                {...fade(index * 0.08)}
                className={`mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 lg:gap-14 ${
                  index % 2 === 0
                    ? 'lg:grid-cols-[minmax(0,1fr)_minmax(18rem,23rem)]'
                    : 'lg:grid-cols-[minmax(18rem,23rem)_minmax(0,1fr)]'
                }`}
              >
                <div className={`flex ${index % 2 === 0 ? 'lg:order-2 lg:justify-start' : 'lg:justify-start'}`}>
                  {section.images ? (
                    <JourneySlider photos={section.images} className="max-w-[23rem] mb-8 lg:mb-0" />
                  ) : (
                    <FeaturedPortraitHolder
                      src={section.image}
                      alt={section.alt}
                      sizes="(min-width: 1024px) 23rem, 86vw"
                      eyebrow={section.cardEyebrow}
                      caption={section.highlight}
                      className="max-w-[23rem] mb-8 lg:mb-0"
                    />
                  )}
                </div>
                <div className={index % 2 === 0 ? 'lg:order-1 lg:text-right' : ''}>
                  <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-4">{section.eyebrow}</p>
                  <h3 className="text-section text-navy mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {section.titleLines
                      ? section.titleLines.map((line) => <span key={line} className="block">{line}</span>)
                      : section.title}
                  </h3>
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-muted leading-relaxed text-lg mb-4 font-light">{paragraph}</p>
                  ))}
                  {section.lastParagraph ? (
                    <p className="text-dark leading-relaxed text-lg mb-4 font-semibold">
                      {section.lastParagraph}
                    </p>
                  ) : null}
                  {section.quote ? (
                    <p
                      className={`mt-7 border-gold text-dark text-xl leading-relaxed ${
                        index % 2 === 0
                          ? 'border-r-4 pr-5'
                          : 'border-l-4 pl-5'
                      }`}
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {section.quote}
                    </p>
                  ) : null}
                </div>
              </motion.article>
            ))}
          </div>

          <motion.blockquote {...fade(0.3)} className="mt-10 lg:mt-14 border-l-4 border-gold pl-8 py-2">
            <p className="italic text-dark leading-relaxed" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
              &ldquo;At 40+, the physiological rules change. Your coaching system must change with them.&rdquo;
            </p>
            <footer className="mt-4 text-muted font-medium not-italic">Coach Srividya</footer>
          </motion.blockquote>
        </div>
      </section>

      <StrongHerSection />
      <TeamSection />
      <CredentialsSection />
      <CTABanner />
    </>
  )
}

