import InfiniteCircularGallery  from '../components/CircularGallery/InfiniteCircularGallery'
import Item from '../assets/me.png'

const images: Array<{ src: string; label: string }> = [
  { src: Item, label: 'Ocean' },
  { src: Item, label: 'Palm Trees' },
  { src: Item, label: 'Bridge' },
  { src: Item, label: 'Desk Setup' },
  { src: Item, label: 'Waterfall' },
  { src: Item, label: 'Waterfall' }
]

const Skills = () => {
  return (
    <section className='relative h-screen flex flex-col overflow-hidden'>
      <div className='w-full flex items-start justify-center'>
        <h1 className='text-4xl font-bold mt-32 md:mt-32'>Skills Page</h1>
      </div>
      <div className='relative w-full h-full'>
        <InfiniteCircularGallery {...({ images, radius: 350 } as any)} />
      </div>
    </section>
  )
}
export default Skills
