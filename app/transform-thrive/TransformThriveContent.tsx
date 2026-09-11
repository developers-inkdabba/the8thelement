'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ClipboardCheck, FileText, MessageCircle, Users, Video, CheckCircle2 } from 'lucide-react'
import { CTABanner } from '@/components/sections/CTABanner'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { ASSESSMENT_FORM_URL } from '@/lib/links'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
}

const pillars = [
  {
    icon: <Users size={28} aria-hidden="true" />,
    title: 'Small Group Coaching (Maximum 10 Women)',
    description:
      "Receive expert coaching in an intimate group where you'll be supported, encouraged, and guided throughout your journey.",
  },
  {
    icon: <Video size={28} aria-hidden="true" />,
    title: 'Weekly Live Coaching Calls',
    description:
      'Join weekly Zoom sessions covering nutrition, movement, behaviour change, and practical strategies you can apply immediately.',
  },
  {
    icon: <MessageCircle size={28} aria-hidden="true" />,
    title: 'Daily WhatsApp Support',
    description:
      'Stay connected with daily guidance, accountability, encouragement, and answers to your questions between coaching calls.',
  },
  {
    icon: <ClipboardCheck size={28} aria-hidden="true" />,
    title: 'Habit Tracking & Accountability',
    description:
      'Build consistency through structured habit tracking that helps turn healthy actions into lasting routines.',
  },
  {
    icon: <FileText size={28} aria-hidden="true" />,
    title: 'Practical Tools & Resources',
    description:
      'Access meal-planning templates, meal prep guides, quick recipes, habit trackers, worksheets, and practical resources that make healthy living simple.',
  },
]

const masteryItems = [
  {
    title: 'Strength Training Fundamentals',
    description: 'Build strength, confidence, and consistency with movement.',
  },
  {
    title: 'Protein & Balanced Nutrition',
    description: 'Learn how to fuel your body for energy, strength, and overall health.',
  },
  {
    title: 'Meal Planning & Meal Preparation',
    description: 'Create simple systems that make healthy eating easier every week.',
  },
  {
    title: 'Intuitive & Mindful Eating',
    description:
      "Reconnect with your body's hunger, fullness, and satisfaction cues while building a healthier relationship with food.",
  },
  {
    title: 'Balanced Meal Building',
    description: 'Learn how to create nourishing meals without counting or restricting.',
  },
  {
    title: 'Managing Emotional Eating & Cravings',
    description: 'Develop practical strategies to navigate stress, emotions, and cravings with confidence.',
  },
  {
    title: 'Stress Management',
    description: 'Build resilience with simple techniques to better manage daily stress.',
  },
  {
    title: 'Sleep & Recovery',
    description: 'Improve sleep quality and recovery to support energy, hormones, and overall wellbeing.',
  },
  {
    title: 'Habit Building & Behaviour Change',
    description: 'Turn healthy choices into sustainable routines that last.',
  },
  {
    title: 'Creating a Healthy Lifestyle for Life',
    description: 'Leave with the confidence and skills to maintain your progress long after the program ends.',
  },
]

const forYouChecks = [
  'You want expert coaching in a supportive group environment.',
  "You're ready to build sustainable nutrition and lifestyle habits.",
  'You want to improve your relationship with food through intuitive eating.',
  "You're looking to become stronger, healthier, and more confident.",
  'You value accountability, encouragement, and learning alongside like-minded women.',
  "You're committed to making lasting changes - not chasing quick fixes.",
]

const walkAwayChecks = [
  'A healthier relationship with food',
  'Practical intuitive eating skills',
  'Meal planning and meal prepping confidence',
  'A sustainable strength-training routine',
  'Better sleep and stress-management habits',
  'Greater confidence in your daily choices',
  'Lifelong habits that support your health',
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
    question: 'Is this program delivered online?',
    answer:
      'Yes. Coaching calls, resources, habit tracking, and community support are all delivered online, allowing you to participate from anywhere.',
  },
  {
    question: 'What kind of support will I receive?',
    answer:
      "You'll receive weekly live coaching calls, daily WhatsApp support, structured habit tracking, practical resources, and encouragement from a supportive community throughout the program.",
  },
  {
    question: 'How do I join?',
    answer:
      'Start with the Menopause Health Assessment. Once your symptoms, goals, and health history are reviewed, we will recommend whether Transform & Thrive is the right next step.',
  },
]

export function TransformThriveContent() {
  return (
    <>
      <section
        className="bg-navy pt-36 pb-20 lg:pb-28"
        aria-labelledby="tt-hero-heading"
      >
        <div className="w-full px-8 sm:px-12 lg:px-20 text-center">
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
            Transform &amp; Thrive
          </motion.h1>

          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="text-white text-2xl lg:text-3xl font-bold max-w-3xl mx-auto mb-5 leading-snug"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Build Healthy Habits. Gain Strength. Thrive for Life.
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="text-white/80 text-xl leading-relaxed max-w-3xl mx-auto mb-10"
          >
            A 20-week small-group coaching program designed for women who want expert guidance,
            accountability, and a supportive community to build sustainable nutrition, movement, and
            lifestyle habits.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.34 }}
            className="flex flex-col items-center gap-3"
          >
            <a
              href={ASSESSMENT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex max-w-full items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-full hover:scale-[1.03] hover:shadow-2xl transition-all duration-200 min-h-14 text-center text-base leading-snug whitespace-normal sm:px-10 sm:text-lg"
            >
              See If Transform &amp; Thrive Is Right for You
            </a>
            <p className="text-white/50 text-base">Limited places available for the next Cohort</p>
          </motion.div>
        </div>
      </section>

      <section
        className="py-20 lg:py-28 bg-white"
        aria-labelledby="tt-pillars-heading"
      >
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2
              id="tt-pillars-heading"
              className="text-section text-navy"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Why Transform &amp; Thrive Works
            </h2>
            <p className="mt-4 text-muted text-lg font-semibold max-w-3xl mx-auto">
              More Than a Program - A Complete Coaching Experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8" role="list">
            {pillars.map((pillar, i) => (
              <motion.article
                key={pillar.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                role="listitem"
                className={`bg-cream rounded-2xl p-8 flex gap-5 items-start ${
                  i === pillars.length - 1 && pillars.length % 2 === 1 ? 'sm:col-span-2 sm:mx-auto sm:w-1/2' : ''
                }`}
              >
                <div
                  className="shrink-0 w-14 h-14 rounded-xl bg-navy text-gold flex items-center justify-center"
                  aria-hidden="true"
                >
                  {pillar.icon}
                </div>
                <div>
                  <h3
                    className="text-3xl font-bold text-navy mb-2"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-muted text-[1.1rem] leading-relaxed">{pillar.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 lg:py-28 bg-cream"
        aria-labelledby="tt-curriculum-heading"
      >
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2
              id="tt-curriculum-heading"
              className="text-section text-navy"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Your 20-Week Transformation Journey
            </h2>
            <p className="mt-5 text-muted text-lg leading-relaxed max-w-4xl mx-auto">
              Small, consistent changes create lasting transformation. Over 20 weeks, you&apos;ll develop
              the knowledge, skills, and habits to confidently support your health long after the program
              ends. Each phase builds on the previous one, helping you create sustainable change at a pace
              that feels achievable.
            </p>
          </motion.div>

          <motion.h3
            {...fadeUp}
            className="text-3xl font-bold text-navy mb-8 text-center"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            What You&apos;ll Master Over 20 Weeks
          </motion.h3>

          <ul
            className="grid grid-cols-1 lg:grid-cols-2 gap-5"
            aria-label="What you will master over 20 weeks"
          >
            {masteryItems.map((item, i) => (
              <motion.li
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm"
              >
                <div
                  className="shrink-0 w-9 h-9 rounded-full bg-navy text-gold flex items-center justify-center"
                  aria-hidden="true"
                >
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-navy mb-1"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-muted text-[1.05rem] leading-relaxed">{item.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="py-20 lg:py-28 bg-white"
        aria-labelledby="tt-for-heading"
      >
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2
              id="tt-for-heading"
              className="text-section text-navy"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Is This Right for You?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-cream rounded-2xl p-8"
            >
              <h3
                className="text-3xl font-bold text-navy mb-6"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Transform &amp; Thrive Is Perfect If You...
              </h3>
              <ul className="space-y-4" role="list">
                {forYouChecks.map((item) => (
                  <li key={item} className="flex items-start gap-3" role="listitem">
                    <CheckCircle2
                      size={28}
                      className="text-gold shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-dark text-xl leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-navy rounded-2xl p-8"
            >
              <h3
                className="text-3xl font-bold text-white mb-6"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                What You&apos;ll Walk Away With
              </h3>
              <ul className="space-y-4" role="list">
                {walkAwayChecks.map((item) => (
                  <li key={item} className="flex items-start gap-3" role="listitem">
                    <CheckCircle2
                      size={28}
                      className="text-gold shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-white/85 text-xl leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section
        className="py-20 lg:py-28 bg-white"
        aria-labelledby="tt-faq-heading"
      >
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2
              id="tt-faq-heading"
              className="text-section text-navy"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="max-w-4xl mx-auto bg-cream/40 rounded-2xl px-6 sm:px-8"
          >
            <FAQAccordion items={faqs} />
          </motion.div>
        </div>
      </section>

      <section
        className="py-20 lg:py-28 bg-navy"
        aria-labelledby="tt-pricing-heading"
      >
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2
              id="tt-pricing-heading"
              className="text-white scale-130"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
              }}
            >
              Ready to Take the Next Step?
            </h2>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="max-w-3xl mx-auto bg-white rounded-3xl p-10 text-center shadow-xl"
          >
            <h3
              className="text-4xl font-bold text-navy mb-3"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Small-Group Coaching Experience
            </h3>
            <p className="text-muted text-[1.1rem] mb-4 leading-relaxed">
              Transform &amp; Thrive is intentionally limited to 10 women per cohort to create a
              personalised, supportive coaching environment where every participant receives individual
              attention.
            </p>
            <p className="text-base font-semibold text-gold mb-8 uppercase tracking-wide">
              Flexible payment options are available.
            </p>
            <a
              href={ASSESSMENT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex max-w-full items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-full hover:scale-[1.03] hover:shadow-xl transition-all duration-200 min-h-14 text-center text-base leading-snug whitespace-normal sm:px-10 sm:text-lg"
            >
              Book Your Appointment Today
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-cream" aria-labelledby="tt-menothrive-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <motion.div
            {...fadeUp}
            className="max-w-4xl mx-auto bg-white rounded-3xl p-8 lg:p-10 text-center shadow-sm border border-gold/20"
          >
            <h2
              id="tt-menothrive-heading"
              className="text-3xl lg:text-4xl font-bold text-navy mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Looking for a fully personalised 1:1 coaching experience?
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              Explore MenoThrive, my signature six-month coaching program for women seeking
              individualised support, tailored strategies, and high-touch coaching.
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

      <CTABanner
        headline="Ready to Transform Your Health - One Habit at a Time?"
        subtext={
          <>
            Lasting change doesn&apos;t happen through willpower alone. It happens by building the right
            habits, with the right support, one step at a time.
            <br />
            If you&apos;re ready to strengthen your relationship with food, move with confidence, and
            create a healthier, more energised future, we&apos;d love to welcome you to the next Transform
            &amp; Thrive cohort.
          </>
        }
        ctaText="See If Transform & Thrive Is Right for You"
        ctaHref={ASSESSMENT_FORM_URL}
        secondaryText={
          <>
            Not sure where you are in your menopause journey? Take the Perimenopause Quiz &rarr;
          </>
        }
        secondaryHref="/quiz"
      />
    </>
  )
}
