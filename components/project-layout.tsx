import { getImagePath } from "@/lib/utils"

interface ProjectLayoutProps {
  projectSlug: string
  images: string[]
  projectTitle: string
}

export function ProjectImageLayout({ projectSlug, images, projectTitle }: ProjectLayoutProps) {
  // Mobile Screenshots - Horizontal Layout (Travel project)
  if (projectSlug === 'project-4') {
    return (
      <div className="space-y-6">
        <div className="space-y-6">
          <h2 className="text-2xl font-normal mb-4 text-primary">Key Screens</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {images.slice(1, 4).map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg max-w-md mx-auto">
                <img
                  src={getImagePath(image)}
                  alt={`${projectTitle} - Mobile ${index + 1}`}
                  className="w-full h-[550px] object-cover shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-6">
            {images.slice(4).map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <img
                  src={getImagePath(image)}
                  alt={`${projectTitle} - Web ${index + 1}`}
                  className="w-full h-auto object-contain shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // FlexIt AI Coach Project - Vertical Layout
  if (projectSlug === 'project-3') {
    const features = [
      "Platform Landing - Welcome Experience",
      "Progress Dashboard - Form Analytics & Insights", 
      "Live Workout - Real-Time Form Analysis",
      "Social Leaderboard - Community Challenges"
    ]
    
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-normal mb-4 text-primary">Key Screens</h2>
        <div className="space-y-8">
          {images.slice(1).map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-gray-800">{features[index]}</h3>
              <img
                src={getImagePath(image)}
                alt={`${projectTitle} - ${features[index]}`}
                className="w-full h-auto object-contain shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  // FlexIt Platform - Vertical GIF Layout
  if (projectSlug === 'project-5') {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-normal mb-4 text-primary">Key Screens</h2>
        <div className="space-y-8">
          {images.slice(1).map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                src={getImagePath(image)}
                alt={`${projectTitle} - Design ${index + 1}`}
                className="w-full h-auto object-contain shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Athena Dating App - Grid Layout
  if (projectSlug === 'project-6') {
    const features = [
      "Onboarding Flow - Fitness Profile Creation",
      "Discovery Experience - Browse & Connect",
      "AI/ML Matching - Recommender Algorithm",
      "Personalized Feed - Recommendation Engine",
      "Community Features - Fitness Events & Groups",
      "Premium Subscription - Monetization Strategy"
    ]

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-normal mb-4 text-primary">Key Screens</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {images.slice(1).map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-gray-800 text-center">{features[index]}</h3>
              <img
                src={getImagePath(image)}
                alt={`${projectTitle} - ${features[index]}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Z Lounge - Luxury Waitlist Design
  if (projectSlug === 'project-7') {
    const features = [
      "Interactive Waitlist - Elegant Onboarding Experience",
      "About Experience - Mysterious & Exclusive Content"
    ]

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-normal mb-4 text-primary">Key Screens</h2>
        <div className="space-y-8">
          {images.slice(1).map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-gray-800">{features[index]}</h3>
              <img
                src={getImagePath(image)}
                alt={`${projectTitle} - ${features[index]}`}
                className="w-full h-auto object-contain shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  // EliteFit Fitness App - Grid Layout
  if (projectSlug === 'project-1') {
    const features = [
      "EliteFit Platform - AI/ML recommendation",
      "Progress Summary - Achievement Tracking",
      "Leadership Board - Social Competition", 
    ]

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-normal mb-4 text-primary">Key Screens</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.slice(1).map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-gray-800 text-center">{features[index]}</h3>
              <img
                src={getImagePath(image)}
                alt={`${projectTitle} - ${features[index]}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Amazon Project - Vertical GIF Layout
  if (projectSlug === 'project-2') {
    const features = [
      "Sign-On Flow - User Onboarding",
      "Sign-On Flow - Profile Setup",
      "Student Dashboard - AI-Powered Role Matching",
      "Recruiter Portal - Automated Screening with Rexa"
    ]

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-normal mb-4 text-primary">Key Screens</h2>
        <div className="space-y-8">
          {images.slice(1).map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-gray-800">{features[index]}</h3>
              <img
                src={getImagePath(image)}
                alt={`${projectTitle} - ${features[index]}`}
                className="w-full h-auto object-contain shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  // X Club - Luxury Spa & Dining Experience
  if (projectSlug === 'project-8') {
    const features = [
      "Landing Experience - Luxury Club Introduction",
      "Service Pages - Spa & Dining Offerings",
      "Subscription Platform - Membership Management"
    ]

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-normal mb-4 text-primary">Key Screens</h2>
        <div className="space-y-8">
          {images.slice(1, 4).map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-gray-800">{features[index]}</h3>
              <img
                src={getImagePath(image)}
                alt={`${projectTitle} - ${features[index]}`}
                className="w-full h-auto object-contain shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Prep.cafe AI Interview Prep - Vertical GIF Layout
  if (projectSlug === 'project-9') {
    const features = [
      "Mock Interview Dashboard - AI-Powered Practice Sessions",
      "Question Library - Comprehensive Interview Practice Collection",
      "Progress Dashboard - Performance Analytics & Skills Insights",
      "Live Mock Interview - Real-Time AI Interview Coaching"
    ]

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-normal mb-4 text-primary">Key Screens</h2>
        <div className="space-y-8">
          {images.slice(1).map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-gray-800">{features[index]}</h3>
              <img
                src={getImagePath(image)}
                alt={`${projectTitle} - ${features[index]}`}
                className="w-full h-auto object-contain shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Buy or Rent Advisor - Vertical GIF Layout
  if (projectSlug === 'project-10') {
    const features = [
      "Home Page - ZIP Code Entry & Financial Model Overview",
      "Results Dashboard - Verdict, Metro Map & Market Data",
      "Cost-Over-Time Chart - Interactive Stay-Year Breakeven Analysis",
      "Assumptions Drawer & AdvisorMode - Adjustable Financial Variables",
    ]

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-normal mb-4 text-primary">Key Screens</h2>
        <div className="space-y-8">
          {images.slice(1).map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-gray-800">{features[index]}</h3>
              <img
                src={getImagePath(image)}
                alt={`${projectTitle} - ${features[index]}`}
                className="w-full h-auto object-contain shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (projectSlug === 'project-11') {
    const features = [
      "Today Dashboard - AI Recommendations & Caregiver Alerts",
      "Handoff Tab - AI-Generated Shift Summary",
      "Timeline View - Chronological Care Event Log",
      "Memory Tab - Auto-Detected Child Behavior Patterns",
    ]

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-normal mb-4 text-primary">Key Screens</h2>
        <div className="space-y-8">
          {images.slice(1).map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-gray-800">{features[index]}</h3>
              <div className="flex justify-start">
                <img
                  src={getImagePath(image)}
                  alt={`${projectTitle} - ${features[index]}`}
                  className="w-[30%] h-auto object-contain shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (projectSlug === 'project-12') {
    const features = [
      "Multi-Agent Landing — animated network diagram showing Lead, Web Expert, URL Expert, PDF Expert, and Review Board nodes connected by live dashed signal lines",
      "Research War Room — agent panel with persistent chat sessions per expert; Web Expert enabled for live internet lookups; 'Analyzing intent...' as the pipeline kicks off",
      "Final Report — Lead Researcher's Research Strategy and FINAL DECISION: APPROVED flow into a grounded HTML report where every factual claim is rendered as a clickable cyan citation chip, each linking back to the exact source quote",
    ]

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-normal mb-4 text-primary">Key Screens</h2>
        <div className="space-y-8">
          {images.slice(1).map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-gray-800">{features[index]}</h3>
              <img
                src={getImagePath(image)}
                alt={`${projectTitle} - ${features[index]}`}
                className="w-full h-auto object-contain shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Default layout for other projects
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-normal mb-4 text-primary">Key Screens</h2>
      <div className="space-y-6">
        {images.slice(1).map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <img
              src={getImagePath(image)}
              alt={`${projectTitle} - Image ${index + 1}`}
              className="w-full h-auto object-contain shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  )
} 