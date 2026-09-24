import type { Metadata } from 'next'
import { buildMeta, seoKeywords } from '@/lib/metadata'
import { MediaContent } from '@/components/media/MediaContent'

export const metadata: Metadata = buildMeta({
  title: 'Media - Press, Articles & Podcasts',
  description:
    'Media coverage and podcast features of Srividya Gowri and The 8th Element - articles and interviews on menopause, perimenopause, and women’s health.',
  keywords: [
    'Srividya Gowri press',
    'The 8th Element media',
    'menopause coach interview',
    'menopause podcast',
    ...seoKeywords.core,
  ],
  alternates: { canonical: 'https://www.the8thelement.in/media' },
})

export default function MediaPage() {
  return <MediaContent />
}
