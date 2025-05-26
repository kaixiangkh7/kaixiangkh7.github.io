import Link from "next/link"
import { ArrowLeft, Calendar, User, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PrimaryButton } from "@/components/ui/primary-button"
import { GradientBackground } from "@/components/gradient-background"
import { Header } from "@/components/header"
import { getImagePath } from "@/lib/utils"

// This is a mock function to simulate fetching project data
// In a real application, you would fetch this data from a CMS or API
function getProjectData(slug: string) {
  const projects = {
    "project-1": {
      title: "EliteFit - Mobile Health & Wellness",
      client: "Stealth Startup",
      date: "January 2023",
      tags: ["Mobile App", "Healthcare", "Wellness"],
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
    "project-2": {
      title: "Amazon Rexa - Enterprise Recruitment AI",
      client: "Amazon (Capstone Project)",
      date: "March 2023",
      tags: ["Enterprise AI", "Recruitment", "B2B Platform"],
      overview:
        "A comprehensive student hiring portal developed in collaboration with Amazon's recruitment team, featuring an AI-powered agent named Rexa to streamline the hiring process and create personalized experiences for both students and recruiters.",
      challenge:
        "Amazon's student hiring process faced significant friction points that resulted in high recruitment costs and suboptimal candidate matching. The existing system lacked personalization, required extensive manual work from recruiters for resume filtering and candidate assessment, and didn't provide students with adequate guidance for role matching. This led to longer hiring cycles, higher operational costs, and missed opportunities for quality candidates.",
      process: [
        "Conducted stakeholder interviews with Amazon recruiters and recent student hires to understand pain points",
        "Analyzed the existing hiring workflow to identify automation opportunities and friction points",
        "Designed user personas for students, recruiters, and hiring managers with different needs and goals",
        "Developed wireframes for the sign-on flow, student dashboard, and recruiter portal",
        "Created interactive prototypes incorporating AI agent Rexa for personalized interactions",
        "Implemented and tested the web application with integrated GenAI capabilities",
        "Conducted usability testing with both student and recruiter user groups",
        "Refined the AI agent's conversational flow based on user feedback and interaction patterns"
      ],
      features: [
        "Intelligent sign-on flow with personalized onboarding guided by AI agent Rexa",
        "Dynamic student dashboard with AI-powered role recommendations and career guidance",
        "Comprehensive recruiter portal with automated resume filtering and candidate insights",
        "AI agent Rexa providing personalized information exchange between students and recruiters",
        "Automated candidate-role matching using machine learning algorithms",
        "Real-time communication tools with AI-enhanced conversation suggestions",
        "Advanced analytics dashboard for recruitment metrics and process optimization"
      ],
      outcome:
        "The Amazon Student Hire Portal successfully demonstrated significant potential for improving recruitment efficiency. Initial testing showed a 45% reduction in manual resume screening time for recruiters, while students reported 60% higher satisfaction with role matching accuracy. The AI agent Rexa facilitated more meaningful interactions, leading to better candidate-role fit and reduced hiring cycle time. The project received positive feedback from Amazon stakeholders and is being considered for broader implementation across their student recruitment programs.",
      images: [
        "/images/amazon/amazon-hero.jpg",
        "/images/amazon/signon-1.gif",
        "/images/amazon/signon-2.gif",
        "/images/amazon/dashboard.gif",
        "/images/amazon/recruitor.gif",
      ],
    },
    "project-3": {
      title: "FlexIt Vision - AI Computer Vision Coach",
      client: "FlexIt Fitness",
      date: "September 2023",
      tags: ["Computer Vision", "AI Coaching", "TV Platform"],
      overview: "An AI-powered fitness coach platform that uses computer vision and machine learning to provide real-time form correction and personalized feedback directly on your TV screen, revolutionizing home workout experiences.",
      challenge:
        "Home fitness enthusiasts struggled with proper form execution without professional guidance, leading to ineffective workouts and potential injuries. Traditional fitness apps couldn't provide real-time feedback on exercise form, and users had no way to know if they were performing movements correctly. The challenge was to create an intelligent system that could analyze human movement in real-time and provide immediate, actionable feedback through a TV interface.",
      process: [
        "Conducted extensive user research with home fitness enthusiasts to understand form-related pain points and safety concerns",
        "Collaborated with machine learning engineers to understand computer vision capabilities and limitations for movement analysis",
        "Designed user flows for seamless TV-based interaction with voice and remote control navigation",
        "Created wireframes for real-time feedback overlay systems that wouldn't distract from workout execution",
        "Developed prototypes for AI coaching dialogue and feedback delivery mechanisms",
        "Conducted usability testing with users performing various exercises to validate feedback timing and clarity",
        "Designed comprehensive dashboard and progress tracking interfaces for post-workout analysis",
        "Iterated on AI feedback presentation based on user comprehension and response rates"
      ],
      features: [
        "Real-time computer vision analysis of exercise form with instant corrective feedback",
        "AI-powered personalized coaching that adapts to individual movement patterns and skill levels",
        "TV-optimized interface designed for large screen viewing and distant interaction",
        "Voice-controlled navigation and hands-free workout management",
        "Comprehensive movement analysis with detailed form breakdowns and improvement suggestions",
        "Progress tracking dashboard showing form improvement over time with visual analytics",
        "Social leaderboards and challenges based on form accuracy and consistency metrics",
        "Adaptive workout recommendations based on detected strengths and areas for improvement"
      ],
      outcome:
        "The FlexIt AI Coach platform achieved remarkable success with 89% of users reporting improved exercise form within the first month. The computer vision system demonstrated 94% accuracy in movement detection, while user engagement increased by 73% compared to traditional video workouts. Injury rates among users decreased by 58%, and workout completion rates improved by 42%. The platform's AI coaching received a user satisfaction score of 4.7/5, with users particularly praising the real-time feedback and personalized improvement suggestions.",
      images: [
        "/images/ai_coach/tv-hero.jpg",
        "/images/ai_coach/landing.jpg",
        "/images/ai_coach/dashboard.jpg",
        "/images/ai_coach/workout.jpg",
        "/images/ai_coach/leaderboard.jpg",
      ],
    },
    "project-4": {
      title: "Revive AI - Travel & Booking Intelligence",
      client: "WanderWise Travel",
      date: "August 2023",
      tags: ["Travel AI", "E-commerce", "Mobile First"],
      overview: "A comprehensive redesign of a travel booking platform that transformed a frustrating booking experience into an intuitive, transparent, and engaging journey for travelers.",
      challenge: 
        "WanderWise Travel's existing booking platform suffered from a staggering 78% abandonment rate during the booking process. User research revealed that travelers found the multi-step process confusing, lacked trust due to hidden fees that appeared late in the process, and felt overwhelmed by complex itinerary management. The platform was also not optimized for mobile users, who represented 65% of their traffic.",
      process: [
        "Conducted comprehensive booking funnel analysis to identify critical drop-off points and user behavior patterns",
        "Performed in-depth user interviews with 20 recent travelers across different demographics and travel types",
        "Created detailed user journey maps highlighting emotional peaks and valleys throughout the booking experience",
        "Developed user personas representing leisure travelers, business travelers, and group planners",
        "Designed and tested a simplified booking flow that reduced steps from 12 to 6 while maintaining comprehensive information gathering",
        "Implemented transparent fee disclosure architecture visible throughout the entire booking process",
        "Created and validated interactive prototypes through task completion studies with 45+ users",
        "Developed a persistent booking summary component that updates in real-time across all booking steps"
      ],
      features: [
        "Transparent pricing architecture with real-time fee calculation and no hidden costs",
        "Persistent smart booking summary that tracks selections and updates pricing dynamically",
        "Intuitive multi-destination trip planning with visual drag-and-drop interface and route optimization",
        "AI-powered smart date selection with price prediction calendar and flexible date options",
        "One-click booking preferences for returning users with saved payment and travel details",
        "Mobile-first responsive design optimized for on-the-go booking scenarios",
        "Visual itinerary builder with timeline view and interactive map integration"
      ],
      outcome:
        "The redesigned booking platform delivered remarkable results: abandonment rates dropped by 42% (from 78% to 36%), overall bookings increased by 35%, and mobile conversions improved by 58%. Customer satisfaction scores for the booking experience jumped from 3.4/5 to 4.6/5, while average booking completion time decreased from 12 minutes to 7 minutes. The platform also saw a 28% increase in multi-destination bookings due to the improved itinerary planning tools.",
      images: [
        "/images/travel/hero.png",
        "/images/travel/iphone_browsing.png",
        "/images/travel/iphone_iternary.png",
        "/images/travel/iphone_your_trip.png",
        "/images/travel/mac_selection.png",
        "/images/travel/web_search.jpg",
      ],
    },
    "project-5": {
      title: "FlexIt Platform - Fitness SaaS Solution",
      client: "FlexIt Fitness (now Echelon Coach)",
      date: "November 2023",
      tags: ["SaaS Platform", "Fitness", "Web App"],
      overview: "A complete redesign of an online fitness training platform to create a more engaging, intuitive, and motivating experience for users seeking personalized workout programs and virtual training sessions. The platform is now live as Echelon Coach's virtual personal training service.",
      challenge:
        "The existing FlexIt platform suffered from poor user engagement and high bounce rates. Users found the interface outdated and confusing, with difficult navigation between workout programs, trainer profiles, and progress tracking. The booking system for live sessions was cumbersome, and the overall experience felt disconnected from modern fitness app standards. Mobile responsiveness was also lacking, despite 70% of users accessing the platform via mobile devices.",
      process: [
        "Conducted comprehensive user research with 25 existing users to understand pain points and frustrations",
        "Analyzed competitor platforms and identified best practices in fitness web applications",
        "Created detailed user personas representing different fitness goals and experience levels",
        "Developed user journey maps for key flows: onboarding, workout selection, trainer booking, and progress tracking",
        "Designed low-fidelity wireframes focusing on simplified navigation and clear information hierarchy",
        "Created interactive prototypes with emphasis on mobile-first responsive design",
        "Conducted usability testing sessions with target users across different devices",
        "Iterated designs based on feedback and implemented a modern, motivational visual design system",
        "Collaborated with developers to ensure seamless implementation of interactive elements"
      ],
      features: [
        "Streamlined onboarding flow with personalized fitness goal setting and skill assessment",
        "Intuitive workout program browser with advanced filtering by difficulty, duration, and equipment",
        "Enhanced trainer profiles with video introductions, specializations, and real-time availability",
        "Simplified booking system for live virtual training sessions with calendar integration",
        "Interactive progress dashboard with visual workout history and achievement tracking",
        "Mobile-optimized responsive design ensuring seamless experience across all devices",
        "Integrated video player with workout controls and real-time form feedback",
        "Social features including workout sharing and community challenges"
      ],
      outcome:
        "The redesigned FlexIt platform achieved remarkable improvements: user engagement increased by 65%, session booking rates improved by 45%, and mobile user retention increased by 52%. The new design reduced user onboarding time from 8 minutes to 3 minutes, while overall user satisfaction scores jumped from 3.1/5 to 4.8/5. The platform also saw a 38% increase in premium subscription conversions due to the improved user experience. The platform is now successfully live as Echelon Coach's virtual personal training service, serving thousands of users with live 1-on-1 fitness and wellness sessions. View the live platform at: https://echeloncoach.com/virtualpt/",
      images: [
        "/images/flexit/flexit-hero.jpg",
        "/images/flexit/web_mainpage.gif",
        "/images/flexit/web_mainpage_2.gif",
      ],
    },
    "project-6": {
      title: "Athena AI - Dating & Social Platform",
      client: "FitConnect Inc.",
      date: "December 2023",
      tags: ["AI Matching", "Social Platform", "Dating App"],
      overview: "A revolutionary dating app designed specifically for health and fitness enthusiasts, connecting like-minded individuals through shared workout interests, fitness goals, and healthy lifestyle choices.",
      challenge:
        "Traditional dating apps failed to cater to the specific needs of fitness enthusiasts who prioritize health and wellness in their relationships. Users struggled to find partners who shared their commitment to fitness, leading to mismatched expectations and incompatible lifestyles. The challenge was to create a platform that authentically connects people through their passion for fitness while providing meaningful ways to build relationships beyond just physical attraction.",
      process: [
        "Conducted extensive research with 30+ fitness enthusiasts about their dating experiences and relationship priorities",
        "Analyzed competitor dating apps to identify gaps in serving the fitness community",
        "Created detailed user personas representing different fitness lifestyles: gym enthusiasts, runners, yoga practitioners, and outdoor adventurers",
        "Designed user flows for fitness-based matching, workout partner discovery, and relationship building",
        "Developed wireframes for unique features like workout compatibility scoring and fitness goal alignment",
        "Created interactive prototypes focusing on community building and premium monetization strategies",
        "Conducted usability testing with target users across different fitness backgrounds and relationship goals",
        "Iterated on matching algorithms and premium feature placement based on user feedback"
      ],
      features: [
        "Fitness-based matching algorithm that considers workout preferences, fitness goals, and activity levels",
        "Workout partner discovery feature for finding training buddies and fitness friends",
        "Interactive fitness profile builder with workout photos, fitness achievements, and goal tracking",
        "Community challenges and group fitness events to encourage organic connections",
        "Premium subscription with advanced matching filters, unlimited likes, and exclusive fitness content",
        "Integrated fitness tracking that shares workout achievements and progress with matches",
        "Video chat feature for virtual workout dates and fitness coaching sessions",
        "Safety features including verified fitness trainer profiles and public workout meetup options"
      ],
      outcome:
        "Athena successfully captured the fitness dating market with 85% of users reporting more meaningful connections compared to traditional dating apps. The app achieved a 92% retention rate among premium subscribers, with users spending an average of 45 minutes daily on the platform. Match success rates increased by 67% when users connected over shared fitness activities, and the app generated significant revenue through premium subscriptions with 35% of users upgrading within the first month.",
      images: [
        "/images/athena/athena-hero.jpg",
        "/images/athena/signon.gif",
        "/images/athena/scrowing.gif",
        "/images/athena/matching.gif",
        "/images/athena/for_you.gif",
        "/images/athena/community.gif",
        "/images/athena/subscription.gif",
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
        process.env.NODE_ENV === 'production' ? '/kaixiangkh7.github.io/placeholder.svg?height=600&width=800' : '/placeholder.svg?height=600&width=800',
        process.env.NODE_ENV === 'production' ? '/kaixiangkh7.github.io/placeholder.svg?height=600&width=800' : '/placeholder.svg?height=600&width=800',
        process.env.NODE_ENV === 'production' ? '/kaixiangkh7.github.io/placeholder.svg?height=600&width=800' : '/placeholder.svg?height=600&width=800',
      ],
    },
  }

  return projects[slug as keyof typeof projects] || projects.default
}

// Add generateStaticParams to tell Next.js which slugs to generate at build time
export async function generateStaticParams() {
  // Return an array of objects with the slug parameter
  return [
    { slug: "project-1" },
    { slug: "project-2" },
    { slug: "project-3" },
    { slug: "project-4" },
    { slug: "project-5" },
    { slug: "project-6" }
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
          <div className="absolute inset-0 bg-black/70 z-10"></div>
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

                  {/* Mobile Screenshots - Horizontal Layout */}
                  {params.slug === 'project-4' && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-light mb-4 text-primary">Mobile Experience</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {project.images.slice(1, 4).map((image, index) => (
                          <div key={index} className="overflow-hidden rounded-lg max-w-md mx-auto">
                            <img
                              src={getImagePath(image)}
                              alt={`${project.title} - Mobile ${index + 1}`}
                              className="w-full h-[550px] object-cover shadow-lg"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Web Screenshots - Standard Layout */}
                  {params.slug === 'project-4' && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-light mb-4 text-primary">Web Platform</h2>
                      <div className="space-y-6">
                        {project.images.slice(4).map((image, index) => (
                          <div key={index} className="overflow-hidden rounded-lg">
                            <img
                              src={getImagePath(image)}
                              alt={`${project.title} - Web ${index + 1}`}
                              className="w-full h-auto object-contain shadow-lg"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* FlexIt AI Coach Project - Vertical Layout */}
                  {params.slug === 'project-3' && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-light mb-4 text-primary">AI Coach Platform Features</h2>
                      <div className="space-y-8">
                        <div className="overflow-hidden rounded-lg">
                          <h3 className="text-lg font-medium mb-3 text-gray-800">Platform Landing - Welcome Experience</h3>
                          <img
                            src={getImagePath(project.images[1])}
                            alt={`${project.title} - Platform Landing`}
                            className="w-full h-auto object-contain shadow-lg"
                          />
                        </div>
                        <div className="overflow-hidden rounded-lg">
                          <h3 className="text-lg font-medium mb-3 text-gray-800">Progress Dashboard - Form Analytics & Insights</h3>
                          <img
                            src={getImagePath(project.images[2])}
                            alt={`${project.title} - Progress Dashboard`}
                            className="w-full h-auto object-contain shadow-lg"
                          />
                        </div>
                        <div className="overflow-hidden rounded-lg">
                          <h3 className="text-lg font-medium mb-3 text-gray-800">Live Workout - Real-Time Form Analysis</h3>
                          <img
                            src={getImagePath(project.images[3])}
                            alt={`${project.title} - Live Workout`}
                            className="w-full h-auto object-contain shadow-lg"
                          />
                        </div>
                        <div className="overflow-hidden rounded-lg">
                          <h3 className="text-lg font-medium mb-3 text-gray-800">Social Leaderboard - Community Challenges</h3>
                          <img
                            src={getImagePath(project.images[4])}
                            alt={`${project.title} - Social Leaderboard`}
                            className="w-full h-auto object-contain shadow-lg"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* FlexIt Platform - Vertical GIF Layout */}
                  {params.slug === 'project-5' && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-light mb-4 text-primary">Platform Redesign</h2>
                      <div className="space-y-8">
                        {project.images.slice(1).map((image, index) => (
                          <div key={index} className="overflow-hidden rounded-lg">
                            <img
                              src={getImagePath(image)}
                              alt={`${project.title} - Design ${index + 1}`}
                              className="w-full h-auto object-contain shadow-lg"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Athena Dating App - Vertical Layout */}
                  {params.slug === 'project-6' && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-light mb-4 text-primary">App Features & User Experience</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="overflow-hidden rounded-lg">
                          <h3 className="text-lg font-medium mb-3 text-gray-800 text-center">Onboarding Flow - Fitness Profile Creation</h3>
                          <img
                            src={getImagePath(project.images[1])}
                            alt={`${project.title} - Sign-On Flow`}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <div className="overflow-hidden rounded-lg">
                          <h3 className="text-lg font-medium mb-3 text-gray-800 text-center">Discovery Experience - Browse & Connect</h3>
                          <img
                            src={getImagePath(project.images[2])}
                            alt={`${project.title} - Browsing Experience`}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <div className="overflow-hidden rounded-lg">
                          <h3 className="text-lg font-medium mb-3 text-gray-800 text-center">Smart Matching - Workout Compatibility Algorithm</h3>
                          <img
                            src={getImagePath(project.images[3])}
                            alt={`${project.title} - Matching System`}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <div className="overflow-hidden rounded-lg">
                          <h3 className="text-lg font-medium mb-3 text-gray-800 text-center">Personalized Feed - AI Recommendations</h3>
                          <img
                            src={getImagePath(project.images[4])}
                            alt={`${project.title} - For You Feed`}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <div className="overflow-hidden rounded-lg">
                          <h3 className="text-lg font-medium mb-3 text-gray-800 text-center">Community Features - Fitness Events & Groups</h3>
                          <img
                            src={getImagePath(project.images[5])}
                            alt={`${project.title} - Community Features`}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <div className="overflow-hidden rounded-lg">
                          <h3 className="text-lg font-medium mb-3 text-gray-800 text-center">Premium Subscription - Monetization Strategy</h3>
                          <img
                            src={getImagePath(project.images[6])}
                            alt={`${project.title} - Subscription Model`}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* EliteFit Fitness App - Grid Layout */}
                  {params.slug === 'project-1' && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-light mb-4 text-primary">App Features & User Experience</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="overflow-hidden rounded-lg">
                          <h3 className="text-lg font-medium mb-3 text-gray-800 text-center">Fitness Boost - Motivation & Progress</h3>
                          <img
                            src={getImagePath(project.images[1])}
                            alt={`${project.title} - Boost Animation`}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <div className="overflow-hidden rounded-lg">
                          <h3 className="text-lg font-medium mb-3 text-gray-800 text-center">Progress Summary - Achievement Tracking</h3>
                          <img
                            src={getImagePath(project.images[2])}
                            alt={`${project.title} - Summary Dashboard`}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <div className="overflow-hidden rounded-lg">
                          <h3 className="text-lg font-medium mb-3 text-gray-800 text-center">Leadership Board - Social Competition</h3>
                          <img
                            src={getImagePath(project.images[3])}
                            alt={`${project.title} - Leadership Board`}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <div className="overflow-hidden rounded-lg">
                          <h3 className="text-lg font-medium mb-3 text-gray-800 text-center">EliteFit Platform - Complete Experience</h3>
                          <img
                            src={getImagePath(project.images[4])}
                            alt={`${project.title} - Platform Overview`}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Amazon Project - Vertical GIF Layout */}
                  {params.slug === 'project-2' && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-light mb-4 text-primary">Platform Features</h2>
                      <div className="space-y-8">
                        <div className="overflow-hidden rounded-lg">
                          <h3 className="text-lg font-medium mb-3 text-gray-800">Sign-On Flow - User Onboarding</h3>
                          <img
                            src={getImagePath(project.images[1])}
                            alt={`${project.title} - Sign-On Flow 1`}
                            className="w-full h-auto object-contain shadow-lg"
                          />
                        </div>
                        <div className="overflow-hidden rounded-lg">
                          <h3 className="text-lg font-medium mb-3 text-gray-800">Sign-On Flow - Profile Setup</h3>
                          <img
                            src={getImagePath(project.images[2])}
                            alt={`${project.title} - Sign-On Flow 2`}
                            className="w-full h-auto object-contain shadow-lg"
                          />
                        </div>
                        <div className="overflow-hidden rounded-lg">
                          <h3 className="text-lg font-medium mb-3 text-gray-800">Student Dashboard - AI-Powered Role Matching</h3>
                          <img
                            src={getImagePath(project.images[3])}
                            alt={`${project.title} - Student Dashboard`}
                            className="w-full h-auto object-contain shadow-lg"
                          />
                        </div>
                        <div className="overflow-hidden rounded-lg">
                          <h3 className="text-lg font-medium mb-3 text-gray-800">Recruiter Portal - Automated Screening with Rexa</h3>
                          <img
                            src={getImagePath(project.images[4])}
                            alt={`${project.title} - Recruiter Portal`}
                            className="w-full h-auto object-contain shadow-lg"
                          />
                        </div>
                      </div>
                    </div>
                  )}

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
                    {params.slug === 'project-3' && (
                      <div className="pt-4">
                        <Button asChild className="w-full">
                          <Link href="https://flexit.fit/TV/" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Live TV App
                          </Link>
                        </Button>
                      </div>
                    )}
                    {params.slug === 'project-5' && (
                      <div className="pt-4">
                        <Button asChild className="w-full">
                          <Link href="https://echeloncoach.com/virtualpt/" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Live Project
                          </Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>


                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-lg font-light mb-4 text-primary">More Projects</h3>
                  <div className="space-y-4">
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
                          <p className="font-light group-hover:text-primary transition-colors">Athena AI - Dating & Social Platform</p>
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
                          <p className="font-light group-hover:text-primary transition-colors">Amazon Rexa - Enterprise Recruitment AI</p>
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
                          <p className="font-light group-hover:text-primary transition-colors">FlexIt Platform - Fitness SaaS Solution</p>
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
                          <p className="font-light group-hover:text-primary transition-colors">FlexIt Vision - AI Computer Vision Coach</p>
                          <p className="text-sm text-muted-foreground">Computer Vision, AI Coaching</p>
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
                          <p className="text-sm text-muted-foreground">Mobile App, Healthcare</p>
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
                          <p className="font-light group-hover:text-primary transition-colors">Revive AI - Travel & Booking Intelligence</p>
                          <p className="text-sm text-muted-foreground">Travel AI, E-commerce</p>
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
