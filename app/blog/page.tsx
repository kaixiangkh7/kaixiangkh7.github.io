import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GradientBackground } from "@/components/gradient-background"

export const metadata: Metadata = {
  title: "Blog | Kaixiang (Kai) Huang – Product & Design Insights",
  description: "Insights on product management, UX design, AI/ML, and building user-centered digital products from Kaixiang Huang.",
  openGraph: {
    title: "Blog | Kaixiang (Kai) Huang – Product & Design Insights",
    description: "Insights on product management, UX design, AI/ML, and building user-centered digital products from Kaixiang Huang.",
    url: 'https://kaixiang.dev/blog',
    siteName: 'Kaixiang Huang Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        alt: 'Kaixiang (Kai) Huang - Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <GradientBackground />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/40 z-1"></div>
          </div>
          <div className="container relative z-1 w-full">
            <div className="max-w-4xl text-white">
              <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight font-light">
                <span className="font-extralight">Product & Design</span>
                <br />
                <span className="font-semibold">Insights</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-8 font-light leading-relaxed max-w-3xl">
                Sharing thoughts on product management, user experience design, AI/ML, and building products that users love.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Content Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <div className="space-y-12">
              {/* Newsletter Subscription */}
              <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                  <p className="text-lg text-muted-foreground">
                    Subscribe to my newsletter for the latest insights on product management, design, and AI/ML.
                  </p>
                </div>
                
                {/* Substack Embed */}
                <div className="max-w-2xl mx-auto">
                  <iframe 
                    src="https://kaixianghuang.substack.com/embed" 
                    width="100%" 
                    height="320" 
                    style={{
                      border: '1px solid #EEE',
                      background: 'white',
                      borderRadius: '12px'
                    }}
                    frameBorder="0" 
                    scrolling="no"
                    title="Newsletter Signup"
                  ></iframe>
                </div>
              </div>

              {/* Blog Posts Section */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>
                <div className="space-y-8">
                  {/* Coming Soon Message */}
                  <div className="text-center py-16">
                    <div className="max-w-md mx-auto">
                      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Blog Posts Coming Soon</h3>
                      <p className="text-muted-foreground">
                        I'm working on some exciting content about product management, design strategies, and AI implementation. Subscribe to my newsletter above to be notified when new posts are published!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter Archive Link */}
              <div className="text-center py-8 border-t">
                <p className="text-muted-foreground mb-4">
                  Want to read my previous thoughts and insights?
                </p>
                <a 
                  href="https://kaixianghuang.substack.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Visit My Substack Archive
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 