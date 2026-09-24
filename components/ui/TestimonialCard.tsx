import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  name: string
  program: string
  rating?: 4 | 5
  imageSrc?: string
  imageAlt?: string
  result?: string
  storyHref?: string
}

export function TestimonialCard({
  quote,
  name,
  imageSrc,
  imageAlt,
  result,
  storyHref = '/success-stories',
}: TestimonialCardProps) {
  const displayName = name === 'Client Win' ? '' : name

  const headline = result ?? quote

  return (
    <article className="bg-white rounded-3xl p-5 sm:p-6 shadow-xs border border-cream hover:border-accent/20 hover:shadow-lg transition-all duration-300 flex h-full flex-col items-center justify-between gap-3 text-center relative group">
      <div className="flex flex-col items-center gap-3">
        {imageSrc ? (
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-gold/30 bg-cream sm:h-28 sm:w-28">
            <Image
              src={imageSrc}
              alt={imageAlt ?? `${name} success story`}
              fill
              sizes="112px"
              className="object-cover object-top"
            />
          </div>
        ) : null}

        {displayName ? (
          <p className="font-bold text-navy text-[1.05rem] font-playfair tracking-wide leading-tight">
            {displayName}
          </p>
        ) : null}
      </div>

      <p className="text-[0.9rem] sm:text-[0.95rem] font-bold leading-snug text-navy">
        &ldquo;{headline}&rdquo;
      </p>

      <Link
        href={storyHref}
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-navy transition-colors hover:text-accent"
      >
        See her story
        <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  )
}
