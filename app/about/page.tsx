import type { Metadata } from 'next'
import { buildMeta, seoKeywords } from '@/lib/metadata'
import { AboutOneContent } from '@/components/about/AboutRouteVariants'

export const metadata: Metadata = buildMeta({
  title: 'About Srividya - Menopause Nutrition & Lifestyle Coach',
  description:
    'Meet Srividya Gowri, menopause nutrition and lifestyle coach, strength and behaviour change specialist, and founder of The 8th Element.',
  keywords: [
    'Srividya Gowri',
    'The 8th Element founder',
    'menopause nutrition lifestyle coach',
    'women health coach',
    'Precision Nutrition coach',
    ...seoKeywords.core,
    ...seoKeywords.strengthAging.slice(0, 10),
    ...seoKeywords.nutritionLifestyle.slice(0, 10),
  ],
  alternates: { canonical: 'https://www.the8thelement.in/about' },
})

export default function AboutPage() {
  return <AboutOneContent />
}
