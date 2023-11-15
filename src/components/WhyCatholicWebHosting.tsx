import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
  UserPlusIcon,
} from '@heroicons/react/20/solid'

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
    name: 'Extremely reliable Catholic Web Hosting.',
    description: 'We’re not just another catholic web hosting company. Our goal is to provide the most excellent hosting environment and services possible at the absolute best prices. Catholicism is our core value, hosting is our business!',
    icon: ArrowPathIcon,
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
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
    icon: ServerIcon,
  },
]

export default function WhyCatholicWebHosting() {
  return (
    <div className="bg-white py-24 sm:py-26">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-orange-700">Why Choose Catholic Web Hosting?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Easy!</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">We were created by Catholics, for Cathoics. You can support us in our mission to evangelize the digital continent!</p>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
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
      </div>
    </div>
  )
}
