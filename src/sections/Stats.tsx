import { Counter, Marquee, Reveal } from '../components/motion'
import { stack, stats } from '../data/content'

export function Stats() {
  return (
    <section className="py-20 md:py-28">
      <div className="space-y-6 border-y border-line py-10">
        <Marquee items={stack} />
        <Marquee items={[...stack].reverse()} reverse speed={50} />
      </div>

      <div className="mx-auto mt-20 grid max-w-[1400px] grid-cols-2 gap-px overflow-hidden px-4 md:mt-28 md:grid-cols-4 md:px-10">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="border-l border-line py-6 pl-6 pr-4">
            <p className="font-display text-6xl font-semibold tracking-tight md:text-8xl">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-muted">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
