import { Link } from 'react-router-dom'
import { useLang } from '../LanguageContext'
import { routes } from '../routes'
import { Logo } from './Logo'

export function Footer() {
  const { t } = useLang()

  const links = [
    { to: routes.tutoring, label: t.nav.tutoring },
    { to: routes.abroad, label: t.nav.abroad },
    { to: routes.turkey, label: t.nav.turkey },
    { to: routes.about, label: t.nav.about },
  ]

  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-8 sm:flex-row sm:items-center lg:px-6">
        <div>
          <Logo />
          <p className="mt-2 mb-0 text-[12px] text-navy/45">{t.footer.location}</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[13px] font-medium text-navy/55 no-underline transition hover:text-teal"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="m-0 text-[12px] text-navy/40">
          © {new Date().getFullYear()} Osha. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
