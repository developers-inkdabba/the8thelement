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
    <div className="fixed bottom-24 right-6 z-50 flex items-end gap-3" aria-label="Book an appointment">
      <div
        className={`max-w-[15rem] rounded-lg border border-gold/30 bg-white px-5 py-4 text-[0.95rem] leading-relaxed text-navy shadow-xl shadow-navy/15 transition-all duration-300 ${
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
        className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-navy/15 transition-all duration-200 hover:scale-110 hover:bg-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        aria-label="Book your appointment today"
      >
        <CalendarCheck size={28} aria-hidden="true" />
      </a>
    </div>
  )
}
