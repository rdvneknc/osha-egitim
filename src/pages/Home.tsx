import { Approach } from '../components/Approach'
import { CtaBanner } from '../components/CtaBanner'
import { Hero } from '../components/Hero'
import { Process } from '../components/Process'
import { Services } from '../components/Services'

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Approach />
      <Process />
      <CtaBanner />
    </>
  )
}
