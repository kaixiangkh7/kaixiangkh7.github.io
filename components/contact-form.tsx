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
    <div className="py-12 text-center">
      <h3 className="text-2xl font-medium text-white mb-4">
        Contact Me
      </h3>
      
      <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
        Whether you're looking to innovate with AI or enhance user experiences, 
        I'm here to help turn your vision into reality.
      </p>
      
      <div className="space-y-4">
        <Button 
          onClick={handleContactClick}
          disabled={isSubmitting}
          className="group px-8 py-6 text-lg rounded-full font-medium 
                   bg-white/10 hover:bg-white/20 text-white border border-white/20
                   transform hover:-translate-y-0.5 transition-all duration-200"
          size="lg"
        >
          <span className="flex items-center gap-2">
            <Mail className="w-5 h-5 group-hover:animate-bounce" />
            {isSubmitting ? "Opening Email..." : "Get in Touch"}
          </span>
        </Button>
      
      </div>
    </div>
  )
} 