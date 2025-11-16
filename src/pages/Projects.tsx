import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useMemo, useState } from 'react'
import JourneyAIBg from '../assets/projects/journey-ai.png'
import BroTextileBg from '../assets/projects/bro-textile.png'
import SalesideBg from '../assets/projects/saleside.png'
import StbeeLogo from '../assets/projects/stbee-logo.png'
import StbeeBg from '../assets/projects/stbee.jpg'
import SiemensLogo from '../assets/siemens.png'
import VirtualScreenerBg from '../assets/projects/virtual-screener.png'
import NinjaGame from '../assets/projects/ninja-game.png'
import NinjaLogo from '../assets/projects/ninja-logo.png'
import { FaEye, FaEyeSlash, FaCode, FaDatabase, FaJava } from 'react-icons/fa'
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFastapi,
  SiMongodb,
  SiRedis,
  SiJavascript,
  SiPostgresql,
  SiQt,
  SiCplusplus,
  SiZigbee,
  SiNextdotjs,
  SiSpringboot,
  SiUnity
} from 'react-icons/si'
import type { IconType } from 'react-icons'
import { TbBrandCSharp } from 'react-icons/tb'

type ProjectSlide = {
  id: number
  title: string
  description: string
  date: string
  logo: string
  background: string
  link: string
  tech: Array<string>
}

const TECH_STYLES: Record<
  string,
  { bg: string; color: string; border: string }
> = {
  React: {
    bg: 'color-mix(in srgb, #61dafb 25%, transparent)',
    color: '#0b111a',
    border: 'color-mix(in srgb, #61dafb 60%, transparent)'
  },
  TypeScript: {
    bg: 'color-mix(in srgb, #3178c6 20%, transparent)',
    color: '#06204d',
    border: 'color-mix(in srgb, #3178c6 70%, transparent)'
  },
  JavaScript: {
    bg: 'color-mix(in srgb, #f7df1e 25%, transparent)',
    color: '#1d1d1b',
    border: 'color-mix(in srgb, #f7df1e 70%, transparent)'
  },
  TailwindCSS: {
    bg: 'color-mix(in srgb, #38bdf8 20%, transparent)',
    color: '#052938',
    border: 'color-mix(in srgb, #38bdf8 65%, transparent)'
  },
  FastAPI: {
    bg: 'color-mix(in srgb, #05998b 20%, transparent)',
    color: '#021715',
    border: 'color-mix(in srgb, #05998b 65%, transparent)'
  },
  MongoDB: {
    bg: 'color-mix(in srgb, #13aa52 20%, transparent)',
    color: '#031c0f',
    border: 'color-mix(in srgb, #13aa52 65%, transparent)'
  },
  Redis: {
    bg: 'color-mix(in srgb, #d82c20 20%, transparent)',
    color: '#2b0200',
    border: 'color-mix(in srgb, #d82c20 60%, transparent)'
  },
  QDrant: {
    bg: 'color-mix(in srgb, #6c63ff 20%, transparent)',
    color: '#140f33',
    border: 'color-mix(in srgb, #6c63ff 65%, transparent)'
  },
  PostgreSQL: {
    bg: 'color-mix(in srgb, #336791 20%, transparent)',
    color: '#061120',
    border: 'color-mix(in srgb, #336791 65%, transparent)'
  },
  Qt: {
    bg: 'color-mix(in srgb, #41cd52 20%, transparent)',
    color: '#071d0a',
    border: 'color-mix(in srgb, #41cd52 65%, transparent)'
  },
  'C++': {
    bg: 'color-mix(in srgb, #00599c 18%, transparent)',
    color: '#011024',
    border: 'color-mix(in srgb, #00599c 60%, transparent)'
  },
  ZigBee: {
    bg: 'color-mix(in srgb, #eb1c24 18%, transparent)',
    color: '#2c0103',
    border: 'color-mix(in srgb, #eb1c24 60%, transparent)'
  },
  'Next.Js': {
    bg: 'color-mix(in srgb, #000000 18%, transparent)',
    color: '#121212',
    border: 'color-mix(in srgb, #000000 60%, transparent)'
  },
  'Spring Boot': {
    bg: 'color-mix(in srgb, #6db33f 20%, transparent)',
    color: '#152107',
    border: 'color-mix(in srgb, #6db33f 65%, transparent)'
  },
  Java: {
    bg: 'color-mix(in srgb, #f89820 20%, transparent)',
    color: '#2b1a00',
    border: 'color-mix(in srgb, #f89820 60%, transparent)'
  },
  Unity: {
    bg: 'color-mix(in srgb, #000000 18%, transparent)',
    color: '#121212',
    border: 'color-mix(in srgb, #000000 60%, transparent)'
  },
  'C#': {
    bg: 'color-mix(in srgb, #68217a 20%, transparent)',
    color: '#1e0b28',
    border: 'color-mix(in srgb, #68217a 65%, transparent)'
  }
}

const DEFAULT_TECH_STYLE = {
  bg: 'color-mix(in srgb, var(--surface) 65%, transparent)',
  color: 'var(--text)',
  border: 'color-mix(in srgb, var(--border) 80%, transparent)'
}

const TECH_ICONS: Record<string, IconType> = {
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  TailwindCSS: SiTailwindcss,
  FastAPI: SiFastapi,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  QDrant: FaDatabase,
  PostgreSQL: SiPostgresql,
  Qt: SiQt,
  'C++': SiCplusplus,
  ZigBee: SiZigbee,
  'Next.Js': SiNextdotjs,
  'Spring Boot': SiSpringboot,
  Java: FaJava,
  Unity: SiUnity,
  'C#': TbBrandCSharp
}

const DEFAULT_TECH_ICON: IconType = FaCode

const GlassCarousel = ({
  items,
  autoplayDelay = 4500
}: {
  items: ProjectSlide[]
  autoplayDelay?: number
}) => {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!items.length) return
    if (isPaused) return
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % items.length)
    }, autoplayDelay)
    return () => clearInterval(timer)
  }, [items.length, autoplayDelay, isPaused])

  const current = items[active]

  const [showProject, setShowProject] = useState(false)
  const [clickToGo, setClickToGo] = useState(false)

  return (
    <div className='relative flex flex-1 min-h-[450px] w-full h-[75vh] md:h-auto max-w-5xl rounded-3xl surface overflow-hidden px-6 pt-6 pb-16 box-border shadow-2xl'>
      <div className='absolute inset-0 pointer-events-none rounded-3xl' />
      <div
        className='relative flex flex-1 rounded-2xl overflow-hidden box-border border'
        style={{ borderColor: 'var(--border)' }}
      >
        <AnimatePresence>
          {showProject && (
            <motion.div
              key={`desktop-overlay-${current.id}`}
              initial={{
                opacity: 0,
                clipPath: 'polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%)'
              }}
              animate={{
                opacity: 1,
                clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)'
              }}
              exit={{
                opacity: 0,
                clipPath: 'polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)'
              }}
              transition={{ duration: 0.55, ease: 'easeInOut' }}
              className='pointer-events-none absolute inset-0 z-40 hidden md:block'
            >
              <img
                src={current.background}
                alt={current.title}
                className='h-full w-full object-cover'
              />
            </motion.div>
          )}
        </AnimatePresence>
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
            {current.tech?.length ? (
              <div className='flex flex-wrap gap-2 pt-2'>
                {current.tech.map(tech => {
                  const palette = TECH_STYLES[tech] ?? DEFAULT_TECH_STYLE
                  const TechIcon = TECH_ICONS[tech] ?? DEFAULT_TECH_ICON
                  return (
                    <motion.span
                      key={`${current.id}-${tech}`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className='inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide px-3 py-1 rounded-full border backdrop-blur-sm shadow-sm'
                      style={{
                        backgroundColor: palette.bg,
                        borderColor: palette.border
                      }}
                    >
                      <TechIcon className='h-3.5 w-3.5' />
                      <span>{tech}</span>
                    </motion.span>
                  )
                })}
              </div>
            ) : null}
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
        <div className='absolute flex flex-row items-center bottom-8 left-8 z-50'>
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
            onMouseEnter={() => {
              setIsPaused(true)
              setClickToGo(true)
            }}
            onMouseLeave={() => {
              setIsPaused(false)
              setClickToGo(false)
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
          <AnimatePresence>
            {clickToGo && (
              <motion.h2
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='ml-2 font-semibold text-lg surface rounded-full px-2'
              >
                Click Icon to <span className='text-accent font-bold'>GO</span>
              </motion.h2>
            )}
          </AnimatePresence>
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
    link: 'https://app.meetjourney.ai',
    tech: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'FastAPI',
      'MongoDB',
      'Redis',
      'QDrant'
    ]
  },
  {
    status: 'SaleSide - AI-Powered Sales Coaching',
    date: 'Nov 2025 – Present',
    description:
      "Real-time AI coaching that listens, analyzes, and guides your reps while they're on the call turning missed cues into closed deals.",
    logo: 'https://saleside-front-production.up.railway.app/favicon.svg',
    background: SalesideBg,
    link: 'https://saleside-front-production.up.railway.app',
    tech: ['React', 'JavaScript', 'TailwindCSS', 'FastAPI', 'PostgreSQL']
  },
  {
    status: 'Bro Textile - For Textile Solutions',
    date: 'Sep 2025 – Present',
    description:
      'We believe every textile business has the power to achieve more. That’s why we stand beside you as a trusted partner providing the right machines, quality materials, and expert guidance to help you grow, compete, and lead with confidence, from Egypt to the world.',
    logo: 'https://bro-textile-website.vercel.app/assets/logo-icon-BR9rfrVV.png',
    background: BroTextileBg,
    link: 'https://bro-textile.com/',
    tech: ['React', 'TypeScript']
  },
  {
    status: 'STBee - ZigBee Network Visualizer & Controller',
    date: 'Sep 2024 – Jun 2025',
    description:
      'Desktop application for visualizing and controlling ZigBee networks, enabling users to monitor device status, manage connections, and optimize network performance through an intuitive graphical interface.',
    logo: StbeeLogo,
    background: StbeeBg,
    link: 'https://drive.google.com/drive/u/1/folders/1obY6Bvc9vrkOlkKAgfiaZkLy7hqwKb7s',
    tech: ['Qt', 'C++', 'ZigBee']
  },
  {
    status: 'Virtual Screener – AI-Based Video Screening Tool',
    date: 'Sep 2024 – Dec 2024',
    description:
      'An AI-powered video screening tool designed to evaluate and shortlist candidates efficiently by analyzing video interviews for key competencies and cultural fit.',
    logo: SiemensLogo,
    background: VirtualScreenerBg,
    link: 'https://github.com/user-attachments/files/23569977/virtual_screener.pdf',
    tech: ['Next.Js', 'Java', 'Spring Boot', 'PostgreSQL']
  },
  {
    status: 'Ninja Platformer — 2D Platformer Game',
    date: 'Aug 2024 – Sep 2024',
    description:
      'A fast-paced 2D platformer game where players control a ninja navigating through challenging levels filled with obstacles and enemies, utilizing precise jumps and swift attacks to reach the goal.',
    logo: NinjaLogo,
    background: NinjaGame,
    link: 'https://drive.google.com/file/d/1r01vgv-B8UufstALSTc0nzSKVQlRN_Mm/view?usp=sharing',
    tech: ['Unity', 'C#']
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
        link: event.link,
        tech: event.tech ?? []
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
