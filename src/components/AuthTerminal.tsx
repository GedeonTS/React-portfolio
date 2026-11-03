import { useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

const lines = [
  { t: '$ curl /authorize?client_id=acme&response_type=code', c: 'text-fg' },
  { t: '→ redirect  idp=okta  tenant=acme-corp', c: 'text-muted' },
  { t: '→ saml:assertion  signed ✓  audience ✓', c: 'text-muted' },
  { t: '→ POST /oauth/token  grant=authorization_code', c: 'text-muted' },
  { t: '✓ id_token verified   alg=RS256  exp=3600s', c: 'text-accent' },
  { t: '✓ refresh_token rotated', c: 'text-accent' },
  { t: '✓ roles=[admin]  tenant isolation enforced', c: 'text-accent' },
]

/** A small terminal that types out a federated login, then loops. */
export function AuthTerminal() {
  const reduce = useReducedMotion()
  const [line, setLine] = useState(reduce ? lines.length : 0)
  const [char, setChar] = useState(0)

  useEffect(() => {
    if (reduce) return
    if (line >= lines.length) {
      const t = setTimeout(() => {
        setLine(0)
        setChar(0)
      }, 3500)
      return () => clearTimeout(t)
    }
    const full = lines[line].t
    if (char < full.length) {
      const t = setTimeout(() => setChar((c) => c + 1), line === 0 ? 28 : 12)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setLine((l) => l + 1)
      setChar(0)
    }, 380)
    return () => clearTimeout(t)
  }, [line, char, reduce])

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-line bg-surface/80 shadow-2xl shadow-black/50 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[11px] text-muted">sso-handshake.log</span>
      </div>
      <pre className="min-h-[214px] overflow-hidden whitespace-pre-wrap break-all p-5 font-mono text-[11px] leading-6 md:text-xs">
        {lines.slice(0, line).map((l, i) => (
          <div key={i} className={l.c}>
            {l.t}
          </div>
        ))}
        {line < lines.length && (
          <div className={lines[line].c}>
            {lines[line].t.slice(0, char)}
            <span className="inline-block h-3.5 w-2 translate-y-0.5 bg-accent" style={{ animation: 'blink 1s steps(1) infinite' }} />
          </div>
        )}
      </pre>
    </div>
  )
}
