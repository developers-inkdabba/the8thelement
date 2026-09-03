import type { Metadata } from 'next'
import { buildMeta } from '@/lib/metadata'

export const metadata: Metadata = buildMeta({
  title: 'Privacy Policy',
  description:
    'Read The 8th Element Privacy Policy, including how personal data, cookies, analytics and advertising tools are used.',
  alternates: { canonical: 'https://www.the8thelement.in/privacy' },
})

const policySections = [
  {
    title: 'Introduction',
    body: [
      'Your privacy matters to us. This Privacy Policy explains how The 8th Element collects, uses and protects your personal information when you visit our website, engage with our content, or sign up for our programs and services.',
      'By using our website, you agree to the terms of this Privacy Policy.',
    ],
  },
  {
    title: 'Information We Collect',
    body: [
      'We may collect personal details such as your name, email address, phone number or other contact details that you share when you subscribe, sign up or contact us.',
      'We may collect usage data about how you interact with our website, including pages viewed, time spent and clicks.',
      'We use cookies and pixels, including the Meta/Facebook Pixel, to measure performance and deliver relevant ads.',
      'We may collect technical data such as browser type, IP address and device information.',
    ],
  },
  {
    title: 'How We Use Your Information',
    body: [
      'We use your data to communicate with you, including newsletters, free resources and updates.',
      'We use your data to improve website performance and user experience.',
      'We use your data to run targeted ads and measure results through Meta/Facebook, Instagram and other platforms.',
      'We use your data to respond to messages, comments or inquiries, and to fulfill legal or regulatory obligations.',
    ],
  },
  {
    title: 'Facebook (Meta) Pixel and Advertising',
    body: [
      'We use the Meta/Facebook Pixel and related tools to understand how visitors use our site and to deliver ads that may be relevant to you on Facebook, Instagram and partner sites.',
      'Meta may collect or receive information from our website and use it to provide measurement services and targeted advertising.',
      'You can learn more about how Facebook uses data at https://www.facebook.com/policy.php.',
      'You can adjust your Facebook ad preferences or opt out of targeted ads at any time in your Facebook account settings.',
    ],
  },
  {
    title: 'Cookies',
    body: [
      'Cookies are small data files placed on your device to improve your browsing experience.',
      'The 8th Element uses essential cookies for site functionality, analytics cookies to understand visitor behavior such as Google Analytics, and advertising cookies including Meta Pixel to personalize ads.',
      'You can accept or decline cookies through your browser settings or by using our cookie preference banner when you first visit our site.',
    ],
  },
  {
    title: 'Data Sharing',
    body: [
      'We do not sell your data.',
      'We may share limited information with advertising platforms such as Meta/Facebook and Google Ads for ad delivery and analytics.',
      'We may share limited information with email marketing providers, such as ConvertKit, MailerLite or similar services, for newsletters and resources.',
      'We may share limited information with service providers who help us operate our website or process payments securely.',
      'All partners we work with are required to protect your data and comply with privacy regulations.',
    ],
  },
  {
    title: 'Data Retention',
    body: [
      'We only keep your information as long as necessary to provide our services, fulfill legal obligations and maintain business records.',
      'You may request deletion of your data at any time by contacting us at admin@the8thelement.in.',
    ],
  },
  {
    title: 'Your Rights',
    body: [
      'Depending on where you live, you may have the right to access, correct or delete your personal information.',
      'You may have the right to withdraw consent for marketing at any time or opt out of data collection for advertising.',
      'To exercise any of these rights, email us at admin@the8thelement.in.',
    ],
  },
  {
    title: 'Security',
    body: [
      'The 8th Element takes reasonable steps to protect your data from unauthorized access, misuse or loss. However, no method of transmission over the internet is 100% secure.',
    ],
  },
  {
    title: 'Links to Other Sites',
    body: [
      'Our website may contain links to third-party websites. The 8th Element is not responsible for the privacy practices or content of those sites.',
    ],
  },
  {
    title: 'Updates to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. Updates will be posted on this page with the revised date at the top.',
    ],
  },
  {
    title: 'Contact Us',
    body: [
      'If you have any questions about this Privacy Policy or how we handle your data, please contact admin@the8thelement.in.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-navy pt-36 pb-20 text-center text-white">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <h1
            className="mb-4 text-4xl font-bold sm:text-5xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Privacy Policy
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/75">
            Effective Date: October 7, 2018
          </p>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-4xl px-8 sm:px-12">
          <div className="mb-12 grid gap-4 rounded-lg bg-cream p-6 text-[1.05rem] text-dark sm:grid-cols-2">
            <p>
              <span className="font-semibold text-navy">Business Name:</span> The 8th Element
            </p>
            <p>
              <span className="font-semibold text-navy">Website:</span>{' '}
              https://www.the8thelement.in
            </p>
            <p className="sm:col-span-2">
              <span className="font-semibold text-navy">Contact Email:</span>{' '}
              admin@the8thelement.in
            </p>
          </div>

          <div className="space-y-12">
            {policySections.map((section, index) => (
              <section key={section.title} aria-labelledby={`privacy-section-${index + 1}`}>
                <h2
                  id={`privacy-section-${index + 1}`}
                  className="mb-4 text-2xl font-bold text-navy"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {index + 1}. {section.title}
                </h2>
                <div className="space-y-4 text-[1.05rem] leading-relaxed text-muted">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
