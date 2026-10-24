import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLang } from '../LanguageContext'
import { routes } from '../routes'

/** Üst banner — kenardan kenara. Görsel: public/osha-banner-1920x700.webp */
export function Hero() {
  const { t } = useLang()

  return (
    <section className="relative w-full overflow-hidden bg-navy">
      <div className="relative h-[min(34vw,460px)] min-h-[260px] w-full max-h-[500px]">
        <img
          src="/osha-banner-1920x700.webp"
          alt=""
          width={1920}
          height={700}
          className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/50 to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-5 lg:px-6">
          <div className="max-w-xl">
            <h1 className="text-[1.85rem] font-extrabold leading-[1.15] tracking-tight text-white sm:text-[2.35rem]">
              {t.hero.titleBefore}
              <span className="text-teal">{t.hero.titleAccent}</span>
              {t.hero.titleAfter}
            </h1>
            <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-white/75">
              {t.hero.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                to={routes.contact}
                className="inline-flex items-center rounded-full bg-teal px-5 py-3 text-[14px] font-semibold text-white no-underline transition hover:bg-teal-dark"
              >
                {t.hero.primaryCta}
              </Link>
              <a
                href="#services"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-white no-underline transition hover:text-teal"
              >
                {t.hero.secondaryCta}
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
