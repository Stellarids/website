"use client";

import { useState } from "react";
import {
    Clock,
    AlertTriangle,
    TrendingUp,
    Zap,
    Shield,
    BarChart3,
    Users,
    ClipboardCheck,
    Code,
    Target,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import CalendlyModal from "@/components/modals/CalendlyModal";
import WaitlistModal from "@/components/modals/WaitlistModal";

export default function Home() {
    const [isCalendlyModalOpen, setIsCalendlyModalOpen] = useState(false);
    const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
    const [activeInsight, setActiveInsight] = useState(0);

    const openCalendlyModal = () => setIsCalendlyModalOpen(true);
    const closeCalendlyModal = () => setIsCalendlyModalOpen(false);

    const openWaitlistModal = () => setIsWaitlistModalOpen(true);
    const closeWaitlistModal = () => setIsWaitlistModalOpen(false);

    const insights = [
        {
            title: "Unblock Your Team's Flow",
            gradient: "gradient-text-primary",
            icon: Zap,
            iconBg: "bg-gradient-accent",
            borderColor: "border-accent-cyan",
            accentColor: "text-accent-cyan",
            insight: {
                title: "Process Intelligence",
                content:
                    "Our platform analyzes your entire development lifecycle, from PR creation to deployment. We don't just show you data; we deliver actionable insights on the real process issues—from stale PRs to overloaded reviewers—directly into your workflow.",
            },
            metrics: [
                {
                    label: "Development Cycle",
                    value: "End-to-End",
                    color: "text-accent-cyan",
                },
                {
                    label: "Insight Delivery",
                    value: "Real-time",
                    color: "text-accent-pink",
                },
                {
                    label: "Action Focus",
                    value: "Workflow Integration",
                    color: "text-accent-purple",
                },
            ],
            bgGradient: "from-accent-cyan/10 to-transparent",
        },
        {
            title: "Supercharge Your 1-on-1s",
            gradient: "gradient-text-secondary",
            icon: ClipboardCheck,
            iconBg: "bg-gradient-gold",
            borderColor: "border-accent-gold",
            accentColor: "text-accent-gold",
            insight: {
                title: "1-on-1 Intelligence",
                content:
                    "Stop wasting your most important meetings on status updates. Our platform automatically prepares you for every 1-on-1 with data-driven talking points, highlighting recent wins, current blockers, and real coaching opportunities.",
            },
            metrics: [
                {
                    label: "Key Signals",
                    value: "Wins & Blockers",
                    color: "text-accent-cyan",
                },
                {
                    label: "Prep Time",
                    value: "Automated",
                    color: "text-accent-pink",
                },
                {
                    label: "Outcome",
                    value: "Coaching",
                    color: "text-accent-purple",
                },
            ],
            bgGradient: "from-accent-gold/10 to-transparent",
        },
        {
            title: "Separate AI Hype from AI Impact",
            gradient: "gradient-text-secondary",
            icon: BarChart3,
            iconBg: "bg-gradient-warm",
            borderColor: "border-accent-purple",
            accentColor: "text-accent-purple",
            insight: {
                title: "Quality Intelligence",
                content:
                    "Move beyond vanity metrics. We analyze what actually matters—like code churn and rework rates—to give you a clear, objective picture of the real-world quality and long-term maintenance cost of AI-generated code.",
            },
            metrics: [
                {
                    label: "Analysis Focus",
                    value: "Real Impact",
                    color: "text-accent-cyan",
                },
                {
                    label: "Quality Metrics",
                    value: "Code Churn",
                    color: "text-accent-pink",
                },
                {
                    label: "Long-term View",
                    value: "Tech Debt",
                    color: "text-accent-purple",
                },
            ],
            bgGradient: "from-accent-purple/10 to-transparent",
        },
        {
            title: "Your Guardrails for the AI Era",
            gradient: "gradient-text",
            icon: Shield,
            iconBg: "bg-gradient-secondary",
            borderColor: "border-accent-pink",
            accentColor: "text-accent-pink",
            insight: {
                title: "Risk Intelligence",
                content:
                    "Adopt AI with confidence. Our platform acts as an automated early warning system for the new, hidden risks of AI development—from subtle license compliance issues to security vulnerabilities unique to LLM-generated code.",
            },
            metrics: [
                {
                    label: "Risk Detection",
                    value: "Automated",
                    color: "text-accent-cyan",
                },
                {
                    label: "Coverage",
                    value: "AI-Specific",
                    color: "text-accent-pink",
                },
                {
                    label: "Protection",
                    value: "Early Warning",
                    color: "text-accent-purple",
                },
            ],
            bgGradient: "from-accent-pink/10 to-transparent",
        },
    ];

    const nextInsight = () => {
        setActiveInsight((prev) => (prev + 1) % insights.length);
    };

    const prevInsight = () => {
        setActiveInsight(
            (prev) => (prev - 1 + insights.length) % insights.length
        );
    };

    const goToInsight = (index: number) => {
        setActiveInsight(index);
    };

    return (
        <>
            <Navbar onDesignPartnerClick={openCalendlyModal} />

            <main className="min-h-screen relative">
                {/* Floating Background Elements */}
                <div className="fixed inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-primary rounded-full opacity-5 blur-3xl floating-element"></div>
                    <div
                        className="absolute top-60 right-20 w-96 h-96 bg-gradient-secondary rounded-full opacity-5 blur-3xl floating-element"
                        style={{ animationDelay: "-2s" }}
                    ></div>
                    <div
                        className="absolute bottom-40 left-1/3 w-80 h-80 bg-gradient-accent rounded-full opacity-5 blur-3xl floating-element"
                        style={{ animationDelay: "-4s" }}
                    ></div>
                </div>

                {/* Hero Section */}
                <section className="relative pt-40 pb-32 px-6 sm:px-8 lg:px-12 overflow-hidden">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Left Column - Main Content */}
                            <div className="text-center lg:text-left">
                                <div className="inline-flex items-center px-4 py-2 bg-gradient-card border border-white/10 rounded-full mb-8 backdrop-blur-sm">
                                    <Zap className="w-4 h-4 text-accent-cyan mr-2" />
                                    <span className="text-sm text-text-secondary">
                                        Engineering Intelligence Platform
                                    </span>
                                </div>

                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                                    Finally, Clarity for Your{" "}
                                    <span className="gradient-text">
                                        Engineering Team.
                                    </span>
                                </h1>

                                <p className="text-xl lg:text-2xl text-text-secondary mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                    We translate the chaos from your code
                                    repositories and project tools into clear,
                                    actionable insights. Understand your team&apos;s
                                    true velocity, fix hidden process issues,
                                    and get objective data on the impact of AI.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-12">
                                    <Button
                                        onClick={openCalendlyModal}
                                        className="text-lg px-10 py-5 shadow-glow-lg"
                                    >
                                        Schedule an Intro Call
                                    </Button>

                                    <button
                                        onClick={openWaitlistModal}
                                        className="group text-text-secondary hover:text-text-primary transition-all duration-300 flex items-center gap-2"
                                    >
                                        <span className="underline-offset-4 group-hover:underline">
                                            Join our private waitlist
                                        </span>
                                        <Target className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </div>
                            </div>

                            {/* Right Column - Visual Element */}
                            <div className="relative lg:block hidden">
                                <div className="relative">
                                    {/* Main gradient orb */}
                                    <div className="w-96 h-96 bg-gradient-stellar rounded-full opacity-20 blur-3xl floating-element mx-auto"></div>

                                    {/* Floating cards */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="grid grid-cols-2 gap-8 max-w-2xl">
                                            <div className="glass-card p-8 max-w-[320px] floating-element shadow-glow">
                                                <div className="flex items-center gap-4 mb-5">
                                                    <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                                                        <Code className="w-6 h-6 text-white" />
                                                    </div>
                                                    <span className="text-lg font-semibold text-text-primary">
                                                        Code Review Alert
                                                    </span>
                                                </div>
                                                <p className="text-base text-text-secondary leading-relaxed">
                                                    PR #456 is stalled. Suggesting alternate reviewer with context.
                                                </p>
                                            </div>

                                            <div
                                                className="glass-card p-8 max-w-[320px] floating-element shadow-glow"
                                                style={{ animationDelay: "-2s" }}
                                            >
                                                <div className="flex items-center gap-4 mb-5">
                                                    <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                                                        <ClipboardCheck className="w-6 h-6 text-white" />
                                                    </div>
                                                    <span className="text-lg font-semibold text-text-primary">
                                                        1-on-1 Talking Point
                                                    </span>
                                                </div>
                                                <p className="text-base text-text-secondary leading-relaxed">
                                                    Rahul&apos;s latest PR is blocked. A key topic for your meeting tomorrow.
                                                </p>
                                            </div>

                                            <div
                                                className="glass-card p-8 max-w-[320px] floating-element shadow-glow"
                                                style={{ animationDelay: "-1s" }}
                                            >
                                                <div className="flex items-center gap-4 mb-5">
                                                    <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                                                        <AlertTriangle className="w-6 h-6 text-white" />
                                                    </div>
                                                    <span className="text-lg font-semibold text-text-primary">
                                                        Compliance Risk Flagged
                                                    </span>
                                                </div>
                                                <p className="text-base text-text-secondary leading-relaxed">
                                                    AI-generated function matches a GPLv3 license. Legal review recommended.
                                                </p>
                                            </div>

                                            <div
                                                className="glass-card p-8 max-w-[320px] floating-element shadow-glow"
                                                style={{ animationDelay: "-3s" }}
                                            >
                                                <div className="flex items-center gap-4 mb-5">
                                                    <div className="w-10 h-10 bg-gradient-warm rounded-lg flex items-center justify-center">
                                                        <BarChart3 className="w-6 h-6 text-white" />
                                                    </div>
                                                    <span className="text-lg font-semibold text-text-primary">
                                                        Onboarding Accelerated
                                                    </span>
                                                </div>
                                                <p className="text-base text-text-secondary leading-relaxed">
                                                    AI tools have reduced new hire ramp-up time by 30% this quarter.
                                                </p>
                                            </div>
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
                                You have the best engineers.
                                <br />
                                <span className="text-text-primary">
                                    Why is their time wasted?
                                </span>
                            </h2>
                            <p className="section-subheading max-w-3xl mx-auto">
                                Your team is brilliant, but their velocity is
                                getting crushed by hidden friction in your
                                development process.{" "}
                                <span className="text-text-primary font-semibold">
                                    You know the feeling:
                                </span>
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="gradient-border p-8 group hover:shadow-glow transition-all duration-500">
                                <div className="flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <Clock className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-center">
                                    Code reviews are a black hole
                                </h3>
                                <p className="text-text-secondary leading-relaxed text-center">
                                    Critical PRs sit idle for days, blocking
                                    your most important projects, but you don&apos;t
                                    know why or who to nudge.
                                </p>
                            </div>
                            <div className="gradient-border p-8 group hover:shadow-glow transition-all duration-500">
                                <div className="flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <Clock className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-center">
                                    Your 1-on-1s are all status, no strategy
                                </h3>
                                <p className="text-text-secondary leading-relaxed text-center">
                                    You spend the first half just trying to
                                    figure out what they&apos;re working on, leaving
                                    no time for meaningful career conversations.
                                </p>
                            </div>

                            <div className="gradient-border p-8 group hover:shadow-glow transition-all duration-500">
                                <div className="flex items-center justify-center w-16 h-16 bg-gradient-warm rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <TrendingUp className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-center">
                                    You&apos;re flying blind on team health
                                </h3>
                                <p className="text-text-secondary leading-relaxed text-center">
                                    You can&apos;t tell the difference between a team
                                    that is highly engaged and one that is
                                    silently burning out until it&apos;s too late.
                                </p>
                            </div>

                            <div className="gradient-border p-8 group hover:shadow-glow transition-all duration-500">
                                <div className="flex items-center justify-center w-16 h-16 bg-gradient-secondary rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <AlertTriangle className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-center">
                                    AI is a wild card
                                </h3>
                                <p className="text-text-secondary leading-relaxed text-center">
                                    You&apos;ve invested in AI tools, but you have no
                                    real data on whether they are creating
                                    high-quality code or just creating more
                                    rework and hidden risks.
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
                                Move from{" "}
                                <span className="text-text-secondary">
                                    raw data
                                </span>{" "}
                                to{" "}
                                <span className="gradient-text">
                                    actionable intelligence
                                </span>
                            </h2>
                            <p className="section-subheading max-w-4xl mx-auto">
                                Existing tools give you endless dashboards. We
                                give you answers, delivered proactively into
                                your team&apos;s workflow. We connect the dots
                                between your development activity and project
                                tickets to provide a new layer of intelligence.
                            </p>
                        </div>

                        {/* Insights Carousel */}
                        <div className="relative">
                            {/* Navigation Dots */}
                            <div className="flex justify-center mb-12">
                                <div className="flex space-x-4">
                                    {insights.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToInsight(index)}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                                index === activeInsight
                                                    ? "bg-gradient-to-r from-accent-cyan to-accent-purple scale-125"
                                                    : "bg-white/20 hover:bg-white/40"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Carousel Container */}
                            <div className="relative overflow-hidden">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{
                                        transform: `translateX(-${
                                            activeInsight * 100
                                        }%)`,
                                    }}
                                >
                                    {insights.map((insight, index) => (
                                        <div
                                            key={index}
                                            className="w-full flex-shrink-0"
                                        >
                                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                                <div>
                                                    <h3 className="text-3xl font-bold mb-6">
                                                        <span
                                                            className={
                                                                insight.gradient
                                                            }
                                                        >
                                                            {
                                                                insight.title.split(
                                                                    " "
                                                                )[0]
                                                            }
                                                        </span>{" "}
                                                        {insight.title
                                                            .split(" ")
                                                            .slice(1)
                                                            .join(" ")}
                                                    </h3>
                                                    <div
                                                        className={`glass-card p-8 border-l-4 ${insight.borderColor}`}
                                                    >
                                                        <div className="flex items-start gap-4 mb-4">
                                                            <div
                                                                className={`w-10 h-10 ${insight.iconBg} rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}
                                                            >
                                                                <insight.icon className="w-5 h-5 text-white" />
                                                            </div>
                                                            <div>
                                                                <h4
                                                                    className={`font-semibold ${insight.accentColor} mb-2`}
                                                                >
                                                                    {
                                                                        insight
                                                                            .insight
                                                                            .title
                                                                    }
                                                                </h4>
                                                                <p className="text-text-secondary italic leading-relaxed">
                                                                    &ldquo;
                                                                    {
                                                                        insight
                                                                            .insight
                                                                            .content
                                                                    }
                                                                    &rdquo;
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="relative">
                                                    <div
                                                        className={`glass-card p-8 bg-gradient-to-br ${insight.bgGradient}`}
                                                    >
                                                        <div className="space-y-4">
                                                            {insight.metrics.map(
                                                                (
                                                                    metric,
                                                                    metricIndex
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            metricIndex
                                                                        }
                                                                        className="flex justify-between items-center p-4 bg-white/5 rounded-lg"
                                                                    >
                                                                        <span className="text-sm">
                                                                            {
                                                                                metric.label
                                                                            }
                                                                        </span>
                                                                        <span
                                                                            className={`${metric.color} font-bold`}
                                                                        >
                                                                            {
                                                                                metric.value
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevInsight}
                                className="absolute -left-16 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group border border-white/20"
                            >
                                <ChevronLeft className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                            </button>
                            <button
                                onClick={nextInsight}
                                className="absolute -right-16 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group border border-white/20"
                            >
                                <ChevronRight className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Design Partner Program Section */}
                <section className="relative py-32 px-6 sm:px-8 lg:px-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="section-heading mb-8">
                                <span className="gradient-text">
                                    Build the future
                                </span>{" "}
                                with us
                            </h2>
                            <p className="section-subheading max-w-4xl mx-auto">
                                We are inviting a small group of{" "}
                                <span className="text-text-primary font-bold">
                                    five forward-thinking engineering leaders
                                </span>{" "}
                                to join our founding design partner program. As
                                a partner, you will work directly with our
                                founders to shape the roadmap of a
                                category-defining product.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16 mb-16">
                            {/* What you get */}
                            <div className="glass-card p-10 gradient-border">
                                <h3 className="text-3xl font-bold mb-8 text-center">
                                    <span className="gradient-text-primary">
                                        What you get
                                    </span>
                                </h3>
                                <ul className="space-y-6">
                                    {[
                                        "Shape Our Product Roadmap - Partner directly with our founders in monthly strategy sessions.",
                                        "Exclusive Early Access - Be the first to use our platform and all new features.",
                                        "Foundational Partner Pricing - Free access during the design partnership and a permanent discount.",
                                        "Co-Marketing & Case Studies - Build your personal brand as an innovative engineering leader.",
                                    ].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-4 group"
                                        >
                                            <div className="w-6 h-6 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                            <span className="text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Who we're looking for */}
                            <div className="glass-card p-10 gradient-border">
                                <h3 className="text-3xl font-bold mb-8 text-center">
                                    <span className="gradient-text-secondary">
                                        Who we&apos;re looking for
                                    </span>
                                </h3>
                                <ul className="space-y-6">
                                    {[
                                        "Engineering leaders at scaling companies with 50+ engineers.",
                                        "Teams actively using AI coding tools.",
                                        "Organizations struggling with engineering velocity and visibility.",
                                        "Leaders interested in data-driven engineering management.",
                                        "Partners willing to provide feedback and iterate with us.",
                                    ].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-4 group"
                                        >
                                            <div className="w-6 h-6 bg-gradient-warm rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                            <span className="text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="text-center glass-card p-12 gradient-border">
                            <div className="max-w-2xl mx-auto">
                                <h3 className="text-3xl font-bold mb-6">
                                    Ready to transform your engineering process?
                                </h3>
                                <p className="text-text-secondary mb-8 text-lg">
                                    Join an exclusive group of engineering
                                    leaders shaping the future of development
                                    intelligence.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                    <Button
                                        onClick={openCalendlyModal}
                                        className="text-lg px-10 py-5 shadow-glow-lg"
                                    >
                                        Schedule an Intro Call
                                    </Button>

                                    <button
                                        onClick={openWaitlistModal}
                                        className="group text-text-secondary hover:text-text-primary transition-all duration-300 flex items-center gap-2"
                                    >
                                        <span className="underline-offset-4 group-hover:underline">
                                            Join our private waitlist
                                        </span>
                                        <Target className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer onWaitlistClick={openWaitlistModal} />

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
    );
}
