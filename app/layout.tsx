import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StellarID - Engineering Intelligence Platform',
  description: 'Transform your engineering process from a black box into actionable intelligence. Get real-time insights from your code repositories and project management tools.',
  keywords: 'engineering, developer tools, AI, code review, team productivity, StellarID',
  authors: [{ name: 'StellarID Team' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'StellarID - Engineering Intelligence Platform',
    description: 'Transform your engineering process from a black box into actionable intelligence.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StellarID - Engineering Intelligence Platform',
    description: 'Transform your engineering process from a black box into actionable intelligence.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-inter bg-dark-bg text-text-primary antialiased">
        {children}
      </body>
    </html>
  )
}