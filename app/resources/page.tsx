import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, PlayCircle } from 'lucide-react'
import { buildMeta, seoKeywords } from '@/lib/metadata'

export const metadata: Metadata = buildMeta({
  title: 'Start Here - Perimenopause Quiz',
  description:
    'Start with the Perimenopause Quiz to understand your symptoms, stage signal, and next steps with personalised insights delivered to your inbox.',
  keywords: [
    'Perimenopause Quiz',
    'menopause stage quiz',
    'menopause symptoms quiz',
    'perimenopause assessment',
    ...seoKeywords.core,
    ...seoKeywords.outcomes,
    ...seoKeywords.strengthAging.slice(0, 8),
  ],
  alternates: { canonical: 'https://www.the8thelement.in/resources' },
})

export default function ResourcesPage() {
  return (
    <main className="bg-cream">
      <section className="pt-36 pb-20 lg:pb-28">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-accent font-semibold uppercase tracking-[0.22em] text-lg lg:text-xl mb-4">
              Start Here
            </p>
            <h1
              className="text-section text-navy mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Perimenopause Quiz
            </h1>
            <p className="mx-auto max-w-3xl text-muted text-xl leading-relaxed mb-5">
              Not sure what is happening in your body right now? Begin with this quick quiz to
              understand your symptoms and your menopause stage signal.
            </p>
            <p className="mx-auto max-w-3xl text-dark text-lg font-semibold leading-relaxed mb-10">
              Your personalised report is sent straight to your inbox with practical next steps and
              guidance on what to focus on next.
            </p>
            <Link
              href="/quiz"
              className="inline-flex max-w-full items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-full hover:bg-accent transition-all duration-200 min-h-14 text-center text-base leading-snug whitespace-normal sm:px-10 sm:text-lg"
            >
              Take the quiz
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl text-center">
            <div>
              <div className="mb-4 flex items-center justify-center gap-3 text-accent font-semibold uppercase tracking-[0.2em] text-sm">
                <PlayCircle className="h-5 w-5" aria-hidden="true" />
                Real Client Videos
              </div>
              <h2
                className="text-3xl lg:text-4xl text-navy mb-4"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Watch Client Graduation Stories
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                The video stories now live with Success Stories, alongside written transformations,
                so you can see the full picture of client results in one place.
              </p>
            </div>
            <Link
              href="/success-stories#client-graduation-stories"
              className="mt-8 inline-flex max-w-full items-center justify-center gap-2 px-7 py-3 bg-gold text-navy font-bold rounded-full hover:bg-navy hover:text-white transition-all duration-200 min-h-12 text-center leading-snug whitespace-normal sm:px-8"
            >
              Watch Graduation Stories
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
