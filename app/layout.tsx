// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export const metadata: Metadata = {
    title: 'Gnaneswara Reddy Ambu - Emergent AI Portfolio',
    description: 'Bridging enterprise engineering with next-gen AI automation',
    keywords: ['AI Engineer', 'Full Stack Developer', 'Java', 'Spring Boot', 'React', 'AWS'],
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