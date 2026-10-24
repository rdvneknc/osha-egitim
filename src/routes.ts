export const routes = {
  home: '/',
  tutoring: '/ozel-ders',
  abroad: '/yurt-disinda-egitim',
  turkey: '/turkiyede-egitim',
  about: '/hakkimizda',
  contact: '/iletisim',
} as const

export const serviceRoutes = {
  tutoring: routes.tutoring,
  abroad: routes.abroad,
  turkey: routes.turkey,
} as const
