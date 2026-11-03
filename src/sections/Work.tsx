import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useState, type PointerEvent } from 'react'
import { Link } from 'react-router-dom'
import { Button, Img, Reveal, RevealText, SectionLabel } from '../components/motion'
import { projects, type Project } from '../data/content'

export function ProjectList({ items }: { items: Project[] }) {
  const [active, setActive] = useState<number | null>(null)
  const x = useSpring(useMotionValue(0), { stiffness: 150, damping: 20, mass: 0.4 })
  const y = useSpring(useMotionValue(0), { stiffness: 150, damping: 20, mass: 0.4 })

  const onMove = (e: PointerEvent) => {
    x.set(e.clientX)
    y.set(e.clientY)
  }

  return (
    <div onPointerMove={onMove} onPointerLeave={() => setActive(null)} className="relative border-t border-line">
      {items.map((p, i) => (
        <Reveal key={p.slug} y={30} delay={i * 0.05}>
          <Link
            to={`/work/${p.slug}`}
            data-cursor="view"
            onPointerEnter={() => setActive(i)}
            className="group relative block border-b border-line py-8 md:py-12"
          >
            <div
              className="absolute inset-0 origin-bottom scale-y-0 transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-y-100"
              style={{ background: `linear-gradient(90deg, ${p.accent}14, transparent)` }}
            />
            <div className="relative grid items-center gap-4 md:grid-cols-12">
              <span className="font-mono text-xs text-muted md:col-span-1">{String(i + 1).padStart(2, '0')}</span>
              <div className="md:col-span-6">
                <h3 className="font-display text-[clamp(2.2rem,5.5vw,5rem)] font-semibold leading-none tracking-[-0.03em] transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:translate-x-4">
                  {p.title}
                </h3>
                <p className="mt-3 text-muted transition-transform delay-75 duration-700 ease-[var(--ease-out-expo)] group-hover:translate-x-4">
                  {p.kicker}
                </p>
              </div>
              <ul className="flex flex-wrap gap-2 md:col-span-4">
                {p.stack.slice(0, 4).map((s) => (
                  <li key={s} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">
                    {s}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between md:col-span-1 md:justify-end">
                <span className="font-mono text-xs text-muted md:hidden">{p.year}</span>
                <span className="grid h-12 w-12 place-items-center rounded-full border border-line transition-all duration-500 group-hover:rotate-45 group-hover:border-transparent">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl md:hidden">
              <Img srcs={p.cover} alt={p.title} className="aspect-[16/10] w-full object-cover object-top" />
            </div>
          </Link>
        </Reveal>
      ))}

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-30 hidden h-[300px] w-[420px] md:block"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      >
        <AnimatePresence>
          {active !== null && (
            <motion.div
              key="preview"
              className="h-full w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/60"
              initial={{ opacity: 0, scale: 0.6, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.6, rotate: 6 }}
              transition={{ type: 'spring', stiffness: 200, damping: 22 }}
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={active}
                  className="h-full w-full"
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-100%' }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Img srcs={items[active].cover} alt="" className="h-full w-full object-cover object-top" />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1400px] px-4 py-24 md:px-10 md:py-36">
      <SectionLabel index="02">Selected work</SectionLabel>
      <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <RevealText
          text="Products I've built, secured and shipped."
          className="max-w-4xl font-display text-[clamp(2.4rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.03em]"
        />
        <Reveal delay={0.2}>
          <Button href="/work" variant="ghost">
            All projects <ArrowUpRight size={16} />
          </Button>
        </Reveal>
      </div>
      <ProjectList items={projects.filter((p) => p.featured)} />
    </section>
  )
}
