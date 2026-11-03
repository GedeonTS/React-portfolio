import emailjs from '@emailjs/browser'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, Loader2, MessageCircle } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { ease, Magnetic, Reveal, RevealText, SectionLabel } from '../components/motion'
import { profile } from '../data/content'

const topics = ['Auth0', 'Enterprise SSO', 'Multi-tenant / RBAC', 'Auth audit', 'Full-stack SaaS', 'Other']
const budgets = ['< $1k', '$1k – 5k', '$5k – 15k', '$15k+']

const env = import.meta.env
const emailConfigured = Boolean(env.VITE_EMAILJS_SERVICE_ID && env.VITE_EMAILJS_TEMPLATE_ID && env.VITE_EMAILJS_PUBLIC_KEY)

type Status = 'idle' | 'sending' | 'sent' | 'error'

function Chips({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          type="button"
          key={o}
          onClick={() => onChange(o)}
          className={`rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
            value === o ? 'border-accent bg-accent text-accent-ink' : 'border-line text-fg/80 hover:border-fg'
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  )
}

const field =
  'w-full border-b border-line bg-transparent py-4 text-lg outline-none transition-colors placeholder:text-muted/60 focus:border-accent'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', topic: topics[1], budget: budgets[1] })
  const [status, setStatus] = useState<Status>('idle')
  const set = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }))

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    const message = `[${form.topic} · ${form.budget}]\n\n${form.message}`
    if (!emailConfigured) {
      const subject = encodeURIComponent(`Project inquiry: ${form.topic}`)
      const body = encodeURIComponent(`${message}\n\n— ${form.name} (${form.email})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      return
    }
    setStatus('sending')
    try {
      await emailjs.send(
        env.VITE_EMAILJS_SERVICE_ID,
        env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, to_name: profile.name, message },
        { publicKey: env.VITE_EMAILJS_PUBLIC_KEY },
      )
      setStatus('sent')
      setForm((f) => ({ ...f, name: '', email: '', message: '' }))
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
      <div className="relative mx-auto max-w-[1400px] px-4 md:px-10">
        <SectionLabel index="08">Contact</SectionLabel>
        <RevealText
          text="Let's work together."
          className="max-w-6xl font-display text-[clamp(2.8rem,8vw,8rem)] font-semibold leading-[0.92] tracking-[-0.04em]"
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-12">
          <Reveal className="space-y-10 lg:col-span-4">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">Email</p>
              <a href={`mailto:${profile.email}`} className="text-xl underline-offset-4 hover:text-accent hover:underline">
                {profile.email}
              </a>
            </div>
            <Magnetic strength={0.25}>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-4 text-sm font-medium text-[#0a0a0b] transition-transform hover:scale-[1.03]"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
                <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
              </a>
            </Magnetic>
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">Availability</p>
              <p className="text-xl">{profile.location}</p>
              <p className="text-muted">Replies within hours · {profile.languages}</p>
            </div>
            <Magnetic strength={0.25}>
              <a
                href={profile.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-line px-6 py-4 text-sm transition-colors hover:border-accent hover:text-accent"
              >
                Prefer Upwork? Hire me there
                <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
              </a>
            </Magnetic>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7 lg:col-start-6">
            <form onSubmit={submit} className="space-y-10">
              <div className="grid gap-8 md:grid-cols-2">
                <input required className={field} placeholder="Your name" value={form.name} onChange={(e) => set('name')(e.target.value)} />
                <input
                  required
                  type="email"
                  className={field}
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => set('email')(e.target.value)}
                />
              </div>
              <div className="space-y-4">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">I need help with</p>
                <Chips options={topics} value={form.topic} onChange={set('topic')} />
              </div>
              <div className="space-y-4">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Budget</p>
                <Chips options={budgets} value={form.budget} onChange={set('budget')} />
              </div>
              <textarea
                required
                rows={4}
                className={`${field} resize-none`}
                placeholder="Tell me about your project and your stack…"
                value={form.message}
                onChange={(e) => set('message')(e.target.value)}
              />

              <div className="flex flex-wrap items-center gap-6">
                <Magnetic>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-full bg-accent font-medium text-accent-ink disabled:opacity-70 md:h-44 md:w-44"
                  >
                    <span className="absolute inset-0 translate-y-full rounded-full bg-fg transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-y-0" />
                    <span className="relative flex items-center gap-2">
                      {status === 'sending' ? <Loader2 className="animate-spin" size={20} /> : 'Send it'}
                      {status !== 'sending' && <ArrowUpRight size={18} />}
                    </span>
                  </button>
                </Magnetic>
                <AnimatePresence mode="wait">
                  {status === 'sent' && (
                    <motion.p
                      key="ok"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease }}
                      className="flex items-center gap-2 text-accent"
                    >
                      <Check size={18} /> Thanks, I'll get back to you within hours.
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p key="err" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-[#ff6b6b]">
                      Something went wrong. Email me directly at {profile.email}.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
