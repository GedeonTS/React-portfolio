import { ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Button, Reveal, RevealText } from '../components/motion'
import { Preloader } from '../components/Preloader'
import { scrollToTarget } from '../components/SmoothScroll'
import { projects } from '../data/content'
import { Contact } from '../sections/Contact'
import { Experience } from '../sections/Experience'
import { FAQ } from '../sections/FAQ'
import { Hero } from '../sections/Hero'
import { Pricing } from '../sections/Pricing'
import { Process } from '../sections/Process'
import { Services } from '../sections/Services'
import { Stats } from '../sections/Stats'
import { Testimonials } from '../sections/Testimonials'
import { ProjectList, Work } from '../sections/Work'

const SEEN_KEY = 'ug-preloader-seen'

function seenPreloader() {
  try {
    return sessionStorage.getItem(SEEN_KEY) === '1'
  } catch {
    return false
  }
}

export function Home() {
  const [ready, setReady] = useState(seenPreloader)
  const { state } = useLocation() as { state: { scrollTo?: string } | null }

  useEffect(() => {
    if (!ready || !state?.scrollTo) return
    const t = setTimeout(() => scrollToTarget(`#${state.scrollTo}`), 700)
    return () => clearTimeout(t)
  }, [ready, state])

  return (
    <>
      {!ready && (
        <Preloader
          onDone={() => {
            try {
              sessionStorage.setItem(SEEN_KEY, '1')
            } catch {
              /* private mode: preloader simply shows again next visit */
            }
            setReady(true)
          }}
        />
      )}
      <Hero ready={ready} />
      <Stats />
      <Services />
      <Work />
      <Experience />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}

export function WorkIndex() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 pb-24 pt-36 md:px-10 md:pb-36 md:pt-44">
      <Reveal y={10} className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">
        {projects.length} projects · 2020 — today
      </Reveal>
      <RevealText
        as="h1"
        immediate
        text="All work."
        className="mb-20 font-display text-[clamp(4rem,14vw,14rem)] font-semibold leading-[0.85] tracking-[-0.05em]"
      />
      <ProjectList items={projects} />
    </section>
  )
}

export function NotFound() {
  return (
    <section className="flex min-h-[100svh] flex-col items-start justify-center px-4 md:px-10">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">401 · 403 · 404</p>
      <RevealText
        as="h1"
        immediate
        text="Access denied. Just kidding, this page doesn't exist."
        className="mt-6 max-w-5xl font-display text-[clamp(2.5rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]"
      />
      <div className="mt-12">
        <Button href="/">
          <ArrowLeft size={16} /> Back home
        </Button>
      </div>
    </section>
  )
}
