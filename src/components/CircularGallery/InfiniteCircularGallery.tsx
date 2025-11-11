import { GalleryContainer } from './GalleryContainer'
import { useCircularGallery } from './useCircularGallery'
import React, { useState, useCallback } from 'react'
import { ItemInfoModal } from './ItemInfoModal'

export interface InfiniteCircularGalleryProps {
  images: Array<{ src: React.ReactNode; label: string; yoe?: number; about?: string }>
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
  const [selected, setSelected] = useState<null | { src: React.ReactNode; label: string; yoe?: number; about?: string }>(null)
  const handlePause = useCallback(() => setPaused(true), [])
  const handleResume = useCallback(() => setPaused(false), [])
  const handleItemClick = useCallback((item: { src: React.ReactNode; label: string; yoe?: number; about?: string }) => {
    setSelected(item)
    setPaused(true)
  }, [])
  const handleCloseModal = useCallback(() => {
    setSelected(null)
    setPaused(false)
  }, [])

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
      className="absolute inset-x-0 bottom-0 w-full h-full overflow-hidden pointer-events-auto"
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
        onItemClick={handleItemClick}
      />
      <ItemInfoModal open={!!selected} item={selected ?? undefined} onClose={handleCloseModal} />
    </div>
  )
}

