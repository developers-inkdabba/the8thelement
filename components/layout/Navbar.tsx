'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  ArrowRight,
  BookOpen,
  CalendarCheck,
  ChevronDown,
  Dumbbell,
  Home,
  Menu,
  Newspaper,
  Phone,
  Sparkles,
  Trophy,
  UserRound,
  X,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ASSESSMENT_FORM_URL } from '@/lib/links'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Programs',
    href: '#',
    children: [
      { label: 'MenoThrive', href: '/menothrive' },
      { label: 'Transform & Thrive', href: '/transform-thrive' },
    ],
  },
  { label: 'Success Stories', href: '/success-stories' },
  { label: 'Media', href: '/media' },
  { label: 'Start Here', href: '/resources' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

// Pages whose hero sections have a dark background
const DARK_HERO_PATHS = [
  '/about',
  '/menothrive',
  '/transform-thrive',
  '/contact',
  '/media',
  '/privacy',
  '/refunds-cancellation',
  '/terms',
]

const mobileMainLinks = [
  { label: 'Home', href: '/', Icon: Home },
  { label: 'About', href: '/about', Icon: UserRound },
  { label: 'Success Stories', href: '/success-stories', Icon: Trophy },
  { label: 'Media', href: '/media', Icon: Newspaper },
  { label: 'Start Here', href: '/resources', Icon: Sparkles },
  { label: 'Blog', href: '/blog', Icon: BookOpen },
  { label: 'Contact', href: '/contact', Icon: Phone },
]

const mobileProgramLinks = [
  { label: 'MenoThrive', href: '/menothrive', eyebrow: '1:1 Coaching' },
  { label: 'Transform & Thrive', href: '/transform-thrive', eyebrow: 'Small Group' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)

  const hasDarkHero = DARK_HERO_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + '/')
  )

  // Seeded from the route for a flash-free first paint; refined below by
  // actually sampling what's behind the bar as the page scrolls.
  const [onDarkBg, setOnDarkBg] = useState(hasDarkHero)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Detect whether the section currently sitting behind the fixed bar is
  // dark or light, so the bar can switch back to the transparent/white-text
  // hero treatment any time it passes over another dark section further
  // down the page (e.g. the closing CTA), not just at the very top.
  useEffect(() => {
    let frame = 0

    const sampleBackground = () => {
      const header = headerRef.current
      if (!header) return

      const rect = header.getBoundingClientRect()
      const x = window.innerWidth / 2
      const y = rect.bottom + 6

      const prevPointerEvents = header.style.pointerEvents
      header.style.pointerEvents = 'none'
      const target = document.elementFromPoint(x, y)
      header.style.pointerEvents = prevPointerEvents

      // Read the background off the nearest section/header/footer landmark,
      // not just whatever element happens to be at that point — otherwise an
      // incidental dark element inside a light section (a video player, a
      // photo, a button) gets mistaken for the section's own theme.
      const landmark = target?.closest('section, footer, header') ?? null
      let node: Element | null = landmark
      while (node) {
        const bg = window.getComputedStyle(node).backgroundColor
        const match = bg.match(/rgba?\(([^)]+)\)/)
        if (match) {
          const [r, g, b, a = 1] = match[1].split(',').map((v) => parseFloat(v.trim()))
          if (a > 0.5 && !Number.isNaN(r)) {
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
            setOnDarkBg(luminance < 0.5)
            return
          }
        }
        node = node.parentElement
      }
    }

    const onScrollOrResize = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        sampleBackground()
        frame = 0
      })
    }

    // The very first sample can race the page's own layout/hydration (a
    // section can still be at its pre-paint size, or elementFromPoint can
    // momentarily miss), and with nothing else to trigger a re-sample on a
    // static page, a bad first read would stick forever. A couple of
    // follow-up samples shortly after mount catch and correct that.
    sampleBackground()
    const raf1 = window.requestAnimationFrame(() => {
      sampleBackground()
    })
    const retryTimers = [100, 400, 1000].map((delay) => window.setTimeout(sampleBackground, delay))

    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)
    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
      if (frame) window.cancelAnimationFrame(frame)
      window.cancelAnimationFrame(raf1)
      retryTimers.forEach((id) => window.clearTimeout(id))
    }
  }, [pathname])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setMobileOpen(false)
      setDropdownOpen(false)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  // The bar is transparent ONLY at the very top of a page, so the hero can
  // run full-bleed underneath it. As soon as scrolling begins the bar takes
  // a background and keeps it - including over dark sections further down
  // (a dark CTA, the footer), which previously kept it transparent all the
  // way and left the links floating over moving content.
  //
  // The background comes in two tones because onDark also drives the logo
  // and link colours: over a dark section the text is white, so a light bar
  // there would be white-on-cream and unreadable. Dark section gets a dark
  // bar, light section gets the warm one. Mobile menu always shows the
  // solid light bar for legibility.
  const onDark = !mobileOpen && onDarkBg
  const barIsTransparent = !mobileOpen && !scrolled

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          scrolled || mobileOpen ? 'py-3' : 'py-5'
        } ${
          barIsTransparent
            ? 'bg-transparent'
            : onDark
              ? 'bg-navy/95 backdrop-blur-md border-b border-white/10 shadow-sm'
              : 'bg-warm-bg/95 backdrop-blur-md border-b border-cream/50 shadow-sm'
        }`}
      >
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group" aria-label="The 8th Element - Home">
              <Image
                src="/logo.svg"
                alt="The 8th Element"
                width={477}
                height={312}
                className={`h-10 w-auto object-contain group-hover:scale-105 transition-all duration-300 sm:h-14 lg:h-16 ${
                  onDark ? 'brightness-0 invert' : ''
                }`}
              />
              <span
                className={`font-bold text-sm uppercase tracking-[0.1em] transition-colors duration-300 sm:text-lg sm:tracking-[0.2em] lg:text-xl ${
                  onDark
                    ? 'text-white group-hover:text-white/70'
                    : 'text-navy group-hover:text-accent'
                }`}
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                The 8th Element
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-2" aria-label="Main navigation">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative">
                    <button
                      onClick={() => setDropdownOpen((v) => !v)}
                      onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
                      className={`flex items-center gap-1 px-4 py-2 text-base font-medium rounded-full transition-colors min-h-[40px] ${
                        onDark
                          ? 'text-white/80 hover:text-white hover:bg-white/10'
                          : 'text-dark hover:text-navy hover:bg-cream/40'
                      }`}
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-cream overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-3 text-sm text-dark hover:bg-cream hover:text-navy transition-colors font-medium"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors min-h-[40px] flex items-center ${
                      onDark
                        ? isActive(link.href)
                          ? 'text-white font-semibold bg-white/15'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                        : isActive(link.href)
                          ? 'text-navy font-semibold bg-cream/60'
                          : 'text-dark hover:text-navy hover:bg-cream/40'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Hamburger */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className={`xl:hidden p-2 rounded-md transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center ${
                  onDark
                    ? 'text-white hover:bg-white/10'
                    : 'text-dark hover:bg-cream'
                }`}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[55] flex flex-col overflow-y-auto bg-warm-bg px-4 pb-6 pt-24 xl:hidden"
          >
            <div className="mx-auto flex w-full max-w-md flex-1 flex-col gap-5">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-gold/25 bg-white p-4 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Start with clarity
                </p>
                <a
                  href={ASSESSMENT_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accent"
                >
                  <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                  Book Your Appointment Today
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </motion.div>

              <nav aria-label="Mobile navigation" className="space-y-5">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.04 }}
                >
                  <p className="mb-3 px-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    Explore Programs
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {mobileProgramLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`group flex items-center gap-3 rounded-2xl border p-4 transition-all ${
                          isActive(link.href)
                            ? 'border-navy bg-navy text-white shadow-lg shadow-navy/10'
                            : 'border-cream bg-white text-navy hover:border-gold hover:bg-cream/50'
                        }`}
                      >
                        <span
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                            isActive(link.href)
                              ? 'bg-white/15 text-white'
                              : 'bg-cream text-accent'
                          }`}
                          aria-hidden="true"
                        >
                          <Dumbbell className="h-5 w-5" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.16em] opacity-70">
                            {link.eyebrow}
                          </span>
                          <span className="block text-base font-semibold leading-snug">
                            {link.label}
                          </span>
                        </span>
                        <ArrowRight
                          className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.08 }}
                >
                  <p className="mb-3 px-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    Navigate
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {mobileMainLinks.map(({ label, href, Icon }) => (
                      <Link
                        key={href}
                        href={href}
                        className={`flex min-h-[5.25rem] flex-col justify-between rounded-2xl border p-3 transition-all ${
                          isActive(href)
                            ? 'border-navy bg-navy text-white shadow-lg shadow-navy/10'
                            : 'border-cream bg-white text-dark hover:border-gold hover:bg-cream/50'
                        }`}
                      >
                        <Icon
                          className={`h-5 w-5 ${
                            isActive(href) ? 'text-gold' : 'text-accent'
                          }`}
                          aria-hidden="true"
                        />
                        <span className="text-sm font-semibold leading-snug">{label}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
