import Link from 'next/link'
import { GraduationCap } from 'lucide-react'
import { ASSESSMENT_FORM_URL } from '@/lib/links'

type GraduationVideo = {
  title: string
  description: string
  youtubeUrl: string
  storyHref?: string
  storyCta?: string
}

const graduationVideos: GraduationVideo[] = [
  {
    title: "Bhuvana, 75 years (Srividya's mom)",
    description: "My mom's most recent update at 75 years: 12 kg lost, stronger movement, better stamina, improved blood sugar control, and renewed independence.",
    youtubeUrl: 'https://youtu.be/I-eVGKpUlKY',
    storyHref: '/success-stories#story-bhuvana-75-years-srividya-s-mom',
    storyCta: 'Read Success Story',
  },
  {
    title: 'Uthra Sankaran',
    description: '36, dancer: from self-doubt to self-trust, strength, confidence, and a deeper belief in her potential.',
    youtubeUrl: 'https://youtu.be/DNl_pZDI-ZA',
  },
  {
    title: 'Uthra Natarajan',
    description: '40+, perimenopause: nutrition, lifestyle, sleep, and stress management for a steadier midlife journey.',
    youtubeUrl: 'https://youtu.be/0OgPMpiqeZM',
  },
  {
    title: 'Megha Kaveri',
    description: '30+, South Indian in Switzerland: high cholesterol, stubborn weight, and building consistency across borders.',
    youtubeUrl: 'https://youtu.be/u3PYdrp5dP0',
  },
  {
    title: 'Subha Kannan',
    description: '51, perimenopause: stubborn weight, belly fat, and inconsistent eating patterns transformed with support.',
    youtubeUrl: 'https://youtu.be/uPye-9I2mIE',
  },
  {
    title: 'Lakshmi',
    description: '40+, perimenopause: stubborn weight, low energy, poor fitness, and inconsistent habits rebuilt step by step.',
    youtubeUrl: 'https://youtu.be/QU-vpNDHrTQ',
    storyHref: '/success-stories#story-lakshmi',
    storyCta: 'Read Success Story',
  },
  {
    title: 'Sujatha',
    description: '30+: stubborn weight, low energy, sleep, stress, fitness, and inconsistent habits improved through sustainable change.',
    youtubeUrl: 'https://youtu.be/l2RNyetlUNE',
  },
  {
    title: 'Smruti',
    description: '40+, perimenopause: stubborn midsection fat, strength, and consistency through the transformation journey.',
    youtubeUrl: 'https://youtu.be/FO0rDP8Y6vg',
  },
  {
    title: 'Srividya - Follow-Up',
    description: '40+, perimenopause: stubborn weight, poor fitness, energy, and inconsistent habits rebuilt with structure.',
    youtubeUrl: 'https://youtu.be/Mr3HwiME3_U',
  },
  {
    title: 'Maalavika',
    description: '30+: stubborn weight and inconsistent habits transformed through practical coaching and accountability.',
    youtubeUrl: 'https://youtu.be/7Wi8gBcpb-4',
  },
  {
    title: 'Transform V2.0 Graduation',
    description: 'A group graduation call celebrating the women of Transform & Thrive and their health, habit, and confidence wins.',
    youtubeUrl: 'https://youtu.be/2dPrkV50Ae8',
  },
  {
    title: 'Transform & Thrive Group Graduation',
    description: 'A group coaching graduation call with real reflections from women rebuilding strength, habits, and self-trust.',
    youtubeUrl: 'https://youtu.be/FF9IPD34ckM',
  },
  {
    title: 'Transform V1.0 Graduation',
    description: 'A group coaching graduation call from Transform V1.0, sharing client progress, confidence, and sustainable lifestyle change.',
    youtubeUrl: 'https://youtu.be/glIBIn9hbSA',
  },
  {
    title: 'Deva',
    description: '51, menopause, stubborn belly fat, high cholesterol, and overeating snacks.',
    youtubeUrl: 'https://youtu.be/uItCYP5PJ-I',
  },
  {
    title: 'Ranjitha',
    description: 'UK-based doctor: from perimenopause chaos to sustainable strength.',
    youtubeUrl: 'https://youtu.be/vvrUuCZNr7k',
  },
  {
    title: 'Nirupa',
    description: 'Busy professional and mom: from PCOS overwhelm to effortless consistency.',
    youtubeUrl: 'https://youtu.be/DgqUBJ24zec',
    storyHref: '/success-stories#story-nirupa-seshadri',
    storyCta: 'Read Success Story',
  },
  {
    title: 'Dr. Priya Ravi',
    description: '60+, diabetes, stubborn weight, weakness, and knee pain.',
    youtubeUrl: 'https://youtu.be/mN6YrwRX_bg?si=mKC4W3Mi3vtpotQh',
    storyHref: '/success-stories#testimonial-dr-priya',
    storyCta: 'View Testimonial',
  },
  {
    title: 'Ramya Vadlamudi',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/y7WO_dQ3FDo',
    storyHref: '/success-stories#testimonial-ramya',
    storyCta: 'View Testimonial',
  },
  {
    title: 'Vasanthi',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/6b5nOmHlRdw',
  },
  {
    title: 'Abhilasha',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/SJ1rMPZGpY0',
  },
  {
    title: 'Kriti',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/iU3djHwO4PA',
    storyHref: '/success-stories#story-kriti',
    storyCta: 'Read Success Story',
  },
  {
    title: 'Sharmila',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/gX4QnV1PY48',
    storyHref: '/success-stories#story-sharmila',
    storyCta: 'Read Success Story',
  },
  {
    title: 'Sangeetha',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/PUEDDOTy-m0',
    storyHref: '/success-stories#testimonial-sangeetha',
    storyCta: 'View Testimonial',
  },
  {
    title: 'Aritu',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/omEPpVWtd_k',
  },
  {
    title: 'Kavitha',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/mDWyO5Lp9TQ',
    storyHref: '/success-stories#story-kavitha',
    storyCta: 'Read Success Story',
  },
  {
    title: 'Rabini',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/WueJCoM22lA',
  },
  {
    title: 'Dr. Swetha',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/7xG1i2aUyUs',
  },
  {
    title: 'Kavitha Srinivas',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/OkEVOtI90G4',
  },
  {
    title: 'Krithiga',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/La9p67SeQJ8',
    storyHref: '/success-stories#story-krithiga',
    storyCta: 'Read Success Story',
  },
  {
    title: 'Aishwarya',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/2JwLiFTVbsQ',
    storyHref: '/success-stories#story-aishwarya',
    storyCta: 'Read Success Story',
  },
  {
    title: 'Mythily',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/kSe-3FGu_kU',
    storyHref: '/success-stories#testimonial-mythily',
    storyCta: 'View Testimonial',
  },
  {
    title: 'Mythily - Follow-Up',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/bcv07b9DE4o',
    storyHref: '/success-stories#testimonial-mythily',
    storyCta: 'View Testimonial',
  },
  {
    title: 'Radhika',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/ecXt1knC0J0',
  },
  {
    title: 'Swati',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/yldfb_yw-RI',
  },
  {
    title: 'Srividya',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/i2ywijDtY0k',
  },
  {
    title: 'Subashini',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/NbY1w5ivK7M',
  },
  {
    title: 'Swetha Vignesh',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/UCV3C2VW0-k',
    storyHref: '/success-stories#story-swetha-vignesh',
    storyCta: 'Read Success Story',
  },
  {
    title: 'Rekha',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/584kgxHPU7M',
  },
  {
    title: 'Jyotsna',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/BrQnZfQok50',
  },
  {
    title: 'Usha',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/Ay38J9mTIVY',
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
    <section id="client-graduation-stories" className="bg-cream py-20 lg:py-28">
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
                    <h3
                      className="text-xl text-navy mb-3"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {video.title}
                    </h3>
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
