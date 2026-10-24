import { Link } from 'react-router-dom'
import { routes } from '../routes'

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      to={routes.home}
      className="inline-flex items-center no-underline"
      aria-label="Osha Eğitim ve Danışmanlık"
    >
      <img
        src="/osha-logo.webp"
        alt="Osha"
        className={`h-12 w-auto object-contain sm:h-[3.25rem] ${light ? 'brightness-0 invert' : ''}`}
      />
    </Link>
  )
}
