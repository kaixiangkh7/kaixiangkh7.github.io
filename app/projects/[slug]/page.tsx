import Link from "next/link"
import { ArrowLeft, User, ExternalLink, Briefcase, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PrimaryButton } from "@/components/ui/primary-button"
import { GradientBackground } from "@/components/gradient-background"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getImagePath } from "@/lib/utils"
import { getProjectData, projectSlugs } from "@/lib/projects-data"
import { ProjectImageLayout } from "@/components/project-layout"

// Add generateStaticParams to tell Next.js which slugs to generate at build time
export async function generateStaticParams() {
  return projectSlugs.map((slug) => ({
    slug,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectData(slug)

  return (
    <div className="flex min-h-screen flex-col">
      <GradientBackground />
      <Header />
      <main className="flex-1">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black/100 z-10"></div>
          <img
            src={getImagePath(project.images[0] || "/placeholder.svg")}
            alt={project.title}
            className="w-full h-[50vh] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 z-20 container py-12">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs text-white/70 border border-white/30 px-3 py-1 bg-black/30 backdrop-blur-sm rounded-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white py-16">
          <div className="container">
            <Button variant="ghost" asChild className="mb-8 group">
              <Link href="/#projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="space-y-12">
                  <div>
                    <h2 className="text-2xl font-normal mb-4 text-primary">Overview</h2>
                    <p className="text-muted-foreground">{project.overview}</p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-normal mb-4 text-primary">Problem Space</h2>
                    <p className="text-muted-foreground">{project.problemSpace}</p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-normal mb-4 text-primary">Research & Analytics</h2>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      {project.process.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ul>
                  </div>

                  {slug !== 'project-5' && (
                    <div>
                      <h2 className="text-2xl font-normal mb-4 text-primary">Jobs To Be Done</h2>
                      <div className="text-muted-foreground whitespace-pre-line">{project.jobToBeDone}</div>
                    </div>
                  )}

                  <div>
                    <h2 className="text-2xl font-normal mb-4 text-primary">
                      {slug === 'project-5' ? 'Key UX Considerations' : 'Key Features'}
                    </h2>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Image Layouts */}
                  <ProjectImageLayout 
                    projectSlug={slug}
                    images={project.images}
                    projectTitle={project.title}
                  />
                </div>
              </div>

              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-lg font-normal mb-4 text-primary">Project Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <User className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Client</p>
                        <p className="text-muted-foreground">{project.client}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Briefcase className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Role</p>
                        <p className="text-muted-foreground">{project.role}</p>
                      </div>
                    </div>
                    {project.team && project.team.length > 0 && (
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Team</p>
                          <div className="text-muted-foreground space-y-1">
                            {project.team.map((member, index) => (
                              <p key={index}>{member}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    {slug === 'project-3' && (
                      <div className="pt-4">
                        <Button asChild className="w-full">
                          <Link href="https://flexit.fit/TV/" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Live Product
                          </Link>
                        </Button>
                      </div>
                    )}
                    {slug === 'project-5' && (
                      <div className="pt-4">
                        <Button asChild className="w-full">
                          <Link href="https://echeloncoach.com/virtualpt/" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Live Product
                          </Link>
                        </Button>
                      </div>
                    )}
                    {slug === 'project-9' && (
                      <div className="pt-4">
                        <Button asChild className="w-full">
                          <Link href="https://prep.cafe/" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Live Product
                          </Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>


                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-lg font-normal mb-4 text-primary">More Projects</h3>
                  <div className="space-y-4">
                    <Link href="/projects/project-9" className="block group">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 overflow-hidden rounded-lg flex-shrink-0">
                          <img
                            src={getImagePath("/images/mocha/mocha-thumbnail.jpg")}
                            alt="Prep.cafe Interview Prep"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-light group-hover:text-primary transition-colors">Prep.cafe - AI Interview Prep Platform</p>
                          <p className="text-sm text-muted-foreground">AI Coaching, SaaS Platform</p>
                        </div>
                      </div>
                    </Link>
                    <div className="h-px bg-border"></div>
                    <Link href="/projects/project-6" className="block group">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 overflow-hidden rounded-lg flex-shrink-0">
                          <img
                            src={getImagePath("/images/athena/athena-thumbnail.jpg")}
                            alt="Athena Dating App"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-light group-hover:text-primary transition-colors">Athena - Social & Dating Platform</p>
                          <p className="text-sm text-muted-foreground">AI Matching, Social Platform</p>
                        </div>
                      </div>
                    </Link>
                    <div className="h-px bg-border"></div>
                    <Link href="/projects/project-2" className="block group">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 overflow-hidden rounded-lg flex-shrink-0">
                          <img
                            src={getImagePath("/images/amazon/amazon-thumbnail.jpg")}
                            alt="Amazon Student Hire Portal"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-light group-hover:text-primary transition-colors">Amazon AlphaHire - Enterprise Recruitment AI</p>
                          <p className="text-sm text-muted-foreground">Enterprise AI, Recruitment</p>
                        </div>
                      </div>
                    </Link>
                    <div className="h-px bg-border"></div>
                    <Link href="/projects/project-5" className="block group">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 overflow-hidden rounded-lg flex-shrink-0">
                          <img
                            src={getImagePath("/images/flexit/flexit_thumbmail.jpg")}
                            alt="FlexIt Platform"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-light group-hover:text-primary transition-colors">FlexIt - Fitness SaaS Solution</p>
                          <p className="text-sm text-muted-foreground">SaaS Platform, Fitness</p>
                        </div>
                      </div>
                    </Link>
                    <div className="h-px bg-border"></div>
                    <Link href="/projects/project-3" className="block group">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 overflow-hidden rounded-lg flex-shrink-0">
                          <img
                            src={getImagePath("/images/ai_coach/tv-thumbnail.jpg")}
                            alt="FlexIt AI Coach"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-light group-hover:text-primary transition-colors">FlexIt AI - Motion tracking fitness coach</p>
                          <p className="text-sm text-muted-foreground">Computer Vision, AI Coaching, TV App</p>
                        </div>
                      </div>
                    </Link>
                    <div className="h-px bg-border"></div>
                    <Link href="/projects/project-1" className="block group">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 overflow-hidden rounded-lg flex-shrink-0">
                          <img
                            src={getImagePath("/images/fitness/thumbnail.jpg")}
                            alt="EliteFit App"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-light group-hover:text-primary transition-colors">EliteFit - Mobile Health & Wellness</p>
                          <p className="text-sm text-muted-foreground">Mobile App, Fitness, AI Motion Tracking</p>
                        </div>
                      </div>
                    </Link>
                    <div className="h-px bg-border"></div>
                    <Link href="/projects/project-4" className="block group">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 overflow-hidden rounded-lg flex-shrink-0">
                          <img
                            src={getImagePath("/images/travel/Thumbnail.jpg")}
                            alt="Travel Platform"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-light group-hover:text-primary transition-colors">Revive - Smart Itinerary & Lifestyle Intelligence</p>
                          <p className="text-sm text-muted-foreground">AI/ML, Luxury Travel, Smart Itinerary</p>
                        </div>
                      </div>
                    </Link>
                    <div className="h-px bg-border"></div>
                    <Link href="/projects/project-7" className="block group">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 overflow-hidden rounded-lg flex-shrink-0">
                          <img
                            src={getImagePath("/images/z_lounge/zlounge-thumbnail.jpg")}
                            alt="Z Lounge Waitlist"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-light group-hover:text-primary transition-colors">Z Lounge - Luxury Waitlist Experience</p>
                          <p className="text-sm text-muted-foreground">Luxury Design, Waitlist</p>
                        </div>
                      </div>
                    </Link>
                    <div className="h-px bg-border"></div>
                    <Link href="/projects/project-8" className="block group">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 overflow-hidden rounded-lg flex-shrink-0">
                          <img
                            src={getImagePath("/images/x_club/xclub-thumbnail.jpg")}
                            alt="X Club Luxury Experience"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-light group-hover:text-primary transition-colors">X Club - Luxury Spa & Dining Experience</p>
                          <p className="text-sm text-muted-foreground">Luxury Club, Membership Only</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
