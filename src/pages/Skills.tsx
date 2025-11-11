import InfiniteCircularGallery, { type InfiniteCircularGalleryProps } from '../components/CircularGallery/InfiniteCircularGallery'
import { motion } from 'framer-motion'

import {
  SiSpring,
  SiReact,
  SiQt,
  SiAndroid,
  SiFlutter,
  SiFastapi 
} from 'react-icons/si'

const galleryProps: InfiniteCircularGalleryProps = {
  images: [
    { src: <SiSpring size={80} className='hover:drop-shadow-[#87bd48]' />, label: 'Spring' },
    { src: <SiReact size={80} />, label: 'React' },
    { src: <SiQt size={80} />, label: 'Qt' },
    { src: <SiAndroid size={80} />, label: 'Android' },
    { src: <SiFlutter size={80} />, label: 'Flutter' },
    { src: <SiFastapi size={80} />, label: 'FastAPI' }
  ],
  radius: 250,
  cardWidth: 80,
  cardHeight: 130,
  speedDegPerSec: 12
  ,respectReducedMotion: false
}

const Skills = () => {
  return (
    <section className='relative h-screen flex flex-col overflow-hidden'>
      {/* Decorative blurry circles */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 md:-top-32 md:-right-32 w-[28rem] md:w-[36rem] aspect-square rounded-full bg-accent/20 blur-[140px] z-0" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 md:-bottom-32 md:-left-32 w-[28rem] md:w-[36rem] aspect-square rounded-full bg-accent/20 blur-[140px] z-0" />

      <div className='relative z-10 w-full flex flex-col items-center justify-center'>
        <div className="inline-block">
          <h1 className='text-4xl font-bold mt-32 md:mt-32'>Skills Page</h1>
            <motion.div
              className='h-1 bg-accent mt-2'
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{ transformOrigin: 'center' }}
            />
        </div>
      </div>
      <div className='relative z-10 w-full h-full'>
        <InfiniteCircularGallery {...galleryProps} />
      </div>
    </section>
  )
}
export default Skills
