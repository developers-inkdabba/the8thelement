import type { Metadata } from 'next'
import { buildMeta } from '@/lib/metadata'

export const metadata: Metadata = buildMeta({
  title: 'Terms and Conditions',
  description:
    'Read the Terms and Conditions for using The 8th Element website and services.',
  alternates: { canonical: 'https://www.the8thelement.in/terms' },
})

const sections = [
  {
    title: 'General Conditions',
    body: [
      'We reserve the right to refuse service to anyone for any reason at any time.',
      'You understand that your content, not including credit card information, may be transferred unencrypted and involve transmissions over various networks and changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.',
      'You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, access to the Service, or any contact on the website through which the service is provided, without express written permission from us.',
      'The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.',
    ],
  },
  {
    title: 'Accuracy, Completeness and Timeliness of Information',
    body: [
      'We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon as the sole basis for making decisions without consulting primary, more accurate, complete or timely sources of information. Any reliance on the material on this site is at your own risk.',
      'This site may contain historical information. Historical information is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update information on our site. You agree that it is your responsibility to monitor changes to our site.',
    ],
  },
  {
    title: 'Modifications to the Service and Prices',
    body: [
      'Prices for our products are subject to change without notice.',
      'We reserve the right at any time to modify or discontinue the Service, or any part or content of it, without notice at any time. We shall not be liable to you or to any third party for any modification, price change, suspension or discontinuance of the Service.',
    ],
  },
  {
    title: 'User Comments, Feedback and Other Submissions',
    body: [
      'If, at our request, you send specific submissions, or without a request from us you send creative ideas, suggestions, proposals, plans or other materials, whether online, by email, by postal mail or otherwise, you agree that we may, at any time and without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us.',
      'We are under no obligation to maintain comments in confidence, to pay compensation for comments, or to respond to comments.',
      'We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion is unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene, otherwise objectionable, or violates any party\'s intellectual property or these Terms of Service.',
      'You agree that your comments will not violate any right of any third party, including copyright, trademark, privacy, personality, or other personal or proprietary right. You also agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or any computer virus or malware that could affect the operation of the Service or any related website.',
      'You may not use a false email address, pretend to be someone other than yourself, or otherwise mislead us or third parties about the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for comments posted by you or any third party.',
    ],
  },
  {
    title: 'Personal Information',
    body: [
      'Your submission of personal information through the store is governed by our Privacy Policy.',
    ],
  },
  {
    title: 'Errors, Inaccuracies and Omissions',
    body: [
      'Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability.',
      'We reserve the right to correct errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice, including after you have submitted your order.',
      'We undertake no obligation to update, amend or clarify information in the Service or on any related website, including pricing information, except as required by law. No specified update or refresh date should be taken to indicate that all information has been modified or updated.',
    ],
  },
  {
    title: 'Prohibited Uses',
    body: [
      'In addition to other prohibitions in these Terms of Service, you are prohibited from using the site or its content for any unlawful purpose; to solicit others to perform unlawful acts; to violate laws, rules or regulations; to infringe intellectual property rights; to harass, abuse, insult, harm, defame, slander, disparage, intimidate or discriminate; to submit false or misleading information; to upload or transmit viruses or malicious code; to collect or track personal information of others; to spam, phish, pharm, pretext, spider, crawl or scrape; for any obscene or immoral purpose; or to interfere with or circumvent security features of the Service or related websites.',
      'We reserve the right to terminate your use of the Service or any related website for violating any prohibited uses.',
    ],
  },
  {
    title: 'Disclaimer of Warranties; Limitation of Liability',
    body: [
      'We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free. We do not warrant that results obtained from use of the service will be accurate or reliable.',
      'You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.',
      'You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered through the service are provided "as is" and "as available" for your use, except as expressly stated by us, without any representation, warranties or conditions of any kind, either express or implied.',
      'In no case shall The 8th Element.in, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or direct, indirect, incidental, punitive, special or consequential damages of any kind arising from your use of the service or any products procured using the service.',
      'Because some states or jurisdictions do not allow the exclusion or limitation of liability for consequential or incidental damages, our liability in those states or jurisdictions shall be limited to the maximum extent permitted by law.',
    ],
  },
  {
    title: 'Indemnification',
    body: [
      'You agree to indemnify, defend and hold harmless The 8th Element and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees from any claim or demand, including reasonable attorneys\' fees, made by any third party due to or arising out of your breach of these Terms of Service or your violation of any law or the rights of a third party.',
    ],
  },
  {
    title: 'Severability',
    body: [
      'If any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed severed from these Terms of Service. This determination shall not affect the validity and enforceability of any remaining provisions.',
    ],
  },
  {
    title: 'Termination',
    body: [
      'The obligations and liabilities of the parties incurred prior to termination shall survive termination of this agreement for all purposes.',
      'These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.',
      'If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we may terminate this agreement at any time without notice. You will remain liable for amounts due up to and including the date of termination, and we may deny you access to our Services or any part of them.',
    ],
  },
  {
    title: 'Entire Agreement',
    body: [
      'Our failure to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.',
      'These Terms of Service and any policies or operating rules posted by us on this site or in respect to the Service constitute the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written.',
      'Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.',
    ],
  },
  {
    title: 'Governing Law',
    body: [
      'These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of India and the jurisdiction of Chennai, Tamil Nadu.',
    ],
  },
  {
    title: 'Changes to Terms of Service',
    body: [
      'You can review the most current version of the Terms of Service at any time on this page.',
      'We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of changes constitutes acceptance of those changes.',
    ],
  },
  {
    title: 'Contact Information',
    body: [
      'Questions about the Terms of Service should be sent to us at admin@the8thelement.in.',
    ],
  },
]

export default function TermsPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-14 text-center text-white">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <h1
            className="mb-4 text-4xl font-bold sm:text-5xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Terms and Conditions
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/75">
            Please read these Terms of Service carefully before accessing or using this website.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-4xl px-8 sm:px-12">
          <div className="mb-12 space-y-6 text-[1.05rem] leading-relaxed text-muted">
            <p>
              This website is operated by www.the8thelement.in. Throughout the site, the
              terms &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; refer to The8thelement.in. The 8th Element.in
              offers this website, including all information, tools and services available
              from this site to you, the user, conditioned upon your acceptance of all terms,
              conditions, policies and notices stated here.
            </p>
            <p>
              By visiting our site and/or purchasing something from us, you engage in our
              Service and agree to be bound by these Terms and Conditions, including
              additional terms, conditions and policies referenced herein or available by
              hyperlink. These Terms of Service apply to all users of the site, including
              browsers, vendors, customers, merchants and contributors of content.
            </p>
            <p>
              By accessing or using any part of the site, you agree to be bound by these
              Terms of Service. If you do not agree to all terms and conditions of this
              agreement, you may not access the website or use any services.
            </p>
            <p>
              Any new features or tools added to the current store shall also be subject to
              these Terms of Service. We reserve the right to update, change or replace any
              part of these Terms of Service by posting updates and/or changes to our
              website. Your continued use of or access to the website following the posting
              of changes constitutes acceptance of those changes.
            </p>
          </div>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <section key={section.title} aria-labelledby={`terms-section-${index + 1}`}>
                <h2
                  id={`terms-section-${index + 1}`}
                  className="mb-4 text-2xl font-bold text-navy"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Section {index + 1}: {section.title}
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
