import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CtaBanner } from '../components/CtaBanner'
import { PageHero } from '../components/PageHero'
import { useLang } from '../LanguageContext'
import { routes } from '../routes'

type ServiceId = 'tutoring' | 'abroad' | 'turkey'

export function ServicePage({ id }: { id: ServiceId }) {
  const { t } = useLang()
  const page = t.pages[id]
  const item = t.services.items.find((s) => s.id === id)!

  return (
    <>
      <PageHero title={page.title} subtitle={page.subtitle} />

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-5 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <div className="space-y-4">
                {page.paragraphs.map((p) => (
                  <p
                    key={p.slice(0, 40)}
                    className="m-0 text-[15px] leading-relaxed text-navy/70"
                  >
                    {p}
                  </p>
                ))}
              </div>

              {item.tags.length > 0 && (
                <div className="mt-7 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-mist px-2.5 py-1 text-[12px] font-semibold text-teal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <Link
                to={routes.contact}
                onClick={() => sessionStorage.setItem('osha-service', id)}
                className="mt-8 inline-flex items-center rounded-full bg-navy px-5 py-3 text-[14px] font-semibold text-white no-underline transition hover:bg-navy-soft"
              >
                {t.nav.cta}
              </Link>
            </div>

            <div>
              <h2 className="m-0 text-[1.1rem] font-bold text-navy">
                {page.sectionTitle}
              </h2>
              <ul className="mt-4 flex list-none flex-col gap-3 p-0">
                {page.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-xl bg-mist px-4 py-3.5"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span className="text-[14.5px] font-medium text-navy">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
