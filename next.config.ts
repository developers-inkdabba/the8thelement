import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: false,
  },
  async redirects() {
    return [
      {
        source: '/the8elements',
        destination: '/menothrive',
        permanent: true,
      },
      {
        source: '/the-8th-element-story',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/programs',
        destination: '/menothrive',
        permanent: true,
      },
      {
        source: '/programmes',
        destination: '/menothrive',
        permanent: true,
      },
      {
        source: '/programs-old',
        destination: '/menothrive',
        permanent: true,
      },
      {
        source: '/testimonials',
        destination: '/success-stories',
        permanent: true,
      },
      {
        source: '/privacypolicy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/termsandconditions',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/terms-and-conditions',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/refundpolicy',
        destination: '/refunds-cancellation',
        permanent: true,
      },
      {
        source: '/refund-policy',
        destination: '/refunds-cancellation',
        permanent: true,
      },
      {
        source: '/refunds',
        destination: '/refunds-cancellation',
        permanent: true,
      },
      {
        source: '/refunds-and-cancellation-policy',
        destination: '/refunds-cancellation',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Content-Security-Policy',
            value: "base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'",
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ]
  },
}

export default nextConfig
