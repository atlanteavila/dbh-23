import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import Image from "next/image";
import dbhImage from '../images/images/dbh-bg.jpg';

export default function HeroSection() {
  return (
    <FadeInStagger>
      <section className="relative isolate overflow-hidden min-h-home-screen-hero bg-[#2c444e]">

        {<Image
          width={2830}
          height={678}
          src={dbhImage}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />}

        <FadeIn>
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[white] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="mx-auto max-w-2xl py-4 sm:py-12 lg:py-32">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                Get 50% off your next web hosting plan!{' '}
                <a href="/order" className="font-semibold text-white">
                  <span className="absolute inset-0" aria-hidden="true" />
                  QUEENOFHEAVEN <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Catholic Web Hosting <br /> Where faith meets technology.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Drummer Boy Hosting strives to be the best and most reliable <strong>web hosting organization</strong>. Our goal is to facilitate the work of the Church on the internet. We achieve this by providing you the exact tools you will need to help spread God’s word via this amazingly useful medium. Let us be your trusted source for <strong>Catholic Web Hosting</strong>.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-xl bg-orange-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 w-2xl"
                >
                  Sign Up
                </a>
                <a
                  href="#"
                  className="rounded-xl bg-[#2083ac] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#289dcd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#289dcd]"
                >
                  WordPress Hosting
                </a>
              </div>
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