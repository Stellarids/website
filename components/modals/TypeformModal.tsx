'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { X } from 'lucide-react'

interface TypeformModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TypeformModal({ isOpen, onClose }: TypeformModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
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
              <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-3xl glass-card border border-white/20 p-8 text-left align-middle shadow-glow-lg transition-all">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <Dialog.Title as="h3" className="text-3xl font-bold gradient-text mb-2">
                      Join Our Waitlist
                    </Dialog.Title>
                    <p className="text-text-secondary">Be the first to know when we launch</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-text-secondary hover:text-text-primary transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-white/10"
                    aria-label="Close modal"
                  >
                    <X size={28} />
                  </button>
                </div>

                <div className="w-full h-[650px] rounded-2xl overflow-hidden border border-white/10 shadow-glass">
                  <iframe
                    src="https://form.typeform.com/to/f1DOq6JT"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Join Waitlist"
                    className="rounded-2xl"
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}