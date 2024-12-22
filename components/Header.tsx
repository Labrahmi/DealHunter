import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-indigo-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        <Link href="/" className="text-2xl font-bold">DealHunter</Link>
        <nav className="space-x-4 hidden md:block">
          <Link href="/deals" className="hover:text-indigo-200">All Deals</Link>
          <Link href="/categories" className="hover:text-indigo-200">Categories</Link>
          <Link href="/subscribe" className="hover:text-indigo-200">Subscribe</Link>
        </nav>
        <div className="flex items-center mt-4 md:mt-0 w-full md:w-auto">
          <Input type="search" placeholder="Search deals..." className="mr-2 text-gray-800" />
          <Button size="icon" className="bg-indigo-600 hover:bg-indigo-500">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}

