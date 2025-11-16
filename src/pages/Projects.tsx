import { motion } from 'motion/react'
import { useEffect, useMemo, useState } from 'react'
import JourneyAIBg from '../assets/projects/journey-ai.png'
import BroTextileBg from '../assets/projects/bro-textile.png'
import SalesideBg from '../assets/projects/saleside.png'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

type ProjectSlide = {
  id: number
  title: string
  description: string
  date: string
  logo: string
  background: string
  link: string
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

  const [showProject, setShowProject] = useState(false)

  return (
    <div className='relative flex flex-1 min-h-[450px] w-full max-w-5xl rounded-3xl surface overflow-hidden px-6 pt-6 pb-16 box-border shadow-2xl'>
      <div className='absolute inset-0 pointer-events-none rounded-3xl' />
      <div
        className='relative flex flex-1 rounded-2xl overflow-hidden box-border border'
        style={{ borderColor: 'var(--border)' }}
      >
        {showProject && (
          <div className='pointer-events-none absolute inset-0 z-40 hidden md:block'>
            <img
              src={current.background}
              alt={current.title}
              className='h-full w-full object-cover'
            />
          </div>
        )}
        <div className='relative z-30 flex flex-1 flex-col justify-between gap-8 px-8 py-10 aspect-auto md:aspect-2/1'>
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='w-full flex flex-1 flex-col gap-6 text-(--text)'
          >
            <div className='space-y-3'>
              <p className='text-sm uppercase tracking-[0.3em] text-muted'>
                {current.date}
              </p>
              <h3 className='text-2xl md:text-3xl font-semibold'>
                {current.title}
              </h3>
            </div>
            <p className='text-base md:text-lg leading-relaxed max-w-3xl text-[color-mix(in_srgb,var(--text)_92%,var(--muted)_8%)]'>
              {current.description}
            </p>
            {showProject && (
              <div className='skeleton-bg p-2 md:hidden rounded-2xl'>
                <img
                  src={current.background}
                  alt={current.title}
                  className='rounded-2xl'
                />
              </div>
            )}
          </motion.div>
        </div>
        <div className='absolute bottom-8 left-8 z-50'>
          <a
            href={current.link}
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-2xl border backdrop-blur-2xl flex items-center justify-center shadow-lg p-1 cursor-target z-50'
            style={{
              borderColor:
                'color-mix(in srgb, var(--surface) 40%, transparent)',
              backgroundColor:
                'color-mix(in srgb, var(--surface) 65%, transparent)'
            }}
          >
            <img
              src={current.logo}
              alt={`${current.title} logo`}
              className={`h-14 w-14 object-contain rounded-2xl shadow-lg p-1
                ${current.id === 2 ? 'bg-black/80' : ''}
                ${current.id === 3 ? 'bg-blue-950' : ''}  
              `}
            />
          </a>
        </div>
      </div>
      <div className='absolute bottom-6 left-1/2 flex w-[calc(100%-3rem)] max-w-5xl -translate-x-1/2 flex-col-reverses gap-3 md:flex-row md:items-center md:justify-between'>
        <button
          type='button'
          onClick={() => setShowProject(prev => !prev)}
          aria-pressed={showProject}
          className='self-center md:self-start rounded-full border backdrop-blur-xl shadow-lg text-(--text) transition-colors duration-200 h-8 w-8 flex items-center justify-center'
          style={{
            borderColor: 'color-mix(in srgb, var(--surface) 45%, transparent)',
            backgroundColor: showProject
              ? 'color-mix(in srgb, var(--accent) 30%, transparent)'
              : 'color-mix(in srgb, var(--surface) 70%, transparent)'
          }}
        >
          {showProject ? (
            <FaEyeSlash className='h-4 w-4' />
          ) : (
            <FaEye className='h-4 w-4' />
          )}
        </button>
        <div
          className='mx-auto flex flex-wrap items-center justify-center gap-3 rounded-full border px-4 py-2 backdrop-blur-xl shadow-lg'
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
    </div>
  )
}

const PROJECT_EVENTS = [
  {
    status: 'JourneyAi — AI Assistants for Sales Teams',
    date: 'Oct 2025 – Nov 2025',
    description:
      'Specialized AI copilots for each sales workflow. Research prospects, craft personalized outreach, and discover lookalike leads with guided automations.',
    logo: 'https://app.meetjourney.ai/favicon.svg',
    background: JourneyAIBg,
    link: 'https://app.meetjourney.ai'
  },
  {
    status: 'SaleSide - AI-Powered Sales Coaching',
    date: 'Nov 2025 – Present',
    description:
      "Real-time AI coaching that listens, analyzes, and guides your reps while they're on the call turning missed cues into closed deals.",
    logo: 'https://saleside-front-production.up.railway.app/favicon.svg',
    background: SalesideBg,
    link: 'https://saleside-front-production.up.railway.app'
  },
  {
    status: 'Bro Textile - For Textile Solutions',
    date: 'Sep 2025 – Present',
    description:
      'We believe every textile business has the power to achieve more. That’s why we stand beside you as a trusted partner providing the right machines, quality materials, and expert guidance to help you grow, compete, and lead with confidence, from Egypt to the world.',
    logo: 'https://bro-textile-website.vercel.app/assets/logo-icon-BR9rfrVV.png',
    background: BroTextileBg,
    link: 'https://bro-textile.com/'
  }
]

const Projects = () => {
  // map events to carousel-friendly items
  const carouselItems = useMemo(
    () =>
      PROJECT_EVENTS.map((event, idx) => ({
        id: idx + 1,
        title: event.status,
        description: event.description ?? event.date,
        date: event.date,
        logo: event.logo,
        background: event.background,
        link: event.link
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
