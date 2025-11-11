import React from 'react'

interface GalleryItemProps {
  src: React.ReactNode
  label: string
  index: number
  angleStep: number
  radius: number
  cardWidth: number
  cardHeight: number
  totalImages: number
}

export function GalleryItem({
  src,
  label,
  index,
  angleStep,
  radius,
  cardWidth,
  cardHeight,
  totalImages
}: GalleryItemProps) {
  const baseAngleDeg = angleStep * index
  const theta = (baseAngleDeg * Math.PI) / 180
  const x = Math.cos(theta) * radius
  const y = Math.sin(theta) * radius

  const leftPx = radius + x - cardWidth / 2
  const topPx = radius - y - cardHeight / 2

  // Dynamic rotation formula based on number of images
  // Each card's bottom points toward the center of the circle
  const cardRotation = -(baseAngleDeg) + 90;

  const midIndex = (totalImages - 1) / 2
  const zIndex = Math.round(100 - Math.abs(index - midIndex))

  return (
    <div
      className="absolute rounded-xl overflow-hidden cursor-target"
      style={{
        width: `${cardWidth}px`,
        height: `${cardHeight}px`,
        left: `${leftPx}px`,
        top: `${topPx}px`,
        zIndex,
        transform: `rotate(${cardRotation}deg)`,
        transformOrigin: `center bottom`
      }}
    >
      {/* <img
        src={src}
        alt={label}
        className="w-full h-[85%] object-cover"
      /> */}
      {src}
      <p className="text-center text-white text-sm py-1">{label}</p>
    </div>
  )
}
