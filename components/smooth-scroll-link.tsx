'use client'

import { type ReactNode, type MouseEvent } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useSmoothScroll } from '@/hooks/use-smooth-scroll'

interface SmoothScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
  offset?: number
}

export function SmoothScrollLink({ href, children, className, offset = 80 }: SmoothScrollLinkProps) {
  const { scrollToElement } = useSmoothScroll()
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    // Extract the element ID from href (remove the # or /#)
    const elementId = href.replace(/^\/?#/, '')
    
    if (elementId) {
      // Check if we're on the home page
      if (pathname === '/') {
        // We're on the home page, use smooth scrolling
        scrollToElement(elementId, offset)
      } else {
        // We're on a different page, navigate to home with hash
        router.push(`/#${elementId}`)
      }
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  )
} 