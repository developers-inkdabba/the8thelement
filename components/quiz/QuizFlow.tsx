'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'

interface Question {
  id: number
  question: string
  type: 'single' | 'multi'
  options: string[]
}

const questions: Question[] = [
  {
    id: 1,
    question: "What's your age range?",
    type: 'single',
    options: ['35-40', '41-45', '46-50', '51-55', '55+'],
  },
  {
    id: 2,
    question: 'Which symptoms are you experiencing?',
    type: 'multi',
    options: [
      'Weight gain',
      'Sleep issues',
      'Hot flashes',
      'Fatigue',
      'Mood swings',
      'Brain fog',
      'Low libido',
      'Joint pain',
    ],
  },
  {
    id: 3,
    question: 'How long have you been experiencing these symptoms?',
    type: 'single',
    options: ['Less than 6 months', '6-12 months', '1-3 years', '3+ years'],
  },
  {
    id: 4,
    question: 'What have you already tried?',
    type: 'multi',
    options: [
      'Various diets',
      'Exercise programs',
      'Hormone therapy',
      'Nothing yet / Not sure',
    ],
  },
  {
    id: 5,
    question: "What's your biggest goal right now?",
    type: 'single',
    options: [
      'Lose weight',
      'Regain energy',
      'Improve sleep',
      'Reduce symptoms',
      'All of the above',
    ],
  },
]

type Answers = Record<number, string | string[]>

interface ContactDetails {
  name: string
  email: string
}

const resultInsights = [
  {
    title: 'Your body is asking for a different approach.',
    text: "The strategies that may have worked in your 20s or 30s often become less effective during perimenopause. This does not mean you are doing something wrong - it means your body is changing, and your approach needs to change with it.",
  },
  {
    title: 'Your symptoms are connected - not isolated.',
    text: 'Weight gain, fatigue, poor sleep, mood swings, cravings, brain fog, and low energy rarely happen in isolation. They are often interconnected, which is why addressing just one symptom rarely creates lasting results.',
  },
  {
    title: 'Lasting change starts with understanding the root cause.',
    text: "Before making changes to your nutrition or fitness routine, it is important to understand what is driving your symptoms. Once you know what your body needs, you can stop guessing and start making progress with confidence.",
  },
]

function getResult(answers: Answers) {
  const ageMap: Record<string, string> = {
    '35-40': 'Early Perimenopause',
    '41-45': 'Active Perimenopause Transition',
    '46-50': 'Late Perimenopause',
    '51-55': 'Menopause',
    '55+': 'Post-Menopause',
  }
  const age = answers[1] as string
  const stage = ageMap[age] || 'Perimenopause Transition'
  return { stage }
}

async function readApiMessage(response: Response, fallback: string) {
  try {
    const data = (await response.json()) as { message?: string }
    return data.message || fallback
  } catch {
    return fallback
  }
}

export function QuizFlow() {
  const [step, setStep] = useState(0)
  const [contact, setContact] = useState<ContactDetails>({ name: '', email: '' })
  const [answers, setAnswers] = useState<Answers>({})
  const [direction, setDirection] = useState(1)
  const [isEmailingReport, setIsEmailingReport] = useState(false)
  const [emailStatus, setEmailStatus] = useState<string | null>(null)

  const currentQ = questions[step - 1]
  const progress = step === 0 ? 0 : (step / questions.length) * 100
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email.trim())
  const canStart = contact.name.trim().length >= 2 && isValidEmail

  function selectOption(option: string) {
    if (!currentQ) return
    if (currentQ.type === 'single') {
      setAnswers((prev) => ({ ...prev, [currentQ.id]: option }))
    } else {
      const current = (answers[currentQ.id] as string[]) || []
      const updated = current.includes(option)
        ? current.filter((o) => o !== option)
        : [...current, option]
      setAnswers((prev) => ({ ...prev, [currentQ.id]: updated }))
    }
  }

  function isSelected(option: string) {
    if (!currentQ) return false
    const ans = answers[currentQ.id]
    if (currentQ.type === 'single') return ans === option
    return Array.isArray(ans) && ans.includes(option)
  }

  function canAdvance() {
    if (!currentQ) return false
    const ans = answers[currentQ.id]
    if (currentQ.type === 'multi') return Array.isArray(ans) && ans.length > 0
    return !!ans
  }

  function next() {
    setDirection(1)
    setStep((s) => s + 1)
  }

  function prev() {
    setDirection(-1)
    setStep((s) => s - 1)
  }

  const result = step === 6 ? getResult(answers) : null

  function getReportPayload() {
    if (!result) return null

    return {
      name: contact.name.trim(),
      email: contact.email.trim(),
      stage: result.stage,
      answers,
    }
  }

  async function emailReport() {
    if (!result || !canStart) return
    const reportPayload = getReportPayload()
    if (!reportPayload) return

    setIsEmailingReport(true)
    setEmailStatus(null)

    try {
      const response = await fetch('/api/quiz-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reportPayload),
      })

      if (!response.ok) {
        throw new Error(await readApiMessage(response, 'We could not email your report right now.'))
      }

      setEmailStatus(`Your personalised report has been sent to ${contact.email.trim()}.`)
    } catch (error) {
      setEmailStatus(
        error instanceof Error
          ? error.message
          : 'We could not email your report right now. Please try again.',
      )
    } finally {
      setIsEmailingReport(false)
    }
  }

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  }

  return (
    <div className="max-w-3xl mx-auto">
      {step > 0 && step < 6 && (
        <div className="mb-8">
          <div className="flex justify-between text-xs text-muted mb-2">
            <span>Question {step} of {questions.length}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div
            className="h-2 bg-gray-200 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <motion.div
              className="h-full bg-navy rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait" custom={direction}>
        {step === 0 && (
          <motion.div
            key="intro"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="text-center py-8"
          >
            <div className="w-20 h-20 rounded-full bg-cream flex items-center justify-center mx-auto mb-6">
              <svg width="36" height="36" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="15" fill="#1B3A6B" />
                <text
                  x="16"
                  y="21"
                  textAnchor="middle"
                  fill="#D4A843"
                  fontSize="14"
                  fontWeight="bold"
                  fontFamily="Georgia"
                >
                  8
                </text>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-navy mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Get Your Personalised Report
            </h2>
            <p className="text-xl mb-8 max-w-md mx-auto">
              Enter your details first, then answer 5 quick questions to receive your report.
            </p>
            <div className="mx-auto mb-6 flex max-w-md flex-col gap-3 text-left">
              <div>
                <label htmlFor="quiz-name" className="mb-1.5 block text-sm font-semibold text-navy">
                  Name
                </label>
                <input
                  id="quiz-name"
                  type="text"
                  value={contact.name}
                  onChange={(event) =>
                    setContact((current) => ({ ...current, name: event.target.value }))
                  }
                  className="min-h-[48px] w-full rounded-full border border-gray-200 bg-white px-4 py-3 text-dark outline-none transition-all focus:border-navy focus:ring-2 focus:ring-navy/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="quiz-email" className="mb-1.5 block text-sm font-semibold text-navy">
                  Email
                </label>
                <input
                  id="quiz-email"
                  type="email"
                  value={contact.email}
                  onChange={(event) =>
                    setContact((current) => ({ ...current, email: event.target.value }))
                  }
                  className="min-h-[48px] w-full rounded-full border border-gray-200 bg-white px-4 py-3 text-dark outline-none transition-all focus:border-navy focus:ring-2 focus:ring-navy/20"
                  placeholder="you@example.com"
                />
              </div>
              {contact.email && !isValidEmail ? (
                <p className="px-4 text-sm text-accent">Please enter a valid email address.</p>
              ) : null}
            </div>
            <button
              onClick={next}
              disabled={!canStart}
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-semibold rounded-full hover:scale-[1.03] hover:shadow-xl transition-all min-h-[52px] disabled:opacity-40 disabled:hover:scale-100 disabled:hover:shadow-none"
            >
              Start the Quiz <ArrowRight size={18} aria-hidden="true" />
            </button>
          </motion.div>
        )}

        {step >= 1 && step <= 5 && (
          <motion.div
            key={`q-${step}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-navy mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
              {currentQ.question}
            </h2>
            {currentQ.type === 'multi' && (
              <p className="text-muted text-sm mb-6">Select all that apply</p>
            )}
            {currentQ.type === 'single' && <div className="mb-6" />}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentQ.options.map((option) => (
                <button
                  key={option}
                  onClick={() => selectOption(option)}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all min-h-[56px] font-medium text-sm ${
                    isSelected(option)
                      ? 'border-navy bg-navy text-white'
                      : 'border-gray-200 bg-white text-dark hover:border-navy/40 hover:bg-cream'
                  }`}
                  aria-pressed={isSelected(option)}
                >
                  <span
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                      isSelected(option) ? 'border-white bg-white' : 'border-current'
                    }`}
                    aria-hidden="true"
                  >
                    {isSelected(option) && (
                      <span className="w-2.5 h-2.5 rounded-full bg-navy block" />
                    )}
                  </span>
                  {option}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prev}
                className="flex items-center gap-2 px-5 py-3 text-muted hover:text-navy transition-colors min-h-[44px]"
              >
                <ArrowLeft size={16} aria-hidden="true" /> Back
              </button>
              <button
                onClick={next}
                disabled={!canAdvance()}
                className="flex items-center gap-2 px-8 py-4 bg-navy text-white font-semibold rounded-full hover:scale-[1.02] hover:shadow-lg transition-all min-h-[52px] disabled:opacity-40"
              >
                {step === 5 ? 'Get My Results' : 'Next'}
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        )}

        {step === 6 && result && (
          <motion.div
            key="results"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-cream px-4 py-2 rounded-full text-xs font-semibold text-navy uppercase tracking-widest mb-4">
                Your Result
              </div>
              <h2 className="text-3xl font-bold text-navy mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                Based on your answers, here&apos;s what stands out...
              </h2>
              <p className="text-muted max-w-md mx-auto">
                Your current response pattern points towards {result.stage.toLowerCase()} support needs.
              </p>
            </div>

            <div className="flex flex-col gap-4 mb-10">
              {resultInsights.map((insight, i) => (
                <div key={insight.title} className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">{insight.title}</h3>
                    <p className="text-dark text-sm leading-relaxed">{insight.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-cream rounded-2xl p-6 mb-8">
              <p className="text-dark text-sm leading-relaxed mb-4">
                Your personalised report explains why this is happening - and the first steps to help you work with your body instead of against it.
              </p>
              <h3 className="font-bold text-navy mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                Receive your personalised report by email.
              </h3>
              <p className="text-muted text-sm mb-5">
                Your report will be sent to the email address you shared.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={emailReport}
                  disabled={isEmailingReport}
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-navy px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
                >
                  {isEmailingReport ? 'Sending Report...' : 'Email My Report'}
                </button>
              </div>
              {emailStatus ? (
                <p className="mt-4 text-sm font-medium text-muted">{emailStatus}</p>
              ) : null}
            </div>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/menothrive"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-full hover:scale-[1.03] hover:shadow-xl transition-all min-h-[52px] w-full sm:w-auto"
              >
                Explore MenoThrive
              </a>
              <a
                href="/transform-thrive"
                className="inline-flex items-center justify-center px-8 py-4 border border-accent/40 text-accent font-semibold rounded-full hover:bg-accent hover:text-white transition-all min-h-[52px] w-full sm:w-auto"
              >
                Explore Transform &amp; Thrive
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
