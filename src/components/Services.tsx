import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLang } from '../LanguageContext'
import { serviceRoutes } from '../routes'

const images = [
  '/service-tutoring.jpg',
  'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
]

export function Services() {
  const { t } = useLang()

  return (
    <section id="services" className="scroll-mt-24 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-6">
        <h2 className="max-w-md text-[1.75rem] font-extrabold tracking-tight text-navy sm:text-[2rem]">
          {t.services.title}
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {t.services.items.map((item, i) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-mist"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={images[i]}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                {item.id === 'turkey' && (
                  <span className="absolute bottom-3 left-3 rounded-md bg-navy/85 px-2.5 py-1 text-[11px] font-bold tracking-wide text-white">
                    TÜRKİYE
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-[17px] font-bold leading-snug text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-navy/60">
                  {item.desc}
                </p>
                {item.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white px-2 py-1 text-[11px] font-semibold text-teal"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <Link
                  to={serviceRoutes[item.id as keyof typeof serviceRoutes]}
                  className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-navy no-underline transition hover:text-teal"
                >
                  {t.services.explore}
                  <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
