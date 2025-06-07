import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// فونت گوگل
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// متادیتا برای SEO
export const metadata: Metadata = {
  title: "ByFi Exchange",
  description: "A secure and user-friendly cryptocurrency exchange platform",
  keywords: "crypto, exchange, blockchain, trading",
  openGraph: {
    title: "Crypto Exchange",
    description: "A secure and user-friendly cryptocurrency exchange platform",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${geistSans.variable} relative bg-black text-white min-h-screen overflow-x-hidden`}
      >
        {/* پس‌زمینه بلوری دایره‌ای */}

        <div className="background-blur-circle background-blur-bottom-left" />
        <div className="background-blur-circle background-blur-bottom-right" />

        <Header />
        <main className="relative z-10 container max-w-[1440px] mx-auto px-4">
          {children}
        </main>
        <Footer />
        <div className="flex background-blur-circle background-blur-top-right" />
      </body>
    </html>
  );
}
