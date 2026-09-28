'use client'

import { useEffect, useState } from 'react'
import { Play, X } from 'lucide-react'

function getYoutubeId(url: string) {
  const match =
    url.match(/youtu\.be\/([^?&/]+)/) ||
    url.match(/[?&]v=([^?&/]+)/) ||
    url.match(/youtube\.com\/embed\/([^?&/]+)/) ||
    url.match(/youtube\.com\/shorts\/([^?&/]+)/)
  return match ? match[1] : ''
}

type Props = {
  title: string
  youtubeUrl: string
}

export function GraduationVideoPlayer({ title, youtubeUrl }: Props) {
  const [open, setOpen] = useState(false)
  const id = getYoutubeId(youtubeUrl)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  if (!id) return null

  const embedSrc = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&controls=0&modestbranding=1&rel=0&fs=0&disablekb=1&iv_load_policy=3&playsinline=1`

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block aspect-video w-full overflow-hidden bg-navy"
        aria-label={`Play ${title} graduation story`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)` }}
        />
        <span className="absolute inset-0 bg-navy/30 transition-colors group-hover:bg-navy/45" />
        <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Play size={26} className="ml-1" aria-hidden="true" />
        </span>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} graduation story`}
          onClick={() => setOpen(false)}
        >
          <div className="relative w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-navy transition-colors hover:bg-white"
              aria-label="Close video"
            >
              <X size={20} />
            </button>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black shadow-2xl">
              <iframe
                className="h-full w-full"
                src={embedSrc}
                title={`${title} graduation story`}
                allow="autoplay; encrypted-media; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black to-transparent" aria-hidden="true" />
              <div className="absolute bottom-0 right-0 h-14 w-40 bg-black" aria-hidden="true" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
