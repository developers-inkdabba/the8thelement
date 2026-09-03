import type { Metadata } from 'next'
import { buildMeta, seoKeywords } from '@/lib/metadata'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { ReframeSection } from '@/components/sections/ReframeSection'
import { ProgramsSection } from '@/components/sections/ProgramsSection'
import { AboutPreviewSection } from '@/components/sections/AboutPreviewSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTABanner } from '@/components/sections/CTABanner'
import { ASSESSMENT_FORM_URL } from '@/lib/links'

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
      <CTABanner
        headline="Ready to Feel Like Yourself Again?"
        subtext={
          <>
            You&apos;ve spent enough time guessing.
            <br />
            Every woman experiences menopause differently. That&apos;s why the first step is
            understanding what&apos;s happening in your body.
            <br />
            Through a personalised Menopause Health Assessment, we&apos;ll identify what&apos;s
            keeping you stuck and recommend the right strategy to help you regain your health,
            strength, confidence, and energy.
          </>
        }
        ctaText="Book Your Appointment Today"
        ctaHref={ASSESSMENT_FORM_URL}
        ctaMicrocopy={
          <>
            Complete your assessment in 10-15 minutes. I&apos;ll personally review it before
            recommending your next step.
          </>
        }
        secondaryLinks={[
          { text: 'Explore MenoThrive', href: '/menothrive' },
          { text: 'Explore Transform & Thrive', href: '/transform-thrive' },
        ]}
      />
    </>
  )
}
