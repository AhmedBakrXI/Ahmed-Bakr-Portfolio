import { motion } from 'motion/react'
import ResumePhoto from '../assets/me-square.png'
import{ MdOutlineDownload } from "react-icons/md";

const ResumeCard = () => {
  return (
    <div className='flex-1 flex items-center justify-center'>
      <div className='flex flex-col justify-start items-center bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-2xl h-96 w-72 rounded-2xl'>
        <div className='flex flex-col justify-start items-center'>
          <h2 className='text-xl font-semibold mb-4 text-accent'>Ahmed Bakr CV</h2>
        </div>
        <div className='w-full h-24 py-2 flex items-center justify-around border-b-2'>
          <div className='skeleton-bg rounded-2xl overflow-clip'>
            <img src={ResumePhoto} alt='Resume Photo' className='h-16 w-16' />
          </div>
          <div className='w-1/2 h-16 flex flex-col items-center justify-center gap-2'>
            <div className='w-full h-4 rounded-full skeleton-bg' />
            <div className='w-full h-4 rounded-full skeleton-bg' />
            <div className='w-full h-4 rounded-full skeleton-bg' />
          </div>
        </div>
        <div className='w-full h-20 mt-2 py-2 border-b-2 flex flex-col items-start justify-center gap-2'>
          <div className='w-full h-4 rounded-full skeleton-bg' />
          <div className='w-full h-4 rounded-full skeleton-bg' />
          <div className='w-3/4 h-4 rounded-full skeleton-bg' />
        </div>
        <div className='mt-4 px-4 py-2 flex-1 rounded-full cursor-pointer'>
          <div className='flex items-center justify-center h-20 w-20'>
            <a
              href='/Ahmed_Bakr_Resume.pdf'
              download
              className='text-white bg-accent rounded-full p-4 font-medium text-2xl shadow-2xl'
            >
              <MdOutlineDownload />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const About = () => {
  return (
    <section id='about' className='min-h-screen flex flex-col about-radial'>
      {/* Header */}
      <div className='relative z-10 w-full flex flex-col items-center mt-32'>
        <div className='inline-block'>
          <h1 className='text-4xl font-bold'>About</h1>
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
        <div className='relative z-10 mx-auto px-12 py-12 text-lg md:text-xl flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12'>
          <p className='flex-1'>
            Hello! I'm Abo 7iat, a passionate web developer with a knack for
            creating dynamic and responsive web applications. My journey into
            web development started a few years ago, and since then, I've been
            honing my skills in various technologies and frameworks.
          </p>
          <ResumeCard />
        </div>
      </div>
    </section>
  )
}

export default About
