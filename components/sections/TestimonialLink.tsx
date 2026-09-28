'use client'

export function TestimonialLink({ testimonialKey }: { testimonialKey: string }) {
  const open = () => {
    window.history.replaceState(null, '', `#testimonial-${testimonialKey}`)
    window.dispatchEvent(new CustomEvent('show-testimonial', { detail: testimonialKey }))
    document.getElementById('testimonial-marquee')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <button
      type="button"
      onClick={open}
      className="inline-flex items-center justify-center rounded-full border border-navy px-5 py-2.5 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-navy hover:text-white"
    >
      View Testimonial
    </button>
  )
}
