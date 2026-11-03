import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { Reveal, RevealText, SectionLabel } from '../components/motion'
import { useSectionLink } from '../components/Navbar'
import { pricing, profile } from '../data/content'

export function Pricing() {
  const go = useSectionLink()
  return (
    <section id="pricing" className="mx-auto max-w-[1400px] px-4 py-24 md:px-10 md:py-36">
      <SectionLabel index="05">Pricing</SectionLabel>
      <RevealText
        text="Simple ways to work together."
        className="mb-16 max-w-4xl font-display text-[clamp(2.4rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.03em]"
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {pricing.map((p, i) => {
          const href = p.name === 'Implementation' ? '/#contact' : p.name === 'Auth review' ? profile.booking : profile.upwork
          const internal = href.startsWith('/#')
          return (
            <Reveal key={p.name} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                className={`relative flex h-full flex-col rounded-3xl border p-8 md:p-10 ${
                  p.highlight ? 'border-accent bg-accent text-accent-ink' : 'border-line bg-surface'
                }`}
              >
                {p.highlight && (
                  <span className="absolute right-6 top-6 rounded-full bg-accent-ink px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
                    Most requested
                  </span>
                )}
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] opacity-70">{p.name}</h3>
                <p className="mt-8 flex items-baseline gap-2">
                  <span className="font-display text-6xl font-semibold tracking-tight">{p.price}</span>
                  <span className="text-sm opacity-70">{p.unit}</span>
                </p>
                <p className={`mt-6 leading-relaxed ${p.highlight ? 'text-accent-ink/80' : 'text-muted'}`}>{p.body}</p>
                <ul className="mt-8 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <Check size={16} className={p.highlight ? '' : 'text-accent'} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={href}
                  onClick={internal ? go('contact') : undefined}
                  target={internal ? undefined : '_blank'}
                  rel={internal ? undefined : 'noopener noreferrer'}
                  className={`group mt-10 flex items-center justify-between rounded-full px-6 py-4 text-sm font-medium transition-colors ${
                    p.highlight ? 'bg-accent-ink text-fg hover:bg-surface-2' : 'border border-line hover:border-accent hover:text-accent'
                  }`}
                >
                  {p.cta}
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:rotate-45" />
                </a>
              </motion.article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
