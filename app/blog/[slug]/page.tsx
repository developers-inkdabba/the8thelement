import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { buildMeta, seoKeywords } from '@/lib/metadata'
import { blogPosts, getBlogPost } from '@/lib/blogPosts'
import { CTABanner } from '@/components/sections/CTABanner'
import { NewsletterForm } from '@/components/forms/NewsletterForm'
import { BlogCard } from '@/components/ui/BlogCard'
import { ASSESSMENT_FORM_URL } from '@/lib/links'

type Props = { params: Promise<{ slug: string }> }

function ArticleContent({ post }: { post: NonNullable<ReturnType<typeof getBlogPost>> }) {
  return (
    <>
      {post.content.map((block, index) => {
        if (block.type === 'heading') {
          return (
            <h2
              key={`${block.type}-${index}`}
              className="text-3xl font-bold text-navy pt-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              {block.text}
            </h2>
          )
        }

        if (block.type === 'list') {
          return (
            <ul key={`${block.type}-${index}`} className="list-disc pl-6 space-y-2 marker:text-gold">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )
        }

        return <p key={`${block.type}-${index}`}>{block.text}</p>
      })}
    </>
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return buildMeta({
      title: 'Blog Article',
      description:
        'Read menopause and midlife health insights from The 8th Element.',
      keywords: [...seoKeywords.aiQuestions, ...seoKeywords.core],
    })
  }

  return buildMeta({
    title: `${post.title} | Blog`,
    description: post.excerpt,
    keywords: [
      post.category,
      post.title,
      ...seoKeywords.aiQuestions,
      ...seoKeywords.weightBody.slice(0, 10),
      ...seoKeywords.symptoms.slice(0, 10),
      ...seoKeywords.metabolicHealth,
      ...seoKeywords.nutritionLifestyle.slice(0, 8),
    ],
  })
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((relatedPost) => relatedPost.slug !== post.slug)
    .slice(0, 2)

  return (
    <>
      <section className="pt-36 pb-0 bg-cream">
        <div className="w-full px-8 sm:px-12 lg:px-20 pb-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-base text-muted">
              <li>
                <Link href="/" className="hover:text-navy transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-navy transition-colors">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-navy font-medium truncate max-w-[240px]">{post.title}</li>
            </ol>
          </nav>

          <h1
            className="text-4xl sm:text-5xl font-bold text-navy leading-tight mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-base text-muted">
            <span>
              By <span className="font-semibold text-dark">Srividya</span>
            </span>
            <span aria-hidden="true">-</span>
            <time dateTime={post.dateTime}>{post.date}</time>
            <span aria-hidden="true">-</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="relative h-[22rem] sm:h-[28rem] lg:h-[34rem] max-w-4xl mx-auto rounded-t-2xl overflow-hidden bg-cream">
          <Image
            src={`/blog/${post.slug}.png`}
            alt={post.title}
            fill
            priority
            sizes="(min-width: 1024px) 56rem, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/10" />
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <article className="lg:flex-1 max-w-prose">
              <div className="prose prose-lg text-xl text-dark leading-relaxed space-y-6">
                <ArticleContent post={post} />
              </div>

              <div className="mt-12 p-8 bg-cream rounded-2xl border border-gold/20">
                <h2
                  className="text-3xl font-bold text-navy mb-2"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Get more insights like this
                </h2>
                <p className="text-muted text-base mb-6">
                  Join 1,000+ women receiving weekly, evidence-based guidance on menopause.
                </p>
                <NewsletterForm />
              </div>
            </article>

            <aside className="hidden lg:flex flex-col gap-8 w-80 shrink-0" aria-label="Sidebar">
              <div className="bg-navy rounded-2xl overflow-hidden shadow-md">
                <div className="p-6 text-white">
                  <div className="w-16 h-16 rounded-full bg-gold/30 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-white" aria-hidden="true">
                      S
                    </span>
                  </div>
                  <h3 className="font-bold text-2xl mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                    Srividya
                  </h3>
                  <p className="text-white/75 text-base leading-relaxed font-light">
                    Clinical nutrition specialist and metabolic health coach specialising in
                    midlife hormonal transformations.
                  </p>
                </div>
              </div>

              <div>
                <h3
                  className="text-2xl font-bold text-navy mb-4"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Related Articles
                </h3>
                <div className="flex flex-col gap-4">
                  {relatedPosts.map((relatedPost) => (
                    <BlogCard key={relatedPost.slug} {...relatedPost} />
                  ))}
                </div>
              </div>

              <div className="bg-accent rounded-2xl p-6 text-white text-center shadow-md">
                <h3
                  className="font-bold text-2xl mb-2"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Ready to Transform?
                </h3>
                <p className="text-white/80 text-base mb-5">
                  Start with the assessment and find out which next step is right for you.
                </p>
                <a
                  href={ASSESSMENT_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center px-6 py-3 bg-white text-accent font-semibold rounded-full hover:scale-[1.03] hover:shadow-xl transition-all duration-200 text-center leading-snug whitespace-normal"
                >
                  Book Your Appointment Today
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to Stop Guessing and Start Thriving?"
        subtext="Start with the assessment and receive a clearer next step for your hormonal stage."
        ctaText="Book Your Appointment Today"
        ctaHref={ASSESSMENT_FORM_URL}
      />
    </>
  )
}
