import type { Metadata } from 'next'
import Image from 'next/image'
import { buildMeta, seoKeywords } from '@/lib/metadata'
import { ArrowRight, CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { ContactForm } from '@/components/forms/ContactForm'
import { ASSESSMENT_FORM_URL } from '@/lib/links'

function IgIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
}

function FbIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
}

function YtIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
}

export const metadata: Metadata = buildMeta({
  title: "Contact Us - Let's Talk",
  description:
    "Contact The 8th Element for program questions, coaching enquiries, corporate wellness, speaking, media, or general support.",
  keywords: [
    'menopause consultation',
    'menopause coach Chennai',
    'online menopause coach',
    'menopause nutrition coach',
    'perimenopause support',
    'corporate wellness women',
    ...seoKeywords.core,
  ],
  alternates: { canonical: 'https://www.the8thelement.in/contact' },
})

const contactItems = [
  {
    icon: <Phone size={18} aria-hidden="true" />,
    label: 'Phone',
    value: '+91 98848 35729',
    href: 'tel:+919884835729',
  },
  {
    icon: <Mail size={18} aria-hidden="true" />,
    label: 'Email',
    value: 'admin@the8thelement.in',
    href: 'mailto:admin@the8thelement.in',
  },
  {
    icon: <MessageCircle size={18} aria-hidden="true" />,
    label: 'WhatsApp',
    value: 'Chat with us on WhatsApp',
    href: 'https://wa.me/919884835729',
  },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/the_8thelement', icon: <IgIcon /> },
  { label: 'Facebook', href: 'https://www.facebook.com', icon: <FbIcon /> },
  { label: 'YouTube', href: 'https://www.youtube.com/@the8thelement', icon: <YtIcon /> },
]

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-warm-bg">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 text-center lg:text-left">
              <p className="text-accent font-semibold uppercase tracking-[0.2em] text-sm mb-4">
                Start The Conversation
              </p>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy mb-5 leading-tight"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Let&apos;s Find Your Right Next Step.
              </h1>
              <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Not sure whether MenoThrive, Transform &amp; Thrive, or the quiz is the best place
                to begin? Send a note or start with the assessment. We&apos;ll keep it simple.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <a
                  href={ASSESSMENT_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[54px] max-w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-center text-base font-bold leading-snug text-white transition-all duration-200 hover:bg-navy hover:shadow-xl"
                >
                  Book Your Appointment Today
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a
                  href="https://wa.me/919884835729"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[54px] max-w-full items-center justify-center gap-2 rounded-full border border-navy/15 bg-white px-7 py-3 text-center text-base font-bold leading-snug text-navy transition-all duration-200 hover:border-navy hover:bg-navy hover:text-white"
                >
                  WhatsApp Srividya
                </a>
              </div>
              <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
                {['Personally reviewed', 'Warm guidance', 'Clear next step'].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-navy shadow-sm">
                    <CheckCircle2 size={17} className="shrink-0 text-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px]">
                <div
                  className="absolute inset-0 -translate-x-3 translate-y-3 rounded-[2rem] border border-gold/50 sm:-translate-x-4 sm:translate-y-4"
                  aria-hidden="true"
                />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-cream shadow-2xl shadow-navy/15">
                  <Image
                    src="/contact/lets-talk.jpg"
                    alt="Srividya, ready to talk with you"
                    fill
                    sizes="(min-width: 1024px) 440px, (min-width: 640px) 380px, 320px"
                    className="object-cover object-[52%_32%]"
                    priority
                  />
                  <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/90 p-4 text-left shadow-lg backdrop-blur">
                    <p className="text-sm font-bold text-navy">Need personal guidance?</p>
                    <p className="text-sm leading-relaxed text-muted">Start with a short assessment or message us directly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-surface">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7">
              <div className="mb-8">
                <h2
                  className="text-3xl font-bold text-navy mb-3"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Send a Message
                </h2>
                <p className="text-muted leading-relaxed">
                  For media, speaking, corporate wellness, collaborations, or general questions,
                  use the form below.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-cream">
                <ContactForm />
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="sticky top-28 space-y-10">
                <div>
                  <h2
                    className="text-2xl font-bold text-navy mb-6"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    Get in Touch
                  </h2>
                  <ul className="space-y-5">
                    {contactItems.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          target={item.href.startsWith('https') ? '_blank' : undefined}
                          rel={item.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                          className="flex items-start gap-4 group"
                        >
                          <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                            {item.icon}
                          </span>
                          <span>
                            <span className="block text-xs font-semibold uppercase tracking-wide text-muted mb-0.5">
                              {item.label}
                            </span>
                            <span className="text-dark font-medium group-hover:text-navy transition-colors">
                              {item.value}
                            </span>
                          </span>
                        </a>
                      </li>
                    ))}
                    <li className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy">
                        <MapPin size={18} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wide text-muted mb-0.5">
                          Location
                        </span>
                        <span className="text-dark font-medium">Chennai, India</span>
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3
                    className="text-2xl font-bold text-navy mb-4"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    Coaching Hours
                  </h3>
                  <div className="space-y-4 text-[1.05rem]">
                    <div className="flex items-start gap-4">
                      <Clock size={18} className="mt-1 text-gold shrink-0" aria-hidden="true" />
                      <div className="flex-1">
                        <div className="flex justify-between gap-4 border-b border-gray-100 pb-3">
                          <span className="font-medium text-dark">Monday - Friday</span>
                          <span className="text-muted text-right">10:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between gap-4 pt-3">
                          <span className="font-medium text-dark">Saturday &amp; Sunday</span>
                          <span className="text-muted text-right">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3
                    className="text-2xl font-bold text-navy mb-3"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    Follow Along
                  </h3>
                  <p className="text-muted leading-relaxed mb-4">
                    Follow us for practical, science-backed guidance on navigating perimenopause and
                    menopause.
                  </p>
                  <div className="flex items-center gap-3">
                    {socialLinks.map(({ label, href, icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/10 text-navy hover:bg-navy hover:text-white transition-colors"
                      >
                        {icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

    </>
  )
}
