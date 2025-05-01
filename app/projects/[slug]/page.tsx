import Link from "next/link"
import { ArrowLeft, Calendar, User, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PrimaryButton } from "@/components/ui/primary-button"
import { GradientBackground } from "@/components/gradient-background"
import { ThemeToggle } from "@/components/theme-toggle"
import { Header } from "@/components/header"
import { getImagePath } from "@/lib/utils"

// This is a mock function to simulate fetching project data
// In a real application, you would fetch this data from a CMS or API
function getProjectData(slug: string) {
  const projects = {
    "health-app": {
      title: "Revive - Fitness App",
      client: "Stealth Startup",
      date: "January 2023",
      tags: ["Mobile App", "Healthcare", "UI/UX", "User Research"],
      overview: "A complete redesign of a health tracking application to improve user engagement and retention.",
      challenge:
        "The original app had a high churn rate with users abandoning the platform after just a few sessions. The interface was cluttered, the information architecture was confusing, and the overall experience felt clinical rather than motivational.",
      process: [
        "Conducted user interviews with 15 current and former users to understand pain points",
        "Created user personas and journey maps to identify key moments of friction",
        "Developed low-fidelity wireframes and tested with users",
        "Iterated on designs based on feedback",
        "Created high-fidelity prototypes and conducted usability testing",
        "Worked with developers to implement the new design",
      ],
      features: [
        "Personalized fitness dashboards with dynamic goal setting",
        "AI-powered workout recommendations based on user performance",
        "Social challenges and community leaderboards to increase motivation",
        "Progress tracking with visual representations and milestone celebrations",
        "Integrated nutrition planning with smart grocery lists"
      ],
      outcome:
        "The redesigned app saw a 40% increase in daily active users and a 35% increase in session duration. User satisfaction scores improved from 3.2/5 to 4.7/5.",
      images: [
        "/images/fitness/hero.jpg",
        "/images/fitness/boost_animation.gif",
        "/images/fitness/summary_animation.gif",
        "/images/fitness/leadership_animation.gif",
        "/images/fitness/elitefit_animation.gif",
      ],
    },
    ecommerce: {
      title: "E-commerce Experience",
      client: "StyleShop",
      date: "March 2023",
      tags: ["E-commerce", "Web Design", "User Research", "Conversion Optimization"],
      overview:
        "A redesign of an online fashion retailer's website to improve the shopping experience and increase conversions.",
      challenge:
        "The client was experiencing high cart abandonment rates and low conversion despite having competitive pricing and quality products. The checkout process was cumbersome and product discovery was difficult.",
      process: [
        "Analyzed site analytics to identify drop-off points in the user journey",
        "Conducted competitive analysis of leading e-commerce platforms",
        "Created wireframes for key user flows: product discovery, product detail, and checkout",
        "Developed interactive prototypes and conducted A/B testing",
        "Implemented a streamlined checkout process and improved product filtering",
      ],
      features: [
        "Smart product filtering with visual attribute selectors",
        "One-page checkout with progress indicator and guest checkout option",
        "Personalized product recommendations based on browsing history",
        "Real-time inventory visibility and size availability indicators",
        "Streamlined mobile-first navigation with category quick-access"
      ],
      outcome:
        "The redesigned website achieved a 25% increase in conversion rate and a 30% reduction in cart abandonment. Average order value increased by 15% due to improved product recommendations.",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
    "finance-dashboard": {
      title: "Financial Dashboard",
      client: "InvestPro",
      date: "June 2023",
      tags: ["Dashboard", "Fintech", "Data Visualization", "Accessibility"],
      overview: "A comprehensive dashboard that simplifies complex financial data for non-expert users.",
      challenge:
        "The client wanted to make financial data more accessible to everyday investors without financial backgrounds. The existing dashboard was overwhelming and used industry jargon that confused users.",
      process: [
        "Conducted user research to understand the financial literacy levels of target users",
        "Created information architecture that grouped related financial concepts",
        "Designed data visualizations that made complex financial data easy to understand at a glance",
        "Created interactive prototypes with tooltips explaining financial terms",
        "Conducted usability testing with both novice and experienced investors",
        "Refined the design based on feedback to ensure it served both user groups effectively",
      ],
      features: [
        "Interactive data visualizations with simplified financial metrics",
        "Personalized investment insights with plain-language explanations",
        "Portfolio performance simulator with risk assessment tools",
        "Educational tooltips and guides integrated throughout the interface",
        "Customizable dashboard layouts for different user expertise levels"
      ],
      outcome:
        "The new dashboard received overwhelmingly positive feedback, with 92% of users reporting they felt more confident making investment decisions. User engagement increased by 45% and the platform saw a 28% increase in new user signups.",
      images: [
        "/images/fitness/hero.jpg",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
    "travel-platform": {
      title: "Travel Booking Platform",
      client: "WanderWise Travel",
      date: "August 2023",
      tags: ["Travel", "Booking", "Mobile First", "User Experience"],
      overview: "A redesigned booking experience for a travel platform focusing on reducing abandonment rates and streamlining the booking process.",
      challenge: 
        "The client's existing booking platform had a high abandonment rate of 78% during the booking process. Users found the multi-step process confusing, and the platform lacked transparency about fees and booking details until late in the process.",
      process: [
        "Analyzed booking funnel data to identify key drop-off points",
        "Conducted user interviews with 20 travelers to understand pain points in travel booking",
        "Created journey maps highlighting emotional high and low points during booking",
        "Developed a simplified booking flow that reduced steps while maintaining clarity",
        "Designed a transparent fee structure visible throughout the booking process",
        "Created and tested prototypes with real users through task completion studies",
        "Implemented a persistent booking summary that updated in real-time"
      ],
      features: [
        "Transparent pricing with no hidden fees throughout the booking process",
        "Persistent booking summary that updates in real-time",
        "Simplified multi-destination trip planning with drag-and-drop interface",
        "Smart date selection with price prediction calendar",
        "One-click saved preferences for returning users"
      ],
      outcome:
        "The redesigned booking process reduced abandonment rates by 42% and increased overall bookings by 35%. Customer satisfaction scores for the booking experience improved from 3.4/5 to 4.6/5, and the average booking completion time decreased from 12 minutes to 7 minutes.",
      images: [
        process.env.NODE_ENV === 'production' ? '/portfolio/placeholder.svg?height=600&width=800' : '/placeholder.svg?height=600&width=800',
        process.env.NODE_ENV === 'production' ? '/portfolio/placeholder.svg?height=600&width=800' : '/placeholder.svg?height=600&width=800',
        process.env.NODE_ENV === 'production' ? '/portfolio/placeholder.svg?height=600&width=800' : '/placeholder.svg?height=600&width=800',
      ],
    },
    "education-app": {
      title: "Educational App",
      client: "LearnSmart Academy",
      date: "October 2023",
      tags: ["Education", "Accessibility", "Mobile App", "Inclusive Design"],
      overview: "An engaging learning experience designed for K-12 students with accessibility as a core principle.",
      challenge:
        "The client needed an educational platform that would engage students of diverse learning abilities and preferences while meeting strict accessibility requirements. The existing solution was visually cluttered, lacked clear navigation, and was not optimized for screen readers or keyboard navigation.",
      process: [
        "Conducted research with teachers, students, and parents to understand diverse learning needs",
        "Worked with accessibility specialists to establish WCAG 2.1 AA compliance standards",
        "Created user personas representing different abilities and learning styles",
        "Developed a design system with accessible color contrasts, typography, and interactive elements",
        "Designed content organization that supported multiple learning pathways",
        "Incorporated audio, visual, and tactile feedback mechanisms",
        "Tested with students from diverse backgrounds including those with learning disabilities",
        "Iterated based on feedback from teachers, students, and accessibility specialists"
      ],
      features: [
        "Adaptive learning paths that adjust to student progress",
        "Multi-format content delivery (text, audio, video, interactive)",
        "Accessibility features including screen reader support and keyboard navigation",
        "Gamified learning elements with achievement system",
        "Parent/teacher dashboard with progress monitoring tools"
      ],
      outcome:
        "The educational app achieved 100% WCAG 2.1 AA compliance and received certification from educational accessibility organizations. Student engagement increased across all learning ability levels, with 94% of teachers reporting improved class participation. Learning outcomes showed a 27% improvement compared to previous digital learning tools.",
      images: [
        process.env.NODE_ENV === 'production' ? '/portfolio/placeholder.svg?height=600&width=800' : '/placeholder.svg?height=600&width=800',
        process.env.NODE_ENV === 'production' ? '/portfolio/placeholder.svg?height=600&width=800' : '/placeholder.svg?height=600&width=800',
        process.env.NODE_ENV === 'production' ? '/portfolio/placeholder.svg?height=600&width=800' : '/placeholder.svg?height=600&width=800',
      ],
    },
    // Default fallback for any other slug
    default: {
      title: "Project Details",
      client: "Client Name",
      date: "2023",
      tags: ["UX Design", "UI Design", "Research"],
      overview: "This project showcases my UX design process and outcomes.",
      challenge: "The client faced specific challenges that needed to be addressed through thoughtful design.",
      process: [
        "Conducted user research to understand needs and pain points",
        "Created wireframes and prototypes",
        "Tested designs with users and gathered feedback",
        "Refined the design based on insights",
      ],
      features: [
        "Feature 1 description",
        "Feature 2 description",
        "Feature 3 description",
        "Feature 4 description",
        "Feature 5 description"
      ],
      outcome: "The project resulted in improved user satisfaction and business metrics.",
      images: [
        process.env.NODE_ENV === 'production' ? '/portfolio/placeholder.svg?height=600&width=800' : '/placeholder.svg?height=600&width=800',
        process.env.NODE_ENV === 'production' ? '/portfolio/placeholder.svg?height=600&width=800' : '/placeholder.svg?height=600&width=800',
        process.env.NODE_ENV === 'production' ? '/portfolio/placeholder.svg?height=600&width=800' : '/placeholder.svg?height=600&width=800',
      ],
    },
  }

  return projects[slug as keyof typeof projects] || projects.default
}

// Add generateStaticParams to tell Next.js which slugs to generate at build time
export async function generateStaticParams() {
  // Return an array of objects with the slug parameter
  return [
    { slug: "health-app" },
    { slug: "ecommerce" },
    { slug: "finance-dashboard" },
    { slug: "travel-platform" },
    { slug: "education-app" }
  ];
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectData(params.slug)

  return (
    <div className="flex min-h-screen flex-col">
      <GradientBackground />
      <Header />
      <main className="flex-1">
        <div className="relative">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
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

        <div className="bg-white dark:bg-gray-900 py-16">
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
                    <h2 className="text-2xl font-light mb-4 text-primary">Overview</h2>
                    <p className="text-muted-foreground">{project.overview}</p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-light mb-4 text-primary">The Challenge</h2>
                    <p className="text-muted-foreground">{project.challenge}</p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-light mb-4 text-primary">Process & Approach</h2>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      {project.process.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-light mb-4 text-primary">Key Features</h2>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.images.slice(1).map((image, index) => (
                      <div key={index} className="overflow-hidden">
                        <img
                          src={getImagePath(image)}
                          alt={`${project.title} - Process ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <h2 className="text-2xl font-light mb-4 text-primary">Outcome & Results</h2>
                    <p className="text-muted-foreground">{project.outcome}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-lg font-light mb-4 text-primary">Project Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <User className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Client</p>
                        <p className="text-muted-foreground">{project.client}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Date</p>
                        <p className="text-muted-foreground">{project.date}</p>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-lg font-light mb-4 text-primary">More Projects</h3>
                  <div className="space-y-4">
                    <Link href="/projects/health-app" className="block group">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 overflow-hidden">
                          <img
                            src={getImagePath("/placeholder.svg?height=64&width=64")}
                            alt="Health App"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-light group-hover:text-primary transition-colors">Revive - Fitness App</p>
                          <p className="text-sm text-muted-foreground">Mobile App, Healthcare</p>
                        </div>
                      </div>
                    </Link>
                    <div className="h-px bg-border"></div>
                    <Link href="/projects/ecommerce" className="block group">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 overflow-hidden">
                          <img
                            src={getImagePath("/placeholder.svg?height=64&width=64")}
                            alt="E-commerce"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-light group-hover:text-primary transition-colors">E-commerce Experience</p>
                          <p className="text-sm text-muted-foreground">Web Design, E-commerce</p>
                        </div>
                      </div>
                    </Link>
                    <div className="h-px bg-border"></div>
                    <Link href="/projects/finance-dashboard" className="block group">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 overflow-hidden">
                          <img
                            src={getImagePath("/placeholder.svg?height=64&width=64")}
                            alt="Finance Dashboard"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-light group-hover:text-primary transition-colors">Financial Dashboard</p>
                          <p className="text-sm text-muted-foreground">Dashboard, Fintech</p>
                        </div>
                      </div>
                    </Link>
                    <div className="h-px bg-border"></div>
                    <Link href="/projects/travel-platform" className="block group">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 overflow-hidden">
                          <img
                            src={getImagePath("/placeholder.svg?height=64&width=64")}
                            alt="Travel Platform"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-light group-hover:text-primary transition-colors">Travel Booking Platform</p>
                          <p className="text-sm text-muted-foreground">Travel, Mobile First</p>
                        </div>
                      </div>
                    </Link>
                    <div className="h-px bg-border"></div>
                    <Link href="/projects/education-app" className="block group">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 overflow-hidden">
                          <img
                            src={getImagePath("/placeholder.svg?height=64&width=64")}
                            alt="Educational App"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-light group-hover:text-primary transition-colors">Educational App</p>
                          <p className="text-sm text-muted-foreground">Education, Accessibility</p>
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
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container text-center text-sm text-white/50">
          © {new Date().getFullYear()} UX Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
