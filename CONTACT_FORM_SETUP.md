# Contact Form Setup Guide

Your contact form is now fully functional with multiple email service options! Here's how to set it up:

## Features
- ✅ Form validation using React Hook Form + Zod
- ✅ Multiple email service integrations
- ✅ Fallback to mailto: if no email service is configured
- ✅ Toast notifications for user feedback
- ✅ Loading states and error handling

## Email Service Options

### Option 1: Resend (Recommended)
Resend is a modern email API that's easy to set up:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to your `.env.local`:
```
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM=onboarding@yourdomain.com
CONTACT_EMAIL=your-email@yourdomain.com
```

### Option 2: SMTP (Gmail, Outlook, etc.)
If you want to use a regular email account:

1. For Gmail, enable 2FA and create an App Password
2. Add to your `.env.local`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
CONTACT_EMAIL=your-email@gmail.com
```

### Option 3: SendGrid
If you prefer SendGrid:

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get your API key
3. Add to your `.env.local`:
```
SENDGRID_API_KEY=SG.your_api_key_here
SENDGRID_FROM=noreply@yourdomain.com
CONTACT_EMAIL=your-email@yourdomain.com
```

### Option 4: No Configuration (Fallback)
If no email service is configured, the form will:
- Log submissions to the console (for development)
- Open the user's default email client with a pre-filled message

## Installation Requirements

You'll need to install the email service package if you choose SMTP:

```bash
npm install nodemailer
npm install @types/nodemailer --save-dev
```

For Resend and SendGrid, no additional packages are needed (uses fetch API).

## Testing

1. Start your development server: `npm run dev`
2. Fill out the contact form
3. Check your email or console logs

## Customization

You can customize the form by editing:
- `components/contact-form.tsx` - Form component and validation
- `app/api/contact/route.ts` - Email sending logic
- Form styling in the component's className props

## Security Notes

- Never commit your `.env.local` file
- Use environment variables for all sensitive data
- The API route validates all input using Zod schemas
- CORS is handled automatically by Next.js API routes 