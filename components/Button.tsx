'use client'

import { ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
}

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  type = 'button',
  disabled = false,
  className 
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'font-semibold transition-all duration-300',
        {
          'btn-primary group': variant === 'primary',
          'btn-secondary': variant === 'secondary',
          'opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-none': disabled,
        },
        className
      )}
    >
      {children}
    </button>
  )
}