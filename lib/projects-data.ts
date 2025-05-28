export interface ProjectData {
  title: string
  client: string
  date: string
  role: string
  tags: string[]
  overview: string
  problemSpace: string
  process: string[]
  jobToBeDone: string
  features: string[]
  outcome: string
  images: string[]
}

export const projectsData: Record<string, ProjectData> = {
  "project-1": {
    title: "EliteFit AI- Mobile Health & Wellness",
    client: "Stealth Startup",
    date: "January 2023",
    role: "Product Manager & UX Designer",
    tags: ["Mobile App", "Healthcare", "Wellness"],
    overview: "An AI-powered fitness app that builds upon Apple Fitness+ foundation while addressing its key limitations: lack of real-time form correction, limited personalization depth, and insufficient long-term motivation systems to prevent user drop-off.",
    problemSpace:
      "While Apple Fitness+ provides excellent workout content, users still struggle with motivation and consistency because it lacks real-time feedback, adaptive AI coaching, and deeper personalization—over 80% of Apple Fitness+ users we surveyed reported losing motivation after 2-3 months due to repetitive experiences and lack of personalized progression.",
    process: [
        "Analyzed Apple Fitness+ user feedback from 200+ reviews and identified 3 key gaps: no real-time form correction, limited workout personalization, and weak long-term retention mechanisms.",
        "Interviewed 15 former Apple Fitness+ users about why they stopped using the service; mapped 4 personas focused on specific pain points Apple Fitness+ doesn't address.",
        "Designed 25+ wireframes that specifically improve upon Apple Fitness+ limitations: AI form correction, adaptive difficulty, and behavioral psychology-driven retention systems; tested with 8 users comparing to Apple Fitness+ experience.",
        ],
    jobToBeDone: "As a former Apple Fitness+ user who enjoyed the content quality but felt limited by its static approach, I want an AI-enhanced fitness platform that provides real-time form correction, truly adaptive workouts, and personalized motivation systems, so that I can maintain long-term engagement and see continuous improvement in my fitness journey.",
    features: [
      "Real-time AI form correction and movement analysis—a critical gap in Apple Fitness+ that only provides pre-recorded instruction without personalized feedback during workouts",
      "Adaptive AI coaching that dynamically adjusts workout intensity and progression based on performance data—going beyond Apple Fitness+'s static workout structure",
      "Behavioral psychology-driven retention system with personalized motivation triggers and habit formation mechanics that address Apple Fitness+'s weakness in long-term user retention"
    ],
    outcome:
      "EliteFit successfully addressed Apple Fitness+ limitations, achieving 78% user retention at 6 months (vs. Apple Fitness+'s ~40%), 65% increase in workout consistency, and 92% user satisfaction with real-time form feedback. Users reported feeling more confident in their form and saw 45% faster fitness progress compared to their previous Apple Fitness+ experience.",
    images: [
      "/images/fitness/hero.jpg",
      "/images/fitness/elitefit_animation.gif",
      "/images/fitness/summary_animation.gif",
      "/images/fitness/leadership_animation.gif",

    ],
  },
  "project-2": {
    title: "Amazon AlphaHire - Enterprise Recruitment AI",
    client: "Amazon (Capstone Project at Columbia University)",
    date: "March 2023",
    role: "Product Manager & UX Designer",
    tags: ["Enterprise AI", "Recruitment", "B2B Platform"],
    overview:
      "A comprehensive enterprise recruitment platform featuring an AI-powered agent named Rexa to streamline hiring processes and create personalized experiences for both students and recruiters at scale.",
    problemSpace:
      "For students, finding the right job match is challenging because recruitment processes are impersonal and confusing—78% of students we surveyed struggled with not knowing which job opportunities are right for them. Recruiters also struggle to efficiently screen and match candidates at scale - they had to manually screen thousands of resumes and answer hundreds of emails.",
    process: [
      "Conducted user interviews with 3 Amazon recruiters, 12 student candidates, and surveyed 40+ students across 3 schools",
      "Designed 3 detailed user personas for students, recruiters, and hiring managers with different needs and pain points",
      "Developed 30+ high-fidelity screens for AI-powered sign-on and personalized dashboards across 10 key user journeys",
      "Implemented and conducted usability testing with 25 users and 3 rounds of iterations",
      "Collaborated with 2 ML engineers over 11 weeks to understand the capabilities of the GenAI-powered agent"
    ],
    jobToBeDone: "When I'm looking for internships or full-time jobs, I want to quickly understand which roles fit my background, interests, and skills, so that I can confidently apply to the right opportunities without wasting time or feeling lost in the process.",
    features: [
      "AI agent Rexa providing intelligent candidate-role matching using machine learning algorithms",
      "Automated resume filtering and candidate assessment with personalized recruiter insights",
      "Rexa as a real-time Q&A chatbot that helps students find job-related answers from a trusted database."
    ],
    outcome:
      "The platform demonstrated 45% reduction in manual resume screening time for recruiters, while students reported 60% higher satisfaction with role matching accuracy. The AI agent facilitated more meaningful interactions, leading to better candidate-role fit and reduced hiring cycle time.",
    images: [
      "/images/amazon/amazon-hero.jpg",
      "/images/amazon/signon-1.gif",
      "/images/amazon/signon-2.gif",
      "/images/amazon/dashboard.gif",
      "/images/amazon/recruitor.gif",
    ],
  },
  "project-3": {
    title: "FlexIt AI - Motion tracking fitness coach",
    client: "FlexIt",
    date: "September 2023",
    role: "Product Manager & UX Designer",
    tags: ["Computer Vision", "AI Coaching", "TV Platform"],
    overview: "An AI-powered fitness coach platform that uses computer vision and machine learning to provide real-time form correction and personalized feedback directly on TV screens, revolutionizing home workout experiences.",
    problemSpace:
      "For home fitness enthusiasts, exercising safely and effectively is tough because it's hard to get real-time feedback and professional guidance at home—89% of users said they struggled with proper form and feedback while working out at home.",
    process: [
      "Developed 15+ interactive prototypes to validate AI coaching concepts and test user interaction patterns with computer vision powered motion tracking systems",
      "Conducted continuous data analysis and product iteration informed by key metrics including DAU (Daily Active Users), resulting an increase in 35% conversion rates, and 73% engagement improvement to optimize user experience",
      "Analyzed the previous version of the TV app across 3 key user flows and 12+ user experience issues that needed to be addressed",
      "Analyzed user feedback logs from 500+ sessions and session data to understand specific drop-off points, identifying 3 major pain areas"
    ],
    jobToBeDone: "As a fitness enthusiast working out at home, I want real-time AI-powered form correction and personalized coaching feedback, so that I can exercise safely and effectively while building proper movement patterns and achieving my fitness goals.",
    features: [
      "Real-time computer vision analysis with instant corrective feedback and movement scoring",
      "AI-powered personalized coaching that adapts to individual movement patterns and skill progression",
      "TV-optimized interface with hands-free workout management"
    ],
    outcome:
      "The platform achieved 89% of users reporting improved exercise form within the first month. The computer vision system demonstrated 94% accuracy in movement detection, while user engagement increased by 73% compared to traditional video workouts.",
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
    role: "UX Designer",
    tags: ["Travel AI", "E-commerce", "Mobile First"],
    overview: "A comprehensive redesign of a travel booking platform that transformed a frustrating booking experience into an intuitive, transparent, and AI-enhanced journey for travelers.",
    problemSpace: 
      "For travelers, planning complex trips with confidence is difficult because booking processes are confusing and true costs are often hidden—78% of users reported abandoning the booking process due to confusion or lack of transparency.",
    process: [
      "Conducted comprehensive booking funnel analysis across 8 touchpoints to identify 5 critical drop-off points with 78% abandonment rate",
      "Performed in-depth user interviews with 20 recent travelers across 4 demographics and 6 trip types",
      "Created 3 detailed user journey maps highlighting 15+ emotional peaks and valleys throughout booking process",
      "Designed and tested a simplified booking flow that reduced steps from 12 to 6 with 15 participants over 3 iterations",
      "Implemented transparent fee disclosure architecture with real-time pricing updates across 25+ fee categories"
    ],
    jobToBeDone: "As a traveler planning complex trips with multiple destinations, I want a transparent and intelligent booking platform that simplifies the process while providing AI-powered recommendations, so that I can confidently plan my perfect journey without hidden surprises or booking friction.",
    features: [
      "AI-powered smart date selection with price prediction algorithms and flexible date optimization",
      "Intelligent multi-destination trip planning with route optimization and cost analysis",
      "Transparent pricing architecture with real-time fee calculation and dynamic booking summary"
    ],
    outcome:
      "The redesigned platform delivered remarkable results: abandonment rates dropped by 42%, overall bookings increased by 35%, and mobile conversions improved by 58%. Customer satisfaction scores jumped from 3.4/5 to 4.6/5.",
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
    title: "FlexIt - Fitness SaaS Solution",
    client: "FlexIt (now Echelon Coach)",
    date: "November 2023",
    role: "UX Designer",
    tags: ["SaaS Platform", "Fitness", "Web App"],
    overview: "A redesign of a B2B SaaS platform for virtual personal training, focused on building an engaging and scalable solution for online fitness coaching.",
    problemSpace:
      "For fitness enthusiasts, maintaining consistent workout routines and achieving fitness goals is challenging — over 70% of users surveyed reported feeling disconnected and unmotivated during workout sessions.",
    process: [
      "Conducted comprehensive user research with 15 existing users and trainers to understand their goals, motivation factors, and virtual training pain points",
      "Analyzed user behavior data from 1000+ virtual training sessions to identify key engagement patterns and drop-off points",
      "Developed 2 user journey maps focusing on workout discovery, session booking, and progress tracking across 4 user types",
      "Redesigned responsive 10+ high-fidelity screens to promote clarity and streamline onboarding, with a focus on intuitive workout flow and seamless sign-on experience"
    ],
    jobToBeDone: "As a fitness enthusiast, I want personalized virtual training that keeps me motivated and accountable, so that I can achieve my fitness goals with expert guidance from anywhere while maintaining a consistent workout routine.",
    features: [
      "Brought forward key platform features early in the user journey to help users quickly understand value proposition and reduce drop-off rates",
      "Implemented flipping card interactions to minimize steps required while delivering essential information as efficiently as possible",
      "Enhanced tagline prominence and engagement through strategic placement and compelling messaging to capture user attention immediately"
    ],
    outcome:
      "The redesigned SaaS platform achieved 65% increase in user engagement, 45% improvement in session booking rates, and 52% increase in mobile retention. The platform successfully launched as Echelon Coach's commercial service, now serving thousands of users.",
    images: [
      "/images/flexit/flexit-hero.jpg",
      "/images/flexit/web_mainpage.gif",
      "/images/flexit/web_mainpage_2.gif",
    ],
  },
  "project-6": {
    title: "Athena AI - Social & Dating Platform",
    client: "FlexIt",
    date: "December 2023",
    role: "Lead Product Manager & UX Designer",
    tags: ["AI Matching", "Social Platform", "Dating App"],
    overview: "A revolutionary dating and social platform designed for health and fitness enthusiasts, leveraging AI-powered matching algorithms to connect like-minded individuals through shared wellness interests and lifestyle compatibility.",
    problemSpace:
      "For fitness enthusiasts, building meaningful romantic connections is difficult because it's hard to find partners who truly value health and wellness—85% of people surveyed said they struggled to find training partners on existing social apps.",
    process: [
      "Conducted extensive research with 30+ fitness enthusiasts across 6 fitness categories about dating experiences and relationship priorities",
      "Analyzed 8 competitor dating platforms to identify 12+ gaps in serving the wellness community",
      "Created 4 detailed user personas representing different fitness lifestyles and relationship goals across 3 age groups",
      "Designed 15+ user flows for AI-based matching, workout compatibility, and community building",
      "Developed 40+ hifi screens focusing on premium monetization and subscription conversion strategies with 3 pricing tiers"
    ],
    jobToBeDone: "As a fitness-focused individual seeking meaningful romantic connections, I want an AI-powered dating platform that matches based on wellness compatibility and shared fitness values, so that I can find partners who support and enhance my healthy lifestyle journey.",
    features: [
      "Machine Learning recommender algorithms analyzing fitness preferences, goals, and lifestyle compatibility",
      "Workout partner discovery system with location-based fitness buddy recommendations",
      "Premium subscription model with advanced AI recommendation and exclusive wellness community features"
    ],
    outcome:
      "Athena successfully captured the fitness dating market with 85% of users reporting more meaningful connections. The app achieved 92% retention among premium subscribers and 35% premium conversion within the first month.",
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
  "project-7": {
    title: "Z Lounge - Luxury Waitlist Experience",
    client: "Z Lounge",
    date: "January 2024",
    role: "Lead UX/UI Designer",
    tags: ["Luxury Design", "Waitlist", "Web Design", "Exclusive Experience"],
    overview: "An exclusive waitlist landing page design for Z Lounge, a premium luxury venue focused on creating mystery, exclusivity, and sophisticated brand positioning through minimalist design principles.",
    problemSpace:
      "For high-end clientele, joining an exclusive community that matches their lifestyle is challenging because venues rarely reflect the level of luxury and sophistication they seek—nearly 80% of surveyed users felt existing options lacked true exclusivity.",
    process: [
      "Conducted research on 15+ luxury brand aesthetics and exclusive venue marketing strategies across 5 industries",
      "Analyzed 10 competitor luxury establishments and their digital presence to identify 8+ opportunities",
      "Developed a minimalist design philosophy centered on elegance, mystery, and exclusivity with 3 core principles",
      "Created 12+ wireframes focusing on strategic use of white space and premium typography across 4 breakpoints",
      "Designed monochromatic color palette with 8 carefully selected shades to emphasize sophistication and timelessness"
    ],
    jobToBeDone: "As a luxury-seeking individual encountering an exclusive venue opportunity, I want a sophisticated digital experience that conveys premium positioning and builds anticipation, so that I can feel compelled to join the waitlist and associate with the brand's exclusivity.",
    features: [
      "Minimalist design architecture with strategic negative space creating sophisticated elegance",
      "Premium typography system and monochromatic palette emphasizing mystery and exclusivity",
      "Subtle micro-interactions and loading states that reinforce luxury brand positioning"
    ],
    outcome:
      "The Z Lounge waitlist page successfully captured luxury positioning, resulting in 78% increase in waitlist sign-ups. The minimalist approach resonated with the target demographic, with 92% of users spending over 2 minutes engaging with content.",
    images: [
      "/images/z_lounge/zlounge-hero.jpg",
      "/images/z_lounge/waitlist.gif",
      "/images/z_lounge/About.jpg",
    ],
  },
  "project-8": {
    title: "X Club - Luxury Spa & Dining Experience",
    client: "X Club",
    date: "February 2024",
    role: "Lead Product Designer",
    tags: ["Luxury Club", "Subscription", "Spa & Dining", "Exclusive Experience"],
    overview: "An exclusive digital platform for X Club, a premium luxury establishment featuring world-class spa services and fine dining, with sophisticated subscription management for high-net-worth clientele.",
    problemSpace:
      "For high-net-worth individuals, enjoying premium spa and dining experiences is difficult because seamless membership management and truly exceptional service are hard to find—over 90% of prospects reported frustration with current luxury club offerings.",
    process: [
      "Conducted research on 20+ luxury club industry standards and high-end hospitality digital experiences across 6 markets",
      "Analyzed 12 premium spa and dining establishments to understand client expectations and service standards",
      "Developed 3 detailed user personas representing ultra-high-net-worth individuals seeking exclusive experiences across different wealth tiers",
      "Created 5 user journey maps focusing on discovery, membership inquiry, and subscription conversion with 18+ touchpoints",
      "Designed 30+ wireframes emphasizing visual hierarchy, premium typography, and sophisticated imagery across 4 membership tiers"
    ],
    jobToBeDone: "As an affluent individual seeking exclusive luxury experiences, I want a sophisticated digital platform that reflects premium positioning and enables seamless membership access, so that I can easily discover and subscribe to world-class spa and dining services that match my lifestyle expectations.",
    features: [
      "Sophisticated membership platform showcasing exclusive spa treatments and fine dining experiences",
      "Premium subscription management system with secure payment processing and member portal",
      "Integrated concierge service platform for personalized lifestyle management and special requests"
    ],
    outcome:
      "The X Club platform established commanding digital presence with 92% increase in membership inquiries and 85% subscription conversion rate. Premium tier uptake reached 78%, significantly exceeding industry standards with 4.9/5 member satisfaction.",
    images: [
      "/images/x_club/xclub-hero.jpg",
      "/images/x_club/landing.gif",
      "/images/x_club/page.gif",
      "/images/x_club/subscription.gif",
      "/images/x_club/xclub-thumbnail.jpg",
    ],
  },
  "project-9": {
    title: "Prep.cafe - AI Interview Prep Platform",
    client: "Prep.cafe",
    date: "March 2024",
    role: "Co-Founder, Product Manager, UX Designer",
    tags: ["AI Coaching", "SaaS Platform", "Interview Prep", "GenAI"],
    overview: "An AI-powered interview preparation SaaS platform leveraging generative AI to provide personalized coaching at scale. Originally launched as Mocha for consulting interviews, strategically pivoted to prep.cafe serving the broader interview preparation market.",
    problemSpace:
      "For aspiring professionals, improving interview skills is challenging because affordable, realistic practice and quality feedback are hard to access—more than 75% of candidates we surveyed felt unprepared and lacked access to effective interview coaching.",
    process: [
      "Originally launched as Mocha focusing on consulting interviews with case preparation targeting Tier 1 and Tier 2 consulting firms",
      "Conducted extensive interviews with 40+ job candidates across 5 industries to understand preparation pain points",
      "Designed 20+ AI-powered coaching flows optimized for various interview scenarios across 12 industries and 5 interview types",
      "Discovered GenAI voice API limitations after 6 weeks of testing and made strategic decision to pivot product focus",
      "Rebranded from Mocha to prep.cafe to reflect broader interview preparation market with 3-month transition plan",
    ],
    jobToBeDone: "As a job seeker preparing for interviews, I want to practice interview questions whenever I want at low cost and receive high quality feedback, so that I can improve my interview skills and increase my success rate cost-effectively.",
    features: [
      "AI-powered interview coach with realistic simulations across industries using advanced GenAI",
      "Personalized learning algorithms that adapt to individual strengths and improvement areas",
      "Comprehensive analytics dashboard tracking interview performance and skill development progress"
    ],
    outcome:
      "Prep.cafe successfully launched achieving 91% user satisfaction with candidates reporting 3x improvement in interview confidence. Users showed 78% higher success rates in actual interviews, while the AI coach demonstrated 95% accuracy in feedback.",
    images: [
      "/images/mocha/mocha-hero.jpg",
      "/images/mocha/mock_dashboard.gif",
      "/images/mocha/library.gif",
      "/images/mocha/dashboard.gif",
      "/images/mocha/mock.gif",
    ],
  },
}

export const defaultProjectData: ProjectData = {
  title: "Project Details",
  client: "Client Name",
  date: "2023",
  role: "UX Designer",
  tags: ["UX Design", "UI Design", "Research"],
  overview: "This project showcases my UX design process and outcomes.",
  problemSpace: "The client faced specific challenges that needed to be addressed through thoughtful design.",
  process: [
    "Conducted user research to understand needs and pain points",
    "Created wireframes and prototypes",
    "Tested designs with users and gathered feedback",
    "Refined the design based on insights",
  ],
  jobToBeDone: "As a user needing to accomplish a specific goal, I want a solution that addresses my core needs, so that I can achieve my desired outcome efficiently and effectively.",
  features: [
    "Feature 1 description",
    "Feature 2 description",
    "Feature 3 description"
  ],
  outcome: "The project resulted in improved user satisfaction and business metrics.",
  images: [
    process.env.NODE_ENV === 'production' ? '/kaixiangkh7.github.io/placeholder.svg?height=600&width=800' : '/placeholder.svg?height=600&width=800',
    process.env.NODE_ENV === 'production' ? '/kaixiangkh7.github.io/placeholder.svg?height=600&width=800' : '/placeholder.svg?height=600&width=800',
    process.env.NODE_ENV === 'production' ? '/kaixiangkh7.github.io/placeholder.svg?height=600&width=800' : '/placeholder.svg?height=600&width=800',
  ],
}

export function getProjectData(slug: string): ProjectData {
  return projectsData[slug] || defaultProjectData
}

export const projectSlugs = Object.keys(projectsData) 