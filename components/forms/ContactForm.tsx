'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'

const enquiryOptions = [
  'General Enquiry',
  'Speaking & Workshops',
  'Corporate Wellness',
  'Existing Client Support',
  'Media Enquiry',
  'Something Else',
] as const

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  interest: z.enum(enquiryOptions, {
    error: 'Please select an option',
  }),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

const whatsappPhone = '919884835729'

function buildWhatsAppUrl(data: FormData) {
  const lines = [
    'Hi, I would like to enquire about The 8th Element.',
    '',
    `Name: ${data.firstName} ${data.lastName}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    `How can you help: ${data.interest}`,
    '',
    `Message: ${data.message}`,
  ].filter(Boolean)

  return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(lines.join('\n'))}`
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = (data: FormData) => {
    window.location.assign(buildWhatsAppUrl(data))
  }

  return (
    <motion.form
      key="form"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-dark mb-1.5">
            First Name <span className="text-accent">*</span>
          </label>
          <input
            id="firstName"
            {...register('firstName')}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all text-dark bg-white min-h-[48px]"
          />
          {errors.firstName && (
            <p className="text-accent text-xs mt-1">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-dark mb-1.5">
            Last Name <span className="text-accent">*</span>
          </label>
          <input
            id="lastName"
            {...register('lastName')}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all text-dark bg-white min-h-[48px]"
          />
          {errors.lastName && (
            <p className="text-accent text-xs mt-1">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-dark mb-1.5">
          Email Address <span className="text-accent">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all text-dark bg-white min-h-[48px]"
        />
        {errors.email && (
          <p className="text-accent text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1.5">
          Phone Number <span className="text-muted">(Optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all text-dark bg-white min-h-[48px]"
        />
      </div>

      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-dark mb-1.5">
          How can we help you? <span className="text-accent">*</span>
        </label>
        <select
          id="interest"
          {...register('interest')}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all text-dark bg-white min-h-[48px] appearance-none"
        >
          <option value="">Select an option</option>
          {enquiryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.interest && (
          <p className="text-accent text-xs mt-1">{errors.interest.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark mb-1.5">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all text-dark bg-white resize-none"
          placeholder="Tell us a little about your enquiry and how we can help."
        />
        {errors.message && (
          <p className="text-accent text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-navy text-white font-semibold rounded-full hover:scale-[1.02] hover:shadow-lg transition-all duration-200 min-h-[52px] disabled:opacity-60"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      <p className="text-center text-sm text-muted">
        We&apos;ll respond within 1-2 business days.
      </p>
    </motion.form>
  )
}
