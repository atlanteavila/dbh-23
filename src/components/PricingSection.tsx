'use client'
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { FadeIn } from './FadeIn'

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]
const tiers = [
  /* 
    Unlimited Disk-space
    Unlimited Bandwidth
    10 Domains
    10 Sub-domains
    20 Email Accounts
    10 MySQL Databases
    Free Script Installer
    Unlimited FTP Accounts
  */
  {
    name: 'Personal',
    id: 'tier-freelancer',
    href: '#',
    price: { monthly: '$6', annually: '$48' },
    description: 'Great plan for single website owners.',
    features: [
      '1 Domain',
      '10 Sub Domains',
      '5 Email Accounts',
      '1 MySQL Database',
      '∞ Unlimited Diskspace',
      '∞ Bandwidth',
      '24/7 Support'
    ],
    mostPopular: false,
  },
  {
    name: 'Business',
    id: 'tier-startup',
    href: '#',
    price: { monthly: '$10', annually: '$120' },
    description: 'More resources for your business.',
    features: [
      '5 Domain',
      '10 Sub Domains',
      '20 Email Accounts',
      '5 MySQL Database',
      '∞ Diskspace',
      '∞ Bandwidth',
      '24/7 Support'
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    price: { monthly: '$16', annually: '$160' },
    description: 'All unlimited features for the web professional.',
    features: [
      '∞ Domain',
      '∞ Sub Domains',
      '∞ Email Accounts',
      '∞ MySQL Database',
      '∞ Unlimited Diskspace',
      '∞ Bandwidth',
      '24/7 Support'
    ],
    mostPopular: false,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function PricingSection() {
  const [frequency, setFrequency] = useState(frequencies[0])

  return (
    <FadeIn>
      <div className="bg-white py-12 px-[62px] -mt-[191px] rounded-lg drop-shadow-xl">
        <h4 className='text-2xl mb-5 text-center font-bold'>Pricing that fits everyone!</h4>
        <div className="flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
          >
            <RadioGroup.Label className="sr-only">Payment frequency</RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(
                    checked ? 'bg-orange-600 text-white' : 'text-gray-500',
                    'cursor-pointer rounded-full px-2.5 py-1'
                  )
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier: any) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'ring-2 ring-orange-600' : 'ring-1 ring-gray-200',
                'rounded-3xl p-8 xl:p-10'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'text-orange-600' : 'text-gray-900',
                    'text-lg font-semibold leading-8'
                  )}
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-orange-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-orange-600">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price[frequency.value]}</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">{frequency.priceSuffix}</span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-orange-600 text-white shadow-sm hover:bg-orange-500'
                    : 'text-orange-600 ring-1 ring-inset ring-orange-200 hover:ring-orange-300',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'
                )}
              >
                Purchase
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                {tier.features.map((feature: any) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-orange-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}
