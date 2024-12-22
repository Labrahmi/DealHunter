'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

export default function AdminPage() {
  const [deals, setDeals] = useState([
    { id: 1, title: '50% off at SuperMart', category: 'Groceries', expiresIn: '2 days', description: 'Get 50% off on all grocery items at SuperMart. Limited time offer!', code: 'SUPER50' },
    { id: 2, title: '$20 off $100 at FashionHub', category: 'Clothing', expiresIn: '5 days', description: 'Shop for $100 or more at FashionHub and get $20 off your purchase.', code: 'FASHION20' },
    { id: 3, title: 'Buy 1 Get 1 Free at TechZone', category: 'Electronics', expiresIn: '1 week', description: 'Purchase any electronic item at TechZone and get another one for free!', code: 'TECHBOGO' },
  ])

  const [newDeal, setNewDeal] = useState({
    title: '',
    category: '',
    expiresIn: '',
    description: '',
    code: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewDeal((prev) => ({ ...prev, [name]: value }))
  }

  const handleCategoryChange = (value: string) => {
    setNewDeal((prev) => ({ ...prev, category: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setDeals((prev) => [...prev, { id: prev.length + 1, ...newDeal }])
    setNewDeal({
      title: '',
      category: '',
      expiresIn: '',
      description: '',
      code: '',
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Add New Deal</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={newDeal.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={newDeal.category} onValueChange={handleCategoryChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Groceries">Groceries</SelectItem>
                      <SelectItem value="Clothing">Clothing</SelectItem>
                      <SelectItem value="Electronics">Electronics</SelectItem>
                      <SelectItem value="Books">Books</SelectItem>
                      <SelectItem value="Home & Garden">Home & Garden</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="expiresIn">Expires In</Label>
                  <Input
                    id="expiresIn"
                    name="expiresIn"
                    value={newDeal.expiresIn}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={newDeal.description}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="code">Coupon Code</Label>
                  <Input
                    id="code"
                    name="code"
                    value={newDeal.code}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Button type="submit">Add Deal</Button>
              </div>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Existing Deals</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {deals.map((deal) => (
                <li key={deal.id} className="border-b pb-2">
                  <h3 className="font-semibold">{deal.title}</h3>
                  <p>Category: {deal.category}</p>
                  <p>Expires in: {deal.expiresIn}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

