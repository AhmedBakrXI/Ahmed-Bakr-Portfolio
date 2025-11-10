import { useEffect, useState } from 'react'
import LogoAnimation from './animations/LogoAnimation'
import { Menu, X } from 'lucide-react'

const NavLogo = () => {
  return (
    <a href='/' style={{ color: 'var(--accent)' }}>
      <LogoAnimation fillColor='var(--accent)' width={48} height={48} />
    </a>
  )
}

interface NavBarLinksProps {
    title: string;
    link: string;
}

const navItems: NavBarLinksProps[] = [
    { title: 'About', link: '/about' },
    { title: 'Projects', link: '/projects' },
    { title: 'Skills', link: '/skills' },
    { title: 'Experience', link: '/experience' },
    { title: 'Contact', link: '/contact' },
];

const NavBarLinks = () => {
  return (
    <nav className='hidden md:block'>
      <ul className='flex space-x-6 ml-6'>
        {navItems.map(({ title, link }) => (
          <li key={link} className='group'>
            <a href={link} className='cursor-target text-(--text) hover:text-accent transition-all duration-500'>
              {title}
            </a>
            {/* <div className="mx-auto h-px w-0 bg-(--accent) group-hover:w-full transition-all duration-500" /> */}
          </li>
        ))}
      </ul>
    </nav>
  )
}
         
type NavBarButtonProps = {
  isOpen: boolean
  onToggle: () => void
}

const NavBarButton = ({ isOpen, onToggle }: NavBarButtonProps) => {
  return (
    <div className='surface h-16 w-16 rounded-full flex items-center justify-center md:hidden cursor-target'>
      <button aria-label='Menu Button' aria-expanded={isOpen} onClick={onToggle}>
        {isOpen ? <X /> : <Menu />}
      </button>
    </div>
  )
}

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex flex-col items-center pt-28' role='dialog' aria-modal='true'>
      <div className='absolute inset-0' onClick={onClose} />
      <div className='relative z-10 w-full max-w-md mx-auto px-6'>
        <div className='surface rounded-xl p-8 flex flex-col space-y-6 text-center'>
          <a href='/about' className='text-lg theme-link' onClick={onClose}>About</a>
          <a href='/projects' className='text-lg theme-link' onClick={onClose}>Projects</a>
          <a href='/skills' className='text-lg theme-link' onClick={onClose}>Skills</a>
          <a href='/experience' className='text-lg theme-link' onClick={onClose}>Experience</a>
          <a href='/contact' className='text-lg theme-link' onClick={onClose}>Contact</a>
        </div>
      </div>
    </div>
  )
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string>(() => {
    try {
      return (
        document.documentElement.getAttribute('data-theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light')
      )
    } catch {
      return 'light'
    }
  })

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    } catch {
      /* ignore localStorage or DOM errors */
    }
  }, [theme])

  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  return (
    <button
      aria-label='Toggle theme'
      onClick={toggle}
      className='theme-toggle ml-4 p-2 rounded-lg'
      title='Toggle light / dark'
      style={{ borderRadius: 8 }}
    >
      {theme === 'dark' ? (
        /* sun icon for light */
        <svg
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12 4V2M12 22v-2M4.93 4.93L3.51 3.51M20.49 20.49l-1.42-1.42M2 12H4m16 0h2M4.93 19.07l-1.42 1.42M20.49 3.51l-1.42 1.42'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <circle
            cx='12'
            cy='12'
            r='3'
            stroke='currentColor'
            strokeWidth='1.5'
          />
        </svg>
      ) : (
        /* moon icon for dark */
        <svg
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )}
    </button>
  )
}

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='fixed z-9999 w-full flex items-center justify-evenly py-4'>
      <div className='h-20 min-w-64 md:min-w-xl max-w-3xl surface rounded-full flex items-center justify-around px-6'>
        <NavLogo />
        <NavBarLinks />
        <ThemeToggle />
      </div>

      {/* Mobile menu button */}
      <div className='md:hidden'>
        <NavBarButton isOpen={menuOpen} onToggle={() => setMenuOpen((s) => !s)} />
      </div>

      {/* Mobile overlay menu */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}

export default Header
