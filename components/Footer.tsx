import { Twitter, Target } from "lucide-react";

interface FooterProps {
    onWaitlistClick: () => void;
}

export default function Footer({ onWaitlistClick }: FooterProps) {
    return (
        <footer className="glass-card border-t border-white/10 mt-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                    {/* Logo & Copyright */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-xl font-bold gradient-text mb-2">
                            StellarID
                        </h3>
                        <p className="text-text-muted text-sm">
                            © 2025 StellarID. All rights reserved.
                        </p>
                    </div>

                    {/* Waitlist Button & Social Links */}
                    <div className="flex items-center space-x-6 mt-6 sm:mt-0">
                        <button 
                            onClick={onWaitlistClick}
                            className="group text-text-secondary hover:text-text-primary transition-all duration-300 flex items-center gap-2"
                        >
                            <span className="underline-offset-4 group-hover:underline">Join our waitlist</span>
                            <Target className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                        <a
                            href="https://x.com/stellarIDxyz"
                            className="text-text-muted hover:text-text-primary transition-all duration-300 hover:scale-110"
                            aria-label="Twitter"
                            target="_blank"
                        >
                            <Twitter size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
