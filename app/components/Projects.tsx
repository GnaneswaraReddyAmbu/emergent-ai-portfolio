// app/components/Projects.tsx
'use client'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Brain, MessageSquare, BarChart3 } from 'lucide-react'
import { TechBadge } from './ui/TechBadge'

const projects = [
    {
        title: 'AI Copilot for Developers',
        description: 'GitHub Copilot + OpenAI integrated bot that auto-generates unit tests, SQL, and code refactors.',
        icon: Brain,
        tech: ['Java', 'Node.js', 'LangChain', 'GPT API'],
        features: [
            'Auto-generates unit tests and SQL queries',
            'Code refactoring and optimization',
            'Integration with popular IDEs',
            'Custom training on codebase patterns'
        ],
        github: '#',
        demo: '#'
    },
    {
        title: 'AI Dispute Analyzer',
        description: 'NLP pipeline to classify disputes using transformer models (Hugging Face + SageMaker).',
        icon: BarChart3,
        tech: ['Python', 'AWS Lambda', 'DynamoDB', 'React', 'Hugging Face'],
        features: [
            'Real-time dispute classification',
            'Transformer model integration',
            'Automated fraud detection',
            'Interactive analytics dashboard'
        ],
        github: '#',
        demo: '#'
    },
    {
        title: 'GenAI Conversational Assistant',
        description: 'Internal chatbot trained on project docs to automate developer queries.',
        icon: MessageSquare,
        tech: ['React', 'FastAPI', 'GPT-4', 'Pinecone'],
        features: [
            'Document-aware responses',
            'Contextual memory',
            'Multi-format file support',
            'Real-time collaboration'
        ],
        github: '#',
        demo: '#'
    }
]

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-dark-800">
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
              AI Innovation & Projects
            </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Exploring the frontiers of emergent AI through practical applications and cutting-edge implementations
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-dark-900 rounded-2xl p-6 border border-gray-800 hover:border-secondary/50 transition-all group"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-primary/50 rounded-xl border border-secondary/20 group-hover:border-secondary/50 transition-colors">
                                    <project.icon className="w-6 h-6 text-secondary" />
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors">
                                    {project.title}
                                </h3>
                            </div>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech, index) => (
                                    <TechBadge
                                        key={tech}
                                        tech={tech}
                                        index={index}
                                        color="bg-secondary/20 text-secondary border-secondary/30"
                                    />
                                ))}
                            </div>

                            <ul className="space-y-2 mb-6">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                        <span className="text-secondary mt-1">•</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex gap-4 pt-4 border-t border-gray-800">
                                <motion.a
                                    href={project.github}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                >
                                    <Github size={18} />
                                    Code
                                </motion.a>
                                <motion.a
                                    href={project.demo}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 text-gray-400 hover:text-secondary transition-colors"
                                >
                                    <ExternalLink size={18} />
                                    Live Demo
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-400 mb-6">
                        Interested in collaborating on AI projects?
                    </p>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 bg-secondary text-dark-900 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-secondary/25 transition-all"
                    >
                        Let&apos;s Build Together
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}