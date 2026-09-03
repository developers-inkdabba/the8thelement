import nodemailer from 'nodemailer'
import { z } from 'zod'

export const runtime = 'nodejs'

const maxRequestBytes = 8 * 1024
const rateLimitWindowMs = 15 * 60 * 1000
const maxSubmissionsPerWindow = 5
const newsletterAttempts = new Map<string, { count: number; resetAt: number }>()

const newsletterSchema = z.object({
  firstName: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(120),
})

export async function POST(request: Request) {
  const parsedRequest = await parseNewsletterRequest(request)

  if (!parsedRequest.success) {
    return parsedRequest.response
  }

  const { firstName, email } = parsedRequest.data
  const rateLimitKey = getRateLimitKey(request, email)
  if (isRateLimited(rateLimitKey)) {
    return Response.json(
      { message: 'Please wait a few minutes before submitting again.' },
      { status: 429 },
    )
  }

  const smtpHost = process.env.SMTP_HOST
  const smtpPort = Number(process.env.SMTP_PORT || 587)
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const fromEmail = process.env.QUIZ_REPORT_FROM_EMAIL
  const toEmail =
    getValidEmail(process.env.NEWSLETTER_TO_EMAIL) ||
    getValidEmail(process.env.QUIZ_REPORT_ADMIN_COPY_EMAIL) ||
    getValidEmail(fromEmail)

  if (!smtpHost || !smtpUser || !smtpPass || !fromEmail || !toEmail) {
    return Response.json(
      { message: 'Newsletter signup is not configured yet. Please try again later.' },
      { status: 503 },
    )
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })

  try {
    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: 'New newsletter signup',
      text: `New newsletter signup\n\nName: ${firstName}\nEmail: ${email}`,
      html: `
        <div style="font-family:Arial,sans-serif;color:#192028;line-height:1.6">
          <h1 style="font-size:22px;margin:0 0 16px">New newsletter signup</h1>
          <p style="margin:0 0 8px"><strong>Name:</strong> ${escapeHtml(firstName)}</p>
          <p style="margin:0"><strong>Email:</strong> ${escapeHtml(email)}</p>
        </div>
      `,
    })
  } catch (error) {
    console.error('Newsletter signup email failed:', error)
    return Response.json(
      { message: 'We could not complete your signup right now. Please try again.' },
      { status: 502 },
    )
  }

  return Response.json({ message: 'Newsletter signup received.' })
}

async function parseNewsletterRequest(request: Request) {
  const contentLength = Number(request.headers.get('content-length') || 0)

  if (contentLength > maxRequestBytes) {
    return {
      success: false as const,
      response: Response.json({ message: 'Request body is too large.' }, { status: 413 }),
    }
  }

  let payload: unknown

  try {
    const rawBody = await request.text()

    if (rawBody.length > maxRequestBytes) {
      return {
        success: false as const,
        response: Response.json({ message: 'Request body is too large.' }, { status: 413 }),
      }
    }

    payload = JSON.parse(rawBody)
  } catch {
    return {
      success: false as const,
      response: Response.json({ message: 'Invalid request body.' }, { status: 400 }),
    }
  }

  const parsedPayload = newsletterSchema.safeParse(payload)

  if (!parsedPayload.success) {
    return {
      success: false as const,
      response: Response.json({ message: 'Please enter a valid name and email.' }, { status: 400 }),
    }
  }

  return {
    success: true as const,
    data: parsedPayload.data,
  }
}

function getValidEmail(value: string | undefined) {
  if (!value) return undefined
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? value : undefined
}

function getRateLimitKey(request: Request, email: string) {
  const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
  const realIp = request.headers.get('x-real-ip')?.trim()
  const ip = forwardedFor || realIp || 'unknown-ip'

  return `${ip}:${email.toLowerCase()}`
}

function isRateLimited(key: string) {
  const now = Date.now()

  for (const [attemptKey, attempt] of newsletterAttempts) {
    if (attempt.resetAt <= now) {
      newsletterAttempts.delete(attemptKey)
    }
  }

  const attempt = newsletterAttempts.get(key)
  if (!attempt) {
    newsletterAttempts.set(key, { count: 1, resetAt: now + rateLimitWindowMs })
    return false
  }

  if (attempt.count >= maxSubmissionsPerWindow) {
    return true
  }

  attempt.count += 1
  return false
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
