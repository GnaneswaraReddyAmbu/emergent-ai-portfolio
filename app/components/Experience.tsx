// app/components/Experience.tsx
'use client'
import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { Timeline } from './ui/Timeline'

const experiences = [
    {
        company: 'JPMC',
        role: 'Senior Full Stack Developer',
        period: 'Apr 2024 – Present',
        location: 'Tampa, FL',
        tech: ['Java 21', 'Spring Boot', 'AWS', 'React', 'GraphQL', 'SageMaker'],
        highlights: [
            'Architected dispute resolution platform integrating AI for predictive categorization and fraud analytics',
            'Built microservices on AWS with auto-scaling ECS clusters and CI/CD automation',
            'Developed React dashboards for real-time data visualization and AI insights',
            'Implemented ML pipelines with SageMaker for model training and inference'
        ]
    },
    {
        company: 'US Bank',
        role: 'Senior Full Stack Developer',
        period: 'Sep 2022 – Mar 2023',
        location: 'Irving, TX',
        tech: ['Java 17', 'Spring Boot', 'React', 'Angular', 'Azure AKS', 'GraphQL'],
        highlights: [
            'Developed GenAI-powered NLP modules for case summarization and recommendation',
            'Created AI copilots to auto-generate SQL and optimize Java code',
            'Built React/Angular SPAs integrated with GraphQL APIs',
            'Automated CI/CD pipelines using Jenkins, Docker, and Terraform'
        ]
    },
    {
        company: 'TransAmerica',
        role: 'Lead Full Stack Developer',
        period: 'Jul 2021 – Aug 2022',
        location: 'Remote',
        tech: ['Java 11', 'Spring Boot', 'AWS', 'Angular', 'React', 'Python'],
        highlights: [
            'Developed financial management application for retirement funds and loan services',
            'Built microservices with Spring Boot & Hibernate, secured APIs with JWT',
            'Deployed workloads to AWS ECS with Terraform IaC automation',
            'Integrated asynchronous processing using Kafka and batch reporting systems'
        ]
    },
    {
        company: 'AT&T',
        role: 'Full Stack Developer',
        period: 'Feb 2018 – Jul 2021',
        location: 'Plano, TX',
        tech: ['Java 8', 'Spring Boot', 'React', 'Angular', 'MongoDB', 'Kafka'],
        highlights: [
            'Enhanced OPUS Retail & ATLAS Order Management systems using microservices',
            'Integrated Kafka messaging for event-driven retail data processing',
            'Implemented JWT-based authentication and data encryption',
            'Automated deployments with Jenkins + Docker + Kubernetes pipelines'
        ]
    },
    {
        company: 'Wipro / Nike',
        role: 'Full Stack Developer',
        period: 'Aug 2016 – Jan 2018',
        location: 'Beaverton, OR',
        tech: ['Java 8', 'Spring MVC', 'Angular', 'Node.js', 'MongoDB', 'AWS'],
        highlights: [
            'Built global offer management platform integrating multiple markets',
            'Developed SPA front-ends using Angular & Node.js',
            'Deployed backend APIs on AWS Elastic Beanstalk',
            'Applied Spring Security and Hibernate ORM for secure data operations'
        ]
    },
    {
        company: 'Fujitsu',
        role: 'Java Developer',
        period: 'Jun 2014 – Apr 2015',
        location: 'Bangalore, India',
        tech: ['J2EE', 'Struts2', 'Spring', 'Hibernate', 'WebLogic'],
        highlights: [
            'Designed MVC architecture integrating Spring + Struts2',
            'Developed DAO, service, and controller layers for enterprise modules',
            'Managed full SDLC, from requirements to deployment',
            'Built and tested backend modules using JUnit and ANT'
        ]
    }
]

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-dark-900">
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
              Professional Experience
            </span>
                    </h2>
                    <p className="text-xl text-gray-300">
                        10+ years of enterprise software development and AI integration
                    </p>
                </motion.div>
                <Timeline items={experiences} />
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-secondary to-accent"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative flex ${
                                    index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                                } items-center`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-dark-900 z-10"></div>

                                {/* Content */}
                                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                                }`}>
                                    <div className="bg-dark-800 rounded-2xl p-6 border border-gray-800 hover:border-secondary/50 transition-all group">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                                            <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors">
                                                {exp.company}
                                            </h3>
                                            <span className="text-secondary font-semibold">{exp.role}</span>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar size={16} />
                                                <span>{exp.period}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin size={16} />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {exp.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-primary/50 rounded-full text-sm text-secondary border border-secondary/20"
                                                >
                          {tech}
                        </span>
                                            ))}
                                        </div>

                                        <ul className="space-y-2">
                                            {exp.highlights.map((highlight, i) => (
                                                <li key={i} className="text-gray-300 flex items-start gap-2">
                                                    <span className="text-secondary mt-1.5">▸</span>
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}