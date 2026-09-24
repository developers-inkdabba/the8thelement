'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, delay },
})

const mediaFeatures: {
  publication: string
  title: string
  type: string
  href: string
  image?: string
  imageAspect?: string
}[] = [
  {
    publication: 'The Hindu',
    title: 'Meet the Chennai women who deadlift 90 kilos for fun',
    type: 'Article',
    href: 'https://www.thehindu.com/society/meet-the-chennai-women-who-deadlift-90-kilos-for-fun/article23695815.ece',
    image: '/media/the-hindu.jpg',
  },
  {
    publication: 'Times of India',
    title: "M's the word ... and how!",
    type: 'Article',
    href: 'https://timesofindia.indiatimes.com/city/chennai/ms-the-word-and-how/articleshow/119051737.cms',
    image: '/media/times-of-india.jpg',
  },
  {
    publication: 'Swadesh Vichar',
    title: 'Meet the Chennai women who deadlift 90 kilos for fun',
    type: 'Article',
    href: 'https://www.swadeshvichar.in/meet-the-chennai-women-who-deadlift-90-kilos-for-fun/',
    image: '/media/swadesh-vichar.jpg',
  },
  {
    publication: 'Financial Express Mumbai',
    title: 'The business of menopause',
    type: 'Article',
    href: 'https://www.magzter.com/stories/newspaper/Financial-Express-Mumbai/THE-BUSINESS-OF-MENOPAUSE?srsltid=AfmBOorhCNYOCbp6pjkBwhPpsDr_KfGreoyH33PRnYF3gsDIJfK3cYsF',
    image: '/media/financial-express.jpg',
    imageAspect: '1125 / 498',
  },
  {
    publication: 'The National News',
    title: 'How menopause coaches are helping women navigate the life stage',
    type: 'Article',
    href: 'https://www.thenationalnews.com/lifestyle/wellbeing/2025/02/28/menopause-coaches-women-health-wellness/',
    image: '/media/national-news.jpg',
  },
  {
    publication: 'Aarla Podcast',
    title: 'Episode 2: Srividya Gowri, Founder, The 8th Element',
    type: 'Podcast',
    href: 'https://www.youtube.com/watch?v=Jn8kFecZ7Vw',
    image: '/media/aarla-podcast.jpg',
  },
  {
    publication: 'The Change Exchange',
    title: 'Navigating Menopause Together with Srividya',
    type: 'Podcast',
    href: 'https://youtu.be/3elB7qYC9T8?si=V3Dq1dBfdvls2fm-',
    image: '/media/change-exchange.jpg',
  },
]

export function MediaContent() {
  return (
    <>
      <section className="bg-navy pt-24 pb-12 lg:pt-28 lg:pb-14" aria-labelledby="media-hero-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <motion.div {...fade(0)} className="mx-auto max-w-3xl text-center">
            <h1
              id="media-hero-heading"
              className="text-hero text-white"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              In The Media
            </h1>
            <p className="mt-6 text-gold text-lg font-semibold leading-relaxed">
              Women&apos;s health. Menopause. Nutrition. Strength. Sustainable transformation.
            </p>
            <p className="mt-4 text-white/78 text-lg leading-relaxed font-light">
              A selection of conversations, articles and features where Srividya shares practical,
              evidence-informed perspectives on helping women build healthier, stronger lives.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white" aria-labelledby="media-heading">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <h2 id="media-heading" className="sr-only">Media Coverage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaFeatures.map((feature, i) => (
              <motion.a
                key={`${feature.publication}-${feature.title}`}
                {...fade(i * 0.08)}
                href={feature.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between overflow-hidden border border-cream rounded-2xl p-7 bg-warm-bg/40 hover:border-navy hover:bg-white hover:shadow-md transition-all"
                aria-label={`Open ${feature.title} from ${feature.publication}`}
              >
                <span>
                  {feature.image && (
                    <span
                      className="relative -mx-7 -mt-7 mb-5 block overflow-hidden border-b border-cream bg-white"
                      style={{ aspectRatio: feature.imageAspect ?? (feature.type === 'Article' ? '4 / 3' : '16 / 9') }}
                    >
                      <Image
                        src={feature.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        quality={90}
                        className={feature.type === 'Article' ? 'object-contain object-top' : 'object-cover'}
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/70 px-5 py-2 text-sm font-semibold text-white">
                          Visit
                          <ExternalLink size={16} aria-hidden="true" />
                        </span>
                      </span>
                    </span>
                  )}
                  <span className="inline-flex text-[0.7rem] uppercase tracking-[0.16em] font-semibold text-accent mb-3">
                    {feature.type === 'Podcast' ? 'Podcast / Channel' : 'Publication'}
                  </span>
                  <span className="block text-muted text-sm">
                    {feature.publication}
                  </span>
                  <span className="block font-bold text-navy text-[1.2rem] leading-snug mt-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {feature.title}
                  </span>
                </span>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold italic text-navy group-hover:text-accent transition-colors">
                  {feature.type === 'Podcast' ? 'Watch / Listen' : 'Read Article'}
                  <ArrowRight size={15} className="not-italic transition-transform group-hover:translate-x-1" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
