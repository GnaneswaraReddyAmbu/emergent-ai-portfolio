// app/components/Contact.tsx
'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Linkedin, Phone, MapPin, Send, CheckCircle, XCircle } from 'lucide-react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const result = await response.json()

            if (response.ok) {
                setSubmitStatus('success')
                setFormData({ name: '', email: '', subject: '', message: '' })
            } else {
                setSubmitStatus('error')
                console.error('Failed to send email:', result.error)
            }
        } catch (error) {
            setSubmitStatus('error')
            console.error('Error sending email:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const contactMethods = [
        {
            icon: Mail,
            label: 'Email',
            value: 'eswar.javadeveloper@gmail.com',
            href: 'mailto:ambureddy1@gmail.com'
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'Gnaneswara Ambu',
            href: 'https://linkedin.com/in/gnaneswara-ambu-281428159'
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '(510) 320-8797',
            href: 'tel:+15103208797'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Dallas, TX & Tampa, FL',
            href: '#'
        }
    ]

    return (
        <section id="contact" className="py-20 bg-dark-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">
              Get In Touch
            </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Ready to discuss AI innovation, collaboration opportunities, or your next project?
                        Let&apos;s connect and build something amazing together.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-8">
                            Let&apos;s Start a Conversation
                        </h3>

                        <div className="space-y-6 mb-8">
                            {contactMethods.map((method, index) => (
                                <motion.a
                                    key={method.label}
                                    href={method.href}
                                    target={method.label === 'LinkedIn' ? '_blank' : '_self'}
                                    rel={method.label === 'LinkedIn' ? 'noopener noreferrer' : ''}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-4 p-4 bg-dark-800 rounded-xl border border-gray-800 hover:border-secondary/50 transition-all group"
                                >
                                    <div className="p-3 bg-primary/50 rounded-lg border border-secondary/20 group-hover:border-secondary/50 transition-colors">
                                        <method.icon className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">{method.label}</p>
                                        <p className="text-white font-semibold group-hover:text-secondary transition-colors">
                                            {method.value}
                                        </p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-primary to-accent rounded-2xl p-6"
                        >
                            <h4 className="text-white font-bold mb-3">Current Focus</h4>
                            <p className="text-gray-200 text-sm leading-relaxed">
                                I&apos;m currently exploring advanced AI integration patterns, emergent system architectures,
                                and opportunities to bridge enterprise systems with next-generation AI capabilities.
                                Open to discussing innovative projects and research collaborations.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-white font-semibold mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors"
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-white font-semibold mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors"
                                    placeholder="What would you like to discuss?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-white font-semibold mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors resize-none"
                                    placeholder="Tell me about your project, collaboration idea, or anything you'd like to discuss..."
                                />
                            </div>

                            {/* Submit Status */}
                            {submitStatus && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex items-center gap-2 p-4 rounded-lg ${
                                        submitStatus === 'success'
                                            ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                                            : 'bg-red-500/20 border border-red-500/30 text-red-400'
                                    }`}
                                >
                                    {submitStatus === 'success' ? (
                                        <>
                                            <CheckCircle size={20} />
                                            <span>Message sent successfully! I'll get back to you soon.</span>
                                        </>
                                    ) : (
                                        <>
                                            <XCircle size={20} />
                                            <span>Failed to send message. Please try again or email me directly.</span>
                                        </>
                                    )}
                                </motion.div>
                            )}

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                className={`w-full font-bold py-4 px-6 rounded-lg transition-all flex items-center justify-center gap-2 ${
                                    isSubmitting
                                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-secondary to-accent text-dark-900 hover:shadow-lg hover:shadow-secondary/25'
                                }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-dark-900 border-t-transparent rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-16 pt-8 border-t border-gray-800"
                >
                    <p className="text-gray-400">
                        &copy; {new Date().getFullYear()} Gnaneswara Reddy Ambu. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm mt-2">

                    </p>
                </motion.div>
            </div>
        </section>
    )
}