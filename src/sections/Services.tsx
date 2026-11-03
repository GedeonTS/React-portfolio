import { motion } from 'framer-motion'
import { ArrowUpRight, Building2, KeyRound, ShieldCheck, Wrench } from 'lucide-react'
import { ease, Reveal, RevealText, SectionLabel } from '../components/motion'
import { services } from '../data/content'

const icons = [KeyRound, Building2, ShieldCheck, Wrench]

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1400px] px-4 py-24 md:px-10 md:py-36">
      <SectionLabel index="01">Services</SectionLabel>
      <div className="mb-16 grid gap-8 md:grid-cols-12">
        <RevealText
          text="Authentication that closes enterprise deals."
          className="font-display text-[clamp(2.4rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] md:col-span-8"
        />
        <Reveal delay={0.2} className="self-end text-muted md:col-span-4">
          Enterprise buyers ask for SSO, audit-ready permissions and tenant isolation before they sign. I build exactly that, on top of
          a clean full-stack codebase.
        </Reveal>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {services.map((s, i) => {
          const Icon = icons[i]
          return (
            <Reveal key={s.title} delay={(i % 2) * 0.12}>
              <motion.article
                whileHover="hover"
                className="group relative h-full overflow-hidden rounded-3xl border border-line bg-surface p-8 md:p-10"
              >
                <motion.div
                  className="absolute inset-0 bg-[radial-gradient(500px_circle_at_0%_0%,rgba(198,255,61,0.12),transparent_60%)] opacity-0"
                  variants={{ hover: { opacity: 1 } }}
                  transition={{ duration: 0.6 }}
                />
                <div className="relative flex items-start justify-between">
                  <motion.span
                    className="grid h-14 w-14 place-items-center rounded-2xl border border-line text-accent"
                    variants={{ hover: { rotate: -12, scale: 1.08 } }}
                    transition={{ duration: 0.5, ease }}
                  >
                    <Icon size={24} strokeWidth={1.5} />
                  </motion.span>
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
                </div>
                <h3 className="relative mt-12 font-display text-3xl font-semibold tracking-tight md:text-4xl">{s.title}</h3>
                <p className="relative mt-4 leading-relaxed text-muted">{s.body}</p>
                <ul className="relative mt-8 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <li key={it} className="rounded-full border border-line px-3 py-1.5 font-mono text-[11px] text-fg/80">
                      {it}
                    </li>
                  ))}
                </ul>
                <motion.span
                  className="absolute bottom-8 right-8 text-accent opacity-0"
                  variants={{ hover: { opacity: 1, x: 4, y: -4 } }}
                  transition={{ duration: 0.4 }}
                >
                  <ArrowUpRight />
                </motion.span>
              </motion.article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
