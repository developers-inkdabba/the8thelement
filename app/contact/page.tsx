import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMeta, seoKeywords } from '@/lib/metadata'
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { ContactForm } from '@/components/forms/ContactForm'
import { NewsletterForm } from '@/components/forms/NewsletterForm'
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
      <section className="pt-36 pb-20 bg-navy text-white text-center">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <h1
            className="text-4xl sm:text-5xl font-bold mb-5"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Let&apos;s Talk
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-3xl mx-auto">
            Whether you&apos;re looking for expert guidance, have questions about our programs, or
            simply aren&apos;t sure where to begin, we&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div className="bg-cream rounded-2xl border border-gold/30 p-6 mb-10">
                <h2
                  className="text-2xl font-bold text-navy mb-3"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Looking for coaching?
                </h2>
                <p className="text-muted leading-relaxed mb-5">
                  Every woman begins with a Menopause Health Assessment.
                  <br />
                  Once I understand your symptoms, health history, lifestyle, and goals, I&apos;ll
                  recommend the most appropriate level of support to help you achieve lasting results.
                </p>
                <div className="flex flex-col items-start gap-5">
                  <a href={ASSESSMENT_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[52px] max-w-full items-center justify-center px-7 py-3 rounded-full bg-navy text-white text-center text-sm font-semibold leading-snug whitespace-normal hover:bg-accent transition-colors">
                    Book Your Appointment Today
                  </a>

                  <div>
                    <p className="text-sm font-semibold text-muted mb-3">
                      Want to learn more about our coaching programs first?
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link href="/menothrive" className="inline-flex min-w-[180px] max-w-full items-center justify-center px-5 py-3 rounded-full bg-white text-navy text-center text-sm font-semibold leading-snug whitespace-normal hover:bg-navy hover:text-white transition-colors">
                        Explore MenoThrive
                      </Link>
                      <Link href="/transform-thrive" className="inline-flex min-w-[180px] max-w-full items-center justify-center px-5 py-3 rounded-full bg-white text-navy text-center text-sm font-semibold leading-snug whitespace-normal hover:bg-navy hover:text-white transition-colors">
                        Explore Transform &amp; Thrive
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2
                  className="text-3xl font-bold text-navy mb-3"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Still Have a Question?
                </h2>
                <p className="text-muted leading-relaxed">
                  If your enquiry isn&apos;t about one of our coaching programs, we&apos;d love to
                  hear from you. Complete the form below and we&apos;ll get back to you within 1-2
                  business days.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-cream">
                <h2
                  className="text-2xl font-bold text-navy mb-8"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Send Us a Message
                </h2>
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

      <section className="py-20 bg-cream">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <p className="text-accent font-semibold uppercase tracking-[0.22em] text-sm mb-3">
            Stay Connected
          </p>
          <h2
            className="text-4xl font-bold text-navy mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Join Our Community
          </h2>
          <p className="text-[1.2rem] mb-4 leading-relaxed">
            Receive practical, science-backed insights, expert guidance, and simple strategies to help
            you navigate perimenopause and menopause with confidence.
          </p>
          <p className="text-muted mb-8">No spam. Just valuable guidance delivered straight to your inbox.</p>
          <NewsletterForm buttonText="Subscribe" />
        </div>
      </section>
    </>
  )
}
