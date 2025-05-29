import Link from "next/link"
import { ArrowRight, Mail, Github, Linkedin, Instagram } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { GradientBackground } from "@/components/gradient-background"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { getImagePath } from "@/lib/utils"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <GradientBackground />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/40 z-1"></div>
          </div>
          <div className="container relative z-1">
            <div className="max-w-4xl text-white">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 leading-tight"> 
                <span className="font-extralight">Data-Driven</span>
                <br className="hidden sm:block" />
                <span className="font-extralight"> Product Manager</span>
                <br /> 
                <span className="font-extralight">with </span>
                <span className="font-semibold">User-Centered</span>
                <br className="hidden sm:block" />
                <span className="font-extralight"> Design Expertise</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-xl text-white/80 mb-6 sm:mb-8 font-light max-w-3xl">
                I combine strategic product leadership with 7 years of design experience and hands-on AI/ML expertise. Running ML models, analyzing data, and designing user experiences to build products that solve business problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button asChild size="lg" className="rounded-full px-6 sm:px-8 font-medium shadow-md hover:shadow-lg transition-all">
                  <Link href="#projects">View My Work</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="rounded-full px-6 sm:px-8 font-light bg-transparent text-white border-white hover:bg-white/20 shadow-md hover:shadow-lg transition-all"
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
                      src={getImagePath("/images/profile/profile.jpg")}
                      alt="Kaixiang Huang - AI Product Manager"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground py-4 px-6 rounded-lg shadow-lg">
                    <span className="font-medium text-lg">PM | UX | AI</span>
                  </div>
                  <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-primary rounded-lg opacity-20"></div>
                </div>
              </div>
              <div className="w-full md:w-3/5 space-y-6">
                <div>
                  <h4 className="text-primary font-semibold mb-2">About Me</h4>
                  <h2 className="text-4xl font-bold mb-4 leading-tight">
                    Hi, I'm Kai – AI Product Manager <br /> with Business Analytics & UX Design Expertise
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    <span className="font-medium">I hold dual Master's degree from Columbia University: <br /></span>
                    <span className="font-semibold"> MBA</span> – Business Analytics, AI & Product Management<br />
                    <span className="font-semibold"> MS</span> – Digital & Human-Centered Design, Digital Twin & 3D Architectural Design
                  </p>
                  <p className="text-muted-foreground text-lg mt-1">
                    With 7 years of professional experience, I bridge the gap between business, technology, and design. I don't just strategize about AI products – I run ML models, analyze complex datasets, and design intuitive experiences that make AI accessible to users.
                  </p>
                  <p className="text-muted-foreground text-lg mt-1">
                    My unique background enables me to lead cross-functional teams, drive product vision, and deliver solutions that are both innovative and user-centered.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-primary mb-1">3+</h3>
                    <p className="text-muted-foreground text-sm font-light">AI/ML Products Launched</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-primary mb-1">30+</h3>
                    <p className="text-muted-foreground text-sm font-light">Digital Products Delivered</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-primary mb-1">7+</h3>
                    <p className="text-muted-foreground text-sm font-light">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-primary mb-1">40+</h3>
                    <p className="text-muted-foreground text-sm font-light">Data Analytics Projects</p>
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
                title="Prep.cafe - AI Interview Prep Platform"
                description="AI-powered interview prep platform with 91% user satisfaction and 78% higher success rates in actual interviews."
                image="/images/mocha/mocha-thumbnail.jpg"
                tags={["AI Coaching", "SaaS Platform", "Interview Prep", "GenAI"]}
                link="/projects/project-9"
              />
              <ProjectCard
                title="Athena - Dating & Social Platform"
                description="Revolutionary dating app for fitness enthusiasts with 85% reporting more meaningful connections and 92% premium subscriber retention."
                image="/images/athena/athena-thumbnail.jpg"
                tags={["AI Matching", "Social Platform", "Dating App"]}
                link="/projects/project-6"
              />
              <ProjectCard
                title="Amazon Rexa - Enterprise Recruitment AI"
                description="AI-powered recruitment platform with agent Rexa that reduced manual screening time by 45% and improved role matching accuracy by 60%."
                image="/images/amazon/amazon-thumbnail.jpg"
                tags={["Enterprise AI", "Recruitment", "B2B Platform"]}
                link="/projects/project-2"
              />
              <ProjectCard
                title="FlexIt Platform - Fitness SaaS Solution"
                description="Redesigned an online fitness platform resulting in 65% increased user engagement and 45% improved booking rates."
                image="/images/flexit/flexit_thumbmail.jpg"
                tags={["SaaS Platform", "Fitness", "Web App"]}
                link="/projects/project-5"
              />
              <ProjectCard
                title="FlexIt Vision - AI Computer Vision Coach"
                description="AI-powered fitness coach using computer vision for real-time form correction and personalized feedback on TV platforms."
                image="/images/ai_coach/tv-thumbnail.jpg"
                tags={["Computer Vision", "AI Coaching", "TV Platform"]}
                link="/projects/project-3"
              />
              <ProjectCard
                title="EliteFit - Mobile Health & Wellness"
                description="Improved user engagement by 40% through a complete UX overhaul of a health tracking application."
                image="/images/fitness/thumbnail.jpg"
                tags={["Mobile App", "Healthcare", "Wellness"]}
                link="/projects/project-1"
              />
              <ProjectCard
                title="Revive AI - Smart Itinerary & Lifestyle Intelligence"
                description="AI-powered travel companion for high net worth individuals featuring intelligent scheduling of premium experiences, dining, and events."
                image="/images/travel/Thumbnail.jpg"
                tags={["AI/ML", "Luxury Travel", "Smart Itinerary", "High Net Worth"]}
                link="/projects/project-4"
              />
              <ProjectCard
                title="Z Lounge - Luxury Waitlist Experience"
                description="Exclusive waitlist design featuring minimalist elegance and sophisticated aesthetics that increased sign-ups by 78%."
                image="/images/z_lounge/zlounge-thumbnail.jpg"
                tags={["Luxury Design", "Waitlist", "Web Design"]}
                link="/projects/project-7"
              />
              <ProjectCard
                title="X Club - Luxury Spa & Dining Experience"
                description="Exclusive digital experience for premium luxury club featuring world-class spa services, fine dining, and seamless subscription management for discerning clientele."
                image="/images/x_club/xclub-thumbnail.jpg"
                tags={["Luxury Club", "Subscription", "Spa & Dining"]}
                link="/projects/project-8"
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
                <h3 className="text-xl font-medium mb-6 text-primary">AI/ML & Data Analytics (2 Years)</h3>
                <div className="flex flex-wrap">
                  <SkillBadge name="Supervised & Unsupervised Learning" />
                  <SkillBadge name="Linear Regression & Logistic Regression" />
                  <SkillBadge name="Decision Trees & Random Forests" />
                  <SkillBadge name="K-Nearest Neighbors" />
                  <SkillBadge name="XGBoost" />
                  <SkillBadge name="K-Means Clustering" />
                  <SkillBadge name="Reinforcement Learning" />
                  

                  <SkillBadge name="Deep Learning & Neural Networks" />
                  <SkillBadge name="Data Science & Analytics" />
                  <SkillBadge name="Python & TensorFlow" />
                  <SkillBadge name="Business Intelligence" />
                  <SkillBadge name="Predictive Analytics" />
                  <SkillBadge name="A/B Testing & Experimentation" />
                  <SkillBadge name="SQL & Database Management" />
                  <SkillBadge name="Statistical Analysis" />
                  <SkillBadge name="GenAI & LLM Integration" />
                </div>

                <h3 className="text-xl font-medium mb-6 mt-8 text-primary">Product Management (3 Years)</h3>
                <div className="flex flex-wrap">
                  <SkillBadge name="AI Product Strategy" />
                  <SkillBadge name="Roadmap Planning" />
                  <SkillBadge name="User Story" />
                  <SkillBadge name="Stakeholder Management" />
                  <SkillBadge name="Cross-functional Leadership" />
                  <SkillBadge name="Data-Driven Decision Making" />
                  <SkillBadge name="Market Research" />
                  <SkillBadge name="Feature Prioritization" />
                  <SkillBadge name="Go-to-Market Strategy" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-6 text-primary">Design (7 Years)</h3>
                <div className="flex flex-wrap">
                  <SkillBadge name="User Research" />
                  <SkillBadge name="Design Thinking" />
                  <SkillBadge name="Wireframing & Prototyping" />
                  <SkillBadge name="High-Fidelity Design" />
                  <SkillBadge name="Usability Testing" />
                  <SkillBadge name="Information Architecture" />
                  <SkillBadge name="Interaction Design" />
                  <SkillBadge name="Visual Design" />
                  <SkillBadge name="Design Systems" />
                  <SkillBadge name="Web Design" />
                  <SkillBadge name="Mobile Design" />
                  <SkillBadge name="UX Design" />
                  <SkillBadge name="UI Design" />
                  <SkillBadge name="User Persona" />
                  <SkillBadge name="User Journey" />
                  <SkillBadge name="User Flow" />
                  <SkillBadge name="User Story" />
                  
                </div>

                <h3 className="text-xl font-medium mb-6 mt-8 text-primary">Tools & Technologies</h3>
                <div className="flex flex-wrap">
                  <SkillBadge name="Python" />
                  <SkillBadge name="HTML/CSS/TypeScript" />
                  <SkillBadge name="TensorFlow" />
                  <SkillBadge name="SQL" />
                  <SkillBadge name="Tableau" />
                  <SkillBadge name="Jira" />
                  <SkillBadge name="Figma" />
                  <SkillBadge name="Digital Twin" />
                  <SkillBadge name="Adobe Creative Cloud" />
                  <SkillBadge name="AWS & Cloud Platforms" />
                  <SkillBadge name="Git & Version Control" />
                  <SkillBadge name="API Integration" />
                  <SkillBadge name="Agile/Scrum (Certified Scrum Product Owner)" />
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
                    <a href="mailto:kaixiang.huang@columbia.edu" className="hover:text-primary transition-colors">
                     kaixiang.huang@columbia.edu
                    </a>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <a href="https://www.linkedin.com/in/kaixianghuang/" className="hover:text-primary transition-colors">
                      @Kaixiang Huang
                    </a>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary fill-current">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <a href="https://x.com/kaixiangkh7" className="hover:text-primary transition-colors">
                      @kaixiangkh7
                    </a>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <Github className="h-5 w-5 text-primary" />
                    <a href="https://github.com/kaixiangkh7/" className="hover:text-primary transition-colors">
                      github.com/kaixiangkh7
                    </a>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <Instagram className="h-5 w-5 text-primary" />
                    <a href="https://www.instagram.com/kaixiang_huang/" className="hover:text-primary transition-colors">
                      @kaixiang_huang
                    </a>
                  </div>
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-medium mb-4">Let's Build AI-Powered Products</h3>
                  <p className="text-white/80 font-light">
                    Looking for a product manager who can bridge the gap between AI technology and user needs? With my unique combination of 7-year design foundation, hands-on ML expertise, and strategic product thinking, 
                    I help teams build AI products that users actually want to use.
                  </p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
