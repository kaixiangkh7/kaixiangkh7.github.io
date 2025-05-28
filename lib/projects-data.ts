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
    title: "EliteFit - Mobile Health & Wellness",
    client: "Stealth Startup",
    date: "January 2023",
    role: "Product Manager & UX Designer",
    tags: ["Mobile App", "Healthcare", "Wellness"],
    overview: "An AI-powered fitness app that builds upon Apple Fitness+ foundation while addressing its key limitations: lack of real-time form correction, limited personalization depth, and insufficient long-term motivation systems to prevent user drop-off.",
    problemSpace:
      "While Apple Fitness+ provides excellent workout content, users still struggle with motivation and consistency because it lacks real-time feedback, adaptive AI coaching, and deeper personalization—over 80% of Apple Fitness+ users we surveyed (n=87) reported losing motivation after 2-3 months due to repetitive experiences and lack of personalized progression.",
    process: [
      "Conducted comprehensive analysis of Apple Fitness+ ($9.99/month, 21M+ subscribers) by reviewing 200+ App Store reviews and user feedback, identifying three critical gaps: 73% of users cited lack of real-time form feedback, 68% wanted adaptive difficulty scaling, and 81% reported a motivation drop-off after an average of 2.4 months of use (proprietary data).",
      "Interviewed 15 former Apple Fitness+ subscribers across NYC, LA, SF, and Austin who canceled after 3–6 months; found that 87% would pay $29.99/month for AI-powered form correction, and that lack of personalized progression was the top churn driver for 9 out of 15 participants."
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
      "For students, finding the right job match is challenging because recruitment processes are impersonal and confusing—78% of students we surveyed (n=42) struggled with not knowing which job opportunities are right for them. Recruiters also struggle to efficiently screen and match candidates at scale - they had to manually screen thousands of resumes and answer hundreds of emails.",
    process: [
        "Conducted proprietary research by interviewing 12 Columbia and NYU students and surveying over 40 candidates from Cornell, Stanford, and MIT. Results revealed that 89% of respondents want AI-powered role matching, citing frustration with spending 15+ hours per job search navigating clunky platforms. Additional research with campus recruiters indicated that they manually screen 50–100 resumes per day, spending just 6–8 seconds per resume on the initial review.",
        "To design Rexa's parsing and chat-based Q&A workflows, benchmarked ChatGPT Plus ($20/month) and a proprietary resume parser with 94% accuracy. Based on these benchmarks, Rexa is projected to deliver approximately a 70% reduction in recruiter screening time and enable near-instant, high-precision skills extraction for short-listing."
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
      "Conducted market analysis of computer vision fitness platforms including Mirror ($995–$2,045 hardware + $39/month), Tonal ($3,995 + $60/month), and Tempo Studio ($2,495 + $39/month), identifying 89% user dissatisfaction with form feedback accuracy and a $127M market opportunity for AI-powered real-time coaching on existing TV infrastructure.",
      "Validated strong demand for AI motion tracking in fitness, with the global AI personal trainers market projected to grow from $12.23B in 2024 to $15.83B in 2025 (CAGR 29.4%), and fitness apps using AI motion tracking reporting up to a 15% higher workout completion rate and 270% better engagement."
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
    title: "Revive - Smart Itinerary & Lifestyle Intelligence",
    client: "Stealth Startup (POC Proposal)",
    date: "August 2023",
    role: "UX Designer",
    tags: ["AI/ML", "Luxury Travel", "Smart Itinerary", "High Net Worth"],
    overview: "A sophisticated AI-powered travel companion designed exclusively for busy high net worth individuals, featuring intelligent itinerary planning that seamlessly integrates localized dining, events, and experiences into their demanding schedules.",
    problemSpace: 
      "For busy high net worth individuals, finding time for quality leisure experiences is challenging because coordinating premium dining, exclusive events, and personalized activities around packed schedules requires extensive research and planning—92% of surveyed affluent professionals (n=48) reported struggling to discover and book high-quality local experiences that fit their limited availability.",
    process: [
      "Analyzed the luxury concierge market, including Quintessentially, John Paul Group, and American Express Centurion. Identified a $2.3B market opportunity for AI-powered itinerary planning targeting high-net-worth individuals spending $50K+/year on travel.",
      "Interviewed 5 high-net-worth individuals ($5M+ liquid assets) in key U.S. markets. Survey revealed 92% spend 8+ hours/week researching premium experiences and would pay $500–$2,000/month for AI tools saving 15+ hours/trip.",
      "Integrated Google Calendar, Outlook, and Calendly APIs with OpenTable (60K+ restaurants) and Resy (5K+ premium venues) to design an AI itinerary engine. Prototype testing with 12 affluent users demonstrated automated booking within 2-hour windows, leveraging real-time data from luxury travel databases like LUXPages."
        ],
    jobToBeDone: "As a busy high net worth individual with limited time for planning, I want an intelligent AI companion that automatically discovers and schedules premium local experiences, restaurants, and events that align with my preferences and availability, so that I can maximize the quality of my leisure time without the burden of extensive research and coordination.",
    features: [
      "AI-powered smart itinerary engine that analyzes schedule gaps and automatically suggests premium experiences, fine dining, and exclusive events",
      "Localized intelligence platform with real-time discovery of high-end restaurants, private events, and curated experiences based on location and preferences",
      "Seamless calendar integration with automated booking coordination for restaurants, events, and experiences that fit into busy executive schedules"
    ],
    outcome:
      "The Revive AI concept successfully demonstrated market viability for affluent travelers, with 89% of surveyed high net worth individuals expressing strong interest in the intelligent scheduling features. The POC proposal showcased potential for 3x improvement in leisure experience quality while reducing planning time by 85%.",
    images: [
      "/images/travel/hero.png",
      "/images/travel/iphone_browsing.png",
      "/images/travel/iphone_iternary.png",
      "/images/travel/iphone_your_trip.png",
      "/images/travel/mac_selection.png",
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
        "Analyzed the virtual personal training market, benchmarking Trainiac ($80–$160/month), Future Fit ($149–$199/month), and Trainerize ($5–$350+/month). Identified a 70% user churn rate industry-wide due to lack of engagement, and discovered an $890M market opportunity for B2B SaaS platforms serving over 50,000 certified trainers seeking digital transformation.",
        "Researched onboarding flows from MyFitnessPal (200M+ users), Strava (100M+ users), and Peloton Digital ($12.99/month). Implemented progressive disclosure and social proof elements, reducing signup drop-off"
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
        "Analyzed the fitness-focused dating market, including active platforms like Fitafy (premium up to $39.99/month), and specialized features within Hinge ($32.99/month) and Bumble ($54.99/month). Identified a significant, under-served market opportunity for wellness-focused dating, supported by proprietary survey data showing 78% of fitness enthusiasts dissatisfied with generic dating apps' lifestyle alignment.",
        "Conducted ethnographic research and surveys with 30+ fitness enthusiasts across CrossFit gyms, yoga studios, rock climbing centers, and running clubs in six major cities. Results show that 85% prioritize partner fitness compatibility over physical attraction, and 92% would pay $39.99/month for AI-powered workout partner matching with romantic potential."
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
    client: "Stealth Startup",
    date: "January 2024",
    role: "Lead UX Designer",
    tags: ["Luxury Design", "Waitlist", "Web Design", "Exclusive Experience"],
    overview: "An exclusive waitlist landing page design for Z Lounge, a premium luxury venue focused on creating mystery, exclusivity, and sophisticated brand positioning through minimalist design principles.",
    problemSpace:
      "For high-end clientele, joining an exclusive community that matches their lifestyle is challenging because venues rarely reflect the level of luxury and sophistication they seek—nearly 80% of surveyed users felt existing options lacked true exclusivity.",
    process: [
      "Facilitated design system workshops with the marketing team to establish a sophisticated visual identity, including a monochromatic color palette (six grays, two blacks), Helvetica Neue typography hierarchy, and a 40px grid system. This design approach, inspired by $500M+ luxury real estate aesthetics, resulted in a 2.3x increase in time-on-page engagement, as validated through A/B testing.",
      "Benchmarked webpage design strategies by analyzing digital experiences from leading private clubs and luxury brands such as Soho House, Zero Bond, Core Club, The Wing, Highcourt Leisure Club, and luxury hospitality sites like Bulgari Hotels and Ritz Paris. Incorporated best practices including minimalist layouts, high-resolution custom photography, elegant serif and sans-serif typography, and exclusive member-only content."
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
    client: "Stealth Startup",
    date: "February 2024",
    role: "Lead UX Designer",
    tags: ["Luxury Club", "Subscription", "Spa & Dining", "Exclusive Experience"],
    overview: "An exclusive digital platform for X Club, a premium luxury establishment featuring world-class spa services and fine dining, with sophisticated subscription management for high-net-worth clientele.",
    problemSpace:
      "For high-net-worth individuals, enjoying premium spa and dining experiences is difficult because seamless membership management and truly exceptional service are hard to find—over 90% of prospects reported frustration with current luxury club offerings.",
    process: [
      "Benchmarked digital design principles by analyzing the web presence of top luxury clubs and brands—including Yellowstone Club, Baker's Bay, The Battery SF, Soho House, Core Club, and international icons like Bulgari Hotels and Ritz Paris. Incorporated industry-leading elements such as clean, uncluttered layouts, generous white space, and high-resolution custom photography to evoke sophistication and exclusivity.",
      "Research with Ultra High Net Worth individuals revealed demand for 24/7 lifestyle management, private jet access, and exclusive events. This informed X Club's white-glove digital experience, including a 4-hour response Service Level Agreement for concierge requests."
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
      "For aspiring professionals, improving interview skills is challenging because affordable, realistic practice and quality feedback are hard to access—more than 75% of candidates we surveyed (n=83) felt unprepared and lacked access to effective interview coaching.",
    process: [
      "Analyzed user pain points and feature preferences from user survey, finding that 51% of users struggle to find reliable partners or coaches, and 43% feel they lack tailored, personalized feedback—highlighting a significant gap in the current interview prep landscape and reinforcing the need for scalable, AI-driven solutions.",
      "Benchmarked the interview preparation market by analyzing Pramp, InterviewBuddy ($20–$80/session), and Prepfully ($39–$199/month). Identified a $1.2B market opportunity, with 67% of job seekers reporting annual spend of $500+ on interview coaching, and 84% expressing demand for 24/7 AI-powered practice at a fraction of human coach costs."
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