'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Copy, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { toast } from '@/components/ui/use-toast'

const deals = [
  { id: 1, title: '50% off at SuperMart', category: 'Groceries', expiresIn: '2 days', description: 'Get 50% off on all grocery items at SuperMart. Limited time offer!', code: 'SUPER50', image: '/placeholder.svg?height=400&width=600', merchantLogo: '/placeholder.svg?height=100&width=100', merchantName: 'SuperMart', termsAndConditions: ['Valid on all items', 'Cannot be combined with other offers', 'Valid until stocks last'] },
  { id: 2, title: '$20 off $100 at FashionHub', category: 'Clothing', expiresIn: '5 days', description: 'Shop for $100 or more at FashionHub and get $20 off your purchase.', code: 'FASHION20', image: '/placeholder.svg?height=400&width=600', merchantLogo: '/placeholder.svg?height=100&width=100', merchantName: 'FashionHub', termsAndConditions: ['Minimum purchase of $100 required', 'Valid on regular-priced items only', 'One coupon per customer'] },
  { id: 3, title: 'Buy 1 Get 1 Free at TechZone', category: 'Electronics', expiresIn: '1 week', description: 'Purchase any electronic item at TechZone and get another one for free!', code: 'TECHBOGO', image: '/placeholder.svg?height=400&width=600', merchantLogo: '/placeholder.svg?height=100&width=100', merchantName: 'TechZone', termsAndConditions: ['Valid on select items only', 'Lower priced item will be free', 'While stocks last'] },
]

export default function DealPage({ params }: { params: { id: string } }) {
  const [isCopied, setIsCopied] = useState(false)
  const deal = deals.find((d) => d.id === parseInt(params.id))

  if (!deal) {
    return <div className="container mx-auto px-4 py-8 text-center">Deal not found</div>
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText(deal.code)
    setIsCopied(true)
    toast({
      title: "Coupon code copied!",
      description: "The code has been copied to your clipboard.",
    })
    setTimeout(() => setIsCopied(false), 3000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/deals" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Deals
      </Link>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={deal.image}
            alt={deal.title}
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>
        <Card className="bg-white shadow-xl">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <Badge className="bg-indigo-100 text-indigo-800 text-sm">{deal.category}</Badge>
              <div className="flex items-center">
                <Image
                  src={deal.merchantLogo}
                  alt={deal.merchantName}
                  width={40}
                  height={40}
                  className="rounded-full mr-2"
                />
                <span className="font-semibold text-gray-600">{deal.merchantName}</span>
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-indigo-700">{deal.title}</CardTitle>
            <CardDescription className="text-xl text-gray-600 mt-2">
              Expires in: <span className="font-semibold text-red-500">{deal.expiresIn}</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">{deal.description}</p>
            <div className="bg-indigo-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-indigo-700 mb-2">How to use this deal:</h3>
              <ol className="list-decimal list-inside text-gray-700">
                <li>Copy the coupon code below</li>
                <li>Click the "Shop Now" button to visit the merchant's website</li>
                <li>Apply the code at checkout to receive your discount</li>
              </ol>
            </div>
            <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
              <code className="text-lg font-mono font-semibold text-indigo-600">{deal.code}</code>
              <Button
                onClick={handleCopyCode}
                className={`${isCopied ? 'bg-green-500' : 'bg-indigo-600'} hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300`}
              >
                {isCopied ? 'Copied!' : 'Copy Code'}
                <Copy className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Shop Now
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <span className="text-sm text-gray-500">
              {Math.floor(Math.random() * 100) + 1} people used today
            </span>
          </CardFooter>
        </Card>
      </div>
      <Card className="mt-8 bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-indigo-700">Terms and Conditions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-gray-700">
            {deal.termsAndConditions.map((term, index) => (
              <li key={index}>{term}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

