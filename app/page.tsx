import type { Metadata } from 'next'
import { buildMeta, seoKeywords } from '@/lib/metadata'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { ReframeSection } from '@/components/sections/ReframeSection'
import { ProgramsSection } from '@/components/sections/ProgramsSection'
import { AboutPreviewSection } from '@/components/sections/AboutPreviewSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTABanner } from '@/components/sections/CTABanner'

export const metadata: Metadata = buildMeta({
  title: 'Srividya | Menopause Nutrition Lifestyle Weight loss Coach',
  description:
    'Science-backed perimenopause and menopause nutrition, strength, lifestyle and weight loss coaching by Srividya for women 30-60+ who want more energy, confidence and sustainable health.',
  keywords: [
    ...seoKeywords.weightBody,
    ...seoKeywords.strengthAging,
    ...seoKeywords.nutritionLifestyle,
    ...seoKeywords.symptoms,
    ...seoKeywords.outcomes,
  ],
  openGraph: {
    title: 'Srividya | Menopause Nutrition Lifestyle Weight loss Coach',
    description:
      'Science-backed perimenopause and menopause nutrition, strength, lifestyle and weight loss coaching by Srividya.',
    url: 'https://www.the8thelement.in',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://www.the8thelement.in' },
})

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreviewSection />
      <ProblemSection />
      <ReframeSection />
      <ProgramsSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  )
}
