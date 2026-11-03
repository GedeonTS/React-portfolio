import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useEffect, useState, type MouseEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { profile } from '../data/content'
import { ease, Magnetic } from './motion'
import { scrollToTarget, stopScroll } from './SmoothScroll'

const links = [
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Experience' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'contact', label: 'Contact' },
]

/** Navigates home if needed, then scrolls to the section. */
export function useSectionLink() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  return (id: string) => (e: MouseEvent) => {
    e.preventDefault()
    if (pathname === '/') scrollToTarget(`#${id}`)
    else navigate('/', { state: { scrollTo: id } })
  }
}

export function Navbar() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const go = useSectionLink()
  const { pathname } = useLocation()

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setHidden(y > prev && y > 200 && !open)
    setScrolled(y > 40)
  })

  useEffect(() => {
    stopScroll(open)
  }, [open])

  useEffect(() => setOpen(false), [pathname])

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled && !open ? 'bg-bg/70 backdrop-blur-xl' : ''
        }`}
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ duration: 0.6, ease }}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-5 md:px-10">
          <Link to="/" className="group flex items-center gap-3 font-display text-lg font-semibold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-sm font-bold text-accent-ink transition-transform duration-500 group-hover:rotate-[360deg]">
              UG
            </span>
            <span className="hidden sm:inline">{profile.name}</span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`/#${l.id}`}
                  onClick={go(l.id)}
                  className="group relative block overflow-hidden px-4 py-2 text-sm text-muted transition-colors hover:text-fg"
                >
                  <span className="block transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-full">
                    {l.label}
                  </span>
                  <span className="absolute inset-x-4 top-full block text-fg transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-full">
                    {l.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <Magnetic>
                <a
                  href={profile.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm transition-colors hover:border-accent hover:text-accent"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  Hire me
                </a>
              </Magnetic>
            </div>
            <button
              onClick={() => setOpen((o) => !o)}
              className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-line md:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <motion.span className="h-px w-5 bg-fg" animate={open ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }} />
              <motion.span className="h-px w-5 bg-fg" animate={open ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-between bg-surface px-4 pb-10 pt-28"
            initial={{ clipPath: 'circle(0% at calc(100% - 38px) 42px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 38px) 42px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 38px) 42px)' }}
            transition={{ duration: 0.8, ease }}
          >
            <ul className="space-y-2">
              {links.map((l, i) => (
                <li key={l.id} className="overflow-hidden">
                  <motion.a
                    href={`/#${l.id}`}
                    onClick={(e) => {
                      setOpen(false)
                      go(l.id)(e)
                    }}
                    className="flex items-baseline gap-4 font-display text-5xl font-semibold tracking-tight"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease, delay: 0.2 + i * 0.06 }}
                  >
                    <span className="font-mono text-xs text-accent">0{i + 1}</span>
                    {l.label}
                  </motion.a>
                </li>
              ))}
            </ul>
            <motion.div
              className="space-y-2 text-sm text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a href={`mailto:${profile.email}`} className="block text-fg">
                {profile.email}
              </a>
              <p>{profile.location}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
