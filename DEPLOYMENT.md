# Deployment Guide

This guide covers multiple ways to deploy your StellarID landing page to the internet.

## Quick Deploy Options

### 1. Vercel (Recommended - Easiest)

Vercel is the company behind Next.js and offers the best Next.js hosting experience.

1. **GitHub Setup**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/stellarid-landing.git
   git push -u origin main
   ```

2. **Deploy with Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "Import Project"
   - Select your repository
   - Vercel will auto-detect Next.js and deploy
   - Your site will be live in ~2 minutes!

### 2. Netlify

1. **Build the project locally** (requires Node.js):
   ```bash
   npm install
   npm run build
   ```

2. **Deploy**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder to Netlify
   - Or connect your GitHub repository

### 3. GitHub Pages + Static Export

For a static version (if you don't need server-side features):

1. **Modify `next.config.js`**:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   module.exports = nextConfig
   ```

2. **Build and deploy**:
   ```bash
   npm run build
   # Upload the 'out' folder to any static hosting
   ```

## Environment Setup (If needed locally)

### Install Node.js
1. Go to [nodejs.org](https://nodejs.org)
2. Download and install the LTS version
3. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### Run Locally
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Custom Domain Setup

### For Vercel:
1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### For Netlify:
1. Go to "Domain settings"
2. Add custom domain
3. Update DNS records

## Environment Variables

If you need to add environment variables (for form submissions, analytics, etc.):

### Vercel:
1. Go to Project Settings → Environment Variables
2. Add variables like:
   - `NEXT_PUBLIC_FORM_ENDPOINT`
   - `CALENDLY_ACCESS_TOKEN`

### Local development:
Create `.env.local`:
```
NEXT_PUBLIC_FORM_ENDPOINT=https://your-api.com/submit
CALENDLY_ACCESS_TOKEN=your_token_here
```

## Form Backend Setup

To make the waitlist form functional, you'll need a backend. Options:

### 1. Vercel Serverless Functions
Create `app/api/waitlist/route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  
  // Add your logic here (save to database, send email, etc.)
  console.log('Waitlist signup:', body)
  
  return NextResponse.json({ success: true })
}
```

### 2. External Services
- **Typeform**: Easy form builder with API
- **ConvertKit**: Email marketing with API
- **Airtable**: Database with API
- **Supabase**: Full backend as a service

### 3. Simple Email Integration
Use a service like EmailJS to send form data directly to your email.

## Performance Optimization

### Image Optimization
If you add images, use Next.js Image component:
```tsx
import Image from 'next/image'

<Image 
  src="/your-image.jpg" 
  alt="Description"
  width={500}
  height={300}
  priority 
/>
```

### Analytics
Add analytics by including scripts in `app/layout.tsx`:
```tsx
// Google Analytics
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
```

## SSL Certificate
All recommended platforms (Vercel, Netlify) provide free SSL certificates automatically.

## Monitoring
- **Vercel**: Built-in analytics and performance monitoring
- **Netlify**: Built-in form submissions and analytics
- **External**: Google Analytics, Plausible, or Fathom

## Support
- Vercel: Excellent Next.js support and documentation
- Netlify: Good for static sites, growing Next.js support
- GitHub Pages: Free but limited (static only)

Choose Vercel for the best Next.js experience and easiest deployment!