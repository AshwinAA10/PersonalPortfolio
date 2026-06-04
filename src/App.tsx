import { useState } from 'react'
import { Preloader } from './components/Preloader'
import { CanvasBackground } from './components/CanvasBackground'
import { CustomCursor } from './components/CustomCursor'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { GithubContributions } from './components/GithubContributions'
import { Testimonials } from './components/Testimonials'
import { RecruiterCTA } from './components/RecruiterCTA'
import { CreativeShowcase } from './components/CreativeShowcase'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { initPhysics, resetPhysics } from './utils/physics'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isChaosActive, setIsChaosActive] = useState(false)

  const handleToggleChaos = () => {
    if (isChaosActive) {
      resetPhysics()
      setIsChaosActive(false)
    } else {
      initPhysics()
      setIsChaosActive(true)
    }
  }

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
            <Stats />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <GithubContributions />
            <Testimonials />
            <RecruiterCTA />
            <CreativeShowcase />
            <Contact />
          </main>

          {/* Footer controls */}
          <Footer />

          {/* Chaos Mode Widget Floating Button */}
          <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center gap-3 font-mono text-xs">
            {isChaosActive ? (
              <button
                onClick={handleToggleChaos}
                className="px-4 py-2.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30 rounded-xl transition-all duration-300 font-bold uppercase tracking-wider backdrop-blur-md shadow-lg"
                data-cursor="interactive"
              >
                Reset Layout
              </button>
            ) : (
              <button
                onClick={handleToggleChaos}
                className="px-4 py-2.5 bg-cyber-cyan/15 hover:bg-cyber-cyan/25 text-cyber-cyan border border-cyber-cyan/30 rounded-xl transition-all duration-300 font-bold uppercase tracking-wider backdrop-blur-md shadow-lg"
                data-cursor="interactive"
              >
                Activate Chaos Mode ⚡
              </button>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default App
