import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLang } from '../LanguageContext'
import { routes } from '../routes'
import { Logo } from './Logo'

export function Header() {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)

  const links = [
    { to: routes.tutoring, label: t.nav.tutoring },
    { to: routes.abroad, label: t.nav.abroad },
    { to: routes.turkey, label: t.nav.turkey },
    { to: routes.about, label: t.nav.about },
  ]

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      'relative font-display text-[14px] font-medium tracking-[-0.01em] no-underline transition-colors',
      isActive
        ? 'text-navy after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-teal'
        : 'text-muted hover:text-navy',
    ].join(' ')

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 lg:px-6">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3.5">
          <div className="flex items-center gap-1 font-display text-[12.5px] font-semibold tracking-[0.04em]">
            <button
              type="button"
              onClick={() => setLang('tr')}
              className={`cursor-pointer border-0 bg-transparent px-0.5 py-0.5 transition-colors ${
                lang === 'tr' ? 'text-teal' : 'text-muted/70 hover:text-navy'
              }`}
            >
              TR
            </button>
            <span className="text-line">/</span>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`cursor-pointer border-0 bg-transparent px-0.5 py-0.5 transition-colors ${
                lang === 'en' ? 'text-teal' : 'text-muted/70 hover:text-navy'
              }`}
            >
              EN
            </button>
          </div>

          <Link
            to={routes.contact}
            className="hidden items-center gap-1.5 rounded-full bg-navy px-4 py-2.5 font-display text-[13px] font-semibold text-white no-underline transition hover:bg-teal sm:inline-flex"
          >
            {t.nav.cta}
            <ArrowUpRight size={14} strokeWidth={2.4} />
          </Link>

          <button
            type="button"
            className="inline-flex cursor-pointer items-center justify-center rounded-lg border-0 bg-mist p-2 text-navy lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    'rounded-lg px-2 py-2.5 font-display text-[14.5px] font-medium no-underline transition-colors',
                    isActive ? 'bg-mist text-teal' : 'text-muted hover:text-navy',
                  ].join(' ')
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to={routes.contact}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-navy px-4 py-3 font-display text-[14px] font-semibold text-white no-underline"
            >
              {t.nav.cta}
              <ArrowUpRight size={14} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
