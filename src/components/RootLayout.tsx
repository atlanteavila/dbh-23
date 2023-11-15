'use client'

import {
  createContext,
  useState,
} from 'react'
import { usePathname } from 'next/navigation'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'

import { Footer } from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import Header from '@/components/Header'

const RootLayoutContext = createContext<{
  logoHovered: boolean
  setLogoHovered: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)


function RootLayoutInner({ children }: { children: React.ReactNode }) {
  let shouldReduceMotion = useReducedMotion()

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <Header />
      <motion.div
        layout
        className="relative flex flex-auto overflow-hidden bg-white"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col min-h-full"
        >

          <main className="w-full flex-auto">{children}</main>

          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()
  let [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}
