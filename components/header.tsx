import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PrimaryButton } from "@/components/ui/primary-button"

export function Header() {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-light text-xl">
          <span className="text-primary">Product</span>Manager
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/#about" className="text-sm font-light hover:text-primary transition-colors py-1">
            About
          </Link>
          <Link href="/#projects" className="text-sm font-light hover:text-primary transition-colors py-1">
            Projects
          </Link>
          <Link href="/#skills" className="text-sm font-light hover:text-primary transition-colors py-1">
            Skills
          </Link>
          <Link href="/#contact" className="text-sm font-light hover:text-primary transition-colors py-1">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <PrimaryButton asChild rounded="full">
            <Link href="/#contact">Get in touch</Link>
          </PrimaryButton>
        </div>
      </div>
    </header>
  )
} 