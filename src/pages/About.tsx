import { motion, type Variants } from 'motion/react'
import ResumePhoto from '../assets/me-square.png'
import { MdOutlineDownload } from 'react-icons/md'
import STLogo from '../assets/st.png'
import ETGLogo from '../assets/etg.png'
import SiemensLogo from '../assets/siemens.png'

const ResumeCard = () => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        when: 'beforeChildren',
        delayChildren: 0.15
      }
    }
  }

  const rowTopVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } }
  }

  const rowBottomVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.65 } }
  }

  const barVariants: Variants = {
    hidden: { opacity: 0, scaleX: 0 },
    show: {
      opacity: 1,
      scaleX: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  const ctaVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 6 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut', delay: 0.5 }
    }
  }

  return (
    <div className='flex-1 flex items-center justify-center'>
      <motion.div
        variants={cardVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='flex flex-col justify-start items-center bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-2xl h-96 w-72 rounded-2xl'
      >
        <div className='flex flex-col justify-start items-center'>
          <h2 className='text-xl font-semibold mb-4 text-accent'>
            Ahmed Bakr CV
          </h2>
        </div>
        <motion.div
          variants={rowTopVariants}
          className='w-full h-24 py-2 flex items-center justify-around border-b-2'
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            variants={{
              show: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
            }}
            className='skeleton-bg rounded-2xl overflow-clip'
          >
            <img src={ResumePhoto} alt='Resume Photo' className='h-16 w-16' />
          </motion.div>
          <motion.div
            variants={rowTopVariants}
            className='w-1/2 h-16 flex flex-col items-center justify-center gap-2'
          >
            <motion.div
              variants={barVariants}
              className='w-full h-4 rounded-full skeleton-bg'
              style={{ transformOrigin: 'left' }}
            />
            <motion.div
              variants={barVariants}
              className='w-full h-4 rounded-full skeleton-bg'
              style={{ transformOrigin: 'left' }}
            />
            <motion.div
              variants={barVariants}
              className='w-full h-4 rounded-full skeleton-bg'
              style={{ transformOrigin: 'left' }}
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={rowBottomVariants}
          className='w-full h-20 mt-2 py-2 border-b-2 flex flex-col items-start justify-center gap-2'
        >
          <motion.div
            variants={barVariants}
            className='w-full h-4 rounded-full skeleton-bg'
            style={{ transformOrigin: 'left' }}
          />
          <motion.div
            variants={barVariants}
            className='w-full h-4 rounded-full skeleton-bg'
            style={{ transformOrigin: 'left' }}
          />
          <motion.div
            variants={barVariants}
            className='w-3/4 h-4 rounded-full skeleton-bg'
            style={{ transformOrigin: 'left' }}
          />
        </motion.div>
        <div className='mt-4 px-4 py-2 flex-1 rounded-full cursor-pointer'>
          <div className='flex items-center justify-center h-20 w-20'>
            <motion.a
              variants={ctaVariants}
              href='/Ahmed_Bakr_Resume.pdf'
              download
              className='text-white bg-accent rounded-full p-4 font-medium text-2xl shadow-2xl'
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <MdOutlineDownload />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const About = () => {
  return (
    <section id='about' className='min-h-screen flex flex-col about-radial'>
      {/* Header */}
      <div className='relative z-10 w-full flex flex-col items-center mt-32'>
        <div className='inline-block'>
          <h1 className='text-4xl font-bold'>About Me</h1>
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

      {/* Content */}
      <div className='flex-1 w-full flex items-center'>
        <div className='relative z-10 mx-auto text-lg md:text-xl flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 hero-left'>
          <div className='flex-1 flex flex-col gap-3 text-center md:text-left py-4'>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
              viewport={{ once: false, amount: 0.1 }}
              className='text-3xl font-bold mb-2'
            >
              I'm <span className='text-accent'>Ahmed Bakr</span>,
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
              viewport={{ once: false, amount: 0.1 }}
              className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-4'
            >
              a Computer Engineering graduate from Ain Shams University.
            </motion.h3>

            <motion.p 
            initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
              viewport={{ once: true, amount: 0.1 }}
            className='leading-relaxed'>
              I’m currently a Software Engineer at{' '}
              <span className='inline-flex items-center gap-1'>
                <img
                  src={ETGLogo}
                  alt='ETG'
                  className='w-6 h-6 rounded-sm object-contain'
                />
                <span className='font-semibold text-accent'>ETG</span>
              </span>
              , and I was a SW intern at{' '}
              <span className='inline-flex items-center gap-1'>
                <img
                  src={SiemensLogo}
                  alt='Siemens'
                  className='w-6 h-6 rounded-sm object-contain'
                />
                <span className='font-semibold text-accent'>Siemens</span>
              </span>
              . My graduation project was proudly sponsored by{' '}
              <span className='inline-flex items-center gap-1'>
                <img
                  src={STLogo}
                  alt='STMicroelectronics'
                  className='w-6 h-6 rounded-sm object-contain'
                />
                <span className='font-semibold text-accent'>
                  STMicroelectronics
                </span>
              </span>
              .
            </motion.p>

            <motion.p 
            initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
              viewport={{ once: true, amount: 0.1 }}
            className='mt-2 leading-relaxed'>
              I’m passionate about{' '}
              <span className='text-accent font-semibold'>
                Java development
              </span>{' '}
              and love building efficient, reliable, and elegant software
              solutions.
            </motion.p>
          </div>

          <ResumeCard />
        </div>
      </div>
    </section>
  )
}

export default About
