import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { getImagePath } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden bg-white border-0 shadow-md">
      <Link href={link} className="block">
        <div className="relative overflow-hidden h-64">
          <img
            src={getImagePath(image || "/placeholder.svg")}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-6">
        <Link href={link} className="block">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors cursor-pointer">{title}</h3>
        </Link>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-xs text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
