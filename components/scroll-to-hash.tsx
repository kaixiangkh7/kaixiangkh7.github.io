'use client'

import { useEffect } from 'react'
import { useSmoothScroll } from '@/hooks/use-smooth-scroll'

export function ScrollToHash() {
  const { scrollToElement } = useSmoothScroll()

  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash
    if (hash) {
      // Remove the # and scroll to the element
      const elementId = hash.replace('#', '')
      // Add a small delay to ensure the page has loaded
      setTimeout(() => {
        scrollToElement(elementId, 80)
      }, 100)
    }
  }, [scrollToElement])

  return null
} 