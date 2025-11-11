import React from 'react'

interface GalleryItemProps {
  src: string
  label: string
  index: number
  angleStep: number
  radius: number
  cardWidth: number
  cardHeight: number
}

export function GalleryItem({
  src,
  label,
  index,
  angleStep,
  radius,
  cardWidth,
  cardHeight
}: GalleryItemProps) {
  const baseAngleDeg = angleStep * index
  const theta = (baseAngleDeg * Math.PI) / 180
  const x = Math.cos(theta) * radius
  const y = Math.sin(theta) * radius

  const leftPx = radius + x - cardWidth / 2
  const topPx = radius - y - cardHeight / 2

  const midIndex = 2.5 // (6 images - 1) / 2
  const zIndex = Math.round(100 - Math.abs(index - midIndex))

  return (
    <div
      className="absolute rounded-xl overflow-hidden bg-gray-800 shadow-xl border border-white/10"
      style={{
        width: `${cardWidth}px`,
        height: `${cardHeight}px`,
        left: `${leftPx}px`,
        top: `${topPx}px`,
        zIndex,
        transform: `rotate(${(baseAngleDeg - 90) * 0.8}deg)`
      }}
    >
      <img
        src={src}
        alt={label}
        className="w-full h-[85%] object-cover"
      />
      <p className="text-center text-white text-sm py-1">{label}</p>
    </div>
  )
}
