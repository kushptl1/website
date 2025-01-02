'use client'

import { cn } from '@/styles/lib/utils'
import { monoFont } from '@/styles/fonts/fonts'
import { Github, Twitter, Mail, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface BaseFooterProps {
    color?: string;
    navigationLinks?: React.ReactNode;
    className?: string;
    showToTop?: boolean;
    showSectionName?: boolean;
    showSocialLinks?: boolean;
    showCopyright?: boolean;
}

export function BaseFooter({ 
    color = 'purple', 
    navigationLinks, 
    className,
    showToTop = true,
    showSectionName = true,
    showSocialLinks = true,
    showCopyright = true
}: BaseFooterProps) {
    const socialLinks = [
        { href: "mailto:kushp1@umbc.edu", icon: <Mail className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { href: "https://github.com/kushptl1", icon: <Github className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { href: "https://www.linkedin.com/in/kusptl/", icon: <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" /> }
    ]

    return (
        <footer className={cn("mt-auto pt-12", className)}>
            {/* Super subtle gradient line */}
            <div className="relative w-full mb-8">
                <div className="absolute inset-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400/20 to-transparent" />
            </div>

            <div className={cn(
                monoFont.className,
                "w-full max-w-screen-md mx-auto px-4",
                "flex flex-col items-center gap-4 sm:gap-6",
                "text-sm text-muted-foreground/60"
            )}>
                {/* Navigation Links - First Row */}
                {navigationLinks && (showToTop || showSectionName) && (
                    <div className="flex flex-wrap items-center justify-center gap-x-3">
                        {navigationLinks}
                    </div>
                )}

                {/* Social Links and Copyright - Second Row */}
                {(showSocialLinks || showCopyright) && (
                    <div className="flex items-center justify-center gap-6 sm:gap-8">
                        {/* Social Links */}
                        {showSocialLinks && (
                            <div className="flex items-center gap-6">
                                {socialLinks.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ 
                                            duration: 0.2,
                                            delay: index * 0.1 
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                                            className={cn(
                                                "block text-purple-400/80 hover:text-purple-400",
                                                "transition-all duration-200",
                                                "-m-2 p-2",
                                                "hover:bg-purple-400/10 rounded-md",
                                                "hover:shadow-md hover:shadow-purple-500/5"
                                            )}
                                        >
                                            {link.icon}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {/* Copyright */}
                        {showCopyright && (
                            <motion.span 
                                className="text-[10px] sm:text-xs text-purple-400"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                © {new Date().getFullYear()} kush
                            </motion.span>
                        )}
                    </div>
                )}
            </div>

            {/* Bottom padding */}
            <div className="h-8" />
        </footer>
    )
} 