'use client'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { X } from 'lucide-react'
import Button from '../Button'

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  name: string
  email: string
  company: string
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.email) {
      alert('Email is required')
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call - replace with your actual endpoint
      console.log('Waitlist signup data:', formData)
      
      // Here you would typically make an API call:
      // const response = await fetch('/api/waitlist', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })

      // Simulate successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your information. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setIsSubmitted(false)
    setFormData({ name: '', email: '', company: '' })
    onClose()
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-3xl glass-card border border-white/20 p-8 text-left align-middle shadow-glow-lg transition-all">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <Dialog.Title as="h3" className="text-3xl font-bold gradient-text mb-2">
                      {isSubmitted ? 'Welcome to the Waitlist!' : 'Get Early Access'}
                    </Dialog.Title>
                    {!isSubmitted && (
                      <p className="text-text-secondary">Join the future of engineering intelligence</p>
                    )}
                  </div>
                  <button
                    onClick={handleClose}
                    className="text-text-secondary hover:text-text-primary transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-white/10"
                    aria-label="Close modal"
                  >
                    <X size={28} />
                  </button>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-gradient-stellar rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold gradient-text-primary mb-4">
                      Thanks for joining!
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      You'll receive occasional insights on AI-native engineering leadership and be the first to know when we launch to the public.
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-text-secondary mb-8 leading-relaxed">
                      Be the first to know when we launch to the public. We'll also share occasional insights on AI-native engineering leadership.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all duration-300 hover:bg-white/10"
                        />
                      </div>
                      
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your email address*"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all duration-300 hover:bg-white/10"
                        />
                      </div>
                      
                      <div>
                        <input
                          type="text"
                          name="company"
                          placeholder="Company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all duration-300 hover:bg-white/10"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting || !formData.email}
                        className="w-full py-4 text-lg"
                      >
                        {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                      </Button>
                    </form>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}