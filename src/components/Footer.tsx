import { ArrowUp } from 'lucide-react'
import { profile } from '../data/content'
import { Magnetic } from './motion'
import { scrollToTarget } from './SmoothScroll'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-4 py-12 md:flex-row md:items-end md:justify-between md:px-10">
        <div className="space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Elsewhere</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-fg/80 underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-end justify-between gap-10 md:justify-end">
          <div className="text-sm text-muted">
            <p>© {new Date().getFullYear()} {profile.name}</p>
            <p>{profile.location} · {profile.languages}</p>
          </div>
          <Magnetic>
            <button
              onClick={() => scrollToTarget(0)}
              className="grid h-14 w-14 place-items-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  )
}
