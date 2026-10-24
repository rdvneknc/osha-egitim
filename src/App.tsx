import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { LanguageProvider } from './LanguageContext'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { ServicePage } from './pages/ServicePage'
import { routes } from './routes'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path={routes.tutoring}
              element={<ServicePage id="tutoring" />}
            />
            <Route
              path={routes.abroad}
              element={<ServicePage id="abroad" />}
            />
            <Route
              path={routes.turkey}
              element={<ServicePage id="turkey" />}
            />
            <Route path={routes.about} element={<About />} />
            <Route path={routes.contact} element={<Contact />} />
            <Route path="*" element={<Navigate to={routes.home} replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
