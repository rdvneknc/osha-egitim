import { Check } from 'lucide-react'
import { useLang } from '../LanguageContext'

const IMG =
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80'

export function Approach() {
  const { t } = useLang()

  return (
    <section className="bg-mist py-16 lg:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-14 lg:px-6">
        <div className="overflow-hidden rounded-[1.75rem]">
          <img
            src={IMG}
            alt=""
            className="aspect-[5/4] w-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-[1.75rem] font-extrabold tracking-tight text-navy sm:text-[2rem]">
            {t.approach.title}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-navy/60">
            {t.approach.subtitle}
          </p>
          <ul className="mt-7 flex list-none flex-col gap-3.5 p-0">
            {t.approach.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
                  <Check size={14} strokeWidth={3} />
                </span>
                <span className="text-[15px] font-medium text-navy">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
