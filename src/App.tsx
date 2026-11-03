import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, type ReactNode } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Cursor } from './components/Cursor'
import { Footer } from './components/Footer'
import { ease } from './components/motion'
import { Navbar } from './components/Navbar'
import { SmoothScroll } from './components/SmoothScroll'
import { CaseStudy } from './pages/CaseStudy'
import { Home, NotFound, WorkIndex } from './pages/Pages'
import { projects } from './data/content'

const titles: Record<string, string> = {
  '/': 'Ushindi Gedeon — Auth0 & SSO Engineer for SaaS',
  '/work': 'Work — Ushindi Gedeon',
}

/** A curtain sweeps across on every route change. */
function Page({ children }: { children: ReactNode }) {
  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 z-[80] origin-bottom bg-accent"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.8, ease }}
      />
      <motion.div
        className="pointer-events-none fixed inset-0 z-[80] origin-top bg-accent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.6, ease }}
      />
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
        {children}
        <Footer />
      </motion.main>
    </>
  )
}

export default function App() {
  const location = useLocation()

  useEffect(() => {
    const slug = location.pathname.match(/^\/work\/(.+)/)?.[1]
    const project = projects.find((p) => p.slug === slug)
    document.title = project ? `${project.title} — Ushindi Gedeon` : titles[location.pathname] ?? 'Ushindi Gedeon'
  }, [location.pathname])

  return (
    <SmoothScroll>
      <div className="grain">
        <Cursor />
        <Navbar />
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Page><Home /></Page>} />
            <Route path="/work" element={<Page><WorkIndex /></Page>} />
            <Route path="/work/:slug" element={<Page><CaseStudy /></Page>} />
            <Route path="*" element={<Page><NotFound /></Page>} />
          </Routes>
        </AnimatePresence>
      </div>
    </SmoothScroll>
  )
}
