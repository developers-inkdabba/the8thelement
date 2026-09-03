'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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
                className={`h-10 w-auto object-contain group-hover:scale-105 transition-all duration-300 ${
                  onDark ? 'brightness-0 invert' : ''
                }`}
              />
              <span
                className={`font-bold text-sm lg:text-base tracking-[0.2em] uppercase transition-colors duration-300 ${
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
            className="fixed inset-0 z-40 bg-white flex flex-col pt-20 px-6 pb-8 overflow-y-auto lg:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {navLinks.map((link, i) =>
                link.children ? (
                  <div key={link.label}>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="px-3 py-2 text-xs font-semibold text-muted uppercase tracking-widest mt-3"
                    >
                      Programs
                    </motion.p>
                    {link.children.map((child, j) => (
                      <motion.div
                        key={child.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (i + j + 0.5) * 0.06 }}
                      >
                        <Link
                          href={child.href}
                          className="block px-3 py-3 text-lg font-medium text-dark hover:text-navy hover:bg-cream rounded-lg transition-colors min-h-[44px]"
                        >
                          {child.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-3 py-3 text-lg font-medium rounded-lg transition-colors min-h-[44px] ${
                        isActive(link.href)
                          ? 'text-navy bg-cream'
                          : 'text-dark hover:text-navy hover:bg-cream'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
