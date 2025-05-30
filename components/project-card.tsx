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
    <div className="group relative overflow-hidden bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 rounded-lg">
      <Link href={link} className="block">
        <div className="relative overflow-hidden h-64">
          <img
            src={getImagePath(image || "/placeholder.svg")}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
              <ArrowUpRight className="h-4 w-4 text-gray-800" />
            </div>
          </div>
        </div>
      </Link>
      <div className="p-6">
        <Link href={link} className="block">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-all duration-300 cursor-pointer">
            {mainTitle}
            {subtitle && (
              <>
                <br />
                <span className="text-lg font-normal">{subtitle}</span>
              </>
            )}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm mb-4 transition-colors duration-300 group-hover:text-gray-600">{description}</p>
        <div className="flex flex-wrap gap-2">
          {orderedTags.map((tag, index) => (
            <span 
              key={tag} 
              className="inline-block px-1.5 py-0.5 text-xs text-muted-foreground border border-gray-300 rounded transition-all duration-300 hover:border-primary hover:text-primary transform hover:scale-105"
              style={{ 
                transitionDelay: `${index * 50}ms` 
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
