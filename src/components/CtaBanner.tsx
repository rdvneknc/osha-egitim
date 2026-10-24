import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLang } from '../LanguageContext'
import { routes } from '../routes'

export function CtaBanner() {
  const { t } = useLang()

  return (
    <section className="px-5 pb-10 lg:px-6">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl bg-navy shadow-[0_16px_40px_-24px_rgba(10,31,61,0.45)]">
        <div className="relative aspect-[2.4/1] min-h-[160px] w-full max-h-[240px] sm:max-h-[280px]">
          <img
            src="/osha-banner.webp"
            alt=""
            width={1600}
            height={900}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy/55" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center sm:px-8">
            <h2 className="max-w-lg text-[1.2rem] font-extrabold tracking-tight text-white sm:text-[1.5rem]">
              {t.cta.title}
            </h2>
            <Link
              to={routes.contact}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-[13px] font-semibold text-white no-underline transition hover:bg-teal-dark"
            >
              {t.cta.button}
              <ArrowUpRight size={15} strokeWidth={2.4} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
