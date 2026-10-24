import { Check, MapPin } from 'lucide-react'
import { CONTACT } from '../contact'
import { CtaBanner } from '../components/CtaBanner'
import { PageHero } from '../components/PageHero'
import { useLang } from '../LanguageContext'

export function About() {
  const { t, lang } = useLang()
  const page = t.pages.about

  return (
    <>
      <PageHero title={page.title} subtitle={page.subtitle} />

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:px-6">
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

            <h2 className="mt-10 text-[1.1rem] font-bold text-navy">
              {page.sectionTitle}
            </h2>
            <ul className="mt-4 flex list-none flex-col gap-3 p-0">
              {page.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-[15px] font-medium text-navy">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit rounded-2xl bg-mist p-6">
            <div className="text-[12px] font-semibold uppercase tracking-wide text-navy/45">
              {t.contact.foundedLabel}
            </div>
            <div className="mt-1 text-[1.75rem] font-extrabold text-teal">
              {CONTACT.founded}
            </div>

            <div className="mt-6 border-t border-line pt-6">
              <div className="flex items-start gap-2.5">
                <MapPin size={18} className="mt-0.5 shrink-0 text-teal" />
                <div>
                  <div className="text-[13px] font-semibold text-navy">
                    {t.contact.locationTitle}
                  </div>
                  <p className="mt-1 m-0 text-[14px] leading-relaxed text-navy/65">
                    {CONTACT.address[lang]}
                  </p>
                  <a
                    href={CONTACT.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-[13px] font-semibold text-teal no-underline hover:underline"
                  >
                    {t.contact.maps}
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
