import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import HeroSlider from "@/components/HeroSlider";
import { ExternalLink } from 'lucide-react';

export default function Home() {
  const categories = [
    { id: 1, name: "Electronics", img: "/icons/icon_electronics.png" },
    { id: 2, name: "Fashion", img: "/icons/icon_fashion.png" },
    { id: 3, name: "Home & Garden", img: "/icons/icon_home.png" },
    { id: 4, name: "Travel", img: "/icons/icon_travel.png" },
    { id: 5, name: "Food & Dining", img: "/icons/icon_food.png" },
    { id: 6, name: "Beauty", img: "/icons/icon_beauty.png" },
    { id: 7, name: "Sports", img: "/icons/icon_sport.png" },
    { id: 8, name: "Entertainment", img: "/icons/icon_entertainment.png" },
  ];

  const featuredDeals = [
    {
      id: 1,
      title: "50% off at SuperMart",
      category: "Groceries",
      expiresIn: "2 days",
      image: "/deals_images/6.jpg",
    },
    {
      id: 2,
      title: "$20 off $100 at FashionHub",
      category: "Clothing",
      expiresIn: "5 days",
      image: "/deals_images/5.jpg",
    },
    {
      id: 3,
      title: "Buy 1 Get 1 Free at TechZone",
      category: "Electronics",
      expiresIn: "1 week",
      image: "/deals_images/4.jpg",
    },
  ];

  const heroSlides = [
    {
      image: "/hero_1.jpg",
      title: "Exclusive Deals Just for You",
      description:
        "Save big on your favorite brands with our handpicked offers",
      cta: { text: "Shop Now", link: "/deals" },
    },
    {
      image: "/hero_2.jpg",
      title: "New User? Get 10% Extra Off",
      description:
        "Sign up today and enjoy an additional 10% discount on your first purchase",
      cta: { text: "Sign Up", link: "/signup" },
    },
    {
      image: "/hero_3.jpg",
      title: "Flash Sale: 24 Hours Only",
      description: "Don't miss out on our biggest discounts of the season",
      cta: { text: "View Deals", link: "/deals" },
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSlider slides={heroSlides} />

      <div className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-100 rounded-full p-6 mb-4">
                <svg
                  className="w-12 h-12 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Find Deals</h3>
              <p className="text-gray-600">
                Browse through our curated list of the best deals available.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-100 rounded-full p-6 mb-4">
                <svg
                  className="w-12 h-12 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Copy Code</h3>
              <p className="text-gray-600">
                Get the coupon code with a single click.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-100 rounded-full p-6 mb-4">
                <svg
                  className="w-12 h-12 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Save Money</h3>
              <p className="text-gray-600">
                Use the code at checkout and enjoy your savings!
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">
            Featured Deals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDeals.map((deal) => (
              <Card
                key={deal.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={deal.image}
                  alt={deal.title}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-xl text-indigo-700">
                    {deal.title}
                  </CardTitle>
                  <CardDescription>
                    <Badge className="bg-indigo-100 text-indigo-800">
                      {deal.category}
                    </Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Expires in: {deal.expiresIn}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full"
                  >
                    <Link href={`/deals/${deal.id}`}>View Deal</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div style={
            // { backgroundImage: "url('/texture.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundBlendMode: "overlay" }
            {}
          } className="w-full text-center my-12 p-6 py-16 bg-indigo-200 bg-opacity-20 rounded-lg relative overflow-hidden">
            <Button
              asChild
              className="bg-white hover:bg-indigo-600 hover:text-white text-xl text-black font-bold p-6 px-12 rounded-lg"
            >
              <Link href="/deals">
                <h1>View All Deals</h1>
                <ExternalLink className="size-8" />
              </Link>
            </Button>
            <img src="/texture.jpg" alt="" className="absolute w-full h-full top-0 left-0 object-cover -z-10 opacity-50 blur-sm" />
          </div>
          {/* <div className="pointer-events-none opacity-50 absolute inset-0 z-[-1] h-screen bg-grid-pattern mask-gradient"></div> */}
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">
            Popular Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.name
                  .toLowerCase()
                  .replace(" & ", "-")}`}
                className="bg-white flex gap-3 items-center rounded-sm border p-4 py-5 text-center transition-shadow duration-300 group"
              >
                <div className="text-4xl saturate-[0.7] group-hover:saturate-[1.4] w-64 group-hover:scale-105 transition-all ease-in-out duration-200">
                  <Image
                    src={category.img}
                    alt={category.name}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-zinc-700 group-hover:text-black">
                    {category.name}
                  </h3>
                  <h5 className="text-xs line-clamp-2 text-zinc-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aut ullam voluptates molestiae nobis porro nesciunt velit
                    repellendus vel voluptas dignissimos doloribus similique
                    perspiciatis maiores consequatur laboriosam, nisi obcaecati
                    iure hic?
                  </h5>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <Card className="">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-indigo-800">
                Never Miss a Deal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                Subscribe to our newsletter and get the best deals delivered to
                your inbox daily!
              </p>
              <form className="flex flex-col p-0 rounded-full items-center md:flex-row gap-4 justify-center ring-2 ring-indigo-500 w-fit mx-auto overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-full focus:outline-none "
                />
                <Button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 h-12 rounded-none"
                >
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
