// app/page.tsx
'use client'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navigation />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
        </main>
    )
}