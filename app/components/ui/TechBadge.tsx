// app/components/ui/TechBadge.tsx
'use client'
import { motion } from 'framer-motion'

interface TechBadgeProps {
    tech: string
    index: number
    color: string
}

export function TechBadge({ tech, index, color }: TechBadgeProps) {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, y: -2 }}
            className={`px-3 py-1 rounded-full text-sm font-medium border ${color} transition-all cursor-default`}
        >
            {tech}
        </motion.span>
    )
}