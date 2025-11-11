import { motion, MotionValue } from 'framer-motion'
import { GalleryItem } from './GalleryItem'

interface GalleryContainerProps {
  rotation: MotionValue<number>
  radius: number
  parentSize: number
  images: Array<{ src: React.ReactNode; label: string }>
  cardWidth: number
  cardHeight: number
  onHover?: () => void
  onUnhover?: () => void
}

export function GalleryContainer({
  rotation,
  radius,
  parentSize,
  images,
  cardWidth,
  cardHeight,
  onHover,
  onUnhover
}: GalleryContainerProps) {
  const angleStep = 360 / images.length

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: `${parentSize}px`,
        height: `${parentSize}px`,
        left: `calc(50% - ${radius}px)`,
        bottom: `-${radius}px`,
        rotate: rotation,
        transformOrigin: `${radius}px ${radius}px`
      }}
    >
      {images.map((item, i) => (
        <GalleryItem
          key={i}
          src={item.src}
          label={item.label}
          index={i}
          angleStep={angleStep}
          radius={radius}
          cardWidth={cardWidth}
          cardHeight={cardHeight}
          totalImages={images.length}
          onHover={onHover}
          onUnhover={onUnhover}
        />
      ))}
    </motion.div>
  )
}
