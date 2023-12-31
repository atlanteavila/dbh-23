import HeroSectionInner from '@/components/HeroSectionInner'
import { type Products, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

export default async function productLayout({
  product,
  children,
}: {
  product: MDXEntry<Products>
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
