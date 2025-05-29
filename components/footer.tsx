import Link from "next/link"
import { Mail, Github, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="font-light text-2xl flex items-center gap-2">
              <span className="font-orbitron font-bold text-white tracking-wider text-3xl hover:text-gray-300 transition-colors">KAI</span>
            </Link>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/kaixianghuang/" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-white/70 hover:text-primary transition-colors" />
            </a>
            <a href="https://x.com/kaixiangkh7" aria-label="X (formerly Twitter)">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-white/70 hover:text-primary transition-colors fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://github.com/kaixiangkh7/" aria-label="GitHub">
              <Github className="h-5 w-5 text-white/70 hover:text-primary transition-colors" />
            </a>
            <a href="https://www.instagram.com/kaixiang_huang/" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-white/70 hover:text-primary transition-colors" />
            </a>
            <a href="mailto:kaixiang.huang@columbia.edu" aria-label="Email">
              <Mail className="h-5 w-5 text-white/70 hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Kaixiang Huang. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 