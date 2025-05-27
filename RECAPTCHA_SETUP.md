# 🔒 Google reCAPTCHA v3 Setup Guide

Your contact form now includes **Google reCAPTCHA v3** for advanced bot protection! This is **invisible to users** and provides seamless security.

## 🎯 What reCAPTCHA v3 Does

- ✅ **Invisible protection** - No user interaction required
- ✅ **AI-powered bot detection** - Uses machine learning to detect bots
- ✅ **Risk scoring** - Gives each request a score from 0.0 (bot) to 1.0 (human)
- ✅ **Adaptive security** - Learns and improves over time

## 🚀 Setup Steps

### Step 1: Get reCAPTCHA Keys

1. **Go to [Google reCAPTCHA Console](https://www.google.com/recaptcha/admin/create)**
2. **Fill out the form:**
   - **Label**: Your Portfolio Contact Form
   - **reCAPTCHA type**: reCAPTCHA v3
   - **Domains**: 
     - `localhost` (for development)
     - `yourdomain.com` (your production domain)
     - `www.yourdomain.com` (if using www)
3. **Accept the Terms of Service**
4. **Click Submit**

### Step 2: Copy Your Keys

You'll get two keys:
- **Site Key** (starts with `6L...`) - This is public
- **Secret Key** (starts with `6L...`) - This is private

### Step 3: Update Your Environment

Edit your `.env.local` file:

```env
# Replace with your actual keys from Google reCAPTCHA Console
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LcYourSiteKeyHere
RECAPTCHA_SECRET_KEY=6LcYourSecretKeyHere
```

### Step 4: Test the Integration

1. **Restart your dev server**: `npm run dev`
2. **Submit the contact form**
3. **Check the browser console** for: `reCAPTCHA token generated successfully`
4. **Check your terminal** for: `reCAPTCHA verification passed: { score: 0.9 }`

## 🔧 Configuration Options

### Score Threshold

The current minimum score is **0.5** (adjustable in `app/api/contact/route.ts`):

```typescript
const minScore = 0.5 // Adjust this threshold as needed
```

**Score Guide:**
- `1.0` = Very likely human
- `0.9` = Likely human  
- `0.7` = Neutral
- `0.5` = **Current threshold**
- `0.3` = Suspicious
- `0.0` = Very likely bot

### Badge Position

The reCAPTCHA badge position can be changed in `components/recaptcha-provider.tsx`:

```typescript
parameters: {
  badge: 'bottomright', // 'bottomleft', 'bottomright', or 'inline'
  theme: 'dark', // 'light' or 'dark'
}
```

## 🧪 Testing Your Setup

### Test 1: Verify reCAPTCHA is Loading
1. **Open browser dev tools** (F12)
2. **Go to Network tab**
3. **Reload your page**
4. **Look for requests to** `google.com/recaptcha`

### Test 2: Check Token Generation
1. **Open browser console** (F12 → Console)
2. **Submit the contact form**
3. **Look for**: `reCAPTCHA token generated successfully`

### Test 3: Verify Server-Side Validation
1. **Submit the form**
2. **Check your terminal/server logs**
3. **Look for**: 
   ```
   reCAPTCHA verification passed: { score: 0.9 }
   ```

### Test 4: Simulate Bot Behavior
To test if low scores are blocked:
1. **Temporarily lower the threshold** to `0.9` in the API route
2. **Submit multiple forms quickly**
3. **Should see "Security verification failed"**

## 🚨 Troubleshooting

### Issue: "reCAPTCHA execution failed"
**Causes:**
- Site key is incorrect
- Domain not registered in reCAPTCHA console
- Network/firewall blocking Google services

**Solution:**
1. Double-check your site key
2. Verify domain is added to reCAPTCHA console
3. Test on a different network

### Issue: "Security verification failed"
**Causes:**
- Secret key is incorrect
- Score below threshold
- reCAPTCHA API is down

**Solution:**
1. Verify your secret key
2. Check server logs for the actual score
3. Temporarily lower threshold for testing

### Issue: No reCAPTCHA badge visible
**This is normal for v3!** reCAPTCHA v3 is invisible. The badge only appears briefly.

### Issue: Form works without reCAPTCHA
**This is intentional!** If reCAPTCHA fails to load, the form still works for user experience.

## 📊 Monitoring & Analytics

### What Gets Logged
```javascript
// Success
reCAPTCHA verification passed: { score: 0.9 }

// Failure  
reCAPTCHA verification failed: { score: 0.3 }

// Error
reCAPTCHA verification error: Network timeout
```

### Email Indicators
- **[VERIFIED]** in subject line = reCAPTCHA passed
- **✅ reCAPTCHA VERIFIED** in email body
- **Score information** in logs

## 🔄 Production Considerations

### 1. Domain Configuration
When deploying, update your reCAPTCHA console:
- Add your production domain
- Remove `localhost` (optional)

### 2. Score Tuning
Monitor your scores for a few days, then adjust:
- **Too many false positives?** Lower the threshold (0.3)
- **Getting spam?** Raise the threshold (0.7)

### 3. Fallback Strategy
The form gracefully degrades:
1. **reCAPTCHA fails** → Still allows submission
2. **No keys configured** → Skips reCAPTCHA entirely
3. **Network issues** → Continues without verification

### 4. Rate Limiting Interaction
reCAPTCHA works **with** your other security:
- Rate limiting still applies
- Honeypot still active
- Content filtering still works
- Origin validation still enforced

## 🎯 Security Layers Summary

Your contact form now has **7 security layers**:

1. ✅ **Rate Limiting** (3 requests/15min)
2. ✅ **Origin Validation** (CSRF protection)  
3. ✅ **reCAPTCHA v3** (AI bot detection)
4. ✅ **Honeypot Field** (Simple bot trap)
5. ✅ **Content Filtering** (Spam pattern detection)
6. ✅ **Input Validation** (Data sanitization)
7. ✅ **Error Handling** (Information leak prevention)

## 🚀 Next Steps

1. **Get your reCAPTCHA keys** from Google Console
2. **Update your `.env.local`** with the real keys
3. **Test the form** and check logs
4. **Monitor scores** for a few days
5. **Adjust threshold** if needed
6. **Deploy** with confidence!

Your form is now **enterprise-grade secure** while maintaining excellent UX! 🎉 