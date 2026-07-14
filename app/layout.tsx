// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export const metadata: Metadata = {
    title: 'Gnaneswara Reddy Ambu - Lead Full Stack Developer & AI Engineer',
    description: 'Lead Full Stack Developer and AI Engineer specializing in Java, Spring Boot, Python, FastAPI, React, Angular, cloud-native microservices, and governed AI platforms.',
    keywords: ['Lead Full Stack Developer', 'AI Engineer', 'Java', 'Spring Boot', 'Python', 'FastAPI', 'React', 'Angular', 'Microservices', 'AWS', 'Azure', 'GCP'],
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.variable}>
        <body className={`${inter.className} antialiased`}>
        {children}
        </body>
        </html>
    )
}
