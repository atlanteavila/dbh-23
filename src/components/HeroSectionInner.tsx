import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import dbhImage from '../images/images/dbh-bg.jpg';
import Image from "next/image";

export default function HeroSectionInner({
  image,
  title,
  description
}: {
  image?: string,
  title: string,
  description?: string,
}) {
  return (
    <FadeInStagger>
      <section className="relative isolate overflow-hidden max-h-xl">

        <Image
          priority
          src={image ? image : dbhImage}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        <FadeIn>
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          ></div>
        </FadeIn>
        <FadeIn>
          <div className="mx-auto max-w-2xl py-4 sm:py-12 lg:py-32">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                {title}
              </h1>
              {description && <p className="mt-6 text-lg leading-8 text-gray-300">
                {description}
              </p>}
            </div>
          </div>
        </FadeIn>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <FadeIn>
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </FadeIn>
        </div>
      </section>
    </FadeInStagger>
  )
}