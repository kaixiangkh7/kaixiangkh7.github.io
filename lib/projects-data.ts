export interface ProjectData {
  title: string
  client: string
  date: string
  role: string
  tags: string[]
  overview: string
  challenge: string
  process: string[]
  jobToBeDone: string
  features: string[]
  outcome: string
  images: string[]
}

export const projectsData: Record<string, ProjectData> = {
  "project-1": {
    title: "EliteFit - Mobile Health & Wellness",
    client: "Stealth Startup",
    date: "January 2023",
    role: "Lead UX/UI Designer",
    tags: ["Mobile App", "Healthcare", "Wellness"],
    overview: "A complete redesign of a health tracking application to improve user engagement and retention.",
    challenge:
      "The original app had a high churn rate with users abandoning the platform after just a few sessions. The interface was cluttered, the information architecture was confusing, and the overall experience felt clinical rather than motivational.",
    process: [
      "Conducted user interviews with 15 current and former users to understand pain points",
      "Created user personas and journey maps to identify key moments of friction",
      "Developed low-fidelity wireframes and tested with users",
      "Iterated on designs based on feedback and conducted usability testing",
      "Worked with developers to implement the new design system"
    ],
    jobToBeDone: "As a health-conscious user, I want a motivating and intuitive platform that provides personalized guidance and celebrates progress, so that I can achieve my wellness goals without feeling overwhelmed or losing motivation.",
    features: [
      "AI-powered workout recommendations that adapt to user performance and preferences",
      "Personalized fitness dashboards with dynamic goal setting and progress visualization",
      "Social challenges and community features to increase motivation and accountability"
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
    role: "Product Designer & UX Researcher",
    tags: ["Enterprise AI", "Recruitment", "B2B Platform"],
    overview:
      "A comprehensive enterprise recruitment platform featuring an AI-powered agent named Rexa to streamline hiring processes and create personalized experiences for both students and recruiters at scale.",
    challenge:
      "Amazon's student hiring process faced significant friction points resulting in high recruitment costs and suboptimal candidate matching. The existing system lacked personalization, required extensive manual work from recruiters, and didn't provide students with adequate guidance for role matching.",
    process: [
      "Conducted stakeholder interviews with Amazon recruiters and recent student hires",
      "Analyzed existing hiring workflow to identify automation opportunities",
      "Designed user personas for students, recruiters, and hiring managers with different needs",
      "Developed wireframes for AI-powered sign-on flow and personalized dashboards",
      "Implemented and tested the GenAI-integrated web application with user feedback"
    ],
    jobToBeDone: "As an enterprise recruiter, I want an AI-powered platform that automates screening and provides intelligent insights, so that I can focus on strategic hiring decisions while reducing time-to-hire and improving candidate quality.",
    features: [
      "AI agent Rexa providing intelligent candidate-role matching using machine learning algorithms",
      "Automated resume filtering and candidate assessment with personalized recruiter insights",
      "Real-time communication tools with AI-enhanced conversation suggestions and analytics"
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
    title: "FlexIt Vision - AI Computer Vision Coach",
    client: "FlexIt Fitness",
    date: "September 2023",
    role: "Senior Product Designer",
    tags: ["Computer Vision", "AI Coaching", "TV Platform"],
    overview: "An AI-powered fitness coach platform that uses computer vision and machine learning to provide real-time form correction and personalized feedback directly on TV screens, revolutionizing home workout experiences.",
    challenge:
      "Home fitness enthusiasts struggled with proper form execution without professional guidance, leading to ineffective workouts and potential injuries. Traditional fitness apps couldn't provide real-time feedback on exercise form, creating a gap in the home fitness market.",
    process: [
      "Conducted extensive user research with home fitness enthusiasts to understand form-related pain points",
      "Collaborated with ML engineers to understand computer vision capabilities for movement analysis",
      "Designed user flows for seamless TV-based interaction with voice and remote control",
      "Created wireframes for real-time feedback overlay systems optimized for workout execution",
      "Conducted usability testing with users performing exercises to validate AI feedback delivery"
    ],
    jobToBeDone: "As a fitness enthusiast working out at home, I want real-time AI-powered form correction and personalized coaching feedback, so that I can exercise safely and effectively while building proper movement patterns and achieving my fitness goals.",
    features: [
      "Real-time computer vision analysis with instant corrective feedback and movement scoring",
      "AI-powered personalized coaching that adapts to individual movement patterns and skill progression",
      "TV-optimized interface with voice controls and hands-free workout management"
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
    role: "Lead UX/UI Designer",
    tags: ["Travel AI", "E-commerce", "Mobile First"],
    overview: "A comprehensive redesign of a travel booking platform that transformed a frustrating booking experience into an intuitive, transparent, and AI-enhanced journey for travelers.",
    challenge: 
      "WanderWise Travel's existing booking platform suffered from a 78% abandonment rate during the booking process. Users found the multi-step process confusing, lacked trust due to hidden fees, and felt overwhelmed by complex itinerary management on mobile devices.",
    process: [
      "Conducted comprehensive booking funnel analysis to identify critical drop-off points",
      "Performed in-depth user interviews with 20 recent travelers across different demographics",
      "Created detailed user journey maps highlighting emotional peaks and valleys throughout booking",
      "Designed and tested a simplified booking flow that reduced steps from 12 to 6",
      "Implemented transparent fee disclosure architecture and real-time pricing updates"
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
    title: "FlexIt Platform - Fitness SaaS Solution",
    client: "FlexIt Fitness (now Echelon Coach)",
    date: "November 2023",
    role: "Senior Product Designer",
    tags: ["SaaS Platform", "Fitness", "Web App"],
    overview: "A complete B2B SaaS platform redesign for online fitness training, creating an engaging and scalable solution for virtual personal training services. The platform successfully launched as Echelon Coach's commercial offering.",
    challenge:
      "The existing FlexIt platform suffered from poor user engagement and high bounce rates. The interface was outdated with difficult navigation between workout programs, trainer management, and progress tracking, while lacking mobile responsiveness for 70% of users.",
    process: [
      "Conducted comprehensive user research with 25 existing users and fitness professionals",
      "Analyzed competitor SaaS platforms and identified best practices in fitness technology",
      "Created user personas representing different fitness goals, trainer types, and business models",
      "Developed user journey maps for key SaaS flows: onboarding, subscription management, and trainer tools",
      "Designed responsive wireframes with emphasis on scalable component systems"
    ],
    jobToBeDone: "As a fitness professional, I want a comprehensive SaaS platform that manages client relationships, delivers engaging workout experiences, and provides business analytics, so that I can focus on coaching while growing my revenue streams.",
    features: [
      "Comprehensive trainer business dashboard with client management and revenue analytics",
      "Scalable subscription management system with flexible pricing tiers and automated billing",
      "Integrated video delivery platform with real-time session capabilities and progress tracking"
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
    title: "Athena AI - Dating & Social Platform",
    client: "FitConnect Inc.",
    date: "December 2023",
    role: "Lead Product Designer",
    tags: ["AI Matching", "Social Platform", "Dating App"],
    overview: "A revolutionary B2C dating platform designed for health and fitness enthusiasts, leveraging AI-powered matching algorithms to connect like-minded individuals through shared wellness interests and lifestyle compatibility.",
    challenge:
      "Traditional dating apps failed to serve fitness enthusiasts who prioritize health and wellness in relationships. Users struggled to find partners with compatible fitness lifestyles, leading to mismatched expectations and relationship incompatibility.",
    process: [
      "Conducted extensive research with 30+ fitness enthusiasts about dating experiences and relationship priorities",
      "Analyzed competitor dating platforms to identify gaps in serving the wellness community",
      "Created detailed user personas representing different fitness lifestyles and relationship goals",
      "Designed user flows for AI-based matching, workout compatibility, and community building",
      "Developed wireframes focusing on premium monetization and subscription conversion strategies"
    ],
    jobToBeDone: "As a fitness-focused individual seeking meaningful romantic connections, I want an AI-powered dating platform that matches based on wellness compatibility and shared fitness values, so that I can find partners who support and enhance my healthy lifestyle journey.",
    features: [
      "AI-powered matching algorithm analyzing fitness preferences, goals, and lifestyle compatibility",
      "Workout partner discovery system with location-based fitness buddy recommendations",
      "Premium subscription model with advanced AI filters and exclusive wellness community features"
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
    challenge:
      "Z Lounge required a waitlist experience that would embody luxury and exclusivity while maintaining mystery. The challenge was creating a design appealing to high-end clientele without revealing too much, using visual restraint to build anticipation.",
    process: [
      "Conducted research on luxury brand aesthetics and exclusive venue marketing strategies",
      "Analyzed competitor luxury establishments and their digital presence to identify opportunities",
      "Developed a minimalist design philosophy centered on elegance, mystery, and exclusivity",
      "Created wireframes focusing on strategic use of white space and premium typography",
      "Designed monochromatic color palette to emphasize sophistication and timelessness"
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
    challenge:
      "X Club needed a digital presence reflecting their ultra-premium positioning in luxury hospitality. The challenge was creating an experience appealing to high-net-worth individuals while effectively facilitating membership subscriptions and maintaining exclusivity.",
    process: [
      "Conducted research on luxury club industry standards and high-end hospitality digital experiences",
      "Analyzed premium spa and dining establishments to understand client expectations",
      "Developed user personas representing ultra-high-net-worth individuals seeking exclusive experiences",
      "Created user journey maps focusing on discovery, membership inquiry, and subscription conversion",
      "Designed wireframes emphasizing visual hierarchy, premium typography, and sophisticated imagery"
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
    client: "Prep.cafe (formerly Mocha)",
    date: "March 2024",
    role: "Lead Product Designer & Founder",
    tags: ["AI Coaching", "SaaS Platform", "Interview Prep", "GenAI"],
    overview: "An AI-powered interview preparation SaaS platform leveraging generative AI to provide personalized coaching at scale. Originally launched as Mocha for consulting interviews, strategically pivoted to prep.cafe serving the broader interview preparation market.",
    challenge:
      "Aspiring professionals faced significant barriers accessing quality interview preparation. Traditional prep was expensive, limited by scheduling constraints, and lacked personalized feedback. The original GenAI voice API limitations with complex case analysis required strategic product pivoting.",
    process: [
      "Originally launched as Mocha focusing on consulting interviews with case study preparation",
      "Discovered GenAI voice API limitations and made strategic decision to pivot product focus",
      "Rebranded from Mocha to prep.cafe to reflect broader interview preparation market",
      "Conducted extensive interviews with 40+ job candidates to understand preparation pain points",
      "Designed AI-powered coaching flows optimized for various interview scenarios and industries"
    ],
    jobToBeDone: "As a job candidate preparing for competitive interviews, I want an AI-powered platform that provides realistic practice and personalized feedback at scale, so that I can improve my interview skills and increase my success rate cost-effectively.",
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
  challenge: "The client faced specific challenges that needed to be addressed through thoughtful design.",
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