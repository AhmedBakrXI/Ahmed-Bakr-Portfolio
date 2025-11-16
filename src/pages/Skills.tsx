import InfiniteCircularGallery, {
  type InfiniteCircularGalleryProps
} from '../components/CircularGallery/InfiniteCircularGallery'
import { motion } from 'framer-motion'
import { FaJava } from 'react-icons/fa6'

import {
  SiSpring,
  SiReact,
  SiQt,
  SiFastapi,
  SiDocker,
  SiPostgresql,
  SiRedis,
  SiMongodb
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
        src: <SiPostgresql size={80} />,
        label: 'PostgreSQL',
        yoe: 3,
        about: 'Designing and managing relational databases using PostgreSQL.'
    },
    {
        src: <SiRedis size={80} />,
        label: 'Redis',
        yoe: 2,
        about: 'In-memory data structure store used as a database, cache, and message broker.'
    },
    {
      src: <SiFastapi size={80} />,
      label: 'FastAPI',
      yoe: 1,
      about: 'High‑performance Python APIs with FastAPI and Pydantic.'
    },
    {
        src: <FaJava size={80} />,
        label: 'Java',
        yoe: 4,
        about: 'Extensive experience in building scalable applications using Java.'
    },
    {
        src: <SiDocker size={80} />,
        label: 'Docker',
        yoe: 1,
        about: 'Containerizing applications for consistent environments and easy deployment.'
    },
    {
        src:  <SiMongodb size={80} />,
        label: 'MongoDB',
        yoe: 2,
        about: 'NoSQL database for flexible, scalable document storage.'
    },
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
          <h1 className='text-4xl font-bold mt-32 md:mt-32'>My Skills</h1>
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
