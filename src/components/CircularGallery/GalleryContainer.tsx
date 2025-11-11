import { motion, MotionValue } from 'framer-motion'
import { GalleryItem } from './GalleryItem'

interface GalleryContainerProps {
  rotation: MotionValue<number>
  radius: number
  parentSize: number
  images: Array<{ src: React.ReactNode; label: string }>
  cardWidth: number
  cardHeight: number
}

export function GalleryContainer({
  rotation,
  radius,
  parentSize,
  images,
  cardWidth,
  cardHeight
}: GalleryContainerProps) {
  const angleStep = 360 / images.length

  return (
    <motion.div
      className="absolute"
      style={{
        width: `${parentSize}px`,
        height: `${parentSize}px`,
        left: '50%',
        bottom: `-${radius}px`,
        translateX: '-50%',
        rotate: rotation,
        transformOrigin: `${radius}px ${radius}px`
      }}
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
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
        />
      ))}
    </motion.div>
  )
}
