"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Project type must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  // Honeypot field - should be empty
  website: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { executeRecaptcha } = useGoogleReCaptcha()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      let recaptchaToken = null

      // Execute reCAPTCHA if available
      if (executeRecaptcha) {
        try {
          recaptchaToken = await executeRecaptcha('contact_form')
          console.log('reCAPTCHA token generated successfully')
        } catch (error) {
          console.warn('reCAPTCHA execution failed:', error)
          // Continue without reCAPTCHA if it fails
        }
      }

      // Option 1: Send to your backend API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken
        }),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        })
        reset()
      } else if (response.status === 429) {
        // Rate limit exceeded
        toast({
          title: "Please slow down",
          description: "You've sent too many messages. Please try again later.",
          variant: "destructive",
        })
      } else if (response.status === 403) {
        // Origin validation failed or reCAPTCHA failed
        toast({
          title: "Security verification failed",
          description: "Please try refreshing the page and submitting again.",
          variant: "destructive",
        })
      } else {
        throw new Error(result.message || 'Failed to send message')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      
      // Option 2: Fallback to mailto if API fails
      const subject = encodeURIComponent(`Portfolio Contact: ${data.subject}`)
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      )
      const mailtoUrl = `mailto:hello@uxportfolio.com?subject=${subject}&body=${body}`
      
      window.open(mailtoUrl, '_blank')
      
      toast({
        title: "Opening email client",
        description: "Your default email client will open with the message pre-filled.",
      })
      reset()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Honeypot field - hidden from users, should be empty */}
      <input
        {...register("website")}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
          opacity: 0,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            {...register("name")}
            className="w-full px-3 py-2 bg-white/10 border-0 text-white placeholder-white/50 focus:ring-1 focus:ring-primary rounded-md"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-red-300 text-sm">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            className="w-full px-3 py-2 bg-white/10 border-0 text-white placeholder-white/50 focus:ring-1 focus:ring-primary rounded-md"
            placeholder="Your email"
          />
          {errors.email && (
            <p className="text-red-300 text-sm">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Project Type
        </label>
        <input
          {...register("subject")}
          className="w-full px-3 py-2 bg-white/10 border-0 text-white placeholder-white/50 focus:ring-1 focus:ring-primary rounded-md"
          placeholder="AI Product Strategy, ML Implementation, UX Research, Data Analytics..."
        />
        {errors.subject && (
          <p className="text-red-300 text-sm">{errors.subject.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Tell me about your challenge
        </label>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full px-3 py-2 bg-white/10 border-0 text-white placeholder-white/50 resize-none focus:ring-1 focus:ring-primary rounded-md"
          placeholder="What AI/ML product challenge are you facing? Whether it's building ML models, designing AI experiences, or analyzing user data, I'd love to understand your technical and user challenges..."
        />
        {errors.message && (
          <p className="text-red-300 text-sm">{errors.message.message}</p>
        )}
      </div>
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full rounded-full px-8 font-medium shadow-md hover:shadow-lg transition-all"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
      
      {/* reCAPTCHA notice */}
      {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && 
       process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY !== 'REPLACE_WITH_YOUR_SITE_KEY' && (
        <p className="text-xs text-white/60 text-center">
          This site is protected by reCAPTCHA and the Google{' '}
          <a href="https://policies.google.com/privacy" className="underline hover:text-white/80" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="https://policies.google.com/terms" className="underline hover:text-white/80" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>{' '}
          apply.
        </p>
      )}
    </form>
  )
} 