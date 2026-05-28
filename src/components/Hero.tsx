import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Code2, Cpu, Globe } from 'lucide-react'
import { useMagnetic } from '../hooks/useMagnetic'

export const Hero: React.FC = () => {
  const viewProjectsRef = useMagnetic(0.2)
  const contactMeRef = useMagnetic(0.2)

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative px-6 py-20 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="blur-glow w-[350px] h-[350px] bg-cyber-cyan/10 top-[20%] left-[15%]" />
      <div className="blur-glow w-[400px] h-[400px] bg-cyber-purple/10 bottom-[20%] right-[10%]" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">
        
        {/* Intro copy: Left Column */}
        <div className="lg:col-span-7 text-left space-y-8 select-none order-2 lg:order-1">
          
          <div className="space-y-4">
            {/* Status indicator */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/5 text-[10px] font-semibold uppercase tracking-wider text-cyber-cyan font-mono"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse" />
              AVAILABLE FOR SUMMER INTERNSHIPS & CONTRACTS
            </motion.div>

            {/* Main Headlines */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-[1.05] font-syne">
              Hi, I'm <span className="bg-gradient-to-r from-cyber-cyan via-electric-blue to-cyber-purple bg-clip-text text-transparent">Ashwin</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-white/80 font-bold tracking-tight font-display">
              Full-Stack Developer & UI/UX Designer
            </h2>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base md:text-lg text-white/60 max-w-xl font-normal leading-relaxed font-sans"
          >
            I build robust, production-ready web products and craft immersive digital identities. Combining scalable backend infrastructure with fluid, human-centric UI/UX design.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4 items-center"
          >
            {/* Magnetic CTA 1 */}
            <div ref={viewProjectsRef} className="inline-block">
              <a
                href="#projects"
                className="relative inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-black bg-gradient-to-r from-cyber-cyan to-electric-blue rounded-xl hover:shadow-[0_0_30px_rgba(0,242,254,0.4)] transition-all duration-300"
                data-cursor="interactive"
              >
                View Projects
              </a>
            </div>

            {/* Magnetic CTA 2 */}
            <div ref={contactMeRef} className="inline-block">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300"
                data-cursor="interactive"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Micro stats banner */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex items-center gap-6 pt-6 text-[10px] font-mono tracking-widest text-white/50 border-t border-white/5"
          >
            <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-cyber-cyan" /> FULL-STACK STACK</span>
            <span className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-cyber-purple" /> MODERN ALGORITHMS</span>
            <span className="flex items-center gap-1.5"><Code2 className="w-3.5 h-3.5 text-electric-blue" /> CLEAN CODE</span>
          </motion.div>

        </div>

        {/* Profile Visualization Graphic: Right Column */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative flex items-center justify-center"
          >
            {/* Background glowing rings */}
            <div className="absolute inset-0 rounded-full border border-white/5 orbit-rotate-cw" />
            <div className="absolute inset-8 rounded-full border border-cyber-cyan/10 orbit-rotate-ccw" />
            <div className="absolute inset-16 rounded-full border border-cyber-purple/5 orbit-rotate-cw-fast" />

            {/* Glowing neon core */}
            <div className="absolute w-[180px] h-[180px] rounded-full bg-gradient-to-tr from-cyber-purple/20 to-cyber-cyan/20 blur-xl animate-pulse" />

            {/* SVG HUD Visualization */}
            <svg 
              viewBox="0 0 200 200" 
              className="w-full h-full relative z-10 p-4 drop-shadow-[0_0_30px_rgba(0,242,254,0.15)]"
            >
              {/* Outer Dash Ring */}
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="rgba(0, 242, 254, 0.2)"
                strokeWidth="1"
                strokeDasharray="6, 8"
                className="origin-center"
                style={{ animation: 'orbit-cw 60s linear infinite' }}
              />

              {/* Cyan Pulse Arc */}
              <circle
                cx="100"
                cy="100"
                r="72"
                fill="none"
                stroke="#00f2fe"
                strokeWidth="1.5"
                strokeDasharray="40, 100"
                className="origin-center"
                style={{ animation: 'orbit-ccw 20s linear infinite' }}
              />

              {/* Purple Pulse Arc */}
              <circle
                cx="100"
                cy="100"
                r="64"
                fill="none"
                stroke="#7f00ff"
                strokeWidth="2"
                strokeDasharray="80, 80"
                className="origin-center"
                style={{ animation: 'orbit-cw 15s linear infinite' }}
              />

              {/* Central Geometric Avatar Icon representation */}
              <g className="origin-center" style={{ animation: 'orbit-ccw 40s linear infinite' }}>
                {/* Outer Hexagon vertices */}
                <polygon
                  points="100,50 143,75 143,125 100,150 57,125 57,75"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.15)"
                  strokeWidth="1"
                />
                {/* Inner Hexagon */}
                <polygon
                  points="100,60 134,80 134,120 100,140 66,120 66,80"
                  fill="none"
                  stroke="#00f2fe"
                  strokeWidth="1"
                  opacity="0.6"
                />
              </g>

              {/* Network nodes */}
              <circle cx="100" cy="50" r="3" fill="#00f2fe" />
              <circle cx="143" cy="125" r="3" fill="#7f00ff" />
              <circle cx="57" cy="125" r="3" fill="#ffffff" />
              <circle cx="100" cy="100" r="6" fill="#ffffff" className="animate-ping" />
              <circle cx="100" cy="100" r="4" fill="#00f2fe" />
            </svg>

            {/* Corner Bracket decorations */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/20" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/20" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/20" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/20" />
          </motion.div>
        </div>

      </div>

      {/* Floating Scroll Cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 select-none pointer-events-none z-10">
        <span className="text-[9px] tracking-[0.3em] font-mono text-white/40 uppercase">SCROLL ENGINE</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="p-1 rounded-full border border-white/10"
        >
          <ArrowDown className="w-3.5 h-3.5 text-cyber-cyan" />
        </motion.div>
      </div>
    </section>
  )
}
