import type { Metadata } from 'next'
import { buildMeta, seoKeywords } from '@/lib/metadata'
import { QuizFlow } from '@/components/quiz/QuizFlow'

export const metadata: Metadata = buildMeta({
  title: 'Perimenopause Quiz - Personalised Insight Report',
  description:
    'Take the 5-question Perimenopause Quiz to understand symptoms like weight gain, poor sleep, fatigue, brain fog, bloating and mood changes.',
  keywords: [
    'Perimenopause Quiz',
    'am I in perimenopause',
    'early perimenopause',
    'perimenopause symptoms',
    'signs of perimenopause',
    ...seoKeywords.symptoms,
    ...seoKeywords.aiQuestions,
  ],
  alternates: { canonical: 'https://www.the8thelement.in/quiz' },
})

export default function QuizPage() {
  return (
    <>
      <section className="pt-36 pb-16 bg-cream text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl font-semibold uppercase tracking-[0.2em] text-gold mb-3">
            Understand Your Symptoms
          </p>
          <h1
            className="text-section text-navy mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Perimenopause Quiz
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Answer 5 quick questions and receive a personalised insight report to understand what
            your body may be asking for.
          </p>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuizFlow />
        </div>
      </section>
    </>
  )
}
