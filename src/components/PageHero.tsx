type Props = {
  title: string
  subtitle: string
}

export function PageHero({ title, subtitle }: Props) {
  return (
    <section className="border-b border-line bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-12 lg:px-6 lg:py-14">
        <h1 className="max-w-2xl text-[1.85rem] font-extrabold tracking-tight text-navy sm:text-[2.25rem]">
          {title}
        </h1>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-navy/60">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
