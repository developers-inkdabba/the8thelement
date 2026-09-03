import type { Metadata } from 'next'
import { buildMeta, seoKeywords } from '@/lib/metadata'
import { BlogCard } from '@/components/ui/BlogCard'
import { blogPosts } from '@/lib/blogPosts'

export const metadata: Metadata = buildMeta({
  title: 'Blog - Menopause & Perimenopause Resources',
  description:
    'Evidence-based articles on nutrition, fitness, mindset, and hormones for women navigating perimenopause and menopause.',
  keywords: [
    'menopause blog',
    'perimenopause resources',
    ...seoKeywords.aiQuestions,
    ...seoKeywords.weightBody,
    ...seoKeywords.metabolicHealth,
    ...seoKeywords.symptoms,
    ...seoKeywords.nutritionLifestyle.slice(0, 10),
  ],
  alternates: { canonical: 'https://www.the8thelement.in/blog' },
})

export default function BlogPage() {
  return (
    <>
      <section className="pt-36 pb-16 bg-cream text-center">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <h1
            className="text-section text-navy mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            The 8th Element Blog
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Evidence-based insights on nutrition, fitness, mindset, and hormones.
          </p>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6"
            role="list"
            aria-label="Blog posts"
          >
            {blogPosts.map((post, index) => (
              <li key={post.slug}>
                <BlogCard {...post} eager={index < 2} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
