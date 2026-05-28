import { useState } from 'react'
import { Preloader } from './components/Preloader'
import { CanvasBackground } from './components/CanvasBackground'
import { CustomCursor } from './components/CustomCursor'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { CreativeShowcase } from './components/CreativeShowcase'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      {/* Cinematic entry Preloader */}
      <Preloader onComplete={() => setIsLoaded(true)} />

      {/* Main Experience layout */}
      {isLoaded && (
        <div className="relative min-h-screen">
          {/* Custom mouse ring */}
          <CustomCursor />

          {/* Interactive background particle grids */}
          <CanvasBackground />

          {/* Navigation floating shell */}
          <Navbar />

          <main className="relative z-10 w-full overflow-hidden">
            {/* Sections */}
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <CreativeShowcase />
            <Contact />
          </main>

          {/* Footer controls */}
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
