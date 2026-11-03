import { Star } from 'lucide-react'
import { Reveal, RevealText, SectionLabel } from '../components/motion'
import { testimonials } from '../data/content'

export function Testimonials() {
  const t = testimonials[0]
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-24 md:px-10 md:py-36">
      <SectionLabel index="06">Client words</SectionLabel>
      <div className="grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-1">
          <span className="font-display text-[8rem] leading-none text-accent">“</span>
        </Reveal>
        <div className="md:col-span-10">
          <RevealText
            as="p"
            text={t.quote}
            className="font-display text-[clamp(1.8rem,3.8vw,3.6rem)] font-medium leading-[1.15] tracking-[-0.02em]"
          />
          <Reveal delay={0.4} className="mt-10 flex flex-wrap items-center gap-6">
            <div className="flex gap-1 text-accent">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="text-sm text-muted">
              <span className="text-fg">{t.author}</span> · {t.project} · {t.date}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
