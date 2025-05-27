import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = contactFormSchema.parse(body)

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
        to: process.env.CONTACT_EMAIL || 'hello@uxportfolio.com',
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Project Type:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
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
        to: [process.env.CONTACT_EMAIL || 'hello@uxportfolio.com'],
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Project Type:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
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
            to: [{ email: process.env.CONTACT_EMAIL || 'hello@uxportfolio.com' }],
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
    return NextResponse.json(
      { success: false, message: 'Failed to process your message' },
      { status: 500 }
    )
  }
} 