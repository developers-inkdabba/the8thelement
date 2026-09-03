'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface StatItem {
  value: string
  label: string
  numericValue: number
  suffix?: string
}

interface StatsCounterProps {
  stats: StatItem[]
  light?: boolean
}

function CountUp({
  to,
  suffix = '',
  started,
}: {
  to: number
  suffix?: string
  started: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    const duration = 1800
    const steps = 60
    const increment = to / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= to) {
        setCount(to)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [started, to])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function StatsCounter({ stats, light = false }: StatsCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const textClass = light ? 'text-white' : 'text-navy'
  const mutedClass = light ? 'text-white/60' : 'text-muted'

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className={`text-4xl lg:text-5xl font-bold mb-2 ${textClass}`} style={{ fontFamily: 'var(--font-playfair)' }}>
            <CountUp to={stat.numericValue} suffix={stat.suffix ?? ''} started={isInView} />
          </p>
          <p className={`text-sm font-medium ${mutedClass}`}>{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
