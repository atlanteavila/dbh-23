import { type Metadata } from 'next'

import { FadeIn } from '@/components/FadeIn'
import HeroSection from '@/components/HeroSection'
import PricingSection from '@/components/PricingSection'
import { GridList } from '@/components/GridList'
import { Container } from '@/components/Container'
import WhyCatholicWebHosting from '@/components/WhyCatholicWebHosting'

export const metadata: Metadata = {
  title: 'Catholic Web Hosting - Where faith meets technology. | DrummerBoyHosting.com',
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  return (
    <>
      <HeroSection />
      <FadeIn>
        <div className="-mt-[190px] p-30 bg-white max-w-5xl m-auto rounded-lg relative">
          <PricingSection />
        </div>
      </FadeIn>
      <Container>
        <FadeIn>
          <WhyCatholicWebHosting />
        </FadeIn>
      </Container>
    </>
  )
}
