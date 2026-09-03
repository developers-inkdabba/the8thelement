import type { Metadata } from 'next'
import { buildMeta } from '@/lib/metadata'

export const metadata: Metadata = buildMeta({
  title: 'Refunds and Cancellation Policy',
  description:
    'Read The 8th Element refunds and cancellation policy for clarity sessions, coaching programs, rescheduling and exceptional circumstances.',
  alternates: { canonical: 'https://www.the8thelement.in/refunds-cancellation' },
})

const policySections = [
  {
    title: 'Clarity Sessions',
    body: [
      'Clarity Sessions may be rescheduled with at least 24 hours\' notice.',
      'Requests received less than 24 hours before the scheduled session may not be eligible for rescheduling.',
      'Fees paid for completed Clarity Sessions are non-refundable.',
    ],
  },
  {
    title: 'Coaching Programs',
    body: [
      'Due to the personalised nature of our coaching services, all program fees are non-refundable once enrolment has been confirmed.',
      'Participants may choose to discontinue participation at any time; however, no refunds will be provided for unused portions of the program.',
    ],
  },
  {
    title: 'Rescheduling',
    body: [
      'If you are unable to attend a scheduled session, please contact us as soon as possible. We will make reasonable efforts to accommodate rescheduling requests, subject to availability.',
    ],
  },
  {
    title: 'Exceptional Circumstances',
    body: [
      'Any requests related to exceptional circumstances will be reviewed on a case-by-case basis at our discretion.',
    ],
  },
  {
    title: 'Contact',
    body: [
      'If you have any questions about this policy, please contact us at admin@the8thelement.in.',
    ],
  },
]

export default function RefundsCancellationPage() {
  return (
    <>
      <section className="bg-navy pt-36 pb-20 text-center text-white">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <h1
            className="mb-4 text-4xl font-bold sm:text-5xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Refunds &amp; Cancellation Policy
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/75">
            Please review this policy carefully before making a purchase.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-4xl px-8 sm:px-12">
          <div className="mb-12 rounded-lg bg-cream p-6 text-[1.05rem] leading-relaxed text-dark">
            We are committed to providing high-quality coaching and support to our clients.
          </div>

          <div className="space-y-12">
            {policySections.map((section, index) => (
              <section key={section.title} aria-labelledby={`refunds-section-${index + 1}`}>
                <h2
                  id={`refunds-section-${index + 1}`}
                  className="mb-4 text-2xl font-bold text-navy"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {index + 1}. {section.title}
                </h2>
                <div className="space-y-4 text-[1.05rem] leading-relaxed text-muted">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
