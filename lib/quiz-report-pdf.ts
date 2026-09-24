import {
  PDFDocument,
  PDFPage,
  PDFFont,
  StandardFonts,
  rgb,
  type RGB,
} from 'pdf-lib'

export type QuizReportAnswers = Record<string, string | string[] | undefined>

export type QuizReportPdfPayload = {
  name: string
  email: string
  stage: string
  answers: QuizReportAnswers
  leadMagnetPdf: Buffer
}

type Fonts = {
  regular: PDFFont
  bold: PDFFont
}

const pageSize: [number, number] = [595.28, 841.89]
const colors = {
  navy: rgb(0.098, 0.125, 0.157),
  accent: rgb(0.557, 0, 0),
  gold: rgb(0.784, 0.663, 0.553),
  cream: rgb(0.961, 0.933, 0.894),
  warmBg: rgb(0.988, 0.98, 0.965),
  muted: rgb(0.388, 0.439, 0.467),
  white: rgb(1, 1, 1),
}

const answerLabels: Record<number, string> = {
  1: 'Age range',
  2: 'Symptoms',
  3: 'Symptom timeline',
  4: 'Already tried',
  5: 'Biggest goal',
}

const marginX = 64
const contentWidth = 467

export async function generateQuizReportPdf({
  name,
  email,
  stage,
  answers,
  leadMagnetPdf,
}: QuizReportPdfPayload) {
  const reportPdf = await PDFDocument.create()
  const fonts: Fonts = {
    regular: await reportPdf.embedFont(StandardFonts.Helvetica),
    bold: await reportPdf.embedFont(StandardFonts.HelveticaBold),
  }

  drawResultPage(reportPdf.addPage(pageSize), fonts, name, email, stage)
  drawSnapshotPage(reportPdf.addPage(pageSize), fonts, answers)
  drawNextStepsPage(reportPdf.addPage(pageSize), fonts, stage, answers)

  const leadMagnet = await PDFDocument.load(leadMagnetPdf)
  const leadMagnetPages = await reportPdf.copyPages(
    leadMagnet,
    leadMagnet.getPageIndices(),
  )

  for (const page of leadMagnetPages) {
    reportPdf.addPage(page)
  }

  return Buffer.from(await reportPdf.save())
}

function drawResultPage(page: PDFPage, fonts: Fonts, name: string, email: string, stage: string) {
  drawPageBase(page)
  drawTextBlock(page, fonts.bold, 'Your Current Stage Signal', marginX, 708, {
    size: 30,
    color: colors.navy,
    maxWidth: contentWidth,
    lineHeight: 36,
  })
  const stageBottom = drawTextBlock(page, fonts.bold, stage, marginX, 648, {
    size: 28,
    color: colors.accent,
    maxWidth: contentWidth,
    lineHeight: 34,
  })
  const introBottom = drawTextBlock(
    page,
    fonts.regular,
    'Your answers point to a stage where your body may need a different strategy, not more restriction or more guessing. This report is a starting point to help you understand what may be changing and what to focus on next.',
    marginX,
    Math.min(548, stageBottom - 46),
    { size: 15, color: colors.muted, maxWidth: contentWidth, lineHeight: 23 },
  )
  const cardHeight = 136
  const cardY = introBottom - cardHeight - 38

  drawInfoCard(page, fonts, {
    x: marginX,
    y: cardY,
    width: contentWidth,
    height: cardHeight,
    title: 'Prepared For',
    body: [`${name}`, email, 'By Srividya Gowri, Founder, The 8th Element'],
  })

  const includesY = cardY - 48
  drawTextBlock(page, fonts.bold, 'What this report includes', marginX, includesY, {
    size: 17,
    color: colors.navy,
    maxWidth: contentWidth,
    lineHeight: 22,
  })
  drawPlainList(page, fonts, marginX, includesY - 28, [
    'Your stage signal from the quiz',
    'The symptoms and patterns you selected',
    'Three practical next steps before the full guide begins',
  ])
}

function drawSnapshotPage(page: PDFPage, fonts: Fonts, answers: QuizReportAnswers) {
  drawPageBase(page)
  drawTextBlock(page, fonts.bold, 'What Your Answers Suggest', marginX, 708, {
    size: 30,
    color: colors.navy,
    maxWidth: contentWidth,
    lineHeight: 36,
  })
  const introBottom = drawTextBlock(
    page,
    fonts.regular,
    'These answers are not a diagnosis. They simply highlight the symptoms, timeline, and goals that can guide your next health decisions with more clarity.',
    marginX,
    635,
    { size: 15, color: colors.muted, maxWidth: contentWidth, lineHeight: 23 },
  )

  let y = introBottom - 52
  for (let questionId = 1; questionId <= 5; questionId += 1) {
    const answer = getAnswerText(answers, questionId)
    drawAnswerRow(page, fonts, marginX, y, answerLabels[questionId], answer)
    y -= 82
  }
}

function drawNextStepsPage(
  page: PDFPage,
  fonts: Fonts,
  stage: string,
  answers: QuizReportAnswers,
) {
  drawPageBase(page)
  drawTextBlock(page, fonts.bold, 'Where To Begin Now', marginX, 708, {
    size: 30,
    color: colors.navy,
    maxWidth: contentWidth,
    lineHeight: 36,
  })
  const introBottom = drawTextBlock(
    page,
    fonts.regular,
    `Because your quiz points towards ${stage.toLowerCase()}, start with a steadier, more supportive approach before changing everything at once.`,
    marginX,
    636,
    { size: 15, color: colors.muted, maxWidth: contentWidth, lineHeight: 23 },
  )

  const steps = [
    {
      title: 'Stabilise your daily foundation.',
      body: 'Prioritise protein, fibre, hydration, and regular meals so your energy, cravings, and blood sugar have a stronger base.',
    },
    {
      title: 'Strength matters more than punishment.',
      body: 'Choose consistent strength-focused movement over random high-intensity effort, especially if sleep and recovery are already strained.',
    },
    {
      title: 'Track patterns before forcing a plan.',
      body: `Notice how ${getPrimarySymptoms(answers)} connect with sleep, stress, meals, and your cycle or stage of transition.`,
    },
  ]

  let y = introBottom - 52
  for (let index = 0; index < steps.length; index += 1) {
    drawStepCard(page, fonts, index + 1, steps[index].title, steps[index].body, marginX, y)
    y -= 136
  }

  drawTextBlock(
    page,
    fonts.bold,
    'The guide begins on the next page.',
    marginX,
    104,
    { size: 16, color: colors.accent, maxWidth: contentWidth, lineHeight: 20 },
  )
}

function drawPageBase(page: PDFPage) {
  page.drawRectangle({ x: 0, y: 0, width: pageSize[0], height: pageSize[1], color: colors.white })
}

function drawInfoCard(
  page: PDFPage,
  fonts: Fonts,
  {
    x,
    y,
    width,
    height,
    title,
    body,
  }: { x: number; y: number; width: number; height: number; title: string; body: string[] },
) {
  page.drawRectangle({ x, y, width, height, color: colors.cream, borderColor: colors.gold, borderWidth: 0.7 })
  drawText(page, fonts.bold, title, x + 24, y + height - 36, 14, colors.accent)
  let currentY = y + height - 66
  for (const line of body) {
    drawTextBlock(page, fonts.regular, line, x + 24, currentY, {
      size: 15,
      color: colors.navy,
      maxWidth: width - 48,
      lineHeight: 21,
    })
    currentY -= 25
  }
}

function drawAnswerRow(
  page: PDFPage,
  fonts: Fonts,
  x: number,
  y: number,
  label: string,
  answer: string,
) {
  page.drawRectangle({
    x,
    y: y - 55,
    width: contentWidth,
    height: 72,
    color: colors.white,
    borderColor: rgb(0.89, 0.86, 0.82),
    borderWidth: 0.7,
  })
  drawText(page, fonts.bold, label, x + 18, y - 5, 12, colors.accent)
  drawTextBlock(page, fonts.regular, answer, x + 18, y - 25, {
    size: 14,
    color: colors.navy,
    maxWidth: 440,
    lineHeight: 17,
    maxLines: 2,
  })
}

function drawStepCard(
  page: PDFPage,
  fonts: Fonts,
  number: number,
  title: string,
  body: string,
  x: number,
  y: number,
) {
  page.drawRectangle({
    x,
    y: y - 98,
    width: contentWidth,
    height: 112,
    color: colors.white,
    borderColor: rgb(0.89, 0.86, 0.82),
    borderWidth: 0.7,
  })
  page.drawCircle({ x: x + 31, y: y - 33, size: 16, color: colors.navy })
  drawText(page, fonts.bold, String(number), x + 26.5, y - 38, 11, colors.white)
  drawText(page, fonts.bold, title, x + 62, y - 18, 15, colors.navy)
  drawTextBlock(page, fonts.regular, body, x + 62, y - 42, {
    size: 13,
    color: colors.muted,
    maxWidth: contentWidth - 88,
    lineHeight: 18,
    maxLines: 3,
  })
}

function drawPlainList(page: PDFPage, fonts: Fonts, x: number, y: number, items: string[]) {
  let currentY = y
  for (const item of items) {
    drawTextBlock(page, fonts.regular, item, x, currentY, {
      size: 14,
      color: colors.navy,
      maxWidth: contentWidth,
      lineHeight: 18,
      maxLines: 1,
    })
    currentY -= 31
  }
}

function drawTextBlock(
  page: PDFPage,
  font: PDFFont,
  text: string,
  x: number,
  y: number,
  options: {
    size: number
    color: RGB
    maxWidth: number
    lineHeight: number
    maxLines?: number
  },
) {
  const lines = wrapText(cleanText(text), font, options.size, options.maxWidth, options.maxLines)
  lines.forEach((line, index) => {
    drawText(page, font, line, x, y - index * options.lineHeight, options.size, options.color)
  })

  return y - Math.max(lines.length, 1) * options.lineHeight
}

function drawText(
  page: PDFPage,
  font: PDFFont,
  text: string,
  x: number,
  y: number,
  size: number,
  color: RGB,
) {
  page.drawText(cleanText(text), {
    x,
    y,
    size,
    font,
    color,
  })
}

function wrapText(text: string, font: PDFFont, size: number, maxWidth: number, maxLines?: number) {
  const words = text.split(/\s+/).filter(Boolean)
  const lines: string[] = []
  let line = ''

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word
    if (font.widthOfTextAtSize(candidate, size) <= maxWidth) {
      line = candidate
      continue
    }

    if (line) lines.push(line)
    line = word

    if (maxLines && lines.length >= maxLines) {
      return truncateLastLine(lines, font, size, maxWidth)
    }
  }

  if (line) lines.push(line)

  if (maxLines && lines.length > maxLines) {
    return truncateLastLine(lines.slice(0, maxLines), font, size, maxWidth)
  }

  return lines
}

function truncateLastLine(lines: string[], font: PDFFont, size: number, maxWidth: number) {
  const lastIndex = lines.length - 1
  let line = lines[lastIndex]

  while (font.widthOfTextAtSize(`${line}...`, size) > maxWidth && line.length > 0) {
    line = line.slice(0, -1).trim()
  }

  lines[lastIndex] = `${line}...`
  return lines
}

function getAnswerText(answers: QuizReportAnswers, questionId: number) {
  const answer = answers[String(questionId)] ?? answers[questionId]
  if (Array.isArray(answer)) return cleanText(answer.join(', '))
  return cleanText(answer || 'Not provided')
}

function getPrimarySymptoms(answers: QuizReportAnswers) {
  const answer = answers['2'] ?? answers[2]
  if (!Array.isArray(answer) || answer.length === 0) return 'your symptoms'
  return answer.slice(0, 3).join(', ').toLowerCase()
}

function cleanText(value: string) {
  return value
    .replace(/\u2013|\u2014/g, '-')
    .replace(/\u2018|\u2019/g, "'")
    .replace(/\u201C|\u201D/g, '"')
    .replace(/\u2122/g, 'TM')
    .replace(/[^\x09\x0A\x0D\x20-\x7E]/g, '')
}
