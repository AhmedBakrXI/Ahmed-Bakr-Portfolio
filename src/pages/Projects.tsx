import { motion } from 'motion/react'
import { useEffect, useMemo, useState, type ReactNode } from 'react'
import STLogo from '../assets/st.png'
import ETGLogo from '../assets/etg.png'
import SiemensLogo from '../assets/siemens.png'
import ItiLogo from '../assets/iti.png'

type ProjectSlide = {
  id: number
  title: string
  description: string
  date: string
  icon: ReactNode
}

const GlassCarousel = ({
  items,
  autoplayDelay = 4500
}: {
  items: ProjectSlide[]
  autoplayDelay?: number
}) => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (!items.length) return
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % items.length)
    }, autoplayDelay)
    return () => clearInterval(timer)
  }, [items.length, autoplayDelay])

  const current = items[active]

  return (
    <div
      className="relative flex flex-1 min-h-[450px] w-full max-w-5xl rounded-3xl skeleton-bg overflow-hidden px-6 pt-6 pb-16 box-border"
    >
      <div className="absolute inset-0 pointer-events-none rounded-3xl" />
      
      {/* Inner container that takes all available space */}
      <div className="relative flex flex-1 flex-col justify-between rounded-2xl skeleton-bg p-8 overflow-hidden box-border">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-1 flex-col justify-between gap-6"
        >
          {/* Header with icon + title */}
          {/* <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-2xl flex items-center justify-center shadow-inner shadow-black/20">
              {current.icon}
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted">{current.date}</p>
              <h3 className="text-2xl md:text-3xl font-semibold text-[color:var(--text)]">{current.title}</h3>
            </div>
          </div> */}

          {/* Description */}
          {/* <p className="text-base md:text-lg leading-relaxed max-w-3xl text-[color-mix(in_srgb,var(--text)_92%,var(--muted)_8%)]">
            {current.description}
          </p> */}
        </motion.div>
      </div>

      {/* Pagination dots */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 skeleton-bg border backdrop-blur-xl px-4 py-2 rounded-full"
        style={{ borderColor: 'var(--border)', boxShadow: 'var(--shadow)' }}
      >
        {items.map((item, idx) => (
          <button
            key={item.id}
            aria-label={`Show ${item.title}`}
            onClick={() => setActive(idx)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              idx === active
                ? 'bg-accent shadow-[0_0_16px_color-mix(in_srgb,var(--accent)_80%,transparent)] scale-110'
                : 'bg-[color-mix(in_srgb,var(--accent)_45%,var(--bg)_55%)] hover:bg-[color-mix(in_srgb,var(--accent)_65%,var(--bg)_35%)]'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

const PROJECT_EVENTS = [
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

const Projects = () => {
  // map events to carousel-friendly items
  const carouselItems = useMemo(
    () =>
      PROJECT_EVENTS.map((e, idx) => ({
    id: idx + 1,
    title: e.status,
    description: e.description ?? e.date,
    date: e.date,
    icon: (
      <img
        src={e.logo}
        alt={e.status}
        className='h-12 w-12 object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]'
      />
    )
      })),
    []
  )

  return (
    <section
      id='projects'
      className='relative min-h-screen flex flex-col overflow-hidden projects-radial py-32'
    >
      <div className='relative z-10 flex flex-1 w-full flex-col items-center gap-10 px-4 md:px-12'>
        <div className='inline-block'>
          <h1 className='text-4xl font-bold text-center'>Projects</h1>
          <motion.div
            className='h-1 bg-accent mt-2 rounded-full'
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ transformOrigin: 'center' }}
          />
        </div>
        <div className='w-full flex flex-1 h-full items-stretch justify-center'>
          <GlassCarousel items={carouselItems} autoplayDelay={4500} />
        </div>
      </div>
    </section>
  )
}

export default Projects
