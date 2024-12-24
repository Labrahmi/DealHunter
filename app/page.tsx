"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Coupon } from "@/types/Coupon";

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
import { ExternalLink } from "lucide-react";

const AnimateWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const section = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!section.current) return;

    const rect = section.current.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isInViewport) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      ref={section}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const HowItWorks = () => {
  return (
    <AnimateWrapper>
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-indigo-100 rounded-full p-6 mb-4">
              <svg
                className="xl:size-10 size-8 text-indigo-600"
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
            <h3 className="xl:text-xl text-lg font-semibold mb-2">
              Find Deals
            </h3>
            <p className="text-gray-600 xl:text-base text-sm">
              Browse through our curated list of the best deals available.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-indigo-100 rounded-full p-6 mb-4">
              <svg
                className="xl:size-10 size-8 text-indigo-600"
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
            <h3 className="xl:text-xl text-lg font-semibold mb-2">Copy Code</h3>
            <p className="text-gray-600 xl:text-base text-sm">
              Get the coupon code with a single click.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-indigo-100 rounded-full p-6 mb-4">
              <svg
                className="xl:size-10 size-8 text-indigo-600"
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
            <h3 className="xl:text-xl text-lg font-semibold mb-2">
              Save Money
            </h3>
            <p className="text-gray-600 xl:text-base text-sm">
              Use the code at checkout and enjoy your savings!
            </p>
          </div>
        </div>
      </section>
    </AnimateWrapper>
  );
};

const FeaturedDeals = ({ featuredDeals }: { featuredDeals: Coupon[] }) => {
  return (
    <AnimateWrapper>
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">
          Featured Deals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredDeals.map((deal) => (
            <Card
              key={deal.id}
              className="overflow-hidden transition-shadow duration-300 flex flex-col justify-start "
            >
              <Image
                src={deal.image}
                alt={deal.title}
                width={200}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-xl text-indigo-700 line-clamp-1">
                  {deal.title}
                </CardTitle>
                <CardDescription>
                  <Badge
                    variant="outline"
                    className="bg-indigo-100 text-indigo-800 cursor-default"
                  >
                    {deal.category}
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Expires in:{" "}
                  {Math.ceil(
                    (new Date(deal.valid_until).getTime() -
                      new Date().getTime()) /
                      (1000 * 60 * 60 * 24)
                  )}{" "}
                  days
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold p-4 rounded "
                >
                  <Link href={`/deals/${deal.id}`}>View Deal</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="w-full border relative text-center my-12 p-6 py-16 bg-indigo-200 bg-opacity-20 rounded-lg overflow-hidden">
          <Button
            asChild
            className="bg-white hover:bg-indigo-600 hover:text-white text-xl text-black font-bold p-6 px-12 rounded-lg"
          >
            <Link href="/deals">
              <h1>View All Deals</h1>
              <ExternalLink className="size-8" />
            </Link>
          </Button>
          <img
            src="/texture.jpg"
            alt=""
            className="absolute w-full h-full top-0 left-0 object-cover -z-10 opacity-50 blur-sm"
          />
        </div>
      </section>
    </AnimateWrapper>
  );
};

const PopularCategories = ({
  categories,
}: {
  categories: { id: number; name: string; img: string }[];
}) => {
  return (
    <AnimateWrapper>
      <section id="categories" className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">
          Popular Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/deals?category=${category.name}`}
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                  ullam voluptates molestiae nobis porro nesciunt velit
                  repellendus vel voluptas dignissimos doloribus similique
                  perspiciatis maiores consequatur laboriosam, nisi obcaecati
                  iure hic?
                </h5>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </AnimateWrapper>
  );
};

const Newsletter = () => {
  return (
    <AnimateWrapper>
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
            <form className="flex flex-col md:flex-row p-0 md:rounded-full items-center gap-2 justify-center md:ring-2 md:ring-indigo-500 mx-auto md:w-fit w-full md:overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-4 md:rounded-full focus:outline-none w-full h-12 border border-indigo-500 md:border-none rounded-lg"
              />
              <Button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 md:w-fit w-full text-white font-bold px-4 h-12 md:rounded-none rounded-lg"
              >
                Subscribe
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </AnimateWrapper>
  );
};

export default function Home() {
  const [featuredDeals, setDeals] = useState<Coupon[]>([]);

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

  useEffect(() => {
    const getDeals = async () => {
      const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const res = await fetch(`${backendUrl}/coupons`);
      const data = await res.json();
      setDeals(data);
    };
    getDeals();
  }, []);

  // const featuredDeals = [
  //   {
  //     id: 1,
  //     title: "50% off at SuperMart",
  //     category: "Groceries",
  //     expiresIn: "2 days",
  //     image: "/deals_images/6.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "$20 off $100 at FashionHub",
  //     category: "Clothing",
  //     expiresIn: "5 days",
  //     image: "/deals_images/5.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Buy 1 Get 1 Free at TechZone",
  //     category: "Electronics",
  //     expiresIn: "1 week",
  //     image: "/deals_images/4.jpg",
  //   },
  // ];

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
      <div className="containerx mx-autox p-4 flex flex-col gap-4">
        <HowItWorks />
        <FeaturedDeals featuredDeals={featuredDeals.slice(0, 3)} />
        <PopularCategories categories={categories} />
        <Newsletter />
      </div>
    </div>
  );
}
