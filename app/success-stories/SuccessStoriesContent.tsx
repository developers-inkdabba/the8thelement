'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'
import { StatsCounter } from '@/components/ui/StatsCounter'
import { CTABanner } from '@/components/sections/CTABanner'
import { GraduationVideosSection } from '@/components/sections/GraduationVideosSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ASSESSMENT_FORM_URL } from '@/lib/links'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
}

type SuccessStory = {
  name: string
  imageSrc?: string
  videoUrl?: string
  videoTitle?: string
  imageWidth?: number
  imageHeight?: number
  imageMaxWidth?: number
  images?: StoryImage[]
  imageAlt: string
  program: string
  challenge: string
  approach: string
  result: string
  pullQuote: string
  imageRight: boolean
}

type StoryImage = {
  src: string
  width: number
  height: number
  maxWidth?: number
  alt: string
}

const stories: SuccessStory[] = [
  {
    name: "Bhuvana, 75 years (Srividya's mom)",
    imageSrc: '/success-stories/Bhuvana.jpg',
    imageWidth: 1304,
    imageHeight: 1600,
    imageMaxWidth: 560,
    imageAlt: "Bhuvana's transformation at 75",
    program: 'The 8th Element',
    challenge:
      'At 75, she was struggling with leg swelling, varicose veins, pain, bloating, low energy, poor confidence, and reduced mobility.',
    approach:
      'A steady, sustainable lifestyle transformation built around strength, nutrition, consistency, and support over 1.5 years.',
    result:
      'Lost 12 kg, improved mobility, stamina, blood sugar control, and HbA1c, and her doctor discontinued diabetes medication.',
    pullQuote:
      "At 75, my mom's most recent update is not just weight loss. She is stronger, lighter, more mobile, more confident, and independent again.",
    imageRight: false,
  },
  {
    name: 'Uthra',
    imageSrc: '/success-stories/Uthra.jpg',
    imageWidth: 1122,
    imageHeight: 1402,
    imageMaxWidth: 560,
    imageAlt: "Uthra's strength and confidence transformation",
    program: 'Transform & Thrive',
    challenge:
      '36, dancer, navigating self-doubt, inconsistent habits, and all-or-nothing thinking around her body and progress.',
    approach:
      'A realistic coaching plan built around strength, stability, movement quality, and small consistent actions even on busy days.',
    result:
      'Built strength and stability, improved movement quality, became consistent with just 10-15 minutes when needed, and rebuilt self-trust.',
    pullQuote:
      'Built strength, stability, and confidence while becoming more comfortable in her body and moving beyond all-or-nothing thinking.',
    imageRight: true,
  },
  {
    name: 'Nirupa Seshadri',
    imageSrc: '/success-stories/niupa.jpeg',
    imageWidth: 1599,
    imageHeight: 1599,
    imageMaxWidth: 520,
    imageAlt: "Nirupa Seshadri's PCOS transformation journey",
    program: 'Transform & Thrive',
    challenge:
      'PCOS, stubborn weight changes, and the need for a sustainable approach to improve body composition and confidence at 37.',
    approach:
      'A personalised nutrition, movement, and habit-building plan focused on consistency, body awareness, and realistic lifestyle change.',
    result:
      'Lost 10+ kg, reduced 118 cm in measurements, and moved from Large to Small size clothes.',
    pullQuote:
      '10+ kg lost, 118 cm reduced in measurements, and a shift from Large to Small size clothes.',
    imageRight: false,
  },
  {
    name: 'Kriti',
    imageSrc: '/success-stories/Kriti.jpeg',
    imageWidth: 1443,
    imageHeight: 1599,
    imageMaxWidth: 520,
    imageAlt: "Kriti's health transformation journey",
    program: 'MenoThrive',
    challenge:
      "40+, fibromyalgia, Hashimoto's, chronic fatigue, disrupted sleep, and the need to regain daily energy and control.",
    approach:
      'A personalised plan focused on nourishing meals, sustainable movement, recovery, sleep support, and steady habit-building around her health needs.',
    result:
      'Lost 5 kg and 60 cm, improved sleep and energy, enhanced daily functioning, and began feeling in control again.',
    pullQuote:
      'Lost 5 kg and 60 cm, improved sleep and energy, and started feeling in control again.',
    imageRight: true,
  },
  {
    name: 'Sharmila',
    imageSrc: '/success-stories/Sharmila.jpeg',
    imageWidth: 1600,
    imageHeight: 1572,
    imageMaxWidth: 540,
    imageAlt: "Sharmila's perimenopause transformation journey",
    program: 'MenoThrive',
    challenge:
      '40+, perimenopause, stubborn weight, inconsistent habits, pain, and a strained relationship with food.',
    approach:
      'A sustainable plan built around nourishing food, strength, movement, habit consistency, and removing guilt or restriction from the process.',
    result:
      'Lost 8 kg and 73 cm, reduced pain, felt lighter in movement, rebuilt energy and strength for dance, and healed her relationship with food.',
    pullQuote:
      'Lost 8 kg and 73 cm, reduced pain, rebuilt energy for dance, and healed her relationship with food without guilt or restriction.',
    imageRight: false,
  },
  {
    name: 'Aishwarya',
    imageSrc: '/success-stories/Aishwarya.jpg',
    imageWidth: 782,
    imageHeight: 493,
    imageAlt: "Aishwarya's transformation journey",
    program: 'MenoThrive',
    challenge:
      'Post-pregnancy weight gain, binge eating patterns, and hormonal imbalance that resisted conventional approaches.',
    approach:
      'Balanced whole-food meals, progressive strength training, and the Track 2 Transform habit tracking tool to build consistent daily routines.',
    result:
      'Returned to her pre-pregnancy weight in just 4 months — and has maintained it sustainably without crash dieting.',
    pullQuote:
      "Regarding my coach, what stood out most was the feeling of having a personal cheerleader by my side. The focus was always on improvement and tackling challenges together, rather than dwelling on negatives. I never felt judged; instead, I was constantly motivated by the insightful feedback and practical suggestions. My coach's unique ability to make every session feel personalized and uplifting was invaluable. I relied on her not just for guidance but also for that boost of positivity and reassurance. Her passion and interest in not just achieving goals but genuinely improving clients' lives were evident in every interaction.",
    imageRight: false,
  },
  {
    name: 'Ishwarya',
    imageSrc: '/success-stories/Ishwarya.jpg',
    imageWidth: 727,
    imageHeight: 821,
    imageMaxWidth: 520,
    imageAlt: "Ishwarya's post-pregnancy transformation",
    program: 'Transform & Thrive',
    challenge:
      'Post-pregnancy weight gain, erratic mealtimes, cravings, binge eating, and hormonal changes while caring for a newborn.',
    approach:
      'A customised 6-month plan built around balanced meals, sustainable habits, strength training, cardio, HIIT, and daily Track2Transform meal tracking.',
    result:
      'Returned to her pre-pregnancy weight in 4 months while building habits she could sustain long-term.',
    pullQuote:
      'As a new mom, I joined the 6-month transformation program to lose post-pregnancy weight in a sustainable way. With balanced meals, consistent workouts, daily meal tracking, and Track2Transform, I reached my pre-pregnancy weight in 4 months and built habits that support my fitness journey ahead.',
    imageRight: true,
  },
  {
    name: 'Lakshmi',
    imageSrc: '/success-stories/Lakshmi.jpg',
    imageWidth: 828,
    imageHeight: 826,
    imageMaxWidth: 520,
    imageAlt: "Lakshmi's health transformation",
    program: 'MenoThrive',
    challenge:
      'Type 2 Diabetes diagnosis from obesity; walking and diet changes alone were not delivering results.',
    approach:
      'Strength training to improve insulin sensitivity combined with a customised meal plan and a habit-based approach to lasting behaviour change.',
    result:
      'Lost significant inches, gained energy and renewed confidence within just 3 months of starting the program.',
    pullQuote:
      'You taught me to be compassionate to myself and I am a much happier person. The best thing is you coached me without forcing me to do things. With your coaching skills and practices, my family and I can see a holistic transformation in me. My relationship with my family has improved and my relationship with food is healthier. I know exactly why I reach for food and I no longer binge-eat. I am more energetic and I am able to handle stress more strongly.',
    imageRight: true,
  },
  {
    name: 'Akshaya',
    imageSrc: '/success-stories/Akshaya.jpg',
    imageWidth: 826,
    imageHeight: 823,
    imageMaxWidth: 520,
    imageAlt: "Akshaya's journey with Transform & Thrive",
    program: 'Transform & Thrive',
    challenge:
      'Family history of diabetes and cholesterol; the scale refused to move despite effort; emotional eating and cravings undermining progress.',
    approach:
      'Craving management protocols via Track2Transform, building momentum through small daily wins to rewire her relationship with food.',
    result:
      'Lost kilos, dropped dress sizes, and completely transformed eating habits — with a healthier mindset around food.',
    pullQuote:
      'I joined the 6-month transformation program after trying many ways to manage my weight without success. In just 3 months, I lost kilos, dropped dress sizes, gained confidence and energy, improved my eating habits, and learned to handle cravings better with Track2Transform.',
    imageRight: false,
  },
  {
    name: 'Kavitha',
    imageSrc: '/success-stories/Kavitha.jpg',
    imageWidth: 622,
    imageHeight: 791,
    imageMaxWidth: 480,
    imageAlt: "Kavitha's GI health recovery",
    program: 'Transform & Thrive',
    challenge:
      'Years of GI distress and constant stomach discomfort that made her avoid social meals and gatherings.',
    approach:
      'A structured elimination diet with detailed meal tracking, methodically identifying and removing triggers over 6–8 weeks.',
    result:
      'GI issues reduced drastically within 6–8 weeks; social life fully restored and she can enjoy family meals again.',
    pullQuote:
      'The coaching journey was transformative for me. The non-judgmental, compassionate approach helped me move at my own pace, understand my body and emotions, build healthier habits, celebrate small wins, and feel supported by a coach who guided me with care and empathy.',
    imageRight: true,
  },
  {
    name: 'Akila',
    imageSrc: '/success-stories/Akila.jpg',
    imageWidth: 765,
    imageHeight: 800,
    imageMaxWidth: 520,
    imageAlt: "Akila's health transformation",
    program: 'Transform & Thrive',
    challenge:
      'Mindset and belief patterns around food, emotional eating, low energy, and difficulty understanding hunger and appetite cues.',
    approach:
      'Food awareness, habit coaching, mindful eating practices, strength training, and consistent behaviour changes at home.',
    result:
      'Lost close to 8 kg and 52 cm, improved energy, sleep, strength, confidence, food control, and hemoglobin levels.',
    pullQuote:
      'My whole perception of food and eating habits changed after the program. I feel more energetic and confident, understand my hunger cues, eat mindfully, and no longer feel controlled by emotional eating or snacking. Losing close to 8 kg and 52 cm improved my movement, confidence, sleep, strength, and self-esteem.',
    imageRight: false,
  },
  {
    name: 'Kalai',
    imageSrc: '/success-stories/Kalai.jpg',
    imageWidth: 705,
    imageHeight: 792,
    imageMaxWidth: 520,
    images: [
      {
        src: '/success-stories/Kalai-1.jpg',
        width: 744,
        height: 794,
        maxWidth: 520,
        alt: "Kalai's second weight loss transformation image",
      },
    ],
    imageAlt: "Kalai's weight loss transformation",
    program: 'Transform & Thrive',
    challenge:
      'Overweight at 95 kg, knee pain while climbing stairs, low confidence, and feeling depressed about body changes.',
    approach:
      'Mindful eating, consistent daily walking, protein at every meal, simple habit transformation, and steady coaching support.',
    result:
      'Dropped from 95 kg to 77 kg, feels lighter and more energetic, moves easily, and regained confidence to continue her journey.',
    pullQuote:
      'I started at 95 kg with knee pain and low confidence. After joining the program, I became mindful about food, walked daily, included protein at every meal, and stayed consistent. I dropped to 77 kg, feel light and energetic, move with ease, and now feel fit enough to continue my journey with confidence.',
    imageRight: true,
  },
  {
    name: 'Krithiga',
    imageSrc: '/success-stories/Krithiga.jpg',
    imageWidth: 816,
    imageHeight: 674,
    imageMaxWidth: 560,
    images: [
      {
        src: '/success-stories/Krithiga-1.jpg',
        width: 661,
        height: 692,
        maxWidth: 520,
        alt: "Krithiga's second transformation image",
      },
    ],
    imageAlt: "Krithiga's habit transformation",
    program: 'Transform & Thrive',
    challenge:
      'Perfection pressure, negative thought patterns, and difficulty building consistent health habits.',
    approach:
      'Tiny habit-building, thought observation, self-kindness, layered skill practice, and regular tracking.',
    result:
      'Built sustainable habits, gained self-awareness, became kinder to herself, and learned how to maintain long-term health.',
    pullQuote:
      'Learning that I do not have to be perfect, but only show up imperfectly and consistently with tiny habits, has been a game-changer. This journey helped me become kinder to myself, observe my thoughts, build new habits through tracking, and understand how to maintain my health long-term.',
    imageRight: false,
  },
  {
    name: 'Swetha Vignesh',
    imageSrc: '/success-stories/Swetha Vignesh.jpg',
    imageWidth: 464,
    imageHeight: 420,
    imageMaxWidth: 500,
    imageAlt: "Swetha Vignesh's lifestyle transformation",
    program: 'Transform & Thrive',
    challenge:
      'Managing work, toddler care, poor sleep, stress, and the feeling of losing control over daily life during Corona.',
    approach:
      'A holistic program covering mental, emotional, physical, and social health through small doable habits, meal planning, meditation, restful sleep, hydration, mindful eating, and emotional regulation.',
    result:
      'Rebuilt lifestyle structure, began respecting bodily cues, felt more in control, and was inspired to take up serious weight lifting.',
    pullQuote:
      'The program helped me rebuild my lifestyle while managing work and a toddler. Small doable habits made a big difference: meal planning, meditation, restful sleep, hydration, mindful eating, and emotional regulation helped everything fall into place. I feel more in control, respect my bodily cues, and feel inspired to take up serious weight lifting.',
    imageRight: true,
  },
  {
    name: 'Rajula',
    imageSrc: '/success-stories/Rajula.jpg',
    imageWidth: 742,
    imageHeight: 818,
    imageMaxWidth: 520,
    imageAlt: "Rajula's fitness transformation",
    program: 'Transform & Thrive',
    challenge:
      'Staying consistent with food and exercise habits, managing snacking, and improving stamina and energy.',
    approach:
      'Simple guidelines, steady habit building, flexible meal planning, recipe suggestions, meal picture reviews, and fine-tuning for balanced meals.',
    result:
      'Dropped inches, improved stamina, gained mental clarity and confidence, and progressed from barely running to completing 21 km in 2 hours 38 minutes.',
    pullQuote:
      'Srividya\'s guidance helped me stay consistent with ease. Simple food and exercise habits, flexible meal planning, recipe ideas, and regular fine-tuning helped me lose inches, improve stamina, feel mentally clear, and make fitness part of everyday life. I even went from barely being able to run to completing 21 km in 2 hours 38 minutes.',
    imageRight: false,
  },
  {
    name: 'Aritu',
    imageSrc: '/success-stories/Aritu.jpeg',
    imageWidth: 1200,
    imageHeight: 1600,
    imageMaxWidth: 500,
    imageAlt: "Aritu's perimenopause transformation journey",
    program: 'Transform & Thrive',
    challenge:
      "Perimenopause, stressful life periods, weight she had not seen shift in four years, and the need for a more compassionate way to stay consistent.",
    approach:
      'Eight months of sustainable coaching focused on nutrition, strength, stress-aware habits, and learning how to continue without abandoning progress.',
    result:
      'Lost 10+ kg, reached a weight she had not seen in four years, and built habits with a healthier, more compassionate mindset.',
    pullQuote:
      'Aritu learned that sustainable change was about more than weight loss: it was about navigating perimenopause with consistency, resilience, and self-compassion.',
    imageRight: true,
  },
]

const stats = [
  { value: '1000+', label: 'Women Coached', numericValue: 1000, suffix: '+' },
  { value: '8+', label: 'Years Experience', numericValue: 8, suffix: '+' },
  { value: '4.9', label: 'Average Rating', numericValue: 4, suffix: '.9' },
  { value: '3', label: 'Months Average to Results', numericValue: 3 },
]

function slugifyName(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function getStoryImages(story: SuccessStory): StoryImage[] {
  if (!story.imageSrc || !story.imageWidth || !story.imageHeight) {
    return []
  }

  return [
    {
      src: story.imageSrc,
      width: story.imageWidth,
      height: story.imageHeight,
      maxWidth: story.imageMaxWidth,
      alt: story.imageAlt,
    },
    ...(story.images ?? []),
  ]
}

function getYoutubeEmbedUrl(url: string) {
  const trimmedUrl = url.trim()
  if (!trimmedUrl) return ''

  const match =
    trimmedUrl.match(/youtu\.be\/([^?&/]+)/) ||
    trimmedUrl.match(/[?&]v=([^?&/]+)/) ||
    trimmedUrl.match(/youtube\.com\/embed\/([^?&/]+)/) ||
    trimmedUrl.match(/youtube\.com\/shorts\/([^?&/]+)/)

  return match ? `https://www.youtube.com/embed/${match[1]}` : trimmedUrl
}

function StoryImageFrame({
  story,
  onSelectImage,
}: {
  story: SuccessStory
  onSelectImage: (image: StoryImage) => void
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const storyImages = getStoryImages(story)
  const activeImage = storyImages[activeImageIndex] ?? storyImages[0]
  const hasSlides = storyImages.length > 1

  useEffect(() => {
    if (!hasSlides) {
      return
    }

    const timer = window.setInterval(() => {
      setActiveImageIndex((current) => (current + 1) % storyImages.length)
    }, 3000)

    return () => window.clearInterval(timer)
  }, [hasSlides, storyImages.length])

  if (story.videoUrl) {
    return (
      <div className="relative mx-auto w-full max-w-[782px] overflow-hidden rounded-2xl bg-navy p-3 shadow-[0_18px_45px_rgba(21,34,56,0.14)] ring-1 ring-navy/10">
        <div className="aspect-video overflow-hidden rounded-xl bg-navy/95">
          <iframe
            className="h-full w-full"
            src={getYoutubeEmbedUrl(story.videoUrl)}
            title={story.videoTitle ?? `${story.name} success story`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        {story.videoTitle ? (
          <p className="px-2 pt-4 text-center text-sm font-semibold uppercase tracking-[0.14em] text-gold">
            {story.videoTitle}
          </p>
        ) : null}
      </div>
    )
  }

  if (!activeImage) {
    return (
      <div
        className="w-full h-72 lg:h-96 rounded-2xl bg-linear-to-br from-cream to-[#d4c4b0] flex items-center justify-center"
        aria-label={story.imageAlt}
        role="img"
      >
        <p className="text-muted text-sm">Photo Placeholder</p>
      </div>
    )
  }

  return (
    <div
      className="relative mx-auto flex w-full max-w-[782px] items-center justify-center overflow-hidden rounded-2xl bg-[#EDE4D8] p-4 shadow-[0_18px_45px_rgba(21,34,56,0.14)] ring-1 ring-navy/10"
      onContextMenu={(event) => event.preventDefault()}
    >
      <button
        type="button"
        onClick={() => onSelectImage(activeImage)}
        className="flex w-full cursor-zoom-in items-center justify-center transition-transform duration-200 hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        aria-label={`View ${story.name}'s transformation image`}
      >
        <motion.span
          key={activeImage.src}
          className="block w-full"
          style={{ maxWidth: activeImage.maxWidth ?? activeImage.width }}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            width={activeImage.width}
            height={activeImage.height}
            sizes="(max-width: 1024px) calc(100vw - 6rem), 50vw"
            unoptimized
            draggable={false}
            onContextMenu={(event) => event.preventDefault()}
            className="h-auto w-full select-none object-contain"
          />
        </motion.span>
      </button>

      {hasSlides ? (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5" aria-hidden="true">
          {storyImages.map((image, index) => (
            <span
              key={image.src}
              className={`h-1.5 rounded-full transition-all ${
                index === activeImageIndex ? 'w-6 bg-navy' : 'w-1.5 bg-navy/35'
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

export function SuccessStoriesContent() {
  const [selectedImage, setSelectedImage] = useState<StoryImage | null>(null)

  return (
    <>
      {/* ── 1. Hero ── */}
      <section
        className="bg-white pt-36 pb-20 lg:pb-28"
        aria-labelledby="ss-hero-heading" 
      >
        <div className="w-full px-8 sm:px-12 lg:px-20 text-center">
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            id="ss-hero-heading"
            className="text-navy mb-5"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.2rem, 11vw, 5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Stories of Strength
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted text-xl leading-relaxed"
          >
            Real women. Real journeys. Real results.
          </motion.p>
        </div>
      </section>

      {/* ── 2. Featured Stories ── */}
      <section aria-label="Client transformation stories">
        {stories.map((story, i) => (
          <article
            key={story.name}
            id={`story-${slugifyName(story.name)}`}
            className={`py-20 lg:py-28 ${i % 2 === 0 ? 'bg-white' : 'bg-cream'}`}
            aria-labelledby={`story-heading-${i}`}
          >
            <div className="w-full px-8 sm:px-12 lg:px-20">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  story.imageRight ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={story.imageRight ? 'lg:col-start-2' : ''}
                >
                  <StoryImageFrame story={story} onSelectImage={setSelectedImage} />
                </motion.div>

                {/* Content */}
                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={story.imageRight ? 'lg:col-start-1 lg:row-start-1' : ''}
                >
                  <h2
                    id={`story-heading-${i}`}
                    className="text-navy mb-6"
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                      fontWeight: 700,
                      lineHeight: 1.2,
                    }}
                  >
                    {story.name}
                  </h2>

                  <dl className="space-y-4 mb-6">
                    <div>
                      <dt className="font-semibold text-dark text-2xl mb-1">
                        Challenge
                      </dt>
                      <dd className="text-muted text-[1.1rem] leading-relaxed">{story.challenge}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-2xl text-dark mb-1">
                        Approach
                      </dt>
                      <dd className="text-muted text-[1.1rem] leading-relaxed">{story.approach}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-2xl text-dark mb-1">
                        Result
                      </dt>
                      <dd className="text-dark font-medium text-[1.1rem] leading-relaxed">{story.result}</dd>
                    </div>
                  </dl>

                  {/* Pull quote */}
                  <blockquote
                    className="border-l-4 border-gold pl-5 py-1"
                    aria-label={`Quote from ${story.name}`}
                  >
                    <p
                      className="text-xl lg:text-2xl italic text-dark leading-relaxed"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      &ldquo;{story.pullQuote}&rdquo;
                    </p>
                    <cite className="text-base text-muted not-italic mt-2 block">
                      — {story.name}, {story.program}
                    </cite>
                  </blockquote>
                </motion.div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <GraduationVideosSection />

      <TestimonialsSection />

      {/* ── 3. Stats Strip ── */}
      <section
        className="py-20 lg:py-28 bg-navy"
        aria-labelledby="ss-stats-heading"
      >
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2
              id="ss-stats-heading"
              className="text-white"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: 700,
              }}
            >
              Our Track Record
            </h2>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.15 }}>
            <StatsCounter light stats={stats} />
          </motion.div>
        </div>
      </section>

      {/* ── 4. CTA Section ── */}
      <section
        className="py-20 lg:py-28 bg-cream"
        aria-labelledby="ss-cta-heading"
      >
        <div className="w-full px-8 sm:px-12 lg:px-20 text-center">
          <motion.div {...fadeUp}>
            <h2
              id="ss-cta-heading"
              className="text-navy mb-4"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
              }}
            >
              Ready to Feel Like Yourself Again?
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-3xl mx-auto mb-10">
              Every transformation begins with a single decision. Whether you&apos;re navigating
              perimenopause, menopause, or simply looking for sustainable lifestyle support, we&apos;ll
              help you find the coaching program that&apos;s right for you.
            </p>
            <a
              href={ASSESSMENT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex max-w-full items-center justify-center px-8 py-4 bg-navy text-white font-bold rounded-full hover:scale-[1.03] hover:shadow-xl transition-all duration-200 min-h-[56px] text-center text-base leading-snug whitespace-normal sm:px-10 sm:text-lg"
            >
              Book Your Appointment Today
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── 5. CTA Banner ── */}
      <CTABanner
        headline="Ready to Stop Guessing and Start Thriving?"
        subtext={
          <>
            You don&apos;t have to figure it out alone. Whether you&apos;re looking for personalised 1:1
            coaching or the support of a small-group program, we&apos;re here to help you build
            lasting habits, restore your confidence, and feel like yourself again.
            <br />
            Limited places are available to ensure every woman receives the personalised support she
            deserves.
          </>
        }
        ctaText="Book Your Appointment Today"
        ctaHref={ASSESSMENT_FORM_URL}
        secondaryLinks={[
          { text: 'Explore MenoThrive', href: '/menothrive' },
          { text: 'Explore Transform & Thrive', href: '/transform-thrive' },
        ]}
      />

      {selectedImage ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/90 px-4 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
          onContextMenu={(event) => event.preventDefault()}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Close image preview"
          >
            <X size={22} />
          </button>

          <motion.div
            className="max-h-[86vh] max-w-5xl overflow-hidden rounded-2xl bg-[#EDE4D8] p-3 shadow-2xl"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
            onContextMenu={(event) => event.preventDefault()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={selectedImage.width}
              height={selectedImage.height}
              sizes="(max-width: 1024px) calc(100vw - 2rem), 1024px"
              unoptimized
              draggable={false}
              onContextMenu={(event) => event.preventDefault()}
              className="max-h-[80vh] w-auto select-none object-contain"
            />
          </motion.div>
        </motion.div>
      ) : null}
    </>
  )
}
