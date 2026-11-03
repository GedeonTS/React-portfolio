import { animate, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ease } from './motion'
import { stopScroll } from './SmoothScroll'

/** Counter 0 → 100, then a curtain lifts. Shown once per session. */
export function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    stopScroll(true)
    const controls = animate(0, 100, {
      duration: 1.6,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => setLeaving(true),
    })
    return () => controls.stop()
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[90] flex flex-col justify-between bg-bg p-6 md:p-10"
      initial={{ y: 0 }}
      animate={leaving ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 1, ease, delay: 0.2 }}
      onAnimationComplete={() => {
        if (leaving) {
          stopScroll(false)
          onDone()
        }
      }}
    >
      <div className="flex justify-between font-mono text-xs uppercase tracking-[0.2em] text-muted">
        <span>Full-Stack Engineer</span>
        <span>Portfolio ©{new Date().getFullYear()}</span>
      </div>
      <div className="overflow-hidden">
        <motion.p
          className="font-display text-5xl font-semibold tracking-tight md:text-8xl"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease }}
        >
          Ushindi <span className="text-accent">Gedeon.</span>
        </motion.p>
      </div>
      <div className="flex items-end justify-between">
        <div className="h-px flex-1 bg-line">
          <div className="h-px bg-accent" style={{ width: `${count}%` }} />
        </div>
        <span className="ml-6 font-display text-6xl font-semibold tabular-nums md:text-9xl">{count}</span>
      </div>
    </motion.div>
  )
}
