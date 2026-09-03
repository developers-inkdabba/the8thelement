import type { Metadata } from 'next'
import { buildMeta, seoKeywords } from '@/lib/metadata'
import { MenoThriveContent } from './MenoThriveContent'

export const metadata: Metadata = buildMeta({
  title: 'MenoThrive - The STRONG-HER System for Women 30-60',
  description:
    'MenoThrive is a high-touch 1:1 menopause coaching program for women 30-60+ seeking personalised nutrition, strength training, lifestyle support and sustainable weight loss.',
  keywords: [
    'MenoThrive',
    '1:1 menopause coaching',
    'menopause coaching program',
    'menopause consultation',
    'online menopause coach',
    ...seoKeywords.weightBody,
    ...seoKeywords.strengthAging,
    ...seoKeywords.nutritionLifestyle,
    ...seoKeywords.emotionalEating,
    ...seoKeywords.outcomes,
  ],
  alternates: { canonical: 'https://www.the8thelement.in/menothrive' },
})

export default function MenoThrivePage() {
  return <MenoThriveContent />
}
