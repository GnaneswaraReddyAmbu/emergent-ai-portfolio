// app/components/Hero.tsx
'use client'
import { motion } from 'framer-motion'
import { ChevronDown, Mail, Linkedin, Phone, Github } from 'lucide-react'

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-dark-900 via-primary to-accent">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 neural-network"></div>

            {/* Floating particles */}
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-secondary/20 to-accent/20"
                        style={{
                            width: Math.random() * 100 + 50,
                            height: Math.random() * 100 + 50,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, Math.random() * 20 - 10, 0],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-gradient bg-gradient-to-r from-white via-secondary to-accent">
              Gnaneswara
            </span>
                        <br />
                        <span className="text-gradient bg-gradient-to-r from-secondary to-accent">
              Reddy Ambu
            </span>
                    </h1>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 font-light"
                >
                    Bridging <span className="text-secondary font-semibold">enterprise engineering</span> with{' '}
                    <span className="text-accent font-semibold">next-gen AI automation</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto italic font-light"
                >
                    &ldquo;From code to cognition — I build systems that learn.&rdquo;
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative bg-gradient-to-r from-secondary to-accent text-dark-900 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-secondary/25 transition-all duration-300 overflow-hidden"
                    >
                        <span className="relative z-10">Start a Project</span>
                        <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    </motion.a>

                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group border-2 border-secondary text-secondary px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-sm hover:bg-secondary/10 transition-all duration-300"
                    >
                        View My Work
                    </motion.a>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-wrap justify-center gap-6 text-gray-300 mb-12"
                >
                    {[
                        { icon: Mail, text: 'eswar.javadeveloper@gmail.com', href: 'mailto:eswar.javadeveloper@gmail.com' },
                        { icon: Linkedin, text: 'LinkedIn', href: 'https://linkedin.com/in/gnaneswara-ambu-281428159' },
                        { icon: Phone, text: '(510) 320-8797', href: 'tel:+15103208797' },
                        { icon: Github, text: 'GitHub', href: 'https://github.com/gnaneswara' },
                    ].map((item, index) => (
                        <motion.a
                            key={item.text}
                            href={item.href}
                            target={item.text === 'LinkedIn' || item.text === 'GitHub' ? '_blank' : '_self'}
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-secondary/50 transition-all duration-300"
                        >
                            <item.icon size={18} className="text-secondary" />
                            <span>{item.text}</span>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="text-gray-400 text-sm">Scroll to explore</span>
                        <ChevronDown size={24} className="text-secondary" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}