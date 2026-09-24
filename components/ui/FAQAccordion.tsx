'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="divide-y divide-gray-200" role="list">
      {items.map((item, i) => (
        <div key={i} role="listitem">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left gap-4 min-h-[52px] focus-visible:outline-2 focus-visible:outline-navy"
            aria-expanded={openIndex === i}
          >
            <span className="font-semibold text-xl text-dark pr-4">{item.question}</span>
            <ChevronDown
              size={18}
              className={`shrink-0 text-navy transition-transform duration-300 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            />
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className="pb-5 text-muted leading-relaxed">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
