'use client'

import { useEffect, useState } from 'react'
import { CalendarCheck } from 'lucide-react'
import { ASSESSMENT_FORM_URL } from '@/lib/links'

const BUBBLE_VISIBLE_MS = 2000
const BUBBLE_REPEAT_MS = 10000
const FIRST_BUBBLE_DELAY_MS = 1800

export function AppointmentNudge() {
  const [bubbleVisible, setBubbleVisible] = useState(false)

  useEffect(() => {
    let hideTimer: number | undefined

    const showBubble = () => {
      window.clearTimeout(hideTimer)
      setBubbleVisible(true)
      hideTimer = window.setTimeout(() => setBubbleVisible(false), BUBBLE_VISIBLE_MS)
    }

    const firstTimer = window.setTimeout(showBubble, FIRST_BUBBLE_DELAY_MS)
    const repeatTimer = window.setInterval(showBubble, BUBBLE_REPEAT_MS)

    return () => {
      window.clearTimeout(firstTimer)
      window.clearTimeout(hideTimer)
      window.clearInterval(repeatTimer)
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-[4.75rem] z-50 flex flex-col items-end gap-2 max-[380px]:bottom-3 max-[380px]:right-[4.25rem] sm:bottom-24 sm:right-6 sm:flex-row sm:gap-3" aria-label="Book an appointment">
      <div
        className={`hidden max-w-[12.75rem] rounded-lg border border-gold/30 bg-white px-4 py-3 text-sm leading-relaxed text-navy shadow-xl shadow-navy/15 transition-all duration-300 sm:block sm:max-w-[15rem] sm:px-5 sm:py-4 sm:text-[0.95rem] ${
          bubbleVisible
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2 opacity-0'
        }`}
        role="status"
        aria-live="polite"
      >
        <p className="font-semibold">Need personal guidance?</p>
        <p className="mt-0.5 text-muted">Book your appointment today.</p>
      </div>

      <a
        href={ASSESSMENT_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setBubbleVisible(true)}
        onMouseLeave={() => setBubbleVisible(false)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-navy/15 transition-all duration-200 hover:scale-110 hover:bg-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 sm:h-16 sm:w-16"
        aria-label="Book your appointment today"
      >
        <CalendarCheck className="h-5 w-5 sm:h-7 sm:w-7" aria-hidden="true" />
      </a>
    </div>
  )
}
