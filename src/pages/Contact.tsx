import { MapPin } from 'lucide-react'
import { ContactForm } from '../components/ContactForm'
import { PageHero } from '../components/PageHero'
import { CONTACT } from '../contact'
import { useLang } from '../LanguageContext'

export function Contact() {
  const { t, lang } = useLang()

  return (
    <>
      <PageHero
        title={t.pages.contact.title}
        subtitle={t.pages.contact.subtitle}
      />

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-6">
          <aside className="h-fit rounded-2xl bg-mist p-6">
            <div className="flex items-start gap-2.5">
              <MapPin size={18} className="mt-0.5 shrink-0 text-teal" />
              <div>
                <div className="text-[14px] font-bold text-navy">
                  {t.contact.locationTitle}
                </div>
                <p className="mt-1 m-0 text-[14px] leading-relaxed text-navy/65">
                  {CONTACT.address[lang]}
                </p>
                <p className="mt-2 m-0 text-[13px] text-navy/50">
                  {t.contact.locationHint}
                </p>
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-[13px] font-semibold text-teal no-underline hover:underline"
                >
                  {t.contact.maps}
                </a>
              </div>
            </div>

            <div className="mt-6 border-t border-line pt-5 text-[13px] text-navy/55">
              <div>
                <span className="font-semibold text-navy">
                  {t.contact.foundedLabel}:
                </span>{' '}
                {CONTACT.founded}
              </div>
              <div className="mt-1">
                <span className="font-semibold text-navy">E-mail:</span>{' '}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-teal no-underline hover:underline"
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </aside>

          <div className="rounded-2xl bg-mist px-5 py-7 sm:px-8 sm:py-8">
            <p className="m-0 mb-5 text-[14px] text-navy/60">{t.contact.hint}</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
