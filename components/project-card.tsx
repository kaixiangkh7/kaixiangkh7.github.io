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
  // Split title at the dash to format on separate lines
  const titleParts = title.split(' - ')
  const mainTitle = titleParts[0] || title
  const subtitle = titleParts[1] || ''

  // Simple function to reorder tags (AI/ML first)
  const reorderTags = (originalTags: string[]) => {
    const aiMlTags = originalTags.filter(tag => 
      tag.includes('AI') || tag.includes('ML') || tag.includes('Computer Vision') || 
      tag.includes('Generative') || tag.includes('Machine Learning')
    )
    const otherTags = originalTags.filter(tag => 
      !tag.includes('AI') && !tag.includes('ML') && !tag.includes('Computer Vision') && 
      !tag.includes('Generative') && !tag.includes('Machine Learning')
    )
    
    return [...aiMlTags, ...otherTags].slice(0, 6)
  }

  const orderedTags = reorderTags(tags)

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
          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors cursor-pointer">
            {mainTitle}
            {subtitle && (
              <>
                <br />
                <span className="text-lg font-normal">{subtitle}</span>
              </>
            )}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {orderedTags.map((tag) => (
            <span 
              key={tag} 
              className="inline-block px-1.5 py-0.5 text-xs text-muted-foreground border border-gray-300 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
