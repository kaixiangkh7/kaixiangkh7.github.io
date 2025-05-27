import type React from "react"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { ReCaptchaProvider } from "@/components/recaptcha-provider"

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-nunito"
})

export const metadata: Metadata = {
  title: "Kaixiang Huang - UX Portfolio",
  description: "A portfolio showcasing UX design work by Kaixiang Huang",
  generator: 'v0.dev',
  metadataBase: new URL('https://www.kaixianghuang.com'),
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
      <body className={nunito.className} suppressHydrationWarning>
        <ReCaptchaProvider>
          {children}
        </ReCaptchaProvider>
        <Toaster />
        <div id="recaptcha-container"></div>
      </body>
    </html>
  )
}
