import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EuroRobotic.com - Premium Domain for Sale | European Robotics & Automation",
  description: "Acquire EuroRobotic.com - The definitive digital asset for European robotics innovation, automation excellence, and AI-driven manufacturing. Premium domain with high SEO value and investment potential.",
  keywords: "European robotics, robotics automation, industrial robotics, AI manufacturing, smart factory, domain for sale, premium domain, robotics investment",
  authors: [{ name: "imrulo.eth" }],
  creator: "imrulo.eth",
  publisher: "imrulo.eth",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://euro-robotic-landing.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "EuroRobotic.com - Premium Domain for Sale",
    description: "The definitive digital asset for European robotics innovation, automation excellence, and AI-driven manufacturing supremacy.",
    url: 'https://euro-robotic-landing.vercel.app',
    siteName: 'EuroRobotic.com Domain Sale',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Premium European Robotics Technology',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "EuroRobotic.com - Premium Domain for Sale",
    description: "The definitive digital asset for European robotics innovation, automation excellence, and AI-driven manufacturing supremacy.",
    images: ['https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
