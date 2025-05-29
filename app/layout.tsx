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
  description: "A portfolio showcasing product design work by Kaixiang Huang",
  generator: 'Kaixiang Huang',
  metadataBase: new URL('https://kaixiang.dev'),
  openGraph: {
    title: "Kaixiang (Kai) Huang – Data-Driven Product Manager with Design Expertise",
    description: "A portfolio showcasing product design work by Kaixiang Huang",
    url: 'https://kaixiang.dev',
    siteName: 'Kaixiang Huang Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        alt: 'Kaixiang (Kai) Huang - Data-Driven Product Manager with User-Centered Design Expertise',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
