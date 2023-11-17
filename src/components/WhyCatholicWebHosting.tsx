import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
  UserPlusIcon,
} from '@heroicons/react/20/solid'
import { FadeIn } from './FadeIn'

const features = [
  {
    name: 'Our faith motivates us.',
    description: 'Don’t let our faith based approach to business turn you away–This is what binds us to pursue excellence! We strive to provide you with the best Catholic Web Site Hosting possible!',
    icon: UserPlusIcon,
  },
  {
    name: 'We share your values.',
    description: 'Our goal is quite honestly to help evangelize what Pope Emeritus Benedict XVI called the digital continent. We are trying to make that as easy as possible! We’re here for Christ and His Church!',
    icon: LockClosedIcon,
  },
  {
    name: '99.9% uptime guarantee.',
    description: 'Down time for a website is not a good thing. We host our servers in one of the largest data centers in the U.S. Our server is not “over-bloated” so downtime is pretty rare around here.',
    icon: ServerIcon,
  },
  {
    name: '15 day money back guarantee.',
    description: 'You can shop with confidence. We want your experience to be excellent–if you’re not happy with our service, simply ask for a full refund. No questions asked within the first 15 days!',
    icon: FingerPrintIcon,
  },
  {
    name: 'Easily transfer your website.',
    description: 'If you’re interested in moving your existing site to our servers, we’ll gladly take that hassle off your hands. We’ll professionally move your services to our servers 100% free of charge!',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Reliable Support.',
    description: 'The number one compliment we get from our customers is our super star support. We’re here to answer your questions. DBH is not a sideline business. It’s our full time business and we’re always available for you!',
    icon: ServerIcon,
  },
]

export default function WhyCatholicWebHosting() {
  return (
    <div className="bg-white py-24 sm:py-26">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <FadeIn>
            <h2 className="text-base font-semibold leading-7 text-orange-700">Why Choose Catholic Web Hosting?</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Easy!</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">We were created by Catholics, for Cathoics. You can support us in our mission to evangelize the digital continent!</p>
          </FadeIn>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-4">
        <FadeIn>
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon className="absolute left-1 top-1 h-5 w-5 text-orange-700" aria-hidden="true" />
                  {feature.name}
                </dt>{' '}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </div>
  )
}
