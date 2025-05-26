export interface ProjectData {
  title: string
  client: string
  date: string
  tags: string[]
  overview: string
  challenge: string
  process: string[]
  features: string[]
  outcome: string
  images: string[]
}

export const projectsData: Record<string, ProjectData> = {
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
  "project-7": {
    title: "Z Lounge - Luxury Waitlist Experience",
    client: "Z Lounge",
    date: "January 2024",
    tags: ["Luxury Design", "Waitlist", "Web Design", "Exclusive Experience"],
    overview: "An exclusive waitlist landing page design for Z Lounge, a premium luxury lounge focused on creating mystery, exclusivity, and sophistication through minimalist design principles and elegant typography.",
    challenge:
      "Z Lounge required a waitlist page that would embody the essence of luxury and exclusivity while maintaining an air of mystery. The challenge was to create a design that would appeal to high-end clientele without revealing too much, using visual restraint to build anticipation and desire. The page needed to feel sophisticated and exclusive enough to justify the premium positioning while encouraging sign-ups for the waitlist.",
    process: [
      "Conducted research on luxury brand aesthetics and exclusive club marketing strategies",
      "Analyzed competitor luxury venues and their digital presence to identify design opportunities",
      "Developed a minimalist design philosophy centered on elegance, mystery, and exclusivity",
      "Created wireframes focusing on strategic use of white space and premium typography",
      "Designed a monochromatic color palette to emphasize sophistication and timelessness",
      "Developed interactive prototypes with subtle animations to enhance the premium feel",
      "Tested the design with target demographic to ensure it conveyed the intended luxury positioning",
      "Refined typography and layout to maximize impact while maintaining simplicity"
    ],
    features: [
      "Minimalist design with strategic use of negative space to create elegance and sophistication",
      "Monochromatic color scheme emphasizing mystery and exclusivity",
      "Premium typography selection with elegant font pairings for luxurious aesthetic",
      "Subtle micro-interactions and animations that enhance the exclusive experience",
      "Strategic content revelation that maintains mystery while building anticipation",
      "Mobile-responsive design optimized for high-end mobile devices",
      "Exclusive waitlist form with premium user experience and validation",
      "Sophisticated loading states and transitions that reinforce the luxury brand"
    ],
    outcome:
      "The Z Lounge waitlist page successfully captured the essence of luxury and exclusivity, resulting in a 78% increase in waitlist sign-ups compared to their previous landing page. The minimalist design approach resonated strongly with the target demographic, with 92% of users spending more than 2 minutes engaging with the page content. The sophisticated aesthetic helped establish Z Lounge's premium brand positioning, leading to higher-quality leads and increased anticipation for the lounge opening. The design became a reference point for luxury hospitality digital experiences.",
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
    tags: ["Luxury Club", "Subscription", "Spa & Dining", "Exclusive Experience"],
    overview: "An exclusive digital experience for X Club, a premium luxury club featuring world-class spa services, fine dining, and exclusive membership benefits. The platform promotes sophistication and exclusivity while facilitating seamless subscription management for discerning clientele.",
    challenge:
      "X Club needed a digital presence that would reflect their ultra-premium positioning in the luxury hospitality market. The challenge was to create an experience that would appeal to high-net-worth individuals seeking exclusive spa and dining experiences, while effectively communicating the club's exclusivity and facilitating membership subscriptions. The platform needed to convey luxury, sophistication, and exclusivity without compromising on functionality or accessibility for the target demographic.",
    process: [
      "Conducted research on luxury club industry standards and high-end hospitality digital experiences",
      "Analyzed premium spa and dining establishments to understand client expectations and service standards",
      "Developed user personas representing ultra-high-net-worth individuals seeking exclusive lifestyle experiences",
      "Created user journey maps focusing on discovery, membership inquiry, and subscription conversion",
      "Designed wireframes emphasizing visual hierarchy, premium typography, and sophisticated imagery",
      "Developed interactive prototypes with focus on seamless subscription flow and member portal experience",
      "Conducted usability testing with target demographic to ensure luxury positioning resonated appropriately",
      "Refined design language to maximize exclusivity appeal while maintaining conversion optimization"
    ],
    features: [
      "Sophisticated landing page showcasing exclusive spa treatments, fine dining experiences, and luxury amenities",
      "Premium membership tiers with detailed benefits breakdown and exclusive service offerings",
      "Seamless subscription management system with secure payment processing and member portal access",
      "Interactive spa service booking system with personalized treatment recommendations",
      "Exclusive dining reservation platform with chef's table and private dining options",
      "Member-only content areas featuring behind-the-scenes experiences and exclusive events",
      "Concierge service integration for personalized lifestyle management and special requests",
      "Sophisticated visual design language emphasizing luxury, exclusivity, and refined aesthetics"
    ],
    outcome:
      "The X Club platform successfully established a commanding digital presence in the luxury club market, resulting in a 92% increase in membership inquiries and an 85% subscription conversion rate among qualified prospects. The sophisticated design approach resonated strongly with the target demographic, with 94% of users spending over 5 minutes exploring membership benefits. The platform's emphasis on exclusivity and luxury positioning led to premium membership tier uptake of 78%, significantly exceeding industry standards. Member satisfaction scores reached 4.9/5, with particular praise for the seamless subscription experience and intuitive spa booking system.",
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
    tags: ["AI Coaching", "SaaS Platform", "Interview Prep", "GenAI"],
    overview: "An AI-powered interview preparation platform that leverages generative AI to provide personalized interview coaching, allowing users to practice interviews anytime with high-quality AI coaches.",
    challenge:
      "Aspiring professionals faced significant barriers in accessing quality interview preparation resources. Traditional interview prep was expensive, limited by scheduling constraints with human coaches, and lacked personalized feedback. Many candidates struggled to find realistic interview practice opportunities and couldn't afford premium coaching services, leading to inadequate preparation for competitive job interviews.",
    process: [
      "Originally focused on consulting interviews but pivoted due to GenAI voice API limitations with complex case analysis",
      "Conducted extensive interviews with 40+ job candidates to understand preparation pain points and budget constraints",
      "Analyzed existing interview prep solutions to identify gaps in accessibility and personalization",
      "Collaborated with experienced professionals to understand best practices in interview methodology",
      "Designed user flows for AI-powered interview coaching sessions with real-time feedback mechanisms",
      "Created wireframes for personalized learning paths and progress tracking dashboards",
      "Developed prototypes for AI coach interactions optimized for various interview scenarios",
      "Conducted usability testing with candidates across different experience levels and industries",
      "Implemented machine learning algorithms trained on thousands of real interview scenarios"
    ],
    features: [
      "AI-powered interview coach with realistic interview simulations across various industries",
      "Personalized learning paths that adapt to individual strengths and improvement areas",
      "Real-time feedback on interview responses, communication style, and industry knowledge",
      "Comprehensive library of practice questions covering various interview types and scenarios",
      "Progress tracking dashboard with detailed analytics on interview performance and skill development",
      "24/7 availability for on-demand practice sessions fitting any schedule",
      "Mock interview simulator with AI-powered performance analysis",
      "Community features for peer learning and discussion among job seekers"
    ],
    outcome:
      "Prep.cafe successfully launched as a general interview preparation platform, achieving 91% user satisfaction rates with candidates reporting 3x improvement in interview confidence. Users practicing with Prep.cafe showed 78% higher success rates in actual interviews compared to traditional preparation methods. The AI coach demonstrated 95% accuracy in providing relevant feedback, while the platform's accessibility led to a 400% increase in diverse candidates accessing quality interview preparation resources.",
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
}

export function getProjectData(slug: string): ProjectData {
  return projectsData[slug] || defaultProjectData
}

export const projectSlugs = Object.keys(projectsData) 