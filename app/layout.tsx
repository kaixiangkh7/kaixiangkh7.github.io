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
  title: "Kaixiang (Kai) Huang – Product Manager & UX Designer",
  description: "A portfolio showcasing product management and AI/ML work by Kaixiang Huang",
  generator: 'v0.dev',
  metadataBase: new URL('https://kaixiang.dev'),
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
