import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PrimaryButton } from "@/components/ui/primary-button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-light text-2xl flex items-center gap-2">
          <span className="font-orbitron font-bold text-black tracking-wider text-3xl hover:text-gray-700 transition-colors">KAI</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/#about" className="text-base font-light hover:text-primary transition-colors py-1 relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/#projects" className="text-base font-light hover:text-primary transition-colors py-1 relative group">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/#skills" className="text-base font-light hover:text-primary transition-colors py-1 relative group">
            Skills
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/#contact" className="text-base font-light hover:text-primary transition-colors py-1 relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
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