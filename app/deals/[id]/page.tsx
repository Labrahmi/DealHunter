"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Copy, ExternalLink } from "lucide-react";
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
import { toast } from "@/components/use-toast";
import { Coupon } from "@/types/Coupon";

// const deals = [];

export default function DealPage({ params }: { params: { id: string } }) {
  const [isCopied, setIsCopied] = useState(false);
  const [deal, setDeal] = useState<Coupon | null>(null);

  useEffect(() => {
    const getDeals = async () => {
      const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const res = await fetch(`${backendUrl}/coupons/${params.id}`, {
        headers: {
          "ngrok-skip-browser-warning": "true",
        }
      });
      const data = await res.json();
      setDeal(data);
    };
    getDeals();
  }, [params.id]);

  if (!deal) {
    return (
      <div className="containerx mx-autox px-4 py-8 text-center">
        Deal not found
      </div>
    );
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText(deal.code);
    setIsCopied(true);
    toast({
      title: "Coupon code copied!",
      description: "The code has been copied to your clipboard.",
    });
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <div className="containerx mx-autox px-4 py-8">
      <Link
        href="/deals"
        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
      >
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
            className="rounded-lg shadow-lg object-cover w-full md:h-auto h-[30rem]"
          />
        </div>
        <Card className="bg-white shadow-xl relative -top-32 scale-95 md:top-0 md:scale-100 md:static">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <Badge className="bg-indigo-100 text-indigo-800 text-sm">
                {deal.category}
              </Badge>
              <div className="flex items-center text-lg">{"🍛"}</div>
            </div>
            <CardTitle className="text-3xl font-bold text-indigo-700">
              {deal.title}
            </CardTitle>
            <CardDescription className="text-xl text-gray-600 mt-2">
              Expires in:{" "}
              <span className="font-semibold text-red-500">
                {Math.ceil(
                  (new Date(deal.valid_until).getTime() -
                    new Date().getTime()) /
                    (1000 * 60 * 60 * 24)
                )}{" "}
                days
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">{deal.description}</p>
            <div className="bg-indigo-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-indigo-700 mb-2">
                How to use this deal:
              </h3>
              <ol className="list-decimal list-inside text-gray-700">
                <li>Copy the coupon code below</li>
                <li>Click the Shop Now button to visit the merchant website</li>
                <li>Apply the code at checkout to receive your discount</li>
              </ol>
            </div>
            <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
              <code className="text-lg font-mono font-semibold text-indigo-600">
                {deal.code}
              </code>
              <Button
                onClick={handleCopyCode}
                className={`${
                  isCopied ? "bg-green-500" : "bg-indigo-600"
                } hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300`}
              >
                {isCopied ? "Copied!" : "Copy Code"}
                <Copy className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <Button
              asChild
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full"
            >
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
          <CardTitle className="text-2xl font-semibold text-indigo-700">
            Terms and Conditions
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* <ul className="list-disc list-inside text-gray-700">
            {deal.termsAndConditions.map((term, index) => (
              <li key={index}>{term}</li>
            ))}
          </ul> */}
        </CardContent>
      </Card>
    </div>
  );
}
