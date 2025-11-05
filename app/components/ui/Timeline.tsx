// app/components/ui/Timeline.tsx
'use client'
import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

interface TimelineItem {
    company: string
    role: string
    period: string
    location: string
    tech: string[]
    highlights: string[]
}

interface TimelineProps {
    items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
    return (
        <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-secondary to-accent"></div>

            <div className="space-y-12">
                {items.map((item, index) => (
                    <motion.div
                        key={item.company}
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
                                        {item.company}
                                    </h3>
                                    <span className="text-secondary font-semibold">{item.role}</span>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={16} />
                                        <span>{item.period}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin size={16} />
                                        <span>{item.location}</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {item.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-primary/50 rounded-full text-sm text-secondary border border-secondary/20"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>

                                <ul className="space-y-2">
                                    {item.highlights.map((highlight, i) => (
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
    )
}