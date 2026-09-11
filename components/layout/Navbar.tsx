'use client'

import { useState, useEffect } from 'react'
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
]

const mobileMainLinks = [
  { label: 'Home', href: '/', Icon: Home },
  { label: 'About', href: '/about', Icon: UserRound },
  { label: 'Success Stories', href: '/success-stories', Icon: Trophy },
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  const hasDarkHero = DARK_HERO_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + '/')
  )

  // Once scrolled or mobile menu open, always show light (warm-bg) bar
  const onDark = hasDarkHero && !scrolled && !mobileOpen

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || mobileOpen
            ? 'bg-warm-bg/95 backdrop-blur-md border-b border-cream/50 py-3 shadow-sm'
            : 'bg-transparent py-5'
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
                height={382}
                className={`h-9 w-auto object-contain group-hover:scale-105 transition-all duration-300 sm:h-10 ${
                  onDark ? 'brightness-0 invert' : ''
                }`}
              />
              <span
                className={`font-bold text-xs uppercase tracking-[0.14em] transition-colors duration-300 sm:text-sm sm:tracking-[0.2em] lg:text-base ${
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
            <nav className="hidden lg:flex items-center gap-2" aria-label="Main navigation">
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
                className={`lg:hidden p-2 rounded-md transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center ${
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
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-warm-bg px-4 pb-6 pt-24 lg:hidden"
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
