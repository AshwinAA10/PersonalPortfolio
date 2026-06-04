import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PreloaderProps {
  onComplete: () => void
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [statusIndex, setStatusIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const statusLogs = [
    'INITIALIZING SYSTEM CORES...',
    'RESOLVING ASSETS & GRAPHICS...',
    'ESTABLISHING GRID INTERACTIVE MESHES...',
    'LOADING ASHWIN\'S BIO CHRONOLOGY...',
    'RENDER PIPELINE READY.'
  ]

  useEffect(() => {
    // Progress interval
    const duration = 2200 // 2.2 seconds total loading
    const intervalTime = 30
    const steps = duration / intervalTime
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const nextProgress = Math.min(100, Math.floor((currentStep / steps) * 100))
      setProgress(nextProgress)

      // Cycle status logs based on progress range
      if (nextProgress < 20) setStatusIndex(0)
      else if (nextProgress < 50) setStatusIndex(1)
      else if (nextProgress < 75) setStatusIndex(2)
      else if (nextProgress < 95) setStatusIndex(3)
      else setStatusIndex(4)

      if (currentStep >= steps) {
        clearInterval(timer)
        setTimeout(() => {
          setIsLoaded(true)
          setTimeout(onComplete, 600) // Call onComplete after exit animations finish
        }, 300)
      }
    }, intervalTime)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black font-display selection:bg-transparent"
        >
          {/* Noise / grid backdrop */}
          <div className="absolute inset-0 noise-overlay opacity-[0.03] pointer-events-none" />
          
          <div className="w-[300px] md:w-[450px] space-y-6 relative z-10">
            {/* System Status header */}
            <div className="flex items-center justify-between text-xs tracking-[0.2em] text-white/40">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyber-cyan rounded-full animate-ping" />
                SYSTEM RUNTIME
              </span>
              <span>v1.0.0_PROD</span>
            </div>

            {/* Main Progress Indicator */}
            <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden relative">
              <motion.div 
                className="h-full bg-gradient-to-r from-cyber-purple via-cyber-cyan to-electric-blue"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Countdown & Status message */}
            <div className="flex items-end justify-between">
              <div className="text-left">
                <p className="text-[10px] tracking-[0.3em] text-white/30 uppercase mb-1">STAGING COMPONENT</p>
                <div className="text-xs font-mono text-cyber-cyan tracking-wider h-5 flex items-center">
                  <span className="text-white/45 font-sans mr-2">›</span>
                  {statusLogs[statusIndex]}
                </div>
              </div>
              
              <div className="text-5xl font-extrabold tracking-tighter text-white font-syne flex items-baseline">
                {progress}
                <span className="text-xs text-cyber-cyan font-normal font-sans ml-1">%</span>
              </div>
            </div>
          </div>

          {/* Glowing bottom grid bar */}
          <div className="absolute bottom-10 left-10 text-[9px] tracking-[0.4em] text-white/20 select-none hidden md:block">
            ASHWIN PORTFOLIO // DIGITALLY CRAFTED
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
