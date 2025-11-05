// app/components/About.tsx
'use client'
import { motion } from 'framer-motion'
import { Brain, Cloud, Code, Shield } from 'lucide-react'

const strengths = [
    {
        icon: Code,
        title: 'Full Stack Development',
        description: 'Java 17/21, Spring Boot, Microservices, React, Angular, Next.js'
    },
    {
        icon: Cloud,
        title: 'Cloud & DevOps',
        description: 'AWS & Azure, Kubernetes, Terraform, CI/CD, Docker'
    },
    {
        icon: Brain,
        title: 'AI Integration',
        description: 'Generative AI, NLP, SageMaker, Hugging Face, LangChain'
    },
    {
        icon: Shield,
        title: 'Security & Compliance',
        description: 'OAuth2, JWT, SAML, PCI-DSS, HIPAA, DevSecOps'
    }
]

export default function About() {
    return (
        <section id="about" className="py-20 bg-dark-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              About Me
            </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        I&apos;m a <span className="text-secondary font-semibold">Full Stack & AI Integration Engineer</span> with over{' '}
                        <span className="text-accent font-semibold">10 years of experience</span> in building enterprise applications,
                        distributed systems, and cloud-native architectures.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white">Core Focus</h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            My work focuses on <span className="text-secondary">emergent intelligence</span> — blending{' '}
                            <span className="text-accent">AI, automation, and scalable engineering</span> to design adaptive
                            systems that think and evolve. I specialize in creating solutions that bridge traditional
                            enterprise architecture with cutting-edge AI capabilities.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {strengths.map((strength, index) => (
                            <motion.div
                                key={strength.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-dark-900 p-6 rounded-xl border border-gray-800 hover:border-secondary/50 transition-all group"
                            >
                                <strength.icon className="w-8 h-8 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                                <h4 className="font-semibold text-white mb-2">{strength.title}</h4>
                                <p className="text-gray-400 text-sm">{strength.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-center"
                >
                    <p className="text-2xl font-light italic">
                        &ldquo;Transforming complex business challenges into intelligent, scalable solutions through
                        the power of emergent AI and robust engineering principles.&rdquo;
                    </p>
                </motion.div>
            </div>
        </section>
    )
}