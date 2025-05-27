import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
  // Honeypot field - should be empty
  website: z.string().optional(),
  // recaptchaToken: z.string().optional(), // Removed
})

// Simple in-memory rate limiting (use Redis in production)
const rateLimit = new Map<string, { count: number; resetTime: number }>()

function getRateLimitKey(request: NextRequest): string {
  // Use IP address or fallback to a default key
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0] : 
             request.headers.get('x-real-ip') || 
             'unknown'
  return ip
}

function checkRateLimit(key: string): { allowed: boolean; resetTime?: number } {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 3 // 3 requests per 15 minutes
  
  const current = rateLimit.get(key)
  
  if (!current || now > current.resetTime) {
    // First request or window expired
    rateLimit.set(key, { count: 1, resetTime: now + windowMs })
    return { allowed: true }
  }
  
  if (current.count >= maxRequests) {
    return { allowed: false, resetTime: current.resetTime }
  }
  
  // Increment count
  rateLimit.set(key, { count: current.count + 1, resetTime: current.resetTime })
  return { allowed: true }
}

function validateOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin')
  const referer = request.headers.get('referer')
  
  // Get allowed origins from environment or use defaults
  const allowedOriginsEnv = process.env.ALLOWED_ORIGINS || 
    'http://localhost:3000,http://localhost:3001,http://localhost:3002'
  const allowedOrigins = allowedOriginsEnv.split(',').map(o => o.trim())
  
  // Check origin first, then referer as fallback
  const requestOrigin = origin || (referer ? new URL(referer).origin : null)
  
  if (!requestOrigin) {
    console.log('No origin or referer header found')
    return false
  }
  
  return allowedOrigins.some(allowed => requestOrigin.startsWith(allowed))
}

// async function verifyRecaptcha(token: string): Promise<{ success: boolean; score?: number }> { // Removed
// try {
// const secretKey = process.env.RECAPTCHA_SECRET_KEY
// 
// if (!secretKey || secretKey === 'REPLACE_WITH_YOUR_SECRET_KEY') {
// console.log('reCAPTCHA secret key not configured, skipping verification')
// return { success: true }
// }
// 
// const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
// method: 'POST',
// headers: {
// 'Content-Type': 'application/x-www-form-urlencoded',
// },
// body: `secret=${secretKey}&response=${token}`,
// })
// 
// const data = await response.json()
// console.log('reCAPTCHA verification result:', data)
// 
// const minScore = 0.5
// const isValidScore = !data.score || data.score >= minScore
// 
// return {
// success: data.success && isValidScore,
// score: data.score,
// }
// } catch (error) {
// console.error('reCAPTCHA verification error:', error)
// return { success: false }
// }
// }

export async function POST(request: NextRequest) {
  try {
    // 1. Rate Limiting
    const rateLimitKey = getRateLimitKey(request)
    const rateCheck = checkRateLimit(rateLimitKey)
    
    if (!rateCheck.allowed) {
      console.log(`Rate limit exceeded for ${rateLimitKey}`)
      return NextResponse.json(
        { 
          success: false, 
          message: 'Too many requests. Please try again later.',
          retryAfter: rateCheck.resetTime 
        },
        { status: 429 }
      )
    }

    // 2. Origin Validation
    if (!validateOrigin(request)) {
      console.log('Invalid origin:', request.headers.get('origin'))
      return NextResponse.json(
        { success: false, message: 'Invalid request origin' },
        { status: 403 }
      )
    }

    // 3. Parse and validate request body
    const body = await request.json()
    const { name, email, subject, message, website } = contactFormSchema.parse(body) // Removed recaptchaToken

    // 4. reCAPTCHA Verification - Removed
    // if (recaptchaToken) { 
    //   const recaptchaResult = await verifyRecaptcha(recaptchaToken)
    //   if (!recaptchaResult.success) {
    //     console.log('reCAPTCHA verification failed:', { score: recaptchaResult.score })
    //     return NextResponse.json(
    //       { success: false, message: 'Security verification failed' },
    //       { status: 403 }
    //     )
    //   }
    //   console.log('reCAPTCHA verification passed:', { score: recaptchaResult.score })
    // }

    // 5. Honeypot check (if website field is filled, it's likely a bot)
    if (website && website.trim() !== '') {
      console.log('Honeypot triggered:', { name, email, website })
      // Return success to not tip off the bot, but don't actually send email
      return NextResponse.json({ 
        success: true, 
        message: 'Message sent successfully!' 
      })
    }

    // 6. Additional content validation
    const suspiciousPatterns = [
      /http[s]?:\/\//i, // URLs in message
      /\b(viagra|casino|loan|crypto|bitcoin)\b/i, // Common spam words
      /(.)\1{10,}/, // Repeated characters
    ]

    const content = `${name} ${email} ${subject} ${message}`.toLowerCase()
    const isSuspicious = suspiciousPatterns.some(pattern => pattern.test(content))

    if (isSuspicious) {
      console.log('Suspicious content detected:', { name, email, subject })
      // Log but still process - you can decide to block or just flag
    }

    console.log('Processing contact form submission...')
    console.log('Environment check:', {
      hasResendKey: !!process.env.RESEND_API_KEY,
      resendFrom: process.env.RESEND_FROM,
      contactEmail: process.env.CONTACT_EMAIL
    })

    // Option 1: If you have Nodemailer set up
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      console.log('Using SMTP option...')
      const nodemailer = require('nodemailer')
      
      const transporter = nodemailer.createTransporter({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.CONTACT_EMAIL || 'kaixiang.huang@columbia.edu',
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Project Type:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          ${isSuspicious ? '<p><strong>⚠️ FLAGGED AS SUSPICIOUS</strong></p>' : ''}
        `,
        replyTo: email,
      })

      return NextResponse.json({ success: true, message: 'Email sent successfully' })
    }

    // Option 2: If you have Resend API key
    if (process.env.RESEND_API_KEY) {
      console.log('Using Resend option...')
      
      const resendPayload = {
        from: process.env.RESEND_FROM || 'onboarding@resend.dev',
        to: [process.env.CONTACT_EMAIL || 'kaixiang.huang@columbia.edu'],
        subject: `Portfolio Contact: ${subject}${isSuspicious ? ' [SUSPICIOUS]' : ''}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Project Type:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          ${isSuspicious ? '<p><strong>⚠️ FLAGGED AS SUSPICIOUS</strong></p>' : ''}
          <hr>
          <p><small>IP: ${rateLimitKey} | Time: ${new Date().toISOString()}</small></p>
        `,
        reply_to: [email],
      }

      console.log('Resend payload:', resendPayload)

      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resendPayload),
      })

      console.log('Resend response status:', response.status)
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error('Resend API error:', errorText)
        throw new Error(`Resend API error: ${response.status} ${errorText}`)
      }

      const responseData = await response.json()
      console.log('Resend success:', responseData)

      return NextResponse.json({ success: true, message: 'Email sent successfully via Resend' })
    }

    // Option 3: If you have SendGrid API key
    if (process.env.SENDGRID_API_KEY) {
      console.log('Using SendGrid option...')
      const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [{
            to: [{ email: process.env.CONTACT_EMAIL || 'kaixiang.huang@columbia.edu' }],
            subject: `Portfolio Contact: ${subject}`,
          }],
          from: { email: process.env.SENDGRID_FROM || 'noreply@yourdomain.com' },
          content: [{
            type: 'text/html',
            value: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Project Type:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, '<br>')}</p>
              ${isSuspicious ? '<p><strong>⚠️ FLAGGED AS SUSPICIOUS</strong></p>' : ''}
            `,
          }],
          reply_to: { email },
        }),
      })

      if (response.ok) {
        return NextResponse.json({ success: true, message: 'Email sent successfully' })
      }
    }

    // Option 4: Log to console and file (for development)
    console.log('Falling back to console logging - no email service configured properly')
    console.log('Contact Form Submission:', { name, email, subject, message })
    
    // You could also save to a database here
    // await db.contactSubmissions.create({ data: { name, email, subject, message } })

    return NextResponse.json({ 
      success: true, 
      message: 'Message received and logged. Please check your email client.' 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    
    // Different error messages for different types of errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Invalid form data provided' },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { success: false, message: 'Failed to process your message' },
      { status: 500 }
    )
  }
} 