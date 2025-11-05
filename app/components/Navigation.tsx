// app/components/Navigation.tsx
'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2, Brain } from 'lucide-react'

const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)

            // Update active section based on scroll position
            const sections = navItems.map(item => item.href.substring(1))
            const current = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })
            setActiveSection(current || '')
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                isScrolled
                    ? 'bg-dark-900/90 backdrop-blur-xl border-b border-white/10 shadow-2xl'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-3"
                    >
                        <div className="relative">
                            <div className="w-10 h-10 bg-gradient-to-r from-secondary to-accent rounded-xl flex items-center justify-center">
                                <Brain className="w-6 h-6 text-white" />
                            </div>
                            <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-accent rounded-xl blur opacity-30"></div>
                        </div>
                        <div>
                            <div className="text-xl font-bold text-gradient bg-gradient-to-r from-secondary to-accent">
                                Gnaneswara Reddy Ambu
                            </div>
                            <div className="text-xs text-gray-400 -mt-1">Software Developer</div>
                        </div>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                    activeSection === item.href.substring(1)
                                        ? 'text-white bg-gradient-to-r from-secondary/20 to-accent/20 border border-secondary/30'
                                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                {item.name}
                                {activeSection === item.href.substring(1) && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-lg border border-secondary/30 -z-10"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-secondary/50 transition-all"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="py-4 border-t border-white/10 bg-dark-900/95 backdrop-blur-xl rounded-b-2xl">
                                <div className="flex flex-col space-y-2">
                                    {navItems.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`px-4 py-3 rounded-lg font-medium transition-all ${
                                                activeSection === item.href.substring(1)
                                                    ? 'text-white bg-gradient-to-r from-secondary/20 to-accent/20 border border-secondary/30'
                                                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                                            }`}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    )
}