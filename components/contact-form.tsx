"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Mail } from "lucide-react"

// The component name can remain ContactForm if you prefer,
// or you can rename it to ContactButton and update imports elsewhere.
export function ContactForm() { // Or export function ContactButton()
  const [isSubmitting, setIsSubmitting] = useState(false) // Optional: for button loading state
  const { toast } = useToast()

  const handleContactClick = () => {
    setIsSubmitting(true) // Optional: show loading state

    const emailTo = "kaixiang.huang@columbia.edu" // Updated email address
    const subject = encodeURIComponent("Inquiry from Portfolio Website")
    // You can add a predefined body if you like, or leave it empty:
    // const body = encodeURIComponent("Hello,\n\nI would like to discuss...")
    // const mailtoUrl = `mailto:${emailTo}?subject=${subject}&body=${body}`
    const mailtoUrl = `mailto:${emailTo}?subject=${subject}`

    try {
      window.open(mailtoUrl, '_blank')
      toast({
        title: "Opening Email Client",
        description: "Your default email client should now be open.",
      })
    } catch (error) {
      console.error("Failed to open mailto link:", error)
      toast({
        title: "Error Opening Email Client",
        description: "Could not open your email client. Please copy the email address manually.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false) // Optional: reset loading state
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-light text-white mb-4">
          Let's build!
        </h3>
        
        <div className="space-y-4 text-white/80">
          <p className="text-lg leading-relaxed">
            I'm always up to chat, jam on ideas, or help bring something bold to life—whether it's AI, product strategy, or killer design.
          </p>
          
          <p className="text-lg leading-relaxed">
            Got something in mind? Hit me up—let's build.
          </p>
        </div>
      </div>
      
      <div className="flex justify-center">
        <Button 
          onClick={handleContactClick}
          disabled={isSubmitting}
          className="group px-10 py-4 text-lg rounded-full font-medium 
                   bg-primary hover:bg-primary/90 text-white border-0
                   transform hover:scale-105 hover:-translate-y-1 
                   transition-all duration-300 shadow-lg hover:shadow-2xl"
          size="lg"
        >
          <span className="flex items-center gap-3">
            <Mail className="w-5 h-5 group-hover:animate-pulse" />
            {isSubmitting ? "Opening Email..." : "Get in Touch"}
          </span>
        </Button>
      </div>
      
      <div className="text-center">
        <p className="text-sm text-white/50">
          Click to open your default email app
        </p>
        <p className="text-sm text-white/70 mt-1">
          kaixiang.huang@columbia.edu
        </p>
      </div>
    </div>
  )
} 