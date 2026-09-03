import Image from 'next/image'
import Link from 'next/link'
import { Clock } from 'lucide-react'

interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  dateTime?: string
  readTime: string
  eager?: boolean
}

export function BlogCard({ slug, title, excerpt, category, date, dateTime, readTime, eager = false }: BlogCardProps) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full group">
      <div
        className="relative h-48 overflow-hidden bg-cream"
        aria-label={`Featured image for ${title}`}
      >
        <Image
          src={`/blog/${slug}.png`}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          loading={eager ? 'eager' : 'lazy'}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-navy/5 group-hover:bg-navy/10 transition-colors" />
      </div>

      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3 className="font-bold text-dark text-2xl leading-snug group-hover:text-navy transition-colors" style={{ fontFamily: 'var(--font-playfair)' }}>
          {title}
        </h3>
        <p className="text-muted text-[1.05rem] leading-relaxed line-clamp-2 flex-1">{excerpt}</p>
        <div className="flex items-center justify-between text-[0.9rem] text-muted pt-2 border-t border-gray-100">
          <span>{category}</span>
          <time dateTime={dateTime ?? date}>{date}</time>
        </div>
        <div className="flex items-center justify-between text-[0.9rem] text-muted">
          <span>Article</span>
          <span className="flex items-center gap-1">
            <Clock size={16} aria-hidden="true" />
            {readTime}
          </span>
        </div>
        <Link
          href={`/blog/${slug}`}
          className="text-navy font-semibold text-sm hover:text-accent transition-colors flex items-center gap-1 group/link"
        >
          Read More
          <span aria-hidden="true" className="group-hover/link:translate-x-1 transition-transform">-&gt;</span>
        </Link>
      </div>
    </article>
  )
}
