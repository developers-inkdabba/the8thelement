import type { Metadata } from 'next'
import { buildMeta, seoKeywords } from '@/lib/metadata'
import { TransformThriveContent } from './TransformThriveContent'

export const metadata: Metadata = buildMeta({
  title: 'Transform & Thrive - 20-Week Small-Group Coaching Program',
  description:
    'Transform & Thrive is a 20-week small-group coaching program for women who want sustainable nutrition, strength, healthy habits, accountability and lifestyle support.',
  keywords: [
    'Transform and Thrive',
    'small group coaching for women',
    'healthy habits for women',
    'nutrition coaching for women',
    ...seoKeywords.nutritionLifestyle,
    ...seoKeywords.strengthAging.slice(0, 12),
    ...seoKeywords.emotionalEating,
    ...seoKeywords.outcomes,
  ],
  alternates: { canonical: 'https://www.the8thelement.in/transform-thrive' },
})

export default function TransformThrivePage() {
  return <TransformThriveContent />
}
