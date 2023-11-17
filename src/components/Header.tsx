import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  AtSymbolIcon,
  Bars3Icon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  LockClosedIcon,
  ServerStackIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const products = [
  { name: 'Web Hosting', description: '100% Catholic web hosting.', href: '#', icon: ServerStackIcon },
  { name: 'Website Design', description: 'Fast, SEO friendly and affordable website design', href: '#', icon: ComputerDesktopIcon },
  { name: 'Domains', description: 'Get the perfect affordable domain', href: '#', icon: GlobeAltIcon },
  { name: 'SSL Certificates', description: 'Let your customers know your value security', href: '#', icon: LockClosedIcon },
  { name: 'Email Hosting', description: 'Great email hosting for your website!', href: '#', icon: AtSymbolIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-bg-main text-white border-b-[1px] border-white/20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-2.5">
            <span className="sr-only">Drummer Boy Hosting</span>
            <svg
              width="35px"
              height="35px"
              viewBox="0 0 457 457">
              <path fillRule="evenodd" fill="rgb(255, 255, 255)"
                d="M452.327,273.258 C427.608,396.874 307.359,477.047 183.742,452.328 C60.125,427.609 -20.047,307.359 4.673,183.742 C29.392,60.127 149.641,-20.046 273.258,4.673 C396.874,29.392 477.046,149.641 452.327,273.258 ZM207.046,402.970 C203.376,402.501 199.854,401.959 196.498,401.371 C200.019,402.010 203.537,402.548 207.046,402.970 ZM168.448,64.130 C120.298,81.500 80.798,119.618 62.849,169.842 C90.145,144.453 132.363,128.239 176.544,118.450 C171.945,86.213 168.055,64.489 168.055,64.489 C168.178,64.366 168.316,64.249 168.448,64.130 ZM179.338,138.767 C96.940,159.034 57.449,198.125 54.858,200.763 C41.504,282.206 86.898,360.605 161.083,391.033 C204.816,384.375 191.804,233.052 179.338,138.767 ZM262.099,57.213 C239.047,52.604 216.151,52.759 194.419,56.978 C196.643,76.930 199.512,95.696 202.886,113.371 C273.743,101.641 342.975,104.842 357.979,111.808 C333.611,84.687 300.601,64.913 262.099,57.213 ZM373.485,131.781 C374.259,133.534 374.454,134.450 374.454,134.450 C307.583,123.593 251.995,125.325 206.938,133.032 C243.476,297.232 324.478,357.771 336.758,366.134 C368.067,341.271 391.084,305.627 399.538,263.354 C409.026,215.899 398.375,169.092 373.485,131.781 ZM365.373,302.164 L359.397,297.789 L352.199,299.530 L354.531,292.566 L350.609,286.317 L358.024,286.388 L362.797,280.785 L365.049,287.792 L371.922,290.579 L365.897,294.839 L365.373,302.164 ZM350.298,158.310 L345.020,154.472 L338.674,155.986 L340.721,149.894 L337.251,144.418 L343.794,144.490 L347.997,139.593 L349.993,145.730 L356.058,148.179 L350.750,151.899 L350.298,158.310 ZM103.331,307.582 L98.425,303.812 L92.452,305.406 L94.451,299.286 L91.265,293.856 L97.403,293.844 L101.410,288.892 L103.208,295.002 L108.869,297.375 L103.836,301.164 L103.331,307.582 ZM135.100,128.318 L130.523,125.019 L125.026,126.305 L126.789,121.084 L123.773,116.382 L129.440,116.456 L133.073,112.265 L134.813,117.531 L140.073,119.642 L135.481,122.822 L135.100,128.318 Z" />
            </svg>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className="text-sm font-semibold leading-6">
            Home Page
          </Link>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6">
              Product
              <ChevronDownIcon className="h-5 w-5 flex-none" aria-hidden="true" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link href="/about" className="text-sm font-semibold leading-6">
            About
          </Link>
          <Link href="#" className="text-sm font-semibold leading-6">
            Marketplace
          </Link>
          <Link href="#" className="text-sm font-semibold leading-6">
            Company
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="#" className="text-sm font-semibold leading-6">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <div>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        {<ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />}
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
