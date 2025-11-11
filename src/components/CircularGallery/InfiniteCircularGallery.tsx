import { GalleryContainer } from './GalleryContainer'
import { useCircularGallery } from './useCircularGallery'
import React, { useState, useCallback } from 'react'

export interface InfiniteCircularGalleryProps {
  images: Array<{ src: React.ReactNode; label: string }>
  radius?: number
  cardWidth?: number
  cardHeight?: number
  speedDegPerSec?: number
  respectReducedMotion?: boolean
}

export default function InfiniteCircularGallery({
  images,
  radius,
  cardWidth = 80,
  cardHeight = 130,
  speedDegPerSec = 12,
  respectReducedMotion = true
}: InfiniteCircularGalleryProps) {
  const [paused, setPaused] = useState(false)
  const handlePause = useCallback(() => setPaused(true), [])
  const handleResume = useCallback(() => setPaused(false), [])

  const { rotation, containerRef, radius: computedRadius } = useCircularGallery({
    radiusProp: radius,
    cardWidth,
    cardHeight,
    speedDegPerSec,
    paused,
    respectReducedMotion
  })

  const parentSize = computedRadius * 2

  return (
    <div
      ref={containerRef}
      className="absolute bottom-0 w-screen left-1/2 -translate-x-1/2 h-full overflow-hidden pointer-events-auto"
    >
      <GalleryContainer
        rotation={rotation}
        radius={computedRadius}
        parentSize={parentSize}
        images={images}
        cardWidth={cardWidth}
        cardHeight={cardHeight}
        onHover={handlePause}
        onUnhover={handleResume}
      />
    </div>
  )
}

