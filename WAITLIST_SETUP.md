# Waitlist Integration Setup Guide

This guide shows you how to set up different services to store waitlist responses and get notifications.

## Environment Variables

Create a `.env.local` file in your project root with the following variables (choose the services you want to use):

```bash
# === AIRTABLE INTEGRATION ===
# Get these from: https://airtable.com/developers/web/api/introduction
AIRTABLE_API_KEY=your_airtable_personal_access_token
AIRTABLE_BASE_ID=your_base_id

# === GOOGLE SHEETS INTEGRATION ===
# Create a Google Apps Script web app that accepts POST requests
GOOGLE_SHEETS_URL=your_google_apps_script_web_app_url

# === EMAIL NOTIFICATIONS (Resend) ===
# Get API key from: https://resend.com/
RESEND_API_KEY=your_resend_api_key

# === SLACK NOTIFICATIONS ===
# Create an incoming webhook: https://api.slack.com/messaging/webhooks
SLACK_WEBHOOK_URL=your_slack_webhook_url
```

## Setup Instructions

### 1. Airtable (Recommended - Easy to use)

1. Go to [Airtable](https://airtable.com) and create a new base
2. Create a table called "Waitlist" with these columns:
   - Name (Single line text)
   - Email (Email)
   - Company (Single line text)
   - Submitted At (Date & time)
3. Go to [Airtable API](https://airtable.com/developers/web/api/introduction)
4. Create a personal access token with read/write permissions
5. Get your Base ID from the API documentation
6. Add the credentials to your `.env.local`

### 2. Google Sheets (Free option)

1. Create a new Google Sheet
2. Add headers: Name, Email, Company, Timestamp
3. Go to [Google Apps Script](https://script.google.com)
4. Create a new project and paste this code:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.name,
      data.email,
      data.company,
      data.timestamp
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

5. Replace `YOUR_SHEET_ID` with your actual Sheet ID
6. Deploy as web app with "Anyone" access
7. Copy the web app URL to your `.env.local`

### 3. Email Notifications with Resend (Recommended)

1. Sign up at [Resend](https://resend.com)
2. Create an API key
3. Verify your domain (or use their test domain for development)
4. Add your API key to `.env.local`
5. Update the email addresses in the API route

### 4. Slack Notifications

1. Go to your Slack workspace
2. Create a new app at [Slack API](https://api.slack.com/apps)
3. Enable "Incoming Webhooks"
4. Create a webhook for your desired channel
5. Copy the webhook URL to your `.env.local`

## Alternative Services

### Supabase (Full Database)
```bash
npm install @supabase/supabase-js
```

### Notion Database
```bash
npm install @notionhq/client
```

### Simple Email with Nodemailer
```bash
npm install nodemailer
```

## Testing

After setting up any service, test it by:

1. Starting your development server: `npm run dev`
2. Opening the waitlist modal
3. Submitting a test entry
4. Checking your chosen service for the data

## Production Deployment

Remember to:
1. Add environment variables to your hosting platform (Vercel, Netlify, etc.)
2. Update email domains in the API route
3. Set up proper error monitoring
4. Consider rate limiting for the API endpoint

## Service Recommendations by Use Case

- **Just starting out**: Google Sheets (free, easy to view)
- **Small business**: Airtable (great UI, easy to manage)
- **Need automation**: Supabase or Notion (powerful integrations)
- **High volume**: PostgreSQL + Supabase (scalable)

The current implementation supports multiple services simultaneously, so you can start with one and add others later! 