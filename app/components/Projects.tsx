// app/components/Projects.tsx
'use client'
import { motion } from 'framer-motion'
import { Brain, Cloud, Search } from 'lucide-react'
import { TechBadge } from './ui/TechBadge'

const projects = [
    {
        title: 'CBRE Innovation Studio',
        description: 'Enterprise multi-cloud engineering platform for secure AI and data workspaces, lifecycle operations, React UX, and governed model access.',
        icon: Brain,
        tech: ['FastAPI', 'React', 'TypeScript', 'Coder', 'PostgreSQL', 'Azure OpenAI', 'LiteLLM'],
        features: [
            'Project creation, workspace start/stop controls, extension requests, application provisioning, and usage visibility',
            'FastAPI services with async SQLAlchemy, Alembic, PostgreSQL, background polling, structured logs, and correlation IDs',
            'React, TypeScript, Vite, Zustand, Axios screens with guarded routes, reusable components, and clear loading/error states',
            'Snowflake OAuth, Azure OpenAI through LiteLLM, Coder templates, and cloud guardrails across AWS, Azure, and GCP'
        ]
    },
    {
        title: 'Enterprise Disputes Platform',
        description: 'High-volume dispute-processing and case-management platform combining Java services, event workflows, search, cloud deployments, and web interfaces.',
        icon: Search,
        tech: ['Java 17/21', 'Spring Boot', 'React', 'Angular', 'Kafka', 'Elasticsearch', 'AWS'],
        features: [
            'REST and GraphQL APIs with validation, response contracts, exception handling, pagination, and security controls',
            'Kafka workflows with retry handling, idempotency, consumer-group tuning, dead-letter scenarios, and traceability',
            'React and Angular dashboards, case details, search, filters, workflow actions, and operational views',
            'AWS ECS/EKS, Lambda, SQS, S3, DynamoDB, RDS, IAM, CloudWatch, Splunk, and ELK troubleshooting'
        ]
    },
    {
        title: 'Digital Banking Microservices',
        description: 'Secure online-banking, trading, payments, testing, and real-time update capabilities across Spring Boot APIs and React/Angular applications.',
        icon: Cloud,
        tech: ['Java 11/17', 'Spring Boot', 'React', 'Angular', 'Kafka', 'Redis', 'Azure AKS'],
        features: [
            'Spring Security with OAuth2, JWT, API gateway policies, role-based authorization, and customer/internal-user access controls',
            'Reusable React and Angular components, routing, forms, state management, and cross-browser responsive layouts',
            'Kafka, WebSocket, Redis, Cassandra, MySQL, Azure AKS, App Service, Functions, Cosmos DB, and Key Vault integrations',
            'Fortify, Black Duck, SonarQube, Prometheus, Grafana, ELK, Splunk, CI/CD, Terraform, and release-readiness support'
        ]
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
                        Representative enterprise platforms across AI workspaces, dispute processing, digital banking,
                        and full-stack application modernization
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

                            <div className="pt-4 border-t border-gray-800">
                                <p className="text-gray-500 text-sm">
                                    Enterprise delivery experience with confidential client systems.
                                </p>
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
                        Interested in full-stack platforms, cloud-native microservices, or AI workspace engineering?
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
