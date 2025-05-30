import Link from "next/link"
import { ArrowRight, Mail, Github, Linkedin, Instagram, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { GradientBackground } from "@/components/gradient-background"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { SmoothScrollLink } from "@/components/smooth-scroll-link"
import { ScrollToHash } from "@/components/scroll-to-hash"
import { getImagePath } from "@/lib/utils"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToHash />
      <GradientBackground />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center px-4 sm:px-6 lg:px-8 pt-20 pb-8">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/40 z-1"></div>
          </div>
          <div className="container relative z-1 w-full">
            <div className="max-w-4xl text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 leading-tight font-light"> 
                <span className="font-extralight">Data-Driven</span>
                <br className="hidden sm:block" />
                <span className="font-extralight"> Product Manager</span>
                <br /> 
                <span className="font-extralight">with </span>
                <span className="font-semibold">User-Centered</span>
                <br className="hidden sm:block" />
                <span className="font-extralight"> Design Expertise</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-6 sm:mb-8 font-light leading-relaxed max-w-3xl">
              I combine 7 years of design experience with product strategy and AI/ML skills to create smart, data-driven products—from generative AI to computer vision—built with clean, user-first deisgn at the core.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <PrimaryButton asChild size="lg" rounded="full" className="px-6 sm:px-8">
                  <SmoothScrollLink href="#projects">View My Work</SmoothScrollLink>
                </PrimaryButton>
                <SecondaryButton asChild size="lg" rounded="full" className="px-6 sm:px-8">
                  <SmoothScrollLink href="#contact">Contact Me</SmoothScrollLink>
                </SecondaryButton>
              </div>
            </div>
          </div>
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block">
            <SmoothScrollLink href="#about" className="group flex flex-col items-center text-white/70 hover:text-white transition-colors">
              <div className="animate-bounce">
                <ChevronDown className="h-10 w-10 sm:h-12 sm:w-12" />
              </div>
            </SmoothScrollLink>
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
                    Hi, I'm Kai – Product Manager <br /> with UX Design & Business Analytics Expertise
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    <span className="font-medium">I hold dual Master's degrees from Columbia University: <br /></span>
                    <span className="font-semibold"> MBA</span> – Business Analytics, AI/ML, Product Management<br />
                    <span className="font-semibold"> MS</span> – Digital & Human-Centered Design, Digital Twin, Architectural Design
                  </p>
                  <p className="text-muted-foreground text-lg mt-4">
                    My unique background combines <span className="font-medium">7 years of design expertise</span>, <span className="font-medium">3 years of product management</span>, and <span className="font-medium">2 years of AI/ML and business analytics experience</span>. This rare combination allows me to bridge the gap between technical complexity and user needs.
                  </p>
                  <p className="text-muted-foreground text-lg mt-4">
                  I don't just strategize—I build. I run ML models, dive into data, talk to users, and design high-fidelity prototypes in Figma. This hands-on approach helps me work smoothly with cross-functional teams and ship products that are both technically sharp and truly user-centered.
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
            <h2 className="text-3xl font-semibold mb-12">Featured Product & Design Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Prep.cafe - AI Interview Prep Platform"
                description="Leveraging generative AI and advanced language models to provide personalized interview coaching and realistic simulations at scale."
                image="/images/mocha/mocha-thumbnail.jpg"
                tags={["AI/ML", "Generative AI", "SaaS Platform", "Interview Prep", "Education"]}
                link="/projects/project-9"
              />
              <ProjectCard
                title="Athena - Social & Dating Platform"
                description="AI-powered matching platform using machine learning algorithms to connect fitness enthusiasts through wellness compatibility and shared values."
                image="/images/athena/athena-thumbnail.jpg"
                tags={["AI/ML", "Recommender System", "Social Platform", "Dating App"]}
                link="/projects/project-6"
              />
              <ProjectCard
                title="Amazon AlphaHire - Enterprise Recruitment AI"
                description="Enterprise platform featuring AI agent Rexa with machine learning for intelligent candidate-role matching and automated resume filtering."
                image="/images/amazon/amazon-thumbnail.jpg"
                tags={["Enterprise Solution", "AI/ML", "Generative AI", "Recommendation System", "Recruitment", "B2B Platform"]}
                link="/projects/project-2"
              />
              <ProjectCard
                title="FlexIt - Fitness SaaS Solution"
                description="B2B SaaS platform redesign for virtual personal training with progressive disclosure and engaging user experience design."
                image="/images/flexit/flexit_thumbmail.jpg"
                tags={["SaaS Platform", "Fitness", "Web App", "Wellness"]}
                link="/projects/project-5"
              />
              <ProjectCard
                title="FlexIt AI - Motion tracking fitness coach"
                description="AI-powered fitness coach using computer vision and machine learning for real-time form correction and personalized feedback on TV platforms."
                image="/images/ai_coach/tv-thumbnail.jpg"
                tags={["AI/ML", "Computer Vision", "Motion Tracking", "AI Coaching", "TV Platform", "Fitness"]}
                link="/projects/project-3"
              />
              <ProjectCard
                title="EliteFit - Mobile Health & Wellness"
                description="AI-enhanced mobile fitness platform with real-time form correction, adaptive coaching, and personalized motivation systems."
                image="/images/fitness/thumbnail.jpg"
                tags={["Mobile App", "AI/ML", "Fitness", "Wellness"]}
                link="/projects/project-1"
              />
              <ProjectCard
                title="Revive - Smart Itinerary & Lifestyle Intelligence"
                description="AI-powered travel companion with intelligent itinerary planning, calendar integration, and automated premium experience booking for high net worth individuals."
                image="/images/travel/Thumbnail.jpg"
                tags={["AI/ML", "Travel", "Smart Itinerary", "High Net Worth"]}
                link="/projects/project-4"
              />
              <ProjectCard
                title="Z Lounge - Mysterious Experience"
                description="Exclusive waitlist landing page with sophisticated minimalist design, strategic negative space, and premium typography system."
                image="/images/z_lounge/zlounge-thumbnail.jpg"
                tags={["Luxury Design", "Waitlist", "Web Design", "Minimalist", "Membership Club"]}
                link="/projects/project-7"
              />
              <ProjectCard
                title="X Club - Luxury Spa & Dining Experience"
                description="Digital platform for exclusive luxury club featuring sophisticated membership management, premium subscription processing, and integrated concierge services."
                image="/images/x_club/xclub-thumbnail.jpg"
                tags={["Luxury Club", "Subscription", "Spa & Dining", "Web Design", "Membership Club"]}
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
        <section id="contact" className="py-32 relative gradient-bg text-white">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container relative z-10">
            <div className="text-left mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-6">Get In Touch</h2>
              <p className="text-xl text-white/80 max-w-2xl">
                Ready to build something amazing together?
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-medium mt-0 mb-8">Let's connect</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Email</p>
                        <a href="mailto:kaixiang.huang@columbia.edu" className="text-white hover:text-primary transition-colors text-lg">
                          kaixiang.huang@columbia.edu
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Linkedin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">LinkedIn</p>
                        <a href="https://www.linkedin.com/in/kaixianghuang/" className="text-white hover:text-primary transition-colors text-lg">
                          @Kaixiang Huang
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary fill-current">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">X (Twitter)</p>
                        <a href="https://x.com/kaixiangkh7" className="text-white hover:text-primary transition-colors text-lg">
                          @kaixiangkh7
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Github className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">GitHub</p>
                        <a href="https://github.com/kaixiangkh7/" className="text-white hover:text-primary transition-colors text-lg">
                          github.com/kaixiangkh7
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
