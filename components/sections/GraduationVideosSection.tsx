import Link from 'next/link'
import { GraduationCap } from 'lucide-react'
import { ASSESSMENT_FORM_URL } from '@/lib/links'

type GraduationVideo = {
  title: string
  description: string
  youtubeUrl: string
  faceVisibility: 'shown' | 'private'
  storyHref?: string
  storyCta?: string
}

const graduationVideos: GraduationVideo[] = [
  {
    title: 'Sowmya',
    description:
      '40+, perimenopause, busy professional, sciatica, stubborn weight, midsection fat, bloating, heaviness, weakness, aches, and pains.',
    youtubeUrl: 'https://youtu.be/3wMiEcCu1Ws',
    faceVisibility: 'private',
  },
  {
    title: 'Dr. Priya Ravi',
    description:
      '60+, diabetes, stubborn weight, weakness, and knee pain. A client story about rebuilding health, strength, and confidence later in life.',
    youtubeUrl: 'https://youtu.be/mN6YrwRX_bg?si=mKC4W3Mi3vtpotQh',
    faceVisibility: 'shown',
    storyHref: '/success-stories#testimonial-dr-priya',
    storyCta: 'View Testimonial',
  },
  {
    title: 'Ramya Vadlamudi',
    description:
      '40+, perimenopause, busy professional in the US, stubborn weight, midsection fat, poor energy, mood changes, irritability, and inconsistent habits.',
    youtubeUrl: 'https://youtu.be/y7WO_dQ3FDo',
    faceVisibility: 'shown',
    storyHref: '/success-stories#testimonial-ramya',
    storyCta: 'View Testimonial',
  },
  {
    title: 'Subha Kannan',
    description:
      '50+, menopause, busy professional in the US, stubborn weight, and midsection fat despite eating clean and exercising.',
    youtubeUrl: 'https://youtu.be/uPye-9I2mIE',
    faceVisibility: 'private',
  },
  {
    title: 'Vasanthi',
    description:
      '40+, perimenopause, stubborn weight, and midsection fat despite eating clean and strength training.',
    youtubeUrl: 'https://youtu.be/6b5nOmHlRdw',
    faceVisibility: 'shown',
  },
  {
    title: 'Abhilasha',
    description:
      '40+, perimenopause, busy professional, stubborn weight, confusion, mindset challenges, professional stress, and inconsistent food and exercise habits.',
    youtubeUrl: 'https://youtu.be/SJ1rMPZGpY0',
    faceVisibility: 'shown',
  },
  {
    title: 'Kriti',
    description:
      '40+, perimenopause, homemaker in Germany, stubborn weight, midsection fat, bloating, fibromyalgia, sleep issues, cravings, and heavy snacking.',
    youtubeUrl: 'https://youtu.be/iU3djHwO4PA',
    faceVisibility: 'shown',
    storyHref: '/success-stories#story-kriti',
    storyCta: 'Read Success Story',
  },
  {
    title: 'Anusha',
    description:
      '40+, perimenopause, stubborn weight, joint family life, inconsistent food and exercise habits, sleep issues, poor energy, and cravings.',
    youtubeUrl: 'https://youtu.be/ef1_ETiOiCg',
    faceVisibility: 'private',
  },
  {
    title: 'Sharmila Bansal Rao',
    description:
      '40+, perimenopause, Bharatanatyam dancer in Zurich, stubborn weight, midsection fat, and no progress despite moving more and eating less.',
    youtubeUrl: 'https://youtu.be/gX4QnV1PY48',
    faceVisibility: 'shown',
    storyHref: '/success-stories#story-sharmila',
    storyCta: 'Read Success Story',
  },
  {
    title: 'Sangeetha Arjun',
    description:
      '40, perimenopause, busy professional, cravings, stubborn weight, belly fat, bloating, body discomfort, and inconsistent food and exercise habits.',
    youtubeUrl: 'https://youtu.be/PUEDDOTy-m0',
    faceVisibility: 'shown',
    storyHref: '/success-stories#testimonial-sangeetha',
    storyCta: 'View Testimonial',
  },
  {
    title: 'Aritu',
    description:
      '40+, perimenopause, busy professional in Zurich, cravings, stubborn weight, belly fat, bloating, body discomfort, and inconsistent habits.',
    youtubeUrl: 'https://youtu.be/omEPpVWtd_k',
    faceVisibility: 'shown',
    storyHref: '/success-stories#story-aritu',
    storyCta: 'Read Success Story',
  },
  {
    title: 'Sahitya',
    description:
      'A client graduation reflection from The 8th Element journey, shared with privacy protected.',
    youtubeUrl: 'https://youtu.be/zp2b2kRb1xc',
    faceVisibility: 'private',
  },
  {
    title: 'Ranjani',
    description:
      'A client graduation reflection from The 8th Element journey, shared with privacy protected.',
    youtubeUrl: 'https://youtu.be/lQpnoGK0onc',
    faceVisibility: 'private',
  },
  {
    title: 'Charanya',
    description:
      'A client graduation reflection from The 8th Element journey, shared with privacy protected.',
    youtubeUrl: 'https://youtu.be/RhcexDLZcv4',
    faceVisibility: 'private',
  },
  {
    title: 'Kartika',
    description:
      'A client graduation reflection from The 8th Element journey, shared with privacy protected.',
    youtubeUrl: 'https://youtu.be/7xTcQooHOyI',
    faceVisibility: 'private',
  },
  {
    title: 'Kavitha',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/mDWyO5Lp9TQ',
    faceVisibility: 'shown',
    storyHref: '/success-stories#story-kavitha',
    storyCta: 'Read Success Story',
  },
  {
    title: 'Rabini',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/WueJCoM22lA',
    faceVisibility: 'shown',
  },
  {
    title: 'Dr. Swetha',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/7xG1i2aUyUs',
    faceVisibility: 'shown',
  },
  {
    title: 'Kavitha Srinivas',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/OkEVOtI90G4',
    faceVisibility: 'shown',
  },
  {
    title: 'Krithiga',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/La9p67SeQJ8',
    faceVisibility: 'shown',
    storyHref: '/success-stories#story-krithiga',
    storyCta: 'Read Success Story',
  },
  {
    title: 'Aishwarya',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/2JwLiFTVbsQ',
    faceVisibility: 'shown',
    storyHref: '/success-stories#story-aishwarya',
    storyCta: 'Read Success Story',
  },
  {
    title: 'Mythily - Story 1',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/kSe-3FGu_kU',
    faceVisibility: 'shown',
    storyHref: '/success-stories#testimonial-mythily',
    storyCta: 'View Testimonial',
  },
  {
    title: 'Mythily - Story 2',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/bcv07b9DE4o',
    faceVisibility: 'shown',
    storyHref: '/success-stories#testimonial-mythily',
    storyCta: 'View Testimonial',
  },
  {
    title: 'Varsha',
    description:
      'A client graduation reflection from The 8th Element journey, shared with privacy protected.',
    youtubeUrl: 'https://youtu.be/eARFCS70Xxw',
    faceVisibility: 'private',
  },
  {
    title: 'Radhika',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/ecXt1knC0J0',
    faceVisibility: 'shown',
  },
  {
    title: 'Swati',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/yldfb_yw-RI',
    faceVisibility: 'shown',
  },
  {
    title: 'Srividya',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/i2ywijDtY0k',
    faceVisibility: 'shown',
  },
  {
    title: 'Subashini',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/NbY1w5ivK7M',
    faceVisibility: 'shown',
  },
  {
    title: 'Swetha Vignesh',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/UCV3C2VW0-k',
    faceVisibility: 'shown',
    storyHref: '/success-stories#story-swetha-vignesh',
    storyCta: 'Read Success Story',
  },
  {
    title: 'Rekha',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/584kgxHPU7M',
    faceVisibility: 'shown',
  },
  {
    title: 'Smruti',
    description:
      'A client graduation reflection from The 8th Element journey, shared with privacy protected.',
    youtubeUrl: 'https://youtu.be/FO0rDP8Y6vg',
    faceVisibility: 'private',
  },
  {
    title: 'Maalavika',
    description:
      'A client graduation reflection from The 8th Element journey, shared with privacy protected.',
    youtubeUrl: 'https://youtu.be/7Wi8gBcpb-4',
    faceVisibility: 'private',
  },
  {
    title: 'Jyotsna',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/BrQnZfQok50',
    faceVisibility: 'shown',
  },
  {
    title: 'Usha',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/Ay38J9mTIVY',
    faceVisibility: 'shown',
    storyHref: '/success-stories#testimonial-usha',
    storyCta: 'View Testimonial',
  },
]

function getYoutubeEmbedUrl(url: string) {
  const trimmedUrl = url.trim()
  if (!trimmedUrl) return ''

  const match =
    trimmedUrl.match(/youtu\.be\/([^?&/]+)/) ||
    trimmedUrl.match(/[?&]v=([^?&/]+)/) ||
    trimmedUrl.match(/youtube\.com\/embed\/([^?&/]+)/) ||
    trimmedUrl.match(/youtube\.com\/shorts\/([^?&/]+)/)

  return match ? `https://www.youtube.com/embed/${match[1]}` : trimmedUrl
}

export function GraduationVideosSection() {
  return (
    <section id="client-graduation-stories" className="bg-cream py-14 lg:py-20">
      <div className="w-full px-8 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-accent font-semibold uppercase tracking-[0.22em] text-sm mb-4">
                <GraduationCap className="w-5 h-5" aria-hidden="true" />
                Real Client Videos
              </div>
              <h2
                className="text-4xl lg:text-5xl text-navy mb-4"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Client Graduation Stories
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                Watch real women share what changed in their health, habits, strength, confidence,
                and relationship with food through The 8th Element journey.
              </p>
            </div>
            <a
              href={ASSESSMENT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex max-w-full items-center justify-center px-7 py-3 bg-gold text-navy font-bold rounded-full hover:bg-navy hover:text-white transition-all duration-200 min-h-12 text-center leading-snug whitespace-normal sm:px-8"
            >
              Book Your Appointment Today
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {graduationVideos.map((video) => {
              const embedUrl = getYoutubeEmbedUrl(video.youtubeUrl)

              return (
                <article
                  key={video.title}
                  className="bg-white border border-gold/30 rounded-lg overflow-hidden shadow-sm"
                >
                  <div className="aspect-video bg-navy/95">
                    <iframe
                      className="w-full h-full"
                      src={embedUrl}
                      title={`${video.title} graduation story`}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                      <h3
                        className="text-xl text-navy"
                        style={{ fontFamily: 'var(--font-playfair)' }}
                      >
                        {video.title}
                      </h3>
                      <span
                        className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] ${
                          video.faceVisibility === 'shown'
                            ? 'bg-gold/20 text-navy'
                            : 'bg-navy/10 text-muted'
                        }`}
                      >
                        {video.faceVisibility === 'shown' ? 'Client video' : 'Privacy protected'}
                      </span>
                    </div>
                    <p className="text-muted leading-relaxed">{video.description}</p>
                    {video.storyHref ? (
                      <Link
                        href={video.storyHref}
                        className="mt-5 inline-flex items-center justify-center rounded-full border border-navy px-5 py-2.5 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-navy hover:text-white"
                      >
                        {video.storyCta ?? 'View Story'}
                      </Link>
                    ) : null}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
