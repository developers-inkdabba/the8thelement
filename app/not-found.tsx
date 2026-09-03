import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-screen bg-warm-bg flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-lg">
        <p
          className="text-8xl font-bold text-gold mb-4"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          404
        </p>
        <h1
          className="text-3xl font-bold text-navy mb-4"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Page Not Found
        </h1>
        <p className="text-muted mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 bg-navy text-white font-semibold rounded-full hover:scale-[1.03] hover:shadow-xl transition-all duration-200 min-h-[52px]"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}
