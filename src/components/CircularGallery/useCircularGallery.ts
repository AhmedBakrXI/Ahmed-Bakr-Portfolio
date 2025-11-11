import { useRef, useState, useEffect } from 'react'
import { useMotionValue, useAnimationFrame } from 'framer-motion'

// Helper to clamp angle to 0-360 range
const clamp360 = (deg: number) => deg % 360

interface UseCircularGalleryProps {
  radiusProp?: number
  cardWidth?: number
  cardHeight?: number
  speedDegPerSec?: number
}

export function useCircularGallery({
  radiusProp,
  cardWidth = 80,
  cardHeight = 130,
  speedDegPerSec = 12
}: UseCircularGalleryProps = {}) {
  const rotation = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [radius, setRadius] = useState(radiusProp ?? 260)
  const reduceMotion = useRef(false)

  // Respect reduced motion preference
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    const setPref = () => (reduceMotion.current = mql.matches)
    setPref()
    const handler = (e: MediaQueryListEvent) => (reduceMotion.current = e.matches)
    mql.addEventListener?.('change', handler)
    return () => mql.removeEventListener?.('change', handler)
  }, [])

  // Auto rotation (frame-based)
  useAnimationFrame((_, delta) => {
    if (reduceMotion.current) return
    const next = clamp360(rotation.get() + (delta / 1000) * speedDegPerSec)
    rotation.set(next)
  })

  // Responsive radius based on container width/height
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const compute = () => {
      const w = el.clientWidth
      const h = el.clientHeight
      const margin = 32
      const rMaxWidth = w / 2 - cardWidth / 2 - margin
      const rMaxHeight = h / 2 - cardHeight / 2 - margin
      const computedRadius = Math.max(150, Math.min(rMaxWidth, rMaxHeight, 520)) + 50
      // Use prop if provided, otherwise use computed responsive value
      setRadius(radiusProp ?? computedRadius)
    }
    compute()
    const ro = new ResizeObserver(compute)
    ro.observe(el)
    return () => ro.disconnect()
  }, [radiusProp, cardWidth, cardHeight])

  return {
    rotation,
    containerRef,
    radius,
    cardWidth,
    cardHeight
  }
}
