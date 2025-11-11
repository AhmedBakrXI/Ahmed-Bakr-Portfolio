import InfiniteCircularGallery, { type InfiniteCircularGalleryProps } from '../components/CircularGallery/InfiniteCircularGallery'

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
    { src: <SiSpring size={80} />, label: 'Spring' },
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
}

const Skills = () => {
  return (
    <section className='relative h-screen flex flex-col overflow-hidden'>
      <div className='w-full flex items-start justify-center'>
        <h1 className='text-4xl font-bold mt-32 md:mt-32'>Skills Page</h1>
      </div>
      <div className='relative w-full h-full'>
        <InfiniteCircularGallery {...galleryProps} />
      </div>
    </section>
  )
}
export default Skills
