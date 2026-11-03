import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Button, ease, Img, Reveal, RevealText } from '../components/motion'
import { projects } from '../data/content'

export function CaseStudy() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const coverRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: coverRef, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  if (index === -1) return <Navigate to="/work" replace />
  const p = projects[index]
  const next = projects[(index + 1) % projects.length]

  return (
    <article className="pt-32 md:pt-40">
      <div className="mx-auto max-w-[1400px] px-4 md:px-10">
        <Reveal y={10}>
          <Link to="/work" className="mb-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted hover:text-accent">
            <ArrowLeft size={14} /> All work
          </Link>
        </Reveal>
        <Reveal y={10} className="mb-6 flex items-center gap-3">
          <span className="h-3 w-3 rounded-full" style={{ background: p.accent }} />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{p.kicker}</span>
        </Reveal>
        <RevealText
          as="h1"
          immediate
          text={p.title}
          className="font-display text-[clamp(3.5rem,13vw,13rem)] font-semibold leading-[0.85] tracking-[-0.05em]"
        />

        <div className="mt-16 grid gap-8 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Role', p.role],
            ['Year', p.year],
            ['Stack', p.stack.join(' · ')],
          ].map(([k, v], i) => (
            <Reveal key={k} delay={0.2 + i * 0.08}>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">{k}</p>
              <p className="text-fg/90">{v}</p>
            </Reveal>
          ))}
          {p.live && (
            <Reveal delay={0.44} className="lg:justify-self-end">
              <Button href={p.live} external>
                Visit live site <ArrowUpRight size={16} />
              </Button>
            </Reveal>
          )}
        </div>
      </div>

      <motion.div
        ref={coverRef}
        className="relative mx-auto mt-16 aspect-[16/10] max-w-[1600px] overflow-hidden md:mt-24 md:aspect-[16/8] md:rounded-[32px]"
        initial={{ clipPath: 'inset(15% 10% 15% 10% round 32px)' }}
        animate={{ clipPath: 'inset(0% 0% 0% 0% round 32px)' }}
        transition={{ duration: 1.4, ease, delay: 0.3 }}
        style={{ background: `${p.accent}22` }}
      >
        <motion.div style={{ y: imgY }} className="absolute -inset-y-[10%] inset-x-0">
          <Img srcs={p.cover} alt={p.title} className="h-full w-full object-cover object-top" />
        </motion.div>
      </motion.div>

      <div className="mx-auto max-w-[1400px] px-4 py-24 md:px-10 md:py-36">
        <div className="grid gap-12 md:grid-cols-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted md:col-span-3">Overview</p>
          <RevealText
            as="p"
            text={p.summary}
            className="font-display text-[clamp(1.6rem,3.2vw,3rem)] font-medium leading-[1.15] tracking-[-0.02em] md:col-span-9"
          />
        </div>

        <div className="mt-24 grid gap-12 border-t border-line pt-12 md:grid-cols-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted md:col-span-3">The problem</p>
          <Reveal className="text-xl leading-relaxed text-fg/85 md:col-span-7">{p.problem}</Reveal>
        </div>

        <div className="mt-24 grid gap-12 border-t border-line pt-12 md:grid-cols-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted md:col-span-3">What I did</p>
          <ol className="space-y-6 md:col-span-9">
            {p.solution.map((s, i) => (
              <Reveal key={s} delay={i * 0.06}>
                <li className="flex gap-6 border-b border-line pb-6 text-lg">
                  <span className="font-mono text-sm" style={{ color: p.accent }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-fg/85">{s}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="mt-24 grid gap-12 border-t border-line pt-12 md:grid-cols-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted md:col-span-3">Outcome</p>
          <Reveal className="font-display text-3xl font-medium leading-snug tracking-tight md:col-span-9 md:text-4xl">
            {p.outcome}
          </Reveal>
        </div>

        {p.gallery.length > 0 && (
          <div className="mt-24 grid gap-4 md:grid-cols-2">
            {p.gallery.map((srcs, i) => (
              <Reveal key={srcs.join()} delay={(i % 2) * 0.1} className={i === 0 && p.gallery.length % 2 === 1 ? 'md:col-span-2' : ''}>
                <Img srcs={srcs} alt={`${p.title} screenshot ${i + 1}`} className="w-full rounded-3xl border border-line object-cover" />
              </Reveal>
            ))}
          </div>
        )}
      </div>

      <Link to={`/work/${next.slug}`} data-cursor="view" className="group block border-t border-line">
        <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-10 md:py-32">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">Next project</p>
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(3rem,10vw,10rem)] font-semibold leading-[0.85] tracking-[-0.05em] transition-colors duration-500 group-hover:text-accent">
              {next.title}
            </h2>
            <ArrowUpRight className="mb-4 h-12 w-12 shrink-0 transition-transform duration-500 group-hover:rotate-45 md:h-20 md:w-20" strokeWidth={1} />
          </div>
        </div>
      </Link>
    </article>
  )
}
