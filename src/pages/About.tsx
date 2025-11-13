import { motion } from 'motion/react'

const About = () => {
  return (
    <section
      id='about'
      className='min-h-screen flex flex-col items-start justify-start about-radial'
    >
      <div className='relative z-10 w-full flex flex-col items-center justify-start'>
        <div className='inline-block'>
          <h1 className='text-4xl font-bold mt-32 md:mt-32'>About</h1>
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
    </section>
  )
}

export default About
