import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { useRef, type PointerEvent } from 'react'
import { AuthTerminal } from '../components/AuthTerminal'
import { Button, ease, RevealText } from '../components/motion'
import { useSectionLink } from '../components/Navbar'
import { profile } from '../data/content'

export function Hero({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null)
  const go = useSectionLink()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const mx = useSpring(useMotionValue(70), { stiffness: 60, damping: 20 })
  const my = useSpring(useMotionValue(30), { stiffness: 60, damping: 20 })
  const glow = useMotionTemplate`radial-gradient(600px circle at ${mx}% ${my}%, rgba(198,255,61,0.13), transparent 60%)`

  const onMove = (e: PointerEvent) => {
    const r = ref.current!.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width) * 100)
    my.set(((e.clientY - r.top) / r.height) * 100)
  }

  const show = ready ? 'show' : 'hidden'

  return (
    <section ref={ref} onPointerMove={onMove} className="relative min-h-[100svh] overflow-hidden pt-28 md:pt-36">
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: glow }} />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <motion.div style={{ opacity: fade }} className="relative mx-auto grid max-w-[1400px] gap-12 px-4 md:px-10 lg:grid-cols-12">
        <motion.div style={{ y: titleY }} className="lg:col-span-7">
          <motion.p
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-line bg-surface/60 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, ease }}
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            Available for projects · {profile.location} · EN / FR
          </motion.p>

          {ready && (
            <RevealText
              as="h1"
              immediate
              delay={0.1}
              text="I fix the identity problems that block SaaS launches."
              className="font-display text-[clamp(2.8rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]"
            />
          )}
          {!ready && <h1 className="invisible font-display text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.95]">.</h1>}

          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
            initial="hidden"
            animate={show}
            transition={{ duration: 1, ease, delay: 0.9 }}
            className="mt-10 max-w-xl space-y-8"
          >
            <p className="text-lg leading-relaxed text-muted">
              I'm <span className="text-fg">{profile.name}</span>, a full-stack engineer specialized in{' '}
              <span className="text-fg">Auth0, SSO, OAuth 2.0 / OIDC and SAML</span>. Broken login, failed SSO, unsafe tokens or
              permissions that leak across tenants: I make them work, and keep them secure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href={profile.booking} external>
                Book a 30-min auth review <ArrowUpRight size={16} />
              </Button>
              <Button href="/#work" variant="ghost" onClick={go('work')}>
                See my work <ArrowDownRight size={16} />
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <div className="relative lg:col-span-5">
          <motion.div
            className="relative ml-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[28px] border border-line"
            initial={{ clipPath: 'inset(100% 0% 0% 0% round 28px)' }}
            animate={ready ? { clipPath: 'inset(0% 0% 0% 0% round 28px)' } : undefined}
            transition={{ duration: 1.4, ease, delay: 0.3 }}
          >
            <motion.img
              src={profile.photo}
              alt={profile.name}
              style={{ y: imgY }}
              className="h-[120%] w-full scale-110 object-cover object-top grayscale contrast-110"
              initial={{ scale: 1.4 }}
              animate={ready ? { scale: 1.1 } : undefined}
              transition={{ duration: 1.8, ease, delay: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <p className="font-display text-xl font-semibold">{profile.name}</p>
                <p className="text-xs text-muted">Identity Platform Specialist</p>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent">Since 2020</span>
            </div>
          </motion.div>

          <motion.div
            className="relative -mt-24 mr-auto w-[92%] max-w-[440px] lg:-ml-24"
            initial={{ opacity: 0, y: 60 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 1.2, ease, delay: 1.1 }}
          >
            <AuthTerminal />
          </motion.div>
        </div>
      </motion.div>

      <motion.button
        onClick={go('work')}
        className="absolute bottom-8 right-10 hidden flex-col items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted md:flex"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : undefined}
        transition={{ delay: 1.8 }}
      >
        Scroll
        <span className="relative h-12 w-px overflow-hidden bg-line">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-accent"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.button>
    </section>
  )
}
