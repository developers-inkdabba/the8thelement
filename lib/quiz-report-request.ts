import { z } from 'zod'

const maxRequestBytes = 24 * 1024

const quizReportSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  stage: z.string().trim().min(1).max(80).optional(),
  answers: z
    .record(
      z.string().regex(/^[1-5]$/),
      z.union([
        z.string().trim().min(1).max(160),
        z.array(z.string().trim().min(1).max(160)).min(1).max(8),
      ]),
    )
    .refine((answers) => Object.keys(answers).length <= 5, {
      message: 'Too many answers were submitted.',
    }),
})

export async function parseQuizReportRequest(request: Request) {
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

  const parsedPayload = quizReportSchema.safeParse(payload)

  if (!parsedPayload.success) {
    return {
      success: false as const,
      response: Response.json(
        { message: 'Please check your details and complete all quiz questions.' },
        { status: 400 },
      ),
    }
  }

  return {
    success: true as const,
    data: parsedPayload.data,
  }
}
