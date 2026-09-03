import type { Metadata } from 'next'
import { buildMeta, seoKeywords } from '@/lib/metadata'
import { SuccessStoriesContent } from './SuccessStoriesContent'

export const metadata: Metadata = buildMeta({
  title: 'Success Stories - Client Journeys',
  description:
    'Real women, real results. Read transformation stories and watch client graduation videos from The 8th Element clients.',
  keywords: [
    'menopause success stories',
    'perimenopause success stories',
    'women weight loss stories',
    'healthy lifestyle transformation',
    'client graduation stories',
    ...seoKeywords.weightBody,
    ...seoKeywords.symptoms.slice(0, 10),
    ...seoKeywords.outcomes,
  ],
  alternates: { canonical: 'https://www.the8thelement.in/success-stories' },
})

export default function SuccessStoriesPage() {
  return <SuccessStoriesContent />
}
