'use client'

import { useState, useEffect } from 'react'
import Button from './Button'

interface NavbarProps {
  onDesignPartnerClick: () => void
}

export default function Navbar({ onDesignPartnerClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-card border-b border-white/10 shadow-glow' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold gradient-text tracking-tight">
              StellarID
            </h1>
          </div>

          {/* CTA Button */}
          <div>
            <Button onClick={onDesignPartnerClick} className="text-sm px-4">
              Become a Design Partner
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}