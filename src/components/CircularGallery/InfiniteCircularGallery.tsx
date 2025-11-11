import { GalleryContainer } from './GalleryContainer'
import { useCircularGallery } from './useCircularGallery'

export interface InfiniteCircularGalleryProps {
  images: Array<{ src: React.ReactNode; label: string }>
  radius?: number
  cardWidth?: number
  cardHeight?: number
  speedDegPerSec?: number
}

export default function InfiniteCircularGallery({
  images,
  radius,
  cardWidth = 80,
  cardHeight = 130,
  speedDegPerSec = 12
}: InfiniteCircularGalleryProps) {
  const { rotation, containerRef, radius: computedRadius } = useCircularGallery({
    radiusProp: radius,
    cardWidth,
    cardHeight,
    speedDegPerSec
  })

  const parentSize = computedRadius * 2

  return (
    <div
      ref={containerRef}
      className="absolute bottom-0 w-screen left-1/2 -translate-x-[47.5%] h-full overflow-hidden pointer-events-auto"
    >
      <GalleryContainer
        rotation={rotation}
        radius={computedRadius}
        parentSize={parentSize}
        images={images}
        cardWidth={cardWidth}
        cardHeight={cardHeight}
      />
    </div>
  )
}

