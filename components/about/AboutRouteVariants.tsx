'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Activity,
  Apple,
  Award,
  Brain,
  ExternalLink,
  Heart,
  Moon,
  Sparkles,
  Users,
  Wind,
} from 'lucide-react'
import { CTABanner } from '@/components/sections/CTABanner'
import { ASSESSMENT_FORM_URL } from '@/lib/links'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, delay },
})

const storySections = [
  {
    title: 'The Biochemical Shift',
    eyebrow: 'The Science Behind My Approach',
    image: '/lead-magnet/lunge.jpeg',
    alt: 'Coach Srividya portrait',
    cardEyebrow: 'Science-Backed Approach',
    highlight: 'Because your body deserves a different strategy.',
    quote: '“The body changes. The strategy should too.”',
    body: [
      'Perimenopause changes more than hormones. It influences how your body responds to nutrition, movement, sleep, stress, and recovery.',
      'As these changes occur, the strategies that once worked often stop delivering the same results. Weight may become harder to manage, energy can fluctuate, sleep may suffer, and maintaining strength can feel more challenging—not because you’re doing something wrong, but because your body has different needs.',
      'That’s why my coaching focuses on understanding these changes and creating personalised strategies that support your body through this new phase of life.',
    ],
  },
  {
    title: 'Coaching That Works With Your Body',
    eyebrow: 'My Philosophy',
    image: '/lead-magnet/DSC00997.jpeg',
    alt: 'Coach Srividya working with clients',
    cardEyebrow: 'Personalised Coaching',
    highlight: 'Built around your body, your goals, and your life.',
    quote: '“Your body isn’t broken. It simply needs a different approach.”',
    body: [
      'I believe women deserve more than generic advice, restrictive diets, or being told to simply try harder.',
      'Every woman experiences perimenopause differently, which is why every coaching journey should be personalised. Rather than treating symptoms in isolation, I take a whole-person approach that considers nutrition, movement, sleep, stress, mindset, and sustainable behaviour change.',
      'My goal isn’t simply to help you lose weight. It’s to help you build a healthier relationship with your body, regain confidence in your choices, and create habits that support you for years to come.',
    ],
  },
]

const credentials = [
  { Icon: Award, title: 'Gold Medalist in Nutrition & Dietetics', detail: 'Recognised for academic excellence in Nutrition & Dietetics.' },
  { Icon: Sparkles, title: 'Precision Nutrition Level 1 & Level 2 Coach', detail: 'Advanced certification in evidence-based nutrition, behaviour change, and sustainable coaching.' },
  { Icon: Heart, title: "Women's Health & Menopause Specialist", detail: 'Focused expertise in supporting women through perimenopause and menopause with personalised nutrition and lifestyle strategies.' },
  { Icon: Brain, title: 'Strength Training, Sleep, Stress Management & Recovery Coach', detail: 'Helping women build strength, improve sleep, manage stress, and support healthy ageing through sustainable habits.' },
]

const pillars = [
  { Icon: Apple, label: 'Nutrition' },
  { Icon: Activity, label: 'Movement' },
  { Icon: Moon, label: 'Sleep' },
  { Icon: Wind, label: 'Stress' },
  { Icon: Brain, label: 'Mindset' },
  { Icon: Users, label: 'Community' },
  { Icon: Heart, label: 'Hormonal Health' },
  { Icon: Sparkles, label: 'Self-Compassion' },
]

const mediaFeatures = [
  {
    publication: 'The Hindu',
    title: 'Meet the Chennai women who deadlift 90 kilos for fun',
    type: 'Article',
    href: 'https://www.thehindu.com/society/meet-the-chennai-women-who-deadlift-90-kilos-for-fun/article23695815.ece',
  },
  {
    publication: 'Times of India',
    title: "M's the word ... and how!",
    type: 'Article',
    href: 'https://timesofindia.indiatimes.com/city/chennai/ms-the-word-and-how/articleshow/119051737.cms',
  },
  {
    publication: 'Swadesh Vichar',
    title: 'Meet the Chennai women who deadlift 90 kilos for fun',
    type: 'Article',
    href: 'https://www.swadeshvichar.in/meet-the-chennai-women-who-deadlift-90-kilos-for-fun/',
  },
  {
    publication: 'Financial Express Mumbai',
    title: 'The business of menopause',
    type: 'Article',
    href: 'https://www.magzter.com/stories/newspaper/Financial-Express-Mumbai/THE-BUSINESS-OF-MENOPAUSE?srsltid=AfmBOorhCNYOCbp6pjkBwhPpsDr_KfGreoyH33PRnYF3gsDIJfK3cYsF',
  },
  {
    publication: 'The National News',
    title: 'How menopause coaches are helping women navigate the life stage',
    type: 'Article',
    href: 'https://www.thenationalnews.com/lifestyle/wellbeing/2025/02/28/menopause-coaches-women-health-wellness/',
  },
  {
    publication: 'Aarla Podcast',
    title: 'Episode 2: Srividya Gowri, Founder, The 8th Element',
    type: 'Podcast',
    href: 'https://www.youtube.com/watch?v=Jn8kFecZ7Vw',
  },
  {
    publication: 'The Change Exchange',
    title: 'Navigating Menopause Together with Srividya',
    type: 'Podcast',
    href: 'https://youtu.be/3elB7qYC9T8?si=V3Dq1dBfdvls2fm-',
  },
]

const teamMembers = [
  {
    name: 'Kshma',
    role: 'Precision Nutrition Level 1 Certified Coach',
    image: '/team/kshma.jpeg',
    alt: 'Kshma, Precision Nutrition Level 1 Certified Coach',
    imageClassName: 'object-[50%_18%]',
    focus: 'Sustainable lifestyle change, strength training, and practical habit building.',
    bio: 'Kshma helps women become healthier, stronger, and more confident through nutrition, movement, and behaviour change that fits real life.',
  },
  {
    name: 'Nithyaa Sundaramoorthy',
    role: 'Client Relations',
    image: '/team/Nithyaa.png',
    alt: 'Nithyaa Sundaramoorthy, Client Relations',
    imageClassName: 'object-[50%_18%]',
    focus: 'Listening, empathy, coordination, and warm client support.',
    bio: 'A B.A. B.L. (Hons.) graduate and former High Court advocate, Nithyaa brings empathy, intuition, and calm coordination to every client conversation.',
  },
  {
    name: 'Deborah Jacob',
    role: "Clinical Dietitian & Women's Health Coach",
    image: '/team/Deborah.png',
    alt: "Deborah Jacob, Clinical Dietitian and Women's Health Coach",
    imageClassName: 'object-[50%_16%]',
    focus: 'Evidence-based nutrition, holistic wellness, and sustainable lifestyle change.',
    bio: 'With a Masters in Clinical Nutrition, Deborah combines personalised nutrition with practical habits that help women build a healthier relationship with food.',
  },
]

function PortraitFrame({
  src,
  alt,
  sizes,
  priority = false,
  className = '',
}: {
  src: string
  alt: string
  sizes: string
  priority?: boolean
  className?: string
}) {
  return (
    <div className={`relative aspect-[2/3] overflow-hidden rounded-2xl bg-cream shadow-xl shadow-navy/10 ${className}`}>
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

function FeaturedPortraitHolder({
  src,
  alt,
  sizes,
  eyebrow,
  caption,
  priority = false,
  className = '',
  frameClassName = '',
}: {
  src: string
  alt: string
  sizes: string
  eyebrow: string
  caption: string
  priority?: boolean
  className?: string
  frameClassName?: string
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
    <section className="py-16 lg:py-20 bg-warm-bg" aria-labelledby="team-heading">
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
              className="group flex h-full flex-col rounded-2xl border border-cream/80 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10"
            >
              <div className="relative mx-auto mb-5 h-32 w-32 overflow-hidden rounded-full bg-cream ring-4 ring-warm-bg sm:h-36 sm:w-36 lg:h-40 lg:w-40">
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
                  <p className="text-[0.68rem] uppercase tracking-[0.14em] text-accent font-semibold leading-relaxed">
                    {member.role}
                  </p>
                  <h3
                    className="mt-2 text-[1.45rem] text-navy"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {member.name}
                  </h3>
                </div>

                <p className="mx-auto max-w-sm border-t border-gold/60 pt-4 text-sm font-semibold leading-relaxed text-dark">
                  {member.focus}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted font-light">
                  {member.bio}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CredentialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream" aria-labelledby="credentials-heading">
      <div className="w-full px-8 sm:px-12 lg:px-20">
        <motion.div {...fade(0)} className="text-center mb-14">
          <h2 id="credentials-heading" className="text-section text-navy" style={{ fontFamily: 'var(--font-playfair)' }}>
            Why Women Trust Me
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" role="list">
          {credentials.map(({ Icon, title, detail }, i) => (
            <motion.div key={title} {...fade(i * 0.08)} role="listitem" className="bg-white rounded-2xl p-7 shadow-sm border border-white/80 flex items-start gap-5">
              <span className="w-12 h-12 rounded-full bg-rose-faint text-accent flex items-center justify-center shrink-0" aria-hidden="true">
                <Icon size={22} />
              </span>
              <div>
                <p className="font-bold text-dark text-lg" style={{ fontFamily: 'var(--font-playfair)' }}>{title}</p>
                <p className="text-muted mt-1">{detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PillarsSection() {
  return (
    <section className="py-20 lg:py-28 bg-navy" aria-labelledby="pillars-heading">
      <div className="w-full px-8 sm:px-12 lg:px-20">
        <motion.div {...fade(0)} className="text-center mb-6">
          <h2 id="pillars-heading" className="text-section text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
            The 8 Elements of Transformation
          </h2>
        </motion.div>
        <motion.p {...fade(0.1)} className="text-white/70 text-center text-[1.1rem] max-w-2xl mx-auto mb-14 leading-relaxed font-light">
          A practical framework for nutrition, movement, sleep, stress, mindset, community, hormonal health, and self-compassion.
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6" role="list">
          {pillars.map(({ Icon, label }, i) => (
            <motion.div key={label} {...fade(i * 0.06)} role="listitem" className="flex flex-col items-center gap-3 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <span className="w-12 h-12 rounded-full bg-accent/20 text-rose-tint flex items-center justify-center" aria-hidden="true">
                <Icon size={22} />
              </span>
              <span className="text-white font-medium text-base text-center">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutVideoSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream" aria-labelledby="about-video-heading">
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
            Meet the Heart Behind The 8th Element
          </h2>
          <p className="text-muted text-lg leading-relaxed max-w-3xl mx-auto font-light">
            Hear Srividya share the philosophy, care, and science-led approach behind her work with
            women navigating perimenopause and menopause.
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
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="personal-journey-heading">
      <div className="w-full px-8 sm:px-12 lg:px-20">
        <motion.article
          {...fade(0)}
          className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(18rem,22rem)_minmax(0,1fr)] lg:gap-16"
        >
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-64 sm:w-72 lg:w-[21rem]">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-gold/45" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-2xl bg-cream p-2 shadow-2xl shadow-navy/10">
                <div className="relative aspect-[414/763] overflow-hidden rounded-xl bg-white">
                  <Image
                    src="/images/old1.png"
                    alt="Srividya during an early personal fitness milestone"
                    fill
                    sizes="(min-width: 1024px) 21rem, (min-width: 640px) 18rem, 16rem"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-4">
              Where My Journey Began
            </p>
            <h2
              id="personal-journey-heading"
              className="text-section text-navy mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              I Know What It Means to Start Before You Feel Ready
            </h2>
            <div className="space-y-4 text-muted leading-relaxed text-lg font-light">
              <p>
                My work is rooted in more than certification and clinical knowledge. It is also
                shaped by lived experience - the discipline of showing up, rebuilding strength, and
                learning to trust the body again.
              </p>
              <p>
                That journey taught me that transformation is rarely instant. It begins with one
                honest decision, one supported next step, and a plan that respects who you are today.
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}

function MediaSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="media-heading">
      <div className="w-full px-8 sm:px-12 lg:px-20">
        <motion.div {...fade(0)} className="text-center mb-14">
          <h2 id="media-heading" className="text-section text-navy" style={{ fontFamily: 'var(--font-playfair)' }}>
            Featured In
          </h2>
          <p className="text-muted text-lg leading-relaxed max-w-3xl mx-auto mt-5 font-light">
            Sharing evidence-based insights on women&apos;s health, perimenopause, nutrition, and healthy ageing.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-5">
          {mediaFeatures.map((feature, i) => (
            <motion.a
              key={`${feature.publication}-${feature.title}`}
              {...fade(i * 0.08)}
              href={feature.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex min-h-56 flex-col justify-between border border-cream rounded-2xl p-7 bg-warm-bg/40 hover:border-navy hover:bg-white hover:shadow-md transition-all lg:col-span-2 ${
                mediaFeatures.length % 4 === 3 && i === mediaFeatures.length - 3 ? 'lg:col-start-2' : ''
              }`}
              aria-label={`Open ${feature.title} from ${feature.publication}`}
            >
              <span>
                <span className="inline-flex text-[0.7rem] uppercase tracking-[0.16em] font-semibold text-accent mb-4">
                  {feature.type}
                </span>
                <span className="block font-bold text-navy text-[1.35rem] leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {feature.publication}
                </span>
                <span className="block text-muted mt-3 leading-relaxed font-light">
                  {feature.title}
                </span>
              </span>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-accent transition-colors">
                View feature
                <ExternalLink size={16} aria-hidden="true" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AboutOneContent() {
  return (
    <>
      <section className="bg-navy pt-28 pb-20 lg:pt-32 lg:pb-24 overflow-hidden" aria-labelledby="about-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div {...fade(0.1)} className="lg:col-span-7">
              <p className="text-gold uppercase tracking-[0.18em] text-xs font-semibold mb-5">Nutrition &amp; Dietetics &bull; Strength Training &bull; Intuitive Eating &bull; Sleep &amp; Stress Management &bull; Behaviour Change</p>
              <h1 id="about-heading" className="text-hero text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
                Meet Srividya
              </h1>
              <p className="mt-6 text-white/78 text-xl leading-relaxed max-w-2xl font-light">
                I help women navigate perimenopause and menopause through a science-backed, personalised approach that goes beyond restrictive diets and one-size-fits-all advice.
              </p>
              <p className="mt-5 text-white/78 text-lg leading-relaxed max-w-2xl font-light">
                With a background in Nutrition &amp; Dietetics and expertise in Strength Training, Intuitive Eating, Sleep &amp; Stress Management, and Behaviour Change, I created the STRONG-HER™ Framework to help women understand their changing bodies and build lasting health, strength, confidence, and vitality.
              </p>
              <p className="mt-5 text-white/78 text-lg leading-relaxed max-w-2xl font-light">
                Because lasting transformation doesn&apos;t come from trying harder—it comes from learning to work with your body, not against it.
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

            <motion.div {...fade(0.18)} className="lg:col-span-5 flex justify-center lg:justify-end">
              <FeaturedPortraitHolder
                src="/lead-magnet/coach1.jpeg"
                alt="Coach Srividya seated on a couch"
                priority
                sizes="(min-width: 1024px) 25rem, 78vw"
                eyebrow="Science-Backed Coaching"
                caption="Helping women feel like themselves again."
                className="max-w-[25rem]"
                frameClassName="ring-1 ring-white/10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <AboutVideoSection />
      <PersonalJourneySection />
      <TeamSection />

      <section className="py-20 lg:py-28 bg-white" aria-labelledby="about-story-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <h2 id="about-story-heading" className="sr-only">Srividya&apos;s Story</h2>
          <div className="space-y-24 lg:space-y-28">
            {storySections.map((section, index) => (
              <motion.article
                key={section.title}
                {...fade(index * 0.08)}
                className={`mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:gap-14 ${
                  index % 2 === 1
                    ? 'lg:grid-cols-[minmax(0,1fr)_minmax(18rem,23rem)]'
                    : 'lg:grid-cols-[minmax(18rem,23rem)_minmax(0,1fr)]'
                }`}
              >
                <div className={`flex ${index % 2 === 1 ? 'lg:order-2 lg:justify-start' : 'lg:justify-start'}`}>
                  <FeaturedPortraitHolder
                    src={section.image}
                    alt={section.alt}
                    sizes="(min-width: 1024px) 23rem, 86vw"
                    eyebrow={section.cardEyebrow}
                    caption={section.highlight}
                    className="max-w-[23rem] mb-8 lg:mb-0"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1 lg:text-right' : ''}>
                  <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-4">{section.eyebrow}</p>
                  <h3 className="text-section text-navy mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>{section.title}</h3>
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-muted leading-relaxed text-lg mb-4 font-light">{paragraph}</p>
                  ))}
                  <p
                    className={`mt-7 border-gold text-dark text-xl leading-relaxed ${
                      index % 2 === 1
                        ? 'border-r-4 pr-5'
                        : 'border-l-4 pl-5'
                    }`}
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {section.quote}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.blockquote {...fade(0.3)} className="mt-20 border-l-4 border-gold pl-8 py-2">
            <p className="italic text-dark leading-relaxed" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
              &ldquo;At 40+, the physiological rules change. Your coaching system must change with them.&rdquo;
            </p>
            <footer className="mt-4 text-muted font-medium not-italic">Coach Srividya</footer>
          </motion.blockquote>
        </div>
      </section>

      <CredentialsSection />
      <PillarsSection />
      <MediaSection />
      <CTABanner
        headline="Ready to Feel Like Yourself Again?"
        subtext={
          <>
            <span className="block">Perimenopause and menopause can feel overwhelming—but you don&apos;t have to navigate this journey alone.</span>
            <span className="block mt-4">If you&apos;re ready to understand your changing body, build sustainable habits, and reclaim your health, strength, confidence, and energy, I&apos;d love to support you.</span>
          </>
        }
        ctaText="Book Your Appointment Today"
        ctaHref={ASSESSMENT_FORM_URL}
        secondaryLinks={[
          { text: 'Explore MenoThrive', href: '/menothrive' },
          { text: 'Explore Transform & Thrive', href: '/transform-thrive' },
        ]}
      />
    </>
  )
}

