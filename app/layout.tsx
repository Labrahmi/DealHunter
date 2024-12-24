import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DealHunter - Your Coupon Deals Platform",
  description: "Discover and save with the latest coupon deals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}
      >
        <Header />
        <main className="flex-grow max-w-7xl mx-auto">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
