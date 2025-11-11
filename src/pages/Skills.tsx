import InfiniteCircularGallery, {
  type InfiniteCircularGalleryProps
} from '../components/CircularGallery/InfiniteCircularGallery'
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
    {
      src: <SiSpring size={80} className='hover:drop-shadow-[#87bd48]' />,
      label: 'Spring',
      yoe: 2,
      about:
        'Building robust backend services with Spring Boot, REST APIs, and Spring Security.'
    },
    {
      src: <SiReact size={80} />,
      label: 'React',
      yoe: 1,
      about:
        'Creating modern, accessible SPAs with React, TypeScript, and Framer Motion.'
    },
    {
      src: <SiQt size={80} />,
      label: 'Qt',
      yoe: 1,
      about: 'Developing cross‑platform desktop UIs and tooling with Qt.'
    },
    {
      src: <SiAndroid size={80} />,
      label: 'Android',
      yoe: 1,
      about: 'Native Android apps, Java, and smooth UI/UX.'
    },
    {
      src: <SiFlutter size={80} />,
      label: 'Flutter',
      yoe: 1,
      about: 'Cross‑platform mobile apps with Flutter and clean architecture.'
    },
    {
      src: <SiFastapi size={80} />,
      label: 'FastAPI',
      yoe: 1,
      about: 'High‑performance Python APIs with FastAPI and Pydantic.'
    }
  ],
  radius: 250,
  cardWidth: 80,
  cardHeight: 130,
  speedDegPerSec: 12,
  respectReducedMotion: false
}

const Skills = () => {
  return (
    <section id='skills' className='relative h-screen flex flex-col overflow-hidden skill-radial'>
      <div className='relative z-10 w-full flex flex-col items-center justify-center'>
        <div className='inline-block'>
          <h1 className='text-4xl font-bold mt-32 md:mt-32'>Skills Page</h1>
          <motion.div
            className='h-1 bg-accent mt-2 rounded-full'
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
