'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { toast } from '@/components/use-toast'
import { Sparkles, Gift, Mail, CheckCircle } from 'lucide-react'

export default function SubscribePage() {
  const [email, setEmail] = useState('')
  const [categories, setCategories] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('Submitted:', { email, categories })
    toast({
      title: "Subscription Successful!",
      description: "Welcome to the DealHunter community. Get ready for amazing deals!",
      duration: 5000,
    })
    // Reset form
    setEmail('')
    setCategories([])
    setIsSubmitting(false)
  }

  const toggleCategory = (category: string) => {
    setCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  const benefits = [
    { icon: <Sparkles className="w-6 h-6 text-yellow-500" />, text: "Exclusive deals not available anywhere else" },
    { icon: <Gift className="w-6 h-6 text-green-500" />, text: "First access to limited-time offers" },
    { icon: <Mail className="w-6 h-6 text-blue-500" />, text: "Personalized deal alerts based on your preferences" },
    { icon: <CheckCircle className="w-6 h-6 text-purple-500" />, text: "No spam, unsubscribe anytime" },
  ]

  return (
    <div className="containerx mx-auto py-16">
      <div className="mx-auto p-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-800 mb-4">Join the DealHunter Community</h1>
          <p className="text-xl text-gray-600">Get the hottest deals delivered straight to your inbox!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-indigo-800">Subscribe Now</CardTitle>
              <CardDescription>Customize your deal preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-indigo-800">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <Label className="text-indigo-800 mb-2 block">Interested Categories</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Electronics', 'Fashion', 'Home & Garden', 'Travel', 'Food & Dining', 'Beauty'].map((category) => (
                      <Label key={category} className="flex items-center space-x-2 cursor-pointer">
                        <Checkbox
                          checked={categories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                        />
                        <span>{category}</span>
                      </Label>
                    ))}
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-2xl font-bold text-indigo-800 mb-6">Why Subscribe?</h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">{benefit.icon}</div>
                  <p className="text-gray-700">{benefit.text}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Image
                src="/newsletter.jpg"
                alt="Happy subscribers"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 bg-indigo-50 rounded-lg p-8 text-center hidden">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">Join 50,000+ Deal Hunters</h2>
          <p className="text-gray-600 mb-6">Our subscribers save an average of $240 per month on their purchases!</p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <p className="text-3xl font-bold text-indigo-600">98%</p>
              <p className="text-sm text-gray-600">Satisfaction Rate</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <p className="text-3xl font-bold text-indigo-600">500+</p>
              <p className="text-sm text-gray-600">Partner Brands</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <p className="text-3xl font-bold text-indigo-600">24/7</p>
              <p className="text-sm text-gray-600">Deal Updates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

