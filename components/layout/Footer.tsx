import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import type { ReactNode } from 'react'

function IgIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function FbIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function YtIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-white" aria-label="Site footer">
      <div className="w-full px-8 sm:px-12 lg:px-20 pt-12 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group" aria-label="The 8th Element">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                <Image
                  src="/logo.svg"
                  alt="The 8th Element"
                  width={477}
                  height={312}
                  className="h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </span>
              <span className="font-bold text-base tracking-[0.2em] uppercase group-hover:text-gold transition-colors duration-300" style={{ fontFamily: 'var(--font-playfair)' }}>
                The 8th Element
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Helping women navigate perimenopause and menopause through science-backed nutrition, personalised coaching, and sustainable lifestyle transformation.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <SocialLink href="https://www.facebook.com" label="Facebook">
                <FbIcon />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/the_8thelement" label="Instagram (@the_8thelement)">
                <IgIcon />
              </SocialLink>
              <SocialLink href="https://www.youtube.com/@the8thelement" label="YouTube (@the8thelement)">
                <YtIcon />
              </SocialLink>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gold uppercase tracking-wider text-xs mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Programs', href: '/menothrive' },
                { label: 'Success Stories', href: '/success-stories' },
                { label: 'Start Here', href: '/resources' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gold uppercase tracking-wider text-xs mb-5">Programs</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'MenoThrive', href: '/menothrive' },
                { label: 'Transform & Thrive', href: '/transform-thrive' },
                { label: 'Perimenopause Quiz', href: '/quiz' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gold uppercase tracking-wider text-xs mb-5">Contact</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a
                  href="tel:+919884835729"
                  className="flex items-start gap-2 hover:text-white transition-colors"
                  aria-label="Call us: +91 98848 35729"
                >
                  <Phone size={15} className="mt-0.5 shrink-0 text-gold" />
                  +91 98848 35729
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@the8thelement.in"
                  className="flex items-start gap-2 hover:text-white transition-colors"
                  aria-label="Email us"
                >
                  <Mail size={15} className="mt-0.5 shrink-0 text-gold" />
                  admin@the8thelement.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0 text-gold" />
                Chennai, India
              </li>
              <li className="flex items-start gap-2">
                <Clock size={15} className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <div>Monday - Friday: 10:00 AM - 6:00 PM</div>
                  <div>Saturday &amp; Sunday: Closed</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} The 8th Element. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end sm:gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/refunds-cancellation" className="hover:text-white transition-colors">Refunds & Cancellation</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-navy flex items-center justify-center text-white transition-all duration-200"
    >
      {children}
    </a>
  )
}
