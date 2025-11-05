// app/components/Education.tsx
'use client'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

const education = [
    {
        degree: 'MBA',
        school: 'University of the Cumberlands, KY',
        period: '2017 – 2020',
        description: 'Master of Business Administration with focus on technology management and strategic leadership.',
        highlights: [
            'Strategic Technology Management',
            'Business Analytics',
            'Leadership & Organizational Behavior'
        ]
    },
    {
        degree: 'M.S. in Electrical Engineering',
        school: 'Northwestern Polytechnic University, CA',
        period: '2015 – 2016',
        description: 'Master of Science in Electrical Engineering with specialization in signal processing and systems design.',
        highlights: [
            'Advanced Digital Signal Processing',
            'Systems Engineering',
            'Embedded Systems Design'
        ]
    },
    {
        degree: 'B.Tech in Electronics & Communication',
        school: 'JNTUA, India',
        period: '2010 – 2014',
        description: 'Bachelor of Technology with comprehensive foundation in electronics, communication systems, and computer architecture.',
        highlights: [
            'Digital Electronics & Microprocessors',
            'Communication Systems',
            'Computer Architecture & Programming'
        ]
    }
]

export default function Education() {
    return (
        <section id="education" className="py-20 bg-dark-800">
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
              Education
            </span>
                    </h2>
                    <p className="text-xl text-gray-300">
                        Building strong academic foundations for technical innovation
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.degree}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-dark-900 rounded-2xl p-6 border border-gray-800 hover:border-secondary/50 transition-all group"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-primary/50 rounded-xl border border-secondary/20 group-hover:border-secondary/50 transition-colors">
                                    <GraduationCap className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-gray-400">{edu.school}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-400 mb-4 text-sm">
                                <div className="flex items-center gap-1">
                                    <Calendar size={16} />
                                    <span>{edu.period}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MapPin size={16} />
                                    <span>{edu.school.split(', ').pop()}</span>
                                </div>
                            </div>

                            <p className="text-gray-300 mb-4 leading-relaxed">
                                {edu.description}
                            </p>

                            <div className="space-y-2">
                                <h4 className="text-white font-semibold text-sm">Key Focus Areas:</h4>
                                <ul className="space-y-1">
                                    {edu.highlights.map((highlight, i) => (
                                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                            <span className="text-secondary mt-1.5">▸</span>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Continuous Learning Philosophy
                        </h3>
                        <p className="text-gray-200 text-lg leading-relaxed">
                            &ldquo;In the rapidly evolving field of AI and software engineering, continuous learning is not just
                            an advantage—it&apos;s a necessity. My educational journey reflects a commitment to staying at the
                            forefront of technology while building strong foundational knowledge that enables innovative solutions.&rdquo;
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}