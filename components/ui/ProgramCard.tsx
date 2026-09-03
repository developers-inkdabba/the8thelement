import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

interface ProgramCardProps {
  eyebrow: string
  title: string
  subtitle: string
  benefits: string[]
  ctaText: string
  ctaHref: string
  featured?: boolean
}

export function ProgramCard({
  eyebrow,
  title,
  subtitle,
  benefits,
  ctaText,
  ctaHref,
  featured = false,
}: ProgramCardProps) {
  const isExternalCta = /^https?:\/\//.test(ctaHref)
  const ctaClassName = `group inline-flex items-center justify-center gap-2 w-full px-5 py-4 rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-300 min-h-[50px] text-center leading-snug whitespace-normal ${
    featured
      ? 'bg-navy text-white hover:bg-accent'
      : 'bg-white text-navy hover:bg-gold hover:text-navy'
  }`

  return (
    <article 
      className={`relative rounded-3xl overflow-hidden shadow-xl flex flex-col h-full transition-all duration-500 hover:-translate-y-1.5 border ${
        featured
          ? 'bg-cream text-navy border-gold shadow-gold/5'
          : 'bg-white/5 backdrop-blur-md text-white border-white/10 shadow-black/10'
      }`}
    >
      <div className="px-8 pt-8 pb-8 flex flex-col gap-6 flex-1 justify-between">
        <div>
          <p
            className={`text-xs font-semibold uppercase tracking-[0.22em] mb-3 ${
              featured ? 'text-accent' : 'text-gold'
            }`}
          >
            {eyebrow}
          </p>
          <h3
            className="text-4xl font-bold font-playfair tracking-tight mb-2"
          >
            {title}
          </h3>
          <p className={` leading-relaxed font-light ${featured ? 'text-navy/80' : 'text-white/70'}`}>
            {subtitle}
          </p>
        </div>

        {/* Thin divider line */}
        <div className={`w-full h-px ${featured ? 'bg-navy/10' : 'bg-white/10'}`} aria-hidden="true" />

        <ul className="flex flex-col gap-3.5 flex-1" role="list">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3.5 text-sm font-light leading-relaxed">
              <span
                className={`p-1 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                  featured ? 'bg-navy/10 text-navy' : 'bg-white/10 text-gold'
                }`}
                aria-hidden="true"
              >
                <Check size={12} strokeWidth={3} />
              </span>
              <span className='text-[1.1rem]'>{benefit}</span>
            </li>
          ))}
        </ul>

        {isExternalCta ? (
          <a href={ctaHref} target="_blank" rel="noopener noreferrer" className={ctaClassName}>
            {ctaText}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        ) : (
          <Link href={ctaHref} className={ctaClassName}>
            {ctaText}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </article>
  )
}
