import { useLang } from '../LanguageContext'

export function Process() {
  const { t } = useLang()

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-6">
        <h2 className="text-center text-[1.75rem] font-extrabold tracking-tight text-navy sm:text-[2rem]">
          {t.process.title}
        </h2>

        <div className="relative mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          <div
            className="pointer-events-none absolute top-5 right-[16%] left-[16%] hidden h-px bg-line md:block"
            aria-hidden
          />
          {t.process.steps.map((step) => (
            <div key={step.num} className="relative text-center md:px-4">
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-teal bg-white text-[13px] font-bold text-teal">
                {step.num}
              </div>
              <h3 className="text-[16px] font-bold text-navy">{step.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-navy/55">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
