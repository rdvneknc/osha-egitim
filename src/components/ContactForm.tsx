import { useEffect, useState, type FormEvent } from 'react'
import { CONTACT } from '../contact'
import { useLang } from '../LanguageContext'

const serviceIds = ['tutoring', 'abroad', 'turkey', 'other'] as const

function readPreferredService(): string {
  const stored = sessionStorage.getItem('osha-service')
  if (stored && serviceIds.includes(stored as (typeof serviceIds)[number])) {
    return stored
  }
  return 'tutoring'
}

const fieldClass =
  'rounded-xl border border-line bg-white px-3.5 py-2.5 text-[14px] text-navy outline-none ring-teal focus:ring-2'

export function ContactForm() {
  const { t, lang } = useLang()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('tutoring')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const sync = () => setService(readPreferredService())
    sync()
    window.addEventListener('hashchange', sync)
    window.addEventListener('focus', sync)
    return () => {
      window.removeEventListener('hashchange', sync)
      window.removeEventListener('focus', sync)
    }
  }, [])

  const serviceLabel =
    t.services.items.find((i) => i.id === service)?.title ??
    t.contact.serviceOther

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const body = [
      `${t.contact.name}: ${name}`,
      `${t.contact.phone}: ${phone}`,
      `${t.contact.email}: ${email}`,
      `${t.contact.service}: ${serviceLabel}`,
      '',
      message,
    ].join('\n')

    const waText = encodeURIComponent(
      lang === 'tr'
        ? `Merhaba, ücretsiz görüşme talep ediyorum.\n\n${body}`
        : `Hello, I would like a free consultation.\n\n${body}`,
    )
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${waText}`, '_blank')
    setSent(true)
  }

  if (sent) {
    return (
      <p className="m-0 rounded-xl bg-teal/10 px-5 py-6 text-center text-[15px] text-navy">
        {t.contact.success}
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
      <label className="flex flex-col gap-1.5 text-left">
        <span className="text-[12px] font-medium text-navy/55">
          {t.contact.name}
        </span>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={fieldClass}
        />
      </label>
      <label className="flex flex-col gap-1.5 text-left">
        <span className="text-[12px] font-medium text-navy/55">
          {t.contact.phone}
        </span>
        <input
          required
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={fieldClass}
        />
      </label>
      <label className="flex flex-col gap-1.5 text-left">
        <span className="text-[12px] font-medium text-navy/55">
          {t.contact.email}
        </span>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={fieldClass}
        />
      </label>
      <label className="flex flex-col gap-1.5 text-left">
        <span className="text-[12px] font-medium text-navy/55">
          {t.contact.service}
        </span>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={fieldClass}
        >
          {t.services.items.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
          <option value="other">{t.contact.serviceOther}</option>
        </select>
      </label>
      <label className="flex flex-col gap-1.5 text-left sm:col-span-2">
        <span className="text-[12px] font-medium text-navy/55">
          {t.contact.message}
        </span>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`resize-y ${fieldClass}`}
        />
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border-0 bg-teal px-7 py-3 text-[14px] font-semibold text-white transition hover:bg-teal-dark sm:w-auto"
        >
          {t.cta.button}
        </button>
      </div>
    </form>
  )
}
