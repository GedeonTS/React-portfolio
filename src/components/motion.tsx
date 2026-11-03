import { animate, motion, useInView, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from 'react'

export const ease = [0.16, 1, 0.3, 1] as const

/** Splits text into words that slide up from behind a mask. */
export function RevealText({
  text,
  className = '',
  delay = 0,
  as: Tag = 'h2',
  immediate = false,
}: {
  text: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p'
  immediate?: boolean
}) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const reduce = useReducedMotion()
  const show = immediate || inView
  const MotionTag = motion[Tag]

  return (
    <MotionTag ref={ref as never} className={className} aria-label={text}>
      {text.split(' ').map((word, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
          <motion.span
            className="inline-block"
            initial={reduce ? { opacity: 0 } : { y: '110%' }}
            animate={show ? (reduce ? { opacity: 1 } : { y: '0%' }) : undefined}
            transition={{ duration: 1, ease, delay: delay + i * 0.06 }}
          >
            {word}
            {' '}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  )
}

/** Fade + rise when scrolled into view. */
export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 40,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 1, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

export function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <Reveal y={12} className="mb-10 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
      <span className="text-accent">{index}</span>
      <span className="h-px w-12 bg-line" />
      <span>{children}</span>
    </Reveal>
  )
}

/** Element that is pulled toward the cursor while hovered. */
export function Magnetic({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15, mass: 0.3 })
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15, mass: 0.3 })

  const onMove = (e: MouseEvent) => {
    const r = ref.current!.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div ref={ref} style={{ x, y }} onMouseMove={onMove} onMouseLeave={reset} className="inline-block">
      {children}
    </motion.div>
  )
}

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  external?: boolean
  download?: boolean
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
}

export function Button({ href, children, variant = 'primary', external, download, onClick }: ButtonProps) {
  const base =
    'group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-4 text-sm font-medium transition-colors duration-500'
  const styles =
    variant === 'primary'
      ? 'bg-accent text-accent-ink'
      : 'border border-line text-fg hover:border-fg'
  return (
    <Magnetic>
      <a
        href={href}
        onClick={onClick}
        download={download}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={`${base} ${styles}`}
        data-cursor="link"
      >
        <span
          className={`absolute inset-0 translate-y-full rounded-full transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-y-0 ${
            variant === 'primary' ? 'bg-fg' : 'bg-surface-2'
          }`}
        />
        <span className="relative flex items-center gap-3">{children}</span>
      </a>
    </Magnetic>
  )
}

export function Marquee({ items, reverse = false, speed = 40 }: { items: string[]; reverse?: boolean; speed?: number }) {
  return (
    <div className="group relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div
        className="flex shrink-0 gap-12 pr-12 group-hover:[animation-play-state:paused]"
        style={{ animation: `marquee ${speed}s linear infinite`, animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-12 whitespace-nowrap font-display text-3xl font-medium text-muted md:text-5xl">
            {item}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, { duration: 2, ease, onUpdate: (v) => setValue(Math.round(v)) })
    return () => controls.stop()
  }, [inView, to])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

/** <img> that falls back to the next source when a file is missing. */
export function Img({ srcs, alt, className = '' }: { srcs: string[]; alt: string; className?: string }) {
  const [i, setI] = useState(0)
  if (i >= srcs.length) return null
  return (
    <img
      src={srcs[i]}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      onError={() => setI((n) => n + 1)}
    />
  )
}
