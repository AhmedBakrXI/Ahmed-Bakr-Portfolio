import { motion } from 'motion/react'
import { Timeline } from 'primereact/timeline'
import { useEffect, useState } from 'react'
import STLogo from '../assets/st.png'
import ETGLogo from '../assets/etg.png'
import SiemensLogo from '../assets/siemens.png'
import ItiLogo from '../assets/iti.png'

const Experiences = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767.98px)')
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    setIsMobile(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  const events = [
    {
      status: 'Software Developer — ETG',
      date: 'Oct 2025 – Present',
      description:
        'Building React components and backend logic for JourneyAi, improving UI performance and API integrations.',
      logo: ETGLogo
    },
    {
      status: 'Graduation Project — STMicroelectronics',
      date: 'Sep 2024 - Jun 2025',
      description:
        'Built a ZigBee network visualization tool using Qt C++ and designed a UART-based communication protocol.',
      logo: STLogo
    },
    {
      status: 'Software Intern — Siemens Digital Industries Software',
      date: 'Jul 2024 – Dec 2024',
      description:
        'Trained in software architecture, OOAD, clean code, SDLC methodologies, and developed tools using Spring Boot, React, and Qt.',
      logo: SiemensLogo
    },
    {
      status: 'Software Testing Trainee — ITI',
      date: 'Aug 2024 – Sept 2024',
      description:
        'Learned manual and automated testing fundamentals, test-case design, and defect reporting.',
      logo: ItiLogo
    },
    {
      status: 'Android Developer Trainee — ITI',
      date: 'Sep 2022 – Oct 2022',
      description:
        'Studied core Android development using Java and Android Studio, building UI-focused mobile apps.',
      logo: ItiLogo
    }
  ]

  return (
    <section
      id='experience'
      className='relative min-h-screen flex flex-col overflow-hidden experience-radial'
    >
      <div className='relative z-10 w-full flex flex-col items-center justify-center'>
        <div className='inline-block'>
          <h1 className='text-4xl font-bold mt-32 md:mt-32'>Experiences</h1>
          <motion.div
            className='h-1 bg-accent mt-2 rounded-full'
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ transformOrigin: 'center' }}
          />
        </div>
        <div className='w-full flex items-start justify-center md:items-center px-0 md:px-36'>
          <Timeline
            value={events}
            align={isMobile ? 'left' : 'alternate'}
            className='w-full md:w-3/4'
            marker={() => (
              <span className='flex items-center justify-center w-4 h-4 rounded-full border-2 border-accent' />
            )}
            content={(item, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className='p-5 rounded-2xl shadow-lg surface cursor-target mb-4'
              >
                <div
                  className={`flex items-center gap-4 ${
                    idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <img
                    src={item.logo}
                    alt={`${item.status} logo`}
                    className='w-12 h-12 object-contain rounded-lg'
                  />
                  <div>
                    <h3 className='text-base md:text-xl font-semibold text-accent'>
                      {item.status}
                    </h3>
                    <p className='text-sm opacity-80 mt-1'>{item.date}</p>
                  </div>
                </div>

                {item.description && (
                  <p className='text-sm mt-3 leading-relaxed opacity-90'>
                    {item.description}
                  </p>
                )}
              </motion.div>
            )}
          />
        </div>
      </div>
    </section>
  )
}

export default Experiences
