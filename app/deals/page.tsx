'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const deals = [
  { id: 1, title: '50% off at SuperMart', category: 'Groceries', expiresIn: '2 days', image: '/deals_images/1.jpg' },
  { id: 2, title: '$20 off $100 at FashionHub', category: 'Clothing', expiresIn: '5 days', image: '/deals_images/2.jpg' },
  { id: 3, title: 'Buy 1 Get 1 Free at TechZone', category: 'Electronics', expiresIn: '1 week', image: '/deals_images/3.jpg' },
  { id: 4, title: '30% off all books at BookWorm', category: 'Books', expiresIn: '3 days', image: '/deals_images/4.jpg' },
  { id: 5, title: 'Free shipping on orders over $50 at HomeGoods', category: 'Home & Garden', expiresIn: '1 month', image: '/deals_images/5.jpg' },
]

export default function DealsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredDeals = deals.filter((deal) => {
    return (
      deal.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'all' || deal.category === selectedCategory)
    )
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-indigo-700 text-center">All Deals</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Input
          type="search"
          placeholder="Search deals..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:w-1/2"
        />
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="md:w-1/4">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Groceries">Groceries</SelectItem>
            <SelectItem value="Clothing">Clothing</SelectItem>
            <SelectItem value="Electronics">Electronics</SelectItem>
            <SelectItem value="Books">Books</SelectItem>
            <SelectItem value="Home & Garden">Home & Garden</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        {filteredDeals.map((deal) => (
          <Card key={deal.id} className="overflow-hidden xl:h-[16rem] hover:shadow-lg transition-shadow duration-300">
            <div className="flex h-full flex-col md:flex-row">
              <div className="md:w-64">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="md:w-3/4 p-2">
                <CardHeader>
                  <CardTitle className="text-xl text-indigo-700">{deal.title}</CardTitle>
                  <CardDescription>
                    <Badge className="bg-indigo-100 text-indigo-800">{deal.category}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Expires in: {deal.expiresIn}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full">
                    <Link href={`/deals/${deal.id}`}>View Deal</Link>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

