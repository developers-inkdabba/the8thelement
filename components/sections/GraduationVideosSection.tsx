import Link from 'next/link'
import { GraduationVideoPlayer } from '@/components/sections/GraduationVideoPlayer'
import { TestimonialLink } from '@/components/sections/TestimonialLink'
import { GraduationCap } from 'lucide-react'
import { ASSESSMENT_FORM_URL } from '@/lib/links'

type GraduationVideo = {
  title: string
  description: string
  youtubeUrl: string
  storyHref?: string
  storyCta?: string
  testimonialKey?: string
}

const graduationVideos: GraduationVideo[] = [
  {
    title: 'Dr. Priya Ravi',
    description:
      '60+, diabetes, stubborn weight, weakness, and knee pain. A client story about rebuilding health, strength, and confidence later in life.',
    youtubeUrl: 'https://youtu.be/mN6YrwRX_bg?si=mKC4W3Mi3vtpotQh',
    testimonialKey: 'dr-priya',
  },
  {
    title: 'Ramya Vadlamudi',
    description:
      '40+, perimenopause, busy professional in the US, stubborn weight, midsection fat, poor energy, mood changes, irritability, and inconsistent habits.',
    youtubeUrl: 'https://youtu.be/y7WO_dQ3FDo',
    testimonialKey: 'ramya',
  },
  {
    title: 'Vasanthi',
    description:
      '40+, perimenopause, stubborn weight, and midsection fat despite eating clean and strength training.',
    youtubeUrl: 'https://youtu.be/6b5nOmHlRdw',
  },
  {
    title: 'Abhilasha',
    description:
      '40+, perimenopause, busy professional, stubborn weight, confusion, mindset challenges, professional stress, and inconsistent food and exercise habits.',
    youtubeUrl: 'https://youtu.be/SJ1rMPZGpY0',
  },
  {
    title: 'Kriti',
    description:
      '40+, perimenopause, homemaker in Germany, stubborn weight, midsection fat, bloating, fibromyalgia, sleep issues, cravings, and heavy snacking.',
    youtubeUrl: 'https://youtu.be/iU3djHwO4PA',
    storyHref: '/success-stories#story-kriti',
    storyCta: 'Read Success Story',
  },
  {
    title: 'Sharmila Bansal Rao',
    description:
      '40+, perimenopause, Bharatanatyam dancer in Zurich, stubborn weight, midsection fat, and no progress despite moving more and eating less.',
    youtubeUrl: 'https://youtu.be/gX4QnV1PY48',
    storyHref: '/success-stories#story-sharmila',
    testimonialKey: 'sharmila',
    storyCta: 'Read Success Story',
  },
  {
    title: 'Sangeetha Arjun',
    description:
      '40, perimenopause, busy professional, cravings, stubborn weight, belly fat, bloating, body discomfort, and inconsistent food and exercise habits.',
    youtubeUrl: 'https://youtu.be/PUEDDOTy-m0',
  },
  {
    title: 'Aritu',
    description:
      '40+, perimenopause, busy professional in Zurich, cravings, stubborn weight, belly fat, bloating, body discomfort, and inconsistent habits.',
    youtubeUrl: 'https://youtu.be/omEPpVWtd_k',
    storyHref: '/success-stories#story-aritu',
    storyCta: 'Read Success Story',
  },
  {
    title: 'Kavitha',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/mDWyO5Lp9TQ',
    storyHref: '/success-stories#story-kavitha',
    testimonialKey: 'kavitha',
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
    testimonialKey: 'krithiga',
    storyCta: 'Read Success Story',
  },
  {
    title: 'Aishwarya',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/2JwLiFTVbsQ',
    storyHref: '/success-stories#story-aishwarya',
    testimonialKey: 'aishwarya',
    storyCta: 'Read Success Story',
  },
  {
    title: 'Mythily - Story 1',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/kSe-3FGu_kU',
    testimonialKey: 'mythily',
  },
  {
    title: 'Mythily - Story 2',
    description: 'Client graduation reflection from The 8th Element journey.',
    youtubeUrl: 'https://youtu.be/bcv07b9DE4o',
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
    testimonialKey: 'usha-kumar',
  },
  {
    title: 'Nirupa',
    description:
      'Busy professional and mom, PCOS overwhelm, and the shift to effortless consistency.',
    youtubeUrl: 'https://youtu.be/DgqUBJ24zec',
    storyHref: '/success-stories#story-nirupa-seshadri',
    storyCta: 'Read Success Story',
  },
  {
    title: 'Deva',
    description:
      '51, menopause, stubborn belly fat, high cholesterol, and overeating snacks.',
    youtubeUrl: 'https://youtu.be/uItCYP5PJ-I',
  },
  {
    title: 'Ranjitha',
    description:
      'UK-based doctor, perimenopause chaos, and the move to sustainable strength.',
    youtubeUrl: 'https://youtu.be/vvrUuCZNr7k',
  },
]

const groupGraduationCalls: GraduationVideo[] = [
  {
    title: 'Transform V1.0',
    description: 'Group coaching program graduation call.',
    youtubeUrl: 'https://youtu.be/glIBIn9hbSA',
  },
  {
    title: 'Transform & Thrive',
    description: 'Group graduation call with the Transform & Thrive cohort.',
    youtubeUrl: 'https://youtu.be/FF9IPD34ckM',
  },
]

function VideoCard({ video }: { video: GraduationVideo }) {
  return (
    <article className="bg-white border border-gold/30 rounded-lg overflow-hidden shadow-sm">
      <GraduationVideoPlayer title={video.title} youtubeUrl={video.youtubeUrl} />
      <div className="p-6">
        <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
          <h3 className="text-xl text-navy" style={{ fontFamily: 'var(--font-playfair)' }}>
            {video.title}
          </h3>
        </div>
        <p className="text-muted leading-relaxed">{video.description}</p>
        {video.testimonialKey || video.storyHref ? (
          <div className="mt-5 flex flex-wrap gap-3">
            {video.storyHref ? (
              <Link
                href={video.storyHref}
                className="inline-flex items-center justify-center rounded-full border border-navy px-5 py-2.5 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-navy hover:text-white"
              >
                {video.storyCta ?? 'View Story'}
              </Link>
            ) : null}
            {video.testimonialKey ? <TestimonialLink testimonialKey={video.testimonialKey} /> : null}
          </div>
        ) : null}
      </div>
    </article>
  )
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
            {graduationVideos.map((video) => (
              <VideoCard key={video.title} video={video} />
            ))}
          </div>

          <div className="mt-16">
            <h3
              className="text-3xl lg:text-4xl text-navy mb-3"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Group Graduation Calls
            </h3>
            <p className="text-muted text-lg leading-relaxed mb-8 max-w-2xl">
              Celebrate with our coaching cohorts as they wrap up their programs together.
            </p>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {groupGraduationCalls.map((video) => (
                <VideoCard key={video.title} video={video} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
