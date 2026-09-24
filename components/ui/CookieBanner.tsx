'use client'

export function CookieBanner() {
  return (
    <div
      id="cookie-banner"
      className="fixed bottom-0 left-0 right-0 z-40 bg-dark text-white px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm"
      style={{ display: 'none' }}
    >
      <p className="text-center sm:text-left">
        We use cookies to improve your experience. By continuing, you agree to our{' '}
        <a href="/privacy" className="underline text-gold">Privacy Policy</a>.
      </p>
      <button
        className="shrink-0 bg-gold text-dark font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity min-h-[44px]"
        onClick={() => {
          const el = document.getElementById('cookie-banner')
          if (el) el.style.display = 'none'
          localStorage.setItem('cookies-accepted', 'true')
        }}
      >
        Accept
      </button>
    </div>
  )
}
