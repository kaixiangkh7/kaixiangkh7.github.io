"use client"

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

interface ReCaptchaProviderProps {
  children: React.ReactNode
}

export function ReCaptchaProvider({ children }: ReCaptchaProviderProps) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  // If no site key is configured, render without reCAPTCHA
  if (!siteKey || siteKey === 'REPLACE_WITH_YOUR_SITE_KEY') {
    return <>{children}</>
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={siteKey}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
      container={{
        element: "recaptcha-container",
        parameters: {
          badge: 'bottomright', // or 'bottomleft' or 'inline'
          theme: 'dark', // or 'light'
        }
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  )
} 