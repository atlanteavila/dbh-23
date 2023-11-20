import { BoltIcon, ShieldCheckIcon, BanknotesIcon, ChevronDoubleUpIcon } from "@heroicons/react/20/solid"

const incentives = [
  {
    name: 'Your website delivered quick and secure',
    imageSrc: BoltIcon,
    description: "Our servers are optimized for speed and security. Your website is going to be noticeably fast and hardened for the stringest security possible.",
  },
  {
    name: '15 Day Money Back Guarantee',
    imageSrc: ShieldCheckIcon,
    description: "Shop with confidence, if you're not satisfied with our service for the first 15 days, we'll refund your money. No questions asked!",
  },
  {
    name: 'Upgrades a plenty',
    imageSrc: ChevronDoubleUpIcon,
    description:
      "We have a star-lineup of upgrades available for you. From SSL certificates, dedicated IP addresses and privacy protection, we have you covered.",
  },
]

export default function Incetives() {
  return (
    <div className="bg-[#2c444e] text-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">
                We built our business on great catholic values
              </h2>
              <p className="mt-4">
                We've created a true catholic web hosting company. We're not just a company interested in gaining another customer. We have a true mission. Our mission is to aid you in evangelizing the digital continent. We do this by providing you with the best tools and services to help you succeed. We're not just a web hosting company, we're a <strong>catholic web hosting company</strong>.
              </p>
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1586015530974-66bba8e530ae?q=80&w=777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <incentive.imageSrc className="h-16 w-16" />
                </div>
                <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-sm font-medium">{incentive.name}</h3>
                  <p className="mt-2 text-sm">{incentive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
