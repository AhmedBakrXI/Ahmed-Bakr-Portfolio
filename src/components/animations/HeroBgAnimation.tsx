import { motion } from 'framer-motion'
import { useState } from 'react'

type HeroSVGAnimationProps = {
  onComplete?: () => void
}

const HeroSVGAnimation = ({ onComplete }: HeroSVGAnimationProps) => {
  const [done, setDone] = useState(false)
  return (
    <motion.svg
      width='100%'
      height='100%'
      viewBox='0 0 820 832'
      preserveAspectRatio='xMidYMid slice'
      style={{ height: '100%', width: 'auto' }}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      {!done ? (
        <>
          <motion.path
            d='M191 262.872L281.957 221.425L305 211V246.853C305 247.463 256.894 268.466 232.84 278.891L305 295.673V330L191 295.673V262.872Z'
            stroke='var(--accent)'
            strokeWidth='12'
            fill='none'
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.12 }}
          />

          <motion.path
            d='M794.72 740.943L719.938 767.19L701 773.777L704.428 744.017C704.486 743.511 743.95 730.391 763.674 723.894L709.095 703.493L712.377 675L797.856 713.716L794.72 740.943Z'
            stroke='var(--accent)'
            strokeWidth='12'
            fill='none'
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.42 }}
          />

          <motion.path
            d='M676.862 772.554L692.566 670.353L688.914 662.35L671.613 779.161L676.862 772.554Z'
            stroke='var(--accent)'
            strokeWidth='6'
            fill='none'
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.72 }}
            onAnimationComplete={() => {
              setDone(true)
              if (onComplete) onComplete()
            }}
          />
        </>
      ) : (
        <>
          {/* Render original static SVG paths after animation completes */}
          <path
            d='M191 262.872L281.957 221.425L305 211V246.853C305 247.463 256.894 268.466 232.84 278.891L305 295.673V330L191 295.673V262.872Z'
            stroke='var(--accent)'
            strokeWidth='12'
            fill='none'
          />
          <path
            d='M794.72 740.943L719.938 767.19L701 773.777L704.428 744.017C704.486 743.511 743.95 730.391 763.674 723.894L709.095 703.493L712.377 675L797.856 713.716L794.72 740.943Z'
            stroke='var(--accent)'
            strokeWidth='12'
            fill='none'
          />
          <path
            d='M676.862 772.554L692.566 670.353L688.914 662.35L671.613 779.161L676.862 772.554Z'
            stroke='var(--accent)'
            strokeWidth='6'
            fill='none'
          />
        </>
      )}
    </motion.svg>
  )
}

interface HeroBgAnimationProps {
  img: string
}

const HeroBgAnimation = (props: HeroBgAnimationProps) => {
  const [imageVisible, setImageVisible] = useState(false)

  return (
    <div className='relative w-full h-full'>
      <div className='absolute inset-0 overflow-hidden flex items-center justify-center'>
        <div className='flex justify-center h-full w-full' style={{ transform: 'translateX(-4%)' }}>
          <HeroSVGAnimation onComplete={() => setImageVisible(true)} />
        </div>
      </div>
      <div className='absolute inset-0 overflow-hidden flex items-end justify-center'>
        <motion.img
          src={props.img}
          alt='Background'
          className=' w-2/3 h-auto min-h-full object-contain object-bottom'
          initial={{ y: 40, opacity: 0, scale: 0.98 }}
          animate={imageVisible ? { y: 0, opacity: 1, scale: 1 } : { y: 40, opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.6, ease: [0.2, 0.8, 0.2, 1], delay: 0.08 }}
        />
      </div>
    </div>
  )
}

export default HeroBgAnimation
