import type React from "react"
import type { Metadata } from "next"
import { Nunito, Orbitron } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
// import { ReCaptchaProvider } from "@/components/recaptcha-provider"

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-nunito"
})

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-orbitron"
})

export const metadata: Metadata = {
  title: "Kaixiang (Kai) Huang – Data-Driven Product Manager with Design Expertise",
  description: "I combine 7 years of design experience with product strategy and AI/ML skills to create smart, data-driven products—from generative AI to computer vision—built with clean, user-first design at the core.",
  generator: 'Kaixiang Huang',
  metadataBase: new URL('https://www.kaixiang.dev'),
  keywords: ["Product Manager", "UX Design", "AI/ML", "Data Analytics", "User Experience", "Product Strategy", "Design Systems", "Portfolio"],
  authors: [{ name: "Kaixiang Huang" }],
  creator: "Kaixiang Huang",
  openGraph: {
    title: "Kaixiang (Kai) Huang – Data-Driven Product Manager with Design Expertise",
    description: "I combine 7 years of design experience with product strategy and AI/ML skills to create smart, data-driven products—from generative AI to computer vision—built with clean, user-first design at the core.",
    url: 'https://www.kaixiang.dev',
    siteName: 'Kaixiang Huang Portfolio',
    images: [
      {
        url: 'https://www.kaixiang.dev/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kaixiang (Kai) Huang - Data-Driven Product Manager with User-Centered Design Expertise',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kaixiang (Kai) Huang – Data-Driven Product Manager with Design Expertise",
    description: "I combine 7 years of design experience with product strategy and AI/ML skills to create smart, data-driven products—from generative AI to computer vision—built with clean, user-first design at the core.",
    images: ['https://www.kaixiang.dev/images/og-image.jpg'],
    creator: '@kaixiangkh7',
    site: '@kaixiangkh7',
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
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://www.kaixiang.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${nunito.className} ${nunito.variable} ${orbitron.variable}`} suppressHydrationWarning>
        {/* <ReCaptchaProvider> */}
          {children}
        {/* </ReCaptchaProvider> */}
        <Toaster />
        {/* <div id="recaptcha-container"></div> */}
      </body>
    </html>
  )
}
