import Link from "next/link"
import { ArrowRight, Mail, Github, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { GradientBackground } from "@/components/gradient-background"
import { Header } from "@/components/header"
import { getImagePath } from "@/lib/utils"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <GradientBackground />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/40 z-10"></div>
          </div>
          <div className="container relative z-20">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl md:text-7xl mb-6"> 
                <span className="font-light">Creating <br/></span>
                <span className="font-bold">user centered</span> <br/> 
                <span className="font-light">digital experiences</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 font-light">
                I design intuitive and engaging user experiences that solve real problems and delight users.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full px-8 font-medium shadow-md hover:shadow-lg transition-all">
                  <Link href="#projects">View My Work</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="rounded-full px-8 font-light bg-transparent text-white border-white hover:bg-white/20 shadow-md hover:shadow-lg transition-all"
                >
                  <Link href="#contact">Contact Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 bg-white">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="w-full md:w-2/5 flex justify-center md:justify-start">
                <div className="relative">
                  <div className="w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-2xl shadow-xl">
                    <img
                      src={getImagePath("/placeholder.svg?height=400&width=400")}
                      alt="Portrait"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground py-4 px-6 rounded-lg shadow-lg">
                    <span className="font-medium text-lg">UX & Product</span>
                  </div>
                  <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-primary rounded-lg opacity-20"></div>
                </div>
              </div>
              <div className="w-full md:w-3/5 space-y-6">
                <div>
                  <h4 className="text-primary font-semibold mb-2">About Me</h4>
                  <h2 className="text-4xl font-bold mb-4 leading-tight">UX Designer & Product Manager</h2>
                </div>
                <p className="text-muted-foreground text-lg">
                  I bridge the gap between <span className="font-medium">user needs and business goals</span>, creating products that resonate with customers while driving growth. 
                  With expertise in both UX design and product management, I lead cross-functional teams through the entire product lifecycle.
                </p>
                <p className="text-muted-foreground text-lg">
                  My approach combines user-centered design principles with strategic product thinking. I translate research insights into 
                  product roadmaps and deliver experiences that balance user delight with business metrics.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-primary mb-1">15+</h3>
                    <p className="text-muted-foreground text-sm font-light">Products Shipped</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-primary mb-1">7+</h3>
                    <p className="text-muted-foreground text-sm font-light">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-primary mb-1">40+</h3>
                    <p className="text-muted-foreground text-sm font-light">User Research Studies</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-primary mb-1">3</h3>
                    <p className="text-muted-foreground text-sm font-light">Tech Startups</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 relative bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-semibold mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="EliteFit - Fitness App"
                description="Improved user engagement by 40% through a complete UX overhaul of a health tracking application."
                image="/images/fitness/thumbnail.jpg"
                tags={["Mobile App", "Healthcare", "UI/UX"]}
                link="/projects/project-1"
              />
              <ProjectCard
                title="Amazon Student Hire Portal"
                description="AI-powered recruitment platform with agent Rexa that reduced manual screening time by 45% and improved role matching accuracy by 60%."
                image="/images/amazon/amazon-thumbnail.jpg"
                tags={["Web App", "AI/ML", "Recruitment"]}
                link="/projects/project-2"
              />
              <ProjectCard
                title="Financial Dashboard"
                description="Created a comprehensive dashboard that simplified complex financial data for non-expert users."
                image="/placeholder.svg?height=400&width=600"
                tags={["Dashboard", "Fintech", "Data Visualization"]}
                link="/projects/project-3"
              />
              <ProjectCard
                title="Revive - Travel App"
                description="Redesigned booking experience that reduced abandonment rates by 42% and improved mobile conversions by 58%."
                image="/images/travel/Thumbnail.jpg"
                tags={["Travel", "Booking Platform", "Mobile First"]}
                link="/projects/project-4"
              />
              <ProjectCard
                title="FlexIt - Online Fitness Training Platform"
                description="Redesigned an online fitness platform resulting in 65% increased user engagement and 45% improved booking rates."
                image="/images/flexit/flexit_thumbmail.jpg"
                tags={["Web App", "Fitness", "UI/UX Redesign"]}
                link="/projects/project-5"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl font-semibold mb-12">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-medium mb-6 text-primary">Design Skills</h3>
                <div className="flex flex-wrap">
                  <SkillBadge name="User Research" />
                  <SkillBadge name="Wireframing" />
                  <SkillBadge name="Prototyping" />
                  <SkillBadge name="Usability Testing" />
                  <SkillBadge name="Information Architecture" />
                  <SkillBadge name="Interaction Design" />
                  <SkillBadge name="Visual Design" />
                  <SkillBadge name="Responsive Design" />
                  <SkillBadge name="Accessibility" />
                  <SkillBadge name="Design Systems" />
                </div>

                <h3 className="text-xl font-medium mb-6 mt-8 text-primary">Tools</h3>
                <div className="flex flex-wrap">
                  <SkillBadge name="Figma" />
                  <SkillBadge name="Adobe XD" />
                  <SkillBadge name="Sketch" />
                  <SkillBadge name="InVision" />
                  <SkillBadge name="Miro" />
                  <SkillBadge name="Zeplin" />
                  <SkillBadge name="Adobe Creative Suite" />
                  <SkillBadge name="Maze" />
                  <SkillBadge name="Optimal Workshop" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-6 text-primary">Additional Skills</h3>
                <div className="flex flex-wrap">
                  <SkillBadge name="HTML/CSS" />
                  <SkillBadge name="Basic JavaScript" />
                  <SkillBadge name="Design Thinking" />
                  <SkillBadge name="Agile/Scrum" />
                  <SkillBadge name="Project Management" />
                  <SkillBadge name="Stakeholder Management" />
                  <SkillBadge name="Data Analysis" />
                  <SkillBadge name="A/B Testing" />
                  <SkillBadge name="Content Strategy" />
                </div>

                <h3 className="text-xl font-medium mb-6 mt-8 text-primary">Industries</h3>
                <div className="flex flex-wrap">
                  <SkillBadge name="Healthcare" />
                  <SkillBadge name="E-commerce" />
                  <SkillBadge name="Fintech" />
                  <SkillBadge name="Education" />
                  <SkillBadge name="Travel" />
                  <SkillBadge name="SaaS" />
                  <SkillBadge name="IoT/Smart Home" />
                  <SkillBadge name="Entertainment" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 relative gradient-bg text-white">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container relative z-10">
            <h2 className="text-3xl font-semibold mb-12">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-medium mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 group">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:hello@uxportfolio.com" className="hover:text-primary transition-colors">
                      hello@uxportfolio.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <a href="#" className="hover:text-primary transition-colors">
                      linkedin.com/in/uxdesigner
                    </a>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <Twitter className="h-5 w-5 text-primary" />
                    <a href="#" className="hover:text-primary transition-colors">
                      @uxdesigner
                    </a>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <Github className="h-5 w-5 text-primary" />
                    <a href="#" className="hover:text-primary transition-colors">
                      github.com/uxdesigner
                    </a>
                  </div>
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-medium mb-4">Let's Connect</h3>
                  <p className="text-white/80 font-light">
                    Whether you have a project in mind, want to discuss a potential collaboration, or just want to say
                    hello, I'm always open to new conversations.
                  </p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full px-3 py-2 bg-white/10 border-0 text-white placeholder-white/50 focus:ring-1 focus:ring-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 bg-white/10 border-0 text-white placeholder-white/50 focus:ring-1 focus:ring-primary"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="w-full px-3 py-2 bg-white/10 border-0 text-white placeholder-white/50 focus:ring-1 focus:ring-primary"
                      placeholder="What is this regarding?"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-3 py-2 bg-white/10 border-0 text-white placeholder-white/50 resize-none focus:ring-1 focus:ring-primary"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button className="w-full rounded-full px-8 font-medium shadow-md hover:shadow-lg transition-all">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="font-light text-xl">
                <span className="text-primary">UX</span>Portfolio
              </Link>
            </div>
            <div className="flex space-x-6">
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-white/70 hover:text-primary transition-colors" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-white/70 hover:text-primary transition-colors" />
              </a>
              <a href="#" aria-label="GitHub">
                <Github className="h-5 w-5 text-white/70 hover:text-primary transition-colors" />
              </a>
              <a href="mailto:hello@uxportfolio.com" aria-label="Email">
                <Mail className="h-5 w-5 text-white/70 hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-white/50">
            © {new Date().getFullYear()} UX Portfolio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
