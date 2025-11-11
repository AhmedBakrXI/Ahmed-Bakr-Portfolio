import { motion, MotionValue, useTransform } from 'framer-motion'
import { FiMousePointer } from 'react-icons/fi'
import { GalleryItem } from './GalleryItem'

interface GalleryContainerProps {
  rotation: MotionValue<number>
  radius: number
  parentSize: number
  images: Array<{ src: React.ReactNode; label: string; yoe?: number; about?: string }>
  cardWidth: number
  cardHeight: number
  onHover?: () => void
  onUnhover?: () => void
  onItemClick?: (item: { src: React.ReactNode; label: string; yoe?: number; about?: string }) => void
}

export function GalleryContainer({
  rotation,
  radius,
  parentSize,
  images,
  cardWidth,
  cardHeight,
  onHover,
  onUnhover,
  onItemClick
}: GalleryContainerProps) {
  const angleStep = 360 / images.length
  // Counter-rotate overlay text so it stays upright
  const counterRotation = useTransform(rotation, (v) => -v)

  return (
    <motion.div
      className="absolute rounded-full "
      style={{
        width: `${parentSize}px`,
        height: `${parentSize}px`,
        left: `calc(50% - ${radius}px)`,
        bottom: `-${radius}px`,
        rotate: rotation,
        transformOrigin: `${radius}px ${radius}px`
      }}
    >
      {/* Center overlay helper text */}
      <motion.div className="pointer-events-none absolute inset-0 flex items-center justify-center pb-4" style={{ rotate: counterRotation }}>
        <motion.div
          className="select-none flex flex-col items-center -translate-y-16 text-base md:text-lg font-semibold gap-1"
          animate={{ y: [0, -44, 0], scale: [1, 1, 1] }}
          transition={{ duration: 0.0, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiMousePointer className="h-6 w-6 md:h-7 md:w-7 text-accent" />
          <span>Click any icon</span>
        </motion.div>
      </motion.div>
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
          onClick={() => onItemClick?.(item)}
        />
      ))}
    </motion.div>
  )
}
