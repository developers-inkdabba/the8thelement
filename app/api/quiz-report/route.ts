import { readFile } from 'fs/promises'
import { join } from 'path'
import nodemailer from 'nodemailer'
import { generateQuizReportPdf, type QuizReportAnswers } from '@/lib/quiz-report-pdf'
import { parseQuizReportRequest } from '@/lib/quiz-report-request'
import { ASSESSMENT_FORM_URL } from '@/lib/links'

export const runtime = 'nodejs'
export const maxDuration = 60

const leadMagnetPdfPath = join(process.cwd(), 'public', '8th Element Lead Magnet.pdf')
const emailLogoPath = join(process.cwd(), 'public', 'favicon.svg')
const emailLogoCid = 'the8thelement-logo'
const whatsappUrl = 'https://wa.me/919884835729'
const rateLimitWindowMs = 15 * 60 * 1000
const maxReportsPerWindow = 3
const quizReportAttempts = new Map<string, { count: number; resetAt: number }>()

export async function POST(request: Request) {
  const parsedRequest = await parseQuizReportRequest(request)

  if (!parsedRequest.success) {
    return parsedRequest.response
  }

  const { name, email, answers } = parsedRequest.data
  const stage = parsedRequest.data.stage || 'Menopause Transition'
  const rateLimitKey = getRateLimitKey(request, email)
  if (isRateLimited(rateLimitKey)) {
    return Response.json(
      { message: 'Please wait a few minutes before requesting another report.' },
      { status: 429 },
    )
  }

  const smtpHost = process.env.SMTP_HOST
  const smtpPort = Number(process.env.SMTP_PORT || 587)
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const fromEmail = process.env.QUIZ_REPORT_FROM_EMAIL
  const replyToEmail = process.env.QUIZ_REPORT_REPLY_TO_EMAIL || fromEmail
  const adminCopyEmail = getValidEmail(process.env.QUIZ_REPORT_ADMIN_COPY_EMAIL)

  if (!smtpHost || !smtpUser || !smtpPass || !fromEmail) {
    return Response.json(
      {
        message:
          'Email sending is not configured yet. Please try again once the email setup is complete.',
      },
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
    const [leadMagnetPdf, emailLogo] = await Promise.all([
      readFile(leadMagnetPdfPath),
      readFile(emailLogoPath),
    ])
    const pdfAttachment = await generateQuizReportPdf({
      name,
      email,
      stage,
      answers: answers as QuizReportAnswers,
      leadMagnetPdf,
    })

    await transporter.sendMail({
      from: fromEmail,
      to: email,
      bcc: adminCopyEmail || undefined,
      replyTo: replyToEmail,
      subject: 'Your Personalised Menopause Stage Report',
      text: buildQuizReportEmailText(name, stage),
      html: buildQuizReportEmailHtml(name, stage),
      attachments: [
        {
          filename: 'perimenopause-quiz-report-and-guide.pdf',
          content: pdfAttachment,
          contentType: 'application/pdf',
        },
        {
          filename: 'the-8th-element-logo.svg',
          content: emailLogo,
          contentType: 'image/svg+xml',
          cid: emailLogoCid,
        },
      ],
    })
  } catch (error) {
    console.error('Quiz report email failed:', error)
    return Response.json(
      { message: 'We could not email your report right now. Please try again.' },
      { status: 502 },
    )
  }

  return Response.json({ message: 'Report sent.' })
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

  for (const [attemptKey, attempt] of quizReportAttempts) {
    if (attempt.resetAt <= now) {
      quizReportAttempts.delete(attemptKey)
    }
  }

  const attempt = quizReportAttempts.get(key)
  if (!attempt) {
    quizReportAttempts.set(key, { count: 1, resetAt: now + rateLimitWindowMs })
    return false
  }

  if (attempt.count >= maxReportsPerWindow) {
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

function buildQuizReportEmailText(name: string, stage: string) {
  return `Hi ${name},

Thank you for taking the time to complete the Perimenopause Quiz.

I've attached your personalised report, which indicates that your current stage signal is:
${stage}

This stage can bring changes that are sometimes easy to dismiss or simply attribute to ageing or a busy lifestyle. Understanding what may be happening in your body is the first step towards making informed choices that support your health and wellbeing.

Inside your report, you'll find:
- Your current menopause stage signal
- What this stage typically means
- Some of the changes you may be experiencing
- Practical next steps to help you navigate this stage with greater confidence

What next?

Every woman's experience is different. While this quiz can give you an indication of your current stage, it cannot tell you exactly which areas of your health and lifestyle deserve the most attention right now.

If you'd like personalised guidance, you can book a Menopause Health Assessment & Strategy Session.

During this 60-minute session, we'll look at your current health, lifestyle, symptoms and goals and identify the 2-3 areas that could make the biggest difference for you.

You'll leave with greater clarity and a personalised action plan you can start implementing straight away.

Menopause Health Assessment & Strategy Session
60 minutes | Rs. 2,500
Book Your Session Here: ${ASSESSMENT_FORM_URL}

Or, if you have a question before booking, feel free to WhatsApp me:
${whatsappUrl}

Wishing you good health and a smooth journey through this stage of life.

Warm regards,
Srividya Gowri
Menopause Nutrition & Lifestyle Coach
Founder, The 8th Element
WhatsApp: +91 98848 35729
Website: http://www.the8thelement.in
Instagram: http://www.instagram.com/the_8thelement
YouTube: http://www.youtube.com/@the8thelement`
}

function buildQuizReportEmailHtml(name: string, stage: string) {
  const escapedName = escapeHtml(name)
  const escapedStage = escapeHtml(stage)

  return `
    <div style="margin:0;background:#FCFAF8;padding:0;font-family:Arial,sans-serif;color:#192028;line-height:1.65">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#FCFAF8;margin:0;padding:24px 0">
        <tr>
          <td align="center" style="padding:0 16px">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;background:#ffffff;border:1px solid #E7DED2;border-radius:18px;overflow:hidden">
              <tr>
                <td style="padding:34px 34px 12px">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 24px">
                    <tr>
                      <td style="width:54px;padding:0 14px 0 0;vertical-align:middle;line-height:0">
                        <img src="cid:${emailLogoCid}" width="44" height="30" alt="The 8th Element logo" style="display:block;width:44px;height:auto;border:0;outline:none;text-decoration:none" />
                      </td>
                      <td style="padding:0;vertical-align:middle">
                        <p style="margin:0;color:#192028;font-size:14px;font-weight:700;line-height:1.2;letter-spacing:1.8px;text-transform:uppercase">The 8th Element</p>
                        <p style="margin:4px 0 0;color:#6B7F8D;font-size:13px;line-height:1.35">Personalised quiz report</p>
                      </td>
                    </tr>
                  </table>
                  <h1 style="margin:0 0 22px;font-family:Arial,sans-serif;font-size:28px;line-height:1.25;color:#192028">Your Personalised Menopause Stage Report</h1>
                  <p style="margin:0 0 16px">Hi ${escapedName},</p>
                  <p style="margin:0 0 16px">Thank you for taking the time to complete the Perimenopause Quiz.</p>
                  <p style="margin:0 0 10px">I&apos;ve attached your personalised report, which indicates that your current stage signal is:</p>
                  <p style="margin:0 0 22px;font-size:24px;font-weight:700;color:#8E0000">${escapedStage}</p>
                  <p style="margin:0 0 18px">This stage can bring changes that are sometimes easy to dismiss or simply attribute to ageing or a busy lifestyle. Understanding what may be happening in your body is the first step towards making informed choices that support your health and wellbeing.</p>
                </td>
              </tr>
              <tr>
                <td style="padding:0 34px 18px">
                  <div style="background:#F5EFE7;border-radius:14px;padding:22px 24px">
                    <p style="margin:0 0 12px;font-weight:700;color:#192028">Inside your report, you&apos;ll find:</p>
                    <p style="margin:0 0 8px">Your current menopause stage signal</p>
                    <p style="margin:0 0 8px">What this stage typically means</p>
                    <p style="margin:0 0 8px">Some of the changes you may be experiencing</p>
                    <p style="margin:0">Practical next steps to help you navigate this stage with greater confidence</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding:4px 34px 18px">
                  <h2 style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:22px;line-height:1.25;color:#192028">What next?</h2>
                  <p style="margin:0 0 16px">Every woman&apos;s experience is different. While this quiz can give you an indication of your current stage, it cannot tell you exactly which areas of your health and lifestyle deserve the most attention right now.</p>
                  <p style="margin:0 0 16px">If you&apos;d like personalised guidance, you can book a <strong>Menopause Health Assessment &amp; Strategy Session</strong>.</p>
                  <p style="margin:0 0 16px">During this 60-minute session, we&apos;ll look at your current health, lifestyle, symptoms and goals and identify the 2-3 areas that could make the biggest difference for you.</p>
                  <p style="margin:0 0 22px">You&apos;ll leave with greater clarity and a personalised action plan you can start implementing straight away.</p>
                  <div style="background:#192028;border-radius:16px;padding:24px;text-align:center;color:#ffffff">
                    <p style="margin:0 0 4px;font-size:18px;font-weight:700">Menopause Health Assessment &amp; Strategy Session</p>
                    <p style="margin:0 0 18px;color:#E8DCCF">60 minutes | &#8377;2,500</p>
                    <a href="${ASSESSMENT_FORM_URL}" style="display:inline-block;background:#8E0000;color:#ffffff;text-decoration:none;border-radius:999px;padding:14px 26px;font-weight:700">Book Your Session Here</a>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding:0 34px 34px">
                  <p style="margin:0 0 18px">Or, if you have a question before booking, feel free to WhatsApp me.</p>
                  <p style="margin:0 0 24px"><a href="${whatsappUrl}" style="color:#8E0000;font-weight:700;text-decoration:none">WhatsApp Srividya</a></p>
                  <p style="margin:0 0 18px">Wishing you good health and a smooth journey through this stage of life.</p>
                  <p style="margin:0">
                    Warm regards,<br/><br/>
                    <strong>Srividya Gowri</strong><br/>
                    Menopause Nutrition &amp; Lifestyle Coach<br/>
                    Founder, The 8th Element<br/>
                    WhatsApp: <a href="${whatsappUrl}" style="color:#8E0000">+91 98848 35729</a><br/>
                    Website: <a href="http://www.the8thelement.in" style="color:#8E0000">www.the8thelement.in</a><br/>
                    Instagram: <a href="http://www.instagram.com/the_8thelement" style="color:#8E0000">The 8th Element on Instagram</a><br/>
                    YouTube: <a href="http://www.youtube.com/@the8thelement" style="color:#8E0000">The 8th Element on YouTube</a>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  `
}
