'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  email: z.string().email('Please enter a valid email'),
})

type FormData = z.infer<typeof schema>

interface NewsletterFormProps {
  buttonText?: string
}

export function NewsletterForm({ buttonText = 'Join Now' }: NewsletterFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setSubmitError(null)

    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const result = await response.json().catch(() => null)
      setSubmitError(result?.message || 'We could not complete your signup right now.')
      return
    }

    setSubmitted(true)
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 justify-center"
        >
          <CheckCircle2 size={24} className="text-gold" />
          <p className="font-semibold text-dark">You&apos;re on the list. Thank you for joining.</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col sm:flex-row gap-3 w-full max-w-xl mx-auto"
          noValidate
        >
          <div className="flex-1">
            <input
              {...register('firstName')}
              placeholder="First name"
              className="w-full px-4 py-3 rounded-full border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none text-dark min-h-[48px]"
            />
            {errors.firstName && (
              <p className="text-accent text-xs mt-1 pl-4">{errors.firstName.message}</p>
            )}
          </div>
          <div className="flex-[2]">
            <input
              type="email"
              {...register('email')}
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-full border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none text-dark min-h-[48px]"
            />
            {errors.email && (
              <p className="text-accent text-xs mt-1 pl-4">{errors.email.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-navy text-white font-semibold rounded-full hover:scale-[1.02] hover:shadow-md transition-all duration-200 min-h-[48px] whitespace-nowrap disabled:opacity-60"
          >
            {isSubmitting ? 'Joining...' : buttonText}
          </button>
          {submitError ? (
            <p className="sm:col-span-3 text-center text-sm font-medium text-accent">
              {submitError}
            </p>
          ) : null}
        </motion.form>
      )}
    </AnimatePresence>
  )
}
