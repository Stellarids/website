'use client'

import Button from '../Button'

interface HeroSectionProps {
  onDesignPartnerClick: () => void
  onWaitlistClick: () => void
}

export default function HeroSection({ onDesignPartnerClick, onWaitlistClick }: HeroSectionProps) {
  return (
    <section className="pt-32 pb-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          Your engineering process is a black box.{' '}
          <span className="gradient-text">We provide the flashlight.</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-text-secondary mb-12 leading-relaxed max-w-3xl mx-auto">
          Stop managing your team with gut feel and stale project dashboards. We deliver qualitative, 
          real-time insights from your code repositories and project management tools to help you unblock 
          your team, improve velocity, and understand the true impact of AI on your codebase.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button onClick={onDesignPartnerClick} className="text-lg px-8 py-4">
            Become a Design Partner
          </Button>
          
          <button 
            onClick={onWaitlistClick}
            className="text-text-secondary hover:text-text-primary underline-offset-4 hover:underline transition-colors duration-300"
          >
            Not ready to partner? Join our private waitlist for future updates.
          </button>
        </div>
      </div>
    </section>
  )
}