import HeroImage from '../assets/me.png'
import HeroBgAnimation from '../components/animations/HeroBgAnimation'
import { motion } from 'motion/react'
import TypingText from '../components/ui/shadcn-io/typing-text'
import SocialMedia from '../components/animations/SocialMedia'
import { smoothScrollTo } from '../utils/smoothScroll'
import Resume from '../assets/Ahmed_Bakr_resume.pdf'

const HeroSection = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href')
    if (href?.startsWith('#')) {
      e.preventDefault()
      const target = href.slice(1)
      smoothScrollTo(target, 800)
    }
  }

  return (
    <section id='hero' className='hero-radial'>
      <div className='flex flex-col md:flex-row items-center min-h-screen md:h-screen overflow-hidden'>
        <div className='w-full h-[50vh] md:w-1/2 md:h-full'>
          <div className='flex flex-col items-start justify-center h-full hero-left'>
            <div className='flex justify-center items-center gap-3'>
              <motion.span
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 1.2, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: 'mirror'
                }}
                className='inline-block w-2 h-2 rounded-full'
                style={{ backgroundColor: 'var(--accent)' }}
              />
              <span className='text-sm md:text-base font-medium text-muted'>
                Hello.
              </span>
            </div>

            <div className='flex items-center mt-4 md:mt-6'>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '3rem' }}
                transition={{ duration: 1 }}
                className='h-0.5 w-12 bg-accent mr-4 hidden md:block'
              />
              <h2 className='text-xl md:text-2xl text-muted'>
                I'm{' '}
                <span className='ml-2 text-(--text) font-medium'>
                  Ahmed Bakr
                </span>
              </h2>
            </div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className='text-3xl md:text-5xl lg:text-6xl font-extrabold mt-4 leading-tight'
            >
              Software Engineer
            </motion.h1>

            {/* <p className='text-base md:text-lg mt-4 mb-6 text-muted max-w-lg'>
                I build digital products and experiences: web apps, components and polished UIs.
              </p> */}

            <TypingText
              text={['I build digital products: web apps, and polished UIs.']}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter='|'
              className='text-base md:text-lg mt-4 mb-6 text-muted max-w-lg'
              // textColors={['#3b82f6', '#8b5cf6', '#06b6d4']}
              variableSpeed={{ min: 10, max: 30 }}
            />

            <SocialMedia viewOnce={true} />

            <div className='flex items-center gap-4 mt-6'>
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                href='#contact'
                onClick={handleClick}
                className='btn-primary cursor-target font-semibold'
              >
                Got a project?
              </motion.a>

              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                href={Resume}
                className='btn-secondary cursor-target font-semibold'
              >
                My resume
              </motion.a>
            </div>
          </div>
        </div>
        <div className='w-full h-[50vh] flex justify-center items-center md:w-1/2 md:h-full relative'>
          <HeroBgAnimation img={HeroImage} />
        </div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 20, opacity: 1 }}
          exit={{ y: 10000, opacity: 0 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'mirror',
            delay: 5
          }}
          className='absolute bottom-8 md:bottom-12 left-1/2 flex flex-col items-center'
        >
          <span className='text-sm text-muted mb-2'>Scroll Down</span>
          <div>
            <div className='w-6 h-10 border-2 border-muted rounded-full flex justify-center items-start p-1'>
              <div className='w-2 h-2 bg-muted rounded-full mb-1'></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
