"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  if (!isVisible) return null

  return (
    <div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer animate-float"
      onClick={scrollToContent}
      role="button"
      aria-label="Scroll down to content"
      tabIndex={0}
    >
      <span className="text-sm font-medium mb-2 text-muted-foreground">Scroll</span>
      <ChevronDown className="h-6 w-6 text-primary animate-bounce" />
    </div>
  )
}
