import { motion, useScroll, useSpring } from 'framer-motion'
import { Download } from 'lucide-react'
import { useRef } from 'react'
import { Button, Reveal, RevealText, SectionLabel } from '../components/motion'
import { articles, education, experience, profile } from '../data/content'

export function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 25 })

  return (
    <section id="experience" className="mx-auto max-w-[1400px] px-4 py-24 md:px-10 md:py-36">
      <SectionLabel index="03">Experience</SectionLabel>
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <RevealText
              text="Six years with remote teams across three continents."
              className="font-display text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[1] tracking-[-0.03em]"
            />
            <Reveal delay={0.2} className="mt-8 space-y-8">
              <p className="text-muted">US, Canada and Kenya: from React Native and USSD integrations to enterprise SSO.</p>
              <Button href={profile.cv} variant="ghost" download>
                Download résumé <Download size={16} />
              </Button>
            </Reveal>
          </div>
        </div>

        <div ref={ref} className="relative lg:col-span-8">
          <div className="absolute bottom-0 left-[7px] top-2 w-px bg-line" />
          <motion.div style={{ scaleY }} className="absolute bottom-0 left-[7px] top-2 w-px origin-top bg-accent" />
          <ol className="space-y-14">
            {experience.map((job) => (
              <li key={job.company + job.period} className="relative pl-12">
                <motion.span
                  className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border border-accent bg-bg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: '-30% 0px' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                />
                <Reveal>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="font-display text-3xl font-semibold tracking-tight">{job.company}</h3>
                    <span className="font-mono text-xs text-muted">{job.period}</span>
                  </div>
                  <p className="mt-1 text-accent">{job.role}</p>
                  <p className="text-sm text-muted">{job.place}</p>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-fg/80">
                        <span className="mt-2.5 h-px w-3 shrink-0 bg-muted" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>

          <div className="mt-20 grid gap-10 border-t border-line pt-10 pl-12 md:grid-cols-2">
            <Reveal>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">Education</p>
              <ul className="space-y-2 text-sm text-fg/80">
                {education.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">Writing</p>
              <ul className="space-y-2 text-sm">
                {articles.map((a) => (
                  <li key={a.title}>
                    <a href={a.href} target="_blank" rel="noopener noreferrer" className="text-fg/80 underline-offset-4 hover:text-accent hover:underline">
                      {a.title} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
