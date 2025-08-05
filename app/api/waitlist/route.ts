import { NextRequest, NextResponse } from 'next/server'

interface WaitlistData {
  name: string
  email: string
  company: string
}

// Email notification using Resend
async function sendEmailNotification(data: WaitlistData) {
  if (!process.env.RESEND_API_KEY) {
    console.log('Resend API key not configured')
    return
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'waitlist@resend.dev', // Using Resend's test domain - replace with your verified domain
        to: ['rahul@stellarid.xyz'], // Replace with your actual email
        subject: 'New Waitlist Signup!',
        html: `
          <h2>New Waitlist Signup</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Company:</strong> ${data.company}</p>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        `
      })
    })

    if (!response.ok) {
      throw new Error(`Resend API error: ${response.status}`)
    }

    console.log('Email notification sent')
  } catch (error) {
    console.error('Error sending email:', error)
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: WaitlistData = await request.json()

    // Validate required fields
    if (!data.email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Send email notification
    await sendEmailNotification(data)

    return NextResponse.json(
      { message: 'Successfully added to waitlist' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing waitlist signup:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 