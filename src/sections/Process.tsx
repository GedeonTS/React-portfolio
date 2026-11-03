import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { SectionLabel } from '../components/motion'
import { process } from '../data/content'

/** Pinned section: steps light up one after another as you scroll. */
export function Process() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const [step, setStep] = useState(0)
  const bar = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setStep(Math.min(process.length - 1, Math.floor(v * process.length)))
  })

  return (
    <section ref={ref} className="relative" style={{ height: `${process.length * 70 + 30}vh` }}>
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
          <SectionLabel index="04">Process</SectionLabel>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="font-display text-[clamp(2.4rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.03em]">
                From audit to <span className="text-accent">shipped.</span>
              </p>
              <div className="mt-10 h-px w-full bg-line">
                <motion.div className="h-px bg-accent" style={{ width: bar }} />
              </div>
              <p className="mt-4 font-mono text-xs text-muted">
                Step {step + 1} / {process.length}
              </p>
            </div>
            <ol className="space-y-3 md:col-span-6 md:col-start-7">
              {process.map((p, i) => {
                const on = i === step
                return (
                  <motion.li
                    key={p.title}
                    animate={{ opacity: i <= step ? 1 : 0.25 }}
                    transition={{ duration: 0.5 }}
                    className={`rounded-3xl border p-6 transition-colors duration-500 md:p-8 ${
                      on ? 'border-accent/40 bg-surface' : 'border-line bg-transparent'
                    }`}
                  >
                    <div className="flex items-baseline gap-5">
                      <span className={`font-mono text-sm ${on ? 'text-accent' : 'text-muted'}`}>0{i + 1}</span>
                      <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{p.title}</h3>
                    </div>
                    <motion.div
                      initial={false}
                      animate={{ height: on ? 'auto' : 0, opacity: on ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 pl-10 leading-relaxed text-muted">{p.body}</p>
                    </motion.div>
                  </motion.li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
