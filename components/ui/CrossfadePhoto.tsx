'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'

type Props = {
  frontSrc: string
  frontAlt: string
  frontPosition?: string
  backSrc: string
  backAlt: string
  backPosition?: string
  sizes: string
  className?: string
}

export function CrossfadePhoto({
  frontSrc,
  frontAlt,
  frontPosition = 'center',
  backSrc,
  backAlt,
  backPosition = 'center',
  sizes,
  className = '',
}: Props) {
  const [showBack, setShowBack] = useState(false)
  const pointerType = useRef('mouse')

  return (
    <div
      className={`relative cursor-pointer overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-black/10 ${className}`}
      onPointerDown={(event) => {
        pointerType.current = event.pointerType
      }}
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') setShowBack(true)
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === 'mouse') setShowBack(false)
      }}
      onClick={() => {
        if (pointerType.current !== 'mouse') setShowBack((value) => !value)
      }}
    >
      <Image src={frontSrc} alt={frontAlt} fill sizes={sizes} className="object-cover" style={{ objectPosition: frontPosition }} />
      <Image
        src={backSrc}
        alt={backAlt}
        fill
        sizes={sizes}
        className={`object-cover transition-opacity duration-700 ease-in-out ${showBack ? 'opacity-100' : 'opacity-0'}`}
        style={{ objectPosition: backPosition }}
        aria-hidden={!showBack}
      />
    </div>
  )
}
