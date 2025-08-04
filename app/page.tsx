'use client'

import { useState } from 'react'
import { Clock, AlertTriangle, TrendingUp, Zap, Shield, BarChart3, Users, Code, Target } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import CalendlyModal from '@/components/modals/CalendlyModal'
import WaitlistModal from '@/components/modals/WaitlistModal'

export default function Home() {
  const [isCalendlyModalOpen, setIsCalendlyModalOpen] = useState(false)
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)

  const openCalendlyModal = () => setIsCalendlyModalOpen(true)
  const closeCalendlyModal = () => setIsCalendlyModalOpen(false)
  
  const openWaitlistModal = () => setIsWaitlistModalOpen(true)
  const closeWaitlistModal = () => setIsWaitlistModalOpen(false)

  return (
    <>
      <Navbar onDesignPartnerClick={openCalendlyModal} />
      
      <main className="min-h-screen relative">
        {/* Floating Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-primary rounded-full opacity-5 blur-3xl floating-element"></div>
          <div className="absolute top-60 right-20 w-96 h-96 bg-gradient-secondary rounded-full opacity-5 blur-3xl floating-element" style={{ animationDelay: '-2s' }}></div>
          <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-gradient-accent rounded-full opacity-5 blur-3xl floating-element" style={{ animationDelay: '-4s' }}></div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-40 pb-32 px-6 sm:px-8 lg:px-12 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Main Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-card border border-white/10 rounded-full mb-8 backdrop-blur-sm">
                  <Zap className="w-4 h-4 text-accent-cyan mr-2" />
                  <span className="text-sm text-text-secondary">Engineering Intelligence Platform</span>
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                  Your engineering process is a{' '}
                  <span className="text-text-secondary">black box.</span>
                  <br />
                  <span className="gradient-text">We provide the flashlight.</span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-text-secondary mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Stop managing your team with gut feel and stale project dashboards. We deliver qualitative, 
                  real-time insights to help you <span className="gradient-text-primary font-semibold">unblock your team</span>, 
                  <span className="gradient-text-secondary font-semibold"> improve velocity</span>, and understand 
                  the true impact of AI on your codebase.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-12">
                  <Button onClick={openCalendlyModal} className="text-lg px-10 py-5 shadow-glow-lg">
                    Become a Design Partner
                  </Button>
                  
                  <button 
                    onClick={openWaitlistModal}
                    className="group text-text-secondary hover:text-text-primary transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="underline-offset-4 group-hover:underline">Join our private waitlist</span>
                    <Target className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 text-text-muted text-sm">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-accent-cyan" />
                    <span>SOC 2 Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-accent-purple" />
                    <span>50+ Engineering Teams</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-accent-pink" />
                    <span>Real-time Analytics</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Visual Element */}
              <div className="relative lg:block hidden">
                <div className="relative">
                  {/* Main gradient orb */}
                  <div className="w-96 h-96 bg-gradient-stellar rounded-full opacity-20 blur-3xl floating-element mx-auto"></div>
                  
                  {/* Floating cards */}
                  <div className="absolute inset-0">
                    <div className="absolute top-8 left-8 glass-card p-6 max-w-xs floating-element">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                          <Code className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-semibold">Code Review Alert</span>
                      </div>
                      <p className="text-xs text-text-secondary">PR #456 needs review from @platform-team</p>
                    </div>

                    <div className="absolute bottom-8 right-8 glass-card p-6 max-w-xs floating-element" style={{ animationDelay: '-3s' }}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-warm rounded-lg flex items-center justify-center">
                          <BarChart3 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-semibold">Velocity Insight</span>
                      </div>
                      <p className="text-xs text-text-secondary">Team velocity up 23% this sprint</p>
                    </div>

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 glass-card p-6 max-w-xs floating-element" style={{ animationDelay: '-1s' }}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-secondary rounded-lg flex items-center justify-center">
                          <AlertTriangle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-semibold">AI Risk Warning</span>
                      </div>
                      <p className="text-xs text-text-secondary">GPLv3 license detected in AI suggestion</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="relative py-32 px-6 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="section-heading gradient-text mb-8">
                You have the best engineers.<br />
                <span className="text-text-primary">Why is their time wasted?</span>
              </h2>
              <p className="section-subheading max-w-3xl mx-auto">
                Your team is brilliant, but their velocity is getting crushed by hidden friction in your 
                development process. <span className="text-text-primary font-semibold">You know the feeling:</span>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="gradient-border p-8 group hover:shadow-glow transition-all duration-500">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Code reviews are a black hole</h3>
                <p className="text-text-secondary leading-relaxed text-center">
                  Critical PRs sit idle for days, blocking your most important projects, but you don't 
                  know why or who to nudge.
                </p>
              </div>

              <div className="gradient-border p-8 group hover:shadow-glow transition-all duration-500">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-warm rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">You're flying blind on team health</h3>
                <p className="text-text-secondary leading-relaxed text-center">
                  You can't tell the difference between a team that is highly engaged and one that is 
                  silently burning out until it's too late.
                </p>
              </div>

              <div className="gradient-border p-8 group hover:shadow-glow transition-all duration-500">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-secondary rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">AI is a wild card</h3>
                <p className="text-text-secondary leading-relaxed text-center">
                  You've invested in AI tools, but you have no real data on whether they are creating 
                  high-quality code or just creating more rework and hidden risks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="relative py-32 px-6 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="section-heading mb-8">
                Move from <span className="text-text-secondary">raw data</span> to{' '}
                <span className="gradient-text">actionable intelligence</span>
              </h2>
              <p className="section-subheading max-w-4xl mx-auto">
                Existing tools give you endless dashboards. We give you answers, delivered proactively 
                into your team's workflow. We connect the dots between your development activity and 
                project tickets to provide a new layer of intelligence.
              </p>
            </div>

            <div className="space-y-16">
              {/* Insight Example 1 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6">
                    <span className="gradient-text-primary">Uncover</span> Hidden Bottlenecks
                  </h3>
                  <div className="glass-card p-8 border-l-4 border-accent-cyan">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-accent-cyan mb-2">Insight Alert</h4>
                        <p className="text-text-secondary italic leading-relaxed">
                          "PR #456 has been waiting for review for 3 days. Our analysis shows the best 
                          reviewers are on the '@platform-infra' team, who are currently overloaded with 5 other 
                          high-priority reviews. <span className="text-text-primary font-medium">Suggestion: Consider assigning a secondary reviewer from the 
                          '@backend-guild' to unblock this.</span>"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="glass-card p-8 bg-gradient-to-br from-accent-cyan/10 to-transparent">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                        <span className="text-sm">Review Queue</span>
                        <span className="text-accent-cyan font-bold">5 PRs</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                        <span className="text-sm">Avg Review Time</span>
                        <span className="text-accent-pink font-bold">3.2 days</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                        <span className="text-sm">Available Reviewers</span>
                        <span className="text-accent-purple font-bold">@backend-guild</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Insight Example 2 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative">
                  <div className="glass-card p-8 bg-gradient-to-br from-accent-purple/10 to-transparent">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                        <span className="text-sm">AI-Generated Code</span>
                        <span className="text-accent-cyan font-bold">67%</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                        <span className="text-sm">Rework Rate</span>
                        <span className="text-accent-pink font-bold">+35%</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                        <span className="text-sm">Quality Score</span>
                        <span className="text-text-muted font-bold">Needs Context</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-3xl font-bold mb-6">
                    <span className="gradient-text-secondary">Understand</span> AI-Generated Quality
                  </h3>
                  <div className="glass-card p-8 border-l-4 border-accent-purple">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-gradient-warm rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <BarChart3 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-accent-purple mb-2">Quality Analysis</h4>
                        <p className="text-text-secondary italic leading-relaxed">
                          "The code generated by Copilot for ticket #PROJ-123 has a 35% higher rework 
                          rate than human-written code in the same service. <span className="text-text-primary font-medium">Suggestion: The initial prompts may 
                          require more context about the existing architecture.</span>"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Insight Example 3 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6">
                    <span className="gradient-text">Mitigate</span> Hidden AI Risks
                  </h3>
                  <div className="glass-card p-8 border-l-4 border-accent-pink">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-accent-pink mb-2">Security Warning</h4>
                        <p className="text-text-secondary italic leading-relaxed">
                          "A new dependency suggested by an AI tool in PR #789 has a GPLv3 license, 
                          which is incompatible with your company's compliance policy. <span className="text-text-primary font-medium">Suggestion: Find an 
                          MIT-licensed alternative like 'awesome-lib-mit'.</span>"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="glass-card p-8 bg-gradient-to-br from-accent-pink/10 to-transparent">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                        <span className="text-sm">License Compliance</span>
                        <span className="text-accent-pink font-bold">GPLv3 Risk</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                        <span className="text-sm">Suggested Alternative</span>
                        <span className="text-accent-cyan font-bold">MIT License</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                        <span className="text-sm">Risk Level</span>
                        <span className="text-accent-purple font-bold">High</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Partner Program Section */}
        <section className="relative py-32 px-6 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-heading mb-8">
                <span className="gradient-text">Build the future</span> with us
              </h2>
              <p className="section-subheading max-w-4xl mx-auto">
                We are inviting a small group of <span className="text-text-primary font-bold">five forward-thinking engineering leaders</span> to join our 
                founding design partner program. As a partner, you will work directly with our founders 
                to shape the roadmap of a category-defining product.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 mb-16">
              {/* What you get */}
              <div className="glass-card p-10 gradient-border">
                <h3 className="text-3xl font-bold mb-8 text-center">
                  <span className="gradient-text-primary">What you get</span>
                </h3>
                <ul className="space-y-6">
                  {[
                    "Exclusive early access to our platform during development",
                    "Direct input on feature prioritization and product roadmap",
                    "Monthly strategy sessions with our founding team",
                    "Significantly discounted pricing for the first two years",
                    "Co-marketing opportunities and case study development"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <div className="w-6 h-6 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-text-secondary group-hover:text-text-primary transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who we're looking for */}
              <div className="glass-card p-10 gradient-border">
                <h3 className="text-3xl font-bold mb-8 text-center">
                  <span className="gradient-text-secondary">Who we're looking for</span>
                </h3>
                <ul className="space-y-6">
                  {[
                    "Engineering leaders at companies with 50+ engineers",
                    "Teams actively using AI coding tools (GitHub Copilot, etc.)",
                    "Organizations struggling with engineering velocity and visibility",
                    "Leaders interested in data-driven engineering management",
                    "Teams willing to provide feedback and iterate with us"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <div className="w-6 h-6 bg-gradient-warm rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-text-secondary group-hover:text-text-primary transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center glass-card p-12 gradient-border">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-3xl font-bold mb-6">Ready to transform your engineering process?</h3>
                <p className="text-text-secondary mb-8 text-lg">
                  Join an exclusive group of engineering leaders shaping the future of development intelligence.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Button onClick={openCalendlyModal} className="text-lg px-10 py-5 shadow-glow-lg">
                    Schedule a 20-Minute Intro Call
                  </Button>
                  
                  <button 
                    onClick={openWaitlistModal}
                    className="group text-text-secondary hover:text-text-primary transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="underline-offset-4 group-hover:underline">Or, join our private waitlist</span>
                    <Target className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Modals */}
      <CalendlyModal 
        isOpen={isCalendlyModalOpen} 
        onClose={closeCalendlyModal} 
      />
      
      <WaitlistModal 
        isOpen={isWaitlistModalOpen} 
        onClose={closeWaitlistModal} 
      />
    </>
  )
}