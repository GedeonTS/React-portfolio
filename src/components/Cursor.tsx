import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

type Mode = 'default' | 'link' | 'view'

/** Dot + trailing ring. Grows on links and shows "View" on project rows. Desktop only. */
export function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [mode, setMode] = useState<Mode>('default')
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.5 })
  const ringY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.5 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return
    setEnabled(true)
    document.documentElement.classList.add('has-cursor')

    const move = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const el = (e.target as HTMLElement).closest('[data-cursor], a, button') as HTMLElement | null
      setMode(el ? ((el.dataset.cursor as Mode) ?? 'link') : 'default')
    }
    window.addEventListener('pointermove', move)
    return () => {
      window.removeEventListener('pointermove', move)
      document.documentElement.classList.remove('has-cursor')
    }
  }, [x, y])

  if (!enabled) return null

  const size = mode === 'view' ? 96 : mode === 'link' ? 56 : 32

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-accent"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: mode === 'default' ? 1 : 0 }}
      />
      <motion.div
        className={`pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full ${
          mode === 'view' ? 'bg-accent' : 'border border-fg/40'
        }`}
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{ width: size, height: size }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <AnimatePresence>
          {mode === 'view' && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="font-mono text-xs uppercase tracking-widest text-accent-ink"
            >
              View
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
