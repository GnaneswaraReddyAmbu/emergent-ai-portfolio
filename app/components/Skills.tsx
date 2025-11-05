// app/components/Skills.tsx
'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { TechBadge } from './ui/TechBadge'

const skillCategories = [
    {
        name: 'Languages',
        skills: ['Java 17/21', 'Python', 'TypeScript', 'JavaScript', 'SQL'],
        color: 'from-blue-500 to-cyan-500'
    },
    {
        name: 'Frontend',
        skills: ['React 18+', 'Angular 14+', 'Next.js', 'Redux', 'Tailwind CSS'],
        color: 'from-green-500 to-emerald-500'
    },
    {
        name: 'Backend',
        skills: ['Spring Boot', 'Node.js', 'Express.js', 'GraphQL', 'REST APIs'],
        color: 'from-purple-500 to-pink-500'
    },
    {
        name: 'Cloud & DevOps',
        skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
        color: 'from-orange-500 to-red-500'
    },
    {
        name: 'AI/ML',
        skills: ['SageMaker', 'Azure ML', 'spaCy', 'Hugging Face', 'LangChain'],
        color: 'from-yellow-500 to-orange-500'
    },
    {
        name: 'Database',
        skills: ['PostgreSQL', 'MySQL', 'Oracle', 'DynamoDB', 'MongoDB', 'Redis'],
        color: 'from-indigo-500 to-purple-500'
    },
    {
        name: 'Testing',
        skills: ['JUnit', 'Mockito', 'Jest', 'Cypress', 'JMeter', 'Cucumber'],
        color: 'from-teal-500 to-blue-500'
    },
    {
        name: 'Security',
        skills: ['OAuth2', 'JWT', 'SAML', 'DevSecOps', 'OWASP', 'PCI-DSS', 'HIPAA'],
        color: 'from-red-500 to-pink-500'
    }
]

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState(0)

    return (
        <section id="skills" className="py-20 bg-dark-900">
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
              Technical Skills
            </span>
                    </h2>
                    <p className="text-xl text-gray-300">
                        Comprehensive expertise across the full technology stack
                    </p>
                </motion.div>

                {/* Category Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {skillCategories.map((category, index) => (
                        <motion.button
                            key={category.name}
                            onClick={() => setActiveCategory(index)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                                activeCategory === index
                                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                                    : 'bg-dark-800 text-gray-300 hover:bg-dark-700 border border-gray-800'
                            }`}
                        >
                            {category.name}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {skillCategories[activeCategory].skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-dark-800 rounded-xl p-6 text-center border border-gray-800 hover:border-secondary/50 transition-all group"
                        >
                            <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r ${skillCategories[activeCategory].color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <span className="text-white font-bold text-lg">
                  {skill.split(' ')[0].charAt(0)}
                </span>
                            </div>
                            <h3 className="text-white font-semibold group-hover:text-secondary transition-colors">
                                {skill}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Experience Level Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-dark-800 rounded-2xl p-8 border border-gray-800"
                >
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">
                        Expertise Levels
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { skill: 'Java/Spring Boot', level: 95 },
                            { skill: 'AWS/Azure Cloud', level: 90 },
                            { skill: 'React/Angular', level: 88 },
                            { skill: 'AI/ML Integration', level: 85 }
                        ].map((item, index) => (
                            <div key={item.skill} className="text-center">
                                <div className="relative w-20 h-20 mx-auto mb-4">
                                    <svg className="w-full h-full" viewBox="0 0 36 36">
                                        <path
                                            d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#1e293b"
                                            strokeWidth="3"
                                        />
                                        <path
                                            d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="url(#gradient)"
                                            strokeWidth="3"
                                            strokeDasharray={`${item.level}, 100`}
                                        />
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#00d4ff" />
                                                <stop offset="100%" stopColor="#805ad5" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">{item.level}%</span>
                                    </div>
                                </div>
                                <p className="text-gray-300 font-semibold">{item.skill}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}