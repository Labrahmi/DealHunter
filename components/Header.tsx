import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white text-gray-700 shadow-xl shadow-gray- sticky top-0 z-50">
      <div className="containerx mx-autox px-4 py-4 flex flex-wrap items-center justify-between">
        <Link href="/" className="xl:text-2xl font-bold">DealHunter</Link>
        <nav className="md:space-x-4 space-x-2 text-sm md:text-base">
          <Link href="/deals" className="">All Deals</Link>
          <Link href="/#categories" className="">Categories</Link>
          <Link href="/subscribe" className="">Subscribe</Link>
        </nav>
        <div className="flex items-center mt-4 md:mt-0 w-full md:w-auto">
          <Input type="search" placeholder="Search deals..." className="mr-2 text-gray-800" />
          <Link href={"/deals"} className="bg-gray-600 hover:bg-gray-500 rounded-lg text-white">
            <Search className="size-8 p-1.5" />
          </Link>
        </div>
      </div>
    </header>
  )
}

