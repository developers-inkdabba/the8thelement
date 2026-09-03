import { Star } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  name: string
  program: string
  rating?: 4 | 5
}

export function TestimonialCard({ quote, name, rating = 5 }: TestimonialCardProps) {
  const displayName = name === 'Client Win' ? '' : name

  return (
    <article className="bg-white rounded-3xl p-8 shadow-xs border border-cream hover:border-accent/20 hover:shadow-lg transition-all duration-300 flex flex-col gap-6 h-full justify-between relative group">

      <div className="flex flex-col gap-5 flex-1">
        {/* Quote SVG */}
        <svg width="24" height="18" viewBox="0 0 32 24" fill="none" aria-hidden="true">
          <path
            d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0L16 3.2C11.2 4.8 8.8 7.2 8.8 11.2H14.4V24H0ZM17.6 24V14.4C17.6 6.4 22.4 1.6 32 0L33.6 3.2C28.8 4.8 26.4 7.2 26.4 11.2H32V24H17.6Z"
            fill="var(--color-gold)"
          />
        </svg>
        <p className="text-dark/95 text-sm sm:text-base leading-relaxed flex-1 font-light italic">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      <div className="border-t border-cream pt-5">
        <div className="flex items-center gap-1 mb-2.5" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={12} fill="var(--color-gold)" stroke="none" aria-hidden="true" />
          ))}
        </div>
        {displayName ? (
          <p className="font-bold text-navy text-[1.2rem] font-playfair tracking-wide">{displayName}</p>
        ) : null}
      </div>
    </article>
  )
}
